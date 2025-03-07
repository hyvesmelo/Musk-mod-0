const readLine = require("readline-sync");

let input = readLine.question('\n' + "Introduce una lista de elementos: ");
let list = input.split(',');

while (list[0] === '') {

    console.log('\n', "No hay elementos");

    input = readLine.question('\n' + "Introduce una lista de elementos: ");
    list = input.split(',');

}

elementsCheck(list);

function elementsCheck (arr){

    let sameElements = [];
    let length = arr.length;

    for (let i = 0; i < length; i++){
       
        let element = arr.shift();
        let justElement = element.trim();

        for (let j = 0; j < length - i - 1; j++){

            if (arr[j].trim() === justElement) {
                
                if (!sameElements.includes(justElement)){

                    sameElements.push(justElement);

                }
            }
        }       
    }

    if (sameElements.length > 0){

        console.log('Los elementos repetidos son', sameElements.join(', '));

    } else {

        console.log('Todos los elementos son únicos');

    }
}


