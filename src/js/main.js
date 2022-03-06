const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const THEME = localStorage.getItem('theme') || 'light';

const menuToggle = $('.menu');
const themeToggle = $('#toggle-btn');
const mainContainer = $('.main');
const navbarContainer = $('.navbar-container');
const linkList = $$('.links .lk');

if (THEME === 'dark') {
	document.body.classList.add('dark');
	themeToggle.checked = 1;
} else document.body.classList.remove('dark');

linkList.forEach((link) => {
	link.onclick = () => {
		const last = $('.liactive');
		if (last) last.className = last.className.replace(' liactive', '');
		link.className += ' liactive';
	};
});

themeToggle.onchange = () => {
	document.body.classList.toggle('dark');
	if (document.body.className.includes('dark'))
		localStorage.setItem('theme', 'dark');
	else localStorage.setItem('theme', 'light');
};

const toggleActive = () => {
	navbarContainer.classList.toggle('active');
	mainContainer.classList.toggle('active');
	menuToggle.classList.toggle('active');
};

menuToggle.onclick = toggleActive;

setInterval(() => {
	if (window.innerWidth <= 640) {
		if (menuToggle.classList.contains('active'))
			$('.links').addEventListener('click', toggleActive);
		else $('.links').removeEventListener('click', toggleActive);
	}
}, 500);

const toTop = $('.to-top');
$('.main').onscroll = () => {
	if ($('.main').scrollTop > 170) toTop.style.display = 'block';
	else toTop.style.display = 'none';
};

const allSection = $$('.main > section');
const inView = (item) => {
	let rect = item.getBoundingClientRect();
	return rect.y <= 50 && rect.bottom >= 180;
};

mainContainer.onscroll = () => {
	allSection.forEach((item, index) => {
		if (inView(item)) {
			const last = $('.liactive');
			if (last) last.className = last.className.replace(' liactive', '');
			linkList[index].className += ' liactive';
		}
	});
};
