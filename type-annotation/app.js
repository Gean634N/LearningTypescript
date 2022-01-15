"use strict";
// [Type Annotations]
// ==> Variables
let nome = 'Gean';
console.log(nome);
// ==> Arrays
let animais = ['Elefante', 'Girafa'];
console.log(animais);
// ==> Objects
let carro;
carro = { nome: 'Astra', ano: 2005, preco: 15000 };
console.log(carro);
// ==> functions
function multiplyNunbers(num1, num2) {
    return num1 * num2;
}
;
const arrowMultiplyNumbers = (num1, num2) => num1 * num2;
console.log(multiplyNunbers(5, 10));
console.log(arrowMultiplyNumbers(25, 5));
