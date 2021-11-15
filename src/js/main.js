const menuToggle = document.querySelector('.menu');
const labelToggle = document.querySelector('.label');
const mainContainer = document.querySelector('.main');
const navbarContainer = document.querySelector('.navbar-container');
menuToggle.addEventListener('click', () => {
	navbarContainer.classList.toggle('active');
	mainContainer.classList.toggle('active');
	labelToggle.classList.toggle('active');
	menuToggle.classList.toggle('active');

	let linkList = document.querySelector('.links').getElementsByClassName('lk');
	for (var i = 0; i < linkList.length; i++) {
		linkList[i].addEventListener('click', function () {
			let current = document.getElementsByClassName('liactive');
			current[0].className = current[0].className.replace(' liactive', '');
			this.className += ' liactive';
		});
	}
});

const ToggleBtn = document.querySelector('#toggle-btn');
ToggleBtn.addEventListener('change', (e) => {
	document.body.classList.toggle('dark');
});


var mediaQueryList = window.matchMedia('(max-width: 640px)');
mediaQueryList.addListener((e) => {
	if (e.matches) {
		let linkList = document.querySelector('.links').getElementsByClassName('lk');
		for (var i = 0; i < linkList.length; i++) {
			linkList[i].addEventListener('click', function () {
				let current = document.getElementsByClassName('liactive');
				current[0].className = current[0].className.replace(' liactive', '');
				this.className += ' liactive';
				navbarContainer.classList.toggle('active');
				mainContainer.classList.toggle('active');
				labelToggle.classList.toggle('active');
				menuToggle.classList.toggle('active');
			});
		}
	}
})