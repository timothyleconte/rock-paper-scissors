//assign a number to each option (rock, paper, scissors) 
//have computer output 1 of 3 numbers at random
//display the chosen variable

function getComputerChoice(){

    let a = Math.floor(Math.random() * 3);

    if (a == 0) {
        return("rock");
    } else if (a == 1) {
        return("paper")
    } else {return("scissors");

    }
}

//prompt the player to enter their choice (rock, paper, scissors)
//take their choice and turn it into a case-insensitive variable

function getHumanChoice(){
    
    let a = prompt("rock, paper, or scissors?").toLowerCase();

    if (a == "rock"){
        return("rock");
    }else if (a == "paper"){
        return("paper");
    }else {
        return("scissors");
    }
}

//create score variables

let humanScore = 0;
let computerScore = 0;

//create logic to play a single round of rock paper scissors
//take the two players choices as arguments and output the winner using rock, paper, scissors rules
//take the winner of the playRound and increment their score by 1; display scoreboard

function playRound(humanChoice, computerChoice){


    if (humanChoice == "rock" && computerChoice == "rock"){
        console.log("Tie! Rock vs Rock");
    }else if (humanChoice == "paper" && computerChoice == "paper"){
        console.log("Tie! Paper vs Paper");
    }else if (humanChoice == "scissors" && computerChoice == "scissors"){
        console.log("Tie! Scissors vs Scissors");
    }else if (humanChoice == "rock" && computerChoice == "scissors"){
        console.log("You win that round! Rock smashes scissors!");
        humanScore++;
    }else if (humanChoice == "rock" && computerChoice == "paper"){
        console.log("You lose that round! Paper covers rock!");
        computerScore++
    }else if (humanChoice == "scissors" && computerChoice == "rock"){
        console.log("You lose that round! Rock smashes scissors");
        computerScore++;
    }else if (humanChoice == "scissors" && computerChoice == "paper"){
        console.log("You win that round! Scissors cut paper!");
        humanScore++;
    }else if (humanChoice == "paper" && computerChoice == "rock"){
        console.log("You win that round! Paper covers rock!");
        humanScore++;
    }else{
        console.log("You lose that round! Scissors cut paper!" )
        computerScore++;
     }

    console.log("Your score: ", humanScore);
    console.log("Computer's score: ", computerScore);
}

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice()

//start new code for playing an entire game of rock paper scissors which is the best 3 out of 5 (total five rounds)
//repeat the playRound code five times to play the full game

function playGame(){
    playRound(getHumanChoice(),getComputerChoice());
       playRound(getHumanChoice(),getComputerChoice());
          playRound(getHumanChoice(),getComputerChoice());
             playRound(getHumanChoice(),getComputerChoice());
                playRound(getHumanChoice(),getComputerChoice());

    if (humanScore && computerScore < 4){
        console.log()
    }else if (humanScore == 4){
        console.log("You win! Refresh to play again!")
    }else if (humanScore && computerScore == 2){
        console.log("Tie game! Refresh to play again!")
    }else{
        console.log("You lose! Refresh to play again!")
    }

}

playGame();

