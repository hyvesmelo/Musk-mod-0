const readLine = require("readline-sync");

let input = readLine.question('\n' + "Introduce un texto: ");
let chars = input.split('');

while (input === '') {
    
    console.log('\n', "No hay texto");
    
    input = readLine.question('\n' + "Introduce un texto: ");
    chars = input.split('');

}

if (parenthesesBalanced(chars)){
    
    console.log('Están Balanceados.');

} else {

    console.log('No están Balanceados.');
}

function parenthesesBalanced(arr){

    let arrOpen =[];

    for (let i = 0; i < arr.length; i++){

        if (arr[i] === '('){

            arrOpen.push(arr[i]);

        } else if (arr[i] === ')'){
            
            let openParentheses = arrOpen.pop();
  
            if( openParentheses != '('){

                return false;

            }
        }
    }

    if (arrOpen.length != 0){

        return false;
    
    }

    return true;

};