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
      console.log(e);
      return new Location('156.3500', '138.1167');
    }
  }
}
