import ship from './ship';

const gameBoard = () => ({
  placeShip(length, gridSpaces) {
    const newShip = ship(length, gridSpaces);
  },
});

module.exports = gameBoard;
