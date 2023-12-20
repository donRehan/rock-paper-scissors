//Copyright (C) 2023 Alhussien Ahmed
//[Practicing Signing Files]

// Function to open the modal with a custom message
function openModal(message) {
    var modalContainer = document.getElementById('modal-container');
    var modalMessage = document.getElementById('modal-message');

    modalMessage.innerHTML = message;
    modalContainer.style.display = 'flex';

	// Add an event listener to the "Play Again" button
    var playAgainButton = document.getElementById('playagain');
    playAgainButton.addEventListener('click', playAgain);
}

function playAgain() {
    window.location.reload();
}

// Function to close the modal
function closeModal() {
    var modalContainer = document.getElementById('modal-container');
    modalContainer.style.display = 'none';
}

let getComputerChoice = async () => {
	let choices = ['rock', 'paper', 'scissor'];
	let choice = Math.floor(Math.random() * 3);
	return choices[choice];
}

let getUserChoice = () => {
  return new Promise((resolve) => {
    let rock = document.getElementById('rock');
    let paper = document.getElementById('paper');
    let scissors = document.getElementById('scissors');

    rock.onclick = () => {
      resolve('rock');
    };
    paper.onclick = () => {
      resolve('paper');
    };
    scissors.onclick = () => {
      resolve('scissor');
    };
  });
};

//NOT USED ANYMORE 
let validateInput = (_) => (_ >= 0 && _ <= 2) ? true : false;

let get_round_result = async (computerSelection, userSelection) => {
	switch (true) {
		//Computer wins cases
		case(computerSelection == 'rock' && userSelection == 'scissor'):
		case(computerSelection == 'scissor' && userSelection == 'paper'):
		case(computerSelection == 'paper' && userSelection == 'rock'):
		return `Computer wins! ${computerSelection} beats ${userSelection}`;

		//User wins cases
		case(userSelection == 'rock' && computerSelection == 'scissor'):
		case(userSelection == 'scissor' && computerSelection == 'paper'):
		case(userSelection == 'paper' && computerSelection == 'rock'):
		return `You win! ${userSelection} beats ${computerSelection}`;

		//Draw case
		default:
		return `It's a draw! ${userSelection} equals ${computerSelection}`;
	}
}

let play_round = async () => 
{

	let computerSelection = await getComputerChoice();
	let userSelection = await getUserChoice();
	
	//Show the images
	let computers = document.getElementById('computers');
	computers.src = `./imgs/${computerSelection}.png`;
	let players = document.getElementById('players');
	players.src = `./imgs/${userSelection}.png`;

	//Clear console-text div element when a click is made 
	let consoleText = document.getElementById('console-text');
	consoleText.innerHTML = '';

	return await get_round_result(computerSelection, userSelection);
}

// game

let game = async () => {
	let userScore = 0;
	let computerScore = 0;
	let round = 0;
	//get console-text div element
	let consoleText = document.getElementById('console-text');
	let user_score = document.getElementById('usr-score');
	let pc_score = document.getElementById('pc-score');

	while (userScore < 5 && computerScore < 5)
	{
		let result = await play_round();
		//consoleText.innerHTML += `Round ${round + 1}<br>`;
		console.log(result);
		consoleText.innerHTML += `${result}<br>`
		if (result.includes('You')) userScore++;
		else if (result.includes('draw')) continue;
		else computerScore++;
		round++;
		console.log(`Score: ${userScore} to ${computerScore}`);
		user_score.innerHTML = `${userScore}`;
		pc_score.innerHTML = `${computerScore}`;
		//consoleText.innerHTML += `Score: ${userScore} to ${computerScore}<br>`;
	}

	if (userScore > computerScore) console.log(`You win! ${userScore} to ${computerScore}`);
	else if (userScore < computerScore) console.log(`Computer wins! ${computerScore} to ${userScore}`);
	else console.log(`It's a draw! ${userScore} to ${computerScore}`);

	consoleText.innerHTML += `Game over! ${userScore} to ${computerScore}<br>`;
	//alert(`Game over! ${userScore} to ${computerScore}`);
	openModal(`Game over! ${userScore} to ${computerScore}`);
}

//testing console div
let _ = () => {
	//get input from user and store it in a variable
	let input = "Please pick a choice"
	let game_area = document.getElementById('game-area');
	let consoleText = document.getElementById('console-text');
	let h2 = document.createElement('h2');
	h2.innerHTML = input;
	consoleText.prepend(h2);
	//game_area.prepend(consoleText);
}

//getUserChoice();
game();
