import { createPlayers, runGameLoop } from '../js/gameLoop';

test('createPlayers returns 2 player objects', () => {
  const { player1, player2 } = createPlayers(
    'human',
    'cpu',
    'Player 1',
    'Player 2',
  );
  expect(!!player1).toBe(true);
  expect(!!player2).toBe(true);
});

test('createPlayers returns human and cpu players correctly', () => {
  const { player1, player2 } = createPlayers('human', 'cpu', '', 'Player 2');
  expect(player1.name).toBe('');
  expect(!!player2.name).toBe(false);
});
