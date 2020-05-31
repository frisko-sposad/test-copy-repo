import keys from './keys';
import Config from './Config';
import BgApi from './BgApi';
import LocationAPI from './LocationAPI';
import WeatherAPI from './WeatherAPI';

const bgApi = new BgApi(keys.bg);
const locationAPI = new LocationAPI(keys.location);
const weatherAPI = new WeatherAPI(keys.weather);
const config = new Config();

export default class {
  static async getBackgroungImage() {
    return bgApi.getImg();
  }

  static async getWeather(city) {
    if (!city) {
      const locArr = await locationAPI.getLocation();
      return weatherAPI.getWeather(config.getScale(), config.getLanguage(), locArr);
    }
    return weatherAPI.getWeather(config.getScale(), config.getLanguage(), city);
  }
}
