import ViewService from '../views/ViewService';
import ModelServise from '../models/ModelServise';

export default class {
  static async chageBackground() {
    const imgUrl = await ModelServise.getBackgroungImage();
    ViewService.setBackground(imgUrl);
  }

  static async getLocation() {
    const location = await ModelServise.getLocation();
    ViewService.setlocation(location);
  }
}
