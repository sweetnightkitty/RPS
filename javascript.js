//Array used for RPS generation
const choice = ['Rock', 'Paper', 'Scissors'];

//Generates Computer's RPS choice randomly
function getComputerChoice() {
 const random = Math.floor(Math.random() * 3);
 return(random, choice[random]);
}

//Single game of RPS
function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let rockWins = 'Rock beats scissors!';
    let scissorsWins = 'Scissors beats paper!';
    let paperWins = 'Paper beats rock';
    return player == 'rock' && computerSelection == 'Scissors' ? 'You win! ' + rockWins
    : player == 'rock' && computerSelection == 'Paper' ? 'You lose! ' + paperWins
    : player == 'paper' && computerSelection == 'Rock' ? 'You win! ' + paperWins
    : player == 'paper' && computerSelection == 'Scissors' ? 'You lose! ' + scissorsWins
    : player == 'scissors' && computerSelection == 'Paper' ? 'You win! ' + scissorsWins
    : player == 'scissors' && computerSelection == 'Rock' ? 'You lose! ' + rockWins
    : player == computerSelection.toLowerCase() ? 'Draw! Try again.'
    : 'error try again';
 }

//Provides computer choice to playRound function
const computerSelection = getComputerChoice();

//runs 5 rounds and logs how many wins out of total rounds.
function game() {
    let playerSelection = prompt('Choose rock, scissors, or paper');
    let round1 = playRound
    console.log(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));
}










const playerSelection = 'rock';


//ternary operator that determines if user win, lose, or draw
function defineResult(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let result = player == 'rock' && computerSelection == 'Scissors' || player == 'scissors' && computerSelection == 'Paper' || player == 'paper' && computerSelection == 'Rock' ? 'win' 
    : player == 'rock' && computerSelection == 'Paper' || player == 'paper' && computerSelection == 'Scissors' || player == 'scissors' && computerSelection == 'Rock' ? 'lose'
    : 'draw';
    return result;
}
const result = defineResult(playerSelection, computerSelection);

//function defines what option won the game (Rock, Scissors or Paper) regardless of who won
function defineWinningChoice() {
    let winningChoice = result == 'win' ? playerSelection 
    : result == 'lose' ? computerSelection
    : '';
    return winningChoice.toLowerCase();
}

const winningChoice = defineWinningChoice();

//Creates a message for each winning option
function getRule() {
    return winningChoice == 'rock' ? 'Rock beats scissors!'
    : winningChoice == 'paper' ? 'Paper beats rock!'
    : winningChoice == 'scissors' ? 'Scissors beats paper!'
    : winningChoice == ''? 'Try again.'
    : 'error';
}

const rule = getRule();

//Function that gets a message after the game
function showExpression() {
    return 'You ' + result + '! ' + rule;

}

//5 round game
function fiveRound() {
    let playerSelection = prompt('Choose rock, scissors, or paper');
    let round1 = console.log(showExpression());
    let round2 = console.log(showExpression());
    let round3 = console.log(showExpression());
    let round4 = console.log(showExpression());
    let round5 = console.log(showExpression());
    

}

fiveRound();