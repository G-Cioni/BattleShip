import { shipFactory } from './ship';

export const gameBoardFactory = (gridSize) => {
  const allShips = [];
  const grid = [];
  for (let i = 0; i < gridSize; i += 1) {
    grid.push([]);
    for (let j = 0; j < gridSize; j += 1) {
      grid[i].push('');
    }
  }
  const placeShip = (shipSize, direction, yCoord, xCoord) => {
    const ship = shipFactory(shipSize, direction, yCoord, xCoord);
    allShips.push(ship);
    let allTiles = true;
    if (ship.direction === 'vertical' && yCoord + shipSize <= gridSize) {
      for (let i = 0; i < shipSize; i += 1) {
        allTiles *= grid[yCoord + i][xCoord] === '';
      }
      if (allTiles) {
        for (let i = 0; i < shipSize; i += 1) {
          grid[yCoord + i][xCoord] = {
            status: 'notHit',
            id: ship.id,
          };
        }
      }
    }
    if (ship.direction === 'horizontal' && xCoord + shipSize <= gridSize) {
      for (let i = 0; i < shipSize; i += 1) {
        allTiles *= grid[yCoord][xCoord + i] === '';
      }
      if (allTiles) {
        for (let i = 0; i < shipSize; i += 1) {
          grid[yCoord][xCoord + i] = {
            status: 'notHit',
            id: ship.id,
          };
        }
      }
    }
  };

  return { grid, placeShip };
};

export default gameBoardFactory;
