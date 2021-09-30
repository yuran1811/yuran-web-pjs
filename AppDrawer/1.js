const canvas = document.querySelector('#draw')
const ctx = canvas.getContext('2d')
let ChangeBtn = document.querySelector('#btn-pointsize');

ctx.fillStyle = 'black'

var PointSize = 12;

ChangeBtn.addEventListener('click', (e) =>
{
	PointSize = document.querySelector('#point-size').value;
})

function draw(x, y)
{
	const circle = new Path2D();
	circle.arc(x, y, PointSize, 0, 2 * Math.PI);
	ctx.fill(circle)
}

let isDown = false;

canvas.addEventListener('mouseup', (e) => {isDown = false;})
canvas.addEventListener('mousedown', (e) =>
{
	isDown = true;
	const {clientX, clientY} = e
	const react = canvas.getBoundingClientRect()
	draw(clientX - react.left, clientY - react.top)
})
canvas.addEventListener('mousemove', (e) =>
{
	if (!isDown) return
	const {clientX, clientY} = e
	const react = canvas.getBoundingClientRect()
	draw(clientX - react.left, clientY - react.top)
})

const colorPickers = [...document.querySelectorAll('.color-picker')]
colorPickers.forEach(colorPicker =>
{
	colorPicker.addEventListener('click', (e) =>
	{
		ctx.fillStyle = e.target.style.backgroundColor
	})
})

const ButtonClear = document.querySelector('#btn-clear');
ButtonClear.addEventListener('click', (e) => {ctx.clearRect(0, 0, 800, 600)})

const Mode = document.querySelector('#switch-mode');
Mode.addEventListener('click', (e) =>
{
	let Ele = document.body;
	Ele.classList.toggle("dark")
})