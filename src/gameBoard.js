/* eslint-disable import/no-import-module-exports */
/* eslint-disable max-len */
/*
This needs to a factory function that calls back to the ship factory function to place a ship at a specific coordinates.

*/

import ship from './ship';

const gameBoard = () => ({
  activeShipLocations: [],
  ships: [],
  missedShots: [],
  placeShip(length, gridSpaces) {
    const newShip = ship(length, gridSpaces);
    this.ships.push(newShip);
    this.activeShipLocations.push(gridSpaces);
    return { newShip };
  },
  receiveAttack(attackSpace) {
    for (let i = 0; i < this.activeShipLocations.length; i++) {
      if (attackSpace === this.activeShipLocations[i]) {
        // send hit to correct ship
        for (let i = 0; i < this.ships.length; i++) {
          const e = this.ships[i];
          e.gridSpaces.forEach((space) => {
            if (attackSpace === space) {
              e.newShip.hit(attackSpace);
            }
          });
        }
        // remove grid location from activeShipLocations
        this.activeShipLocations.splice(i, 1);
      } else {
        this.missedShots.push(attackSpace);
      }
    }
  },
});

module.exports = gameBoard;

/*

*/
