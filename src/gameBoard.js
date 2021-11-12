import { shipFactory } from './ship';

export const gameBoardFactory = (gridSize) => {
  const grid = [];
  for (let i = 0; i < gridSize; i += 1) {
    grid.push([]);
    for (let j = 0; j < gridSize; j += 1) {
      grid[i].push('');
    }
  }
  const placeShip = (shipSize, direction, yCoord, xCoord) => {
    const ship = shipFactory(shipSize, direction, yCoord, xCoord);
    let allSlotsFree = true;
    if (ship.direction === 'vertical' && yCoord + shipSize <= gridSize) {
      for (let i = 0; i < shipSize; i += 1) {
        allSlotsFree *= grid[yCoord + i][xCoord] === '';
      }
      if (allSlotsFree) {
        for (let i = 0; i < shipSize; i += 1) {
          grid[yCoord + i][xCoord] = {
            status: 'notHit',
            id: ship.id,
            yCoord: yCoord + i,
            xCoord,
          };
        }
      }
    }
    if (ship.direction === 'horizontal' && xCoord + shipSize <= gridSize) {
      for (let i = 0; i < shipSize; i += 1) {
        allSlotsFree *= grid[yCoord][xCoord + i] === '';
      }
      if (allSlotsFree) {
        for (let i = 0; i < shipSize; i += 1) {
          grid[yCoord][xCoord + i] = {
            status: 'notHit',
            id: ship.id,
            yCoord,
            xCoord: xCoord + i,
          };
        }
      }
    }
  };

  return { grid, placeShip };
};

export default gameBoardFactory;
