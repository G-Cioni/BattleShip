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
    let i = 0;
    while (gameBoard.grid[yRandom][xRandom] !== '' && i <= gridSize ** 2) {
      yRandom = Math.floor(Math.random() * gridSize);
      xRandom = Math.floor(Math.random() * gridSize);
      i += 1;
    }
    gameBoard.receiveAttack(yRandom, xRandom);
  };
  return { move };
};

export { playerFactory, cpuPlayerFactory };
