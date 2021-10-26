const menuToggle = document.querySelector(".menu");
const mainContainer = document.querySelector(".main");
const labelToggle = document.querySelector('.label');
const navbarContainer = document.querySelector(".navbar-container");
menuToggle.addEventListener("click", () => {
	navbarContainer.classList.toggle("active");
	mainContainer.classList.toggle("active");
	labelToggle.classList.toggle("active");
	menuToggle.classList.toggle("active");
})

const ToggleBtn = document.querySelector('#toggle-btn');
ToggleBtn.addEventListener('change', (e) => {document.body.classList.toggle('dark');});
