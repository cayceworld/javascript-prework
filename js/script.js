{
	// 1: kamień, 2: papier, 3: nożyce.
	function playGame(playerNumber) {
		clearMessages();
		let playerInput = playerNumber;
		const randomNumber = Math.floor(Math.random() * 3 + 1);
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
		}
		
		const argPlayerMove = getMoveName(playerInput);
		const argComputerMove = getMoveName(randomNumber);

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
	}
	document.getElementById('play-rock').addEventListener('click', function () {
		playGame(1);
	});
	document.getElementById('play-paper').addEventListener('click', function () {
		playGame(2);
	});
	document.getElementById('play-scissors').addEventListener('click', function () {
		playGame(3);
	});
}