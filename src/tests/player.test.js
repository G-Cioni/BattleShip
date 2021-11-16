import { playerFactory, cpuPlayerFactory } from '../js/player';
import { gameBoardFactory } from '../js/gameBoard';

test('player.move() triggers gameBoard.receiveAttack()', () => {
  const gameBoard = gameBoardFactory(10);
  const player = playerFactory();
  player.move(0, 1, gameBoard);
  expect(gameBoard.grid[0][1]).toBe('missed');
});

test('cpuPlayer.move() makes a random move', () => {
  const gridSize = 2;
  const gameBoard = gameBoardFactory(gridSize);
  const cpuPlayer = cpuPlayerFactory();
  cpuPlayer.move(gameBoard, gridSize);
  let attackReceived = false;
  gameBoard.grid.forEach(
    (array) => (attackReceived += array.includes('missed')),
  );
  attackReceived = !!attackReceived;
  expect(attackReceived).toBe(true);
});

test('cpu never makes the same move twice', () => {
  const gridSize = 2;
  const gameBoard = gameBoardFactory(gridSize);
  const cpuPlayer = cpuPlayerFactory();
  cpuPlayer.move(gameBoard, gridSize);
  cpuPlayer.move(gameBoard, gridSize);
  cpuPlayer.move(gameBoard, gridSize);
  cpuPlayer.move(gameBoard, gridSize);
  expect(gameBoard.grid[0][0]).toBe('missed');
  expect(gameBoard.grid[0][1]).toBe('missed');
  expect(gameBoard.grid[1][0]).toBe('missed');
  expect(gameBoard.grid[1][1]).toBe('missed');
});
