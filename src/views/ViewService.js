const body = document.getElementById('body');
const location = document.getElementById('location');
const coordinate = document.getElementById('coordinate');
const dateTime = document.getElementById('date');

const weatherNum = document.querySelector('.weather-max__temperature-today');
const weatherSymbol = document.querySelector('.weather-max__icon');
const weatherText = document.querySelector('.weather-max__weather-data');
const weatherNumMinArr = document.querySelectorAll('.weather-mini__temperature');
const weatherSymbolMinArr = document.querySelectorAll('.weather-mini__icon');

export default class ViewService {
  static setBackground(imgUrl) {
    body.style.backgroundImage = `linear-gradient(rgba(8, 15, 26, 0.5) 0%, rgba(17, 17, 46, 0.3) 100%), url(${imgUrl})`;
  }

  static setDateTime(date) {
    dateTime.innerHTML = date.toLocaleString();
  }

  static setWeather(cityInfo) {
    console.log(cityInfo);
    location.innerText = `${cityInfo.city}, ${cityInfo.countryCode}`;
    coordinate.innerHTML = `Latitude: ${cityInfo.latitude}\nLongitude: ${cityInfo.longitude}`;
    weatherNum.innerHTML = `${Math.round(cityInfo.weatherCurrent.temperature)}°`;
    weatherSymbol.setAttribute('src', `./assets/img/${cityInfo.weatherCurrent.icon}.png`);
    weatherSymbol.setAttribute('alt', `${cityInfo.weatherCurrent.description}`);
    weatherText.innerHTML = `<p>${cityInfo.weatherCurrent.description.toUpperCase()}</p>\n`;
    weatherText.innerHTML += `<p>FELL LIKE: ${Math.round(cityInfo.weatherCurrent.apparentTemperature)}</p>\n`;
    weatherText.innerHTML += `<p>WIND: ${Math.round(cityInfo.weatherCurrent.windSpeed)} M/S</p>\n`;
    weatherText.innerHTML += `<p>HUMIDITY: ${Math.round(cityInfo.weatherCurrent.humidity)}%</p>`;
    for (let i = 0; i < 3; i += 1) {
      weatherNumMinArr[i].innerHTML = `${Math.round(cityInfo.weatherArr[i].temperature)}°`;
      weatherSymbolMinArr[i].setAttribute('src', `./assets/img/${cityInfo.weatherArr[i].icon}.png`);
      weatherSymbolMinArr[i].setAttribute('alt', `${cityInfo.weatherArr[i].description}`);
    }
  }
}
