import keys from './keys';
import Config from './Config';
import BackgroundAPI from './BackgroudAPI';
import LocationAPI from './LocationAPI';
import WeatherAPI from './WeatherAPI';
import YaTranslateApi from './YaTranslateApi';

const backgroundAPI = new BackgroundAPI(keys.bg);
const locationAPI = new LocationAPI(keys.ipinfo);
const weatherAPI = new WeatherAPI(keys.weather);
const yaTranslateApi = new YaTranslateApi(keys.yandex);

const config = new Config();

export default class {
  static getConfig() {
    return config;
  }

  static getBackgroundImageUrl() {
    return backgroundAPI.getImage();
  }

  static async getWeatherResponse(city) {
    if (!city) {
      const locArr = config.weather !== undefined
        ? [config.weather.latitude, config.weather.longitude]
        : await locationAPI.getLocation();
      return weatherAPI.getWeather(config.getScale(), config.getLanguage(), locArr);
    }
    let cityEn = city;
    if ((/[А-Яа-яЁё]/i).test(cityEn)) {
      const translateResponse = await yaTranslateApi.getTranslate(cityEn, 'ru', 'en');
      if (translateResponse.success) {
        cityEn = translateResponse.result;
      }
    }
    return weatherAPI.getWeather(config.getScale(), config.getLanguage(), cityEn);
  }

  static async getWeather(city) {
    const response = await this.getWeatherResponse(city);
    if (response.success) {
      if (config.getLanguage() !== 'en') {
        response.result.cityLang = (await yaTranslateApi.getTranslate(response.result.city, 'en', config.getLanguage())).result;
        response.result.countryLang = (await yaTranslateApi.getTranslate(response.result.country, 'en', config.getLanguage())).result;
      } else {
        response.result.cityLang = response.result.city;
        response.result.countryLang = response.result.country;
      }
      config.weather = response.result;
    }
    return response;
  }

  static changeLanguage() {
    config.changeLanguage();
  }

  static changeScale() {
    config.changeScale();
  }
}
