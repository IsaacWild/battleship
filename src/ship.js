// this is a factory function to create a ship object for the game.
// needs to have the ships length, where they have been hit and if they are sunk or not.

const ship = (length, gridSpaces) => {
  const hitSpaces = [];
  const hit = (hitGrid) => {
    for (let i = 0; i < gridSpaces.length; i++) {
      if (hitGrid === gridSpaces[i]) {
        hitSpaces.push(hitGrid);
      } else { console.log('miss'); }
    }
  };
  const isSunk = () => {
    if (length - 1 === hitSpaces.length) {
      return true;
    }
    return false;
  };
  return {
    length, gridSpaces, hitSpaces, hit, isSunk,
  };
};
module.exports = ship;
