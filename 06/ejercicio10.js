const readLine = require("readline-sync");

console.log("He pensado un número del 1 al 10. ¡Intenta adivinarlo! ");

const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);

function numInput() {
    let input = readLine.question('\n' + "Advina: ");
    let num = parseInt(input);

    while (isNaN(num) || num < 1 || num > 10) {

        console.log('\n', "No es válido");

        input = readLine.question('\n' + "Introduce un número del 1 al 10: ");
        num = parseInt(input);

    }
    return num;
}

let number = numInput();

let count = 1;

while (number != randomNumber) {
    count++;
    console.log('\n', "¡Fallo!");
    number = numInput();
}
console.log('\n', "¡Correcto! Has necesitado", count, "intentos");