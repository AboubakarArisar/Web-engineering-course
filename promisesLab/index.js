const weatherButton = document.getElementById("weatherButton");
const weatherArea = document.getElementById("weatherArea");

weatherButton.addEventListener("click", getWeather);

function getWeather() {
  const city = document.getElementById("city").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=aa1d1c3960da7acf27cf1c36addf196d`;

  let countdown = 2;
  weatherArea.innerHTML = `Please wait .... ${countdown} sec`;

  const countdownInterval = setInterval(() => {
    countdown--;
    weatherArea.innerHTML = `Please wait .... ${countdown} sec`;
    if (countdown === 0) {
      clearInterval(countdownInterval);
      fetchWeatherData(url);
    }
  }, 1000);

  function fetchWeatherData(url) {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((result) => {
        const weather = result.weather[0];
        const main = result.main;
        const wind = result.wind;
        const cityName = result.name;

        const tempCelsius = (main.temp - 273.15).toFixed(2);

        weatherArea.innerHTML = `
          <p class="text-xl font-bold">${cityName}</p>
          <p class="text-lg font-bold">Temperature: ${tempCelsius}°C</p>
          <p>Condition: ${weather.description}</p>
          <p>Wind Speed: ${wind.speed} m/s</p>
        `;
      })
      .catch((error) => {
        console.error(error);
        weatherArea.textContent = "Error fetching weather data.";
      });
  }
}
