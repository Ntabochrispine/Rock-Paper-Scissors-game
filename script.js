let humanScore = 0;
let computerScore = 0;
const restartButton = document.querySelector("#restart");

// Get a random number between min and max
function getComputerChoice(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);

    return Math.floor(
        Math.random() * (maxFloored - minCeiled + 1) + minCeiled
    );
}

// Get the results div
const results = document.querySelector("#results");

// Play one round
function playRound(humanChoice, computerChoice) {

    if (humanScore === 5 || computerScore === 5) {
        return;
    }

    if (humanChoice === "ROCK") {

        switch (computerChoice) {
            case 1:
                results.textContent = "Computer chose Rock. Draw!";
                break;

            case 2:
                results.textContent = "Computer chose Paper. You lost!";
                computerScore++;
                break;

            case 3:
                results.textContent = "Computer chose Scissors. You win!";
                humanScore++;
                break;
        }

    } else if (humanChoice === "PAPER") {

        switch (computerChoice) {
            case 1:
                results.textContent = "Computer chose Rock. You win!";
                humanScore++;
                break;

            case 2:
                results.textContent = "Computer chose Paper. Draw!";
                break;

            case 3:
                results.textContent = "Computer chose Scissors. You lost!";
                computerScore++;
                break;
        }

    } else if (humanChoice === "SCISSORS") {

        switch (computerChoice) {
            case 1:
                results.textContent = "Computer chose Rock. You lost!";
                computerScore++;
                break;

            case 2:
                results.textContent = "Computer chose Paper. You win!";
                humanScore++;
                break;

            case 3:
                results.textContent = "Computer chose Scissors. Draw!";
                break;
        }
    }

    // Update the existing score instead of creating a new line
    score.textContent =
        `Your Score: ${humanScore} | Computer Score: ${computerScore}`;

    if (humanScore === 5) {
        results.textContent = "You won the game!";
        disableButtons();
    }

    if (computerScore === 5) {
        results.textContent = "You lost the game. Better luck next time!";
        disableButtons();
    }
}


// Rock button
const rockButton = document.querySelector("#rock");

rockButton.addEventListener("click", function () {

    const computerChoice = getComputerChoice(1, 3);

    playRound("ROCK", computerChoice);
});


// Paper button
const paperButton = document.querySelector("#paper");

paperButton.addEventListener("click", function () {

    const computerChoice = getComputerChoice(1, 3);

    playRound("PAPER", computerChoice);
});


// Scissors button
const scissorsButton = document.querySelector("#scissors");

scissorsButton.addEventListener("click", function () {

    const computerChoice = getComputerChoice(1, 3);

    playRound("SCISSORS", computerChoice);
});


// Disable buttons after game ends
function disableButtons() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;

    restartButton.hidden = false;
}
//restart function
restartButton.addEventListener("click", function () {

    humanScore = 0;
    computerScore = 0;

    score.textContent = "Your Score: 0 | Computer Score: 0";

    results.textContent = "Choose Rock, Paper, or Scissors to start!";

    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;

    restartButton.hidden = true;
});