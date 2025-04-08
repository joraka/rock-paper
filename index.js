const buttons = document.getElementsByClassName("game-choice");
const logsDiv = document.getElementById("logs");
const yourScoreDiv = document.getElementById("your-score");
const computerScoreDiv = document.getElementById("computer-score");

const didWinAgainst = {
  rock: {
    paper: false,
    scissors: true,
  },
  paper: {
    rock: true,
    scissors: false,
  },
  scissors: {
    paper: true,
    rock: false,
  },
};

const choices = Object.keys(didWinAgainst);

let userScore = 0;
let computerScore = 0;
let playsCount = 0;

function playGame(btnClickEvent) {
  const playerChoice = btnClickEvent.target.dataset.choice;
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  logsDiv.innerText = `Play #${++playsCount}\n`;
  logsDiv.innerText += `You selected: ${playerChoice}\n`;
  logsDiv.innerText += `CPU selected: ${computerChoice}\n`;
  if (playerChoice === computerChoice) {
    logsDiv.innerHTML += `<span style="color: gray;">It's a draw</span>\n`;
  } else if (didWinAgainst[playerChoice][computerChoice]) {
    logsDiv.innerHTML += `<span style="color: green;">You wins</span>\n`;
    userScore++;
    yourScoreDiv.innerText = userScore;
  } else {
    logsDiv.innerHTML += `<span style="color: red;">Computer wins</span>\n`;
    computerScore++;
    computerScoreDiv.innerText = computerScore;
  }
}

for (const btn of buttons) {
  btn.addEventListener("click", playGame);
}
