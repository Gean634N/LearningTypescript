// Ex01 - number

let num0: number = 23.0;
let num1: number = 0x78CF;
let num2: number = 0o577;
let num3: number = 0b110001;

console.log(`Number - Ponto Flutuante...: ${num0} tipo ${typeof(num0)}`);
console.log(`Number - Hexadecimal...: ${num1} tipo ${typeof(num1)}`);
console.log(`Number - Octal...: ${num2} tipo ${typeof(num2)}`);
console.log(`Number - Binario...: ${num3} tipo ${typeof(num3)}`);

//Ex02 bigint

let big1: bigint = 9007199254740991n;
let big2: bigint = 0b10000000000000000000000000000000000000000000n;
let big3: bigint = 0x200000000000003n;
let big4: bigint = 0o400000000000000000003n;

console.log(`Bigint...: ${big1} tipo ${typeof(big1)}`);
console.log(`Bigint - Binario...: ${big2} tipo ${typeof(big2)}`);
console.log(`Bigint - Hexadecimal...: ${big3} tipo ${typeof(big3)}`);
console.log(`Bigint - Octal...: ${big4} tipo ${typeof(big4)}`);
