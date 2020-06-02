import Response from './Response';

export default class {
  constructor(key) {
    this.url = `https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=nature&client_id=${key}`;
  }

  async getImage() {
    try {
      const res = await fetch(this.url);
      const json = await res.json();
      return new Response(true, json.urls.regular);
    } catch (e) {
      return new Response(false, `Ошибка получения фона: ${e}`);
    }
  }
}
