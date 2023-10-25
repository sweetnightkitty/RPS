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
    const rule = getRule(winningChoice);
    const message = getMessage(winner);
    console.log(message + rule);
    
}

function getWinningChoice(winner, player, computer) {
    if (winner === 'player'){
        return player;
    } else if (winner === 'computer'){
        return computer;
    } else {
        return '';
    }
    }

//outputs You win, you lose, or its a draw! - might need to add a space.
function getMessage(winner) {
    if (winner === 'player'){
        return 'You win! ';
    } else if (winner === 'computer'){
        return 'You lose! ';
    } else {
        return 'It\'s a draw!';
    }}



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

function getRule(winningChoice) {
    if (winningChoice === 'rock'){
        return 'Rock beats scissors!';
    } else if (winningChoice === 'paper'){
        return 'Paper beats rock!';
    } else if (winningChoice === 'scissors'){
        return 'Scissors beats paper!';
    } else {
        return '';
    }
}



function game() {
    const roundOne = playRound();
    const roundTwo = playRound();
    const roundThree = playRound();
    const roundFour = playRound();
    const roundFive = playRound();
}

game();