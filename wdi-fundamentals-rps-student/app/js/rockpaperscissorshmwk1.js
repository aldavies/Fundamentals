////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////
    getPlayerMove()
    getComputerMove()
    getWinner()
    playtoFive()

function getPlayerMove(move) {
    return move == move || getInput();
}

function getComputerMove(move) {
   return move == move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;

     if ((playerMove == 'rock') && (computerMove == 'scissors')) { 
        winner = 'player'; 
    }
    else if ((playerMove == 'scissor') && (computerMove == 'rock')) { 
        winner = 'computer'; 
    }
    else if ((playerMove == 'rock') && (computerMove == 'paper')) { 
        winner = 'computer'; 
    }
    else if ((playerMove == 'paper') && (computerMove == 'rock')) { 
        winner = 'player'; 
    }
    else if ((playerMove == 'scissors') && (computerMove == 'paper')) { 
        winner = 'player'; 
    }
    else if ((playerMove == 'paper') && (computerMove == 'scissors')) { 
        winner = 'computer'; 
    }
    else if ((player move === computerMove)) {
        winner = 'tie'
    }
    return winner;
}

function playToFive() 
  console.log("Let's play Rock, Paper, Scissors")
   var playerWins = 0;
   var computerWins = 0;
   // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
   /* YOUR CODE HERE */
       while (playerWins < 5 && computerWins < 5) {
       var playerMove = getPlayerMove();
       var computerMove = getComputerMove();
       var winner = getWinner(playerMove, computerMove);
       if (winner === 'player') {playerWins++}
       else {computerWins++}
       console.log("Player chose " + playerMove + " while Computer chose " + computerMove);
       console.log("The score is " + playerWins + " to " + computerWins);
   }
   return [playerWins, computerWins];
