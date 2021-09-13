// create container for game results
const container = document.querySelector('#container');
const scores = document.querySelector('#scores');
const round = document.querySelector('#round');
const winner = document.querySelector('#winner');
const lifetimeScore = document.querySelector('#lifetime');
scores.classList.add('gameResults');
round.classList.add('roundResults');

// content.appendChild(container);
// container.insertBefore(scores, buttons);
// container.appendChild(round);
// container.appendChild(winner);
// round.append(container);

// Create a function [computerPlay] that will randomly return 'rock' 'paper' or 'scissors' for computer player
function computerPlay() {
    let computerRandom = ['rock' , 'paper' , 'scissors'];
    computerOut = computerRandom[Math.floor(Math.random()*computerRandom.length)];
    return computerOut;
}

// Create a function to clear winner results space after reset
function clearWinner() {
    winner.textContent = "";
}

// Create a function to play a single game of rock, paper, scissors using two-parameters that will return a string to declare a winner or loser (and why a win/loss)
let computerSelection = computerPlay(); 
let gameRound = 0;
let playerScore = 0;
let computerScore = 0;
let playerTtl = 0;
let computerTtl = 0;

// update scoress
scores.textContent = `NUMBER of ROUNDS: ${gameRound}     SCORE: Hoomans: ${playerScore}  Computer Intelligence: ${computerScore}`;
lifetimeScore.textContent = `Hooman: ${playerTtl}   AI: ${computerTtl}`;

// A single playRound function that tracks the score
function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissors'){
        gameRound++;
        if (playerSelection == computerSelection) {
            return ("You've tied with your opponent! Select another weapon for battle!");
        } else if (playerSelection == 'rock') {
            if (computerSelection == 'scissors') {
                playerScore++;
                return "Rock beats scissors, you win!";
            } else {
                computerScore++;
                return "Paper smothers your rock, you lose!";
            }
        } else if (playerSelection == 'paper') {
            if (computerSelection == 'rock') {
                playerScore++;
                return "Paper smothers rock, you win!";
            } else {
                computerScore++;
                return "Scissors slice and dice your paper, you lose!";
            }
        } else if (playerSelection == 'scissors') {
            if (computerSelection == 'rock') {
                computerScore++;
                return "Rock beats scissors, you lose!";
            } else {
                playerScore++;
                return "Scissors slice and dice paper, you win!";
            }
        }
    } else { 
        return ('Please enter a rock, a paper, or scissors into battle!');
    }
} 

// same as above but adding in 5 lives, create the same as above but more efficiently in a loop
const allButtons = document.querySelectorAll('.gamebtn');         // create a node list of all buttons
allButtons.forEach((button) =>{                                 // use .forEach to iterate through each of the buttons
    button.addEventListener('click', () =>{                     // listen for when a button is clicked and run function when it is clicked
        let oneRound = playRound(button.id, computerPlay());    // play one round using the button.id as input for rock, paper, or scissors and place results in oneRound variable
        round.textContent = `${oneRound}`;                      // display results in div.round element
        console.log(gameRound);
        scores.textContent = `NUMBER of ROUNDS: ${gameRound}     SCORE: Hoomans: ${playerScore}  Computer Intelligence: ${computerScore}`;
        lifetimeScore.textContent = `Hooman: ${playerTtl}   AI: ${computerTtl}`;

        if (playerScore == 5){
            winner.textContent = "You beat the HIVEMIND AI, good job hooman.";
            playerTtl++;
            playerScore = 0;
            computerScore = 0;
            clearWinner();
        } else if (computerScore == 5){
            winner.textContent = "The HIVEMIND wins and hooman-kind is doomed.";
            computerTtl++;
            playerScore = 0;
            computerScore = 0;
            clearWinner();

        } 
        
        // if (gameRound == 5){
        //     if (playerScore > computerScore){
        //         winner.textContent = "Wooooo you win the long war!!!!!";

        //     } else  if (computerScore > playerScore){
        //         winner.textContent = "Man you lost and the AI takes over.....";

        //     } else {
        //         winner.textContent = "Did we win...? Looks like the war is still continuing, nobody will accept this draw"
        //     }
        // }
    })
});


