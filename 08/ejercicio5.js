const readLine = require("readline-sync");

let input = readLine.question('\n' + "Introduce una palabra: ");


while (input === '') {

    console.log('\n', "No hay palabra");

    input = readLine.question('\n' + "Introduce una palabra: ");

}

console.log(`La palabra invetda es "${reverse(input)}".`);

function reverse(word) {

    let chars = word.split('');
    let length = chars.length;
    let newWord = [];
    let temp = '';

    for (let i = 0; i < length; i++) {

        temp = chars.pop();
        newWord.push(temp);

    }
    
    return Array.from(newWord).join('');
}