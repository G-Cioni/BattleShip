const playerFactory = () => {
  const move = (yCoord, xCoord, gameBoard) => {
    gameBoard.receiveAttack(yCoord, xCoord);
  };
  return { move };
};

const cpuPlayerFactory = () => {
  const move = (gameBoard, gridSize) => {
    let yRandom = Math.floor(Math.random() * gridSize);
    let xRandom = Math.floor(Math.random() * gridSize);
    while (gameBoard.grid[yRandom][xRandom] !== '') {
      yRandom = Math.floor(Math.random() * gridSize);
      xRandom = Math.floor(Math.random() * gridSize);
    }
    gameBoard.receiveAttack(yRandom, xRandom);
  };
  return { move };
};

export { playerFactory, cpuPlayerFactory };
