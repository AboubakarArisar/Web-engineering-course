//var keyword

//Redeclaration allowed also reassignation allowed
// var keyword is function scoped
var a = 5;

var a = 6;

console.log(`variable with var keyword a is ${a}`);

//let keyword
//Redeclaration not allowed but reassignation allowed

let b = 5;

console.log(`variable with let keyword b is ${b}`);

//let b = 6; SyntaxError: Identifier 'b' has already been declared

//const keyword
//Redeclaration not allowed and reassignation not allowed

const c = 5;

console.log(`variable with const keyword c is ${c}`);

//c = 6; TypeError: Assignment to constant variable.

//const c = 6; SyntaxError: Identifier 'c' has already been declared

//Scopes of all keywords

//var keyword is function scoped
function varScope() {
  if (true) {
    var d = 5;
  }
  console.log(`variable with var keyword d is ${d}`);
}

varScope();

//let and const keywords are block scoped

function letScope() {
  if (true) {
    let e = 5;
  }
  //console.log(`variable with let keyword e is ${e}`); ReferenceError: e is not defined
}

letScope();

function constScope() {
  if (true) {
    const f = 5;
  }
  //console.log(`variable with const keyword f is ${f}`); ReferenceError: f is not defined
}

constScope();

// Best Practices:
// - Use const by default. This ensures you don't accidentally reassign variables.
// - Use let when you know you'll need to reassign the variable.
// - Avoid var as much as possible due to its function-scoping behavior, which can lead to unexpected results, use it in old codebases.
