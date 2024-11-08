function filterLetters(arr) {
  let letter = arr[0];
  return arr.filter(function (val, idx) {
    if (idx > 0) {
      return val.toLowerCase() === letter.toLowerCase();
    }
  });
}

let array = ["a", "b", "a", "c", "A", "d", "a"];
let result = filterLetters(array);

console.log(result);
