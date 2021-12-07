import { runGame } from '../js/runGame';
import move from '../js/move';

test('move function lets a human player and then makes cpu opponent move automatically', () => {
  const gridSize = 10;
  const p1Name = 'Player 1';
  const p2Name = 'Player 2';
  const firstPlayer = p2Name;
  const { p1GameBoard, p2GameBoard, player1, player2 } = runGame(
    'cpu',
    'human',
    p1Name,
    p2Name,
    gridSize,
    1,
    2,
    3,
    4,
  );
  move(p1GameBoard, player1, p2GameBoard, player2, firstPlayer, gridSize, 0, 0);
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
