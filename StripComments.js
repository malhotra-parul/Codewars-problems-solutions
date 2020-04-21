function solution(input, markers) {
  return input.split("\n")
       .map((line)=>{
            for(let i=0; i< markers.length; i++){
                line.indexOf(markers[i]) > -1 ?
                line = line.slice(0, line.indexOf(markers[i])) :
                line;
            }
      return line.trim();
      }).join("\\n")
};
console.log(solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]));


