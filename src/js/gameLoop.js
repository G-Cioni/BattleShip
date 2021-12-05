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
  if (opponent.type === 'human' && opponent.moveCount <= player.moveCount) {
    opponent.move(xCoord, yCoord, gameBoard);
  }
  if (player.type === 'cpu') {
    player.move(opponentGameBoard, gridSize);
  }
};

const moveIfPossible = (
  gameBoard,
  player,
  opponentGameBoard,
  opponent,
  gridSize,
  i,
  j,
) => {
  if (gameBoard.grid[i][j] === '' || gameBoard.grid[i][j].status === 'notHit') {
    move(gameBoard, player, opponentGameBoard, opponent, gridSize, i, j);
  }
};

const gameLoop = () => {};

export { move, moveIfPossible, gameLoop };
