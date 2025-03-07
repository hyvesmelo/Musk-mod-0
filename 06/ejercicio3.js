const readLine = require("readline-sync");

let input = readLine.question('\n' + "Introduce un número: ");
let num = parseInt(input);

while (isNaN(num) || num < 0) {

    console.log('\n',  "No es válido ");

    input = readLine.question('\n' + "Introduce un número entero y positivo: ");
    num = parseInt(input);

}

function factorial(number) {

    if (number === 1 || number === 0) {

        return 1;

    } else if (number === 2) {

        return 2;

    } else {

        let n = number;

        number = n * factorial(n - 1);

        return number;
        
    }
}

console.log('\n', "El factorial de", num, "es", factorial(num), '\n')