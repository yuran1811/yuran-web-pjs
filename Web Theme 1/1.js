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

const SocialPanel_container = document.querySelector('.social-panel-container');
const FloatingBtn = document.querySelector('.floating-btn');
const ToggleBtn = document.querySelector('#toggle-btn');
const CloseBtn = document.querySelector('.close-btn');

ToggleBtn.addEventListener('change', (e) => {document.body.classList.toggle('dark');});

FloatingBtn.addEventListener('mouseover', (e) => {SocialPanel_container.classList.toggle('visible');});
FloatingBtn.addEventListener('mouseout', (e) => {SocialPanel_container.classList.remove('visible');});
SocialPanel_container.addEventListener('mouseover', (e) => {SocialPanel_container.classList.toggle('visible');});
SocialPanel_container.addEventListener('mouseout', (e) => {SocialPanel_container.classList.remove('visible')});

CloseBtn.addEventListener('click', (e) => {SocialPanel_container.classList.remove('visible')});
