const playerFactory = () => {
  const move = (yCoord, xCoord, gameBoard) => {
    gameBoard.receiveAttack(yCoord, xCoord);
  };
  return { move };
};

const cpuPlayerFactory = () => {
  const move = (gameBoard, gridSize) => {
    const yRandom = Math.floor(Math.random() * gridSize);
    const xRandom = Math.floor(Math.random() * gridSize);
    gameBoard.receiveAttack(yRandom, xRandom);
  };
  return { move };
};

export { playerFactory, cpuPlayerFactory };
