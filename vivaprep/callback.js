//callback functions : functions which are used as a paramater in any function are callback functions

function callbackFunction(a, b) {
  console.log("sum of the given numbers is : ", a + b);
}

function calculate(a, b, callbackFunc) {
  callbackFunc(a, b);
}

calculate(1, 2, callbackFunction);
