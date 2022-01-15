// Ex01 => Uso de Colchetes
let frutas: string[] = ['🍍', '🍊', '🍎', '🍉', '🥭'];
// console.log(frutas[2]);

// Ex02 => Array Object, forma mais utilizada
let frutas1: Array<string> = ['🍍', '🍊', '🍎', '🍉', '🥭'];
// console.log(frutas1[3], '\n');

// Ex03 => Metodo push
let idiomas: Array<string> = [
  'Portugues',
  'Ingles',
  'Espanhol',
  'Francês'
];
// console.log(idiomas);
idiomas.push('Mandarin');
// console.log(idiomas);
idiomas.push('Italiano');
// console.log(idiomas);

// Ex04 => Metodo lenght
let idiomas1: Array<string> = [
  'Portugues',
  'Ingles',
  'Espanhol',
  'Francês'
];
// console.log(idiomas1.length);

// Ex05 => spread operator
let listaNumeros = [0, 1, 2, 3, 4, 5];
listaNumeros = [...listaNumeros, 6, 7, 8, 9, 10];
// console.log(listaNumeros);

// Ex06 => laços de iteração
let linguagensArray: Array<string> = new Array('JavaScript', 'Python', 'PHP', 'C#');

// laço FOR
const funcaoLinguagensFor = (linguagens: Array<string>) => {
  for (let i = 0; i < linguagens.length; i++) {
    console.log(linguagens[i]);
  }
}
// funcaoLinguagensFor(linguagensArray);
// Função auto executavel com laço for
// ((linguagens: Array<string>) => {
//   for (let i = 0; i < linguagens.length; i++) {
//     console.log(linguagens[i]);
//   }
// })(linguagensArray);

// laço forEach
const linguagensForEach = (linguagens: Array<string>) => {
  linguagens.forEach(element => {
    console.log(element);
  });
};
//linguagensForEach(linguagensArray);

//laço com função recursiva
const recurse = (linguagen: string[], index: number = 0) => {
  if(index < linguagen.length) {
    console.log(linguagen[index]);
    index += 1;
    recurse(linguagen, index);
  }
}

recurse(linguagensArray);
