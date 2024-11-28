const weatherButton = document.getElementById("weatherButton");
const weatherArea = document.getElementById("weatherArea");

weatherButton.addEventListener("click", getWeather);

function getWeather() {
  const city = document.getElementById("city").value;
  weatherArea.innerHTML = city;
}
