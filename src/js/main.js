const menuToggle = document.querySelector('.menu');
const mainContainer = document.querySelector('.main');
const navbarContainer = document.querySelector('.navbar-container');

(() => {
	const linkList = document.querySelectorAll('.links .lk');
	for (let link of linkList)
		link.addEventListener('click', (e) => {
			let last = document.querySelector('.liactive');
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

document.querySelector('#toggle-btn').addEventListener('change', () => {
	document.body.classList.toggle('dark');
});

menuToggle.addEventListener('click', toggleActive);

setInterval(() => {
	if (window.innerWidth <= 640) {
		if (menuToggle.classList.contains('active'))
			document
				.querySelector('.links')
				.addEventListener('click', toggleActive);
		else
			document
				.querySelector('.links')
				.removeEventListener('click', toggleActive);
	}
}, 500);
