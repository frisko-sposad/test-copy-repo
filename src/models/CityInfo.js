export default class {
  constructor(latitude, longitude, timezone, city, countryCode, weatherCurrent, weatherArr) {
    this.latitude = latitude;
    this.longitude = longitude;
    this.timezone = timezone;
    this.city = city;
    this.countryCode = countryCode;
    this.weatherCurrent = weatherCurrent;
    this.weatherArr = weatherArr;
  }
}
