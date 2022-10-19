/* eslint-disable import/no-import-module-exports */
/* eslint-disable max-len */
/*
This needs to a factory function that calls back to the ship factory function to place a ship at a specific coordinates.

*/

import ship from './ship';

const gameBoard = () => ({
  shipLocations: [],
  ships: [],
  missedShots: [],
  placeShip(length, gridSpaces) {
    const newShip = ship(length, gridSpaces);
    this.ships.push(newShip);
    this.shipLocations.push(gridSpaces);
    return { newShip };
  },
  receiveAttack(attackSpace) {
    for (let i = 0; i < this.shipLocations.length; i++) {
      if (attackSpace === this.shipLocations[i]) {
        // send hit to correct ship
      } else {
        this.missedShots.push(attackSpace);
      }
    }
  },
});

module.exports = gameBoard;
