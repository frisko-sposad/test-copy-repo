export default class {
  constructor(latitude, longitude, timezone, city, country, weatherCurrent, weatherArr) {
    this.latitude = latitude;
    this.longitude = longitude;
    this.timezone = timezone;
    this.city = city;
    this.country = country;
    this.weatherCurrent = weatherCurrent;
    this.weatherArr = weatherArr;

    this.cityLang = city;
    this.countryLang = country;
  }
}
