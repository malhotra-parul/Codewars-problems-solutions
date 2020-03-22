function primeAndNarcissisticNumbers(array){
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
    return prime.length;
};

console.log(primeAndNarcissisticNumbers([10,20,30,41,2,5,7,153,1024,1634,11]));