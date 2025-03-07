const readLine = require("readline-sync");

const input = readLine.question('\n' + "Introduce un número: ");

const num = parseInt(input);

function isEven(number) {
    if (number % 2 === 0) {
        return "par";
    } else {
        return "impar";
    }
}

function positive(number) {
    if (number >= 0) {
        return "positivo";
    } else{
        return "negativo";
    }
}

if (isNaN(num)) {

    console.log('\n', "No es un número", '\n')

} else {

    console.log('\n', "El número es", isEven(num), "e", positive(num), '\n');
    
}