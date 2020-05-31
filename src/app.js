import Controller from './controllers/Controller';

Controller.changeBackground();
Controller.showWeather();
Controller.runTime();

const buttonChangeBackground = document.querySelector('.control-bar__change-bg');
const btnSearch = document.querySelector('.search-bar__button');
const inputSearch = document.querySelector('.search-bar__input');
const btnLang = document.querySelector('.control-bar__change-lang');
const changeScale = document.querySelector('.control-bar__change-scale');

buttonChangeBackground.addEventListener('click', () => {
  Controller.changeBackground();
});

btnSearch.addEventListener('click', () => {
  Controller.showWeather(inputSearch.value);
});

document.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) { Controller.showWeather(inputSearch.value); }
});

btnLang.addEventListener('click', () => {
  Controller.changeLanguage();
});

changeScale.addEventListener('click', () => {
  Controller.changeScale();
});