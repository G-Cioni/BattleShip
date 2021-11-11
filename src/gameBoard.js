export const gameBoardFactory = (size) => {
  const grid = [];
  for (let i = 0; i < size; i += 1) {
    grid.push([]);
    for (let j = 0; j < size; j += 1) {
      grid[i].push(false);
    }
  }
  return { grid };
};

export default gameBoardFactory;
