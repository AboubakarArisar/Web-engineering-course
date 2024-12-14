// A function that returns a promise which resolves after a given time
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// A function that returns a promise which resolves with a value
function getValue(value) {
  return new Promise((resolve) => {
    resolve(value);
  });
}

console.log("script started");
// Chaining promises
delay(1000)
  .then(() => {
    console.log("Step 1: Waited for 1 second");
    return getValue("Hello");
  })
  .then((value) => {
    console.log("Step 2: Received value:", value);
    return delay(2000);
  })
  .then(() => {
    console.log("Step 3: Waited for another 2 seconds");
    return getValue("World");
  })
  .then((value) => {
    console.log("Step 4: Received value:", value);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
