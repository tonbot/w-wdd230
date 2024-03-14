function openNav() {
  document.getElementById("closeNav").style.display = "inline-block";
  document.getElementById("openNav").style.display = "none";
  var nav = document.querySelector("nav");
  nav.style.display = "block";
  nav.style.display = "flex";
}

function closeNav() {
  document.getElementById("openNav").style.display = "inline-block";
  document.getElementById("closeNav").style.display = "none";
  var nav = document.querySelector("nav");
  nav.style.display = "none";
}

if (typeof Storage !== "undefined") {
  if (localStorage.getItem("pageVisitCount")) {
    let count = parseInt(localStorage.getItem("pageVisitCount")) + 1;
    localStorage.setItem("pageVisitCount", count);
    document.getElementById("time-visited").textContent = count;
  } else {
    localStorage.setItem("pageVisitCount", 1);
    document.getElementById("time-visited").textContent = 1;
  }
} else {
  document.getElementById("time-visited").textContent =
    "Sorry, your browser does not support Web Storage.";
}

//weather js
// Replace 'YOUR_API_KEY' with your actual API key from OpenWeatherMap
const apiKey = "898a9d515472d0d0e3657b84cf2e937b";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Ado, NG&appid=${apiKey}&units=metric`;

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const iconCode = data.weather[0].icon;

    document.getElementById(
      "temperature"
    ).textContent = `${temperature}°C`;
    document.getElementById(
      "description"
    ).textContent = `${description}`;

    // Update the weather icon with the appropriate icon URL
    const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
    document.getElementById("weather-icon").src = iconUrl;
  })
  .catch((error) => {
    console.error("Error fetching weather data:", error);
  });
