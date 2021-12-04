import '../reset.css';
import '../styles.css';
// eslint-disable-next-line no-unused-vars
import { renderNewShips, renderGameBoard } from './dom';
import { runGame } from './runGame';
import gameLoop from './gameLoop';

const { p1GameBoard, p2GameBoard, player1, player2 } = runGame(
  'human',
  'human',
  'Player 1',
  'Player 2',
  10,
  1,
  2,
  3,
  4,
);

renderGameBoard(p1GameBoard, player1);
renderNewShips(p1GameBoard, player1);
renderGameBoard(p2GameBoard, player2);

gameLoop(p1GameBoard, p2GameBoard, player1, player2);
