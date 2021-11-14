export const playerFactory = () => {
  const move = (yCoord, xCoord, gameBoard) => {
    gameBoard.receiveAttack(yCoord, xCoord);
  };
  return { move };
};

export default { playerFactory };
