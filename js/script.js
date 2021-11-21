 // 1: kamień, 2: papier, 3: nożyce.
let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);

function getMoveName(argMoveId) {
	if (argMoveId == 1) {
		return 'kamień';
	}
	else if (argMoveId == 2) {
		return 'papier';
	}
	else if (argMoveId == 3) {
		return 'nożyce';
	}
	else {
		printMessage('Nie znam ruchu o id ' + argMoveId + '.');
		return 'nieznany ruch';
	}
}
let playerInput = prompt('Wybierz ruch - 1: kamień, 2: papier, 3: nożyce')
let argComputerMove = getMoveName(randomNumber);
let argPlayerMove = getMoveName(playerInput);


function displayResult(argComputerMove, argPlayerMove) {
	printMessage('Zagrałem ' + argComputerMove + ', a ty ' + argPlayerMove + '.');
	if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
		printMessage('Ty wygrywasz!');
	}
	else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
		printMessage('Ty przegrałeś!');
	}
	else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
		printMessage('Ty przegrałeś!');
	}
	else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
		printMessage('Ty wygrywasz!');
	}
	else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
		printMessage('Ty wygrywasz!');
	}
	else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
		printMessage('Ty przegrałeś!');
	}
	else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
		printMessage('Remis!');
	}
	else if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
		printMessage('Remis!');
	}
	else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
		printMessage('Remis!');
	}
	else if (argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch') {
		printMessage('Jesteś zdyskwalifikowany!');
	}
	else if (argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch') {
		printMessage('Jesteś zdyskwalifikowany!');
	}
	else if (argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch') {
		printMessage('Jesteś zdyskwalifikowany!');
	}
} 

displayResult(argComputerMove, argPlayerMove);



