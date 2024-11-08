function printFirstAndLast(arr) {
  arr.map(function (val) {
    console.log(val[0] + val[val.length - 1]);
  });
}

printFirstAndLast(["aboubakar", "abdullah", "hassan", "saifullah"]);
