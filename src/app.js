import Controller from './controllers/Controller';

const controller = new Controller();

const buttonChangeBackground = document.querySelector('.menu-btn__chenge-bg');
buttonChangeBackground.addEventListener('click', () => {
	controller.chageBackground();
})
