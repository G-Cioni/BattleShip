/* eslint-disable no-unused-vars */
import { gameBoardFactory } from './gameBoard';
import { cpuPlayerFactory, playerFactory } from './player';
import getRandomCoordinates from './getRandomCoordinates';

const createPlayers = (p1Type, p2Type, p1Name, p2Name) => {
  const player1 =
    p1Type === 'human' ? playerFactory(p1Name, 'p1') : cpuPlayerFactory('p1');
  const player2 =
    p2Type === 'human' ? playerFactory(p2Name, 'p2') : cpuPlayerFactory('p2');

  return { player1, player2 };
};

const createGameBoards = (gridSize) => {
  const p1GameBoard = gameBoardFactory(gridSize);
  const p2GameBoard = gameBoardFactory(gridSize);
  return { p1GameBoard, p2GameBoard };
};

const placeShipRandomly = (gameBoard, gridSize, shipSize) => {
  let shipPlaced = false;

  while (shipPlaced === false || shipPlaced === undefined) {
    const { yRandom, xRandom } = getRandomCoordinates(
      gameBoard,
      gridSize + 1 - shipSize,
    );
    const direction =
      Math.round(Math.random()) === 1 ? 'vertical' : 'horizontal';
    const placedShip = gameBoard.placeShip(
      shipSize,
      direction,
      yRandom,
      xRandom,
    );

    // eslint-disable-next-line no-loop-func
    gameBoard.allShips.forEach((ship) => {
      if (ship.id === placedShip.id) {
        shipPlaced = true;
      }
    });
  }
};

const populateGameBoard = (
  gameBoard,
  gridSize,
  bigShipQty,
  mediumShipQty,
  smallShipQty,
  tinyShipQty,
) => {
  for (let i = 0; i < bigShipQty; i += 1) {
    placeShipRandomly(gameBoard, gridSize, 4);
  }
  for (let i = 0; i < mediumShipQty; i += 1) {
    placeShipRandomly(gameBoard, gridSize, 3);
  }
  for (let i = 0; i < smallShipQty; i += 1) {
    placeShipRandomly(gameBoard, gridSize, 2);
  }
  for (let i = 0; i < tinyShipQty; i += 1) {
    placeShipRandomly(gameBoard, gridSize, 1);
  }
};

const runGame = (
  p1Type,
  p2Type,
  p1Name,
  p2Name,
  gridSize,
  bigShipQty,
  mediumShipQty,
  smallShipQty,
  tinyShipQty,
) => {
  const { player1, player2 } = createPlayers(p1Type, p2Type, p1Name, p2Name);
  const { p1GameBoard, p2GameBoard } = createGameBoards(gridSize);
  populateGameBoard(
    p1GameBoard,
    gridSize,
    bigShipQty,
    mediumShipQty,
    smallShipQty,
    tinyShipQty,
  );
  populateGameBoard(
    p2GameBoard,
    gridSize,
    bigShipQty,
    mediumShipQty,
    smallShipQty,
    tinyShipQty,
  );
  return { p1GameBoard, p2GameBoard, player1, player2 };
};

export { createPlayers, createGameBoards, populateGameBoard, runGame };
