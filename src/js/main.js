const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const THEME = localStorage.getItem('theme') || 'dark';

const menuToggle = $('.menu');
const themeToggle = $('#toggle-btn');
const mainContainer = $('.main');
const navbarContainer = $('.navbar-container');
const linksEle = $('.links');
const linkList = $$('.links .lk');
const toTop = $('.to-top');
const allSection = $$('.main > section');

const inView = (item) => {
	let rect = item.getBoundingClientRect();
	return rect.y <= 50 && rect.bottom >= 180;
};
const themeChange = (type = 'dark') => {
	if (type == 'dark') {
		document.body.classList.add('dark');
		themeToggle.checked = 1;
	}

	if (type == 'light') {
		document.body.classList.remove('dark');
		themeToggle.checked = 0;
	}
};
const menuActiveHandle = () => {
	navbarContainer.classList.toggle('active');
	mainContainer.classList.toggle('active');
	menuToggle.classList.toggle('active');
};

menuActiveHandle();
themeChange(THEME);

menuToggle.onclick = menuActiveHandle;
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
mainContainer.onscroll = () => {
	if (mainContainer.scrollTop > 170) toTop.style.display = 'block';
	else toTop.style.display = 'none';

	allSection.forEach((item, index) => {
		if (inView(item)) {
			const last = $('.liactive');
			last && last.classList.remove('liactive');
			linkList[index].className += ' liactive';
		}
	});
};

setInterval(() => {
	if (window.innerWidth <= 640) {
		if (menuToggle.classList.contains('active'))
			linksEle.addEventListener('click', menuActiveHandle);
		else linksEle.removeEventListener('click', menuActiveHandle);
	}
}, 500);
