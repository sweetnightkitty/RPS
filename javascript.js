const choices = ['rock', 'paper', 'scissors'];
const winners = [];
const divResults = document.querySelector('.results')
const buttons = document.querySelectorAll('.btn');
const modal = document.querySelector('.modal');
const modalBtn = document.createElement('button');
modalBtn.classList.add('modalbtn');
modalBtn.textContent = 'Try Again!';



function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection) {
    //const playerSelection = getPlayerChoice(); // Delete when the RPS buttons as input are finalized.
    const computerSelection = getComputerChoice();

    const winner = checkWinner(playerSelection, computerSelection);
    const winningChoice = getWinningChoice(winner, playerSelection, computerSelection);

    const rule = document.createTextNode(getRule(winningChoice));
    const message = document.createTextNode(getMessage(winner));
    divResults.appendChild(message);
    if (rule != '') {
        divResults.appendChild(document.createElement("br"));
        divResults.appendChild(rule);
    } else {}
    // Ex) You lose! Rock beats paper!

    winners.push(winner);
    let score = logScore();
    const scoreResult = document.createTextNode('Player: ' + score[0] + ' Computer: ' + score[1]);
    const linebreak = document.createElement("br");
    divResults.appendChild(linebreak);
    divResults.appendChild(scoreResult);
    //console.log('Player: ' + score[0] + ' Computer: ' + score[1]); // Ex) Player: 2 Computer 3
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
        return 'You win!';
    } else if (winner === 'computer'){
        return 'You lose!';
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

function logScore() { //keeps score for each round, and logs when playRoun()
    let playerWins = winners.filter((item) => item == 'player').length;
    let computerWins = winners.filter((item) => item == 'computer').length;
    let draws = winners.filter((item) => item == 'draw').length;
    return [playerWins, computerWins];
}


//Plays 5 round game, temporarily disabled while working on UI
/*function game() {
    for (i = 0; i < 6; i++) {
        let round = playRound();
    } 
    
    let winner = announceWinner();
    console.log(winner);

}*/

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

let buttonClicks = 1;
//Buttons as playerChoice input, to replace prompt window (in progress)
buttons.forEach((button) => {
    button.addEventListener('click', function inputPlayer() {
        if (buttonClicks <= 4){
            divResults.textContent = '';
            let playerChoice = button.textContent.toLowerCase();
            playRound(playerChoice);
            buttonClicks++;
        } else if (buttonClicks === 5) {
            divResults.textContent = '';
            let playerChoice = button.textContent.toLowerCase();
            playRound(playerChoice);
            buttonClicks++;

            const winner = document.createTextNode(announceWinner());
            const linebreak = document.createElement("br");
            //divResults.appendChild(linebreak);
            modal.appendChild(winner);
            modal.appendChild(linebreak);
            modal.appendChild(modalBtn);
            modal.style.display = 'block';
            modal.style.color = 'purple';
            modal.style.fontSize = '20px';

        } else {
            //do nothing
        }

    })
}
)


modalBtn.addEventListener('click', function restartGame() {
    divResults.textContent = '';
    winners.length = 0;
    modal.innerHTML = '';
    modal.style.display = 'none';
    buttonClicks = 1;
})


