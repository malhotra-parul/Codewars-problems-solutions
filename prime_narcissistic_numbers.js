function primeNumbers(array){
    let prime = [];
    array.filter((element)=>{
        let divisible = [];
        for(let i=1; i<=element; i++){
            (element % i !== 0) ? null : divisible.push(i);
        }
        (divisible.indexOf(1) >-1 && divisible.indexOf(element) >-1  && divisible.length === 2)?
        prime = [...prime, element]:
        null;
    })
    return prime;
};

function narsNumbers(array){
    let nars = [];
    let digits, newArray = [];
    array.filter((ele)=>{
        
        function numberOfdigits(ele){
        let noOfDigits = 0;
        while(ele >= 1){
            ele = ele/10;
            noOfDigits++;
        }
        return noOfDigits;
    }
    let power = numberOfdigits(ele); 
    digits = ele.toString().split("");
    digits = digits.map((x) => +x);
    let sum=0;
    for(let i=0; i<=power-1; i++){
        sum +=digits[i]**power;
    }
    (ele === sum) ? nars.push(ele) : null;
    });
       
    return nars;
}

function newArray(array){
    let primeArray = primeNumbers(array); 
    let narsArray = narsNumbers(array); 
 
   newArray = array.filter((value)=>{
        return primeArray.indexOf(value) === -1 ? value : null;
   }).filter((val)=>{
       return narsArray.indexOf(val) === -1 ? val : null;
   });

   return {
       "countOfPrimeNumbers" : primeArray.length,
       "countofNarsNumbers" : narsArray.length,
        "updatedArray" : newArray
   }
};

console.log(newArray([10,20,30,40,2,5,7,153,1024,1634,11]));