'use strict';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let isStarted = false;
const renderCell = () => {
	if (isStarted) return;
	isStarted = 1;
	const mainContainer = $('.container .main');
	for (let i = 0; i < 9; i++)
		mainContainer.innerHTML += `<div cell-index="${i}" class="cell"></div>`;
};

let gameState = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let isActive = true;

const playerTurn = () => `${currentPlayer}'s turn`;
const winLog = () => `${currentPlayer} has won!`;
const drawLog = () => `Game ended in a draw!`;

const statusDisplay = $('.turn');

$('.restart').addEventListener('click', () => {
	renderCell();
	$('.restart').innerHTML = '<i class="fas fa-redo redo"></i> Restart';
	statusDisplay.innerHTML = playerTurn();
	$$('.cell').forEach((cell) =>
		cell.addEventListener('click', handleCellClick)
	);
});
$('.restart').addEventListener('click', handleRestartGame);

function handleCellPlayed(clickedCell, clickedCellIndex) {
	gameState[clickedCellIndex] = currentPlayer;
	clickedCell.innerHTML = currentPlayer;
}

function handlePlayerChange() {
	currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
	statusDisplay.innerHTML = playerTurn();
}

const winningConditions = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

function handleResultValidation() {
	let roundWon = false;
	for (let i = 0; i <= 7; i++) {
		const winCondition = winningConditions[i];
		let a = gameState[winCondition[0]];
		let b = gameState[winCondition[1]];
		let c = gameState[winCondition[2]];
		if (a === '' || b === '' || c === '') continue;
		if (a === b && b === c) {
			roundWon = true;
			break;
		}
	}

	if (roundWon) {
		statusDisplay.innerHTML = winLog();
		isActive = false;
		return;
	}

	let roundDraw = !gameState.includes('');
	if (roundDraw) {
		statusDisplay.innerHTML = drawLog();
		isActive = false;
		return;
	}
	handlePlayerChange();
}

function handleCellClick(clickedCellEvent) {
	const clickedCell = clickedCellEvent.target;
	const clickedCellIndex = parseInt(clickedCell.getAttribute('cell-index'));

	if (gameState[clickedCellIndex] !== '' || !isActive) return;

	handleCellPlayed(clickedCell, clickedCellIndex);
	handleResultValidation();
}

function handleRestartGame() {
	gameState = ['', '', '', '', '', '', '', '', ''];
	currentPlayer = 'X';
	isActive = true;
	statusDisplay.innerHTML = playerTurn();
	$$('.cell').forEach((cell) => (cell.innerHTML = ''));
}

const listTheme = [
	'light',
	'dark',
	'spring',
	'summer',
	'autumn',
	'winter',
	'noel',
	'yin-yang',
];
const listThemeHTML = [
	'Light',
	'Dark',
	'Spring',
	'Summer',
	'Autumn',
	'Winter',
	'Noel',
	'YinYang',
];

$('.theme-list').innerHTML = listThemeHTML
	.map(
		(item, index) =>
			`<div id="${listTheme[index]}" class="theme-ico">${item}</div>`
	)
	.join('');

$$('.theme-ico').forEach((item) => {
	item.addEventListener('click', (e) => {
		listTheme.forEach((themeItem) => {
			$('body').classList.remove(`${themeItem}-theme`);
			$(`#${themeItem}`).classList.remove('active');
		});
		$('body').classList.add(`${e.target.getAttribute('id')}-theme`);
		$(`#${e.target.getAttribute('id')}`).classList.add('active');
	});
});
