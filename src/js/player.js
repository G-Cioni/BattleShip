import getRandomCoordinates from './utils';

// Creates human player
const playerFactory = (name, number) => {
  let moveCount = 0;
  const type = 'human';
  const move = (yCoord, xCoord, gameBoard) => {
    const successfulAttack = gameBoard.receiveAttack(yCoord, xCoord);
    if (successfulAttack) {
      moveCount += 1;
    }
  };
  return { move, moveCount, name, number, type };
};

// Creates cpu player
const cpuPlayerFactory = (player) => {
  let moveCount = 0;
  const type = 'cpu';
  const move = (gameBoard, gridSize) => {
    const { yRandom, xRandom } = getRandomCoordinates(gameBoard, gridSize);
    gameBoard.receiveAttack(yRandom, xRandom);
    moveCount += 1;
  };
  return { move, moveCount, player, type };
};

export { playerFactory, cpuPlayerFactory };
