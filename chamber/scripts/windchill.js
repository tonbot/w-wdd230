// Function to calculate the wind chill factor
function calculateWindChill(temperature, windSpeed) {
    // Check if temperature and wind speed meet the specification limits
    if (temperature <= 50 && windSpeed > 3.0) {
      // Calculate wind chill factor using the formula
      var windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
      return Math.round(windChill * 10) / 10; // Round to one decimal place
    } else {
      return "N/A";
    }
  }
  
  // Function to update the wind chill value on the page
  function updateWindChill() {
    var temperature = parseFloat(document.getElementById('temperature').textContent);
    var windSpeed = parseFloat(document.getElementById('wind-speed').textContent);
    var windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById('wind-chill').textContent = "Wind Chill: " + (typeof windChill === 'number' ? windChill + " °F" : windChill);
  }
  
  // Call the updateWindChill function when the page loads
  window.onload = function() {
    updateWindChill();
  };
  