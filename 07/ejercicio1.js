const readLine = require("readline-sync");

let input = readLine.question('\n' + "Introduce el radio: ");
let radius = parseFloat(input);

while (isNaN(radius) || radius <= 0) {

    console.log('\n', "No es válido");

    input = readLine.question('\n' + "Introduce un número mayor que cero: ");
    radius = parseFloat(input);

}

function circumf(r){
    let c = 2 * Math.PI * r;
    return c;
}

console.log('\n', 'La circunferencia es', circumf(radius), '\n');