(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["gameBoard"],{

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ship__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);


const gameBoard = () => ({
  placeShip(length, gridSpaces) {
    const newShip = _ship__WEBPACK_IMPORTED_MODULE_0___default()(length, gridSpaces);
  },
});

module.exports = gameBoard;


/***/ }),

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/gameBoard.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZUJvYXJkLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTBCOztBQUUxQjtBQUNBO0FBQ0Esb0JBQW9CLDRDQUFJO0FBQ3hCLEdBQUc7QUFDSCxDQUFDOztBQUVEOzs7Ozs7Ozs7OztBQ1JBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRCIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZUJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2hpcCBmcm9tICcuL3NoaXAnO1xuXG5jb25zdCBnYW1lQm9hcmQgPSAoKSA9PiAoe1xuICBwbGFjZVNoaXAobGVuZ3RoLCBncmlkU3BhY2VzKSB7XG4gICAgY29uc3QgbmV3U2hpcCA9IHNoaXAobGVuZ3RoLCBncmlkU3BhY2VzKTtcbiAgfSxcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdhbWVCb2FyZDtcbiIsIi8vIHRoaXMgaXMgYSBmYWN0b3J5IGZ1bmN0aW9uIHRvIGNyZWF0ZSBhIHNoaXAgb2JqZWN0IGZvciB0aGUgZ2FtZS5cbi8vIG5lZWRzIHRvIGhhdmUgdGhlIHNoaXBzIGxlbmd0aCwgd2hlcmUgdGhleSBoYXZlIGJlZW4gaGl0IGFuZCBpZiB0aGV5IGFyZSBzdW5rIG9yIG5vdC5cblxuY29uc3Qgc2hpcCA9IChsZW5ndGgsIGdyaWRTcGFjZXMpID0+ICh7XG4gIGxlbmd0aCxcbiAgaGVhbHRoOiBsZW5ndGgsXG4gIGdyaWRTcGFjZXMsXG4gIGhpdFNwYWNlczogW10sXG4gIGhpdChoaXRHcmlkKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBncmlkU3BhY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaGl0R3JpZCA9PT0gZ3JpZFNwYWNlc1tpXSkge1xuICAgICAgICB0aGlzLmhpdFNwYWNlcy5wdXNoKGhpdEdyaWQpO1xuICAgICAgICB0aGlzLmhlYWx0aCAtPSAxO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgaXNTdW5rKCkge1xuICAgIGlmICh0aGlzLmhlYWx0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNoaXA7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=