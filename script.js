let humanScore = 0;
let computerScore = 0;

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

    // Stop the game if someone has already reached 5
    if (humanScore === 5 || computerScore === 5) {
        return;
    }

    if (humanChoice === "ROCK") {

        switch (computerChoice) {

            case 1:
                results.innerHTML += "<p>Computer chose Rock. Draw!</p>";
                break;

            case 2:
                results.innerHTML += "<p>Computer chose Paper. You lost!</p>";
                computerScore++;
                break;

            case 3:
                results.innerHTML += "<p>Computer chose Scissors. You win!</p>";
                humanScore++;
                break;
        }

    } else if (humanChoice === "PAPER") {

        switch (computerChoice) {

            case 1:
                results.innerHTML += "<p>Computer chose Rock. You win!</p>";
                humanScore++;
                break;

            case 2:
                results.innerHTML += "<p>Computer chose Paper. Draw!</p>";
                break;

            case 3:
                results.innerHTML += "<p>Computer chose Scissors. You lost!</p>";
                computerScore++;
                break;
        }

    } else if (humanChoice === "SCISSORS") {

        switch (computerChoice) {

            case 1:
                results.innerHTML += "<p>Computer chose Rock. You lost!</p>";
                computerScore++;
                break;

            case 2:
                results.innerHTML += "<p>Computer chose Paper. You win!</p>";
                humanScore++;
                break;

            case 3:
                results.innerHTML += "<p>Computer chose Scissors. Draw!</p>";
                break;
        }
    }

    // Display score
    results.innerHTML += `
        <p><strong>Your Score: ${humanScore} | Computer Score: ${computerScore}</strong></p>
    `;

    // Check whether the game has been won
    if (humanScore === 5) {
        results.innerHTML += "<h2>You won the game! 🎉</h2>";
        disableButtons();
    } 
    else if (computerScore === 5) {
        results.innerHTML += "<h2>You lost the game. Better luck next time!</h2>";
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
}