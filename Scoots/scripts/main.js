function openNav() {
    document.getElementById("closeNav").style.display="inline-block";
    document.getElementById("openNav").style.display="none";
    var nav = document.querySelector('.nav-links');
    nav.style.display = 'block';
    // nav.style.display = 'flex';
  }

  function closeNav() {
    document.getElementById("openNav").style.display="inline-block";
    document.getElementById("closeNav").style.display="none";
    var nav = document.querySelector('.nav-links');
    nav.style.display = 'none';
  }


  const apiKey = "898a9d515472d0d0e3657b84cf2e937b";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Ado, NG&appid=${apiKey}&units=metric`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Ado, NG&appid=${apiKey}&units=metric`;


  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      document.getElementById('current-temp').textContent = `${data.main.temp}°C`;
      document.getElementById('current-humidity').textContent = `${data.main.humidity}%`;

      document.getElementById('tomorrow-forecast').textContent = '--';

      // Update weather condition
      const weatherMain = data.weather[0].main;
      const weatherDescription = data.weather[0].description;
      document.getElementById('weather-condition').textContent = `${weatherMain} - ${weatherDescription}`;

      // Update weather icon
      const weatherIconId = data.weather[0].icon;
      const weatherIconUrl = `http://openweathermap.org/img/wn/${weatherIconId}.png`;
      document.getElementById('weather-icon').src = weatherIconUrl;
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
    });


    // Fetch hourly forecast data from OpenWeather API

fetch(forecastUrl)
  .then(response => response.json())
  .then(data => {
    // Find tomorrow's forecast at 3:00 PM
    const tomorrowForecast = data.list.find(item => {
      const forecastDate = new Date(item.dt * 1000); // Convert Unix timestamp to milliseconds
      return forecastDate.getDate() === (new Date().getDate() + 1) && forecastDate.getHours() === 15;
    });

    if (tomorrowForecast) {
      const temperatureAt3PM = tomorrowForecast.main.temp;
      document.getElementById('tomorrow-forecast').textContent = `${temperatureAt3PM}°C`;
    } else {
      document.getElementById('tomorrow-forecast').textContent = 'Not available';
    }
  })
  .catch(error => {
    console.error('Error fetching hourly forecast data:', error);
  });
