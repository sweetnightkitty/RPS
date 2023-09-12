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
    let round = playRound(playerSelection, computerSelection);
    let win = 0;
    let totalRounds = 1;
    console.log(playRound(playerSelection, computerSelection));
    if (round.includes('win')) {
        win += 1;
    }
    return('(' + win + '/' + totalRounds + ')');
    playerSelection = prompt('Choose again');
}

console.log(game());

