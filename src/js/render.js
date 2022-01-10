const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

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

const main = $('.main');
main.innerHTML = htmls + main.innerHTML;
