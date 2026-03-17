const choices = ["rock", "paper", "scissors"]
const playerDisplay = document.getElementById("playerDisplay")
const computerDisplay = document.getElementById("computerDisplay")
const resultDisplay = document.getElementById("resultDisplay")

function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random()*3)];
    let result = ""

    if (playerChoice === computerChoice){
        result = "IT'S A TIE!"
    
    }else if (playerChoice + computerChoice === "rockscissors" ||
    playerChoice + computerChoice === "paperrock" ||
    playerChoice + computerChoice === "scissorspaper") {
    
    result = "You win!";
} else {
    result = "You lose!";
}

playerDisplay.textContent = `PLAYER ${playerChoice}`;
computerDisplay.textContent = `Computer ${computerChoice}`;
resultDisplay.textContent = result;

    }
