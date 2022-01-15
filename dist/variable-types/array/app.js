"use strict";
let frutas = ['🍍', '🍊', '🍎', '🍉', '🥭'];
let frutas1 = ['🍍', '🍊', '🍎', '🍉', '🥭'];
let idiomas = [
    'Portugues',
    'Ingles',
    'Espanhol',
    'Francês'
];
idiomas.push('Mandarin');
idiomas.push('Italiano');
let idiomas1 = [
    'Portugues',
    'Ingles',
    'Espanhol',
    'Francês'
];
let listaNumeros = [0, 1, 2, 3, 4, 5];
listaNumeros = [...listaNumeros, 6, 7, 8, 9, 10];
let linguagensArray = new Array('JavaScript', 'Python', 'PHP', 'C#');
const funcaoLinguagensFor = (linguagens) => {
    for (let i = 0; i < linguagens.length; i++) {
        console.log(linguagens[i]);
    }
};
const linguagensForEach = (linguagens) => {
    linguagens.forEach(element => {
        console.log(element);
    });
};
const recurse = (linguagen, index = 0) => {
    if (index < linguagen.length) {
        console.log(linguagen[index]);
        index += 1;
        recurse(linguagen, index);
    }
};
recurse(linguagensArray);
