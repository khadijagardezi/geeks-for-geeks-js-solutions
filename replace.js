/*
Explanation
Use toString() to handle numbers as strings so that we can process them character by character.
Replace 0 with 5:

Use replace() with a regular expression /0/g to replace all 0s with 5.
The g flag ensures all matches are replaced. 

Use parseInt() to convert the modified string back into a number.

*/

function replace(num) {
    // Number to a string
    let numberStr = num.toString();
    
    // Replace '0' with '5'
    let replacedStr = numberStr.replace(/0/g, '5');
    
    // Result back to a number
    return parseInt(replacedStr);
}

let number = 1010101010;
let result = replace(number);
console.log(result); 
// Output: 1515151515

