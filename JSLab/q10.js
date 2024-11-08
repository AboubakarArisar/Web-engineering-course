function addKeyAndValue(arr, key, val) {
  return arr.push({ [key]: val });
}
let array = [{ name: "AB" }, { name: "Hassan" }, { name: "Saif" }];

addKeyAndValue(array, "name", "Abdullah");

console.log(array);
