let key = "name";

let obj = {
  [key]: "saifullah",
  age: 21,
};

console.log(obj);

function createObject(key, value) {
  return {
    [key]: value,
  };
}

console.log(createObject("name", "saifullah"));
