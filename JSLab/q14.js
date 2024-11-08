function filterKey(arr, key) {
  return arr.filter(function (val) {
    return val[key];
  });
}

let arr = [
  { name: "AB", age: 20, isStudent: false },
  { name: "Hassan", age: 20, isStudent: true },
  { name: "Saif", age: 22, isStudent: true },
  { name: "Abdullah", age: 22, isStudent: true },
];

let result = filterKey(arr, "isStudent");
console.log(result);
