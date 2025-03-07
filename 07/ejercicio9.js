const readLine = require("readline-sync");

let input = readLine.question('\n' + "Introduce el tamaño de la matriz cuadrada: ");
let size = parseInt(input);

while (isNaN(size) || size <= 0) {

    console.log('\n', "No es válido");

    input = readLine.question('\n' + "Introduce un número entero mayor que cero: ");
    size = parseInt(input);

}

matrix(size);

function matrix(n){
    
    var m = new Array (n);

    for (let i = 0; i < n; i++) {

        m[i] = new Array (n);

    }

    for (let i = 0; i < n; i++){

        for (let j = 0; j < n; j ++){

            m[i][j] = i * j;

        }
    }
    console.log(m)
}
