/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/DomContent.js":
/*!***********************************!*\
  !*** ./src/modules/DomContent.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InitializeDOM: () => (/* binding */ InitializeDOM)
/* harmony export */ });
/* harmony import */ var _utils_Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Gameboard */ "./src/utils/Gameboard.js");


// AxisSelected(): Will operate the axis the change by boolean.
var AxisSelected = function () {
  var axisSelected = false;
  return {
    axisSelected: axisSelected
  };
}();

// NewGameSelected(): Toggles true if the new game button was clicked.
var NewGameSelected = function () {
  var newGameSelected = false;
  return {
    newGameSelected: newGameSelected
  };
}();

// ShipData Literl Object: Will contain ship data to control the flow of ships on the gameboard. 
var ShipData = {
  lengthIndex: 0,
  shipsPlaced: 0,
  shipLength: 0,
  shipsOnBoard: 0,
  placementCommenced: false,
  shipWasPlaced: false
};

// AxisChange Literal Object: 
var AxisChange = {
  axisChange: null
};

// InitializingDOM(): Intializing DOM Content for the entire application. 
function InitializeDOM() {
  console.log("Initializing DOM Content..."); // Testing 
  console.log('\n'); // Testing 

  GameboardDOM();
  InterfaceDOM();
  PlayerOneDOM();
  PlayerTwoDOM();
  // AxisDOM();
}
// NumberOfShipsPlaced(): Will keep track of the current ship to be placed on the gameboard.
function NumberOfShipsPlaced() {
  var numberOfShipsPlaced = document.querySelector('.number-of-ships');
  if (!(ShipData.lengthIndex + 1 > 10)) {
    ShipData.shipsPlaced++;
    numberOfShipsPlaced.textContent = "Ship: ".concat(ShipData.shipsPlaced);
  }
}

// GameboardDOM(): The gameboard DOM for the entire application. 
function GameboardDOM() {
  var content = document.querySelector('#content');
  var gameboardContainer = document.createElement('div');
  gameboardContainer.classList.add('gameboard-container');
  content.appendChild(gameboardContainer);
}

// PlayerOneDOM(): The player one board.
function PlayerOneDOM() {
  var gameboardContainer = document.querySelector('.gameboard-container');
  var playerOneBoard = (0,_utils_Gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();
  var playerOne = document.createElement('div');
  playerOne.classList.add('player-one-board');
  for (var i = 0; i < playerOneBoard.gameboard.length; i++) {
    var row = document.createElement('div');
    for (var j = 0; j < playerOneBoard.gameboard[i].length; j++) {
      var cell = document.createElement('div');
      cell.classList.add('cell');
      cell.dataset.x = i;
      cell.dataset.y = j;
      row.appendChild(cell);
    }
    playerOne.appendChild(row);
  }
  gameboardContainer.appendChild(playerOne);
}

// PlayerTwoDOM(): The player two board.
function PlayerTwoDOM() {
  var gameboardContainer = document.querySelector('.gameboard-container');
  var playerTwo = document.createElement('div');
  playerTwo.classList.add('player-two-board');
  gameboardContainer.appendChild(playerTwo);
}

// PlaceShips(): Will place the ships on the gameboard.
function PlaceShips(e) {
  var cells = document.querySelectorAll('.player-one-board > div > div');
  var xCoord = document.querySelector('.gameboard-container > div:nth-child(1) > div > button:nth-child(1)');
  var yCoord = document.querySelector('.gameboard-container > div:nth-child(1) > div > button:nth-child(2)');
  if (ShipData.placementCommenced) {
    if (ShipData.lengthIndex > 9) {
      console.log('You have placed all your ships already'); // Testing
      console.log('Player Two will now place their ships on the board'); // Testing
      console.log('\n'); // Testing 
    } else {
      ShipData.shipWasPlaced = false;
      var board = (0,_utils_Gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();
      var ship = board.Ship();
      ShipData.shipLength = ship.defaultLengths[ShipData.lengthIndex];
      console.log('Ship number to be placed: ', ShipData.lengthIndex + 1); // Testing 
      console.log('The length of the ship to be placed: ', ShipData.shipLength); // Testing 
      console.log('\n'); // Testing

      ShipData.lengthIndex++; // increment to the next ship. 
    }
  }
  for (var i = 0; i < cells.length; i++) {
    if (AxisChange.axisChange === null) {
      cells[i].addEventListener('mouseenter', EnterX);
      cells[i].addEventListener('mouseleave', LeaveX);
    } else if (AxisChange.axisChange === 1) {
      cells[i].removeEventListener('mouseenter', EnterY);
      cells[i].removeEventListener('mouseleave', LeaveY);
      cells[i].addEventListener('mouseenter', EnterX);
      cells[i].addEventListener('mouseleave', LeaveX);
    } else if (AxisChange.axisChange === 2) {
      cells[i].removeEventListener('mouseenter', EnterX);
      cells[i].removeEventListener('mouseleave', LeaveX);
      cells[i].addEventListener('mouseenter', EnterY);
      cells[i].addEventListener('mouseleave', LeaveY);
    }
  }
}

// IntefaceDOM(): Interface section for the user. 
function InterfaceDOM() {
  var gameboardContainer = document.querySelector('.gameboard-container');
  var cells = document.querySelectorAll('.player-one-board > div > div');
  var playerInterface = document.createElement('div');
  playerInterface.classList.add('interface');
  var newGame = document.createElement('button');
  newGame.textContent = 'New Game';
  var placeShip = document.createElement('button');
  placeShip.textContent = "Place Ship";
  var coordinateContainer = document.createElement('div');
  var xCoord = document.createElement('button');
  xCoord.textContent = 'x';
  var yCoord = document.createElement('button');
  yCoord.textContent = 'y';
  coordinateContainer.appendChild(xCoord);
  coordinateContainer.appendChild(yCoord);
  var numberOfShipsPlaced = document.createElement('div');
  numberOfShipsPlaced.classList.add('number-of-ships');
  playerInterface.appendChild(newGame);
  playerInterface.appendChild(placeShip);
  playerInterface.appendChild(coordinateContainer);
  playerInterface.appendChild(numberOfShipsPlaced);
  gameboardContainer.appendChild(playerInterface);

  // newGame.addEventListener('click', NewGame);

  placeShip.addEventListener('click', function (e) {
    ShipData.placementCommenced = true;
    NumberOfShipsPlaced();
    PlaceShips(e);
  });
  xCoord.addEventListener('click', function (e) {
    ShipData.placementCommenced = false;
    AxisChange.axisChange = 1;
    yCoord.classList.remove('current-coordinate');
    xCoord.classList.add('current-coordinate');
    PlaceShips(e);
  });
  yCoord.addEventListener('click', function (e) {
    ShipData.placementCommenced = false;
    AxisChange.axisChange = 2;
    xCoord.classList.remove('current-coordinate');
    yCoord.classList.add('current-coordinate');
    PlaceShips(e);
  });

  // xCoord.addEventListener('click', ChangeToXAxis);

  // yCoord.addEventListener('click', ChangeToYAxis);
}

// NewGame(): Will begin a new game for the player. 
function NewGame() {
  console.log('Player begins a new game.'); // Testing 
  console.log('\n'); // Testing 

  NewGameSelected.newGameSelected = true;
  var board = (0,_utils_Gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();
  var ship = board.Ship();
  ShipData.shipLength = ship.defaultLengths[ShipData.lengthIndex];
}

// HoverTestDOM(): The hover test on the board.
function AxisDOM(e) {
  var cell = document.querySelectorAll('.player-one-board > div > div');
  console.log('Cells: ', cell); // Testing

  // const xCoord = document.querySelector('.gameboard-container > div:nth-child(1) > div > button:nth-child(1)');
  // console.log(xCoord); // Testing 
  // const yCoord = document.querySelector('.gameboard-container > div:nth-child(1) > div > button:nth-child(2)'); 
  // console.log(yCoord); // Testing

  // Testing for yCoord:
  // for (let i = 0; i < cell.length; i++)
  // {
  //     cell[i].addEventListener('mouseenter', () => {
  //         if (!(parseInt(cell[i].dataset.x) === 9))
  //         {
  //             cell[i].classList.add('hover-test');
  //             cell[i + 10].classList.add('hover-test'); 
  //         }
  //     });
  // }

  // for (let i = 0; i < cell.length; i++)
  // {
  //     cell[i].addEventListener('mouseleave', () => {
  //         if (cell[i].classList.contains('hover-test'))
  //         {
  //             cell[i].classList.remove('hover-test');
  //             cell[i + 10].classList.remove('hover-test');
  //         }
  //     });
  // }

  // Testing for xCoord:
  // for (let i = 0; i < cell.length; i++)
  // {
  //     if (!AxisChange.yAxisChange)
  //     {
  //         cell[i].addEventListener('mouseenter', () => {
  //             if (!(parseInt(cell[i].dataset.x === 9)) && !(parseInt(cell[i].dataset.y) === 9))
  //             {
  //                 cell[i].classList.add('hover-test');
  //                 cell[i + 1].classList.add('hover-test');
  //             }
  //         });

  //         cell[i].addEventListener('click', () => {
  //             console.log('X: ', cell[i].dataset.x); // Testing
  //             console.log('Y: ', cell[i].dataset.y); // Testing
  //             console.log('X2: ', cell[i + 1].dataset.x); // Testing
  //             console.log('X3: ', cell[i + 1].dataset.y); // Testing 
  //             console.log('\n'); // Testing
  //         });

  //         cell[i].addEventListener('mouseleave', () => {
  //             if (cell[i].classList.contains('hover-test'))
  //             {
  //                 cell[i].classList.remove('hover-test');
  //                 cell[i + 1].classList.remove('hover-test');    
  //             }
  //         });
  //     }

  // }

  // for (let i = 0; i < cell.length; i++)
  // {
  //     cell[i].addEventListener('mouseleave', () => {
  //         if (cell[i].classList.contains('hover-test'))
  //         {
  //             cell[i].classList.remove('hover-test');
  //             cell[i + 1].classList.remove('hover-test');    
  //         }
  //     });
  // }
}

// ChangeToXAxis(): Will change the axis selection of the gameboard to the x-axis.
function ChangeToXAxis() {
  var cells = document.querySelectorAll('.player-one-board > div > div');
  var yCoord = document.querySelector('.gameboard-container > div:nth-child(1) > div > button:nth-child(2)');
  AxisSelected.axisSelected = true;
  console.log('X or Y Axis has been selected: ', AxisSelected.axisSelected); // Testing

  // Remove EnterY and LeaveY Event Listeners 
  cells.forEach(function (cell) {
    cell.removeEventListener('mouseenter', EnterY);
    cell.removeEventListener('mouseleave', LeaveY);
  });
  for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('mouseenter', EnterX);
    cells[i].addEventListener('mouseleave', LeaveX);
  }
}

// EnterX(): Will enter each cell on the x-axis selection. 
function EnterX(e) {
  console.log(e); // Testing 
  console.log(e.target); // Testing 
  console.log(e.target.dataset.x); // Testing 
  console.log(e.target.dataset.y); // Testing
  console.log('\n'); // Testing

  var cell = document.querySelector("[data-x=\"".concat(e.target.dataset.x, "\"][data-y=\"").concat(e.target.dataset.y, "\"]"));
  var nextCellOne = document.querySelector("[data-x=\"".concat(e.target.dataset.x, "\"][data-y=\"").concat(parseInt(e.target.dataset.y) + 1, "\"]"));
  var nextCellTwo = document.querySelector("[data-x=\"".concat(e.target.dataset.x, "\"][data-y=\"").concat(parseInt(e.target.dataset.y) + 2, "\"]"));
  var nextCellThree = document.querySelector("[data-x=\"".concat(e.target.dataset.x, "\"][data-y=\"").concat(parseInt(e.target.dataset.y) + 3, "\"]"));
  if (ShipData.shipLength === 0) {
    cell.classList.add('hover-test');
  } else if (ShipData.shipLength === 1) {
    if (!(parseInt(e.target.dataset.y) === 9)) {
      cell.classList.add('hover-test');
      var _nextCellOne = document.querySelector("[data-x=\"".concat(e.target.dataset.x, "\"][data-y=\"").concat(parseInt(e.target.dataset.y) + 1, "\"]"));
      _nextCellOne.classList.add('hover-test');
    }
  } else if (ShipData.shipLength === 2) {
    if (!(parseInt(e.target.dataset.y) + 2 === 10) && !(parseInt(e.target.dataset.y) + 1 === 9) && !(parseInt(e.target.dataset.y) === 9)) {
      cell.classList.add('hover-test');
      nextCellOne.classList.add('hover-test');
      nextCellTwo.classList.add('hover-test');
    }
  } else if (ShipData.shipLength === 3) {
    if (!(parseInt(e.target.dataset.y) + 3 === 10) && !(parseInt(e.target.dataset.y) + 2 === 9) && !(parseInt(e.target.dataset.y) + 1 === 9) && !(parseInt(e.target.dataset.y) === 9)) {
      cell.classList.add('hover-test');
      nextCellOne.classList.add('hover-test');
      nextCellTwo.classList.add('hover-test');
      nextCellThree.classList.add('hover-test');
    }
  }

  // Note: I could put this in its own function, but for now I will use the EnterX function to test
  // this alogorithm out. 
  cell.addEventListener('click', function () {
    console.log('X: ', cell.dataset.x);
    console.log('Y: ', cell.dataset.y);
    // TODO: Ship placement on the board can be done inside this function. 

    if (!ShipData.shipWasPlaced) {
      if (ShipData.shipLength === 0) {
        if (cell.classList.contains('ship-placed')) {
          console.log('Cell already contains a ship'); // Testing
        } else {
          cell.classList.add('ship-placed');
          ShipData.shipWasPlaced = true; // Stops the player from placing the same ship multiple times after pressing 'Place Ship' button. 
        }
      } else if (ShipData.shipLength === 1) {
        if (cell.classList.contains('ship-placed') && nextCellOne.classList.contains('ship-placed') || cell.classList.contains('ship-placed') || nextCellOne.classList.contains('ship-placed')) {
          console.log('Cell already contians a ship'); // Testing
        } else {
          cell.classList.add('ship-placed');
          nextCellOne.classList.add('ship-placed');
          ShipData.shipWasPlaced = true; // Stops the player from placing the same ship multiple times after pressing 'Place Ship' button. 
        }
      } else if (ShipData.shipLength === 2) {
        if (cell.classList.contains('ship-placed') && nextCellOne.classList.contains('ship-placed') && nextCellTwo.classList.contains('ship-placed') || cell.classList.contains('ship-placed') || nextCellOne.classList.contains('ship-placed') || nextCellTwo.classList.contains('ship-placed')) {
          console.log('Cell already contains a ship'); // Testing
        } else {
          cell.classList.add('ship-placed');
          nextCellOne.classList.add('ship-placed');
          nextCellTwo.classList.add('ship-placed');
          ShipData.shipWasPlaced = true; // Stops the player from placing the same ship multiple times after pressing 'Place Ship' button. 
        }
      } else if (ShipData.shipLength === 3) {
        cell.classList.add('ship-placed');
        nextCellOne.classList.add('ship-placed');
        nextCellTwo.classList.add('ship-placed');
        nextCellThree.classList.add('ship-placed');
        ShipData.shipWasPlaced = true; // Stops the player from placing the same ship multiple times after pressing 'Place Ship' button. 
      }
    } else {
      console.log("Ship ".concat(ShipData.shipsPlaced, " has already been placed.")); // Testing 
    }
  });
}

// LeaveX(): Will leave each cell from the x-axis selection. 
function LeaveX(e) {
  var cell = document.querySelector("[data-x=\"".concat(e.target.dataset.x, "\"][data-y=\"").concat(e.target.dataset.y, "\"]"));
  var nextCellOne = document.querySelector("[data-x=\"".concat(e.target.dataset.x, "\"][data-y=\"").concat(parseInt(e.target.dataset.y) + 1, "\"]"));
  var nextCellTwo = document.querySelector("[data-x=\"".concat(e.target.dataset.x, "\"][data-y=\"").concat(parseInt(e.target.dataset.y) + 2, "\"]"));
  var nextCellThree = document.querySelector("[data-x=\"".concat(e.target.dataset.x, "\"][data-y=\"").concat(parseInt(e.target.dataset.y) + 3, "\"]"));
  if (e.target.classList.contains('hover-test')) {
    if (ShipData.shipLength === 0) {
      cell.classList.remove('hover-test');
    } else if (ShipData.shipLength === 1) {
      cell.classList.remove('hover-test');
      nextCellOne.classList.remove('hover-test');
    } else if (ShipData.shipLength === 2) {
      cell.classList.remove('hover-test');
      nextCellOne.classList.remove('hover-test');
      nextCellTwo.classList.remove('hover-test');
    } else if (ShipData.shipLength === 3) {
      cell.classList.remove('hover-test');
      nextCellOne.classList.remove('hover-test');
      nextCellTwo.classList.remove('hover-test');
      nextCellThree.classList.remove('hover-test');
    }
  }
}

// ChangeToYAxis(): Will change the axis selection on the gameboard to the y-axis. 
function ChangeToYAxis() {
  var cells = document.querySelectorAll('.player-one-board > div > div');
  var xCoord = document.querySelector('.gameboard-container > div:nth-child(1) > div > button:nth-child(1)');
  AxisSelected.axisSelected = true;
  console.log('X or Y axis has been selected: ', AxisSelected.axisSelected); // Testing 

  // Remove EnterX and LeaveX Event Listeners.
  cells.forEach(function (cell) {
    cell.removeEventListener('mouseenter', EnterX);
    cell.removeEventListener('mouseleave', LeaveX);
  });
  for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('mouseenter', EnterY);
    cells[i].addEventListener('mouseleave', LeaveY);
  }
}

// EnterY(): Will enter each cell on the y-axis selection.
function EnterY(e) {
  console.log(e); // Testing 
  console.log(e.target); // Testing
  console.log(e.target.dataset.x); // Testing
  console.log(e.target.dataset.y); // Testing 
  console.log('\n'); // Testing

  var cell = document.querySelector("[data-x=\"".concat(e.target.dataset.x, "\"][data-y=\"").concat(e.target.dataset.y, "\"]"));
  var nextCellOne = document.querySelector("[data-x=\"".concat(parseInt(e.target.dataset.x) + 1, "\"][data-y=\"").concat(e.target.dataset.y, "\"]"));
  var nextCellTwo = document.querySelector("[data-x=\"".concat(parseInt(e.target.dataset.x) + 2, "\"][data-y=\"").concat(e.target.dataset.y, "\"]"));
  var nextCellThree = document.querySelector("[data-x=\"".concat(parseInt(e.target.dataset.x) + 3, "\"][data-y=\"").concat(e.target.dataset.y, "\"]"));
  if (ShipData.shipLength === 0) {
    cell.classList.add('hover-test');
  } else if (ShipData.shipLength === 1) {
    if (!(parseInt(e.target.dataset.x) === 9)) {
      cell.classList.add('hover-test');
      nextCellOne.classList.add('hover-test');
    }
  } else if (ShipData.shipLength === 2) {
    if (!(parseInt(e.target.dataset.x) + 2 === 10) && !(parseInt(e.target.dataset.x) + 1 === 9) && !(parseInt(e.target.dataset.x) === 9)) {
      cell.classList.add('hover-test');
      nextCellOne.classList.add('hover-test');
      nextCellTwo.classList.add('hover-test');
    }
  } else if (ShipData.shipLength === 3) {
    if (!(parseInt(e.target.dataset.x) + 3 === 10) && !(parseInt(e.target.dataset.x) + 2 === 9) && !(parseInt(e.target.dataset.x) + 1 === 9) && !(parseInt(e.target.dataset.x) === 9)) {
      cell.classList.add('hover-test');
      nextCellOne.classList.add('hover-test');
      nextCellTwo.classList.add('hover-test');
      nextCellThree.classList.add('hover-test');
    }
  }

  // Places the ships on the board cells:
  cell.addEventListener('click', function () {
    console.log("X: ", cell.dataset.x); // Testing 
    console.log("Y: ", cell.dataset.y); // Testing 

    if (!ShipData.shipWasPlaced) {
      if (ShipData.shipLength === 0) {
        cell.classList.add('ship-placed');
      } else if (ShipData.shipLength === 1) {
        cell.classList.add('ship-placed');
        nextCellOne.classList.add('ship-placed');
      } else if (ShipData.shipLength === 2) {
        cell.classList.add('ship-placed');
        nextCellOne.classList.add('ship-placed');
        nextCellTwo.classList.add('ship-placed');
      } else if (ShipData.shipLength === 3) {
        cell.classList.add('ship-placed');
        nextCellOne.classList.add('ship-placed');
        nextCellTwo.classList.add('ship-placed');
        nextCellThree.classList.add('ship-placed');
      }
      ShipData.shipWasPlaced = true;
    } else {
      console.log("Ship ".concat(ShipData.shipsPlaced, " has already been placed.")); // Testing 
    }
  });
}

// LeaveY(): Will leave each cell from the y-axis selection.
function LeaveY(e) {
  var cell = document.querySelector("[data-x=\"".concat(e.target.dataset.x, "\"][data-y=\"").concat(e.target.dataset.y, "\"]"));
  var nextCellOne = document.querySelector("[data-x=\"".concat(parseInt(e.target.dataset.x) + 1, "\"][data-y=\"").concat(e.target.dataset.y, "\"]"));
  var nextCellTwo = document.querySelector("[data-x=\"".concat(parseInt(e.target.dataset.x) + 2, "\"][data-y=\"").concat(e.target.dataset.y, "\"]"));
  var nextCellThree = document.querySelector("[data-x=\"".concat(parseInt(e.target.dataset.x) + 3, "\"][data-y=\"").concat(e.target.dataset.y, "\"]"));
  if (e.target.classList.contains('hover-test')) {
    if (ShipData.shipLength === 0) {
      cell.classList.remove('hover-test');
    } else if (ShipData.shipLength === 1) {
      cell.classList.remove('hover-test');
      nextCellOne.classList.remove('hover-test');
    } else if (ShipData.shipLength === 2) {
      cell.classList.remove('hover-test');
      nextCellOne.classList.remove('hover-test');
      nextCellTwo.classList.remove('hover-test');
    } else if (ShipData.shipLength === 3) {
      cell.classList.remove('hover-test');
      nextCellOne.classList.remove('hover-test');
      nextCellTwo.classList.remove('hover-test');
      nextCellThree.classList.remove('hover-test');
    }
  }
}

/***/ }),

/***/ "./src/utils/Gameboard.js":
/*!********************************!*\
  !*** ./src/utils/Gameboard.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gameboard: () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ "./src/utils/Ship.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

/** Gameboard
 * -> Gameboards should be able to place ships at specific coordinates by 
 * calling the 'ship factory function'. 
 */

// Gameboard(): Gameboard factory function.
var Gameboard = function Gameboard() {
  var gameboard = _toConsumableArray(Array(10)).map(function () {
    return Array(10).fill("");
  });
  var shipsOnBoard = 0;
  var receiveAttack = function receiveAttack() {
    // Will take a pair of coordinates, determines whether or not the attack hit a ship and
    // then sends the 'hit' function to the correct ship, or records the coordinates of the
    // missed shot. 
  };
  return {
    gameboard: gameboard,
    shipsOnBoard: shipsOnBoard,
    receiveAttack: receiveAttack,
    Ship: _Ship__WEBPACK_IMPORTED_MODULE_0__.Ship
  };
};

/***/ }),

/***/ "./src/utils/Ship.js":
/*!***************************!*\
  !*** ./src/utils/Ship.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
// Ship(): Ship factory function. 
var Ship = function Ship() {
  var defaultLengths = [0, 0, 0, 0, 1, 1, 1, 2, 2, 3];
  var length = 0;
  var hits = 0;
  var sunk = false;

  // hit(): Will gather the amount of hits the ship will get.
  var hit = function hit(isHit) {
    return hits += isHit;
  };

  // isSunk(): Will determine if the ship has sunk. 
  var isSunk = function isSunk() {
    return sunk = true;
  };
  return {
    hit: hit,
    isSunk: isSunk,
    defaultLengths: defaultLengths,
    length: length
  };
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* |Testing Area Identifiers and Components| */
#content > div > button{
    padding: 10px 5px 10px 5px;
    font-family:monospace;
    background-color: lightcoral;
    border: 1px solid lightcoral; 
    cursor: pointer;
}
#content > div > button:hover{
    background-color: lightblue;
    border: 1px solid lightblue;
}

/***************************************************************************************************************************************************************************/
/***************************************************************************************************************************************************************************/
/* |Main Content Section| */
#content{
    border: 1px solid red;
    padding: 10px; 
}

/***************************************************************************************************************************************************************************/
/***************************************************************************************************************************************************************************/
/* |Gameboard Container| */
.gameboard-container{
    display: flex;
    gap: 10px;

    border: 1px solid blue;
    padding: 10px;
    width: 1000px;
    margin: 0 auto;
}

/* Player One Board */
.player-one-board{
    display: flex;
    flex-direction: column;

    border: 1px solid green;
    padding: 10px;
}
.player-one-board > div{ /* columns */
    display: flex;

    /* border: 1px solid black; */
    /* padding: 5px; */
}
.player-one-board > div > div{ /* rows */
    border: 1px solid lightcoral;
    padding: 5px;
    width: 30px;
    height: 30px;
}

/* Player Two Board */
.player-two-board{
    border: 1px solid purple;
}


/* hover-test */
.hover-test{
    border: 1px solid black !important;
}

/* ship-placed - displays each ship placed on the board. */
.ship-placed{
    border: 1px solid black !important;
}


/***************************************************************************************************************************************************************************/
/***************************************************************************************************************************************************************************/
/* |Inteface Section| */
.interface{
    display: flex;
    flex-direction: column;
    
    border: 1px solid orange;
    padding: 10px;
}

/* current-coordinate - The current coordinate choosen by the user. */
.current-coordinate{
    background-color: lightcoral;
    border: 1px solid lightcoral;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,8CAA8C;AAC9C;IACI,0BAA0B;IAC1B,qBAAqB;IACrB,4BAA4B;IAC5B,4BAA4B;IAC5B,eAAe;AACnB;AACA;IACI,2BAA2B;IAC3B,2BAA2B;AAC/B;;AAEA,4KAA4K;AAC5K,4KAA4K;AAC5K,2BAA2B;AAC3B;IACI,qBAAqB;IACrB,aAAa;AACjB;;AAEA,4KAA4K;AAC5K,4KAA4K;AAC5K,0BAA0B;AAC1B;IACI,aAAa;IACb,SAAS;;IAET,sBAAsB;IACtB,aAAa;IACb,aAAa;IACb,cAAc;AAClB;;AAEA,qBAAqB;AACrB;IACI,aAAa;IACb,sBAAsB;;IAEtB,uBAAuB;IACvB,aAAa;AACjB;AACA,yBAAyB,YAAY;IACjC,aAAa;;IAEb,6BAA6B;IAC7B,kBAAkB;AACtB;AACA,+BAA+B,SAAS;IACpC,4BAA4B;IAC5B,YAAY;IACZ,WAAW;IACX,YAAY;AAChB;;AAEA,qBAAqB;AACrB;IACI,wBAAwB;AAC5B;;;AAGA,eAAe;AACf;IACI,kCAAkC;AACtC;;AAEA,0DAA0D;AAC1D;IACI,kCAAkC;AACtC;;;AAGA,4KAA4K;AAC5K,4KAA4K;AAC5K,uBAAuB;AACvB;IACI,aAAa;IACb,sBAAsB;;IAEtB,wBAAwB;IACxB,aAAa;AACjB;;AAEA,qEAAqE;AACrE;IACI,4BAA4B;IAC5B,4BAA4B;AAChC","sourcesContent":["/* |Testing Area Identifiers and Components| */\n#content > div > button{\n    padding: 10px 5px 10px 5px;\n    font-family:monospace;\n    background-color: lightcoral;\n    border: 1px solid lightcoral; \n    cursor: pointer;\n}\n#content > div > button:hover{\n    background-color: lightblue;\n    border: 1px solid lightblue;\n}\n\n/***************************************************************************************************************************************************************************/\n/***************************************************************************************************************************************************************************/\n/* |Main Content Section| */\n#content{\n    border: 1px solid red;\n    padding: 10px; \n}\n\n/***************************************************************************************************************************************************************************/\n/***************************************************************************************************************************************************************************/\n/* |Gameboard Container| */\n.gameboard-container{\n    display: flex;\n    gap: 10px;\n\n    border: 1px solid blue;\n    padding: 10px;\n    width: 1000px;\n    margin: 0 auto;\n}\n\n/* Player One Board */\n.player-one-board{\n    display: flex;\n    flex-direction: column;\n\n    border: 1px solid green;\n    padding: 10px;\n}\n.player-one-board > div{ /* columns */\n    display: flex;\n\n    /* border: 1px solid black; */\n    /* padding: 5px; */\n}\n.player-one-board > div > div{ /* rows */\n    border: 1px solid lightcoral;\n    padding: 5px;\n    width: 30px;\n    height: 30px;\n}\n\n/* Player Two Board */\n.player-two-board{\n    border: 1px solid purple;\n}\n\n\n/* hover-test */\n.hover-test{\n    border: 1px solid black !important;\n}\n\n/* ship-placed - displays each ship placed on the board. */\n.ship-placed{\n    border: 1px solid black !important;\n}\n\n\n/***************************************************************************************************************************************************************************/\n/***************************************************************************************************************************************************************************/\n/* |Inteface Section| */\n.interface{\n    display: flex;\n    flex-direction: column;\n    \n    border: 1px solid orange;\n    padding: 10px;\n}\n\n/* current-coordinate - The current coordinate choosen by the user. */\n.current-coordinate{\n    background-color: lightcoral;\n    border: 1px solid lightcoral;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/sounds/mixkit-retro-game-notification-212.wav":
/*!***********************************************************!*\
  !*** ./src/sounds/mixkit-retro-game-notification-212.wav ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b222ebf03a29c11b61f0.wav";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/Ship */ "./src/utils/Ship.js");
/* harmony import */ var _modules_DomContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/DomContent */ "./src/modules/DomContent.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _sounds_mixkit_retro_game_notification_212_wav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sounds/mixkit-retro-game-notification-212.wav */ "./src/sounds/mixkit-retro-game-notification-212.wav");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Notes:
// 1) I only have to test the ship objects public interface. Only 'methods or properties' that are used outside of your ship object 
// need unit tests. 
// 
// 2) Note that we have not yet created any User Interface. We should know
// our code is coming together by running the tests. You shouldn't be
// relying on 'console.log' or 'DOM methods' to make sure your code is
// doing what you expect it to.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// |Testing Area|
console.log('|Testing Area|');
var content = document.getElementById('content');
console.log(content); // Testing 

var buttonOneContainer = document.createElement('div');
var buttonOne = document.createElement('button');
buttonOne.textContent = 'Click Me!';
var newSound = new Audio(_sounds_mixkit_retro_game_notification_212_wav__WEBPACK_IMPORTED_MODULE_3__);

// buttonOne.addEventListener('click', () => {
//     console.log('You clicked the button!'); // Testing
//     newSound.play();
// }); 

// buttonOneContainer.appendChild(buttonOne);
// content.appendChild(buttonOneContainer);
// console.log('\n'); // Testing 

/** |Spread Syntax(...)|
 * The spread(...) syntax allow an iterable, such as an array or string, to be expanded in places 
 * where zero or more arguments (for function calls) or elements (for array literals) are expected.
 * In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs
 * to the object being created. 
 * 
 * Spread syntax looks exactly like rest syntax. In a way, spread syntax is the opposite of rest syntax.
 * Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and
 * "condenses" them into a single element. 
 * 
 * Note: Using the "map array method" will create a new array from the calling [...array(8)] that is
 * spreading 8 elements into it. Each element will be an Array of 8 elements that is filled with ("");
 */
var arrTest = _toConsumableArray(Array(8)).map(function () {
  return Array(8).fill("");
});
console.log('The Array: ', arrTest); // Testing
console.log('\n'); // Testing
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

(0,_modules_DomContent__WEBPACK_IMPORTED_MODULE_1__.InitializeDOM)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQztBQUNsRHpFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVyxPQUFPLENBQUMsQ0FBQyxDQUFDOztBQUV0QixJQUFNOEQsa0JBQWtCLEdBQUdsRSxRQUFRLENBQUNNLGFBQWEsQ0FBQyxLQUFLLENBQUM7QUFDeEQsSUFBTTZELFNBQVMsR0FBR25FLFFBQVEsQ0FBQ00sYUFBYSxDQUFDLFFBQVEsQ0FBQztBQUNsRDZELFNBQVMsQ0FBQ2pFLFdBQVcsR0FBRyxXQUFXO0FBRW5DLElBQU1rRSxRQUFRLEdBQUcsSUFBSUMsS0FBSyxDQUFDTCwyRUFBUyxDQUFDOztBQUVyQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNTSxPQUFPLEdBQUdoQixrQkFBQSxDQUFJQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUVDLEdBQUcsQ0FBQztFQUFBLE9BQU1ELEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUFBLEVBQUM7QUFDMURqRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxhQUFhLEVBQUU2RSxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQ3JDOUUsT0FBTyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUNuQjs7QUFFQUYsa0VBQWEsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9Eb21Db250ZW50LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy91dGlscy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3V0aWxzL1NoaXAuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4uL3V0aWxzL0dhbWVib2FyZFwiO1xuXG4vLyBBeGlzU2VsZWN0ZWQoKTogV2lsbCBvcGVyYXRlIHRoZSBheGlzIHRoZSBjaGFuZ2UgYnkgYm9vbGVhbi5cbmNvbnN0IEF4aXNTZWxlY3RlZCA9ICgoKSA9PiB7XG4gICAgbGV0IGF4aXNTZWxlY3RlZCA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHtheGlzU2VsZWN0ZWR9O1xufSkoKTtcblxuLy8gTmV3R2FtZVNlbGVjdGVkKCk6IFRvZ2dsZXMgdHJ1ZSBpZiB0aGUgbmV3IGdhbWUgYnV0dG9uIHdhcyBjbGlja2VkLlxuY29uc3QgTmV3R2FtZVNlbGVjdGVkID0gKCgpID0+IHtcbiAgICBsZXQgbmV3R2FtZVNlbGVjdGVkID0gZmFsc2U7XG5cbiAgICByZXR1cm4ge25ld0dhbWVTZWxlY3RlZH07IFxufSkoKTtcblxuLy8gU2hpcERhdGEgTGl0ZXJsIE9iamVjdDogV2lsbCBjb250YWluIHNoaXAgZGF0YSB0byBjb250cm9sIHRoZSBmbG93IG9mIHNoaXBzIG9uIHRoZSBnYW1lYm9hcmQuIFxubGV0IFNoaXBEYXRhID0ge1xuICAgIGxlbmd0aEluZGV4OiAwLFxuICAgIHNoaXBzUGxhY2VkOiAwLFxuICAgIHNoaXBMZW5ndGg6IDAsIFxuICAgIHNoaXBzT25Cb2FyZDogMCxcbiAgICBwbGFjZW1lbnRDb21tZW5jZWQ6IGZhbHNlLFxuICAgIHNoaXBXYXNQbGFjZWQ6IGZhbHNlLFxufVxuXG4vLyBBeGlzQ2hhbmdlIExpdGVyYWwgT2JqZWN0OiBcbmxldCBBeGlzQ2hhbmdlID0ge1xuICAgIGF4aXNDaGFuZ2U6IG51bGwsIFxufVxuXG4vLyBJbml0aWFsaXppbmdET00oKTogSW50aWFsaXppbmcgRE9NIENvbnRlbnQgZm9yIHRoZSBlbnRpcmUgYXBwbGljYXRpb24uIFxuZXhwb3J0IGZ1bmN0aW9uIEluaXRpYWxpemVET00oKXtcbiAgICBjb25zb2xlLmxvZyhcIkluaXRpYWxpemluZyBET00gQ29udGVudC4uLlwiKTsgLy8gVGVzdGluZyBcbiAgICBjb25zb2xlLmxvZygnXFxuJyk7IC8vIFRlc3RpbmcgXG5cbiAgICBHYW1lYm9hcmRET00oKTtcbiAgICBJbnRlcmZhY2VET00oKTtcbiAgICBQbGF5ZXJPbmVET00oKTtcbiAgICBQbGF5ZXJUd29ET00oKTtcbiAgICAvLyBBeGlzRE9NKCk7XG59XG4vLyBOdW1iZXJPZlNoaXBzUGxhY2VkKCk6IFdpbGwga2VlcCB0cmFjayBvZiB0aGUgY3VycmVudCBzaGlwIHRvIGJlIHBsYWNlZCBvbiB0aGUgZ2FtZWJvYXJkLlxuZnVuY3Rpb24gTnVtYmVyT2ZTaGlwc1BsYWNlZCgpe1xuICAgIGNvbnN0IG51bWJlck9mU2hpcHNQbGFjZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubnVtYmVyLW9mLXNoaXBzJyk7XG5cbiAgICBpZiAoISgoU2hpcERhdGEubGVuZ3RoSW5kZXggKyAxKSA+IDEwKSlcbiAgICB7XG4gICAgICAgIFNoaXBEYXRhLnNoaXBzUGxhY2VkKys7XG4gICAgICAgIG51bWJlck9mU2hpcHNQbGFjZWQudGV4dENvbnRlbnQgPSBgU2hpcDogJHtTaGlwRGF0YS5zaGlwc1BsYWNlZH1gO1xuICAgIH1cbn1cblxuLy8gR2FtZWJvYXJkRE9NKCk6IFRoZSBnYW1lYm9hcmQgRE9NIGZvciB0aGUgZW50aXJlIGFwcGxpY2F0aW9uLiBcbmZ1bmN0aW9uIEdhbWVib2FyZERPTSgpe1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG4gICAgY29uc3QgZ2FtZWJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ2FtZWJvYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2dhbWVib2FyZC1jb250YWluZXInKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZ2FtZWJvYXJkQ29udGFpbmVyKTsgXG59XG5cbi8vIFBsYXllck9uZURPTSgpOiBUaGUgcGxheWVyIG9uZSBib2FyZC5cbmZ1bmN0aW9uIFBsYXllck9uZURPTSgpe1xuICAgIGNvbnN0IGdhbWVib2FyZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lYm9hcmQtY29udGFpbmVyJyk7IFxuXG4gICAgY29uc3QgcGxheWVyT25lQm9hcmQgPSBHYW1lYm9hcmQoKTsgXG5cbiAgICBjb25zdCBwbGF5ZXJPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgcGxheWVyT25lLmNsYXNzTGlzdC5hZGQoJ3BsYXllci1vbmUtYm9hcmQnKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyT25lQm9hcmQuZ2FtZWJvYXJkLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcGxheWVyT25lQm9hcmQuZ2FtZWJvYXJkW2ldLmxlbmd0aDsgaisrKXtcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcbiAgICAgICAgICAgIGNlbGwuZGF0YXNldC54ID0gaTtcbiAgICAgICAgICAgIGNlbGwuZGF0YXNldC55ID0gajtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBsYXllck9uZS5hcHBlbmRDaGlsZChyb3cpOyBcbiAgICB9XG5cbiAgICBnYW1lYm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyT25lKTsgXG59XG5cbi8vIFBsYXllclR3b0RPTSgpOiBUaGUgcGxheWVyIHR3byBib2FyZC5cbmZ1bmN0aW9uIFBsYXllclR3b0RPTSgpe1xuICAgIGNvbnN0IGdhbWVib2FyZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lYm9hcmQtY29udGFpbmVyJyk7XG4gICAgXG4gICAgY29uc3QgcGxheWVyVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuICAgIHBsYXllclR3by5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItdHdvLWJvYXJkJyk7IFxuXG4gICAgZ2FtZWJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllclR3byk7IFxufVxuXG4vLyBQbGFjZVNoaXBzKCk6IFdpbGwgcGxhY2UgdGhlIHNoaXBzIG9uIHRoZSBnYW1lYm9hcmQuXG5mdW5jdGlvbiBQbGFjZVNoaXBzKGUpe1xuICAgIGNvbnN0IGNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllci1vbmUtYm9hcmQgPiBkaXYgPiBkaXYnKTsgXG4gICAgY29uc3QgeENvb3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVib2FyZC1jb250YWluZXIgPiBkaXY6bnRoLWNoaWxkKDEpID4gZGl2ID4gYnV0dG9uOm50aC1jaGlsZCgxKScpO1xuICAgIGNvbnN0IHlDb29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lYm9hcmQtY29udGFpbmVyID4gZGl2Om50aC1jaGlsZCgxKSA+IGRpdiA+IGJ1dHRvbjpudGgtY2hpbGQoMiknKTsgXG5cbiAgICBpZiAoU2hpcERhdGEucGxhY2VtZW50Q29tbWVuY2VkKVxuICAgIHtcbiAgICAgICAgaWYgKFNoaXBEYXRhLmxlbmd0aEluZGV4ID4gOSlcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1lvdSBoYXZlIHBsYWNlZCBhbGwgeW91ciBzaGlwcyBhbHJlYWR5Jyk7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQbGF5ZXIgVHdvIHdpbGwgbm93IHBsYWNlIHRoZWlyIHNoaXBzIG9uIHRoZSBib2FyZCcpOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnXFxuJyk7IC8vIFRlc3RpbmcgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICBTaGlwRGF0YS5zaGlwV2FzUGxhY2VkID0gZmFsc2U7IFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBib2FyZCA9IEdhbWVib2FyZCgpO1xuICAgICAgICAgICAgY29uc3Qgc2hpcCA9IGJvYXJkLlNoaXAoKTtcbiAgICAgICAgXG4gICAgICAgICAgICBTaGlwRGF0YS5zaGlwTGVuZ3RoID0gc2hpcC5kZWZhdWx0TGVuZ3Roc1tTaGlwRGF0YS5sZW5ndGhJbmRleF07XG4gICAgICAgIFxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NoaXAgbnVtYmVyIHRvIGJlIHBsYWNlZDogJywgU2hpcERhdGEubGVuZ3RoSW5kZXggKyAxKTsgLy8gVGVzdGluZyBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaGUgbGVuZ3RoIG9mIHRoZSBzaGlwIHRvIGJlIHBsYWNlZDogJywgU2hpcERhdGEuc2hpcExlbmd0aCk7IC8vIFRlc3RpbmcgXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnXFxuJyk7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgU2hpcERhdGEubGVuZ3RoSW5kZXgrKzsgLy8gaW5jcmVtZW50IHRvIHRoZSBuZXh0IHNoaXAuIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjZWxscy5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICAgIGlmIChBeGlzQ2hhbmdlLmF4aXNDaGFuZ2UgPT09IG51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNlbGxzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBFbnRlclgpO1xuICAgICAgICAgICAgY2VsbHNbaV0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIExlYXZlWCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoQXhpc0NoYW5nZS5heGlzQ2hhbmdlID09PSAxKVxuICAgICAgICB7XG4gICAgICAgICAgICBjZWxsc1tpXS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgRW50ZXJZKTtcbiAgICAgICAgICAgIGNlbGxzW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBMZWF2ZVkpO1xuICAgICAgICAgICAgY2VsbHNbaV0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIEVudGVyWCk7XG4gICAgICAgICAgICBjZWxsc1tpXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgTGVhdmVYKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChBeGlzQ2hhbmdlLmF4aXNDaGFuZ2UgPT09IDIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNlbGxzW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBFbnRlclgpO1xuICAgICAgICAgICAgY2VsbHNbaV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIExlYXZlWCk7XG4gICAgICAgICAgICBjZWxsc1tpXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgRW50ZXJZKTtcbiAgICAgICAgICAgIGNlbGxzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBMZWF2ZVkpOyBcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gSW50ZWZhY2VET00oKTogSW50ZXJmYWNlIHNlY3Rpb24gZm9yIHRoZSB1c2VyLiBcbmZ1bmN0aW9uIEludGVyZmFjZURPTSgpe1xuICAgIGNvbnN0IGdhbWVib2FyZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lYm9hcmQtY29udGFpbmVyJyk7XG4gICAgY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheWVyLW9uZS1ib2FyZCA+IGRpdiA+IGRpdicpO1xuXG4gICAgY29uc3QgcGxheWVySW50ZXJmYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGxheWVySW50ZXJmYWNlLmNsYXNzTGlzdC5hZGQoJ2ludGVyZmFjZScpO1xuXG4gICAgY29uc3QgbmV3R2FtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG5ld0dhbWUudGV4dENvbnRlbnQgPSAnTmV3IEdhbWUnO1xuXG4gICAgY29uc3QgcGxhY2VTaGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7IFxuICAgIHBsYWNlU2hpcC50ZXh0Q29udGVudCA9IGBQbGFjZSBTaGlwYDtcblxuICAgIGNvbnN0IGNvb3JkaW5hdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB4Q29vcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB4Q29vcmQudGV4dENvbnRlbnQgPSAneCc7XG4gICAgY29uc3QgeUNvb3JkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgeUNvb3JkLnRleHRDb250ZW50ID0gJ3knOyBcbiAgICBjb29yZGluYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKHhDb29yZCk7XG4gICAgY29vcmRpbmF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh5Q29vcmQpOyBcblxuICAgIGNvbnN0IG51bWJlck9mU2hpcHNQbGFjZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBudW1iZXJPZlNoaXBzUGxhY2VkLmNsYXNzTGlzdC5hZGQoJ251bWJlci1vZi1zaGlwcycpOyBcblxuICAgIHBsYXllckludGVyZmFjZS5hcHBlbmRDaGlsZChuZXdHYW1lKTtcbiAgICBwbGF5ZXJJbnRlcmZhY2UuYXBwZW5kQ2hpbGQocGxhY2VTaGlwKTtcbiAgICBwbGF5ZXJJbnRlcmZhY2UuYXBwZW5kQ2hpbGQoY29vcmRpbmF0ZUNvbnRhaW5lcik7IFxuICAgIHBsYXllckludGVyZmFjZS5hcHBlbmRDaGlsZChudW1iZXJPZlNoaXBzUGxhY2VkKTsgXG4gICAgZ2FtZWJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllckludGVyZmFjZSk7XG5cbiAgICAvLyBuZXdHYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgTmV3R2FtZSk7XG5cbiAgICBwbGFjZVNoaXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgU2hpcERhdGEucGxhY2VtZW50Q29tbWVuY2VkID0gdHJ1ZTsgIFxuICAgICAgICBOdW1iZXJPZlNoaXBzUGxhY2VkKCk7IFxuICAgICAgICBQbGFjZVNoaXBzKGUpO1xuICAgIH0pO1xuXG4gICAgeENvb3JkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgU2hpcERhdGEucGxhY2VtZW50Q29tbWVuY2VkID0gZmFsc2U7XG4gICAgICAgIEF4aXNDaGFuZ2UuYXhpc0NoYW5nZSA9IDE7IFxuICAgICAgICB5Q29vcmQuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudC1jb29yZGluYXRlJyk7IFxuICAgICAgICB4Q29vcmQuY2xhc3NMaXN0LmFkZCgnY3VycmVudC1jb29yZGluYXRlJyk7IFxuICAgICAgICBQbGFjZVNoaXBzKGUpO1xuICAgIH0pO1xuXG4gICAgeUNvb3JkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgU2hpcERhdGEucGxhY2VtZW50Q29tbWVuY2VkID0gZmFsc2U7IFxuICAgICAgICBBeGlzQ2hhbmdlLmF4aXNDaGFuZ2UgPSAyOyBcbiAgICAgICAgeENvb3JkLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQtY29vcmRpbmF0ZScpO1xuICAgICAgICB5Q29vcmQuY2xhc3NMaXN0LmFkZCgnY3VycmVudC1jb29yZGluYXRlJyk7XG4gICAgICAgIFBsYWNlU2hpcHMoZSk7XG4gICAgfSk7XG5cbiAgICAvLyB4Q29vcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBDaGFuZ2VUb1hBeGlzKTtcblxuICAgIC8vIHlDb29yZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIENoYW5nZVRvWUF4aXMpO1xufVxuXG4vLyBOZXdHYW1lKCk6IFdpbGwgYmVnaW4gYSBuZXcgZ2FtZSBmb3IgdGhlIHBsYXllci4gXG5mdW5jdGlvbiBOZXdHYW1lKCl7XG4gICAgY29uc29sZS5sb2coJ1BsYXllciBiZWdpbnMgYSBuZXcgZ2FtZS4nKTsgLy8gVGVzdGluZyBcbiAgICBjb25zb2xlLmxvZygnXFxuJyk7IC8vIFRlc3RpbmcgXG5cbiAgICBOZXdHYW1lU2VsZWN0ZWQubmV3R2FtZVNlbGVjdGVkID0gdHJ1ZTtcbiAgICBjb25zdCBib2FyZCA9IEdhbWVib2FyZCgpOyBcbiAgICBjb25zdCBzaGlwID0gYm9hcmQuU2hpcCgpO1xuXG4gICAgU2hpcERhdGEuc2hpcExlbmd0aCA9IHNoaXAuZGVmYXVsdExlbmd0aHNbU2hpcERhdGEubGVuZ3RoSW5kZXhdO1xufVxuXG4vLyBIb3ZlclRlc3RET00oKTogVGhlIGhvdmVyIHRlc3Qgb24gdGhlIGJvYXJkLlxuZnVuY3Rpb24gQXhpc0RPTShlKXtcbiAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllci1vbmUtYm9hcmQgPiBkaXYgPiBkaXYnKTtcbiAgICBjb25zb2xlLmxvZygnQ2VsbHM6ICcsIGNlbGwpOyAvLyBUZXN0aW5nXG5cbiAgICAvLyBjb25zdCB4Q29vcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZWJvYXJkLWNvbnRhaW5lciA+IGRpdjpudGgtY2hpbGQoMSkgPiBkaXYgPiBidXR0b246bnRoLWNoaWxkKDEpJyk7XG4gICAgLy8gY29uc29sZS5sb2coeENvb3JkKTsgLy8gVGVzdGluZyBcbiAgICAvLyBjb25zdCB5Q29vcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZWJvYXJkLWNvbnRhaW5lciA+IGRpdjpudGgtY2hpbGQoMSkgPiBkaXYgPiBidXR0b246bnRoLWNoaWxkKDIpJyk7IFxuICAgIC8vIGNvbnNvbGUubG9nKHlDb29yZCk7IC8vIFRlc3RpbmdcblxuICAgIC8vIFRlc3RpbmcgZm9yIHlDb29yZDpcbiAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IGNlbGwubGVuZ3RoOyBpKyspXG4gICAgLy8ge1xuICAgIC8vICAgICBjZWxsW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XG4gICAgLy8gICAgICAgICBpZiAoIShwYXJzZUludChjZWxsW2ldLmRhdGFzZXQueCkgPT09IDkpKVxuICAgIC8vICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgIGNlbGxbaV0uY2xhc3NMaXN0LmFkZCgnaG92ZXItdGVzdCcpO1xuICAgIC8vICAgICAgICAgICAgIGNlbGxbaSArIDEwXS5jbGFzc0xpc3QuYWRkKCdob3Zlci10ZXN0Jyk7IFxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9KTtcbiAgICAvLyB9XG5cbiAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IGNlbGwubGVuZ3RoOyBpKyspXG4gICAgLy8ge1xuICAgIC8vICAgICBjZWxsW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgLy8gICAgICAgICBpZiAoY2VsbFtpXS5jbGFzc0xpc3QuY29udGFpbnMoJ2hvdmVyLXRlc3QnKSlcbiAgICAvLyAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICBjZWxsW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTtcbiAgICAvLyAgICAgICAgICAgICBjZWxsW2kgKyAxMF0uY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItdGVzdCcpO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9KTtcbiAgICAvLyB9XG5cbiAgICAvLyBUZXN0aW5nIGZvciB4Q29vcmQ6XG4gICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBjZWxsLmxlbmd0aDsgaSsrKVxuICAgIC8vIHtcbiAgICAvLyAgICAgaWYgKCFBeGlzQ2hhbmdlLnlBeGlzQ2hhbmdlKVxuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgICBjZWxsW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgaWYgKCEocGFyc2VJbnQoY2VsbFtpXS5kYXRhc2V0LnggPT09IDkpKSAmJiAhKHBhcnNlSW50KGNlbGxbaV0uZGF0YXNldC55KSA9PT0gOSkpXG4gICAgLy8gICAgICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgICAgICBjZWxsW2ldLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXRlc3QnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgY2VsbFtpICsgMV0uY2xhc3NMaXN0LmFkZCgnaG92ZXItdGVzdCcpO1xuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH0pO1xuICAgIFxuICAgIC8vICAgICAgICAgY2VsbFtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZygnWDogJywgY2VsbFtpXS5kYXRhc2V0LngpOyAvLyBUZXN0aW5nXG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coJ1k6ICcsIGNlbGxbaV0uZGF0YXNldC55KTsgLy8gVGVzdGluZ1xuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdYMjogJywgY2VsbFtpICsgMV0uZGF0YXNldC54KTsgLy8gVGVzdGluZ1xuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdYMzogJywgY2VsbFtpICsgMV0uZGF0YXNldC55KTsgLy8gVGVzdGluZyBcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZygnXFxuJyk7IC8vIFRlc3RpbmdcbiAgICAvLyAgICAgICAgIH0pO1xuXG4gICAgLy8gICAgICAgICBjZWxsW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgaWYgKGNlbGxbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdob3Zlci10ZXN0JykpXG4gICAgLy8gICAgICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgICAgICBjZWxsW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgY2VsbFtpICsgMV0uY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItdGVzdCcpOyAgICBcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICB9KTtcbiAgICAvLyAgICAgfVxuXG4gICAgLy8gfVxuXG4gICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBjZWxsLmxlbmd0aDsgaSsrKVxuICAgIC8vIHtcbiAgICAvLyAgICAgY2VsbFtpXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgIC8vICAgICAgICAgaWYgKGNlbGxbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdob3Zlci10ZXN0JykpXG4gICAgLy8gICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgY2VsbFtpXS5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci10ZXN0Jyk7XG4gICAgLy8gICAgICAgICAgICAgY2VsbFtpICsgMV0uY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItdGVzdCcpOyAgICBcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfVxufVxuXG4vLyBDaGFuZ2VUb1hBeGlzKCk6IFdpbGwgY2hhbmdlIHRoZSBheGlzIHNlbGVjdGlvbiBvZiB0aGUgZ2FtZWJvYXJkIHRvIHRoZSB4LWF4aXMuXG5mdW5jdGlvbiBDaGFuZ2VUb1hBeGlzKCl7XG4gICAgY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheWVyLW9uZS1ib2FyZCA+IGRpdiA+IGRpdicpO1xuICAgIGNvbnN0IHlDb29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lYm9hcmQtY29udGFpbmVyID4gZGl2Om50aC1jaGlsZCgxKSA+IGRpdiA+IGJ1dHRvbjpudGgtY2hpbGQoMiknKTtcblxuICAgIEF4aXNTZWxlY3RlZC5heGlzU2VsZWN0ZWQgPSB0cnVlOyBcbiAgICBjb25zb2xlLmxvZygnWCBvciBZIEF4aXMgaGFzIGJlZW4gc2VsZWN0ZWQ6ICcsIEF4aXNTZWxlY3RlZC5heGlzU2VsZWN0ZWQpOyAvLyBUZXN0aW5nXG5cbiAgICAvLyBSZW1vdmUgRW50ZXJZIGFuZCBMZWF2ZVkgRXZlbnQgTGlzdGVuZXJzIFxuICAgIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgRW50ZXJZKTtcbiAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgTGVhdmVZKTtcbiAgICB9KTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2VsbHMubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgICBjZWxsc1tpXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgRW50ZXJYKTtcblxuICAgICAgICBjZWxsc1tpXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgTGVhdmVYKTtcbiAgICB9XG59XG5cbi8vIEVudGVyWCgpOiBXaWxsIGVudGVyIGVhY2ggY2VsbCBvbiB0aGUgeC1heGlzIHNlbGVjdGlvbi4gXG5mdW5jdGlvbiBFbnRlclgoZSl7XG4gICAgY29uc29sZS5sb2coZSk7IC8vIFRlc3RpbmcgXG4gICAgY29uc29sZS5sb2coZS50YXJnZXQpOyAvLyBUZXN0aW5nIFxuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmRhdGFzZXQueCk7IC8vIFRlc3RpbmcgXG4gICAgY29uc29sZS5sb2coZS50YXJnZXQuZGF0YXNldC55KTsgLy8gVGVzdGluZ1xuICAgIGNvbnNvbGUubG9nKCdcXG4nKTsgLy8gVGVzdGluZ1xuIFxuICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnh9XCJdW2RhdGEteT1cIiR7ZS50YXJnZXQuZGF0YXNldC55fVwiXWApO1xuICAgIGNvbnN0IG5leHRDZWxsT25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7ZS50YXJnZXQuZGF0YXNldC54fVwiXVtkYXRhLXk9XCIke3BhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueSkgKyAxfVwiXWApO1xuICAgIGNvbnN0IG5leHRDZWxsVHdvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7ZS50YXJnZXQuZGF0YXNldC54fVwiXVtkYXRhLXk9XCIke3BhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueSkgKyAyfVwiXWApO1xuICAgIGNvbnN0IG5leHRDZWxsVGhyZWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnh9XCJdW2RhdGEteT1cIiR7cGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC55KSArIDN9XCJdYCk7XG5cbiAgICBpZiAoU2hpcERhdGEuc2hpcExlbmd0aCA9PT0gMClcbiAgICB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaG92ZXItdGVzdCcpOyBcbiAgICB9XG4gICAgZWxzZSBpZiAoU2hpcERhdGEuc2hpcExlbmd0aCA9PT0gMSlcbiAgICB7XG4gICAgICAgIGlmICghKHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueSkgPT09IDkpKVxuICAgICAgICB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXRlc3QnKTtcblxuICAgICAgICAgICAgY29uc3QgbmV4dENlbGxPbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnh9XCJdW2RhdGEteT1cIiR7cGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC55KSArIDF9XCJdYCk7XG4gICAgICAgICAgICBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuYWRkKCdob3Zlci10ZXN0Jyk7IFxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKFNoaXBEYXRhLnNoaXBMZW5ndGggPT09IDIpXG4gICAge1xuICAgICAgICBpZiAoISgocGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC55KSArIDIpID09PSAxMCkgJiYgISgocGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC55KSArIDEpID09PSA5KSAmJiAhKHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueSkgPT09IDkpKVxuICAgICAgICB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgICAgIG5leHRDZWxsT25lLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXRlc3QnKTsgXG4gICAgICAgICAgICBuZXh0Q2VsbFR3by5jbGFzc0xpc3QuYWRkKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoU2hpcERhdGEuc2hpcExlbmd0aCA9PT0gMylcbiAgICB7XG4gICAgICAgIGlmICghKChwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnkpICsgMykgPT09IDEwKSAmJiAhKChwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnkpICsgMikgPT09IDkpICYmICEoKHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueSkgKyAxKSA9PT0gOSkgJiYgIShwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnkpID09PSA5KSlcbiAgICAgICAge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgICAgICBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuYWRkKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgICAgICBuZXh0Q2VsbFR3by5jbGFzc0xpc3QuYWRkKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgICAgICBuZXh0Q2VsbFRocmVlLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIE5vdGU6IEkgY291bGQgcHV0IHRoaXMgaW4gaXRzIG93biBmdW5jdGlvbiwgYnV0IGZvciBub3cgSSB3aWxsIHVzZSB0aGUgRW50ZXJYIGZ1bmN0aW9uIHRvIHRlc3RcbiAgICAvLyB0aGlzIGFsb2dvcml0aG0gb3V0LiBcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnWDogJywgY2VsbC5kYXRhc2V0LngpOyBcbiAgICAgICAgY29uc29sZS5sb2coJ1k6ICcsIGNlbGwuZGF0YXNldC55KTsgXG4gICAgICAgIC8vIFRPRE86IFNoaXAgcGxhY2VtZW50IG9uIHRoZSBib2FyZCBjYW4gYmUgZG9uZSBpbnNpZGUgdGhpcyBmdW5jdGlvbi4gXG5cbiAgICAgICAgaWYgKCFTaGlwRGF0YS5zaGlwV2FzUGxhY2VkKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoU2hpcERhdGEuc2hpcExlbmd0aCA9PT0gMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiAoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ2VsbCBhbHJlYWR5IGNvbnRhaW5zIGEgc2hpcCcpOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcC1wbGFjZWQnKTsgXG4gICAgICAgICAgICAgICAgICAgIFNoaXBEYXRhLnNoaXBXYXNQbGFjZWQgPSB0cnVlOyAvLyBTdG9wcyB0aGUgcGxheWVyIGZyb20gcGxhY2luZyB0aGUgc2FtZSBzaGlwIG11bHRpcGxlIHRpbWVzIGFmdGVyIHByZXNzaW5nICdQbGFjZSBTaGlwJyBidXR0b24uIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAxKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmICgoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgJiYgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpKSBcbiAgICAgICAgICAgICAgICB8fCAoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgfHwgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpKSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDZWxsIGFscmVhZHkgY29udGlhbnMgYSBzaGlwJyk7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlZCcpO1xuICAgICAgICAgICAgICAgICAgICBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlZCcpO1xuICAgICAgICAgICAgICAgICAgICBTaGlwRGF0YS5zaGlwV2FzUGxhY2VkID0gdHJ1ZTsgLy8gU3RvcHMgdGhlIHBsYXllciBmcm9tIHBsYWNpbmcgdGhlIHNhbWUgc2hpcCBtdWx0aXBsZSB0aW1lcyBhZnRlciBwcmVzc2luZyAnUGxhY2UgU2hpcCcgYnV0dG9uLiBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAyKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmICgoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgJiYgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpICYmIG5leHRDZWxsVHdvLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSkgXG4gICAgICAgICAgICAgICAgfHwgKGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpIHx8IG5leHRDZWxsT25lLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSB8fCBuZXh0Q2VsbFR3by5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykpKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NlbGwgYWxyZWFkeSBjb250YWlucyBhIHNoaXAnKTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VkJyk7XG4gICAgICAgICAgICAgICAgICAgIG5leHRDZWxsT25lLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VkJyk7XG4gICAgICAgICAgICAgICAgICAgIG5leHRDZWxsVHdvLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VkJyk7XG4gICAgICAgICAgICAgICAgICAgIFNoaXBEYXRhLnNoaXBXYXNQbGFjZWQgPSB0cnVlOyAvLyBTdG9wcyB0aGUgcGxheWVyIGZyb20gcGxhY2luZyB0aGUgc2FtZSBzaGlwIG11bHRpcGxlIHRpbWVzIGFmdGVyIHByZXNzaW5nICdQbGFjZSBTaGlwJyBidXR0b24uIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKFNoaXBEYXRhLnNoaXBMZW5ndGggPT09IDMpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlZCcpO1xuICAgICAgICAgICAgICAgIG5leHRDZWxsT25lLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VkJyk7XG4gICAgICAgICAgICAgICAgbmV4dENlbGxUd28uY2xhc3NMaXN0LmFkZCgnc2hpcC1wbGFjZWQnKTtcbiAgICAgICAgICAgICAgICBuZXh0Q2VsbFRocmVlLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VkJyk7XG4gICAgICAgICAgICAgICAgU2hpcERhdGEuc2hpcFdhc1BsYWNlZCA9IHRydWU7IC8vIFN0b3BzIHRoZSBwbGF5ZXIgZnJvbSBwbGFjaW5nIHRoZSBzYW1lIHNoaXAgbXVsdGlwbGUgdGltZXMgYWZ0ZXIgcHJlc3NpbmcgJ1BsYWNlIFNoaXAnIGJ1dHRvbi4gXG4gICAgICAgICAgICB9ICBcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBTaGlwICR7U2hpcERhdGEuc2hpcHNQbGFjZWR9IGhhcyBhbHJlYWR5IGJlZW4gcGxhY2VkLmApOyAvLyBUZXN0aW5nIFxuICAgICAgICB9XG4gICAgfSk7XG59XG5cbi8vIExlYXZlWCgpOiBXaWxsIGxlYXZlIGVhY2ggY2VsbCBmcm9tIHRoZSB4LWF4aXMgc2VsZWN0aW9uLiBcbmZ1bmN0aW9uIExlYXZlWChlKXtcbiAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7ZS50YXJnZXQuZGF0YXNldC54fVwiXVtkYXRhLXk9XCIke2UudGFyZ2V0LmRhdGFzZXQueX1cIl1gKTtcbiAgICBjb25zdCBuZXh0Q2VsbE9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke2UudGFyZ2V0LmRhdGFzZXQueH1cIl1bZGF0YS15PVwiJHtwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnkpICsgMX1cIl1gKTtcbiAgICBjb25zdCBuZXh0Q2VsbFR3byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke2UudGFyZ2V0LmRhdGFzZXQueH1cIl1bZGF0YS15PVwiJHtwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnkpICsgMn1cIl1gKTtcbiAgICBjb25zdCBuZXh0Q2VsbFRocmVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7ZS50YXJnZXQuZGF0YXNldC54fVwiXVtkYXRhLXk9XCIke3BhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueSkgKyAzfVwiXWApO1xuXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaG92ZXItdGVzdCcpKVxuICAgIHtcbiAgICAgICAgaWYgKFNoaXBEYXRhLnNoaXBMZW5ndGggPT09IDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItdGVzdCcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKFNoaXBEYXRhLnNoaXBMZW5ndGggPT09IDEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItdGVzdCcpO1xuICAgICAgICAgICAgbmV4dENlbGxPbmUuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItdGVzdCcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKFNoaXBEYXRhLnNoaXBMZW5ndGggPT09IDIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItdGVzdCcpO1xuICAgICAgICAgICAgbmV4dENlbGxPbmUuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItdGVzdCcpO1xuICAgICAgICAgICAgbmV4dENlbGxUd28uY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItdGVzdCcpOyBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAzKVxuICAgICAgICB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgICAgIG5leHRDZWxsT25lLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgICAgIG5leHRDZWxsVHdvLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgICAgIG5leHRDZWxsVGhyZWUuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItdGVzdCcpOyBcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gQ2hhbmdlVG9ZQXhpcygpOiBXaWxsIGNoYW5nZSB0aGUgYXhpcyBzZWxlY3Rpb24gb24gdGhlIGdhbWVib2FyZCB0byB0aGUgeS1heGlzLiBcbmZ1bmN0aW9uIENoYW5nZVRvWUF4aXMoKXtcbiAgICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5ZXItb25lLWJvYXJkID4gZGl2ID4gZGl2Jyk7IFxuICAgIGNvbnN0IHhDb29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lYm9hcmQtY29udGFpbmVyID4gZGl2Om50aC1jaGlsZCgxKSA+IGRpdiA+IGJ1dHRvbjpudGgtY2hpbGQoMSknKTtcblxuICAgIEF4aXNTZWxlY3RlZC5heGlzU2VsZWN0ZWQgPSB0cnVlO1xuICAgIGNvbnNvbGUubG9nKCdYIG9yIFkgYXhpcyBoYXMgYmVlbiBzZWxlY3RlZDogJywgQXhpc1NlbGVjdGVkLmF4aXNTZWxlY3RlZCk7IC8vIFRlc3RpbmcgXG4gICAgXG4gICAgLy8gUmVtb3ZlIEVudGVyWCBhbmQgTGVhdmVYIEV2ZW50IExpc3RlbmVycy5cbiAgICBjZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIEVudGVyWCk7IFxuICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBMZWF2ZVgpOyBcbiAgICB9KTsgXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNlbGxzLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgICAgY2VsbHNbaV0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIEVudGVyWSk7XG5cbiAgICAgICAgY2VsbHNbaV0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIExlYXZlWSk7XG4gICAgfVxufVxuXG4vLyBFbnRlclkoKTogV2lsbCBlbnRlciBlYWNoIGNlbGwgb24gdGhlIHktYXhpcyBzZWxlY3Rpb24uXG5mdW5jdGlvbiBFbnRlclkoZSl7XG4gICAgY29uc29sZS5sb2coZSk7IC8vIFRlc3RpbmcgXG4gICAgY29uc29sZS5sb2coZS50YXJnZXQpOyAvLyBUZXN0aW5nXG4gICAgY29uc29sZS5sb2coZS50YXJnZXQuZGF0YXNldC54KTsgLy8gVGVzdGluZ1xuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmRhdGFzZXQueSk7IC8vIFRlc3RpbmcgXG4gICAgY29uc29sZS5sb2coJ1xcbicpOyAvLyBUZXN0aW5nXG5cbiAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7ZS50YXJnZXQuZGF0YXNldC54fVwiXVtkYXRhLXk9XCIke2UudGFyZ2V0LmRhdGFzZXQueX1cIl1gKTtcbiAgICBjb25zdCBuZXh0Q2VsbE9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke3BhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueCkgKyAxfVwiXVtkYXRhLXk9XCIke2UudGFyZ2V0LmRhdGFzZXQueX1cIl1gKTtcbiAgICBjb25zdCBuZXh0Q2VsbFR3byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke3BhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueCkgKyAyfVwiXVtkYXRhLXk9XCIke2UudGFyZ2V0LmRhdGFzZXQueX1cIl1gKTtcbiAgICBjb25zdCBuZXh0Q2VsbFRocmVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7cGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC54KSArIDN9XCJdW2RhdGEteT1cIiR7ZS50YXJnZXQuZGF0YXNldC55fVwiXWApO1xuXG4gICAgaWYgKFNoaXBEYXRhLnNoaXBMZW5ndGggPT09IDApXG4gICAge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXRlc3QnKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoU2hpcERhdGEuc2hpcExlbmd0aCA9PT0gMSlcbiAgICB7XG4gICAgICAgIGlmICghKHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueCkgPT09IDkpKVxuICAgICAgICB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgICAgIG5leHRDZWxsT25lLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAyKVxuICAgIHtcbiAgICAgICAgaWYgKCEoKHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueCkgKyAyKSA9PT0gMTApICYmICEoKHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueCkgKyAxKSA9PT0gOSkgJiYgIShwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LngpID09PSA5KSlcbiAgICAgICAge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgICAgICBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuYWRkKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgICAgICBuZXh0Q2VsbFR3by5jbGFzc0xpc3QuYWRkKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoU2hpcERhdGEuc2hpcExlbmd0aCA9PT0gMylcbiAgICB7XG4gICAgICAgIGlmICghKChwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LngpICsgMykgPT09IDEwKSAmJiAhKChwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LngpICsgMikgPT09IDkpICYmICEoKHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueCkgKyAxKSA9PT0gOSkgJiYgIShwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LngpID09PSA5KSlcbiAgICAgICAge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgICAgICBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuYWRkKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgICAgICBuZXh0Q2VsbFR3by5jbGFzc0xpc3QuYWRkKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgICAgICBuZXh0Q2VsbFRocmVlLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgfVxuICAgIH0gICBcblxuICAgIC8vIFBsYWNlcyB0aGUgc2hpcHMgb24gdGhlIGJvYXJkIGNlbGxzOlxuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiWDogXCIsIGNlbGwuZGF0YXNldC54KTsgLy8gVGVzdGluZyBcbiAgICAgICAgY29uc29sZS5sb2coXCJZOiBcIiwgY2VsbC5kYXRhc2V0LnkpOyAvLyBUZXN0aW5nIFxuXG4gICAgICAgIGlmICghU2hpcERhdGEuc2hpcFdhc1BsYWNlZClcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKFNoaXBEYXRhLnNoaXBMZW5ndGggPT09IDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoU2hpcERhdGEuc2hpcExlbmd0aCA9PT0gMSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VkJyk7XG4gICAgICAgICAgICAgICAgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmFkZCgnc2hpcC1wbGFjZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKFNoaXBEYXRhLnNoaXBMZW5ndGggPT09IDIpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlZCcpO1xuICAgICAgICAgICAgICAgIG5leHRDZWxsT25lLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VkJyk7XG4gICAgICAgICAgICAgICAgbmV4dENlbGxUd28uY2xhc3NMaXN0LmFkZCgnc2hpcC1wbGFjZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKFNoaXBEYXRhLnNoaXBMZW5ndGggPT09IDMpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlZCcpO1xuICAgICAgICAgICAgICAgIG5leHRDZWxsT25lLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VkJyk7XG4gICAgICAgICAgICAgICAgbmV4dENlbGxUd28uY2xhc3NMaXN0LmFkZCgnc2hpcC1wbGFjZWQnKTtcbiAgICAgICAgICAgICAgICBuZXh0Q2VsbFRocmVlLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VkJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFNoaXBEYXRhLnNoaXBXYXNQbGFjZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBTaGlwICR7U2hpcERhdGEuc2hpcHNQbGFjZWR9IGhhcyBhbHJlYWR5IGJlZW4gcGxhY2VkLmApOyAvLyBUZXN0aW5nIFxuICAgICAgICB9XG4gICAgfSk7XG59XG5cbi8vIExlYXZlWSgpOiBXaWxsIGxlYXZlIGVhY2ggY2VsbCBmcm9tIHRoZSB5LWF4aXMgc2VsZWN0aW9uLlxuZnVuY3Rpb24gTGVhdmVZKGUpe1xuICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnh9XCJdW2RhdGEteT1cIiR7ZS50YXJnZXQuZGF0YXNldC55fVwiXWApO1xuICAgIGNvbnN0IG5leHRDZWxsT25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7cGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC54KSArIDF9XCJdW2RhdGEteT1cIiR7ZS50YXJnZXQuZGF0YXNldC55fVwiXWApO1xuICAgIGNvbnN0IG5leHRDZWxsVHdvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7cGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC54KSArIDJ9XCJdW2RhdGEteT1cIiR7ZS50YXJnZXQuZGF0YXNldC55fVwiXWApO1xuICAgIGNvbnN0IG5leHRDZWxsVGhyZWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LngpICsgM31cIl1bZGF0YS15PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnl9XCJdYCk7XG5cbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdob3Zlci10ZXN0JykpXG4gICAge1xuICAgICAgICBpZiAoU2hpcERhdGEuc2hpcExlbmd0aCA9PT0gIDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItdGVzdCcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKFNoaXBEYXRhLnNoaXBMZW5ndGggPT09IDEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItdGVzdCcpO1xuICAgICAgICAgICAgbmV4dENlbGxPbmUuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItdGVzdCcpOyBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAyKVxuICAgICAgICB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgICAgIG5leHRDZWxsT25lLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgICAgIG5leHRDZWxsVHdvLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTsgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoU2hpcERhdGEuc2hpcExlbmd0aCA9PT0gMylcbiAgICAgICAge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgICAgICBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgICAgICBuZXh0Q2VsbFR3by5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgICAgICBuZXh0Q2VsbFRocmVlLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTsgXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vU2hpcFwiO1xuLyoqIEdhbWVib2FyZFxuICogLT4gR2FtZWJvYXJkcyBzaG91bGQgYmUgYWJsZSB0byBwbGFjZSBzaGlwcyBhdCBzcGVjaWZpYyBjb29yZGluYXRlcyBieSBcbiAqIGNhbGxpbmcgdGhlICdzaGlwIGZhY3RvcnkgZnVuY3Rpb24nLiBcbiAqL1xuXG4vLyBHYW1lYm9hcmQoKTogR2FtZWJvYXJkIGZhY3RvcnkgZnVuY3Rpb24uXG5leHBvcnQgY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IGdhbWVib2FyZCA9IFsuLi5BcnJheSgxMCldLm1hcCgoKSA9PiBBcnJheSgxMCkuZmlsbChcIlwiKSk7IFxuICAgIGxldCBzaGlwc09uQm9hcmQgPSAwOyBcblxuICAgIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoKSA9PiB7XG4gICAgICAgIC8vIFdpbGwgdGFrZSBhIHBhaXIgb2YgY29vcmRpbmF0ZXMsIGRldGVybWluZXMgd2hldGhlciBvciBub3QgdGhlIGF0dGFjayBoaXQgYSBzaGlwIGFuZFxuICAgICAgICAvLyB0aGVuIHNlbmRzIHRoZSAnaGl0JyBmdW5jdGlvbiB0byB0aGUgY29ycmVjdCBzaGlwLCBvciByZWNvcmRzIHRoZSBjb29yZGluYXRlcyBvZiB0aGVcbiAgICAgICAgLy8gbWlzc2VkIHNob3QuIFxuICAgIH1cblxuXG4gICAgcmV0dXJuIHtnYW1lYm9hcmQsIHNoaXBzT25Cb2FyZCwgcmVjZWl2ZUF0dGFjaywgU2hpcH07XG59IiwiLy8gU2hpcCgpOiBTaGlwIGZhY3RvcnkgZnVuY3Rpb24uIFxuZXhwb3J0IGNvbnN0IFNoaXAgPSAoKSA9PiB7XG4gICAgbGV0IGRlZmF1bHRMZW5ndGhzID0gWzAsIDAsIDAsIDAsIDEsIDEsIDEsIDIsIDIsIDNdOyBcbiAgICBsZXQgbGVuZ3RoID0gMDtcbiAgICBsZXQgaGl0cyA9IDA7XG4gICAgbGV0IHN1bmsgPSBmYWxzZTtcblxuICAgIC8vIGhpdCgpOiBXaWxsIGdhdGhlciB0aGUgYW1vdW50IG9mIGhpdHMgdGhlIHNoaXAgd2lsbCBnZXQuXG4gICAgY29uc3QgaGl0ID0gKGlzSGl0KSA9PiB7XG4gICAgICAgIHJldHVybiBoaXRzICs9IGlzSGl0O1xuICAgIH1cblxuICAgIC8vIGlzU3VuaygpOiBXaWxsIGRldGVybWluZSBpZiB0aGUgc2hpcCBoYXMgc3Vuay4gXG4gICAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gc3VuayA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtoaXQsIGlzU3VuaywgZGVmYXVsdExlbmd0aHMsIGxlbmd0aH07XG59XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogfFRlc3RpbmcgQXJlYSBJZGVudGlmaWVycyBhbmQgQ29tcG9uZW50c3wgKi9cbiNjb250ZW50ID4gZGl2ID4gYnV0dG9ue1xuICAgIHBhZGRpbmc6IDEwcHggNXB4IDEwcHggNXB4O1xuICAgIGZvbnQtZmFtaWx5Om1vbm9zcGFjZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Y29yYWw7IFxuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNjb250ZW50ID4gZGl2ID4gYnV0dG9uOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGJsdWU7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyogfE1haW4gQ29udGVudCBTZWN0aW9ufCAqL1xuI2NvbnRlbnR7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAgIHBhZGRpbmc6IDEwcHg7IFxufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIHxHYW1lYm9hcmQgQ29udGFpbmVyfCAqL1xuLmdhbWVib2FyZC1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEwcHg7XG5cbiAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgd2lkdGg6IDEwMDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuLyogUGxheWVyIE9uZSBCb2FyZCAqL1xuLnBsYXllci1vbmUtYm9hcmR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XG4gICAgcGFkZGluZzogMTBweDtcbn1cbi5wbGF5ZXItb25lLWJvYXJkID4gZGl2eyAvKiBjb2x1bW5zICovXG4gICAgZGlzcGxheTogZmxleDtcblxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xuICAgIC8qIHBhZGRpbmc6IDVweDsgKi9cbn1cbi5wbGF5ZXItb25lLWJvYXJkID4gZGl2ID4gZGl2eyAvKiByb3dzICovXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRjb3JhbDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xufVxuXG4vKiBQbGF5ZXIgVHdvIEJvYXJkICovXG4ucGxheWVyLXR3by1ib2FyZHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBwdXJwbGU7XG59XG5cblxuLyogaG92ZXItdGVzdCAqL1xuLmhvdmVyLXRlc3R7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2sgIWltcG9ydGFudDtcbn1cblxuLyogc2hpcC1wbGFjZWQgLSBkaXNwbGF5cyBlYWNoIHNoaXAgcGxhY2VkIG9uIHRoZSBib2FyZC4gKi9cbi5zaGlwLXBsYWNlZHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjayAhaW1wb3J0YW50O1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyogfEludGVmYWNlIFNlY3Rpb258ICovXG4uaW50ZXJmYWNle1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBcbiAgICBib3JkZXI6IDFweCBzb2xpZCBvcmFuZ2U7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLyogY3VycmVudC1jb29yZGluYXRlIC0gVGhlIGN1cnJlbnQgY29vcmRpbmF0ZSBjaG9vc2VuIGJ5IHRoZSB1c2VyLiAqL1xuLmN1cnJlbnQtY29vcmRpbmF0ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Y29yYWw7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDhDQUE4QztBQUM5QztJQUNJLDBCQUEwQjtJQUMxQixxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1QixlQUFlO0FBQ25CO0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0IsMkJBQTJCO0FBQy9COztBQUVBLDRLQUE0SztBQUM1Syw0S0FBNEs7QUFDNUssMkJBQTJCO0FBQzNCO0lBQ0kscUJBQXFCO0lBQ3JCLGFBQWE7QUFDakI7O0FBRUEsNEtBQTRLO0FBQzVLLDRLQUE0SztBQUM1SywwQkFBMEI7QUFDMUI7SUFDSSxhQUFhO0lBQ2IsU0FBUzs7SUFFVCxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGFBQWE7SUFDYixjQUFjO0FBQ2xCOztBQUVBLHFCQUFxQjtBQUNyQjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7O0lBRXRCLHVCQUF1QjtJQUN2QixhQUFhO0FBQ2pCO0FBQ0EseUJBQXlCLFlBQVk7SUFDakMsYUFBYTs7SUFFYiw2QkFBNkI7SUFDN0Isa0JBQWtCO0FBQ3RCO0FBQ0EsK0JBQStCLFNBQVM7SUFDcEMsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQSxxQkFBcUI7QUFDckI7SUFDSSx3QkFBd0I7QUFDNUI7OztBQUdBLGVBQWU7QUFDZjtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQSwwREFBMEQ7QUFDMUQ7SUFDSSxrQ0FBa0M7QUFDdEM7OztBQUdBLDRLQUE0SztBQUM1Syw0S0FBNEs7QUFDNUssdUJBQXVCO0FBQ3ZCO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjs7SUFFdEIsd0JBQXdCO0lBQ3hCLGFBQWE7QUFDakI7O0FBRUEscUVBQXFFO0FBQ3JFO0lBQ0ksNEJBQTRCO0lBQzVCLDRCQUE0QjtBQUNoQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiB8VGVzdGluZyBBcmVhIElkZW50aWZpZXJzIGFuZCBDb21wb25lbnRzfCAqL1xcbiNjb250ZW50ID4gZGl2ID4gYnV0dG9ue1xcbiAgICBwYWRkaW5nOiAxMHB4IDVweCAxMHB4IDVweDtcXG4gICAgZm9udC1mYW1pbHk6bW9ub3NwYWNlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGNvcmFsOyBcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jY29udGVudCA+IGRpdiA+IGJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGJsdWU7XFxufVxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKiB8TWFpbiBDb250ZW50IFNlY3Rpb258ICovXFxuI2NvbnRlbnR7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG4gICAgcGFkZGluZzogMTBweDsgXFxufVxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKiB8R2FtZWJvYXJkIENvbnRhaW5lcnwgKi9cXG4uZ2FtZWJvYXJkLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcblxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB3aWR0aDogMTAwMHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLyogUGxheWVyIE9uZSBCb2FyZCAqL1xcbi5wbGF5ZXItb25lLWJvYXJke1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuLnBsYXllci1vbmUtYm9hcmQgPiBkaXZ7IC8qIGNvbHVtbnMgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG5cXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICovXFxuICAgIC8qIHBhZGRpbmc6IDVweDsgKi9cXG59XFxuLnBsYXllci1vbmUtYm9hcmQgPiBkaXYgPiBkaXZ7IC8qIHJvd3MgKi9cXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRjb3JhbDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4vKiBQbGF5ZXIgVHdvIEJvYXJkICovXFxuLnBsYXllci10d28tYm9hcmR7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHB1cnBsZTtcXG59XFxuXFxuXFxuLyogaG92ZXItdGVzdCAqL1xcbi5ob3Zlci10ZXN0e1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjayAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKiBzaGlwLXBsYWNlZCAtIGRpc3BsYXlzIGVhY2ggc2hpcCBwbGFjZWQgb24gdGhlIGJvYXJkLiAqL1xcbi5zaGlwLXBsYWNlZHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2sgIWltcG9ydGFudDtcXG59XFxuXFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qIHxJbnRlZmFjZSBTZWN0aW9ufCAqL1xcbi5pbnRlcmZhY2V7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIFxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBvcmFuZ2U7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi8qIGN1cnJlbnQtY29vcmRpbmF0ZSAtIFRoZSBjdXJyZW50IGNvb3JkaW5hdGUgY2hvb3NlbiBieSB0aGUgdXNlci4gKi9cXG4uY3VycmVudC1jb29yZGluYXRle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGNvcmFsO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vdXRpbHMvU2hpcFwiO1xuXG5pbXBvcnQgeyBJbml0aWFsaXplRE9NIH0gZnJvbSBcIi4vbW9kdWxlcy9Eb21Db250ZW50XCI7XG5cbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmltcG9ydCB0ZXN0U291bmQgZnJvbSAnLi9zb3VuZHMvbWl4a2l0LXJldHJvLWdhbWUtbm90aWZpY2F0aW9uLTIxMi53YXYnO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBOb3Rlczpcbi8vIDEpIEkgb25seSBoYXZlIHRvIHRlc3QgdGhlIHNoaXAgb2JqZWN0cyBwdWJsaWMgaW50ZXJmYWNlLiBPbmx5ICdtZXRob2RzIG9yIHByb3BlcnRpZXMnIHRoYXQgYXJlIHVzZWQgb3V0c2lkZSBvZiB5b3VyIHNoaXAgb2JqZWN0IFxuLy8gbmVlZCB1bml0IHRlc3RzLiBcbi8vIFxuLy8gMikgTm90ZSB0aGF0IHdlIGhhdmUgbm90IHlldCBjcmVhdGVkIGFueSBVc2VyIEludGVyZmFjZS4gV2Ugc2hvdWxkIGtub3dcbi8vIG91ciBjb2RlIGlzIGNvbWluZyB0b2dldGhlciBieSBydW5uaW5nIHRoZSB0ZXN0cy4gWW91IHNob3VsZG4ndCBiZVxuLy8gcmVseWluZyBvbiAnY29uc29sZS5sb2cnIG9yICdET00gbWV0aG9kcycgdG8gbWFrZSBzdXJlIHlvdXIgY29kZSBpc1xuLy8gZG9pbmcgd2hhdCB5b3UgZXhwZWN0IGl0IHRvLlxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIHxUZXN0aW5nIEFyZWF8XG5jb25zb2xlLmxvZygnfFRlc3RpbmcgQXJlYXwnKTtcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuY29uc29sZS5sb2coY29udGVudCk7IC8vIFRlc3RpbmcgXG5cbmNvbnN0IGJ1dHRvbk9uZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgYnV0dG9uT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7IFxuYnV0dG9uT25lLnRleHRDb250ZW50ID0gJ0NsaWNrIE1lISc7XG5cbmNvbnN0IG5ld1NvdW5kID0gbmV3IEF1ZGlvKHRlc3RTb3VuZCk7XG5cbi8vIGJ1dHRvbk9uZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbi8vICAgICBjb25zb2xlLmxvZygnWW91IGNsaWNrZWQgdGhlIGJ1dHRvbiEnKTsgLy8gVGVzdGluZ1xuLy8gICAgIG5ld1NvdW5kLnBsYXkoKTtcbi8vIH0pOyBcblxuLy8gYnV0dG9uT25lQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbk9uZSk7XG4vLyBjb250ZW50LmFwcGVuZENoaWxkKGJ1dHRvbk9uZUNvbnRhaW5lcik7XG4vLyBjb25zb2xlLmxvZygnXFxuJyk7IC8vIFRlc3RpbmcgXG5cbi8qKiB8U3ByZWFkIFN5bnRheCguLi4pfFxuICogVGhlIHNwcmVhZCguLi4pIHN5bnRheCBhbGxvdyBhbiBpdGVyYWJsZSwgc3VjaCBhcyBhbiBhcnJheSBvciBzdHJpbmcsIHRvIGJlIGV4cGFuZGVkIGluIHBsYWNlcyBcbiAqIHdoZXJlIHplcm8gb3IgbW9yZSBhcmd1bWVudHMgKGZvciBmdW5jdGlvbiBjYWxscykgb3IgZWxlbWVudHMgKGZvciBhcnJheSBsaXRlcmFscykgYXJlIGV4cGVjdGVkLlxuICogSW4gYW4gb2JqZWN0IGxpdGVyYWwsIHRoZSBzcHJlYWQgc3ludGF4IGVudW1lcmF0ZXMgdGhlIHByb3BlcnRpZXMgb2YgYW4gb2JqZWN0IGFuZCBhZGRzIHRoZSBrZXktdmFsdWUgcGFpcnNcbiAqIHRvIHRoZSBvYmplY3QgYmVpbmcgY3JlYXRlZC4gXG4gKiBcbiAqIFNwcmVhZCBzeW50YXggbG9va3MgZXhhY3RseSBsaWtlIHJlc3Qgc3ludGF4LiBJbiBhIHdheSwgc3ByZWFkIHN5bnRheCBpcyB0aGUgb3Bwb3NpdGUgb2YgcmVzdCBzeW50YXguXG4gKiBTcHJlYWQgc3ludGF4IFwiZXhwYW5kc1wiIGFuIGFycmF5IGludG8gaXRzIGVsZW1lbnRzLCB3aGlsZSByZXN0IHN5bnRheCBjb2xsZWN0cyBtdWx0aXBsZSBlbGVtZW50cyBhbmRcbiAqIFwiY29uZGVuc2VzXCIgdGhlbSBpbnRvIGEgc2luZ2xlIGVsZW1lbnQuIFxuICogXG4gKiBOb3RlOiBVc2luZyB0aGUgXCJtYXAgYXJyYXkgbWV0aG9kXCIgd2lsbCBjcmVhdGUgYSBuZXcgYXJyYXkgZnJvbSB0aGUgY2FsbGluZyBbLi4uYXJyYXkoOCldIHRoYXQgaXNcbiAqIHNwcmVhZGluZyA4IGVsZW1lbnRzIGludG8gaXQuIEVhY2ggZWxlbWVudCB3aWxsIGJlIGFuIEFycmF5IG9mIDggZWxlbWVudHMgdGhhdCBpcyBmaWxsZWQgd2l0aCAoXCJcIik7XG4gKi9cbmNvbnN0IGFyclRlc3QgPSBbLi4uQXJyYXkoOCldLm1hcCgoKSA9PiBBcnJheSg4KS5maWxsKFwiXCIpKTsgXG5jb25zb2xlLmxvZygnVGhlIEFycmF5OiAnLCBhcnJUZXN0KTsgLy8gVGVzdGluZ1xuY29uc29sZS5sb2coJ1xcbicpOyAvLyBUZXN0aW5nXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5Jbml0aWFsaXplRE9NKCk7Il0sIm5hbWVzIjpbIkdhbWVib2FyZCIsIkF4aXNTZWxlY3RlZCIsImF4aXNTZWxlY3RlZCIsIk5ld0dhbWVTZWxlY3RlZCIsIm5ld0dhbWVTZWxlY3RlZCIsIlNoaXBEYXRhIiwibGVuZ3RoSW5kZXgiLCJzaGlwc1BsYWNlZCIsInNoaXBMZW5ndGgiLCJzaGlwc09uQm9hcmQiLCJwbGFjZW1lbnRDb21tZW5jZWQiLCJzaGlwV2FzUGxhY2VkIiwiQXhpc0NoYW5nZSIsImF4aXNDaGFuZ2UiLCJJbml0aWFsaXplRE9NIiwiY29uc29sZSIsImxvZyIsIkdhbWVib2FyZERPTSIsIkludGVyZmFjZURPTSIsIlBsYXllck9uZURPTSIsIlBsYXllclR3b0RPTSIsIk51bWJlck9mU2hpcHNQbGFjZWQiLCJudW1iZXJPZlNoaXBzUGxhY2VkIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJjb25jYXQiLCJjb250ZW50IiwiZ2FtZWJvYXJkQ29udGFpbmVyIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwicGxheWVyT25lQm9hcmQiLCJwbGF5ZXJPbmUiLCJpIiwiZ2FtZWJvYXJkIiwibGVuZ3RoIiwicm93IiwiaiIsImNlbGwiLCJkYXRhc2V0IiwieCIsInkiLCJwbGF5ZXJUd28iLCJQbGFjZVNoaXBzIiwiZSIsImNlbGxzIiwicXVlcnlTZWxlY3RvckFsbCIsInhDb29yZCIsInlDb29yZCIsImJvYXJkIiwic2hpcCIsIlNoaXAiLCJkZWZhdWx0TGVuZ3RocyIsImFkZEV2ZW50TGlzdGVuZXIiLCJFbnRlclgiLCJMZWF2ZVgiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiRW50ZXJZIiwiTGVhdmVZIiwicGxheWVySW50ZXJmYWNlIiwibmV3R2FtZSIsInBsYWNlU2hpcCIsImNvb3JkaW5hdGVDb250YWluZXIiLCJyZW1vdmUiLCJOZXdHYW1lIiwiQXhpc0RPTSIsIkNoYW5nZVRvWEF4aXMiLCJmb3JFYWNoIiwidGFyZ2V0IiwibmV4dENlbGxPbmUiLCJwYXJzZUludCIsIm5leHRDZWxsVHdvIiwibmV4dENlbGxUaHJlZSIsImNvbnRhaW5zIiwiQ2hhbmdlVG9ZQXhpcyIsIl90b0NvbnN1bWFibGVBcnJheSIsIkFycmF5IiwibWFwIiwiZmlsbCIsInJlY2VpdmVBdHRhY2siLCJoaXRzIiwic3VuayIsImhpdCIsImlzSGl0IiwiaXNTdW5rIiwidGVzdFNvdW5kIiwiZ2V0RWxlbWVudEJ5SWQiLCJidXR0b25PbmVDb250YWluZXIiLCJidXR0b25PbmUiLCJuZXdTb3VuZCIsIkF1ZGlvIiwiYXJyVGVzdCJdLCJzb3VyY2VSb290IjoiIn0=