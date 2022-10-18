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
    this.shipLocations.push(gridSpaces);
    return { newShip };
  },
});

module.exports = gameBoard;
