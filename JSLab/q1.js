function countdown(num) {
  let timer = setInterval(() => {
    console.log(num);
    num--;
    if (num === 0) {
      clearInterval(timer);
      console.log("DONE!");
    }
  }, 1000);
}

countdown(5);
