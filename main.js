//Copyright (C) 2023 Alhussien Ahmed
//[Practicing Signing Files]

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

	while (round < 5)
	{

		/*
			 This is how it shows up in the console 
				 You win! paper beats rock
				      Score: 1 to 0
						Round 2
			Fix that
		*/

		//Then this
		consoleText.innerHTML += `Round ${round + 1}<br>`;
		let result = await play_round();
		console.log(result);
		//This shows up first
		consoleText.innerHTML += `${result}<br>`
		if (result.includes('You')) userScore++;
		else if (result.includes('draw')) continue;
		else computerScore++;
		round++;
		console.log(`Score: ${userScore} to ${computerScore}`)
		//Then this
		consoleText.innerHTML += `Score: ${userScore} to ${computerScore}<br>`;
	}

	if (userScore > computerScore) console.log(`You win! ${userScore} to ${computerScore}`);
	else if (userScore < computerScore) console.log(`Computer wins! ${computerScore} to ${userScore}`);
	else console.log(`It's a draw! ${userScore} to ${computerScore}`);
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
