// Wait for the DOM to load before running script
document.addEventListener("DOMContentLoaded", () => {

    // Select the results div
    const resultsDiv = document.getElementById("results");
    
    // Select buttons
    const btnRock = document.getElementById("rock");
    const btnPaper = document.getElementById("paper");
    const btnScissors = document.getElementById("scissors");

    // Track scores
    let humanScore = 0;
    let computerScore = 0;

    // Function to get computer's choice
    function getComputerChoice () {
        const choices = ["rock", "paper", "scissors"];
        return choices[Math.floor(Math.random() * 3)];
    }

    // Function to play one round
    function playRound(humanChoice, computerChoice) {
        let resultMessage = `You chose: ${humanChoice}, Computer Chose: ${computerChoice}. `;

        if (humanChoice === computerChoice) {
            resultMessage +="It's a tie!";
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice ==="paper")
        ) {
            resultMessage += "You win this round!";
            humanScore ++;
        } else {
            resultMessage += "Computer wins this round!";
            computerScore ++;
        }

        // Update the results div
        resultsDiv.textContent = `${resultMessage} Score - You: ${humanScore}, Computer: ${computerScore}`;

        if (humanScore >= 5) {
            resultsDiv.textContent = "Congrats! You won the game!"
            return;
        } else if (computerScore >= 5) {
            resultsDiv.textContent = "Sorry. You lost the game."
            return;
        }


    }

    // Add event listeners to buttons
    btnRock.addEventListener("click", () => playRound("rock", getComputerChoice()));
    btnPaper.addEventListener("click", () => playRound("paper", getComputerChoice()));
    btnScissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));
});    