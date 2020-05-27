const body = document.getElementById('body');

export default class ViewService {
	setBackground(imgUrl) {
		body.style.backgroundImage = `url('${imgUrl}')`;
	}
}