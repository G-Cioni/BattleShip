export const shipFactory = (shipSize, direction, xCoord, yCoord) => {
  const isHit = [];
  for (let i = 0; i < shipSize; i += 1) {
    isHit.push(false);
  }

  const hit = (number) => {
    if (number >= 0 && number <= shipSize) isHit.splice(number, 1, true);
  };

  const isSunk = () => !isHit.includes(false);

  return { direction, shipSize, isHit, xCoord, yCoord, hit, isSunk };
};

export default shipFactory;
