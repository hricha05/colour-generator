document
	.getElementById('click-me')
	.addEventListener('click', hexFormatGenerator);
document
	.getElementById('simple')
	.addEventListener('click', textFormatGenerator);
document.getElementById('hex').addEventListener('click', hexFormatGenerator);
const colorText = document.getElementById('color');
colorText.style.color = colorText.innerHTML = hexFormatGenerator();

function clickMe() {
	console.log('click');
}

function hexFormatGenerator() {
	const hex = '0123456789ABCDEF'.split('');
	let color = '#';
	for (var i = 0; i < 6; i++) {
		color += hex[Math.floor(Math.random() * 16)];
	}
	console.log(color);
	return color;
}

function textFormatGenerator() {
	console.log('simple text');
}

function myColor() {
	const el = document.getElementById('color');
	el.ontoggle;
}
