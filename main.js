//Copyright (C) 2023 Alhussien Ahmed
//[Practicing Signing Files]

let getComputerChoice = () => {
	let choices = ['rock', 'paper', 'scissor'];
	let choice = Math.floor(Math.random() * 3);
	return choices[choice];
}

let getUserChoice = () => {
	let flag = true;
	let choice = null;
	//New Logic 
	//Get the ids of the buttons 
	//Get which button was clicked
	//Return the value of the button

	while (flag)
	{
		flag = false;
		console.log("Please select one from the following: ");
		console.log("0. rock");
		console.log("1. paper");
		console.log("2. scissor");
		choice = parseInt(prompt("Enter your choice: "));
		// to be removed
		//console.log(choice);
		if(!validateInput(choice)) {
			console.log("Invalid Choice please select a number from 0 to 2");
			flag = true;
		}
	}

	let choices = ['rock', 'paper', 'scissor'];
	let selection = choices[choice];
	return selection;
}

let validateInput = (_) => (_ >= 0 && _ <= 2) ? true : false;

let get_round_result = (computerSelection, userSelection) => {
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

let play_round = () => 
{
	let computerSelection = getComputerChoice();
	let userSelection = getUserChoice();
	return get_round_result(computerSelection, userSelection);
}

// game

let game = () => {
	let userScore = 0;
	let computerScore = 0;
	let round = 0;
	//get console-text div element
	let consoleText = document.getElementById('console-text');

	while (round < 5)
	{
		//console.log(`Round ${round + 1}`)
		consoleText.innerHTML += `Round ${round + 1}<br>`;
		let result = play_round();
		console.log(result);
		if (result.includes('You')) userScore++;
		else if (result.includes('draw')) continue;
		else computerScore++;
		round++;
		console.log(`Score: ${userScore} to ${computerScore}`)
	}

	if (userScore > computerScore) console.log(`You win! ${userScore} to ${computerScore}`);
	else if (userScore < computerScore) console.log(`Computer wins! ${computerScore} to ${userScore}`);
	else console.log(`It's a draw! ${userScore} to ${computerScore}`);
}

//game();
