export default class {
  constructor(key) {
    this.url = `https://ipinfo.io/json?token=${key}`;
  }

  async getLocation() {
    try {
      const res = await fetch(this.url);
      const json = await res.json();
      return json.loc.split(',').map((v) => parseFloat(v));
    } catch (e) {
      console.log(`Ошибка получения информации об IP: ${e}`);
      return [55.75, 37.62];
    }
  }
}
