const canvas = document.querySelector('#app');
const ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

const gravity = 1.5;
const PLATFORM_WIDTH = 200;

// <--== Object
class Player {
	constructor(x = 300, y = 300) {
		this.speed = 10;

		this.position = { x, y };
		this.velocity = { x: 0, y: 1 };

		this.width = 30;
		this.height = 30;
	}

	draw() {
		ctx.fillStyle = 'red';
		ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
	}

	update() {
		this.position.x += this.velocity.x;
		this.position.y += this.velocity.y;
		if (this.position.y + this.height + this.velocity.y <= innerHeight)
			this.velocity.y += gravity;
		else this.velocity.y = 0;
		this.draw();
	}
}

class Platform {
	constructor({ x, y }) {
		this.position = { x, y };
		this.width = PLATFORM_WIDTH;
		this.height = 20;
	}

	draw() {
		ctx.fillStyle = 'lightblue';
		ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
	}
}

class GenericObject {
	constructor({ x, y }) {
		this.position = { x, y };
		this.width = 200;
		this.height = 20;
	}

	draw() {
		ctx.beginPath();
		ctx.fillStyle = 'lightgreen';
		ctx.arc(
			this.position.x,
			this.position.y,
			this.width / 2,
			0,
			Math.PI * 2,
			false
		);
		ctx.fill();
		ctx.closePath();
	}
}
// Object ==-->

let player;
let platforms = [];
let genericObjects = [];
let keys = {};
let scrollOffset = 0;
let numUp = 0;

const SPACE = 300;
const NUM_BLOCK = 20;
const MARGIN = 400;

const init = () => {
	player = new Player(300, 200);
	platforms = [new Platform({ x: 200, y: 350 })];
	genericObjects = [];

	keys = {
		a: { press: 0 },
		d: { press: 0 },
		w: { press: 0 },
		s: { press: 0 },
	};

	scrollOffset = 0;

	const getRand = ({ x, y }) => {
		const newX = Math.random() * PLATFORM_WIDTH + PLATFORM_WIDTH + x;
		const newY = Math.random() * (innerHeight - y) + y / 2;
		return { x: newX, y: newY };
	};

	let lastPlatform = { x: 200, y: 350 };
	let lastGeneric = { x: 0, y: 0 };
	for (let i = 0; i < NUM_BLOCK; i++) {
		lastGeneric = getRand(lastGeneric);
		lastPlatform = getRand(lastPlatform);
		genericObjects.push(new GenericObject(lastGeneric));
		platforms.push(new Platform(lastPlatform));
	}
};

let animationID;
const animation = () => {
	animationID = requestAnimationFrame(animation);
	genericObjects.forEach((genericObject) => genericObject.draw());
	platforms.forEach((platform) => platform.draw());
	player.update();

	ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
	ctx.fillRect(0, 0, innerWidth, innerHeight);
	ctx.fill();

	if (keys['d'].press && player.position.x < innerWidth / 2 - 100)
		player.velocity.x = player.speed;
	else if (
		(keys['a'].press && player.position.x > 100) ||
		(keys['a'].press &&
			platforms.every((platform) => platform.position.x > 0) &&
			scrollOffset === 0)
	)
		player.velocity.x = -player.speed;
	else {
		player.velocity.x = 0;
		if (keys['d'].press) {
			scrollOffset += player.speed;
			platforms.forEach(
				(platform) => (platform.position.x -= player.speed)
			);
			genericObjects.forEach(
				(genericObject) =>
					(genericObject.position.x -= player.speed * 0.66)
			);
		}

		if (keys['a'].press && scrollOffset > 0) {
			scrollOffset -= player.speed;
			platforms.forEach(
				(platform) => (platform.position.x += player.speed)
			);
			genericObjects.forEach(
				(genericObject) =>
					(genericObject.position.x += player.speed * 0.66)
			);
		}
	}

	platforms.forEach((platform) => {
		if (
			player.position.y + player.height <= platform.position.y &&
			player.position.y + player.height + player.velocity.y >=
				platform.position.y &&
			player.position.x + player.width >= platform.position.x &&
			player.position.x <= platform.position.x + platform.width
		) {
			player.velocity.y = 0;
		}
	});

	// Win
	if (scrollOffset >= SPACE * NUM_BLOCK - MARGIN) {
		// cancelAnimationFrame(animationID);
		console.log('Win');
	}

	// Lose
	if (player.position.y + player.height > innerHeight) init();
};

init();
animation();

// Event Handle
window.oncontextmenu = (e) => e.preventDefault();
window.onkeydown = ({ key }) => {
	switch (key) {
		case 'a':
		case 'd':
			keys[key].press = 1;
			break;
		case 'w':
			if (player.position.y - player.height >= 0)
				if (numUp < 3 && ++numUp < 3) player.velocity.y -= 20;
			break;
		case 's':
			break;
		default:
			break;
	}
};
window.onkeyup = ({ key }) => {
	switch (key) {
		case 'a':
		case 'd':
			keys[key].press = 0;
			break;
		case 'w':
			if (-player.velocity.y <= innerWidth / 2) numUp = 0;
			else numUp = 3;
			break;
		case 's':
			player.velocity.y += 15;
			break;
		default:
			break;
	}
};
