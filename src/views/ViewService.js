const body = document.getElementById('body');
const location = document.getElementById('location');
const coordinate = document.getElementById('coordinate');

export default class ViewService {
  static setBackground(imgUrl) {
    body.style.background = `linear-gradient(rgba(8, 15, 26, 0.5) 0%, rgba(17, 17, 46, 0.3) 100%) center center / cover fixed, url(${imgUrl}) top center no-repeat fixed`;
  }

  static setLocation(loc) {
    location.innerText = `${loc.city}<br>${loc.country}`;
    coordinate.innerText = `${loc.Latitude},${loc.Longitude}`;
  }
}
