import '../reset.css';
import '../styles.css';
// eslint-disable-next-line no-unused-vars
import { renderNewShips, renderGameBoard } from './dom';
import { runGame } from './runGame';

const gridSize = 10;
const { p1GameBoard, p2GameBoard, player1, player2 } = runGame(
  'human',
  'cpu',
  'Player 1',
  'Player 2',
  gridSize,
  1,
  2,
  3,
  4,
);

renderGameBoard(p1GameBoard, player1, p2GameBoard, player2, gridSize);
renderNewShips(p1GameBoard, player1);
renderGameBoard(p2GameBoard, player2, p1GameBoard, player1, gridSize);
