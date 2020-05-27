import Controller from './controllers/Controller';

const buttonChangeBackground = document.querySelector('.menu-btn__chenge-bg');
buttonChangeBackground.addEventListener('click', () => {
  Controller.chageBackground();
});

Controller.chageBackground();

Controller.getLocation();
