// [Type Annotations]
// ==> Variables
let nome: string = 'Gean';
console.log(nome);

// ==> Arrays
let animais: string[] = ['Elefante', 'Girafa'];
console.log(animais);

// ==> Objects
let carro: {
  nome: string;
  ano: number;
  preco: number
};

carro = {nome: 'Astra', ano: 2005, preco: 15000}
console.log(carro);

// ==> functions
function multiplyNunbers(num1: number, num2: number){
  return num1 * num2;
};
const arrowMultiplyNumbers = (num1: number, num2: number) => num1 * num2;

console.log(multiplyNunbers(5, 10));
console.log(arrowMultiplyNumbers(25, 5));
