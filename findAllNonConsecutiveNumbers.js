function allNonConsecutive (arr) {
    
//     let obj = [];
//     for(var j=0; j<arr.length; j++){

//         if(arr[j+1] === arr[j]+1){
//             continue;
//         } else if(j === arr.length - 1){
//             continue;
//         }
//         obj.push({i: j+1, n: arr[j+1]})
        
//     }
//    return obj;
return arr.reduce((acc, n, i) => i > 0 && n - 1 !== arr[i - 1] ? [...acc, {i, n}] : acc, [])
};

console.log(allNonConsecutive([1,2,3,4,6,7,8,10]));