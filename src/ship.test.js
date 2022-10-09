const ship = require('./ship');

test('Makes a ship of lenght 5', () => {
  const ship1 = ship(5, ['A1', 'A2', 'A3', 'A4', 'A5']);
  expect(ship1.length).toBe(5);
});

test('hit function adds to the hitSpaces correctly', () => {
  const ship2 = ship(5, ['A1', 'A2', 'A3', 'A4', 'A5']);
  ship2.hit('A1');
  expect(ship2.hitSpaces[0]).toBe('A1');
});

test('when all spaces are hit ship sunk = true', () => {
  const ship3 = ship(5, ['A1', 'A2', 'A3', 'A4', 'A5']);
  ship3.hit('A1');
  ship3.hit('A2');
  ship3.hit('A3');
  ship3.hit('A4');
  ship3.hit('A5');
  expect(ship3.isSunk()).toBeTruthy();
});
