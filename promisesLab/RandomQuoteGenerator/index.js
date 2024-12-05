let quote = document.getElementById("quote");
let author = document.getElementById("author");
let button = document.getElementById("button");
let heartContainer = document.getElementById("heart-container");
let icon = document.querySelector(".icon");
let quoteObj;
let favoriteQuotes = [];
heartContainer.addEventListener("click", function () {
  icon.classList.add("fill-red-500");
  favoriteQuotes.push(quoteObj);
  console.log(favoriteQuotes);
});
let apiurl = "https://quotes-api-self.vercel.app/quote";

function getQuote(apiurl) {
  fetch(apiurl)
    .then((res) => res.json())
    .then((data) => {
      icon.classList.remove("fill-red-500");
      quoteObj["quote"] = data.quote;
      quoteObj["author"] = data.author;
      quote.textContent = data.quote;
      author.textContent = "_ " + data.author;
      heartContainer.classList.remove("hidden");
    })
    .catch((err) => console.log(err));
}

button.addEventListener("click", function (event) {
  event.preventDefault();
  getQuote(apiurl);
});
