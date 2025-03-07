const readLine = require("readline-sync");

const num = [];
const input = [];

for (let i = 0; i < 3; i++) {
    
    let b = readLine.question('\n' + "Introduce un número: ");
    let a = parseInt(b);

    while (isNaN(a)) {

        console.log('\n', "No es un número");

        b = readLine.question('\n' + "Introduce un número: ");
        a = parseInt(b);
    }

    input[i] = b;
    num[i] = a;
}

let text = "No hay números pares";

for (let i = 0; i < 3; i++) {

    if (num[i] % 2 === 0) {

        text = "Hay al menos un número par";
        break;
        
    }
}

console.log('\n', text, '\n');