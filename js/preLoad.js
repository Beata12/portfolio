document.querySelector(".main").style.display = "none";
document.getElementById("load").classList.add("loader");
document.getElementById("logo").classList.add("ader");
document.getElementById("ball").classList.add("circul");
document.getElementById("balls").classList.add("circules");
document.getElementById("ball1").classList.add("circul1");
document.getElementById("ball2").classList.add("circul2");
document.getElementById("ball3").classList.add("circul3");
document.getElementById("ball4").classList.add("circul4");
document.getElementById("ball5").classList.add("circul5");
document.getElementById("ball6").classList.add("circul6");

setTimeout(() => {
	document.getElementById("load").classList.remove("loader");
	document.getElementById("logo").classList.remove("ader");
	document.getElementById("ball").classList.remove("circul");
	document.getElementById("balls").classList.remove("circules");
	document.getElementById("ball1").classList.remove("circul1");
	document.getElementById("ball2").classList.remove("circul2");
	document.getElementById("ball3").classList.remove("circul3");
	document.getElementById("ball4").classList.remove("circul4");
	document.getElementById("ball5").classList.remove("circul5");
	document.getElementById("ball6").classList.remove("circul6");
	document.querySelector(".main").style.display = "block";
}, 4000);

setTimeout(function () {
	document.querySelector(".container").classList.add("hide");
}, 4000);
