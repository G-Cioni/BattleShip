import { shipFactory } from './ship';

export const gameBoardFactory = (gridSize) => {
  const grid = [];
  for (let i = 0; i < gridSize; i += 1) {
    grid.push([]);
    for (let j = 0; j < gridSize; j += 1) {
      grid[i].push('');
    }
  }
  const placeShip = (shipSize, direction, xCoord, yCoord) => {
    const ship = shipFactory(shipSize, direction, xCoord, yCoord);
    if (ship.direction === 'horizontal') {
      for (let i = 0; i < shipSize; i += 1) {
        grid[yCoord][xCoord + i] = 'notHit';
      }
    }
  };

  return { grid, placeShip };
};

export default gameBoardFactory;
