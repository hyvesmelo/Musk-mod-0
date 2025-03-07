const readLine = require("readline-sync");

let input = readLine.question('\n' + "Introduce el radio: ");
let radius = parseFloat(input);

while (isNaN(radius) || radius <= 0) {

    console.log('\n', "No es válido");

    input = readLine.question('\n' + "Introduce un número mayor que cero: ", '\n');
    radius = parseFloat(input);

}

function circumAndArea(r){
    let c = 2 * Math.PI * r;
    let a = Math.PI * r * r;
    return [c, a];
}

let [circum, area] = circumAndArea(radius);

console.log();
console.log('La circunferencia es', circum);
console.log('El área del círculo es', area, '\n');