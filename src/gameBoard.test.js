const gameBoard = require('./gameBoard');

test('Makes a ship of lenght 3', () => {
  const playerBoard = gameBoard();
  const placeNewShip = playerBoard.placeShip(3, ['A1', 'A2', 'A3']);
  expect(placeNewShip.newShip.length).toBe(3);
});

test('Ships locations are stored in the player board correctly', () => {
  const playerBoard = gameBoard();
  const placeNewShip = playerBoard.placeShip(5, ['A1', 'A2', 'A3', 'A4', 'A5']);
  expect(playerBoard.activeShipLocations).toStrictEqual([['A1', 'A2', 'A3', 'A4', 'A5']]);
});

test('Missed shot is recorded correctly', () => {
  const playerBoard = gameBoard();
  const placeNewShip = playerBoard.placeShip(3, ['A1', 'A2', 'A3']);
  playerBoard.receiveAttack('B2');
  expect(playerBoard.missedShots).toStrictEqual(['B2']);
});

test('Hit function reduces health by 1 from gameBoard', () => {
  const playerBoard = gameBoard();
  const submarine = playerBoard.placeShip(3, ['A1', 'A2', 'A3']);
  playerBoard.receiveAttack('A1');
  expect(submarine.newShip.health).toBe(2);
});
