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
    let requiredTilesEmpty = true;
    if (ship.direction === 'vertical' && yCoord + shipSize <= gridSize) {
      for (let i = 0; i < shipSize; i += 1) {
        requiredTilesEmpty *= grid[yCoord + i][xCoord] === '';
      }
      if (requiredTilesEmpty) {
        for (let i = 0; i < shipSize; i += 1) {
          grid[yCoord + i][xCoord] = {
            status: 'notHit',
            id: ship.id,
          };
        }
        allShips.push(ship);
      }
    }
    if (ship.direction === 'horizontal' && xCoord + shipSize <= gridSize) {
      for (let i = 0; i < shipSize; i += 1) {
        requiredTilesEmpty *= grid[yCoord][xCoord + i] === '';
      }
      if (requiredTilesEmpty) {
        for (let i = 0; i < shipSize; i += 1) {
          grid[yCoord][xCoord + i] = {
            status: 'notHit',
            id: ship.id,
          };
        }
        allShips.push(ship);
      }
    }
    return ship;
  };

  const receiveAttack = (yCoord, xCoord) => {
    if (grid[yCoord][xCoord] === '') {
      grid[yCoord][xCoord] = 'missed';
    } else if (grid[yCoord][xCoord] === 'missed') {
      // todo must insert logic here
    } else {
      const { id } = grid[yCoord][xCoord];
      grid[yCoord][xCoord].status = 'hit';
      allShips.forEach((ship) => {
        if (ship.id === id) {
          ship.hit(yCoord, xCoord);
        }
      });
    }
  };

  const checkAllSunk = () => {
    const bool = allShips.reduce((acc, ship) => {
      // eslint-disable-next-line no-param-reassign
      acc *= ship.isSunk();
      return acc;
    }, true);
    return !!bool;
  };

  return { grid, gridSize, allShips, placeShip, receiveAttack, checkAllSunk };
};

export default gameBoardFactory;
