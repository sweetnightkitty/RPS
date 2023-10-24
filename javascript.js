const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function getPlayerChoice() {
    input = prompt('Choose rock, scissors, or paper');
    while (input == null) {
        prompt('Choose rock, scissors, or paper');
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false){
        input = prompt('Must type rock, scissors, or paper with no spelling mistakes');
        input = input.toLowerCase();
        check = validateInput(input);
    }
    return input;
}

function validateInput(input) {
    return choices.includes(input)}

function playRound() {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    const winningChoice = getWinningChoice(winner, playerSelection, computerSelection);
    const rule = getRule(winner);
    const message = getMessage(winningChoice);
    //return message + rule!
    
}

function getWinningChoice(winner, player, computer) {
    if (winner === 'player'){
        return player;
    } else if (winner === 'computer'){
        return computer;
    } else {
        return 'none';
    }
    }

//outputs You win, you lose, or its a draw! - might need to add a space.
function getMessage(winningChoice) {
    if (winningChoice === 'rock'){

    } else if (winningChoice === 'paper'){

    } else if (winningChoice === 'scissors'){

    } else {
        return 'It\'s a draw!';
    }
}
   /* if (winner === 'player') {
        const message = 'You win! ';
    } else if (winner === 'computer'){
        const message = 'You lose! ';
    } else {
        const message = 'It\'s a draw!';
    }
    console.log(message + rule);
}*/

playRound();

function checkWinner(player, computer){
    if (player === computer) {
        return 'draw';
    } else if (
        (player == 'rock' && computer == 'scissors') ||
        (player == 'paper' && computer == 'rock') ||
        (player == 'scissors' && computer == 'paper')) {
            return 'player';
        } else {
            return 'computer';
        }
}

function getRule(winner) {
    if (winner === 'rock'){
        return 'Rock beats scissors!';
    } else if (winner === 'paper'){
        return 'Paper beats rock!';
    } else if (winner === 'scissors'){
        return 'Scissors beats paper!';
    } else {
        return '';
    }
}


/*
 //Single Round - my original method that worked with original 5 rounds.
 function playRound(playerSelection, computerSelection) {
    //const playerSelection = getPlayerSelection();
   // const computerSelection = getComputerChoice();
    let result = playerSelection == 'rock' && computerSelection == 'scissors' 
    || playerSelection == 'paper' && computerSelection == 'rock' 
    || playerSelection == 'scissors' && computerSelection == 'paper' ? 'You win!'
    : playerSelection == computerSelection ? 'Draw! Try again.'
    : 'You lose!';
    
    let winningChoice = result == 'You win!' ? playerSelection
    : result == 'You lose!' ? computerSelection.toLowerCase()
    : ''

    let rule = winningChoice == 'rock' ? ' Rock beats scissors!'
    : winningChoice == 'paper' ? ' Paper beats rock!'
    : winningChoice == 'scissors' ? ' Scissors beats paper!'
    : '';

    return result + rule;
 }


//second attempt at 5 rounds to make more sense in line with the ODIN directions
function game(){
    console.log(playRound(player, computer));
    console.log(playRound(player, computer));
    console.log(playRound(player, computer));
    console.log(playRound(player, computer));
    console.log(playRound(player, computer));
}

game();



/*
//runs 5 rounds and logs how many wins out of total rounds.
function game() {
    let round1 = getPlayerSelection();
    let comp1 = getComputerChoice();
    console.log(playRound(round1, comp1));
    let round2 = getPlayerSelection();
    let comp2 = getComputerChoice();
    console.log(playRound(round2, comp2));
    let round3 = getPlayerSelection();
    let comp3 = getComputerChoice();
    console.log(playRound(round3, comp3));
    let round4 = getPlayerSelection();
    let comp4 = getComputerChoice();
    console.log(playRound(round4, comp4));
    let round5 = getPlayerSelection();
    let comp5 = getComputerChoice();
    console.log(playRound(round5, comp5));
}

game();

*/