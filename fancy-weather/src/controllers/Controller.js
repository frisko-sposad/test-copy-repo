import ViewService from '../views/ViewService';
import ModelService from '../models/ModelService';

const defaultImageUrl = './assets/images/bg-default.jpg';

export default class Controller {
  static async changeBackground() {
    const response = await ModelService.getBackgroundImageUrl();
    if (response.success) {
      ViewService.setBackground(response.result);
    } else {
      ViewService.showError(response.error);
      ViewService.setBackground(defaultImageUrl);
    }
  }

  static runTime() {
    function clock() {
      const dateTime = new Date();
      ViewService.setDateTime(dateTime, ModelService.getConfig());
    }
    setInterval(clock, 1000);
    clock();
  }

  static async showWeather(city) {
    ViewService.showError('');
    const response = await ModelService.getWeather(city);
    if (response.success) {
      ViewService.setWeather(ModelService.getConfig());
    } else {
      ViewService.showError(response.error);
    }
  }

  static changeLanguage() {
    ModelService.changeLanguage();
    this.showWeather();
  }

  static changeScale() {
    ModelService.changeScale();
    this.showWeather();
  }
}
