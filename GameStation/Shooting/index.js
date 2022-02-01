const BACKGROUND = 'rgba(0, 0, 0, 1)';
const PLAYER_OPTIONS = [
	{
		name: 'Admin',
		color: 'red',
		speedRun: 3,
		speedShot: 0,
		boostSpeedRun: 0,
		boostSpeedShot: 10,
	},
	{
		name: 'G9',
		color: 'green',
		speedRun: 2,
		speedShot: 0,
		boostSpeedRun: 0,
		boostSpeedShot: 5,
	},
];
const ENEMY_OPTIONS = [
	{ name: 'Lv1', color: 'pink', radius: 20 },
	{ name: 'Lv2', color: 'lightgreen', radius: 25 },
];
const PLAYER_OPTIONS_LTH = PLAYER_OPTIONS.length;
const ENEMY_OPTIONS_LTH = ENEMY_OPTIONS.length;

const scoreEle = document.querySelector('.score-cnt');
const canvas = document.querySelector('#app');
const ctx = canvas.getContext('2d');

const { innerWidth, innerHeight } = window;
const middle = { x: innerWidth / 2, y: innerHeight / 2 };
const friction = 0.98;

canvas.width = innerWidth;
canvas.height = innerHeight;
ctx.fillStyle = BACKGROUND;
ctx.fillRect(0, 0, innerWidth, innerHeight);

let PlayerId = 0;
const PlayerSelect = PLAYER_OPTIONS[PlayerId];

const mouse = {
	x: middle.x,
	y: middle.y,
};

const playerPos = {
	x: middle.x,
	y: middle.y,
};

let score = 0;

// <--=== Object
class Player {
	constructor(x, y, radius, color) {
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.color = color;
	}

	draw() {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		ctx.fillStyle = this.color;
		ctx.fill();
		ctx.closePath();
	}

	update() {
		this.draw();
		this.x = mouse.x;
		this.y = mouse.y;
	}
}

class Particle {
	constructor(x, y, radius, color, velocity) {
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.color = color;
		this.velocity = velocity;
		this.alpha = 1;
	}

	draw() {
		ctx.save();
		ctx.globalAlpha = this.alpha;
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		ctx.fillStyle = this.color;
		ctx.fill();
		ctx.closePath();
		ctx.restore();
	}

	update() {
		this.draw();
		this.velocity.x *= friction;
		this.velocity.y *= friction;
		this.x += this.velocity.x;
		this.y += this.velocity.y;
		this.alpha -= 0.01;
	}
}

class Projectile {
	constructor(x, y, radius, color, velocity) {
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.color = color;
		this.velocity = velocity;
	}

	draw() {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		ctx.fillStyle = this.color;
		ctx.fill();
		ctx.closePath();
	}

	update() {
		this.draw();
		this.x += this.velocity.x;
		this.y += this.velocity.y;
	}
}

class Enemy {
	constructor(x, y, radius, color, velocity) {
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.color = color;
		this.velocity = velocity;
	}

	draw() {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		ctx.fillStyle = this.color;
		ctx.fill();
		ctx.closePath();
	}

	update() {
		this.draw();
		this.x += this.velocity.x;
		this.y += this.velocity.y;
	}
}
// Object ===-->

const player = new Player(mouse.x, mouse.y, 10, 'red');
const projectiles = [];
const gameControl = {};
const particles = [];
const enemies = [];

const keyHandle = () => {
	if (!gameControl) return;

	const delta = PlayerSelect.speedRun + PlayerSelect.boostSpeedRun;
	if (gameControl['a']) mouse.x -= delta;
	if (gameControl['d']) mouse.x += delta;
	if (gameControl['s']) mouse.y += delta;
	if (gameControl['w']) mouse.y -= delta;
};

const increaseScore = (amount) => {
	score += amount;
	scoreEle.innerHTML = score;
};

const spawnEnemies = () => {
	setInterval(() => {
		const enemyIndex =
			ENEMY_OPTIONS[Math.floor(Math.random() * ENEMY_OPTIONS_LTH)];
		const radius = enemyIndex.radius;
		let x = 0;
		let y = 0;

		if (Math.random() < 0.5) {
			x = Math.random() < 0.5 ? 0 - radius : innerWidth + radius;
			y = Math.floor(Math.random() * innerHeight);
		} else {
			x = Math.floor(Math.random() * innerWidth);
			y = Math.random() < 0.5 ? 0 - radius : innerHeight + radius;
		}

		const color = enemyIndex.color;

		const angle = Math.atan2(player.y - y, player.x - x);
		const velocity = {
			x: Math.cos(angle),
			y: Math.sin(angle),
		};
		enemies.push(new Enemy(x, y, radius, color, velocity));
	}, 2000);
};

const removeFromEdge = (list, index, deltaX = 0, deltaY = 0) => {
	const item = list[index];
	if (
		item.x + item.radius < 0 ||
		item.x - item.radius > innerWidth ||
		item.y + item.radius < 0 ||
		item.y - item.radius > innerHeight
	)
		list.splice(index, 1);
};

let animationID;
const animation = () => {
	animationID = requestAnimationFrame(animation);
	ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	keyHandle();
	player.update();

	particles.forEach((item, index) => {
		if (item.alpha <= 0) particles.splice(index, 1);
		else item.update();
	});

	projectiles.forEach((item, index) => {
		item.update();
		removeFromEdge(projectiles, index);
	});

	enemies.forEach((enemy, index) => {
		enemy.update();
		removeFromEdge(enemies, index, enemy.x, enemy.y);
		console.log('enemies: ', enemies);

		const dist = Math.hypot(player.x - enemy.x, player.y - enemy.y);

		// End Game
		if (dist - enemy.radius - player.radius < 1)
			cancelAnimationFrame(animationID);

		projectiles.forEach((pjtile, pjIndex) => {
			const dist = Math.hypot(pjtile.x - enemy.x, pjtile.y - enemy.y);
			if (dist - enemy.radius - pjtile.radius < 1) {
				for (let i = 0; i < 8; i++) {
					particles.push(
						new Particle(pjtile.x, pjtile.y, 3, enemy.color, {
							x: (Math.random() - 0.5) * (Math.random() * 6),
							y: (Math.random() - 0.5) * (Math.random() * 6),
						})
					);
				}

				if (enemy.radius > 20) {
					increaseScore(100);

					gsap.to(enemy, {
						radius: enemy.radius - 10,
					});
					projectiles.splice(pjIndex, 1);
				} else {
					increaseScore(200);

					enemies.splice(index, 1);
					projectiles.splice(pjIndex, 1);
				}
			}
		});
	});
};

animation();
spawnEnemies();

// <--=== Event Handle
window.onclick = (e) => {
	PlayerSelect.boostSpeedRun = 0;
	const { clientX, clientY } = e;
	const angle = Math.atan2(clientY - player.y, clientX - player.x);
	PlayerSelect.speedShot = gameControl[' '] ? PlayerSelect.boostSpeedShot : 0;
	projectiles.push(
		new Projectile(player.x, player.y, 5, 'white', {
			x: Math.cos(angle) * (5 + PlayerSelect.speedShot),
			y: Math.sin(angle) * (5 + PlayerSelect.speedShot),
		})
	);
};
window.oncontextmenu = (e) => {
	e.preventDefault();
	PlayerSelect.boostSpeedRun += 1;
};
window.onkeydown = (e) => (gameControl[e.key] = true);
window.onkeyup = (e) => (gameControl[e.key] = false);
// Event Handle ===-->
