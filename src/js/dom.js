/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import move from './move';

// Renders new Ships
const renderNewShips = (gameBoard, player) => {
  const { grid } = gameBoard;
  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[i].length; j += 1) {
      const tile = document.getElementById(`${player.number},${i},${j}`);
      if (grid[i][j].status === 'notHit') {
        tile.classList.add('ship-not-hit');
      }
    }
  }
};

// Renders all tiles expect for new ships
const renderTiles = (gameBoard, player) => {
  const { grid } = gameBoard;
  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[i].length; j += 1) {
      const tile = document.getElementById(`${player.number},${i},${j}`);
      if (grid[i][j].status === 'hit') {
        tile.classList.add('ship-hit');
      } else if (grid[i][j] === 'missed') {
        tile.classList.add('missed');
      }
    }
  }
};

// Removes all classes expect for "tile" from tiles
const resetTiles = (gameBoard, player) => {
  const { grid } = gameBoard;
  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[i].length; j += 1) {
      const tile = document.getElementById(`${player.number},${i},${j}`);
      tile.classList.remove('missed');
      tile.classList.remove('ship-not-hit');
      tile.classList.remove('ship-hit');
    }
  }
};

// Resets gameBoard
const resetGameBoard = (gameBoard, player) => {
  gameBoard.resetGrid();
  gameBoard.removeShips();
  gameBoard.populateGameBoard(1, 2, 3, 4);
  resetTiles(gameBoard, player);
  renderTiles(gameBoard, player);
  if (player.type === 'human') renderNewShips(gameBoard, player);
};

// Renders gameBoard
const renderGameBoard = (
  gameBoard,
  player,
  opponentGameBoard,
  opponent,
  firstPlayer,
  gridSize,
) => {
  // Sets grid size css variable to gridSize
  const root = document.documentElement;
  root.style.setProperty('--grid-size', gridSize);

  const gameBoardDiv =
    player.number === 'p1'
      ? document.getElementById('game-board-p1')
      : document.getElementById('game-board-p2');

  const resetGameBtn = document.getElementById('reset');
  resetGameBtn.addEventListener('click', () => {
    resetGameBoard(gameBoard, player);
  });

  for (let i = 0; i < gameBoard.grid.length; i += 1) {
    for (let j = 0; j < gameBoard.grid[i].length; j += 1) {
      const tile = document.createElement('div');
      // sets id equal to tile coordinates
      if (player.number === 'p1') {
        tile.setAttribute('id', `p1,${i},${j}`);
      } else {
        tile.setAttribute('id', `p2,${i},${j}`);
      }

      tile.classList.add('empty-tile');
      tile.addEventListener('click', () => {
        if (!(gameBoard.checkAllSunk() || opponentGameBoard.checkAllSunk())) {
          // Triggers move function which makes a move and if opponent is a cpu opponent moves as well
          move(
            gameBoard,
            player,
            opponentGameBoard,
            opponent,
            firstPlayer,
            gridSize,
            i,
            j,
          );

          // Render tiles on each gameBoard with an adequate timeout
          renderTiles(gameBoard, player);
          setTimeout(() => {
            renderTiles(opponentGameBoard, opponent);
          }, 800);
          //! Must implement winning logic
          if (gameBoard.checkAllSunk()) {
            alert('You Win');
          } else if (opponentGameBoard.checkAllSunk()) {
            alert('You Lose');
          }
        }
      });
      gameBoardDiv.appendChild(tile);
    }
  }
};

export { renderTiles, renderNewShips, renderGameBoard };
