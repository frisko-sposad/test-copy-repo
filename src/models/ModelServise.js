import BgApi from './BgApi';
import keys from './keys';
import LocationAPI from './LocationAPI';

const bgApi = new BgApi(keys.bg);
const locationAPI = new LocationAPI(keys.bg);

export default class {
  static async getBackgroungImage() {
    return bgApi.getImg();
  }

  static async getLocation() {
    return locationAPI.getLocation();
  }
}
