function generateHashtag (str) {
    console.log(str.length);
    const result =  "#" + str.split(" ")
                       .map((word)=>word.slice(0,1).toUpperCase() + word.slice(1))
                       .join("");
  

    return (str.length !== 0 && result.length <= 140 && result.length !== 1) ? result : false;

}
console.log(generateHashtag("Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"));

//takes a string as input.
//if str is empty --- returns false
//if result is empty -- returns false
//if length of result >140 --> returns false
//all words have first letter capitalized
//starts with a hashtag
