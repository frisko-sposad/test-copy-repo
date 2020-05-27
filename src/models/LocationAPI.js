import Location from './Location';
export default class {
  constructor(key) {
    this.url = `https://ipinfo.io/json?token=${key}`;
  }

  async getLocation() {
		try {
			const res = await fetch(this.url);
			const json = await res.json();
			let locArr = json.loc.split(',');
			let Latitude;
			let Longitude;
			console.log(json);
			return new Location (json.city, json.region, json.country,  json.loc, json.loc, json.timezone);
		} catch { 
			return new Location ('Sergiev_Posad', 'Mosk obl', 'Russia',  '56.3500','38.1167', 'Europe/Moscow');   
		}
		
	}
}