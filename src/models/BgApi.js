export default class {
  constructor(key) {
    this.url = `https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=nature&client_id=${key}`;
  }

  async getImg() {
    const res = await fetch(this.url);
    const json = await res.json();
    if (json === undefined || json.urls === undefined || json.urls.regular === undefined) {
      alert('Не удалось получить фоновую картинку!');
      return;
    }
    return json.urls.regular;
  }
}