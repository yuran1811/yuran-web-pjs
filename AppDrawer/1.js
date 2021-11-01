let canvas = document.querySelector('#draw');

let penPoint_status = false;
let penLine_status = false;

const pen = canvas.getContext('2d');
pen.fillStyle = 'black';

let lineArray = [];
let lineArray_index = 0;

var pointSize = 10;


// Pen
function Pen_drawPoint(x, y)
{
	if (!penPoint_status) return;
	const circle = new Path2D();
	pointSize = document.querySelector('#size').value;
	circle.arc(x, y, pointSize, 0, 2 * Math.PI);
	pen.fillStyle = document.querySelector('#color').value;
	pen.fill(circle);
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


// Theme
const Mode = document.querySelector('#switch-mode');
Mode.addEventListener('click', (e) =>
{
	let Ele = document.body;
	Ele.classList.toggle("dark");
})


// Draw Line
let LineDraw = document.querySelector('#line');

LineDraw.addEventListener('click', (e) =>
{
	penLine_status = true;
	penPoint_status = false;

	var mouseX = 0;
	var mouseY = 0;
	canvas.addEventListener('mousedown', (e) =>
	{
		const {clientX, clientY} = e;
		mouseX = clientX;
		mouseY = clientY;
	})
	canvas.addEventListener('click', (e) =>
	{
		if (!penLine_status) return;
		const react = canvas.getBoundingClientRect();

		const {clientX, clientY} = e;
		pen.beginPath();
		pen.lineWidth = document.querySelector('#size').value;
		pen.strokeStyle = document.querySelector('#color').value;
		pen.moveTo(mouseX - react.left, mouseY - react.top);
		pen.lineTo(clientX - react.left, clientY - react.top);
		pen.stroke();

		lineArray[++lineArray_index] = {
			fi_X:(mouseX - react.left),
			fi_Y:(mouseY - react.top),
			se_X:(clientX - react.left),
			se_Y:(clientY - react.top)
		};
	})
})


// Clear
const ButtonClear = document.querySelector('#reset');
ButtonClear.addEventListener('click', (e) =>
{
	penLine_status = penPoint_status = 0;
	pen.clearRect(0, 0, canvas.width, canvas.height);
	pen.strokeStyle = "white";
	for (let i = 1; i <= lineArray_index; i++)
	{
		pen.moveTo(lineArray[i].fi_X, lineArray[i].fi_Y);
		pen.lineTo(lineArray[i].se_X, lineArray[i].se_Y);
		pen.stroke();
	}
	pen.strokeStyle = pen.fillStyle = "black";
	lineArray_index = 0;
})


// Resize
document.querySelector('#resize').addEventListener('click', (e) =>
{
	canvas.width = document.querySelector('#w-size').value;
	canvas.height = document.querySelector('#h-size').value;
});