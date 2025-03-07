const readLine = require("readline-sync");

let input = readLine.question('\n' + "Introduce una lista de números: ");
let splitInput = input.split(',');

let numbers = [];

for (let i = 0; i < splitInput.length; i++){
    numbers[i] = parseInt(splitInput[i]);
}

for (let i = 0; i < numbers.length; i++){
    if (isNaN(numbers[i])) {

        console.log('\n',"'", splitInput[i],"'", "no es válido!");

        input = readLine.question('\n' + "Introduce un número entero para reemplazarlo: ", '\n');

        numbers[i] = parseInt(input);

    }
}

let [sum, mean] = sumAndMean(numbers);

console.log();
console.log('La suma es', sum);
console.log('El media aritmética es', mean, '\n');

function sumAndMean (array){

    let s = 0;

    for (let i = 0; i < array.length; i++){
        s = s + array[i];
    }

    let m = s / array.length;

    return [s, m];
}