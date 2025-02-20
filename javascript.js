/* Logic to get Computer choice */
    /* Create function that randomly returns "rock" "paper" or "scissors" */
        /* Create function called getComputerChoice */
        function getComputerChoice() {
            /* Generate random number between 1-3 */
            let randomNumber = Math.floor(Math.random() * 3) + 1;
            console.log(randomNumber)
            /* Conditions that determine what numbers return "rock" "paper" or "scissors" */   
            if (randomNumber ===1) {
                return "rock";
            } else if (randomNumber === 2) {
                return "paper";
            } else {
                return "scissors";
            }
        }
        console.log(getComputerChoice());
        
/* Logic to get human choice */    
     /* Create function to input human choice */
        /* Create function called getHumanChoice */
        function getHumanChoice() {
            /* Prompt for user input and convert to lower case*/
            /* Create loop that only accepts input of "Rock" "Paper" or "Scissors" */
    
            let choice;
            
            do {
                choice = prompt("Enter Rock, Paper, or Scissors:").toLowerCase();
            } while (choice !== "rock" && choice !== "paper" && choice !== "scissors");
      
            return choice;
        }

/* Declare players score variables */
    /* Create variables to keep track of score */
        /* Create variable humanScore with initial value 0 */
        let humanScore = 0;
        /* Create variable computerScore with initial value 0 */
        let computerScore = 0;

/* Logic to play single round */
    /* Create function that recieves arguments from getComputerChoice and getHumanChoice, determines a winner, and increments the winner's score 1 point.
        /* Create function called playRound */
        function playRound(humanChoice, computerChoice) {
            console.log(`You chose: ${humanChoice}`);
            console.log(`Computer chose: ${computerChoice}`);

            if (humanChoice === computerChoice) {
                console.log("It's a tie!");
            } else if (
                (humanChoice === "rock" && computerChoice === "scissors") ||
                (humanChoice === "paper" && computerChoice === "rock") ||
                (humanChoice === "scissors" && computerChoice === "paper")
        /* Declare a round winner */
            /* Print string that declares winner */
            ) {
                console.log("You win this round!");
                humanScore++;
            } else {
                console.log("Computer wins this round!");
            /* Increment humanScore or computerScore based on the winner */
                computerScore++
            }

            console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
        }

/* Logic to play entire game */
    /* Create function called playGame */
    function playGame() {
        console.log("Starting Rock-Paper-Scissors... Best of 5!");
        /* loop for round count */
        for (let i = 1; i <= 5; i++) {
            console.log(`Round ${i}`);

            const humanSelection = getHumanChoice();
            console.log(`You chose: ${humanSelection}`);

            const computerSelection = getComputerChoice();
            console.log(`Computer chose: ${computerSelection}`);

            playRound(humanSelection, computerSelection);
        }
        /* Declare a winner and end of game scripts */
        console.log("Game Over!");
        if (humanScore > computerScore) {
            console.log("You win the game!");
        } else if (humanScore < computerScore) {
            console.log("Computer wins the game!");
        } else {
            console.log("It's a tie game!");
        }
    }

    playGame();
    /* Declare playRound humanScore and computerScore */
    /* Play 5 rounds */
