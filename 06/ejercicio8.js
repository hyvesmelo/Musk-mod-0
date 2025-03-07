const readLine = require("readline-sync");

let input1 = readLine.question('\n' + "Introduce la altura del rectángulo: ");
let height = parseInt(input1);

while (isNaN(height) || height <= 0) {

    console.log('\n', "No es válido");

    input1 = readLine.question('\n' + "Introduce un número entero y mayor que cero: ");
    height = parseInt(input1);

}

let input2 = readLine.question('\n' + "Introduce la anchura del rectángulo: ");
let length = parseInt(input2);

while (isNaN(length) || length <= 0) {

    console.log('\n', "No es válido");

    input2 = readLine.question('\n' + "Introduce un número entero y mayor que cero: ");
    length = parseInt(input2);

}

let h = height;
let l = length;

var array = new Array (h);

for (let i = 0; i < h; i++) {

    array[i] = new Array (l);

}

for (let i = 0; i < h; i++) {

    for (let j = 0; j < l; j++) {
        
        if (i === 0 || i === (h - 1) || j === 0 || j === (l -1)) {

            array[i][j] = '*';

        } else {

            array[i][j] = ' ';
        }

        process.stdout.write(array[i][j]);
    
    }

    console.log();

}