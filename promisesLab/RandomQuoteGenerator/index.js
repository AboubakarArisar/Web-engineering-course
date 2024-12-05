document.addEventListener("DOMContentLoaded", function() {
    let quote = document.getElementById("quote");
    let author = document.getElementById("author");
    let button = document.getElementById("button");
    let heartContainer = document.getElementById("heart-container");
    let icon = document.querySelector(".icon");
    let favoriteButton = document.getElementById("favts");
    let quoteObj = {};
    let favoriteQuotes = [];
    let startPara = document.getElementById("start");

    heartContainer.addEventListener("click", function() {
        icon.classList.add("fill-red-500");
        favoriteQuotes.push({...quoteObj });
        icon.classList.add("stroke-red-500");
        console.log(favoriteQuotes);
    });

    let apiurl = "https://quotes-api-self.vercel.app/quote";

    function getQuote(apiurl) {
        fetch(apiurl)
            .then((res) => res.json())
            .then((data) => {
                icon.classList.remove("fill-red-500");
                icon.classList.remove("stroke-red-500");
                // console.log(data);
                startPara.classList.add("hidden");
                quoteObj["quote"] = data.quote;
                quoteObj["author"] = data.author;
                quote.textContent = data.quote;
                author.textContent = "_ " + data.author;
                heartContainer.classList.remove("hidden");
            })
            .catch((err) => console.log(err));
    }

    button.addEventListener("click", function(event) {
        event.preventDefault();
        getQuote(apiurl);
    });

    favoriteButton.addEventListener("click", function() {
        const favoritesContainer = document.createElement("div");
        favoritesContainer.classList.add(
            "p-4",
            "rounded",
            "bg-gray-700",
            "text-white"
        );
        favoritesContainer.innerHTML =
            "<h2 class='text-xl font-bold mb-2'>Favorite Quotes</h2>";

        if (favoriteQuotes.length === 0) {
            favoritesContainer.innerHTML += "<p>No favorites yet.</p>";
        } else {
            favoriteQuotes.forEach((fav, index) => {
                favoritesContainer.innerHTML += `
                  <div class="mb-4">
                      <p class="text-lg font-semibold">"${fav.quote}"</p>
                      <p class="text-sm text-right">- ${fav.author}</p>
                  </div>
              `;
            });
        }

        const main = document.querySelector("main");
        main.innerHTML = "";
        main.appendChild(favoritesContainer);
        const div = document.createElement("div");
        div.classList.add(
            "flex",
            "justify-center",
            "items-center",
            "mt-4",
            "w-full"
        );
        const backButton = document.createElement("button");
        backButton.textContent = "Back";
        backButton.classList.add(
            "p-4",
            "rounded",
            "font-semibold",
            "bg-blue-400",
            "text-black",
            "mt-4"
        );
        backButton.addEventListener("click", function() {
            location.reload();
        });
        div.appendChild(backButton);

        favoritesContainer.appendChild(div);
    });
});