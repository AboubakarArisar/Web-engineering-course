//Imediately Invoked Function Expression

//syntax of IIFE  (function(){})()  first () for function defination and second () for calling the function

//scenario one in application we want db connected without calling it

(function () {
  console.log("db connected");
})();

//if more than one IIFE is there then we can call them in sequence and ; is mandatory after each IIFE

(() => {
  console.log("db connected...");
})();
