
const resetButton = document.getElementById('reset-button');
const cells = document.querySelectorAll('td');
let currentPlayer = 'X';
let moves = 0;
let gameEnded = false;

function handleCellClick() {
  if (!gameEnded && this.textContent === '') {
    this.textContent = currentPlayer;
    moves++;
    checkForWinner();
    togglePlayer();
  }
}

function checkForWinner() {
  if (checkRows() || checkColumns() || checkDiagonals()) {
    gameEnded = true;
    alert(`${currentPlayer} wins!`);
  } else if (moves === 9) {
    gameEnded = true;
    alert('Draw!');
  }
}

function checkRows() {
  for (let i = 0; i < 9; i += 3) {
    if (cells[i].textContent !== '' && cells[i].textContent === cells[i+1].textContent && cells[i].textContent === cells[i+2].textContent) {
      return true;
    }
  }
  return false;
}

function checkColumns() {
  for (let i = 0; i < 3; i++) {
    if (cells[i].textContent !== '' && cells[i].textContent === cells[i+3].textContent && cells[i].textContent === cells[i+6].textContent) {
      return true;
    }
  }
  return false;
}

function checkDiagonals() {
  if (cells[0].textContent !== '' && cells[0].textContent === cells[4].textContent && cells[0].textContent === cells[8].textContent) {
    return true;
  }
  if (cells[2].textContent !== '' && cells[2].textContent === cells[4].textContent && cells[2].textContent === cells[6].textContent) {
    return true;
  }
  return false;
}

function togglePlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));



resetButton.addEventListener('click', () => {
// clear the game board
cells.forEach((cell) => {
cell.textContent = '';
});

// reset game state variables
currentPlayer = 'X';
gameActive = true;
gameState = ['', '', '', '', '', '', '', '', ''];
});
