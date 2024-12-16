// let promise = new Promise((resolve, reject) => {
//   resolve("success");
// });

// //handling promises

// promise.then((res) => {
//   console.log("promise is resolved ", res);
// });

// Example of a promise that simulates an asynchronous operation (e.g., fetching data from an API)
let fetchData = new Promise((resolve, reject) => {
  // Simulate a delay using setTimeout
  setTimeout(() => {
    let success = true; // Change this to false to simulate an error
    if (success) {
      resolve("Data fetched successfully");
    } else {
      reject("Error fetching data");
    }
  }, 2000); // 2 seconds delay
});

// Handling the fetchData promise
fetchData
  .then((data) => {
    console.log(data); // Output: Data fetched successfully
  })
  .catch((error) => {
    console.error(error); // Output: Error fetching data
  });
