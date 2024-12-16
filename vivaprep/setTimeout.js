//setTimeout is for delay like this follwing function will be executed after 2 econd delay:

setTimeout(function () {
  console.log("This line will be printend after 2 seconds");
}, 2000);

//settime out is executed once after gthe given delay
// Example of using clearTimeout to cancel the timeout
let timeoutId = setTimeout(function () {
  console.log(
    "This line will not be printed because the timeout will be cleared"
  );
}, 2000);

// Clear the timeout before it executes
clearTimeout(timeoutId);
