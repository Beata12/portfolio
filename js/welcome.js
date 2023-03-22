const text = "Welcome";
let index = 0;
const speed = 200;
const welcome = document.getElementById("mobileWelcome");

function type() {
	if (index < text.length) {
		welcome.innerHTML += text.charAt(index);
		index++;
		setTimeout(type, speed);
	}
}

type();
