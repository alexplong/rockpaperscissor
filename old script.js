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
        return "You've tied. womp womp! Try again lawl";
    } else {
/* from previous, if tie - nobody gets points and try again! But if not a tie, check which of rock - paper - scissors is selected then go through that selected loop to determine if win or lose*/
        if (playerSelection == 'rock') {
            if (computerSelection == 'scissors') {
                return "YOUR Rock smashes scissors! You Win teehee" & playerScore++;
            } else return "Paper smothers YOUR rock! You Lose haa" & computerScore++;
        } else if (playerSelection == 'paper') {
            if (computerSelection == 'rock') {
                return "YOUR Paper smothers rock! You Win teehee" & playerScore++;      
            } else return "Scissors slice and dice YOUR paper! You Lose haa" & computerScore++;
        } else if (playerSelection == 'scissors') {
            if (computerSelection == 'rock') {
                return "Rock smashes YOUR scissors! You Lose haa" & computerScore++;
            } else return "YOUR Scissors slice and dice paper! You Win teehee" & playerScore++;  
        }
    }
}

var playerScore = 0;
var computerScore = 0;
const playerSelection = 'rock'; /* returns undefined when called within function  */
const computerSelection = computerPlay(); /* this function works fine, does not return undefined when called within playRound  */


/* when adding playRound parameter as an argument, want to pass it as func instead of func(). Using func() will pass the result of the function whereas using func will reference TO the function  
function game(n, playRound) {  */
    
function game() {
    return playRound(playerSelection, computerSelection);

}

/*
function game(n) {
    for (var i = 1; i <= n; i++) {
    console.log(playRound(playerSelection, computerSelection));
    }
}  */



/*
function game() {
    return playRound(playerSelection, computerSelection);
    return playRound(playeSelection, computerSelection);
} */

console.log(game())
console