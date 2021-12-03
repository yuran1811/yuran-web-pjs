const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

(() => {
	const closeBtn = $('.close-btn');
	const floatBtn = $('.floating-btn');
	const socialPanelConatainer = $('.social-panel-container');

	floatBtn.addEventListener('mouseover', () => {
		socialPanelConatainer.classList.toggle('visible');
	});
	floatBtn.addEventListener('mouseout', () => {
		socialPanelConatainer.classList.remove('visible');
	});

	socialPanelConatainer.addEventListener('mouseover', () => {
		socialPanelConatainer.classList.toggle('visible');
	});
	socialPanelConatainer.addEventListener('mouseout', () => {
		socialPanelConatainer.classList.remove('visible');
	});

	closeBtn.addEventListener('click', () => {
		socialPanelConatainer.classList.remove('visible');
	});
})();

(() => {
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

	(() => {
		const toTop = $('.to-top');
		$('.main').onscroll = () => {
			if ($('.main').scrollTop > 170) toTop.style.display = 'block';
			else toTop.style.display = 'none';
		};
	})();
})();
