export const reg_table: { [key: string]: string } = {
    '00000': '$zero', '00001': '$at', '00010': '$v0',
    '00011': '$v1', '00100': '$a0', '00101': '$a1',
    '00110': '$a2', '00111': '$a3', '01000': '$t0',
    '01001': '$t1', '01010': '$t2', '01011': '$t3',
    '01100': '$t4', '01101': '$t5', '01110': '$t6',
    '01111': '$t7', '10000': '$s0', '10001': '$s1',
    '10010': '$s2', '10011': '$s3', '10100': '$s4',
    '10101': '$s5', '10110': '$s6', '10111': '$s7',
    '11000': '$t8', '11001': '$t9', '11100': '$gp',
    '11101': '$sp', '11110': '$fp', '11111': '$ra'
};

export const opcode_table: { [key: string]: string } = {
    '000000': 'R-Type', '001000': 'addi', '001101': 'ori',
    '001111': 'lui', '001010': 'slti', '000100': 'beq',
    '000101': 'bne', '000010': 'j', '000011': 'jal',
    '100011': 'lw', '101011': 'sw', '001110': 'xori',
    '100000': 'lb', '101000': 'sb', '100001': 'lh',
    '101001': 'sh', '001011': 'sltiu', '001100': 'andi',
    '001001': 'addiu'

};

export const funct_table: { [key: string]: string } = {
    '100000': 'add', '100100': 'and', '100101': 'or',
    '000000': 'sll', '000010': 'srl', '100010': 'sub',
    '101010': 'slt', '001000': 'jr', '100110': 'xor',
    '100111': 'nor', '000011': 'sra', '001001': 'jalr',
    '100011': 'subu', '100001': 'addu'
};
