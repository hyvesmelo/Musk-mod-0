const readLine = require("readline-sync");

let array1 = arrayInput();
let array2 = arrayInput();

if (numbersOnlyArr1(array1, array2).length < 1){

    console.log("'La difererncia de ambos conjutos es: Vacio");

} else {

    console.log('La difererncia de ambos conjutos es: ', numbersOnlyArr1(array1, array2));

}

function numbersOnlyArr1(arr1, arr2) {

    for (let i = 0; i < arr2.length; i++) {

        for (let j = 0; j < arr1.length; j++) {

            if (arr2[i] === arr1[j]){

                arr1.splice(j, 1);

            }
        }
    }

    return arr1;

};

function arrayInput(){

    let input = readLine.question("Introduce un array de numeros: ");

    while (validation(input) === false) {
        
        input = readLine.question('\n' + "Introduce solo números enteros: ");

    }

    return validation(input);

};

function validation(text) {
    
    let listInput1 = text.split(',');
    let arrayNum = [];

    for (let i = 0; i < listInput1.length; i++) {

        arrayNum[i] = parseInt(listInput1[i]);

        while (isNaN(arrayNum[i])) {
            
            console.log('\n', listInput1[i], "no es válido!");

            return false;
        
        }
    }

    return arrayNum;

};

