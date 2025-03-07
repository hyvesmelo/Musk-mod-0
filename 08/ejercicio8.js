const readLine = require("readline-sync");

let input = readLine.question('\n' + "Introduce un número: ");
let num = parseInt(input);

while (isNaN(num) || num <= 0) {

    console.log('\n', "No es válido");

    input = readLine.question('\n' + "Introduce un número entero mayor que cero: ");
    num = parseInt(input);

}

if (num === 1 || num === 2 || prime(num)) {

    console.log(num, 'Es primo.');

} else if (!prime(num)){

    console.log(num, 'No es primo.');

}

function prime(number){

    for(let i = 2; i < number; i++){

        if (number % i === 0){

            return false;

        }
    }

    return true;

}

