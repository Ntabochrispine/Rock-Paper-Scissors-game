function getComputerChoice(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function getHumanChoice() {
    return prompt("Choose One of the Following options:\n 1) Rock \n 2) Paper \n 3) Scissors").toUpperCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "ROCK") {
        switch (computerChoice) {
            case 1:
                console.log("Computer Chose Rock. Draw! No One Gets A Point");
                break;
            case 2:
                console.log("Computer Chose Paper. You lost! Point towards Computer");
                computerScore += 1;
                break;
            case 3:
                console.log("Computer Chose Scissors. YOU win!! Point towards player");
                humanScore += 1;
                break;
        }
    } else if (humanChoice == "PAPER") {
        switch (computerChoice) {
            case 1:
                console.log("Computer Chose Rock. YOU win!! Point towards player");
                humanScore += 1;
                break;
            case 2:
                console.log("Computer Chose Paper. Draw! No One Gets A Point");
                break;
            case 3:
                console.log("Computer Chose Scissors. You lost! Point towards Computer");
                computerScore += 1;
                break;
        }
    } else if (humanChoice == "SCISSORS") {
        switch (computerChoice) {
            case 1:
                console.log("Computer Chose Rock. You lost! Point towards Computer");
                computerScore += 1;
                break;
            case 2:
                console.log("Computer Chose Paper. YOU win!! Point towards player");
                humanScore += 1;
                break;
            case 3:
                console.log("Computer Chose Scissors. Draw! No One Gets A Point");
                break;
        }
    } else {
        console.log("Wrong Input")
    }
    console.log(`Your Score: ${humanScore} | Computer Score: ${computerScore}`);
}

function playGame() {
    while (humanScore < 5 && computerScore < 5) {
        let computerChoice = getComputerChoice(1, 3);
        let humanChoice = getHumanChoice();
        playRound(humanChoice, computerChoice);
    }
    if (humanScore === 5) {
        console.log("You won the game!!")
    }
    else if (computerScore === 5) {
        console.log("You lost the game. Better luck next time")
    }
}

var humanScore = 0;
var computerScore = 0;
playGame()