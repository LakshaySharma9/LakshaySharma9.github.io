document.addEventListener('DOMContentLoaded', function() {
  const apiKey = 'fa7b34f28c3f48abb5452902242603';
  
  const citiesSelect = document.getElementById('cities');
  const currentWeather = document.getElementById('weather-current');
  const forecastWeather = document.getElementById('weather-forecast');

  function fetchWeatherData(selectedCity) {
    const apidata = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${selectedCity}&aqi=no`;
    
    fetch(apidata)
      .then(response => response.json())
      .then(data => {
        const location = data.location.name + ', ' + data.location.region + ', ' + data.location.country;
        const temperature = data.current.temp_c + '°C';
        const condition = data.current.condition.text;

        currentWeather.innerHTML = `
          <h2>Current Weather</h2>
          <p><strong>Location:</strong> ${location}</p>
          <p><strong>Temperature:</strong> ${temperature}</p>
          <p><strong>Condition:</strong> ${condition}</p>`;
      })
      .catch(error => {
        console.error('Error fetching current weather data:', error);
        currentWeather.innerHTML = '<p>Failed to fetch current weather data. Please try again later.</p>';
      });
  }

  function fetchWeatherForecast(selectedCity) {
    const apidata = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${selectedCity}&days=7&aqi=no&alerts=no`;

    fetch(apidata)
      .then(response => response.json())
      .then(data => {
        const date = data.forecast.forecastday[0].date;
        const temperature = data.forecast.forecastday[0].day.maxtemp_c + '°C';
        const condition = data.forecast.forecastday[0].day.condition.text;

        forecastWeather.innerHTML = `
          <h2>7-Days Weather Forecast</h2>
          <p><strong>Date:</strong> ${date}</p>
          <p><strong>Temperature:</strong> ${temperature}</p>
          <p><strong>Condition:</strong> ${condition}</p>`;
      })
      .catch(error => {
        console.error('Error fetching weather forecast data:', error);
        forecastWeather.innerHTML = '<p>Failed to fetch weather forecast data for 7 days. Please try again later.</p>';
      });
  }

  citiesSelect.addEventListener('change', function() {
    const selectedCity = this.value;
    fetchWeatherData(selectedCity);
    fetchWeatherForecast(selectedCity);
  });

  const defaultCity = citiesSelect.value;
  fetchWeatherData(defaultCity);
  fetchWeatherForecast(defaultCity);
});
