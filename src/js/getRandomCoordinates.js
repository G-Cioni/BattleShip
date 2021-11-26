const getRandomCoordinates = (gameBoard, gridSize) => {
  let yRandom = Math.floor(Math.random() * gridSize);
  let xRandom = Math.floor(Math.random() * gridSize);
  while (gameBoard.grid[yRandom][xRandom] !== '') {
    let emptyTilesCount = 0;
    gameBoard.grid.forEach((row) =>
      row.forEach((tile) => {
        if (tile === '') {
          emptyTilesCount += 1;
        }
      }),
    );
    if (emptyTilesCount !== 0) {
      yRandom = Math.floor(Math.random() * gridSize);
      xRandom = Math.floor(Math.random() * gridSize);
    } else {
      break;
    }
  }
  return { yRandom, xRandom };
};

export default getRandomCoordinates;
