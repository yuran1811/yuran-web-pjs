const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const menuToggle = $('.menu');
const mainContainer = $('.main');
const navbarContainer = $('.navbar-container');

(() => {
	const linkList = $$('.links .lk');
	for (let link of linkList)
		link.addEventListener('click', (e) => {
			const last = $('.liactive');
			last.className = last.className.replace(' liactive', '');
			e.path[1].className += ' liactive';
		});
})();

function toggleActive() {
	(() => {
		navbarContainer.classList.toggle('active');
		mainContainer.classList.toggle('active');
		menuToggle.classList.toggle('active');
	})();
}

$('#toggle-btn').addEventListener('change', () => {
	document.body.classList.toggle('dark');
});

menuToggle.addEventListener('click', toggleActive);

setInterval(() => {
	if (window.innerWidth <= 640) {
		if (menuToggle.classList.contains('active'))
			$('.links').addEventListener('click', toggleActive);
		else $('.links').removeEventListener('click', toggleActive);
	}
}, 500);
