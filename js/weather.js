const API_KEY = "08489efdf03a574de4c117cc924d8432";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log(lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  //   console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.name, data.weather[0].main);
      // const weatherIcon = document.querySelector("#weather img");
      const city = document.querySelector("#weather span:nth-child(1)");
      const temp = document.querySelector("#weather span:nth-child(2)");
      const weather = document.querySelector("#weather span:nth-child(3)");
      // inspector > Network > URL: Preview
      // weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
      weather.innerText = data.weather[0].main;
      city.innerText = data.name;
      city.style.borderRight = "1px solid rgba(255, 255, 255, 0.5)";
      city.style.paddingRight = "10px";
      // const toCelsius = data.main.temp - 273.15;
      temp.innerText = `${(data.main.temp - 273.15).toFixed(1)}°C`;
    });
}

function onGeoError() {
  alert("error");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
