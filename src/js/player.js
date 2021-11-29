import getRandomCoordinates from './getRandomCoordinates';

const playerFactory = (name) => {
  let moveCount = 0;
  const move = (yCoord, xCoord, gameBoard) => {
    gameBoard.receiveAttack(yCoord, xCoord);
    moveCount += 1;
  };
  return { move, moveCount, name };
};

const cpuPlayerFactory = () => {
  let moveCount = 0;
  const move = (gameBoard, gridSize) => {
    const { yRandom, xRandom } = getRandomCoordinates(gameBoard, gridSize);
    gameBoard.receiveAttack(yRandom, xRandom);
    moveCount += 1;
  };
  return { move, moveCount };
};

export { playerFactory, cpuPlayerFactory };
