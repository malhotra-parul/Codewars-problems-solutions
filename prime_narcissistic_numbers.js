function primeNumbers(element){
    let notPrime = false;
   for(let i=2; i<=element-1; i++){
       (element % i === 0) ? notPrime = true: null;
       }
   return notPrime;
};

function nars(element){
    let notNars = false;
    let power = numberOfdigits(element);
    let digits = [];
    let sum=0;
    digits = element.toString().split("");
    digits = digits.map((x) => +x);
    for(let i=0; i<=power-1; i++){
        sum +=digits[i]**power;
    }
    return (element === sum) ? notNars : notNars = true;
    function numberOfdigits(ele){
        let noOfDigits = 0;
        while(ele >= 1){
            ele = ele/10;
            noOfDigits++;
        }
        return noOfDigits;
    }     
}

function check(array){
   array =  array.filter((value) => primeNumbers(value));
   array = array.filter((value) => nars(value));
   return array;
}

console.log(check([153, 163, 370, 2, 3, 9, 12]));