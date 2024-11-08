function valTimesIndex(arr) {
  let ret = arr.map(function (val, idx) {
    return val * idx;
  });
  return ret;
}

let array = [8, 11, 4, 27];
let result = valTimesIndex(array);

console.log(result);
