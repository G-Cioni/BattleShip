import { gameBoardFactory } from '../js/gameBoard';

test('gameBoardFactory generates correct grid size', () => {
  const size = 10;
  const gameBoard = gameBoardFactory(size);
  expect(gameBoard.grid[size]).toBe(undefined);
  expect(gameBoard.grid[0][size]).toBe(undefined);
  expect(gameBoard.grid[size - 1][0]).toBe('');
  expect(gameBoard.grid[0][size - 1]).toBe('');
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

test("gameBoard.receiveAttack marks correct ship tile as 'hit'", () => {
  const gameBoard = gameBoardFactory(10);
  gameBoard.placeShip(3, 'horizontal', 0, 0);
  gameBoard.receiveAttack(0, 1);
  expect(gameBoard.allShips[0].coordinates[1].status).toBe('hit');
});

test("gameBoard.receiveAttack marks correct grid square as 'hit'", () => {
  const gameBoard = gameBoardFactory(10);
  gameBoard.placeShip(3, 'horizontal', 0, 0);
  gameBoard.receiveAttack(0, 1);
  expect(gameBoard.grid[0][1].status).toBe('hit');
});

test("gameBoard.receiveAttack marks correct square as 'missed' if no ship is present", () => {
  const gameBoard = gameBoardFactory(10);
  gameBoard.receiveAttack(0, 1);
  expect(gameBoard.grid[0][1]).toBe('missed');
});

test('checkAllSunk returns true if all ships have been sunk else returns false', () => {
  const gameBoard = gameBoardFactory(10);
  gameBoard.placeShip(2, 'horizontal', 0, 0);
  gameBoard.receiveAttack(0, 0);
  expect(gameBoard.checkAllSunk()).toBe(false);
  gameBoard.receiveAttack(0, 1);
  expect(gameBoard.checkAllSunk()).toBe(true);
});
