function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        const ranChoice = Math.floor(Math.random() * 3);
        return choices[ranChoice];
    }

    function getHumanChoice() {
        const choices = ["rock", "paper", "scissors"];
        let choice; 

        while (true) {
            choice = prompt("Enter: rock, paper or scissors").toLowerCase();
        
            if (choices.includes(choice)) {
            return choice;
            }
            alert("Invalid input! Enter: rock, paper or scissors");
        }
    }

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
            return;
        }
        if ((humanChoice ==='rock' && computerChoice === 'scissors') ||
            (humanChoice === 'scissors' && computerChoice === 'paper') ||
            (humanChoice === 'paper' && computerChoice === 'rock')) {
                humanScore++;
                console.log("You win! " + humanChoice + " beats " + computerChoice);
            }
        else {
            computerScore++;
            console.log("You lose! " + computerChoice + " beats " + humanChoice);
        }
    }
    for (let i = 0; i < 5; i++) {

    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();

    console.log("Computer chose: " + computerChoice);
    console.log("You chose: " + humanChoice);
    playRound(humanChoice, computerChoice);
    console.log("Your Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
    }
}

playGame();