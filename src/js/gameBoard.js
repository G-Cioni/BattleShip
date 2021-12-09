import { shipFactory } from './ship';
import { getRandomCoordinates } from './utils';

// Creates a gameBoard object
export const gameBoardFactory = (gridSize) => {
  const allShips = [];
  const grid = [];

  for (let i = 0; i < gridSize; i += 1) {
    grid.push([]);
    for (let j = 0; j < gridSize; j += 1) {
      grid[i].push('');
    }
  }

  // Places ship on the gameBoard
  const placeShip = (shipSize, direction, yCoord, xCoord) => {
    const ship = shipFactory(shipSize, direction, yCoord, xCoord);
    // todo change requiredTilesEmpty to requiredTilesAreEmpty
    let requiredTilesEmpty = true;

    // Places ship correctly if its direction is vertical
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

    // Places ship correctly if its direction is horizontal
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

  // Place ships randomly on gameBoard
  const placeShipRandomly = (shipSize) => {
    let shipPlaced = false;
    while (shipPlaced === false) {
      const { yRandom, xRandom } = getRandomCoordinates(
        grid,
        gridSize + 1 - shipSize,
      );
      const direction =
        Math.round(Math.random()) === 1 ? 'vertical' : 'horizontal';
      const placedShip = placeShip(shipSize, direction, yRandom, xRandom);
      // eslint-disable-next-line no-loop-func
      allShips.forEach((ship) => {
        if (ship.id === placedShip.id) {
          shipPlaced = true;
        }
      });
    }
  };

  // Remove all ships
  const removeShips = () => {
    for (let i = allShips.length; i >= 0; i -= 1) {
      allShips.pop();
    }
  };

  // Resets grid
  const resetGrid = () => {
    grid.forEach((row) => {
      row.forEach((_tile, index, array) => {
        array.splice(index, 1, '');
      });
    });
  };

  // Adds all of the ships to the gameBoard givin as an argument
  const populateGameBoard = (
    bigShipQty,
    mediumShipQty,
    smallShipQty,
    tinyShipQty,
  ) => {
    for (let i = 0; i < bigShipQty; i += 1) {
      placeShipRandomly(4);
    }
    for (let i = 0; i < mediumShipQty; i += 1) {
      placeShipRandomly(3);
    }
    for (let i = 0; i < smallShipQty; i += 1) {
      placeShipRandomly(2);
    }
    for (let i = 0; i < tinyShipQty; i += 1) {
      placeShipRandomly(1);
    }
  };

  // Receives an attack and returns whether it was successful or not as a boolean
  const receiveAttack = (yCoord, xCoord) => {
    let successfulAttack;
    if (grid[yCoord][xCoord] === '') {
      grid[yCoord][xCoord] = 'missed';
      successfulAttack = true;
    } else if (grid[yCoord][xCoord] === 'missed') {
      // todo must insert logic here
      successfulAttack = false;
    } else if (grid[yCoord][xCoord].status === 'notHit') {
      const { id } = grid[yCoord][xCoord];
      grid[yCoord][xCoord].status = 'hit';
      allShips.forEach((ship) => {
        if (ship.id === id) {
          ship.hit(yCoord, xCoord);
          successfulAttack = true;
        }
      });
    } else if (grid[yCoord][xCoord].status === 'hit') {
      successfulAttack = false;
    }
    return successfulAttack;
  };

  // Checks if all ships on the gameBoard have been sunk
  const checkAllSunk = () => {
    const bool = allShips.reduce((acc, ship) => {
      // eslint-disable-next-line no-param-reassign
      acc *= ship.isSunk();
      return acc;
    }, true);
    return !!bool;
  };

  return {
    grid,
    gridSize,
    allShips,
    placeShip,
    placeShipRandomly,
    removeShips,
    resetGrid,
    populateGameBoard,
    receiveAttack,
    checkAllSunk,
  };
};

export default gameBoardFactory;
