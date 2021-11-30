/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
const renderGameBoard = (gameBoard, player) => {
  const gameBoardDiv =
    player === 'player 1'
      ? document.getElementById('game-board-p1')
      : document.getElementById('game-board-p2');
  for (let i = 0; i < gameBoard.grid.length; i += 1) {
    for (let j = 0; j < gameBoard.grid[i].length; j += 1) {
      const tile = document.createElement('div');
      // sets id equal to tile coordinates
      if (player === 'player 1') {
        tile.setAttribute('id', `p1,${i},${j}`);
      } else {
        tile.setAttribute('id', `p2,${i},${j}`);
      }

      tile.classList.add('empty-tile');
      gameBoardDiv.appendChild(tile);
    }
  }
};

export default renderGameBoard;
