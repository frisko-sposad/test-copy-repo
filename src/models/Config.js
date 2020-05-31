export default class {
  constructor() {
    this.scaleIndex = 0;
    this.languageIndex = 0;

    this.scales = ['M', 'I'];
    this.languages = ['en', 'ru', 'be'];
  }

  changeScale() {
    this.scaleIndex = (this.scaleIndex + 1) % this.scales.length;
  }

  changeLanguage() {
    this.languageIndex = (this.languageIndex + 1) % this.languages.length;
  }

  getScale() {
    return this.scales[this.scaleIndex];
  }

  getLanguage() {
    return this.languages[this.languageIndex];
  }
}
