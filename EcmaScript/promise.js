let api = fetch("https://jsonplaceholder.typicode.com/posts");
let obj = {};
api
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error.message);
  });

console.log("This is the last line of the code");
