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

//default setting for game to run on button click.
let player = 0;
let computer = 0;

//Buttons as playerChoice input, to replace prompt window (in progress)
buttons.forEach((button) => {
    button.addEventListener('click', function inputPlayer() {

        if (player < 5 && computer < 5){
            divResults.textContent = '';
            let playerChoice = button.textContent.toLocaleLowerCase();
            playRound(playerChoice);

            const score = logScore();
            player = score[0];
            computer = score[1];    

        } else {
            //do nothing
        }
        while (player === 5 || computer === 5) {
            //stops the game from continuing after modal is activated
            player++;
            computer++;

            //Final Winner Announcement message
            const winner = document.createTextNode(announceWinner());

            const linebreak = document.createElement("br");
            
            //Adds content to modal
            modal.appendChild(winner); //Adds Final winner announcement to modal
            modal.appendChild(linebreak);
            modal.appendChild(modalBtn); //Try again Button

            //Activate modal ex) you lose try again
            modal.style.display = 'block';
            modal.style.color = 'purple';
            modal.style.fontSize = '20px';
        }
    })
}
)

//Try again button
modalBtn.addEventListener('click', function restartGame() {
    divResults.textContent = '';
    winners.length = 0;
    modal.innerHTML = '';
    modal.style.display = 'none';

    //resets the game
    player = 0;
    computer = 0;
})


