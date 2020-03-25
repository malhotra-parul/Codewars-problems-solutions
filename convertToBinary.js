const readlineSync = require("readline-sync");
let remainder = "";
let quotient;

 function binary(n){

        remainder = n%2 + remainder ;
        quotient = parseInt(n/2); 
        return (n===1 || n===0) ?  remainder : binary(quotient);
 };

 function eightChars(remainder){
    let len = remainder.length;
    while(len < 8){
        remainder = "0" + remainder;
        len++;
    }
    return remainder;
 };
function convertToBinary(n){

    remainder = binary(n);
    return eightChars(remainder);
}

let n = readlineSync.question("Please enter a number to convert to binary: ");
 console.log(convertToBinary(parseInt(n)));