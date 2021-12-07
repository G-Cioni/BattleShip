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

// Renders gameBoard
const renderGameBoard = (
  gameBoard,
  player,
  opponentGameBoard,
  opponent,
  firstPlayer,
  gridSize,
) => {
  const gameBoardDiv =
    player.number === 'p1'
      ? document.getElementById('game-board-p1')
      : document.getElementById('game-board-p2');
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

        // todo must be able to generate correct gridSize by changing css variable
        // Render tiles on each gameBoard with an adequate timeout
        setTimeout(() => {
          renderTiles(gameBoard, player);
        }, 400);
        setTimeout(() => {
          renderTiles(opponentGameBoard, opponent);
        }, 800);

        //! Must implement winning logic
        if (gameBoard.checkAllSunk()) {
          alert('You Win');
        } else if (opponentGameBoard.checkAllSunk()) {
          alert('You Lose');
        }
      });
      gameBoardDiv.appendChild(tile);
    }
  }
};

export { renderTiles, renderNewShips, renderGameBoard };
