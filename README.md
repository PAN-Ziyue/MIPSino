# MIPSino

**MIPSino** is a built-in vscode-extension assembler and disassembler for MIPS architecture. 



Still under developing...

---

**Procedure:**

* Base requirement
  * [x] Supporting the following 18 MIPS instructions: Add, Sub, And, Or, Addi, Ori, Sll，Srl，Lw, Sw, Lui, Slt, Slti, Beq, Bne, J, Jal, Jr.
  * [x] Input a MIPS assembly program, output its MIPS machine code in hexadecimal code.
  * [x] Input a MIPS machine code in hexadecimal code, output its MIPS assembly program with PC value.
* Strong requirement
  * [x] Implement a graphical user Interface for your program.
  * [X] Supporing pseudo instructions:  Bgt, Bge, Blt, Ble, move,

* Stronger functions
  * [X] Supporting more instructions such as: Xor, Nor, Sra, Xori, Lb, Sb, Lh, SW, Jalr, ...
  * [ ] Simulate execution of the MIPS assembly program in step-by-step way with a window to show the values of registers.
  * [ ] Simulate execution of the MIPS assembly program from the current MIPS instruction to the end and with a window to show the values of registers.
  * [ ] With reset to initialize the simulation.


## Preview:

* **interface & syntax highlighting**
![1](./img/1.png)

* **error checking**
![2](./img/2.png)

* **snippet**
![3](./img/3.png)

* **disassemble**
![4](./img/4.png)

## Build

```bash
$ git clone https://github.com/PAN-Ziyue/MIPSino
$ npm install
```
