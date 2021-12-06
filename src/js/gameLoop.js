const move = (
  gameBoard,
  player,
  opponentGameBoard,
  opponent,
  gridSize,
  yCoord,
  xCoord,
) => {
  if (
    gameBoard.grid[yCoord][xCoord] === '' ||
    gameBoard.grid[yCoord][xCoord].status === 'notHit'
  ) {
    if (opponent.type === 'human' && opponent.moveCount <= player.moveCount) {
      opponent.move(yCoord, xCoord, gameBoard);
      // eslint-disable-next-line no-param-reassign
      opponent.moveCount += 1;
    }
    if (player.type === 'cpu' && player.moveCount <= opponent.moveCount) {
      player.move(opponentGameBoard, gridSize);
      // eslint-disable-next-line no-param-reassign
      player.moveCount += 1;
    }
  }
};

const gameLoop = () => {};

export { move, gameLoop };
