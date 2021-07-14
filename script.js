// 1. begin with a function named computerPlay that will randomly return: 'rock', 'paper', or 'scissors'
// 2. write function to play a single game of RPS and should take 2 parameters: playerSelection and computerSelection
// 3. function should return string to declare a winner or loser and why.
// 4. make player function so Rock, rock, ROCK, or any variation will be correctly read in




// function [computerPlay] that will randomly return 'rock' 'paper' or 'scissors'
function computerPlay() {
    let computerRandom = ['rock' , 'paper' , 'scissors'];
    computerOut = computerRandom[Math.floor(Math.random()*computerRandom.length)];
    return computerOut;
}

// function to play a single game of rock, paper, scissors using two-parameters that will return a string to declare a winner or loser (and why a win/loss)

let playerSelection = 'rock'; /* returns undefined when called within function  */
let computerSelection = computerPlay(); /* this function works fine, does not return undefined when called within playRound  */
let playerScore = 0;
let computerScore = 0;

// playRound function

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissors'){
        if (playerSelection == computerSelection) {
            return ("You've tied with your opponent! Select another weapon for battle!");
        } else if (playerSelection == 'rock') {
            if (computerSelection == 'scissors') {
                playerScore++;
                return "Rock beats scissors, you win!";
            } else {
                computerScore++;
                return "paper smothers your rock, you lose!";
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
    } else { // run this code if entries are incorrect
        return ('Please enter a rock, a paper, or scissors into battle!');
    }
} 

// console.log(playRound(playerSelection, computerPlay()));
// console.log(playRound(playerSelection, computerPlay()));
// console.log(playRound('rock', 'paper'))


// not a for loop version of the game
function game(rounds = 5) {
    console.log('Starting a 5-round battle of rock, paper, scissors with the AI Hive Mind! Are you ready?!')
    let roundOne = playRound('rock', computerPlay());
    let roundTwo = playRound('rock', computerPlay());
    let roundThree = playRound('scissors', computerPlay());
    let roundFour = playRound('paper', computerPlay());
    let roundFive = playRound('paper', computerPlay());
    console.log(`Round 1... Fight! --- ${roundOne}`);
    // console.log(roundOne);
    console.log(`Round 2... Fight! --- ${roundTwo}`)
    // console.log(roundTwo);
    console.log(`Round 3... Fight! --- ${roundThree}`)
    // console.log(roundThree);
    console.log(`Round 4... Fight! --- ${roundFour}`)
    // console.log(roundFour);
    console.log(`Round 5... Fight! --- ${roundFive}`)
    // console.log(roundFive);
    console.log(playerScore);
    console.log(computerScore);
    if (playerScore == computerScore) {
        console.log("You've tied! Better level up and come back for a rematch");
    } else if (playerScore > computerScore) {
        console.log(`You beat the computer: ${playerScore} rounds to ${computerScore} rounds. Congrats! You've won the long war!`);
    } else {
        console.log(`AI Hive Mind won: ${computerScore} rounds to ${playerScore} rounds and all of humanity is lost :(`);
    }
}

// for loop version of the game


console.log(game())


