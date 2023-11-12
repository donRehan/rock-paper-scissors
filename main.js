let getComputerChoice = () => {
	let choices = ['rock', 'paper', 'scissor'];
	let choice = Math.floor(Math.random() * 3);
	return choices[choice];
}

console.log(getComputerChoice());
