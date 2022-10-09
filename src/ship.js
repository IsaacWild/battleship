// this is a factory function to create a ship object for the game.
// needs to have the ships length, where they have been hit and if they are sunk or not.

const ship = (length, gridSpaces) => ({
  length,
  health: length,
  gridSpaces,
  hitSpaces: [],
  hit(hitGrid) {
    for (let i = 0; i < gridSpaces.length; i++) {
      if (hitGrid === gridSpaces[i]) {
        this.hitSpaces.push(hitGrid);
        this.health -= 1;
      }
    }
  },
  isSunk() {
    if (this.health === 0) {
      return true;
    }
    return false;
  },
});

module.exports = ship;
