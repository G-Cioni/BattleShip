import '../reset.css';
import '../styles.css';
// eslint-disable-next-line no-unused-vars
import { renderNewShips, renderGameBoard } from './dom';
import { runGame } from './runGame';

const { p1GameBoard, p2GameBoard } = runGame(
  'human',
  'cpu',
  'Player 1',
  'Player 2',
  10,
  1,
  2,
  3,
  4,
);

renderGameBoard(p1GameBoard, 'p1');
renderNewShips(p1GameBoard, 'p1');
renderGameBoard(p2GameBoard, 'p2');
