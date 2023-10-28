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

function playRound(playerScore, computerScore) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();

    const winner = checkWinner(playerSelection, computerSelection);
    const winningChoice = getWinningChoice(winner, playerSelection, computerSelection);

    const rule = getRule(winningChoice);
    const message = getMessage(winner);
    console.log(message + rule); // Ex) You lose! Rock beats paper!
    
    //const score = getScore(winner, playerScore, computerScore);
    //console.log(score);
    return [winner, playerScore, computerScore];
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

function getScore(winner, playerScore, computerScore) { //keeps score for each round, and logs when playRoun()
    if (winner === 'player'){
        playerScore++;
    } else if (winner === 'computer'){
        computerScore++;
    } else {
        //do nothing
    }
    return'Player: ' + playerScore + ' ' + 'Computer: ' + computerScore;
}



function game() {
    for (i = 0; i < 6; i++) {
        let playerScore = 0;
        let computerScore = 0;
        let round = playRound(playerScore, computerScore);

        let winner = round[0];
        playerScore = round[1];
        computerScore = round[2];

        let score = getScore(winner, playerScore, computerScore);
        console.log(score);


} //add code here to announce the winner when the for loop ends and rounds finish
}

game();



/*Need a loop that will:
- play 1 round; print the message from playRound() AND update the computer / player score
- Stops after 5 rounds
- then announces winner*/