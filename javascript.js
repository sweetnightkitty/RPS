const choices = ['rock', 'paper', 'scissors'];
const winners = [];


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
    console.log(message + rule); // Ex) You lose! Rock beats paper!

    winners.push(winner);
    let score = logScore();
    console.log('Player: ' + score[0] + ' Computer: ' + score[1]);
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

//outputs You win, you lose, or its a draw!
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

//Outputs ex) Rock beats paper!
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

function logScore() { //keeps score for each round, and logs when playRoun()
    let playerWins = winners.filter((item) => item == 'player').length;
    let computerWins = winners.filter((item) => item == 'computer').length;
    let draws = winners.filter((item) => item == 'draw').length;
    return [playerWins, computerWins];
}



function game() {
    for (i = 0; i < 6; i++) {
        let round = playRound();
    } 
    
    let winner = announceWinner();
    console.log(winner);

}

function announceWinner() {
    const finalScore = logScore();
    const playerFinal = finalScore[0];
    const computerFinal = finalScore[1];
    if (playerFinal > computerFinal) {
        return 'Player Wins!';
    } else if (playerFinal < computerFinal) {
        return 'Computer Wins!';
    } else {
        return 'It\'s a draw!';
    }
}

game();