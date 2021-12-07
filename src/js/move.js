// Functions which is executed to deal with move logic
const move = (
  gameBoard,
  player,
  opponentGameBoard,
  opponent,
  firstPlayer,
  gridSize,
  yCoord,
  xCoord,
) => {
  // Checks if selected tile hasn't yet been hit
  if (yCoord !== undefined && xCoord !== undefined) {
    if (
      gameBoard.grid[yCoord][xCoord] === '' ||
      gameBoard.grid[yCoord][xCoord].status === 'notHit'
    ) {
      // If the opponent is human then it the human player makes a move
      if (opponent.type === 'human') {
        if (
          (opponent.name === firstPlayer &&
            opponent.moveCount === player.moveCount) ||
          (opponent.name !== firstPlayer &&
            opponent.moveCount < player.moveCount)
        ) {
          opponent.move(yCoord, xCoord, gameBoard);
          // eslint-disable-next-line no-param-reassign
          opponent.moveCount += 1;
        }
      }
    }
  }
  // The checks the owner of the gameBoard is cpu. If so cpu player makes a move
  if (player.type === 'cpu' && player.moveCount <= opponent.moveCount) {
    player.move(opponentGameBoard, gridSize);
    // eslint-disable-next-line no-param-reassign
    player.moveCount += 1;
  }
};

export default move;
