import * as fs from 'fs';
import { inst_set, directive_set } from './utils';
import { opcode_table, funct_table, reg_table } from './utils';

enum field_set { data, text };

export function Assemble(file_dir: string, file_name: string): string {
    console.log('Assembling');
    var full_path = file_dir + file_name;
    var assembled_path = file_dir + file_name.substring(0, file_name.lastIndexOf('.') + 1) + 'hex';
    var data_cursor = 0x10010000, text_cursor = 0x0040000;

    var label_table = new Map<string, number>();
    try {
        var field: field_set = field_set.data;
        var data_out: string[] = [];
        var text_out: string[] = [];
        var in_str = fs.readFileSync(full_path, 'utf-8');
        var in_arr = in_str.replace(/#.*?\n|\t|\n|#.*?/g, ' ').replace(/:/g, ': ').replace(/(^\s*)|(\s*$)/g, '').split(/\s+/);
        in_arr.forEach((val, idx) => {
            if (val === '.data') {
                if (idx < in_arr.length - 1 && in_arr[idx + 1][0] === '0') {
                    data_cursor = parseInt(in_arr[idx], 16);
                }
                field = field_set.data;
            } else if (val === '.text') {
                if (idx < in_arr.length - 1 && in_arr[idx + 1][0] === '0') {
                    text_cursor = parseInt(in_arr[idx], 16);
                }
                field = field_set.text;
            } else if (val === '.byte') {
                data_cursor += 1;
            } else if (val === '.half') {
                data_cursor += 2;
            } else if (val === '.word') {
                data_cursor += 4;
            } else if (inst_set.includes(val)) {
                text_cursor += 4;
            } else if (val[val.length - 1] === ':') {
                label_table.set(val.substring(0, val.length - 1), field === field_set.data ? data_cursor : text_cursor);
            }
        });

        for (let idx = 0; idx < in_arr.length;) {
            if (directive_set.includes(in_arr[idx])) {
                if (in_arr[idx] === '.data' && idx < in_arr.length - 1 && in_arr[idx + 1][0] === '0') {
                    idx += 1;
                } else if (in_arr[idx] === '.text' && idx < in_arr.length - 1 && in_arr[idx + 1][0] === '0') {
                    idx += 1;
                } else if (in_arr[idx] === '.byte') {
                    idx += 1;
                    data_out.push(parseInt(in_arr[idx]).toString(16).padStart(2, '0'));
                } else if (in_arr[idx] === '.half') {
                    idx += 1;
                    var half_num = parseInt(in_arr[idx]).toString(16).padStart(4, '0');
                    data_out.push(half_num.substring(2, 3));
                    data_out.push(half_num.substring(0, 1));
                } else if (in_arr[idx] === '.word') {
                    idx += 1;
                    var word_num = parseInt(in_arr[idx]).toString(16).padStart(8, '0');
                    data_out.push(word_num.substring(6, 7));
                    data_out.push(word_num.substring(4, 5));
                    data_out.push(word_num.substring(2, 3));
                    data_out.push(word_num.substring(0, 1));
                }
                idx += 1;
            } else if (inst_set.includes(in_arr[idx])) {
                if (['and', 'add', 'or', 'sub', 'slt'].includes(in_arr[idx])) {
                    var rd: string = reg_table[in_arr[idx + 1].substring(0, in_arr[idx + 1].length - 1)];
                    var rs: string = reg_table[in_arr[idx + 2].substring(0, in_arr[idx + 2].length - 1)];
                    var rt: string = reg_table[in_arr[idx + 3]];
                    var code: string = '000000' + rs + rt + rd + '00000' + funct_table[in_arr[idx]];
                    text_out.push(parseInt(code, 2).toString(16).padStart(8, '0'));
                    idx += 4;
                } else if (in_arr[idx] === 'sll' || in_arr[idx] === 'srl') {
                    var rd: string = reg_table[in_arr[idx + 1].substring(0, in_arr[idx + 1].length - 1)];
                    var rt: string = reg_table[in_arr[idx + 2].substring(0, in_arr[idx + 2].length - 1)];
                    var shamt: string = parseInt(in_arr[idx + 3]).toString(2).padStart(5, '0');
                    var code: string = '00000000000' + rt + rd + shamt + funct_table[in_arr[idx]];
                    text_out.push(parseInt(code, 2).toString(16).padStart(8, '0'));
                    idx += 4;
                } else if (['slti', 'addi', 'ori'].includes(in_arr[idx])) {
                    var rt: string = reg_table[in_arr[idx + 1].substring(0, in_arr[idx + 1].length - 1)];
                    var rs: string = reg_table[in_arr[idx + 2].substring(0, in_arr[idx + 2].length - 1)];
                    var imm: string = parseInt(in_arr[idx + 3]).toString(2).padStart(16, '0');
                    var code: string = opcode_table[in_arr[idx]] + rs + rt + imm;
                    text_out.push(parseInt(code, 2).toString(16).padStart(8, '0'));
                    idx += 4;
                } else if (in_arr[idx] === 'lui') {
                    var rt: string = reg_table[in_arr[idx + 1].substring(0, in_arr[idx + 1].length - 1)];
                    var imm: string = parseInt(in_arr[idx + 3]).toString(2).padStart(16, '0');
                    var code: string = '00111100000' + rt + imm;
                    text_out.push(parseInt(code, 2).toString(16).padStart(8, '0'));
                    idx += 3;
                } else if (in_arr[idx] === 'jr') {
                    var rs: string = reg_table[in_arr[idx + 1]];
                    var code: string = '000000' + rs + '1000'.padStart(21, '0');
                    text_out.push(parseInt(code, 2).toString(16).padStart(8, '0'));
                    idx += 2;
                } else if (in_arr[idx] === 'lw' || in_arr[idx] === 'sw') {
                    var rt: string = reg_table[in_arr[idx + 1].substring(0, in_arr[idx + 2].length - 1)];
                    var offset: number = parseInt(in_arr[idx + 2].substring(0, in_arr[idx + 2].lastIndexOf('(') - 1));
                    var base: string = reg_table[in_arr[idx + 2].match(/\(([^)]+)\)/)![1]];
                    var code: string = opcode_table[in_arr[idx]] + base + rt + offset.toString(2).padStart(16, '0');
                    text_out.push(parseInt(code, 2).toString(16).padStart(8, '0'));
                    idx += 3;
                } else if (in_arr[idx] === 'beq' || in_arr[idx] === 'bne') {
                    var rs: string = reg_table[in_arr[idx + 1].substring(0, in_arr[idx + 1].length - 1)];
                    var rt: string = reg_table[in_arr[idx + 2].substring(0, in_arr[idx + 2].length - 1)];
                    var offset: number = label_table.has(in_arr[idx + 3]) ? label_table.get(in_arr[idx + 3])! : parseInt(in_arr[idx + 3]);
                    var code: string = opcode_table[in_arr[idx]] + rs + rt + (offset / 4 - 1).toString(2).padStart(16, '0');
                    text_out.push(parseInt(code, 2).toString(16).padStart(8, '0'));
                    idx += 4;
                } else if (in_arr[idx] === 'j' || in_arr[idx] === 'jal') {
                    var target: string;
                    if (label_table.has(in_arr[idx + 1])) {
                        target = label_table.get(in_arr[idx + 1])!.toString(2).padStart(28, '0');
                    } else {
                        target = parseInt(in_arr[idx + 1]).toString(2).padStart(28, '0');
                    }
                    var code: string = opcode_table[in_arr[idx]] + target.substring(0, 25);
                    text_out.push(parseInt(code, 2).toString(16).padStart(8, '0'));
                    idx += 2;
                }
            } else if (label_table.has(in_arr[idx].substring(0, in_arr[idx].length - 1))) {
                idx += 1;
            }
        }

        data_out.forEach((val) => {
            console.log(val);
        });
        text_out.forEach((val) => {
            console.log(val);
        });
    } catch (e) {
        console.log('Error:', e.stack);
    }

    return assembled_path;
}