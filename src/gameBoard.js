export const gameBoardFactory = (gridSize) => {
  const grid = [];
  for (let i = 0; i < gridSize; i += 1) {
    grid.push([]);
    for (let j = 0; j < gridSize; j += 1) {
      grid[i].push('');
    }
  }

  return { grid };
};

export default gameBoardFactory;
