const menuToggle = document.querySelector('.menu');
const labelToggle = document.querySelector('.label');
const mainContainer = document.querySelector('.main');
const navbarContainer = document.querySelector('.navbar-container');
menuToggle.addEventListener('click', () => {
	navbarContainer.classList.toggle('active');
	mainContainer.classList.toggle('active');
	labelToggle.classList.toggle('active');
	menuToggle.classList.toggle('active');

	let linkList = document.querySelectorAll('.links .lk');
	console.log(typeof linkList);
	for (var link of linkList)
		link.addEventListener('click', (e) => {
			let last = document.querySelector('.liactive');
			last.className = last.className.replace(' liactive', '');
			e.path[1].className += ' liactive';
		});
});

const ToggleBtn = document.querySelector('#toggle-btn');
ToggleBtn.addEventListener('change', () => {
	document.body.classList.toggle('dark');
});

function adjustMedia() {
	let linkList = document.querySelectorAll('.links .lk');
	for (var link of linkList)
		link.addEventListener('click', (e) => {
			let last = document.querySelector('.liactive');
			last.className = last.className.replace(' liactive', '');
			e.path[1].className += ' liactive';

			navbarContainer.classList.toggle('active');
			mainContainer.classList.toggle('active');
			labelToggle.classList.toggle('active');
			menuToggle.classList.toggle('active');
		});
}

let isMatched = false;
let isAdjust = false;

const mediaQueryList = window.matchMedia('(max-width: 640px)');
mediaQueryList.addListener((e) => {
	if (e.matches && !isMatched && !isAdjust) {
		adjustMedia();
		isMatched = true;
	}
});

setInterval(() => {
	if (window.innerWidth <= 640 && !isAdjust && !isMatched) {
		adjustMedia();
		isAdjust = true;
	}
}, 1000);
