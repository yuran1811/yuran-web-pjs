 canvas = document.querySelector('#draw');

let penPoint_status = false;
let penLine_status = false;

const penPoint = canvas.getContext('2d');
penPoint.fillStyle = 'black';


// Chane Size
var PointSize = 10;
let ChangeBtn = document.querySelector('#btn-pointsize');
ChangeBtn.addEventListener('click', (e) =>
{
	PointSize = document.querySelector('#point-size').value;
})


// Pen
function Pen_drawPoint(x, y)
{
	if (!penPoint_status) return;
	const circle = new Path2D();
	circle.arc(x, y, PointSize, 0, 2 * Math.PI);
	penPoint.fill(circle);
}

function Pen_drawFree(e, isDown)
{	
	if (!isDown) return;
	const {clientX, clientY} = e;
	const react = canvas.getBoundingClientRect();
	Pen_drawPoint(clientX - react.left, clientY - react.top);
}

let PenDraw = document.querySelector('#pen');
PenDraw.addEventListener('click', (e) =>
{
	let isDown = false;
	penPoint_status = true;
	penLine_status = false;
	canvas.addEventListener('mouseup', (e) => {isDown = false;})
	canvas.addEventListener('mousedown', (e) => {isDown = 1; Pen_drawFree(e, isDown);});
	canvas.addEventListener('mousemove', (e) => {Pen_drawFree(e, isDown)});
	// penPoint_status = false;
})


// Color Pickers
const colorPickers = [...document.querySelectorAll('.color-picker')]
colorPickers.forEach(Picker =>
{
	Picker.addEventListener('click', (e) =>
	{
		penPoint.fillStyle = e.target.style.backgroundColor;
	})
})


// Theme
const Mode = document.querySelector('#switch-mode');
Mode.addEventListener('click', (e) =>
{
	let Ele = document.body;
	Ele.classList.toggle("dark");
})


// Draw Line
let LineDraw = document.querySelector('#draw-line');

LineDraw.addEventListener('click', (e) =>
{
	penLine_status = true;
	penPoint_status = false;

	var mouseX = -1;
	var mouseY = -1;
	canvas.addEventListener('click', (e) =>
	{
		mouseX = e.clientX;
		mouseY = e.clientY;
	})
	canvas.addEventListener('click', (e) =>
	{
		if (!penLine_status) return;
		const penLine = canvas.getContext('2d');
		const react = canvas.getBoundingClientRect();
		// penLine.moveTo(e.clientX, e.clientY);
		// penLine.lineTo(mouseX - react.left, mouseY - react.top);
		penLine.moveTo(mouseX, mouseY);
		penLine.lineTo(e.clientX - react.left, e.clientY - react.top);
		penLine.stroke();
	})
})


// Clear
const ButtonClear = document.querySelector('#btn-clear');
ButtonClear.addEventListener('click', (e) =>
{
	penPoint.clearRect(0, 0, 800, 600);
	penLine_status = penPoint_status = 0;
})