import { runGame } from '../js/runGame';
<<<<<<< HEAD:src/tests/move.test.js
import move from '../js/move';
=======
import move from '../js/gameLoop';
>>>>>>> f8fbe1a805405d151055912d8dc5b1345a0f1125:src/tests/gameLoop.test.js

test('move function lets a human player and then makes cpu opponent move automatically', () => {
  const gridSize = 10;
  const { p1GameBoard, p2GameBoard, player1, player2 } = runGame(
    'cpu',
    'human',
    'Player 1',
    'Player 2',
    gridSize,
    1,
    2,
    3,
    4,
  );
  move(p1GameBoard, player1, p2GameBoard, player2, gridSize, 0, 0);
  const p2GameBoardHit = p2GameBoard.grid.reduce((acc, row) => {
    row.forEach((tile) => {
      if (tile === 'missed' || tile.status === 'hit') {
        acc = true;
      }
    });
    return acc;
  }, false);
  expect(
    p1GameBoard.grid[0][0] === 'missed' ||
      p1GameBoard.grid[0][0].status === 'hit',
  ).toBe(true);
  expect(p2GameBoardHit).toBe(true);
});
