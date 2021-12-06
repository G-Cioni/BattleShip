const move = (
  gameBoard,
  player,
  opponentGameBoard,
  opponent,
  gridSize,
  xCoord,
  yCoord,
) => {
  //! moveCount doesn't increase for some reason
  //! maybe because player is locked to the gameBoard when created with 0 moveCount and its not referenced properly (might have to do with "this" although it shouldn't because I'm not working with classes)

  if (
    gameBoard.grid[xCoord][yCoord] === '' ||
    gameBoard.grid[xCoord][yCoord].status === 'notHit'
  ) {
    if (opponent.type === 'human' && opponent.moveCount <= player.moveCount) {
      opponent.move(xCoord, yCoord, gameBoard);
    }
    if (player.type === 'cpu') {
      player.move(opponentGameBoard, gridSize);
    }
  }
};

const gameLoop = () => {};

export { move, gameLoop };
