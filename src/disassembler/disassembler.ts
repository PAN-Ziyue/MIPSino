import * as fs from 'fs';
import { reg_table, opcode_table, funct_table } from './dis_utils';

enum field_set { data, text };

// main disassembling function
export function Disassemble(file_dir: string, file_name: string): string {
    var full_path = file_dir + file_name;
    var disassembled_path = file_dir + file_name.substring(0, file_name.lastIndexOf('.') + 1) + 'asm';

    try {
        var in_str = fs.readFileSync(full_path, 'utf-8');
        var in_arr = in_str.split(/\n/);
        var asm_out: string[] = [];
        var label_table = new Map<number, string>();

        in_arr.forEach((val, idx) => {
            var code = parseInt(val, 16).toString(2).padStart(32, '0');
            var oper = opcode_table[code.substr(0, 6)];
            if (oper === 'jal' || oper === 'j') {
                var target = parseInt(code.substr(6, 26) + '00', 2);
                label_table.set(target, 'TARGET_0x' + target.toString(16));
            } else if (oper === 'beq' || oper === 'bne') {
                var offset = parseInt(code.substr(16, 16), 2);
                var label = 

            }
        });





        in_arr.forEach((val) => {
            var code = parseInt(val, 16).toString(2).padStart(32, '0');
            var opcode = code.substr(0, 6);
            if (opcode === '000000') {
                var funct = code.substr(26, 6);
                if (['add', 'and', 'or', 'sub', 'slt'].includes(funct_table[funct])) {
                    var rs = reg_table[code.substr(6, 5)];
                    var rt = reg_table[code.substr(11, 5)];
                    var rd = reg_table[code.substr(16, 5)];
                    asm_out.push(funct_table[funct] + ' ' + rd + ', ' + rs + ', ' + rt);
                } else if (['sll', 'srl'].includes(funct_table[funct])) {
                    var rt = reg_table[code.substr(11, 5)];
                    var rd = reg_table[code.substr(16, 5)];
                    var shamt = code.substr(21, 5);
                    asm_out.push(funct_table[funct] + ' ' + rd + ', ' + rt + ', ' + shamt);
                } else if (funct_table[funct] === 'jr') {
                    var rs = reg_table[code.substr(6, 5)];
                    asm_out.push('jr ' + rs);
                }
            } else {
                if (['addi', 'ori', 'slti'].includes(opcode_table[opcode])) {
                    var rs = reg_table[code.substr(6, 5)];
                    var rt = reg_table[code.substr(11, 5)];
                    var imm = '0x' + parseInt(code.substr(16, 16), 2).toString(16);
                    asm_out.push(opcode_table[opcode] + ' ' + rt + ', ' + rs + ', ' + imm);
                } else if (['beq', 'bne'].includes(opcode_table[opcode])) {
                    var rs = reg_table[code.substr(6, 5)];
                    var rt = reg_table[code.substr(11, 5)];
                    var offset = '0x' + parseInt(code.substr(16, 16), 2).toString(16);
                    asm_out.push(opcode_table[opcode] + ' ' + rs + ', ' + rt + ', ' + offset);
                } else if (['j', 'jal'].includes(opcode_table[opcode])) {

                } else if (['lw', 'sw'].includes(opcode_table[opcode])) {

                } else if (opcode_table[opcode] === 'lui') {

                }
            }
        });
    } catch (e) {
        console.log('Error:', e.stack);
    }
    return disassembled_path;
}
