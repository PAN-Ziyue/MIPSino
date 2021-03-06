export const resered_word: string[] = [
    'byte', 'half', 'word', 'data', 'text',
    'bgt',  'bge',  'blt',  'ble',  'move',
    'add',  'addi', 'and',  'or',   'ori',
    'srl',  'sub',  'subu', 'sll',  'jalr',
    'lui',  'slt',  'slti', 'lh',   'sh', 
    'beq',  'bne',  'j',    'jal',  'addu', 
    'addiu','sltiu','andi', 'jr',   'lw', 
    'sw',   'xor',  'nor',  'sra',  'xori', 
    'lb', 'sb'
];

export const directive_set: string[] = [
    '.byte', '.half', '.word', '.data', '.text'
];

export const pseudo_set: string[] = [
    'bgt', 'bge', 'blt', 'ble', 'move'
];


export const reg_table: { [key: string]: string } = {
    '$zero': '00000', '$at': '00001', '$v0': '00010',
    '$v1': '00011', '$a0': '00100', '$a1': '00101',
    '$a2': '00110', '$a3': '00111', '$t0': '01000',
    '$t1': '01001', '$t2': '01010', '$t3': '01011',
    '$t4': '01100', '$t5': '01101', '$t6': '01110',
    '$t7': '01111', '$s0': '10000', '$s1': '10001',
    '$s2': '10010', '$s3': '10011', '$s4': '10100',
    '$s5': '10101', '$s6': '10110', '$s7': '10111',
    '$t8': '11000', '$t9': '11001', '$gp': '11100',
    '$sp': '11101', '$fp': '11110', '$ra': '11111',
    '$0': '00000'
};

export const opcode_table: { [key: string]: string } = {
    'add': '000000', 'addi': '001000', 'and': '000000',
    'or': '000000', 'ori': '001101', 'sll': '000000',
    'srl': '000000', 'sub': '000000', 'subu': '000000',
    'lui': '001111', 'slt': '000000', 'slti': '001010',
    'beq': '000100', 'bne': '000101', 'j': '000010',
    'jal': '000011', 'addu': '000000', 'addiu': '001001',
    'sltiu': '001011', 'andi': '001100',
    'jr': '000000', 'lw': '100011', 'sw': '101011',
    'xor': '000000', 'nor': '000000', 'sra': '000000',
    'xori': '001110', 'lb': '100000', 'sb': '101000',
    'lh': '100001', 'sh': '101001', 'jalr': '000000'
};

export const funct_table: { [key: string]: string } = {
    'add': '100000', 'and': '100100', 'or': '100101',
    'sll': '000000', 'srl': '000010', 'sub': '100010',
    'slt': '101010', 'jr': '001000', 'xor': '100110',
    'nor': '100111', 'sra': '000011', 'jalr': '001001',
    'subu': '100011', 'addu': '100001'
};