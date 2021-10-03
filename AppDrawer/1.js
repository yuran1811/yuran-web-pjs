const canvas = document.querySelector('#draw')
let ChangeBtn = document.querySelector('#btn-pointsize');

const ctx = canvas.getContext('2d')
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


const Theme = document.querySelector('#theme');

(function() {
    window.__onThemeChange = function() {};
    function setTheme(newTheme) {
        window.__theme = newTheme;
        preferredTheme = newTheme;
        document.body.setAttribute('data-theme', newTheme);
        window.__onThemeChange(newTheme);
    }

    var preferredTheme;
    try {
        preferredTheme = localStorage.getItem('theme');
    } catch (err) { }

    window.__setPreferredTheme = function(newTheme) {
        setTheme(newTheme);
        try {
            localStorage.setItem('theme', newTheme);
        } catch (err) {}
    }

    var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkQuery.addListener(function(e) {
        window.__setPreferredTheme(e.matches ? 'dark' : 'light')
    });

    setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
})();

Theme.addEventListener('click', (e) => 
{
  window.__setPreferredTheme(mode);
  if (window.__theme == 'dark')
  	console.log('dark mode is on');
})
