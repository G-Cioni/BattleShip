/* eslint-disable no-unused-vars */
import { gameBoardFactory } from './gameBoard';
import { cpuPlayerFactory, playerFactory } from './player';
import { selectRandom } from './utils';

// Creates both players as human or cpu
const createPlayers = (p1Type, p2Type, p1Name, p2Name) => {
  const player1 =
    p1Type === 'human'
      ? playerFactory(p1Name, 'p1')
      : cpuPlayerFactory(p1Name, 'p1');
  const player2 =
    p2Type === 'human'
      ? playerFactory(p2Name, 'p2')
      : cpuPlayerFactory(p2Name, 'p2');

  return { player1, player2 };
};

// Creates both gameBoards
const createGameBoards = (gridSize) => {
  const p1GameBoard = gameBoardFactory(gridSize);
  const p2GameBoard = gameBoardFactory(gridSize);
  return { p1GameBoard, p2GameBoard };
};

// Starts the game
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
  const firstPlayer = selectRandom(p1Name, p2Name);

  p1GameBoard.populateGameBoard(
    bigShipQty,
    mediumShipQty,
    smallShipQty,
    tinyShipQty,
  );
  p2GameBoard.populateGameBoard(
    bigShipQty,
    mediumShipQty,
    smallShipQty,
    tinyShipQty,
  );
  return { p1GameBoard, p2GameBoard, player1, player2, firstPlayer };
};

export { createPlayers, createGameBoards, runGame };
