function weather() {
  let cityName=document.querySelector(".search-box").value;
  const apiKey = "e60b6f189a2fbcb54541f5924cb92a6a";
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=" + cityName + "&appid=" + apiKey;
  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(today);

  
 checkWeather();
  async function checkWeather() {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json(); // Make sure to await here
      document.querySelector(".date-dayname").innerHTML = data.name;
      document.querySelector(".date-day").innerHTML = formattedDate;
      document.querySelector(".weather-temp").innerHTML =Math.round(data.main.temp) + "°C";
      document.querySelector(".weather-desc").innerHTML = data.weather[0].main;
      document.querySelector(".Feels-like").innerHTML = Math.round(data.main.feels_like);
      document.querySelector(".humidity-value").innerHTML =data.main.humidity + "%";
      document.querySelector(".wind-value").innerHTML = data.wind.speed + " km/h";
      document.querySelector(".weather-side").style.backgroundImage = `url("images/${data.weather[0].main}.gif")`;
      
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }

}