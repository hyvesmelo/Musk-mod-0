const readLine = require("readline-sync");

let input = readLine.question('\n' + "Introduce una frase: ");

const array = input.split("");

let count = 0;

const vocal = ['a', 'e', 'i', 'o', 'u'];

for (let i = 0; i < array.length; i ++){

    for (let j = 0; j < vocal.length; j ++){

        if (array[i] === vocal[j]) {

            count++;
            
        }
    }
}
    
console.log('\n', "El número de vocales es", count, '\n');