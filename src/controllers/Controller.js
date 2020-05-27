import ViewService from '../views/ViewService';
import ModelServise from '../models/ModelServise';

const viewService = new ViewService();
const modelServise = new ModelServise();

export default class {
  async chageBackground() {		
    const imgUrl = await modelServise.getBackgroungImage();
		viewService.setBackground(imgUrl);
  }
}
