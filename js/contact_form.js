const contactForm = document.querySelector("#contact-form-desktop");
const submitBtn = document.querySelector(".submit-btn");
const nameInput = document.querySelector("#user_name");
const emailInput = document.querySelector("#user_email");
const messageInput = document.querySelector("#message");

const publicKey = "e57EhNdvqqwWkpB9j";
const serviceId = "service_zt2weso";
const templateId = "template_dlrbyup";

emailjs.init(publicKey);

contactForm.addEventListener("submit", (e) => {
	e.preventDefault();
	submitBtn.innerText = "Just a moment...";
	const inputFields = {
		name: nameInput.value,
		email: emailInput.value,
		message: messageInput.value,
	};
	emailjs
		.send(serviceId, templateId, inputFields)
		.then(() => {
			submitBtn.innerText = "Message sent successfully";
			nameInput.value = "";
			emailInput.value = "";
			messageInput.value = "";
			setTimeout(() => {
				submitBtn.innerText = "Send message";
			}, 3000);
		})
		.catch((error) => {
			console.error("Something went wrong:", error);
			submitBtn.innerText = "Something went wrong";
		});
});
