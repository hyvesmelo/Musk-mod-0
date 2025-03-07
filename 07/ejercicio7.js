const readLine = require("readline-sync");

let input = readLine.question('\n' + "Introduce un texto: ");
let text = input.split(' ');

while (text[0] === '') {

    console.log('\n', "No hay texto");

    input = readLine.question('\n' + "Introduce un texto: ");
    text = input.split(',');

}

matrix(text);

function matrix(arr){

    let width = 5;
    let height = '';
    let lastLineLength = (arr.length % width);

    //sí la frase es menor que 5 palabras
    if (arr.length < width) {

        height = 1;
        var m = new Array (width)

    } else {

        height = Math.ceil(arr.length / width);

        //inicializando la matrix sin la ultima línea
        var m = new Array (height);

        for (let i = 0; i < height - 1; i++) {

            m[i] = new Array (width);

        }
    }

    //añandindo la última línea manualmente
    if (height > 1) {

        m[height - 1] = new Array (lastLineLength);

    }

    //rellenando la matrix sin la última línea
    if (height === 1){

        for (let i = 0; i < width; i++){

            m[i] = arr[i];
        }

    } else {

        for (let i = 0; i < height - 1; i++){

            for (let j = 0; j < width; j ++){

                m[i][j] = arr[(i * width) + j];

            }
        }
    }

    //añandindo la última línea manualmente
    if (height > 1) {

        for (let j = 0; j < lastLineLength; j ++){

            m[height - 1][j] = arr[((height - 1) * width) + j];

        }
    }

    console.log(m)

};
