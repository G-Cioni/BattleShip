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
    const { yRandom, xRandom } = getRandomCoordinates(gameBoard, gridSize);
    gameBoard.receiveAttack(yRandom, xRandom);
  };
  return { move, moveCount, name, number, type };
};

export { playerFactory, cpuPlayerFactory };
