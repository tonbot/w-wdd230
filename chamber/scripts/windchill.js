// Function to calculate the wind chill factor
// function calculateWindChill(temperature, windSpeed) {
//     // Check if temperature and wind speed meet the specification limits
//     if (temperature <= 50 && windSpeed > 3.0) {
//       // Calculate wind chill factor using the formula
//       var windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
//       return Math.round(windChill * 10) / 10; // Round to one decimal place
//     } else {
//       return "N/A";
//     }
//   }
  
//   // Function to update the wind chill value on the page
//   function updateWindChill() {
//     var temperature = parseFloat(document.getElementById('temperature').textContent);
//     var windSpeed = parseFloat(document.getElementById('wind-speed').textContent);
//     var windChill = calculateWindChill(temperature, windSpeed);
//     document.getElementById('wind-chill').textContent = "Wind Chill: " + (typeof windChill === 'number' ? windChill + " °F" : windChill);
//   }
  
    // Call the updateWindChill function when the page loads
    const apiKey = "898a9d515472d0d0e3657b84cf2e937b";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Ado, NG&appid=${apiKey}&units=metric`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Ado, NG&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const temperature = data.main.temp;
        const description = data.weather[0].description;

        document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
        document.getElementById('description').textContent = `Description: ${description}`;
      })
      .catch(error => {
        console.error('Error fetching current weather data:', error);
      });

    fetch(forecastUrl)
      .then(response => response.json())
      .then(data => {
        const forecastList = document.getElementById('forecast-list');
        forecastList.innerHTML = '';

        for (let i = 0; i < 3; i++) {
          const temperature = data.list[i].main.temp;
          const description = data.list[i].weather[0].description;
          const forecastItem = document.createElement('li');
          forecastItem.textContent = `Temperature: ${temperature}°C, Description: ${description}`;
          forecastList.appendChild(forecastItem);
        }
      })
      .catch(error => {
        console.error('Error fetching forecast data:', error);
      });
