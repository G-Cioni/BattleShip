// Generates random coordinates for a cpu player move
const getRandomCoordinates = (gameBoard, gridSize) => {
  let yRandom = Math.floor(Math.random() * gridSize);
  let xRandom = Math.floor(Math.random() * gridSize);
  // Keeps generating random coordinates until they have been found and at least 1 tile is empty on the board
  while (
    gameBoard.grid[yRandom][xRandom] !== '' &&
    gameBoard.grid[yRandom][xRandom].status !== 'notHit'
  ) {
    // Counts how many empty tiles there are
    let emptyTilesCount = 0;
    gameBoard.grid.forEach((row) =>
      row.forEach((tile) => {
        if (tile === '' || tile.status === 'notHit') {
          emptyTilesCount += 1;
        }
      }),
    );

    // Makes sure that at least 1 empty tile is present
    if (emptyTilesCount !== 0) {
      yRandom = Math.floor(Math.random() * gridSize);
      xRandom = Math.floor(Math.random() * gridSize);
    } else {
      break;
    }
  }
  return { yRandom, xRandom };
};

// Selects between two random variables
const selectRandom = (variable1, variable2) =>
  Math.round(Math.random()) === 1 ? variable1 : variable2;

export { selectRandom, getRandomCoordinates };
