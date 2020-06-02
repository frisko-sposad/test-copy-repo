export default class {
  constructor() {
    this.scaleIndex = parseInt(localStorage.scaleIndex, 10);
    if (Number.isNaN(this.scaleIndex)) this.scaleIndex = 0;
    
    this.languageIndex = parseInt(localStorage.languageIndex, 10);
    if (Number.isNaN(this.languageIndex)) this.languageIndex = 0;

    this.scales = ['M', 'I'];
    this.languages = ['en', 'ru', 'be'];
    this.daysOfWeek = [
      ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
      ['Нядзелю', 'Панядзелак', 'Аўторак', 'Серада', 'Чацвер', 'Пятніцу', 'Суботу'],
    ];
    this.months = [
      ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
      ['Студзеня', 'Лютага', 'Сакавіка', 'Красавіка', 'Май', 'Чэрвеня', 'Ліпеня', 'Жніўня', 'Верасня', 'Кастрычніка', 'Лістапад', 'Снежні'],
    ];

    this.scaleText = {
      btnScale: ['°C', '°F'],
      speed: [
        ['m/s', 'м/с', 'м/с'],
        ['mph', 'миль/ч', 'міль/ч']
      ],
    }

    this.objectsText = {
      btnBg: ['BG', 'Фон', 'Фон'],
      btnLang: ['En', 'Ru', 'BY'],
      btnSearch: ['Search', 'Поиск', 'Пошук'],
      // placeholderSearch = ['BG', 'Фон', ''],
      txtFeelLike: ['Feel like', 'Ощущается', 'Адчуваецца'],
      txtWind: ['Wind', 'Ветер', 'Вецер'],
      txtHumidity: ['Humidity', 'Влажность', 'Вільготнасць'],
      Latitude: ['Latitude', 'Широта', 'Шырата'],
      Longitude: ['Longitude', 'Долгота', 'Даўгата'],
    };
  }

  changeScale() {
    this.scaleIndex = (this.scaleIndex + 1) % this.scales.length;
    localStorage.setItem('scaleIndex', this.scaleIndex);
  }

  changeLanguage() {
    this.languageIndex = (this.languageIndex + 1) % this.languages.length;
    localStorage.setItem('languageIndex', this.languageIndex);
  }

  getScale() {
    return this.scales[this.scaleIndex];
  }

  getLanguage() {
    return this.languages[this.languageIndex];
  }

  getDayOfWeek(index) {
    return this.daysOfWeek[this.languageIndex][index];
  }

  getMonth(index) {
    return this.months[this.languageIndex][index];
  }
}
