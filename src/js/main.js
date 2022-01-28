const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const menuToggle = $('.menu');
const mainContainer = $('.main');
const navbarContainer = $('.navbar-container');
const linkList = $$('.links .lk');

(() => {
	for (let link of linkList)
		link.addEventListener('click', (e) => {
			const last = $('.liactive');
			last.className = last.className.replace(' liactive', '');
			e.target.className += ' liactive';
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

(() => {
	const toTop = $('.to-top');
	$('.main').onscroll = () => {
		if ($('.main').scrollTop > 170) toTop.style.display = 'block';
		else toTop.style.display = 'none';
	};
})();

const allSection = $$('.main > section');
const inView = (item) => {
	let rect = item.getBoundingClientRect();
	return rect.y <= 50 && rect.bottom >= 180;
};

mainContainer.addEventListener('scroll', () => {
	allSection.forEach((item, index) => {
		if (inView(item)) {
			const last = $('.liactive');
			last.className = last.className.replace(' liactive', '');
			linkList[index].className += ' liactive';
		}
	});
});
