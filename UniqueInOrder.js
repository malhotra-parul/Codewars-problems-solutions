//Implement the function unique_in_order which takes as argument a sequence and returns a list of
//items without any elements with the same value next to each other and preserving the original
// order of elements. - 6kyu

var uniqueInOrder = function(iterable) {
  var count = [];
  typeof iterable === "string" ? iterable.split("") : iterable;
  for (var i = 0; i < iterable.length; i++) {
    if (iterable[i] === iterable[i + 1]) {
      continue;
    }
    count.push(iterable[i]);
  }
  return count;
};

uniqueInOrder([1, 1, 1, 1, 12, 2, 2]);
