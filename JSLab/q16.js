import users from "./object.js";

//a)
function printEmails(users) {
  console.log("users email");
  users.forEach((user) => {
    console.log(user.email);
  });
}
printEmails(users);
//b)
function printHobbies(users) {
  console.log("users hobbies");

  users.forEach((user) => {
    console.log(user.hobbies);
  });
}
printHobbies(users);

//c)

function findHometownByState(users, state) {
  return users.find((user) => user.hometown.state === state);
}

console.log(findHometownByState(users, "NY"));

//d)
function allLanguages(users) {
  const languages = users.map((user) => user.favoriteLanguages);
  return languages;
}

console.log(allLanguages(users));

//e)

function hasFavoriteEditor(users, editor) {
  return users.some((user) => user.favoriteEditor === editor);
}
console.log(hasFavoriteEditor(users, "VS Code"));

//f)

function findByUsername(users, username) {
  return users.find((user) => user.username === username);
}

console.log(findByUsername(users, "sam"));
