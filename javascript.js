//assign a number to each option (rock, paper, scissors) 
//have computer output 3 numbers at random
//display the chosen variable

function getComputerChoice(){

    let a = Math.floor(Math.random() * 3);

    if (a == 0) {
        console.log("rock");
    } else if (a == 1) {
        console.log("paper")
    } else {console.log("scissors");

    }
}

getComputerChoice()

//prompt the player to enter their choice (rock, paper, scissors)
//take their choice and turn it into a case-insensitive variable

function getHumanChoice(){
    
    let a = prompt("rock, paper, or scissors?").toLowerCase();

    if (a == "rock"){
        console.log("rock");
    }else if (a == "paper"){
        console.log("paper");
    }else {
        console.log("scissors");
    }
}

getHumanChoice()