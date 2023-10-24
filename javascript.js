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
}

playRound();





/*
 //Single Round
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

*/