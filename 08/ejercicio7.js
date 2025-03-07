let arrUnsorted = new Array(100000);
let len = arrUnsorted.length;

for (let i = 0; i < len; i++){

    arrUnsorted[i] = Math.floor(Math.random() * len);

}
console.time('El algoritmo quick sort ha tardado', 'en ordenar', len, 'elementos.');

quickSort(arrUnsorted, 0, len - 1);

console.timeLog('El algoritmo quick sort ha tardado', 'en ordenar', len, 'elementos.');

function quickSort(arr, start, end){

    if( start < end){

        let pivot = arr[end];
        let index2 = start;
        let temp = '';

        for (let index1 = start; index1 < end; index1++){
            
            if (arr[index1] < pivot ){
                
                temp = arr[index2];
                arr[index2] = arr[index1];
                arr[index1] = temp;
                index2++;

            }
        }
        
        arr[end] = arr[index2];
        arr[index2] = pivot;
        
        quickSort(arr, start, index2 - 1);
        quickSort(arr, index2 + 1, end);

    }

    return arr;
}




