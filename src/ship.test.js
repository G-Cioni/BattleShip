import { TestWatcher } from '@jest/core';
import { shipFactory } from './ship';

test('isHit creates correct ship size', () => {
  const ship = shipFactory(2);
  expect(ship.isHit.length).toBe(2);
});

test("hit() marks that position as 'hit'", () => {
  const ship = shipFactory(3);
  ship.hit(3);
  expect(ship.isHit[3]).toBe(true);
});
