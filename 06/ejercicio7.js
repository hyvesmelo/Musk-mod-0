const readLine = require("readline-sync");

let input = readLine.question('\n' + "Introduce la altura del triángulo: ");
let height = parseInt(input);

while (isNaN(height) || height <= 0) {

    console.log('\n', "No es válido");

    input = readLine.question('\n' + "Introduce un número entero mayor que cero: ");
    height = parseInt(input);

}

let length = height + (height - 1);
let h = height;
let l = length;

var array = new Array (h);

for (let i = 0; i < h; i++) {

    array[i] = new Array (l);

}

for (let i = 0; i < h; i++) {

    for (let j = 0; j < l; j++) {
        
        if (j >= (h - 1) - i && (j <= (h - 1) || j <= (h - 1) + i)) {

            array[i][j] = '*';

        } else {

            array[i][j] = ' ';
        }

        process.stdout.write(array[i][j]);
    
    }

    console.log();

}


