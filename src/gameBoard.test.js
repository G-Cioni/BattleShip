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

test('gameBoard.placeShip places horizontal ship correctly', () => {
  const gameBoard = gameBoardFactory(10);
  gameBoard.placeShip(3, 'horizontal', 4, 3);
  console.log(gameBoard.grid, 'hello');
  expect(gameBoard.grid[4][3].status).toBe('notHit');
  expect(gameBoard.grid[4][4].status).toBe('notHit');
  expect(gameBoard.grid[4][5].status).toBe('notHit');
});

test('gameBoard.placeShip places horizontal ship correctly', () => {
  const gameBoard = gameBoardFactory(10);
  gameBoard.placeShip(3, 'vertical', 4, 1);
  expect(gameBoard.grid[4][1].status).toBe('notHit');
  expect(gameBoard.grid[5][1].status).toBe('notHit');
  expect(gameBoard.grid[6][1].status).toBe('notHit');
});
