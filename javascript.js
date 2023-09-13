//Array used to feed options into the computer random choices
const choice = ['Rock', 'Paper', 'Scissors'];

//Generates Computer's RPS choice randomly
function getComputerChoice() {
 const random = Math.floor(Math.random() * 3);
 return(random, choice[random]);
}

//Automatically provides computer response to future functions
const computerSelection = getComputerChoice();

//Need to ask the user what their choice is, converted to lower case to make functions easy to write and avoid errors
function getPlayerSelection() {
    let playerSelection = prompt('Choose rock, scissors, or paper').toLowerCase();
    return playerSelection;
}


/*Single game of RPS
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
 */

 //Single Round
 function playRound(playerSelection, computerSelection) {
    let result = playerSelection == 'rock' && computerSelection == 'Scissors' 
    || playerSelection == 'paper' && computerSelection == 'Rock' 
    || playerSelection == 'scissors' && computerSelection == 'Paper' ? 'You win!'
    : playerSelection == computerSelection.toLowerCase() ? 'Draw! Try again.'
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







/*

let playerSelection = prompt('Choose rock, scissors, or paper!');


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

*/