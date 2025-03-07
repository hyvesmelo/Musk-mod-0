const readLine = require("readline-sync");

let input = readLine.question('\n' + "Introduce un año: ");
let year = parseInt(input);

while (isNaN(year) || year < 0) {

    console.log('\n', "No es un año");

    input = readLine.question('\n' + "Introduce un año: ");
    year = parseInt(input);

}

if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {

    console.log('\n', "El año es bisiesto", '\n');

} else {

    console.log('\n', "El año no es bisiesto", '\n');

}
