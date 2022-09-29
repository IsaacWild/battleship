const ship = require('./ship');

test('Makes a ship of lenght 5', () => {
  const ship1 = ship(5, ['A1', 'A2', 'A3', 'A4', 'A5']);
  expect(ship1.length).toBe(5);
});

test('hit function adds to the hitSpaces correctly', () => {
  const ship1 = ship(5, ['A1', 'A2', 'A3', 'A4', 'A5']);
  ship1.hit('A1');
  expect(ship1.hitSpaces[0]).toBe('A1');
});

test('when all spaces are hit ship sunk = true', () => {
  const ship1 = ship(5, ['A1', 'A2', 'A3', 'A4', 'A5']);
  ship1.hit('A1');
  ship1.hit('A2');
  ship1.hit('A3');
  ship1.hit('A4');
  // this is not working and should return test as fail but always returns true
  expect(ship1.isSunk).toBeTruthy();
});
