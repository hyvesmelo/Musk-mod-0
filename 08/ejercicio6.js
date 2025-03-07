let arr = new Array(100000);
let length = arr.length;

for (let i = 0; i < length; i++){

    arr[i] = Math.floor(Math.random() * length);

}

console.time('El algoritmo bubble sort ha tardado', 'en ordenar', length, 'elementos.');

bubbleSort(arr);

console.timeLog('El algoritmo bubble sort ha tardado', 'en ordenar', length, 'elementos.');

function bubbleSort(arr) {

    let control = '';
    let counter = 0;

    do {

        control = 0;

        for (let i = 0; i < arr.length - counter - 1; i++){

            let temp = arr[i];

            if (arr[i] > arr[i+1]){

                arr[i] = arr[i+1];
                arr[i+1] = temp;
                control = 1;

            }
        } 

        counter++;

    } while (control != 0);

    return arr;

};