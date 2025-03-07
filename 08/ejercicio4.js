const readLine = require("readline-sync");

let array1 = arrayInput(1);
let array2 = arrayInput(2);

if (anagram(array1, array2)){

    console.log('Las palabras son anagramas');

} else {

    console.log('Las palabras no son anagramas');

}

function anagram(arr1, arr2){

    let anagram1 = wordCount(arr1);
    let anagram2 = wordCount(arr2);

    if (anagram1.size != anagram2.size){

        return false;

    } 
    
    let temp = anagram2;

    for (let [key, value] of anagram1) {

        if (value === temp.get(key)) {

            return true;

        } else {

            return false;
            
        }
    }
};

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

    return counterMap;

};

function arrayInput(num){

    let text = '';

    if (num === 1){

        text = "Introduce una palabra: ";

    } else {

        text = "Introduce otra palabra: ";

    }

    let input = readLine.question(text);

    while (validation(input) === false) {
        
        input = readLine.question('\n' + text);

    }

    return validation(input);

};

function validation(input) {

    let inputLower = input.toLowerCase();
    let chars = inputLower.split('');
    
    while (chars.length < 1) {

        console.log('\n', "No hay palabras");
        return false;

    }

    return chars;

};