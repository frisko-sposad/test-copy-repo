import ViewService from '../views/ViewService';
import ModelServise from '../models/ModelServise';

export default class {
  static async chageBackground() {
    const imgUrl = await ModelServise.getBackgroungImage();
    ViewService.setBackground(imgUrl);
  }

  static runTime() {
    function clock() {
      const date = new Date();
      ViewService.setDateTime(date);
    }
    setInterval(clock, 1000);
    clock();
  }

  static async getWeather(city) {
    const weather = await ModelServise.getWeather(city);
    ViewService.setWeather(weather);
  }
}
