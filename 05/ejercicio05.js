const arrayLen = 10;
const array = [];
let a = 1;
let b = 1;

array.push(a,b);

for (let i = 2; i < arrayLen; i++) {

    let c = array[i-1] + array[i-2];

    array.push(c);
}

for (let i = 0; i < arrayLen; i++) {
    
    let d = (2 * array[i]);
    
    array[i] = d;

}

console.log(array);