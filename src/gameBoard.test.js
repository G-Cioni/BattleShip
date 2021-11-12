import { gameBoardFactory } from './gameBoard';

test('GameBoardFactory generates correct grid size', () => {
  const gameBoard = gameBoardFactory(10);
  expect(gameBoard.grid).toEqual([
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
  ]);
});

test('gameBoard.placeShip places ships correctly', () => {
  const gameBoard = gameBoardFactory(10);
  gameBoard.placeShip(3, 'horizontal', 4, 3);
  gameBoard.placeShip(3, 'vertical', 4, 1);
  expect(gameBoard.grid[4][3].status).toBe('notHit');
  expect(gameBoard.grid[4][4].status).toBe('notHit');
  expect(gameBoard.grid[4][5].status).toBe('notHit');
  expect(gameBoard.grid[4][1].status).toBe('notHit');
  expect(gameBoard.grid[5][1].status).toBe('notHit');
  expect(gameBoard.grid[6][1].status).toBe('notHit');
});

test("gameBoard.placeShip doesn't place ship out of range", () => {
  const gameBoard = gameBoardFactory(10);
  gameBoard.placeShip(2, 'vertical', 9, 0);
  gameBoard.placeShip(2, 'horizontal', 0, 9);
  expect(gameBoard.grid[9][0]).toBe('');
  expect(gameBoard.grid[0][9]).toBe('');
});

test("gameBoard.placeShip doesn't allow ships to overlap", () => {
  const gameBoard = gameBoardFactory(10);
  gameBoard.placeShip(3, 'horizontal', 0, 0);
  gameBoard.placeShip(3, 'vertical', 0, 0);
  gameBoard.placeShip(3, 'vertical', 7, 0);
  gameBoard.placeShip(3, 'horizontal', 9, 0);
  expect(gameBoard.grid[1][0]).toBe('');
  expect(gameBoard.grid[2][0]).toBe('');
  expect(gameBoard.grid[9][1]).toBe('');
  expect(gameBoard.grid[9][2]).toBe('');
});
