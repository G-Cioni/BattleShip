import getRandomCoordinates from './getRandomCoordinates';

const playerFactory = (name) => {
  const move = (yCoord, xCoord, gameBoard) => {
    gameBoard.receiveAttack(yCoord, xCoord);
  };
  return { move, name };
};

const cpuPlayerFactory = () => {
  const move = (gameBoard, gridSize) => {
    const { yRandom, xRandom } = getRandomCoordinates(gameBoard, gridSize);
    gameBoard.receiveAttack(yRandom, xRandom);
  };
  return { move };
};

export { playerFactory, cpuPlayerFactory };
