import { TestWatcher } from '@jest/core';
import { shipFactory } from '../js/ship';

test("hit() marks that position as 'hit'", () => {
  const ship = shipFactory(3, 'horizontal', 0, 0);
  ship.hit(0, 1);
  expect(ship.coordinates[0].status).toEqual('notHit');
  expect(ship.coordinates[1].status).toEqual('hit');
  expect(ship.coordinates[2].status).toEqual('notHit');
});

test('isSunk() returns true when all positions have been hit', () => {
  const ship = shipFactory(3, 'horizontal', 0, 0);
  ship.hit(0, 0);
  ship.hit(0, 1);
  ship.hit(0, 2);
  expect(ship.isSunk()).toBe(true);
});

test('Correct coordinates array is created in shipFactory', () => {
  const ship = shipFactory(3, 'horizontal', 0, 0);
  expect(ship.coordinates).toEqual([
    {
      status: 'notHit',
      yCoord: 0,
      xCoord: 0,
    },
    {
      status: 'notHit',
      yCoord: 0,
      xCoord: 1,
    },
    {
      status: 'notHit',
      yCoord: 0,
      xCoord: 2,
    },
  ]);
});
