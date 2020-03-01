function solution(roman){
    var codes = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };
    return  (codes[roman.split("")[0]] >= codes[roman.split("")[1]]) ? 
    roman.split("").map((value)=>codes[value]).reduce((acc, currVal)=> acc + currVal) : 
    roman.split("").map((value)=>codes[value]).sort((a,b)=> b-a).reduce((acc,currVal)=>acc-currVal);
  }

  solution('MMVIII');
  solution('IV');