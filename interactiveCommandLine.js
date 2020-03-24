const readlineSync = require("readline-sync");
let input;
do{
    input = parseInt(readlineSync.question("Enter the number : "));
}while(input%11 !== 0);

