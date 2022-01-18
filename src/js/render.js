const htmls = `
	<div class="top-bar">
		<div class="menu"><div class="bar"></div></div>
		<div class="title">
			<h1><a href="#banner">Web Projects</a></h1>
		</div>
		<div class="theme-toggle">
			<input
				type="checkbox"
				class="checkbox"
				id="toggle-btn"
			/>
			<label class="label" for="toggle-btn">
				<span class="moon"
					><i class="fas fa-moon"></i
				></span>
				<span class="sun"><i class="fas fa-sun"></i></span>
				<span class="ball"></span>
			</label>
		</div>
	</div>
	<section class="banner" id="banner">
		<h2 style="display: none">Bio</h2>
		<div class="content">
			<div class="imgBox">
				<div class="imgHover">
					<p class="imgHoverText">
						I'm a Front-end <br />
						Web Developer
						<br />
						<i
							class="bx bxs-yin-yang bx-spin bx-lg"
						></i>
					</p>
				</div>
				<img
					alt="Yuran Legends Avatar"
					src="src/image/Avatar.jpg"
				/>
			</div>
			<div
				style="
					text-decoration: none;
					font-size: 2rem;
					text-transform: uppercase;
					letter-spacing: 5.5px;
					font-weight: bold;
				"
			>
				Yuran Legends
			</div>
			<ul class="socialMedia">
				<li>
					<a
						class="fb"
						target="_blank"
						rel="noopener"
						href="https://www.facebook.com/YuranLegends/"
					>
						<i
							class="fa-2x fab fa-facebook"
							aria-hidden="true"
						></i>
					</a>
				</li>
				<li>
					<a
						class="insta"
						target="_blank"
						rel="noopener"
						href="https://instagram.com/_yuranlegends_"
						><i
							class="fa-2x fab fa-instagram"
							aria-hidden="true"
						></i>
					</a>
				</li>
				<li>
					<a
						class="yt"
						target="_blank"
						rel="noopener"
						href="https://www.youtube.com/channel/UCLXNBb-jZRS_3o_itGGrGRA"
						><i
							class="fa-2x fab fa-youtube"
							aria-hidden="true"
						></i>
					</a>
				</li>
				<li>
					<a
						class="gh"
						target="_blank"
						rel="noopener"
						href="https://github.com/yuran1811"
						><i
							class="fa-2x fab fa-github"
							aria-hidden="true"
						></i>
					</a>
				</li>
			</ul>
		</div>
	</section>`;

const main = document.querySelector('.main');
main.innerHTML = htmls + main.innerHTML;

// Other Section Render
const otherData = [
	{
		name: 'Detect Cheating',
		content: `
			<div class="other-item detect-cheating">
				<h3>Detect Cheating</h3>
				<p class="p-indent1">
					<span class="highlight">Detect Cheating</span>
					is used to check if someone leaves the page
					when any test is available
				</p>
				<p class="p-indent1">This site can:</p>
				<ul>
					<li>
						<p class="p-indent2">
							<i class="fas fa-check"></i> Display
							the number of times you're away
						</p>
					</li>
					<li>
						<p class="p-indent2">
							<i class="fas fa-check"></i> Display
							the time you're away
						</p>
					</li>
					<li>
						<p class="p-indent2">
							<i class="fas fa-check"></i> The
							site's title will also change when
							you get away
						</p>
					</li>
					<li>
						<p class="p-indent2">
							<i class="fas fa-check"></i> Toggle
							Dark Mode when the title is clicked
						</p>
					</li>
					<li>
						<p class="p-indent2">
							<i class="fas fa-check"></i> The
							history will be stored in Local
							Storage unless user click "Clear
							History" button
						</p>
					</li>
				</ul>
				<p class="p-indent1">
					Source Code on
					<a
						class="highlight"
						target="_blank"
						rel="noopener"
						href="https://github.com/yuran1811/detect-cheating-online-tests"
						>Github</a>
					and
					<a
						class="highlight"
						target="iframe_detect-cheating"
						href="https://yuran1811.github.io/detect-cheating-online-tests"
						onclick="document.getElementById('iframe_detect-cheating').style.display = 'none';"
						ondblclick="document.getElementById('iframe_detect-cheating').style.display = 'block';"
						>Demo Here</a>
					(double-click to view and single-click to hide)
					<br />
					(Please disable dark mode of this site if the "Demo" doesn't display well!)
				</p>
				<iframe
					id="iframe_detect-cheating"
					name="iframe_detect-cheating"
					style="height: 500px; width: 100%"
					title="Detect Cheating"
				></iframe>
			</div>
			<br />`,
	},
	{
		name: 'Project: Dinitz',
		content: `
			<div class="other-item dinitz">
				<h3>Project: Dinitz</h3>
				<p class="p-indent1">
					This repository is created to stored all the
					sources of the project.
				</p>
				<p class="p-indent1">
					Visit the site at
					<a
						class="highlight"
						target="_blank"
						rel="noopener"
						href="https://sites.google.com/view/project-dinitz"
						>Project: Dinitz</a>
					and the source on
					<a
						class="highlight"
						target="_blank"
						rel="noopener"
						href="https://github.com/yuran1811/project-dinitz"
						>Github</a>
				</p>
			</div>
			<br />`,
	},
	{
		name: 'CSS Battle Solutions',
		content: `
			<div class="other-item css-battle-solutions">
				<h3>CSS Battle Solutions</h3>
				<p class="p-indent1">
					This repository is created to stored solutions of
					<a
						class="highlight"
						href="https://cssbattle.dev/"
						target="_blank"
						rel="noopener"
					>CSS Battle</a>
				</p>
				<p class="p-indent1">
					Source code on
					<a
						class="highlight"
						target="_blank"
						rel="noopener"
						href="https://github.com/yuran1811/CSS-Battle-Solution"
					>Github</a>, discover 
					<a
						class="highlight"
						target="_blank"
						rel="noopener"
						href="https://yuran1811.github.io/CSS-Battle-Solution/"
					>more</a>
				</p>
			</div>
			<br />`,
	},
	{
		name: 'My VSCode Configuration',
		content: `
			<div class="other-item vs-config">
				<h3>My VSCode Configuration</h3>
				<p class="p-indent1">
					This repository is created to stored my VSCode settings
				</p>
				<p class="p-indent1">
					Gradient Theme on
					<a
						class="highlight"
						target="_blank"
						rel="noopener"
						href="https://github.com/yuran1811/VSCode-Config"
					>Github</a>
				</p>
			</div>
			<br />`,
	},
	{
		name: 'Form Validation Library',
		content: `
			<div class="other-item vs-config">
				<h3>Form Validation Library</h3>
				<p class="p-indent1">
					This Form Validator Library is used to validate the form
				</p>
				<p class="p-indent1">
					Source Code on
					<a
						class="highlight"
						target="_blank"
						rel="noopener"
						href="https://github.com/yuran1811/Form-Validator-Library"
					>Github</a> and Demo <a
						class="highlight"
						target="_blank"
						rel="noopener"
						href="https://yuran1811.github.io/Form-Validator-Library/"
					>Here</a>
				</p>
			</div>
			<br />`,
	},
	{
		name: 'Codeforces Toolkit',
		content: `
			<div class="other-item codeforces-toolkit">
				<h3>Codeforces Toolkit</h3>
				<p class="p-indent1">
					<span class="hightlight"> Codeforces Toolkit </span> helps you to
					<ul>
						<li>
							<p class="p-indent1">
								<i class="fas fa-check"></i> Search the problems that you want to do (search by name, tags, rating, contest ID)
							</p>
						</li>
						<li>
							<p class="p-indent1">
								<i class="fas fa-check"></i> Search user's info
							</p>
						</li>
						<li>
							<p class="p-indent1">
								<i class="fas fa-check"></i> Search user's participated contests
							</p>
						</li>
						<li>
							<p class="p-indent1">
								<i class="fas fa-check"></i> Stalking others by showing the recent problemsets
							</p>
						</li>
					</ul>
				</p>
				<p class="p-indent1">
					Source Code on
					<a
						class="highlight"
						target="_blank"
						rel="noopener"
						href="https://github.com/yuran1811/Codeforces-Toolkit"
					>Github</a> and the site <a
						class="highlight"
						target="_blank"
						rel="noopener"
						href="https://yuran1811.github.io/Codeforces-Toolkit/"
					>here</a>
				</p>
			</div>
			<br />`,
	},
];
const otherSection = document.querySelector('.others');
otherSection.innerHTML += `
		<div class="content">
			<div class="textBox">
				${otherData.map((item) => item.content).join('')}
			</div>
		</div>`;

// Nav Bar Render
const navBarData = [
	{
		href: '#banner',
		name: 'Home',
	},
	{
		href: '#app-drawer',
		name: 'App Drawer',
	},
	{
		href: '#music-player',
		name: 'Music Player',
	},
	{
		href: '#web-theme',
		name: 'Web Theme',
	},
	{
		href: '#game-station',
		name: 'Game Station',
	},
	{
		href: '#others',
		name: 'Others',
	},
];
const navBarList = document.querySelector('.navbar-container ul');
navBarList.innerHTML = navBarData
	.map(
		(item, index) => `
	<li class="lk ${index || 'liactive'}">
		<a href="${item.href}" style="--i: 0.${index + 1}s">${item.name}</a>
	</li>`
	)
	.join('');
