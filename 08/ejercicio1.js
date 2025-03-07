const readLine = require("readline-sync");

let input = readLine.question('\n' + "Introduce un texto: ");


while (input === '') {

    console.log('\n', "No hay texto");

    input = readLine.question('\n' + "Introduce un texto: ");
    list = input.split(',');

}

sameWords(input);

function sameWords (text){

    let textNoPuct = removePoctuation (text);
    let textArray = textNoPuct.split(' ');
    let wordCheck = '';
    let setSameWords = new Set ([]);
    let counter = 0;

    for (let i = 0; i < textArray.length; i++){

        wordCheck = textArray[i];

        for (let j = i ; j < textArray.length; j++){

            if (wordCheck === textArray[j]) {
                counter++;
            }
            if (counter > 1){
                setSameWords.add(wordCheck)
            }
        }
        counter = 0;
    }

    let arraySameWords = Array.from(setSameWords);

    if (arraySameWords.length > 0){

        console.log('Se repiten las siguientes palabras: ', arraySameWords.join(', '));

    } else {

        console.log('Todos las palabras son únicas');

    }
};


function removePoctuation (text) {
    return text.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '');
};

