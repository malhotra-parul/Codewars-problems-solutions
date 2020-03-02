function titleCase(title, minorWords) {
  let title_arr, minor_arr;

  title ? (title_arr = title.toLowerCase().split(" ")) : (title_arr = []);
  minorWords
    ? (minor_arr = minorWords.toLowerCase().split(" "))
    : (minor_arr = []);

  let new_arr = [];

  for (let i = 0; i < title_arr.length; i++) {
    if (minor_arr.indexOf(title_arr[i]) !== -1) {
      if (i == 0) {
        new_arr.push(capitalize(title_arr[i]));
        continue;
      }
      new_arr.push(title_arr[i]);
      continue;
    }
    new_arr.push(capitalize(title_arr[i]));
  }
  return new_arr.join(" ");
}

const capitalize = word => {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
};
