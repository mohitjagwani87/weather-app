document.addEventListener("DOMContentLoaded", () => {
  const cityName = document.getElementById("cityName");
  const country = document.getElementById("country");
  const cityInput = document.getElementById("city");
  const submitButton = document.getElementById("submit");

  async function fetchWeather(city) {
    const url = `https://open-weather13.p.rapidapi.com/city/${city}/EN`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "05c8a9cef7msh0a4c649ac377913p11763ejsn68c47d224d7f",
        "x-rapidapi-host": "open-weather13.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();

      cityName.innerHTML = city;
      country.innerHTML = result.sys.country;
      document.getElementById("temp").innerHTML = parseFloat(
        ((result.main.temp - 32) * (5 / 9)).toFixed(2)
      );
      document.getElementById("feels_like").innerHTML = parseFloat(
        ((result.main.feels_like - 32) * (5 / 9)).toFixed(2)
      );
      document.getElementById("min_temp").innerHTML = parseFloat(
        ((result.main.temp - 32) * (5 / 9)).toFixed(2)
      );
      document.getElementById("max_temp").innerHTML = parseFloat(
        ((result.main.temp - 32) * (5 / 9)).toFixed(2)
      );
      document.getElementById("pressure").innerHTML = result.main.pressure;
      document.getElementById("humidity").innerHTML = result.main.humidity;
      document.getElementById("sea_level").innerHTML = result.main.sea_level;
      document.getElementById("grnd_level").innerHTML = result.main.grnd_level;
      document.getElementById("wind_speed").innerHTML = result.wind.speed;
      document.getElementById("sunrise").innerHTML = new Date(
        result.sys.sunrise * 1000
      ).toLocaleTimeString();
      document.getElementById("sunset").innerHTML = new Date(
        result.sys.sunset * 1000
      ).toLocaleTimeString();
      document.getElementById("visibility").innerHTML = result.visibility;

      console.log(result);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const city = cityInput.value.trim();
    if (city) {
      fetchWeather(city);
    } else {
      console.error("City name is empty.");
    }
  });

  fetchWeather("Delhi");
});
