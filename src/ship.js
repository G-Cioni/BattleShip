export const shipFactory = (shipSize, direction, yCoord, xCoord) => {
  const id = Math.random();
  const coordinates = [];

  if (direction === 'vertical') {
    for (let i = 0; i < shipSize; i += 1) {
      coordinates.push({
        status: 'notHit',
        yCoord: yCoord + i,
        xCoord,
      });
    }
  }
  if (direction === 'horizontal') {
    for (let i = 0; i < shipSize; i += 1) {
      coordinates.push({
        status: 'notHit',
        yCoord,
        xCoord: xCoord + i,
      });
    }
  }

  const hit = (y, x) => {
    coordinates.forEach((coord) => {
      if (coord.xCoord === x && coord.yCoord === y) {
        // eslint-disable-next-line no-param-reassign
        coord.status = 'hit';
      }
    });
  };

  const isSunk = () =>
    coordinates.reduce((acc, cur) => {
      if (cur.status === 'notHit') {
        // eslint-disable-next-line no-param-reassign
        acc *= false;
      }
      return acc;
    }, true);

  return {
    direction,
    shipSize,
    yCoord,
    xCoord,
    id,
    coordinates,
    hit,
    isSunk,
  };
};

export default shipFactory;
