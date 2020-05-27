import BgApi from './BgApi';
import key from './keys'

const bgApi = new BgApi(key.bg);

export default class {
	async getBackgroungImage() {
		return await bgApi.getImg();
	}
}