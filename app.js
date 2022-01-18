const background = document.getElementById('background');
const colorText = document.getElementById('color');
const hexBtn = document.getElementById('hex');
const textBtn = document.getElementById('text');

document.getElementById('click-me').addEventListener('click', clickMe);
document.getElementById('hex').addEventListener('click', clickMe);

function clickMe() {
	// let a = colorText;
	return (background.style.backgroundColor =
		colorText.innerHTML =
		colorText.style.color =
			colorGenerator());
}

function colorGenerator() {
	const hex = '0123456789ABCDEF'.split('');
	let color = '#';
	for (var i = 0; i < 6; i++) {
		color += hex[Math.floor(Math.random() * 16)];
	}
	return color;
}
