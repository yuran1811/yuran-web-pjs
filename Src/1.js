const canvas = document.querySelector('#draw')
const ctx = canvas.getContext('2d')

ctx.fillStyle = 'black'

function draw(x, y)
{
	const circle = new Path2D();
	circle.arc(x, y, 10, 0, 2 * Math.PI);
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
	console.log('pick')
	colorPicker.addEventListener('click', (e) =>
	{
		ctx.fillStyle = e.target.style.backgroundColor
	})
})

const ButtonClear = document.querySelector('#btn-clear');
ButtonClear.addEventListener('click', (e) => {ctx.clearRect(0, 0, 600, 600)})