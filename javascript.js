//mark's first ever javascript game!

function getComputerChoice(){

    let a = Math.floor(Math.random() * 3);

    if (a == 0) {
        return("rock");
    } else if (a == 1) {
        return("paper")
    } else {return("scissors");

    }
}

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice){

    const results = document.querySelector(".results");
    const humScore  = document.querySelector(".humScore");
    const compScore = document.querySelector(".compScore");


    if (humanChoice == "rock" && computerChoice == "rock"){
        results.style.cssText = "color: black; font-weight: normal;";
        results.textContent = "Tie! Rock vs Rock";
    }else if (humanChoice == "paper" && computerChoice == "paper"){
        results.style.cssText = "color: black; font-weight: normal;";
        results.textContent = "Tie! Paper vs Paper";
    }else if (humanChoice == "scissors" && computerChoice == "scissors"){
        results.style.cssText = "color: black; font-weight: normal;";
        results.textContent = "Tie! Scissors vs Scissors";
    }else if (humanChoice == "rock" && computerChoice == "scissors"){
        results.style.cssText = "color: green; font-weight: normal;";
        results.textContent = "You win that round! Rock smashes scissors!";
        humanScore++;
    }else if (humanChoice == "rock" && computerChoice == "paper"){
        results.style.cssText = "color: red; font-weight: normal;";
        results.textContent = "You lose that round! Paper covers rock!";
        computerScore++
    }else if (humanChoice == "scissors" && computerChoice == "rock"){
        results.style.cssText = "color: red; font-weight: normal;";
        results.textContent = "You lose that round! Rock smashes scissors";
        computerScore++;
    }else if (humanChoice == "scissors" && computerChoice == "paper"){
        results.style.cssText = "color: green; font-weight: normal;";
        results.textContent = "You win that round! Scissors cut paper!";
        humanScore++;
    }else if (humanChoice == "paper" && computerChoice == "rock"){
        results.style.cssText = "color: green; font-weight: normal;";
        results.textContent = "You win that round! Paper covers rock!";
        humanScore++;
    }else{
        results.style.cssText = "color: red; font-weight: normal;";
        results.textContent = "You lose that round! Scissors cut paper!";
        computerScore++;
     }


    humScore.textContent = `Your score: ${humanScore}`;
    compScore.textContent = `Computer's score: ${computerScore}`;

    if (humanScore === 5){
        results.style.cssText = "color: green; font-weight: bold;";
        results.textContent = "You win the game! Congratulations - play again!";
        humanScore = 0;
        computerScore = 0;
    }else if (computerScore === 5){
        results.style.cssText = "color: red; font-weight: bold;";
        results.textContent = "You lose the game! Sorry - try again!"
        humanScore = 0;
        computerScore = 0;
    }

}

const rockButton = document.querySelector("#rock");

rockButton.addEventListener("click",() => {

    playRound("rock", getComputerChoice());

});

const paperButton = document.querySelector("#paper");

paperButton.addEventListener("click", () => {

    playRound("paper", getComputerChoice());

})

const scissorsButton = document.querySelector ("#scissors");

scissorsButton.addEventListener("click", () => {

    playRound("scissors", getComputerChoice());

})