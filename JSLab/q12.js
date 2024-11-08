function extractKey(arr, key) {
  return arr.map(function (val) {
    return val[key];
  });
}

let arr = [
  { name: "AB", age: 20 },
  { name: "Hassan", age: 20 },
  { name: "Saif", age: 22 },
  { name: "Abdullah", age: 22 },
];

console.log(extractKey(arr, "name"));
