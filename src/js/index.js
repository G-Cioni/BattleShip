import '../reset.css';
import '../styles.css';
// eslint-disable-next-line no-unused-vars
import { renderTiles, renderNewShips, renderGameBoard } from './dom';
import move from './move';
import { runGame } from './runGame';

const gridSize = 10;
const p1Name = 'Player 1';
const p2Name = 'Player 2';
const { p1GameBoard, p2GameBoard, player1, player2, firstPlayer } = runGame(
  'human',
  'cpu',
  p1Name,
  p2Name,
  gridSize,
  1,
  2,
  3,
  4,
);

renderGameBoard(
  p1GameBoard,
  player1,
  p2GameBoard,
  player2,
  firstPlayer,
  gridSize,
);
renderNewShips(p1GameBoard, player1);
renderGameBoard(
  p2GameBoard,
  player2,
  p1GameBoard,
  player1,
  firstPlayer,
  gridSize,
);

// Lets cpu make a move it's the first player
if (player1.name === firstPlayer && player1.type === 'cpu') {
  move(p1GameBoard, player1, p2GameBoard, player2, firstPlayer, gridSize);
} else if (player2.name === firstPlayer && player2.type === 'cpu') {
  move(p2GameBoard, player2, p1GameBoard, player1, firstPlayer, gridSize);
}
// Renders with a adequate timeout
setTimeout(() => {
  renderTiles(p1GameBoard, player1);
  renderTiles(p2GameBoard, player2);
}, 400);
