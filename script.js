/*
1. begin with a function named computerPlay that will randomly return: 'rock', 'paper', or 'scissors'
2. write function to play a single game of RPS and should take 2 parameters: playerSelection and computerSelection
3. function should return string to declare a winner or loser and why.
4. make player function so Rock, rock, ROCK, or any variation will be correctly read in
5. 
*/


/* function [computerPlay] that will randomly return 'rock' 'paper' or 'scissors' */
function computerPlay() {
    computerRandom = ['rock' , 'paper' , 'scissors'];
    computerRandom = computerRandom[Math.floor(Math.random()*computerRandom.length)];
    return computerRandom;
}

/* function to play a single game of rock, paper, scissors using two-parameters that will return a string to declare a winner or loser (and why a win/loss) */

function playRound(playerSelection, computerSelection) {
/* if the game is a tie....   */
    if (playerSelection == computerSelection) {
        return "You've tied with " + playerSelection + "! Try again.";
    } else {
/* from previous, if tie - nobody gets points and try again! But if not a tie, check which of rock - paper - scissors is selected then go through that selected loop to determine if win or lose*/
        if (playerSelection == 'rock') {
            if (computerSelection == 'scissors') {
                return "Rock smashes scissors! You Win teehee" 
            } else return "Paper smothers rock! You Lose haa"
        } else if (playerSelection == 'paper') {
            if (computerSelection == 'rock') {
                return "Paper smothers rock! You Win teehee"      
            } else return "Scissors slice and dice paper! You Lose haa"
        } else if (playerSelection == 'scissors') {
            if (computerSelection == 'rock') {
                return "Rock smashes scissors! You Lose haa"
            } else return "Scissors slice and dice paper! You Win teehee"
        }
    }
}

const playerSelection = 'rock'; /* returns undefined when called within function  */
const computerSelection = computerPlay(); /* this function works fine, does not return undefined when called within playRound  */

/* for function to run, fill the parameters/arguments! */
console.log(playRound(playerSelection, computerSelection)) 


