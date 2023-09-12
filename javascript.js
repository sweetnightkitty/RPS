//Array used for RPS generation
const choice = ['Rock', 'Paper', 'Scissors'];

//Generates Computer's RPS choice randomly
function getComputerChoice() {
 const random = Math.floor(Math.random() * 3);
 return(random, choice[random]);
}

