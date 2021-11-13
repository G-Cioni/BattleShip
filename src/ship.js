export const shipFactory = (shipSize, direction, yCoord, xCoord) => {
  const id = Math.random();
  const isHit = [];
  const coordinates = [];
  for (let i = 0; i < shipSize; i += 1) {
    isHit.push('notHit');
  }
  if (direction === 'vertical') {
    for (let i = 0; i < shipSize; i += 1) {
      coordinates.push({
        yCoord: yCoord + i,
        xCoord,
      });
    }
  }
  if (direction === 'horizontal') {
    for (let i = 0; i < shipSize; i += 1) {
      coordinates.push({
        yCoord,
        xCoord: xCoord + i,
      });
    }
  }

  const hit = (number) => {
    if (number >= 0 && number <= shipSize) isHit.splice(number, 1, 'hit');
  };

  const isSunk = () => !isHit.includes('notHit');

  return {
    direction,
    shipSize,
    isHit,
    yCoord,
    xCoord,
    id,
    coordinates,
    hit,
    isSunk,
  };
};

export default shipFactory;
