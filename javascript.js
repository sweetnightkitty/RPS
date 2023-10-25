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
    
    //const score = getScore(); - need to create this function below
    console.log(message + rule);
    //console.log(score);
    
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

/* function getScore() { //called from playRound, will create the updated score for player and computer; will log in playRound()
    const playerScore =;
    const computerScore;
    const message = 'Player: ' + playerScore + ' ' + 'Computer: ' + computerScore;
} */



function game() { //score is not defined; create variable score to be Player:# Computer:#
    let computerScore = 0;
    let playerScore = 0;
    for (i = 0; i < 6; i++) {
        let round = playRound();
    if (round.includes('win')) {
        playerScore++
        console.log(score);
    } else if (round.includes('lose')){
        computerScore++
        console.log(score);
    } else {
        console.log(score);
    }
} //add code here to announce the winner when the for loop ends and rounds finish
}


game();

/*Need a loop that will:
- play 1 round; print the message from playRound() AND update the computer / player score
- Stops after 5 rounds
- then announces winner*/