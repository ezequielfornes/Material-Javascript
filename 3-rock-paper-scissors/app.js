const playerChoiceElement = document.getElementById("playerChoice");
const computerChoiceElement = document.getElementById("computerChoice");

const resultElement = document.getElementById("result");

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => button.addEventListener("click", startGame));

scorePlayer =0;
scoreComputer =0;


function startGame(event) {
  // Obtener elección del jugador
  const button = event.currentTarget;
  const playerChoice = button.dataset.choice;

  // Obtener elección de la computadora
  const computerChoice = getComputerChoice();

  // Calcular ganador
  //const playerWins = isPlayerWinner(playerChoice, computerChoice);
  const winner = setWinner(playerChoice, computerChoice);

  // Mostrar resultado
  playerChoiceElement.setAttribute("src", `imgs/${playerChoice}.png`);
  computerChoiceElement.setAttribute("src", `imgs/${computerChoice}.png`);

  // const result = playerWins ? "GANASTE" : "PERDISTE";

  //   if (playerWins === true) {
  //     result.textContent = "GANASTE";
  //   } else if (!playerWins) {
  //     result.textContent = "PERDISTE";
  //   } else if (playerWins === "draw") {
  //     result.textContent = "EMPATASTE";
  //   }

  resultElement.textContent = winner;
}

const possibleChoices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  // Obtener un valor aleatorio
  const computerChoice = Math.floor(Math.random() * 3);

  // Retornar elección
  return possibleChoices[computerChoice];
}

// Antes: isPlayerWinner
function setWinner(playerChoice, computerChoice) {
  console.log("playerChoice", playerChoice);
  console.log("computerChoice", computerChoice);
  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    winnerOnes();
  } else if (playerChoice === computerChoice) {
    return drawsOnes();
  } else {
    return loserOnes();
  }
}

function winnerOnes(){
  scorePlayer++;
  searchWinner();
  return "Ganaste con "+playerChoice+" contra "+ computerChoice;

}

function loserOnes(){
  scoreComputer++;
  searchWinner();
  return "Perdiste con "+playerChoice+" contra "+ computerChoice;
}

function drawsOnes(){
  return "Empataste con "+playerChoice+" contra "+ computerChoice;
  
}

function searchWinner(){
  if(scorePlayer===3){
    return "Player \n *******Gana la partida*******"
  }if(scoreComputer===3){
    return "Computer \n *******Gana la partida*******"
  }
  counter= scorePlayer+"-"+scoreComputer;
  return counter;
}

