function isHaiku(text) {
    if(text.length<17) return false;
    const regex = /[aeiouy]+/gmi;
    const noOfSyllables = text.match(regex).length;
    if(noOfSyllables < 17) return false;
    const regex_second = /[aeiou]+[^\saeiouy]+e\b/gmi;
    text = text.replace(regex_second, "e");
    const lines = text.split("\n");

    return (lines[0].match(regex).length === 5)?
    ((lines[1].match(regex).length === 7) ? 
    (lines[2].match(regex).length === 5 ? true : false) :
    false) :
    false;    
    

  }

  let text = "An old silent pond.../n A frog jumps into the pond,/n splash! Silence alive again.";
  console.log(isHaiku(text));