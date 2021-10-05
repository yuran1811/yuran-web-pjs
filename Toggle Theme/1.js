const SocialPanel_container = document.querySelector('.social-panel-container');
const FloatingBtn = document.querySelector('.floating-btn');
const ToggleBtn = document.querySelector('#toggle-btn');
const CloseBtn = document.querySelector('.close-btn');

ToggleBtn.addEventListener('change', (e) => {document.body.classList.toggle('dark');});

FloatingBtn.addEventListener('mouseover', (e) => {SocialPanel_container.classList.toggle('visible')});
FloatingBtn.addEventListener('mousedown', (e) => {SocialPanel_container.classList.remove('visible')});

CloseBtn.addEventListener('click', (e) => {SocialPanel_container.classList.remove('visible')});