const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultShow = document.getElementById("resultDisplay");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
let pScore= 0;
let cScore = 0;

function playgame(playerChoice){
    const computerChoice = choices[Math.trunc(Math.random()*3)];
     let result = "";

     if(playerChoice === computerChoice){
        result="It's a Tie!!";
     }
     else{
        switch(playerChoice){
            case "rock":
               result= (computerChoice==="scissors")? "You win!":"You lose!";
                break;
            case "scissors":
               result= (computerChoice==="paper")? "You win!": "You lose!";
                break;
            
            case "paper":
               result= (computerChoice==="rock")? "You win!": "You lose!";
                break;
        }
     }
     playerDisplay.textContent =`PLAYER: ${playerChoice}`;
     computerDisplay.textContent=`COMPUTER: ${computerChoice}`;
     resultShow.textContent=result;
     resultShow.classList.remove("greenText", "redText");
     switch(result){
        case "You win!":
            resultShow.classList.add("greenText");
            pScore++;
            playerScore.textContent = `Player Score: ${pScore}`;

            break;
        case "You lose!":
            resultShow.classList.add("redText");
            cScore++;
            computerScore.textContent = `Computer Score: ${cScore}`;
            break;
     }
}