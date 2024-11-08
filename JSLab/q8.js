function specialMultiply(a, b) {
  if (arguments.length === 2) {
    return a * b;
  }
  return function () {
    console.log("i am a special function returned");
  };
}

console.log(specialMultiply(3));
