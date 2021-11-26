import { cpuPlayerFactory, playerFactory } from './player';

const createPlayers = (p1Type, p2Type, p1Name, p2Name) => {
  const player1 =
    p1Type === 'human' ? playerFactory(p1Name) : cpuPlayerFactory();
  const player2 =
    p2Type === 'human' ? playerFactory(p2Name) : cpuPlayerFactory();

  return { player1, player2 };
};

const runGameLoop = (p1Type, p2Type, p1Name, p2Name) => {
  const { player1, player2 } = createPlayers(p1Type, p2Type, p1Name, p2Name);
};

export { createPlayers, runGameLoop };
