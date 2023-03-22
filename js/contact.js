const text = "Get in touch";
let index = 0;
const speed = 200;
const textAnimation = document.getElementById("typeText");

function type() {
	if (index < text.length) {
		textAnimation.innerHTML += text.charAt(index);
		index++;
		setTimeout(type, speed);
	}
}

type();
