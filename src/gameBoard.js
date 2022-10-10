/* eslint-disable max-len */
/*
This needs to a factory function that calls back to the ship factory function to place a ship at a specific coordinates.

*/

import ship from './ship';

const gameBoard = () => ({
  placeShip(length, gridSpaces) {
    const newShip = ship(length, gridSpaces);
  },
});

module.exports = gameBoard;
