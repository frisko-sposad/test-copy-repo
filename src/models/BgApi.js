export default class {
  constructor(key) {
    this.url = `https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=nature&client_id=${key}`;
  }

  async getImg() {
		try {
			const res = await fetch(this.url);
			const json = await res.json();
			return json.urls.regular;
		} catch { 
			return './assets/img/bg-default.jpg';   
		}
		
	}
}