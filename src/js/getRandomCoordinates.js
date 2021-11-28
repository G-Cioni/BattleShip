const getRandomCoordinates = (gameBoard, gridSize) => {
  let yRandom = Math.floor(Math.random() * gridSize);
  let xRandom = Math.floor(Math.random() * gridSize);
  while (
    gameBoard.grid[yRandom][xRandom] !== '' &&
    gameBoard.grid[yRandom][xRandom].status !== 'notHit'
  ) {
    let emptyTilesCount = 0;
    gameBoard.grid.forEach((row) =>
      row.forEach((tile) => {
        if (tile === '' || tile.status === 'notHit') {
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
