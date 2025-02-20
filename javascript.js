/* Logic to get Computer choice */
    /* Create function that randomly returns "rock" "paper" or "scissors" */
        /* Create function called getComputerChoice */
        function getComputerChoice() {
            /* Generate random number between 1-3 */
            let randomNumber = Math.floor(Math.random() * 3) + 1;
            console.log(randomNumber)
            /* Conditions that determine what numbers return "rock" "paper" or "scissors" */   
            if (randomNumber ===1) {
                return "Rock";
            } else if (randomNumber === 2) {
                return "Paper";
            } else {
                return "Scissors";
            }
        }
        console.log(getComputerChoice());
        
/* Logic to get human choice */    
     /* Create function to input human choice */
        /* Create function called getHumanChoice */
        /* Create loop that only accepts input of "Rock" "Paper" or "Scissors" */

/* Declare players score variables */
    /* Create variables to keep track of score */
        /* Create variable humanScore with initial value 0 */
        /* Create variable computerScore with initial value 0 */

/* Logic to play single round */
    /* Create function that recieves arguments from getComputerChoice and getHumanChoice, determines a winner, and increments the winner's score 1 point.
        /* Create function called playRound */
        /* Create case-insensitive parameter humanChoice set to getHumanChoice */
        /* Create case-insensitive parameter computerChoice set to getComputerChoice */

    /* Declare a round winner */
      /* Print string that declares winner */
      /* Increment humanScore or computerScore based on the winner */

/* Logic to play entire game */
    /* Create function called playGame */
    /* Declare playRound humanScore and computerScore */
    /* Play 5 rounds */
