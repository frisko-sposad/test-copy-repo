import ViewMap from './ViewMap';

const body = document.querySelector('.body');

const locationElement = document.querySelector('.location');

const mapCoordinates = document.querySelector('.geolocation__coordinates');

const dateTimeElement = document.querySelector('.date-time');

const weatherNum = document.querySelector('.weather__num');
const weatherSymbol = document.querySelector('.weather__symbol');
const weatherText = document.querySelector('.weather__text');
const weatherNumMinArr = document.querySelectorAll('.weather__num_min');
const weatherSymbolMinArr = document.querySelectorAll('.weather__symbol_min');
const weatherDayArr = document.querySelectorAll('.weather__day');

const errorMessage = document.querySelector('.error-message');

const changeBg = document.querySelector('.control-bar__change-bg');
const changeLang = document.querySelector('.control-bar__change-lang');
const changeScale = document.querySelector('.control-bar__change-scale');
const searchButton = document.querySelector('.search-bar__button');


const viewMap = new ViewMap();

export default class {
  static setBackground(imgUrl) {
    body.style.backgroundImage = `linear-gradient(rgba(8, 15, 26, 0.5) 0%, rgba(17, 17, 46, 0.3) 100%), url(${imgUrl})`;
  }

  static setDateTime(dateTime, config) {
    const dayOfWeek = dateTime.getDay();
    const date = dateTime.getDate();
    const month = dateTime.getMonth();
    const time = config !== undefined && config.weather !== undefined
      ? dateTime.toLocaleTimeString('ru-RU', { timeZone: config.weather.timezone })
      : dateTime.toLocaleTimeString();
    dateTimeElement.innerHTML = `${config.getDayOfWeek(dayOfWeek)} ${date} ${config.getMonth(month)}, ${time}`;
  }

  static parseGradesAndMinutes(value) {
    return `${Math.floor(value)}°${Math.round((Math.abs(value) % 1) * 60)}'`;
  }

  static setWeather(config) {
    const cityInfo = config.weather;
    
    changeBg.innerHTML = config.objectsText.btnBg[config.languageIndex];
    changeLang.innerHTML = config.objectsText.btnLang[config.languageIndex];
    changeScale.innerHTML = config.scaleText.btnScale[config.scaleIndex];
    searchButton.innerHTML = config.objectsText.btnSearch[config.languageIndex];

    locationElement.innerText = `${cityInfo.city}, ${cityInfo.countryLang}`;
    mapCoordinates.innerHTML = `${config.objectsText.Latitude[config.languageIndex]}: `;
    mapCoordinates.innerHTML += `${this.parseGradesAndMinutes(cityInfo.latitude)}`;
    mapCoordinates.innerHTML += `<br>${config.objectsText.Longitude[config.languageIndex]}: `;
    mapCoordinates.innerHTML += `${this.parseGradesAndMinutes(cityInfo.longitude)}`;

    weatherNum.innerHTML = `${Math.round(cityInfo.weatherCurrent.temperature)}°`;
    weatherSymbol.setAttribute('src', `./assets/images/weather_icons/${cityInfo.weatherCurrent.icon}.png`);
    weatherSymbol.setAttribute('alt', `${cityInfo.weatherCurrent.description}`);

    weatherText.innerHTML = `${cityInfo.weatherCurrent.description.toUpperCase()}<br>`;
    weatherText.innerHTML += `${config.objectsText.txtFeelLike[config.languageIndex].toUpperCase()}: `;
    weatherText.innerHTML += `${Math.round(cityInfo.weatherCurrent.apparentTemperature)}°<br>`;
    weatherText.innerHTML += `${config.objectsText.txtWind[config.languageIndex].toUpperCase()}: `;
    weatherText.innerHTML += `${Math.round(cityInfo.weatherCurrent.windSpeed)}`;
    weatherText.innerHTML += ` ${config.scaleText.speed[config.scaleIndex][config.languageIndex]}<br>`;
    weatherText.innerHTML += `${config.objectsText.txtHumidity[config.languageIndex].toUpperCase()}: `;
    weatherText.innerHTML += `${Math.round(cityInfo.weatherCurrent.humidity)}%`;

    for (let i = 0; i < 3; i += 1) {
      weatherNumMinArr[i].innerHTML = `${Math.round(cityInfo.weatherArr[i].temperature)}°`;
      weatherSymbolMinArr[i].setAttribute('src', `./assets/images/weather_icons/${cityInfo.weatherArr[i].icon}.png`);
      weatherSymbolMinArr[i].setAttribute('alt', `${cityInfo.weatherArr[i].description}`);
      weatherDayArr[i].innerHTML = config.getDayOfWeek(cityInfo.weatherArr[i].dayOfWeek);
    }

    const coord = [cityInfo.latitude, cityInfo.longitude];
    if (!this.map) {
      this.map = new ymaps.Map('map', {
        center: coord,
        zoom: 7,
      }); 
    } else {
      this.map.setCenter(coord);
    }
  }

  static showError(errorText) {
    errorMessage.innerHTML = errorText === ''
      ? ''
      : `ОШИБКА: ${errorText.toString()}`;
  }
}
