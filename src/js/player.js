import { getRandomCoordinates } from './utils';

// Creates human player
const playerFactory = (name, number) => {
  const moveCount = 0;
  const type = 'human';
  const move = (yCoord, xCoord, gameBoard) =>
    gameBoard.receiveAttack(yCoord, xCoord);

  return { move, moveCount, name, number, type };
};

// Creates cpu player
const cpuPlayerFactory = (name, number) => {
  const moveCount = 0;
  const type = 'cpu';
  const move = (gameBoard, gridSize) => {
    // If a tile next to a tile which has been hit is free then it is added to goodMoves array
    const goodMoves = [];
    for (let i = 0; i < gameBoard.grid.length; i += 1) {
      for (let j = 0; j < gameBoard.grid.length; j += 1) {
        if (gameBoard.grid[i][j].status === 'hit') {
          if (
            i > 0 &&
            (gameBoard.grid[i - 1][j] === '' ||
              gameBoard.grid[i - 1][j].status === 'notHit')
          ) {
            goodMoves.push([i - 1, j]);
          }
          if (
            i < gameBoard.grid.length - 1 &&
            (gameBoard.grid[i + 1][j] === '' ||
              gameBoard.grid[i + 1][j].status === 'notHit')
          ) {
            goodMoves.push([i + 1, j]);
          }
          if (
            j > 0 &&
            (gameBoard.grid[i][j - 1] === '' ||
              gameBoard.grid[i][j - 1].status === 'notHit')
          ) {
            goodMoves.push([i, j - 1]);
          }
          if (
            j < gameBoard.grid[i].length - 1 &&
            (gameBoard.grid[i][j + 1] === '' ||
              gameBoard.grid[i][j + 1].status === 'notHit')
          ) {
            goodMoves.push([i, j + 1]);
          }
        }
      }
    }
    // If available makes an attack with a goodMove
    if (goodMoves.length > 0) {
      const random = Math.floor(Math.random() * goodMoves.length);
      const [y, x] = goodMoves[random];
      gameBoard.receiveAttack(y, x);
    } else {
      const { yRandom, xRandom } = getRandomCoordinates(
        gameBoard.grid,
        gridSize,
      );
      gameBoard.receiveAttack(yRandom, xRandom);
    }
  };
  return { move, moveCount, name, number, type };
};

export { playerFactory, cpuPlayerFactory };
