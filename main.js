let getComputerChoice = () => {
	let choices = ['rock', 'paper', 'scissor'];
	let choice = Math.floor(Math.random() * 3);
	return choices[choice];
}

let getUserChoice = () => {
	let flag = true;
	let choice = null;

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

// to be removed
//console.log(getUserChoice());
