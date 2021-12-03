// Creates a new Ship object
export const shipFactory = (shipSize, direction, yCoord, xCoord) => {
  // Generates a unique id for each ship
  const id =
    Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2);

  // Creates an array with an object for each pair of coordinates the ship occupies along with its current status
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

  // Changes correct object status to "hit" inside coordinates array
  const hit = (y, x) => {
    coordinates.forEach((coord) => {
      if (coord.xCoord === x && coord.yCoord === y) {
        // eslint-disable-next-line no-param-reassign
        coord.status = 'hit';
      }
    });
  };

  // Checks if the ship has been sunk
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
