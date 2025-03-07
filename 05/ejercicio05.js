const arrayLen = 10;
const array = [];
let a = 1;
let b = 1;

array.push(a, b);

//fibonacci sequence
for (let i = 2; i < arrayLen; i++) {
  let nextElement = array[i - 1] + array[i - 2];

  array.push(nextElement);
}

//sequence doubled
for (let i = 0; i < arrayLen; i++) {
  let elementDoubled = 2 * array[i];

  array[i] = elementDoubled;
}

console.log(array);
