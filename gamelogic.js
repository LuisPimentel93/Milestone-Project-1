const cells = Array.from(document.querySelectorAll(".cell"));
const statusText = document.getElementById("statusText");
const roundCount = document.getElementById("roundCount");
const avaScoreEl = document.getElementById("avaScore");
const araScoreEl = document.getElementById("araScore");
const avaCard = document.getElementById("avaCard");
const araCard = document.getElementById("araCard");
const nextRoundButton = document.getElementById("nextRoundButton");
const resetMatchButton = document.getElementById("resetMatchButton");
const musicButton = document.getElementById("musicButton");
const themeAudio = document.getElementById("themeAudio");

const players = {
  A: { name: "Ava", className: "ava-mark" },
  R: { name: "Araceli", className: "ara-mark" }
};

const winningCombos = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

let board = Array(9).fill(null);
let currentPlayer = "A";
let round = 1;
let scores = { A: 0, R: 0 };
let roundOver = false;

function updatePlayerState() {
  const player = players[currentPlayer];
  statusText.textContent = roundOver ? statusText.textContent : `${player.name}'s turn`;
  avaCard.classList.toggle("active", currentPlayer === "A" && !roundOver);
  araCard.classList.toggle("active", currentPlayer === "R" && !roundOver);
}

function getWinner() {
  for (const combo of winningCombos) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { player: board[a], combo };
    }
  }
  return null;
}

function finishRound() {
  const winner = getWinner();

  if (winner) {
    roundOver = true;
    scores[winner.player] += 1;
    winner.combo.forEach(index => cells[index].classList.add("winner"));
    statusText.textContent = `${players[winner.player].name} wins! 🎉`;
  } else if (board.every(Boolean)) {
    roundOver = true;
    statusText.textContent = "It's a draw — rematch!";
  }

  if (roundOver) {
    cells.forEach(cell => { cell.disabled = true; });
    avaScoreEl.textContent = scores.A;
    araScoreEl.textContent = scores.R;
    avaCard.classList.remove("active");
    araCard.classList.remove("active");
  }
}

function handleCellClick(event) {
  const cell = event.currentTarget;
  const index = Number(cell.dataset.index);

  if (roundOver || board[index]) return;

  board[index] = currentPlayer;
  cell.textContent = currentPlayer;
  cell.classList.add(players[currentPlayer].className);
  cell.setAttribute("aria-label", `${cell.getAttribute("aria-label")}: ${players[currentPlayer].name}`);

  finishRound();

  if (!roundOver) {
    currentPlayer = currentPlayer === "A" ? "R" : "A";
    updatePlayerState();
  }
}

function startNewRound() {
  board = Array(9).fill(null);
  roundOver = false;
  round += 1;
  currentPlayer = round % 2 === 1 ? "A" : "R";

  cells.forEach((cell, index) => {
    cell.textContent = "";
    cell.disabled = false;
    cell.className = "cell";
    const labels = [
      "Top left", "Top middle", "Top right",
      "Middle left", "Center", "Middle right",
      "Bottom left", "Bottom middle", "Bottom right"
    ];
    cell.setAttribute("aria-label", labels[index]);
  });

  roundCount.textContent = `Round ${round}`;
  updatePlayerState();
}

function resetMatch() {
  scores = { A: 0, R: 0 };
  round = 0;
  avaScoreEl.textContent = "0";
  araScoreEl.textContent = "0";
  startNewRound();
}

async function toggleMusic() {
  if (themeAudio.paused) {
    try {
      await themeAudio.play();
      musicButton.textContent = "❚❚ Pause theme music";
      musicButton.setAttribute("aria-pressed", "true");
    } catch {
      musicButton.textContent = "♪ Play theme music";
    }
  } else {
    themeAudio.pause();
    musicButton.textContent = "♪ Play theme music";
    musicButton.setAttribute("aria-pressed", "false");
  }
}

cells.forEach(cell => cell.addEventListener("click", handleCellClick));
nextRoundButton.addEventListener("click", startNewRound);
resetMatchButton.addEventListener("click", resetMatch);
musicButton.addEventListener("click", toggleMusic);

roundCount.textContent = `Round ${round}`;
updatePlayerState();
