const readLine = require("readline-sync");

let input = readLine.question('\n' + "Introduce el radio: ");
let radius = parseFloat(input);

while (isNaN(radius) || radius <= 0) {

    console.log('\n', "No es válido");

    input = readLine.question('\n' + "Introduce un número mayor que cero: ");
    radius = parseFloat(input);

}

function area(r){
    let a = Math.PI * r * r;
    return a;
}

console.log('\n', 'El área del círculo es', area(radius), '\n');