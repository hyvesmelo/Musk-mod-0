const readLine = require("readline-sync");

let input = readLine.question('\n' + "Introduce un texto: ");
let inputLower = input.toLowerCase();
let chars = inputLower.split('');

while (input === '') {

    console.log('\n', "No hay texto");

    input = readLine.question('\n' + "Introduce un texto: ");
    inputLower = input.toLowerCase();
    chars = inputLower.split('');

}

console.log(wordCount(chars));

function wordCount(text){

    let counterArr =[];
    let counterMap = new Map();

    for (let i = 0; i < text.length; i++){

        let temp = text[i];

        counterArr[i] = 0;

        for (let j = 0; j < text.length; j++){

            if (temp === text[j]){

                counterArr[i]++;

            }
        }

        counterMap.set(text[i], counterArr[i]);

    }

    console.log('Mapa de frecuencias:');
    return counterMap;

};