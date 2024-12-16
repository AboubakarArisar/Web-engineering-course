//setInterval is for execution of the block every given time interval

//clear interval method for clearing the interval

let count = 1;
let intervalId = setInterval(function () {
  console.log(count++);
  if (count > 5) {
    clearInterval(intervalId);
  }
}, 1000); // 1000ms = 1s
