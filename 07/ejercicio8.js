const readLine = require("readline-sync");

let input = readLine.question('\n' + "Introduce un texto: ");
let text = input.split('');

while (!text[0]) {

    console.log('\n', "No hay texto");

    input = readLine.question('\n' + "Introduce un texto: ");
    text = input.split(',');

}

palindromo(text);

function palindromo(text){

    if (text.length === 1){

        console.log('Sí es palíndromo');
        return;

    }

    let textNoSpace = text;

    for (let i = 0; i < text.length; i++){

        if (textNoSpace[i] === ' ') {

            textNoSpace.splice(i, 1);

        }
    }

    let l = '';

    if (text.length % 2 === 0) {

        l = text.length / 2;

        console.log(compare(textNoSpace, text.length, l));



    } else {

        l = Math.floor(text.length / 2);

        console.log(compare(textNoSpace, text.length, l));

    }
};

function compare (text, textLength, l){
    
    let counter = 0;

    for (let i = 0; i < l; i++){

        if (text[i] === text[textLength - 1 - i]){

            counter++

        }
    }

    if (counter < Math.floor(textLength / 2)){

        return "No es palíndromo";

    } else {

        return "Sí es palíndromo";

    }
   
}