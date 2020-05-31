import Weather from './Weather';
import CityInfo from './CityInfo';

export default class {
  constructor(key) {
    this.key = key;
  }

  async getCurrent(scale, language, parametr) {
    const urlCurrent = Array.isArray(parametr)
      ? `https://api.weatherbit.io/v2.0/current/current?lat=${parametr[0]}&lon=${parametr[1]}&units=${scale}&lang=${language}&key=${this.key}`
      : `https://api.weatherbit.io/v2.0/current/current?city=${parametr}&days=4&units=${scale}&lang=${language}&key=${this.key}`;
    const res = await fetch(urlCurrent);
    const json = await res.json();
    const data = json.data[0];
    const weather = new Weather(parseFloat(data.temp), data.weather.icon, data.weather.description,
      parseFloat(data.app_temp), parseFloat(data.wind_spd), parseFloat(data.rh));
    const cityInfo = new CityInfo(data.lat, data.lon, data.timezone,
      data.city_name, data.country_code, weather);
    return cityInfo;
  }

  async getForecast(scale, language, parametr) {
    const urlForecast = Array.isArray(parametr)
      ? `https://api.weatherbit.io/v2.0/forecast/daily?lat=${parametr[0]}&lon=${parametr[1]}&days=4&units=${scale}&lang=${language}&key=${this.key}`
      : `https://api.weatherbit.io/v2.0/forecast/daily?city=${parametr}&days=4&units=${scale}&lang=${language}&key=${this.key}`;
    const res = await fetch(urlForecast);
    const json = await res.json();
    const weatherArr = [];
    for (let i = 1; i < 4; i += 1) {
      const data = json.data[i];
      const weather = new Weather(parseFloat(data.temp), data.weather.icon);
      weatherArr.push(weather);
    }
    return weatherArr;
  }

  async getWeather(scale, language, parametr) {
    try {
      const cityInfo = this.getCurrent(scale, language, parametr);
      const weatherArr = this.getForecast(scale, language, parametr);
      const values = await Promise.all([cityInfo, weatherArr]);
      values[0].weatherArr = values[1];
      return values[0];
    } catch (e) {
      console.log('Ошибка получения информации о погоде');
      console.log(e);
      return undefined;
    }
  }
}
