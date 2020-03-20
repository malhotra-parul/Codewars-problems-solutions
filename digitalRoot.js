function digitalRoot(n){
    const arr = String(n).split("").map((value)=> +value);
    const sum = arr.reduce((acc, value)=>  acc + value);
    return (sum >= 10) ? digitalRoot(sum) : sum;

}

console.log(digitalRoot(16));