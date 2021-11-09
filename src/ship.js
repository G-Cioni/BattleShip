const shipFactory = (size) => {
  const isHit = [];
  for (let i = 0; i < size; i += 1) {
    isHit.push(false);
  }

  const hit = (number) => {
    if (number >= 0 && number <= 3) isHit.splice(number, 1, true);
  };

  return { isHit, hit };
};
export { shipFactory };
