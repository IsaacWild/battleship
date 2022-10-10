const gameBoard = require('./gameBoard');

test('Makes a ship of lenght 3', () => {
  gameBoard(3, ['A1', 'A2', 'A3']);
  expect(newShip.length).toBe(3);
});
