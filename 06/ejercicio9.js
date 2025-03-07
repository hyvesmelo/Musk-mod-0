const readLine = require("readline-sync");

let input = readLine.question('\n' + "Introduce un número del 0 al 10: ");
let num = parseInt(input);

while (isNaN(num) || num < 0 || num > 10) {

    console.log('\n', "No es válido");

    input = readLine.question('\n' + "Introduce un número del 0 al 10: ");
    num = parseInt(input);

}

let name = '';

    switch (num) {
        case 0:

            name = 'Cero';
            break;
        
        case 1:

            name = 'Uno';
            break;

        case 2:

            name = 'Dos';
            break;
            
        case 3:

            name = 'Tres';
            break;

        case 4:

            name = 'Cuatro';
            break;
            
        case 5:

            name = 'Cinco';
            break;

        case 6:

            name = 'Seis';
            break;
                
        case 7:

            name = 'Siete';
            break;
        
        case 8:

            name = 'Ocho';
            break;

        case 9:

            name = 'Nueve';
            break;
                
        case 10:

            name = 'Diez';
            break;
    }

    console.log('\n', name, '\n');