/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */

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

const renderGameBoard = (gameBoard, player) => {
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
        player.move(i, j, gameBoard);
        renderTiles(gameBoard, player);
        if (gameBoard.checkAllSunk()) {
          console.log('you win');
        }
      });
      gameBoardDiv.appendChild(tile);
    }
  }
};
export { renderTiles, renderNewShips, renderGameBoard };
