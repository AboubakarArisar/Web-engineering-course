// var b = 5;

// function func() {
//     var x = 10;
//     console.log(x);
// }
// func();

// console.log(x);

// function fn() {
//     var x = 10; {
//         {
//             let b = 3;
//             console.log(b);
//         }
//     }
//     console.log(b);//error
// }

// fn();

//hoisting and Temporal Dead Zone
// console.log("-------------------");
// console.log(x);

// let x = 10;
// console.log(x);
// let num = 2;
// let expression = `${num} * 2 = ${num * 2}`;

// console.log(expression);

// let fun = () => 10;

// console.log(fun());

// let obj = {
//     name: "John",
//     age: 30,
//     city: "New York",
// };

// let { name, age } = obj;

// let array = [1, 2, 3, 4, 5];
// let [a, b, c] = array;

// function func(x, y = 2) {
//     console.log(x, y);
// }

// func(10, 3);

// function fn(...rams) {
//     console.log(rams);
// }

// let arr = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];
// let arr3 = [...arr, ...arr2];
// let args = arr3;
// fn(...args);

// function* generatesquence() {
//     console.log("start");
//     let x = yield 1;
//     console.log("middle " + x);
//     yield 2;
//     console.log("end");
//     yield 3;
// }

// let generator = generatesquence();

// generator.next(1);
// generator.next();

// let api = "https://jsonplaceholder.typicode.com/users";

// let promise = fetch(api);
// promise
//     .then((res) => {
//         console.log(res);
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// let promise = new Promise((resolve, reject) => {
//     let x = 10;
//     if (x % 2 == 0) {
//         resolve("Success");
//     } else {
//         reject("Error");
//     }
// });

// promise
//     .then((message) => {
//         console.log(message);
//     })
//     .catch((error) => {
//         console.log(error);
//     });
// console.log("end of the program");

// async function fun() {
//     await new Promise((resolve, reject) => {
//         let x = 10;
//         if (x % 2 == 0) {
//             resolve("Success");
//         } else {
//             reject("Error");
//         }
//     });
//     return "End of the program";
// }

// let func = fun();

// func
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// var second = 0;
// var minute = 0;
// let id = setInterval(() => {
//     second++;
//     if (second == 60) {
//         second = 0;
//         minute++;
//     }
//     if (minute == 2) {
//         clearInterval(id);
//     }
//     console.log(`${minute} mins : ${second} seconds`);
// }, 1000);

setTimeout(() => {
    console.log("jai hind dosto");
}, 1000);