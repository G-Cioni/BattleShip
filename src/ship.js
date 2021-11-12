export const shipFactory = (shipSize, direction, yCoord, xCoord) => {
  const id = Math.random();
  const isHit = [];
  for (let i = 0; i < shipSize; i += 1) {
    isHit.push('notHit');
  }

  const hit = (number) => {
    if (number >= 0 && number <= shipSize) isHit.splice(number, 1, 'hit');
  };

  const isSunk = () => !isHit.includes('notHit');

  return { direction, shipSize, isHit, yCoord, xCoord, id, hit, isSunk };
};

export default shipFactory;
