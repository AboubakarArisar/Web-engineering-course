// JavaScript this Keyword
// 1. In Global Context
console.log("\n1. In Global Context");
function showGlobalThis() {
  console.log(this); // Refers to the global object (Window in browsers)
}
showGlobalThis();

// 2. In Object Method
console.log("\n2. In Object Method");
const person = {
  name: "AB",
  greet: function () {
    console.log(`Hello, my name is ${this.name}`); // Refers to the person object
  },
};
person.greet(); // Outputs: Hello, my name is AB

// 3. In Event Handler
console.log("\n3. In Event Handler");
document.body.innerHTML = '<button id="myButton">Click me</button>';
document.getElementById("myButton").addEventListener("click", function () {
  console.log(this); // Refers to the button element
});
