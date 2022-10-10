(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["ship"],{

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module) => {

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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/ship.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gdGhpcyBpcyBhIGZhY3RvcnkgZnVuY3Rpb24gdG8gY3JlYXRlIGEgc2hpcCBvYmplY3QgZm9yIHRoZSBnYW1lLlxuLy8gbmVlZHMgdG8gaGF2ZSB0aGUgc2hpcHMgbGVuZ3RoLCB3aGVyZSB0aGV5IGhhdmUgYmVlbiBoaXQgYW5kIGlmIHRoZXkgYXJlIHN1bmsgb3Igbm90LlxuXG5jb25zdCBzaGlwID0gKGxlbmd0aCwgZ3JpZFNwYWNlcykgPT4gKHtcbiAgbGVuZ3RoLFxuICBoZWFsdGg6IGxlbmd0aCxcbiAgZ3JpZFNwYWNlcyxcbiAgaGl0U3BhY2VzOiBbXSxcbiAgaGl0KGhpdEdyaWQpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdyaWRTcGFjZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChoaXRHcmlkID09PSBncmlkU3BhY2VzW2ldKSB7XG4gICAgICAgIHRoaXMuaGl0U3BhY2VzLnB1c2goaGl0R3JpZCk7XG4gICAgICAgIHRoaXMuaGVhbHRoIC09IDE7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBpc1N1bmsoKSB7XG4gICAgaWYgKHRoaXMuaGVhbHRoID09PSAwKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gc2hpcDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==