// 1. begin with a function named computerPlay that will randomly return: 'rock', 'paper', or 'scissors'
// 2. write function to play a single game of RPS and should take 2 parameters: playerSelection and computerSelection
// 3. function should return string to declare a winner or loser and why.
// 4. make player function so Rock, rock, ROCK, or any variation will be correctly read in


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


// // not a for loop version of the game
// function game(rounds = 5) {
//     console.log('Starting a 5-round battle of rock, paper, scissors with the AI Hive Mind! Are you ready?!')
//     let roundOne = playRound(prompt(playerPromptSelection), computerPlay());
//     let roundTwo = playRound(prompt(playerPromptSelection), computerPlay());
//     let roundThree = playRound(prompt(playerPromptSelection), computerPlay());
//     let roundFour = playRound(prompt(playerPromptSelection), computerPlay());
//     let roundFive = playRound(prompt(playerPromptSelection), computerPlay());
//     console.log(`Round 1... Fight! --- ${roundOne}`);
//     console.log(`Round 2... Fight! --- ${roundTwo}`)
//     console.log(`Round 3... Fight! --- ${roundThree}`)
//     console.log(`Round 4... Fight! --- ${roundFour}`)
//     console.log(`Round 5... Fight! --- ${roundFive}`)
//     if (playerScore == computerScore) {
//         console.log("You've tied! Better level up and come back for a rematch");
//     } else if (playerScore > computerScore) {
//         console.log(`You beat the computer: ${playerScore} rounds to ${computerScore} rounds. Congrats! You've won the long war!`);
//     } else {
//         console.log(`AI Hive Mind won: ${computerScore} rounds to ${playerScore} rounds and all of humanity is lost :(`);
//     }
// }



// rps-ui buttons

// create a variable for each button and generate event listener for click to play selection and display results
// const rockButton = document.querySelector('#rock');
// const paperButton = document.querySelector('#paper');
// const scissorsButton = document.querySelector('#scissors');

// rockButton.addEventListener('click', () =>{
//     // console.log(playRound('rock', computerPlay()));
//     let rockResults = playRound('rock', computerPlay());
//     round.textContent = `${rockResults}`;
//     // console.log(rockResults);
// });
// paperButton.addEventListener('click', () =>{
//     // console.log(playRound('paper', computerPlay()));
//     let paperResults = playRound('paper', computerPlay());
//     round.textContent = `${paperResults}`;
// });
// scissorsButton.addEventListener('click', () =>{
//     // console.log(playRound('scissors', computerPlay()));
//     let scissorsResults = playRound('scissors', computerPlay());
//     round.textContent = `${scissorsResults}`;
// });


// create the same as above but more efficiently in a loop
// const allButtons = document.querySelectorAll('button');         // create a node list of all buttons
// allButtons.forEach((button) =>{                                 // use .forEach to iterate through each of the buttons
//     button.addEventListener('click', () =>{                     // listen for when a button is clicked and run function when it is clicked
//         let oneRound = playRound(button.id, computerPlay());    // play one round using the button.id as input for rock, paper, or scissors and place results in oneRound variable
//         round.textContent = `${oneRound}`;                      // display results in div.round element
//         scores.textContent = `CURRENT SCORE: Hoomans: ${playerScore}     Computer Intelligence: ${computerScore}`;
//         if (playerScore == 5) {
//             winner.textContent = "Wooooo you win the long war!!!!!"
//         } else if (computerScore ==5) {
//             winner.textContent = "Man you lost and the AI takes over....."
//         }
//     })
// })


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