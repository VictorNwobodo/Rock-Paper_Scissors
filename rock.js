const prompt = require('prompt-sync')()

let wins = 0
let losses = 0
let ties = 0

//We try to loop through the game over and over until a user decides to quit by pressing "q".
while (true) {
    const playerChoice = prompt('Enter rock, paper of scissors (or q to exit) ')
    
    // quitting the game by just pressing "q"
	if (playerChoice.toLocaleLowerCase() === 'q') {
		break
    }
    
    // Validating users choice 
	if (
		playerChoice !== 'rock' &&
		playerChoice !== 'paper' &&
		playerChoice !== 'scissors'
	) {
		console.log('Please enter a valid Choice.')
		continue
	}

    //Evaluating between the user choice and computer choice.
	const choices = ['rock', 'paper', 'scissors']
	const randomIndex = Math.round(Math.random() * 2)
	const computerChoice = choices[randomIndex]
	console.log('The Computer chose: ', computerChoice)
	// checking for draws

	if (computerChoice === playerChoice) {
		console.log('Draw!')
		ties++
	} else if (
		(playerChoice === 'paper' && computerChoice === 'rock') ||
		(playerChoice === 'rock' && computerChoice === 'scissors') ||
		(playerChoice === 'scissors' && computerChoice === 'paper')
	) {
		console.log('Won!')
		wins++
	} else {
		console.log('Lost!')
		losses++
	}
}

console.log('Wins:', wins, 'Losses:', losses, 'Ties:', ties)
