import { playerFactory } from '../js/player';
import { gameBoardFactory } from '../js/gameBoard';

test('player.move() triggers gameBoard.receiveAttack()', () => {
  const gameBoard = gameBoardFactory(10);
  const player = playerFactory();
  player.move(0, 1, gameBoard);
  expect(gameBoard.grid[0][1]).toBe('missed');
});
