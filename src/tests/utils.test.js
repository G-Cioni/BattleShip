import { selectRandom, getRandomCoordinates } from '../js/utils';

test('selectRandom works: Random variable is selected', () => {
  let and = true;
  let or = false;
  for (let i = 0; i < 50; i += 1) {
    let bool = selectRandom(false, true);
    and = and && bool;
    or = or || bool;
  }
  expect(and).toBe(false);
  expect(or).toBe(true);
});
