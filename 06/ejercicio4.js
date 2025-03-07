const readLine = require("readline-sync");

let input = readLine.question('\n' + "Introduce un número: ");
let num = parseInt(input);

while (isNaN(num)) {

    console.log('\n', "No es un número");

    input = readLine.question('\n' + "Introduce un número: ");
    num = parseInt(input);

}

console.log('');
for ( let i = 0; i < 10; i++) {
    let n = num;
    console.log(n, 'x', (i + 1), '=', (n * (i + 1)));
}
console.log('');