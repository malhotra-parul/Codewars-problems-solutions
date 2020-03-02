function pigIt(str) {
  str ? (str = str.split(" ")) : null;
  const reg = /[!?]/gm;
  let new_arr = [];

  for (var i = 0; i < str.length; i++) {
    if (reg.test(str[i])) {
      new_arr.push(str[i]);
    } else {
      new_arr.push(str[i].slice(1) + str[i].charAt(0) + "ay");
    }
  }
  return new_arr.join(" ");
}

console.log(pigIt("This is my string"));
