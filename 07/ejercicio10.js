const readLine = require("readline-sync");

let inputRow = readLine.question('\n' + "Introduce el tamaño de la matriz:" + '\n' + "Número de filas: ");
let row = parseInt(inputRow);

while (isNaN(row) || row <= 0) {

    console.log('\n', "No es válido");

    inputRow = readLine.question('\n' + "Introduce un número entero mayor que cero: ");
    row = parseInt(inputRow);

}


var matrix = new Array (row);

for (let i = 0; i < row; i++) {

    matrix[i] = new Array ();

}

for (let i = 0; i < row; i++) {

    console.log('\n', 'fila:', (i + 1));

    inputMatrix = readLine.question('\n' + "Introduce los elementos de esta la fila: ");
    matrix[i] = inputMatrix.split(',');

    while ( i > 0 && matrix[i].length != matrix[i - 1].length) {

        console.log('\n', "La cuantidade de elementos que has introducido es difeernete de la fila anterior");

        console.log('\n', 'fila:', (i + 1));

        inputMatrix = readLine.question('\n' + "Introduce los elementos de esta la fila: ");
        matrix[i] = inputMatrix.split(',');

    }
}

let h = row;
let w = matrix[0].length;

matrixTraspuesta(matrix, h, w);

function matrixTraspuesta(matrix, height, width){

    var newMatrix = new Array (width);

    for (let i = 0; i < width; i++) {

        newMatrix[i] = new Array (height);

    }

    for (let i = 0; i < width; i++){

        for (let j = 0; j < height; j ++){

            newMatrix[i][j] = matrix[j][i];

        }
    }

    console.log(newMatrix);

}