// Create a function [computerPlay] that will randomly return 'rock' 'paper' or 'scissors' for computer player
function computerPlay() {
    let computerRandom = ['rock' , 'paper' , 'scissors'];
    computerOut = computerRandom[Math.floor(Math.random()*computerRandom.length)];
    return computerOut;
}


// Create a function to play a single game of rock, paper, scissors using two-parameters that will return a string to declare a winner or loser (and why a win/loss)
let computerSelection = computerPlay(); 
let gameRound = 0;
let playerScore = 0;
let computerScore = 0;


// A single playRound function
function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissors'){
        gameRound++;
        if (playerSelection == computerSelection) {
            return ("You've tied with your opponent! Select another weapon for battle!");
            // gameRound++;
        } else if (playerSelection == 'rock') {
            if (computerSelection == 'scissors') {
                playerScore++;
                // gameRound++;
                return "Rock beats scissors, you win!";
            } else {
                computerScore++;
                // gameRound++;
                return "Paper smothers your rock, you lose!";
            }
        } else if (playerSelection == 'paper') {
            if (computerSelection == 'rock') {
                playerScore++;
                // gameRound++;
                return "Paper smothers rock, you win!";
            } else {
                computerScore++;
                // gameRound++;
                return "Scissors slice and dice your paper, you lose!";
            }
        } else if (playerSelection == 'scissors') {
            if (computerSelection == 'rock') {
                computerScore++;
                // gameRound++;
                return "Rock beats scissors, you lose!";
            } else {
                playerScore++;
                // gameRound++;
                return "Scissors slice and dice paper, you win!";
            }
        }
    } else { // run this code if entries are incorrect
        return ('Please enter a rock, a paper, or scissors into battle!');
    }
} 

// same as above but adding in 5 lives, create the same as above but more efficiently in a loop
const allButtons = document.querySelectorAll('button');         // create a node list of all buttons


allButtons.forEach((button) =>{                                 // use .forEach to iterate through each of the buttons
    button.addEventListener('click', () =>{                     // listen for when a button is clicked and run function when it is clicked
        let oneRound = playRound(button.id, computerPlay());    // play one round using the button.id as input for rock, paper, or scissors and place results in oneRound variable
        round.textContent = `${oneRound}`;                      // display results in div.round element
        console.log(gameRound);
        scores.textContent = `CURRENT ROUND: ${gameRound} SCORE: Hoomans: ${playerScore}     Computer Intelligence: ${computerScore}`;
        if (gameRound == 5){
            if (playerScore > computerScore){
                winner.textContent = "Wooooo you win the long war!!!!!"
            } else  if (computerScore > playerScore){
                winner.textContent = "Man you lost and the AI takes over....."
            } else {
                winner.textContent = "Did we win...? Looks like the war is still continuing, nobody will accept this draw"
            }
        }
    })
})





// create container for game results
const container = document.querySelector('#container');
const scores = document.createElement('div');
const round = document.createElement('div');
const winner = document.createElement('div');
scores.classList.add('gameResults');
round.classList.add('roundResults');



// content.appendChild(container);
container.insertBefore(scores, buttons);
container.appendChild(round);
container.appendChild(winner);
// round.append(container);


// how to get scores to update
scores.textContent = `CURRENT ROUND: ${gameRound} SCORE: Hoomans: ${playerScore}     Computer Intelligence: ${computerScore}`;