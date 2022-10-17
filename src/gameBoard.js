/* eslint-disable import/no-import-module-exports */
/* eslint-disable max-len */
/*
This needs to a factory function that calls back to the ship factory function to place a ship at a specific coordinates.

*/

import ship from './ship';

const gameBoard = () => ({
  shipLocations: [],
  missedShot: [],
  placeShip(length, gridSpaces) {
    // Needs to call back to Ship FF
    const newShip = ship(length, gridSpaces);
    return newShip;
  },
  receiveAttack(gridSpaces) {
    // Needs to add to missed shots or connect to hit F in ship FF
  },
  allShipsSunk() {},
});

module.exports = gameBoard;
