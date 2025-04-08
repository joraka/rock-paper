const logsElement = document.getElementById("logs");
const yourScoreElement = document.getElementById("your-score");
const computerScoreElement = document.getElementById("computer-score");

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
  logsElement.innerText = `Play #${++playsCount}\n`;
  logsElement.innerText += `You selected: ${playerChoice}\n`;
  logsElement.innerText += `CPU selected: ${computerChoice}\n`;
  if (playerChoice === computerChoice) {
    logsElement.innerHTML += `<span style="color: gray;">It's a draw</span>\n`;
  } else if (didWinAgainst[playerChoice][computerChoice]) {
    logsElement.innerHTML += `<span style="color: green;">You wins</span>\n`;
    userScore++;
    yourScoreElement.innerText = userScore;
  } else {
    logsElement.innerHTML += `<span style="color: red;">Computer wins</span>\n`;
    computerScore++;
    computerScoreElement.innerText = computerScore;
  }
}

for (const btn of document.getElementsByClassName("game-choice")) {
  btn.addEventListener("click", playGame);
}
