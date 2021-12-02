import '../reset.css';
import '../styles.css';
import renderGameBoard from './dom';
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

renderGameBoard(p1GameBoard, 'player 1');
renderGameBoard(p2GameBoard, 'player 2');
