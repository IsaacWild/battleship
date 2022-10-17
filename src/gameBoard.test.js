const gameBoard = require('./gameBoard');

test('Makes a ship of lenght 3', () => {
  const playerBoard = gameBoard();
  playerBoard.placeShip(3, ['A1', 'A2', 'A3']);
  expect(playerBoard.newShip.length).toBe(3);
});
