import gameBoardFactory from '../js/gameBoard';
import {
  createPlayers,
  createGameBoards,
  populateGameBoard,
  runGame,
} from '../js/runGame';

test('createPlayers returns 2 player objects', () => {
  const { player1, player2 } = createPlayers(
    'human',
    'cpu',
    'Player 1',
    'Player 2',
  );
  expect(!!player1).toBe(true);
  expect(!!player2).toBe(true);
});

test('createPlayers returns human and cpu players correctly', () => {
  const { player1, player2 } = createPlayers('human', 'cpu', '', 'Player 2');

  // only human players have a name value
  expect(player1.name).toBe('');
  expect(!!player2.name).toBe(false);
});

test('createGameBoards returns 2 gameBoard objects', () => {
  const { p1GameBoard, p2GameBoard } = createGameBoards(10);
  expect(!!p1GameBoard).toBe(true);
  expect(!!p2GameBoard).toBe(true);
});

test('createGameBoards returns 2 gameBoard objects with correct gridSize', () => {
  const { p1GameBoard, p2GameBoard } = createGameBoards(10);
  expect(!!p1GameBoard.grid[9]).toBe(true);
  expect(!!p2GameBoard.grid[10]).toBe(false);
});

test('populateGameBoard places all ships correctly', () => {
  const p1GameBoard = gameBoardFactory(10);
  populateGameBoard(p1GameBoard, 10, 1, 2, 3, 4);
  const totalTilesOccupied = p1GameBoard.grid.reduce((acc, cur) => {
    cur.forEach((tile) => {
      if (tile !== '') acc += 1;
    });

    return acc;
  }, 0);
  expect(totalTilesOccupied).toBe(20);
});
