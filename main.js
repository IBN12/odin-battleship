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
  shipLength: 0,
  shipsOnBoard: 0,
  placementCommenced: false
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
    var board = (0,_utils_Gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();
    var ship = board.Ship();
    ShipData.shipLength = ship.defaultLengths[ShipData.lengthIndex];
    console.log('Ship number to be placed: ', ShipData.lengthIndex + 1); // Testing 
    console.log('The length of the ship to be placed: ', ShipData.shipLength); // Testing 
    console.log('\n'); // Testing

    ShipData.lengthIndex++;
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
  placeShip.textContent = 'Place Ship';
  var coordinateContainer = document.createElement('div');
  var xCoord = document.createElement('button');
  xCoord.textContent = 'x';
  var yCoord = document.createElement('button');
  yCoord.textContent = 'y';
  coordinateContainer.appendChild(xCoord);
  coordinateContainer.appendChild(yCoord);
  playerInterface.appendChild(newGame);
  playerInterface.appendChild(placeShip);
  playerInterface.appendChild(coordinateContainer);
  gameboardContainer.appendChild(playerInterface);

  // newGame.addEventListener('click', NewGame);

  placeShip.addEventListener('click', function (e) {
    ShipData.placementCommenced = true;
    PlaceShips(e);
  });
  xCoord.addEventListener('click', function (e) {
    ShipData.placementCommenced = false;
    AxisChange.axisChange = 1;
    PlaceShips(e);
  });
  yCoord.addEventListener('click', function (e) {
    ShipData.placementCommenced = false;
    AxisChange.axisChange = 2;
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
  if (!(parseInt(e.target.dataset.y) === 9)) {
    if (ShipData.shipLength === 0) {
      cell.classList.add('hover-test');
    } else if (ShipData.shipLength === 1) {
      cell.classList.add('hover-test');
      nextCellOne.classList.add('hover-test');
    } else if (ShipData.shipLength === 2) {
      cell.classList.add('hover-test');
      nextCellOne.classList.add('hover-test');
      nextCellTwo.classList.add('hover-test');
    } else if (ShipData.shipLength === 3) {
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
  var nextCell = document.querySelector("[data-x=\"".concat(parseInt(e.target.dataset.x) + 1, "\"][data-y=\"").concat(e.target.dataset.y, "\"]"));
  if (!(parseInt(e.target.dataset.x) === 9)) {
    cell.classList.add('hover-test');
    nextCell.classList.add('hover-test');
  }
}

// LeaveY(): Will leave each cell from the y-axis selection.
function LeaveY(e) {
  var cell = document.querySelector("[data-x=\"".concat(e.target.dataset.x, "\"][data-y=\"").concat(e.target.dataset.y, "\"]"));
  var nextCell = document.querySelector("[data-x=\"".concat(parseInt(e.target.dataset.x) + 1, "\"][data-y=\"").concat(e.target.dataset.y, "\"]"));
  if (e.target.classList.contains('hover-test')) {
    cell.classList.remove('hover-test');
    nextCell.classList.remove('hover-test');
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

/***************************************************************************************************************************************************************************/
/***************************************************************************************************************************************************************************/
/* |Inteface Section| */
.interface{
    display: flex;
    flex-direction: column;
    
    border: 1px solid orange;
    padding: 10px;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,8CAA8C;AAC9C;IACI,0BAA0B;IAC1B,qBAAqB;IACrB,4BAA4B;IAC5B,4BAA4B;IAC5B,eAAe;AACnB;AACA;IACI,2BAA2B;IAC3B,2BAA2B;AAC/B;;AAEA,4KAA4K;AAC5K,4KAA4K;AAC5K,2BAA2B;AAC3B;IACI,qBAAqB;IACrB,aAAa;AACjB;;AAEA,4KAA4K;AAC5K,4KAA4K;AAC5K,0BAA0B;AAC1B;IACI,aAAa;IACb,SAAS;;IAET,sBAAsB;IACtB,aAAa;IACb,aAAa;IACb,cAAc;AAClB;;AAEA,qBAAqB;AACrB;IACI,aAAa;IACb,sBAAsB;;IAEtB,uBAAuB;IACvB,aAAa;AACjB;AACA,yBAAyB,YAAY;IACjC,aAAa;;IAEb,6BAA6B;IAC7B,kBAAkB;AACtB;AACA,+BAA+B,SAAS;IACpC,4BAA4B;IAC5B,YAAY;IACZ,WAAW;IACX,YAAY;AAChB;;AAEA,qBAAqB;AACrB;IACI,wBAAwB;AAC5B;;;AAGA,eAAe;AACf;IACI,kCAAkC;AACtC;;AAEA,4KAA4K;AAC5K,4KAA4K;AAC5K,uBAAuB;AACvB;IACI,aAAa;IACb,sBAAsB;;IAEtB,wBAAwB;IACxB,aAAa;AACjB","sourcesContent":["/* |Testing Area Identifiers and Components| */\n#content > div > button{\n    padding: 10px 5px 10px 5px;\n    font-family:monospace;\n    background-color: lightcoral;\n    border: 1px solid lightcoral; \n    cursor: pointer;\n}\n#content > div > button:hover{\n    background-color: lightblue;\n    border: 1px solid lightblue;\n}\n\n/***************************************************************************************************************************************************************************/\n/***************************************************************************************************************************************************************************/\n/* |Main Content Section| */\n#content{\n    border: 1px solid red;\n    padding: 10px; \n}\n\n/***************************************************************************************************************************************************************************/\n/***************************************************************************************************************************************************************************/\n/* |Gameboard Container| */\n.gameboard-container{\n    display: flex;\n    gap: 10px;\n\n    border: 1px solid blue;\n    padding: 10px;\n    width: 1000px;\n    margin: 0 auto;\n}\n\n/* Player One Board */\n.player-one-board{\n    display: flex;\n    flex-direction: column;\n\n    border: 1px solid green;\n    padding: 10px;\n}\n.player-one-board > div{ /* columns */\n    display: flex;\n\n    /* border: 1px solid black; */\n    /* padding: 5px; */\n}\n.player-one-board > div > div{ /* rows */\n    border: 1px solid lightcoral;\n    padding: 5px;\n    width: 30px;\n    height: 30px;\n}\n\n/* Player Two Board */\n.player-two-board{\n    border: 1px solid purple;\n}\n\n\n/* hover-test */\n.hover-test{\n    border: 1px solid black !important;\n}\n\n/***************************************************************************************************************************************************************************/\n/***************************************************************************************************************************************************************************/\n/* |Inteface Section| */\n.interface{\n    display: flex;\n    flex-direction: column;\n    \n    border: 1px solid orange;\n    padding: 10px;\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBQSxDQUFJQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUVDLEdBQUcsQ0FBQztFQUFBLE9BQU1ELEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUFBLEVBQUM7QUFDMURoRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxhQUFhLEVBQUU0RSxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQ3JDN0UsT0FBTyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUNuQjs7QUFFQUYsa0VBQWEsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9Eb21Db250ZW50LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy91dGlscy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3V0aWxzL1NoaXAuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4uL3V0aWxzL0dhbWVib2FyZFwiO1xuXG4vLyBBeGlzU2VsZWN0ZWQoKTogV2lsbCBvcGVyYXRlIHRoZSBheGlzIHRoZSBjaGFuZ2UgYnkgYm9vbGVhbi5cbmNvbnN0IEF4aXNTZWxlY3RlZCA9ICgoKSA9PiB7XG4gICAgbGV0IGF4aXNTZWxlY3RlZCA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHtheGlzU2VsZWN0ZWR9O1xufSkoKTtcblxuLy8gTmV3R2FtZVNlbGVjdGVkKCk6IFRvZ2dsZXMgdHJ1ZSBpZiB0aGUgbmV3IGdhbWUgYnV0dG9uIHdhcyBjbGlja2VkLlxuY29uc3QgTmV3R2FtZVNlbGVjdGVkID0gKCgpID0+IHtcbiAgICBsZXQgbmV3R2FtZVNlbGVjdGVkID0gZmFsc2U7XG5cbiAgICByZXR1cm4ge25ld0dhbWVTZWxlY3RlZH07IFxufSkoKTtcblxuLy8gU2hpcERhdGEgTGl0ZXJsIE9iamVjdDogV2lsbCBjb250YWluIHNoaXAgZGF0YSB0byBjb250cm9sIHRoZSBmbG93IG9mIHNoaXBzIG9uIHRoZSBnYW1lYm9hcmQuIFxubGV0IFNoaXBEYXRhID0ge1xuICAgIGxlbmd0aEluZGV4OiAwLFxuICAgIHNoaXBMZW5ndGg6IDAsIFxuICAgIHNoaXBzT25Cb2FyZDogMCxcbiAgICBwbGFjZW1lbnRDb21tZW5jZWQ6IGZhbHNlLFxufVxuXG4vLyBBeGlzQ2hhbmdlIExpdGVyYWwgT2JqZWN0OiBcbmxldCBBeGlzQ2hhbmdlID0ge1xuICAgIGF4aXNDaGFuZ2U6IG51bGwsIFxufVxuXG4vLyBJbml0aWFsaXppbmdET00oKTogSW50aWFsaXppbmcgRE9NIENvbnRlbnQgZm9yIHRoZSBlbnRpcmUgYXBwbGljYXRpb24uIFxuZXhwb3J0IGZ1bmN0aW9uIEluaXRpYWxpemVET00oKXtcbiAgICBjb25zb2xlLmxvZyhcIkluaXRpYWxpemluZyBET00gQ29udGVudC4uLlwiKTsgLy8gVGVzdGluZyBcbiAgICBjb25zb2xlLmxvZygnXFxuJyk7IC8vIFRlc3RpbmcgXG5cbiAgICBHYW1lYm9hcmRET00oKTtcbiAgICBJbnRlcmZhY2VET00oKTtcbiAgICBQbGF5ZXJPbmVET00oKTtcbiAgICBQbGF5ZXJUd29ET00oKTtcbiAgICAvLyBBeGlzRE9NKCk7XG59XG5cbi8vIEdhbWVib2FyZERPTSgpOiBUaGUgZ2FtZWJvYXJkIERPTSBmb3IgdGhlIGVudGlyZSBhcHBsaWNhdGlvbi4gXG5mdW5jdGlvbiBHYW1lYm9hcmRET00oKXtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IGdhbWVib2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdhbWVib2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdnYW1lYm9hcmQtY29udGFpbmVyJyk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGdhbWVib2FyZENvbnRhaW5lcik7IFxufVxuXG4vLyBQbGF5ZXJPbmVET00oKTogVGhlIHBsYXllciBvbmUgYm9hcmQuXG5mdW5jdGlvbiBQbGF5ZXJPbmVET00oKXtcbiAgICBjb25zdCBnYW1lYm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZWJvYXJkLWNvbnRhaW5lcicpOyBcblxuICAgIGNvbnN0IHBsYXllck9uZUJvYXJkID0gR2FtZWJvYXJkKCk7IFxuXG4gICAgY29uc3QgcGxheWVyT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuICAgIHBsYXllck9uZS5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItb25lLWJvYXJkJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllck9uZUJvYXJkLmdhbWVib2FyZC5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcblxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHBsYXllck9uZUJvYXJkLmdhbWVib2FyZFtpXS5sZW5ndGg7IGorKyl7XG4gICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgICAgICAgICBjZWxsLmRhdGFzZXQueCA9IGk7XG4gICAgICAgICAgICBjZWxsLmRhdGFzZXQueSA9IGo7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICAgIH1cblxuICAgICAgICBwbGF5ZXJPbmUuYXBwZW5kQ2hpbGQocm93KTsgXG4gICAgfVxuXG4gICAgZ2FtZWJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllck9uZSk7IFxufVxuXG4vLyBQbGF5ZXJUd29ET00oKTogVGhlIHBsYXllciB0d28gYm9hcmQuXG5mdW5jdGlvbiBQbGF5ZXJUd29ET00oKXtcbiAgICBjb25zdCBnYW1lYm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZWJvYXJkLWNvbnRhaW5lcicpO1xuICAgIFxuICAgIGNvbnN0IHBsYXllclR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcbiAgICBwbGF5ZXJUd28uY2xhc3NMaXN0LmFkZCgncGxheWVyLXR3by1ib2FyZCcpOyBcblxuICAgIGdhbWVib2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJUd28pOyBcbn1cblxuXG5cbi8vIFBsYWNlU2hpcHMoKTogV2lsbCBwbGFjZSB0aGUgc2hpcHMgb24gdGhlIGdhbWVib2FyZC5cbmZ1bmN0aW9uIFBsYWNlU2hpcHMoZSl7XG4gICAgY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheWVyLW9uZS1ib2FyZCA+IGRpdiA+IGRpdicpOyBcbiAgICBjb25zdCB4Q29vcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZWJvYXJkLWNvbnRhaW5lciA+IGRpdjpudGgtY2hpbGQoMSkgPiBkaXYgPiBidXR0b246bnRoLWNoaWxkKDEpJyk7XG4gICAgY29uc3QgeUNvb3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVib2FyZC1jb250YWluZXIgPiBkaXY6bnRoLWNoaWxkKDEpID4gZGl2ID4gYnV0dG9uOm50aC1jaGlsZCgyKScpOyBcblxuICAgIGlmIChTaGlwRGF0YS5wbGFjZW1lbnRDb21tZW5jZWQpXG4gICAge1xuICAgICAgICBjb25zdCBib2FyZCA9IEdhbWVib2FyZCgpO1xuICAgICAgICBjb25zdCBzaGlwID0gYm9hcmQuU2hpcCgpO1xuICAgIFxuICAgICAgICBTaGlwRGF0YS5zaGlwTGVuZ3RoID0gc2hpcC5kZWZhdWx0TGVuZ3Roc1tTaGlwRGF0YS5sZW5ndGhJbmRleF07XG4gICAgXG4gICAgICAgIGNvbnNvbGUubG9nKCdTaGlwIG51bWJlciB0byBiZSBwbGFjZWQ6ICcsIFNoaXBEYXRhLmxlbmd0aEluZGV4ICsgMSk7IC8vIFRlc3RpbmcgXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaGUgbGVuZ3RoIG9mIHRoZSBzaGlwIHRvIGJlIHBsYWNlZDogJywgU2hpcERhdGEuc2hpcExlbmd0aCk7IC8vIFRlc3RpbmcgXG4gICAgICAgIGNvbnNvbGUubG9nKCdcXG4nKTsgLy8gVGVzdGluZ1xuICAgICAgICBcbiAgICAgICAgU2hpcERhdGEubGVuZ3RoSW5kZXgrKztcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNlbGxzLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgICAgaWYgKEF4aXNDaGFuZ2UuYXhpc0NoYW5nZSA9PT0gbnVsbClcbiAgICAgICAge1xuICAgICAgICAgICAgY2VsbHNbaV0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIEVudGVyWCk7XG4gICAgICAgICAgICBjZWxsc1tpXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgTGVhdmVYKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChBeGlzQ2hhbmdlLmF4aXNDaGFuZ2UgPT09IDEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNlbGxzW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBFbnRlclkpO1xuICAgICAgICAgICAgY2VsbHNbaV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIExlYXZlWSk7XG4gICAgICAgICAgICBjZWxsc1tpXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgRW50ZXJYKTtcbiAgICAgICAgICAgIGNlbGxzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBMZWF2ZVgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKEF4aXNDaGFuZ2UuYXhpc0NoYW5nZSA9PT0gMilcbiAgICAgICAge1xuICAgICAgICAgICAgY2VsbHNbaV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIEVudGVyWCk7XG4gICAgICAgICAgICBjZWxsc1tpXS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgTGVhdmVYKTtcbiAgICAgICAgICAgIGNlbGxzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBFbnRlclkpO1xuICAgICAgICAgICAgY2VsbHNbaV0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIExlYXZlWSk7IFxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBJbnRlZmFjZURPTSgpOiBJbnRlcmZhY2Ugc2VjdGlvbiBmb3IgdGhlIHVzZXIuIFxuZnVuY3Rpb24gSW50ZXJmYWNlRE9NKCl7XG4gICAgY29uc3QgZ2FtZWJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVib2FyZC1jb250YWluZXInKTtcbiAgICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5ZXItb25lLWJvYXJkID4gZGl2ID4gZGl2Jyk7XG5cbiAgICBjb25zdCBwbGF5ZXJJbnRlcmZhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwbGF5ZXJJbnRlcmZhY2UuY2xhc3NMaXN0LmFkZCgnaW50ZXJmYWNlJyk7XG5cbiAgICBjb25zdCBuZXdHYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbmV3R2FtZS50ZXh0Q29udGVudCA9ICdOZXcgR2FtZSc7XG5cbiAgICBjb25zdCBwbGFjZVNoaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTsgXG4gICAgcGxhY2VTaGlwLnRleHRDb250ZW50ID0gJ1BsYWNlIFNoaXAnO1xuXG4gICAgY29uc3QgY29vcmRpbmF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHhDb29yZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHhDb29yZC50ZXh0Q29udGVudCA9ICd4JztcbiAgICBjb25zdCB5Q29vcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB5Q29vcmQudGV4dENvbnRlbnQgPSAneSc7IFxuICAgIGNvb3JkaW5hdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoeENvb3JkKTtcbiAgICBjb29yZGluYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKHlDb29yZCk7IFxuXG4gICAgcGxheWVySW50ZXJmYWNlLmFwcGVuZENoaWxkKG5ld0dhbWUpO1xuICAgIHBsYXllckludGVyZmFjZS5hcHBlbmRDaGlsZChwbGFjZVNoaXApO1xuICAgIHBsYXllckludGVyZmFjZS5hcHBlbmRDaGlsZChjb29yZGluYXRlQ29udGFpbmVyKTsgXG4gICAgZ2FtZWJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllckludGVyZmFjZSk7XG5cbiAgICAvLyBuZXdHYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgTmV3R2FtZSk7XG5cbiAgICBwbGFjZVNoaXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgU2hpcERhdGEucGxhY2VtZW50Q29tbWVuY2VkID0gdHJ1ZTsgXG4gICAgICAgIFBsYWNlU2hpcHMoZSk7XG4gICAgfSk7XG5cbiAgICB4Q29vcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBTaGlwRGF0YS5wbGFjZW1lbnRDb21tZW5jZWQgPSBmYWxzZTtcbiAgICAgICAgQXhpc0NoYW5nZS5heGlzQ2hhbmdlID0gMTsgXG4gICAgICAgIFBsYWNlU2hpcHMoZSk7XG4gICAgfSk7XG5cbiAgICB5Q29vcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBTaGlwRGF0YS5wbGFjZW1lbnRDb21tZW5jZWQgPSBmYWxzZTsgXG4gICAgICAgIEF4aXNDaGFuZ2UuYXhpc0NoYW5nZSA9IDI7IFxuICAgICAgICBQbGFjZVNoaXBzKGUpO1xuICAgIH0pO1xuXG4gICAgLy8geENvb3JkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgQ2hhbmdlVG9YQXhpcyk7XG5cbiAgICAvLyB5Q29vcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBDaGFuZ2VUb1lBeGlzKTtcbn1cblxuLy8gTmV3R2FtZSgpOiBXaWxsIGJlZ2luIGEgbmV3IGdhbWUgZm9yIHRoZSBwbGF5ZXIuIFxuZnVuY3Rpb24gTmV3R2FtZSgpe1xuICAgIGNvbnNvbGUubG9nKCdQbGF5ZXIgYmVnaW5zIGEgbmV3IGdhbWUuJyk7IC8vIFRlc3RpbmcgXG4gICAgY29uc29sZS5sb2coJ1xcbicpOyAvLyBUZXN0aW5nIFxuXG4gICAgTmV3R2FtZVNlbGVjdGVkLm5ld0dhbWVTZWxlY3RlZCA9IHRydWU7XG4gICAgY29uc3QgYm9hcmQgPSBHYW1lYm9hcmQoKTsgXG4gICAgY29uc3Qgc2hpcCA9IGJvYXJkLlNoaXAoKTtcblxuICAgIFNoaXBEYXRhLnNoaXBMZW5ndGggPSBzaGlwLmRlZmF1bHRMZW5ndGhzW1NoaXBEYXRhLmxlbmd0aEluZGV4XTtcbn1cblxuLy8gSG92ZXJUZXN0RE9NKCk6IFRoZSBob3ZlciB0ZXN0IG9uIHRoZSBib2FyZC5cbmZ1bmN0aW9uIEF4aXNET00oZSl7XG4gICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5ZXItb25lLWJvYXJkID4gZGl2ID4gZGl2Jyk7XG4gICAgY29uc29sZS5sb2coJ0NlbGxzOiAnLCBjZWxsKTsgLy8gVGVzdGluZ1xuXG4gICAgLy8gY29uc3QgeENvb3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVib2FyZC1jb250YWluZXIgPiBkaXY6bnRoLWNoaWxkKDEpID4gZGl2ID4gYnV0dG9uOm50aC1jaGlsZCgxKScpO1xuICAgIC8vIGNvbnNvbGUubG9nKHhDb29yZCk7IC8vIFRlc3RpbmcgXG4gICAgLy8gY29uc3QgeUNvb3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVib2FyZC1jb250YWluZXIgPiBkaXY6bnRoLWNoaWxkKDEpID4gZGl2ID4gYnV0dG9uOm50aC1jaGlsZCgyKScpOyBcbiAgICAvLyBjb25zb2xlLmxvZyh5Q29vcmQpOyAvLyBUZXN0aW5nXG5cbiAgICAvLyBUZXN0aW5nIGZvciB5Q29vcmQ6XG4gICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBjZWxsLmxlbmd0aDsgaSsrKVxuICAgIC8vIHtcbiAgICAvLyAgICAgY2VsbFtpXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgIC8vICAgICAgICAgaWYgKCEocGFyc2VJbnQoY2VsbFtpXS5kYXRhc2V0LngpID09PSA5KSlcbiAgICAvLyAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICBjZWxsW2ldLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXRlc3QnKTtcbiAgICAvLyAgICAgICAgICAgICBjZWxsW2kgKyAxMF0uY2xhc3NMaXN0LmFkZCgnaG92ZXItdGVzdCcpOyBcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfVxuXG4gICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBjZWxsLmxlbmd0aDsgaSsrKVxuICAgIC8vIHtcbiAgICAvLyAgICAgY2VsbFtpXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgIC8vICAgICAgICAgaWYgKGNlbGxbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdob3Zlci10ZXN0JykpXG4gICAgLy8gICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgY2VsbFtpXS5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci10ZXN0Jyk7XG4gICAgLy8gICAgICAgICAgICAgY2VsbFtpICsgMTBdLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfVxuXG4gICAgLy8gVGVzdGluZyBmb3IgeENvb3JkOlxuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgY2VsbC5sZW5ndGg7IGkrKylcbiAgICAvLyB7XG4gICAgLy8gICAgIGlmICghQXhpc0NoYW5nZS55QXhpc0NoYW5nZSlcbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgICAgY2VsbFtpXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgIC8vICAgICAgICAgICAgIGlmICghKHBhcnNlSW50KGNlbGxbaV0uZGF0YXNldC54ID09PSA5KSkgJiYgIShwYXJzZUludChjZWxsW2ldLmRhdGFzZXQueSkgPT09IDkpKVxuICAgIC8vICAgICAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgY2VsbFtpXS5jbGFzc0xpc3QuYWRkKCdob3Zlci10ZXN0Jyk7XG4gICAgLy8gICAgICAgICAgICAgICAgIGNlbGxbaSArIDFdLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXRlc3QnKTtcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICB9KTtcbiAgICBcbiAgICAvLyAgICAgICAgIGNlbGxbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coJ1g6ICcsIGNlbGxbaV0uZGF0YXNldC54KTsgLy8gVGVzdGluZ1xuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdZOiAnLCBjZWxsW2ldLmRhdGFzZXQueSk7IC8vIFRlc3RpbmdcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZygnWDI6ICcsIGNlbGxbaSArIDFdLmRhdGFzZXQueCk7IC8vIFRlc3RpbmdcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZygnWDM6ICcsIGNlbGxbaSArIDFdLmRhdGFzZXQueSk7IC8vIFRlc3RpbmcgXG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coJ1xcbicpOyAvLyBUZXN0aW5nXG4gICAgLy8gICAgICAgICB9KTtcblxuICAgIC8vICAgICAgICAgY2VsbFtpXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgIC8vICAgICAgICAgICAgIGlmIChjZWxsW2ldLmNsYXNzTGlzdC5jb250YWlucygnaG92ZXItdGVzdCcpKVxuICAgIC8vICAgICAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgY2VsbFtpXS5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci10ZXN0Jyk7XG4gICAgLy8gICAgICAgICAgICAgICAgIGNlbGxbaSArIDFdLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTsgICAgXG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgfSk7XG4gICAgLy8gICAgIH1cblxuICAgIC8vIH1cblxuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgY2VsbC5sZW5ndGg7IGkrKylcbiAgICAvLyB7XG4gICAgLy8gICAgIGNlbGxbaV0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAvLyAgICAgICAgIGlmIChjZWxsW2ldLmNsYXNzTGlzdC5jb250YWlucygnaG92ZXItdGVzdCcpKVxuICAgIC8vICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgIGNlbGxbaV0uY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItdGVzdCcpO1xuICAgIC8vICAgICAgICAgICAgIGNlbGxbaSArIDFdLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTsgICAgXG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH1cbn1cblxuLy8gQ2hhbmdlVG9YQXhpcygpOiBXaWxsIGNoYW5nZSB0aGUgYXhpcyBzZWxlY3Rpb24gb2YgdGhlIGdhbWVib2FyZCB0byB0aGUgeC1heGlzLlxuZnVuY3Rpb24gQ2hhbmdlVG9YQXhpcygpe1xuICAgIGNvbnN0IGNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllci1vbmUtYm9hcmQgPiBkaXYgPiBkaXYnKTtcbiAgICBjb25zdCB5Q29vcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZWJvYXJkLWNvbnRhaW5lciA+IGRpdjpudGgtY2hpbGQoMSkgPiBkaXYgPiBidXR0b246bnRoLWNoaWxkKDIpJyk7XG5cbiAgICBBeGlzU2VsZWN0ZWQuYXhpc1NlbGVjdGVkID0gdHJ1ZTsgXG4gICAgY29uc29sZS5sb2coJ1ggb3IgWSBBeGlzIGhhcyBiZWVuIHNlbGVjdGVkOiAnLCBBeGlzU2VsZWN0ZWQuYXhpc1NlbGVjdGVkKTsgLy8gVGVzdGluZ1xuXG4gICAgLy8gUmVtb3ZlIEVudGVyWSBhbmQgTGVhdmVZIEV2ZW50IExpc3RlbmVycyBcbiAgICBjZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIEVudGVyWSk7XG4gICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIExlYXZlWSk7XG4gICAgfSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNlbGxzLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgICAgY2VsbHNbaV0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIEVudGVyWCk7XG5cbiAgICAgICAgY2VsbHNbaV0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIExlYXZlWCk7XG4gICAgfVxufVxuXG4vLyBFbnRlclgoKTogV2lsbCBlbnRlciBlYWNoIGNlbGwgb24gdGhlIHgtYXhpcyBzZWxlY3Rpb24uIFxuZnVuY3Rpb24gRW50ZXJYKGUpe1xuICAgIGNvbnNvbGUubG9nKGUpOyAvLyBUZXN0aW5nIFxuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KTsgLy8gVGVzdGluZyBcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5kYXRhc2V0LngpOyAvLyBUZXN0aW5nIFxuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmRhdGFzZXQueSk7IC8vIFRlc3RpbmdcbiAgICBjb25zb2xlLmxvZygnXFxuJyk7IC8vIFRlc3RpbmdcbiBcbiAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7ZS50YXJnZXQuZGF0YXNldC54fVwiXVtkYXRhLXk9XCIke2UudGFyZ2V0LmRhdGFzZXQueX1cIl1gKTtcbiAgICBjb25zdCBuZXh0Q2VsbE9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke2UudGFyZ2V0LmRhdGFzZXQueH1cIl1bZGF0YS15PVwiJHtwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnkpICsgMX1cIl1gKTtcbiAgICBjb25zdCBuZXh0Q2VsbFR3byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke2UudGFyZ2V0LmRhdGFzZXQueH1cIl1bZGF0YS15PVwiJHtwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnkpICsgMn1cIl1gKTtcbiAgICBjb25zdCBuZXh0Q2VsbFRocmVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7ZS50YXJnZXQuZGF0YXNldC54fVwiXVtkYXRhLXk9XCIke3BhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueSkgKyAzfVwiXWApO1xuXG4gICAgaWYgKCEocGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC55KSA9PT0gOSkpXG4gICAge1xuICAgICAgICBpZiAoU2hpcERhdGEuc2hpcExlbmd0aCA9PT0gMClcbiAgICAgICAge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdob3Zlci10ZXN0Jyk7IFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKFNoaXBEYXRhLnNoaXBMZW5ndGggPT09IDEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaG92ZXItdGVzdCcpO1xuICAgICAgICAgICAgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmFkZCgnaG92ZXItdGVzdCcpOyBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAyKVxuICAgICAgICB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgICAgIG5leHRDZWxsT25lLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgICAgIG5leHRDZWxsVHdvLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAzKVxuICAgICAgICB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgICAgIG5leHRDZWxsT25lLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXRlc3QnKTsgXG4gICAgICAgICAgICBuZXh0Q2VsbFR3by5jbGFzc0xpc3QuYWRkKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgICAgICBuZXh0Q2VsbFRocmVlLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXRlc3QnKTsgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBOb3RlOiBJIGNvdWxkIHB1dCB0aGlzIGluIGl0cyBvd24gZnVuY3Rpb24sIGJ1dCBmb3Igbm93IEkgd2lsbCB1c2UgdGhlIEVudGVyWCBmdW5jdGlvbiB0byB0ZXN0XG4gICAgLy8gdGhpcyBhbG9nb3JpdGhtIG91dC4gXG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ1g6ICcsIGNlbGwuZGF0YXNldC54KTsgXG4gICAgICAgIGNvbnNvbGUubG9nKCdZOiAnLCBjZWxsLmRhdGFzZXQueSk7IFxuICAgICAgICAvLyBUT0RPOiBTaGlwIHBsYWNlbWVudCBvbiB0aGUgYm9hcmQgY2FuIGJlIGRvbmUgaW5zaWRlIHRoaXMgZnVuY3Rpb24uIFxuICAgIH0pO1xufVxuXG4vLyBMZWF2ZVgoKTogV2lsbCBsZWF2ZSBlYWNoIGNlbGwgZnJvbSB0aGUgeC1heGlzIHNlbGVjdGlvbi4gXG5mdW5jdGlvbiBMZWF2ZVgoZSl7XG4gICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke2UudGFyZ2V0LmRhdGFzZXQueH1cIl1bZGF0YS15PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnl9XCJdYCk7XG4gICAgY29uc3QgbmV4dENlbGxPbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnh9XCJdW2RhdGEteT1cIiR7cGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC55KSArIDF9XCJdYCk7XG4gICAgY29uc3QgbmV4dENlbGxUd28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnh9XCJdW2RhdGEteT1cIiR7cGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC55KSArIDJ9XCJdYCk7XG4gICAgY29uc3QgbmV4dENlbGxUaHJlZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke2UudGFyZ2V0LmRhdGFzZXQueH1cIl1bZGF0YS15PVwiJHtwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnkpICsgM31cIl1gKTtcblxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2hvdmVyLXRlc3QnKSlcbiAgICB7XG4gICAgICAgIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAwKVxuICAgICAgICB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAxKVxuICAgICAgICB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgICAgIG5leHRDZWxsT25lLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAyKVxuICAgICAgICB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgICAgIG5leHRDZWxsT25lLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgICAgIG5leHRDZWxsVHdvLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTsgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoU2hpcERhdGEuc2hpcExlbmd0aCA9PT0gMylcbiAgICAgICAge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgICAgICBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgICAgICBuZXh0Q2VsbFR3by5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgICAgICBuZXh0Q2VsbFRocmVlLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTsgXG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIENoYW5nZVRvWUF4aXMoKTogV2lsbCBjaGFuZ2UgdGhlIGF4aXMgc2VsZWN0aW9uIG9uIHRoZSBnYW1lYm9hcmQgdG8gdGhlIHktYXhpcy4gXG5mdW5jdGlvbiBDaGFuZ2VUb1lBeGlzKCl7XG4gICAgY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheWVyLW9uZS1ib2FyZCA+IGRpdiA+IGRpdicpOyBcbiAgICBjb25zdCB4Q29vcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZWJvYXJkLWNvbnRhaW5lciA+IGRpdjpudGgtY2hpbGQoMSkgPiBkaXYgPiBidXR0b246bnRoLWNoaWxkKDEpJyk7XG5cbiAgICBBeGlzU2VsZWN0ZWQuYXhpc1NlbGVjdGVkID0gdHJ1ZTtcbiAgICBjb25zb2xlLmxvZygnWCBvciBZIGF4aXMgaGFzIGJlZW4gc2VsZWN0ZWQ6ICcsIEF4aXNTZWxlY3RlZC5heGlzU2VsZWN0ZWQpOyAvLyBUZXN0aW5nIFxuICAgIFxuICAgIC8vIFJlbW92ZSBFbnRlclggYW5kIExlYXZlWCBFdmVudCBMaXN0ZW5lcnMuXG4gICAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBFbnRlclgpOyBcbiAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgTGVhdmVYKTsgXG4gICAgfSk7IFxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjZWxscy5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICAgIGNlbGxzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBFbnRlclkpO1xuXG4gICAgICAgIGNlbGxzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBMZWF2ZVkpO1xuICAgIH1cbn1cblxuLy8gRW50ZXJZKCk6IFdpbGwgZW50ZXIgZWFjaCBjZWxsIG9uIHRoZSB5LWF4aXMgc2VsZWN0aW9uLlxuZnVuY3Rpb24gRW50ZXJZKGUpe1xuICAgIGNvbnNvbGUubG9nKGUpOyAvLyBUZXN0aW5nIFxuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KTsgLy8gVGVzdGluZ1xuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmRhdGFzZXQueCk7IC8vIFRlc3RpbmdcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5kYXRhc2V0LnkpOyAvLyBUZXN0aW5nIFxuICAgIGNvbnNvbGUubG9nKCdcXG4nKTsgLy8gVGVzdGluZ1xuXG4gICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke2UudGFyZ2V0LmRhdGFzZXQueH1cIl1bZGF0YS15PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnl9XCJdYCk7XG4gICAgY29uc3QgbmV4dENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LngpICsgMX1cIl1bZGF0YS15PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnl9XCJdYCk7XG5cbiAgICBpZiAoIShwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LngpID09PSA5KSlcbiAgICB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaG92ZXItdGVzdCcpO1xuICAgICAgICBuZXh0Q2VsbC5jbGFzc0xpc3QuYWRkKCdob3Zlci10ZXN0Jyk7IFxuICAgIH0gICAgXG59XG5cbi8vIExlYXZlWSgpOiBXaWxsIGxlYXZlIGVhY2ggY2VsbCBmcm9tIHRoZSB5LWF4aXMgc2VsZWN0aW9uLlxuZnVuY3Rpb24gTGVhdmVZKGUpe1xuICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnh9XCJdW2RhdGEteT1cIiR7ZS50YXJnZXQuZGF0YXNldC55fVwiXWApO1xuICAgIGNvbnN0IG5leHRDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7cGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC54KSArIDF9XCJdW2RhdGEteT1cIiR7ZS50YXJnZXQuZGF0YXNldC55fVwiXWApO1xuXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaG92ZXItdGVzdCcpKVxuICAgIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgIG5leHRDZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTsgXG4gICAgfVxufVxuIiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL1NoaXBcIjtcbi8qKiBHYW1lYm9hcmRcbiAqIC0+IEdhbWVib2FyZHMgc2hvdWxkIGJlIGFibGUgdG8gcGxhY2Ugc2hpcHMgYXQgc3BlY2lmaWMgY29vcmRpbmF0ZXMgYnkgXG4gKiBjYWxsaW5nIHRoZSAnc2hpcCBmYWN0b3J5IGZ1bmN0aW9uJy4gXG4gKi9cblxuLy8gR2FtZWJvYXJkKCk6IEdhbWVib2FyZCBmYWN0b3J5IGZ1bmN0aW9uLlxuZXhwb3J0IGNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCBnYW1lYm9hcmQgPSBbLi4uQXJyYXkoMTApXS5tYXAoKCkgPT4gQXJyYXkoMTApLmZpbGwoXCJcIikpOyBcbiAgICBsZXQgc2hpcHNPbkJvYXJkID0gMDsgXG5cbiAgICBjb25zdCByZWNlaXZlQXR0YWNrID0gKCkgPT4ge1xuICAgICAgICAvLyBXaWxsIHRha2UgYSBwYWlyIG9mIGNvb3JkaW5hdGVzLCBkZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRoZSBhdHRhY2sgaGl0IGEgc2hpcCBhbmRcbiAgICAgICAgLy8gdGhlbiBzZW5kcyB0aGUgJ2hpdCcgZnVuY3Rpb24gdG8gdGhlIGNvcnJlY3Qgc2hpcCwgb3IgcmVjb3JkcyB0aGUgY29vcmRpbmF0ZXMgb2YgdGhlXG4gICAgICAgIC8vIG1pc3NlZCBzaG90LiBcbiAgICB9XG5cblxuICAgIHJldHVybiB7Z2FtZWJvYXJkLCBzaGlwc09uQm9hcmQsIHJlY2VpdmVBdHRhY2ssIFNoaXB9O1xufSIsIi8vIFNoaXAoKTogU2hpcCBmYWN0b3J5IGZ1bmN0aW9uLiBcbmV4cG9ydCBjb25zdCBTaGlwID0gKCkgPT4ge1xuICAgIGxldCBkZWZhdWx0TGVuZ3RocyA9IFswLCAwLCAwLCAwLCAxLCAxLCAxLCAyLCAyLCAzXTsgXG4gICAgbGV0IGxlbmd0aCA9IDA7XG4gICAgbGV0IGhpdHMgPSAwO1xuICAgIGxldCBzdW5rID0gZmFsc2U7XG5cbiAgICAvLyBoaXQoKTogV2lsbCBnYXRoZXIgdGhlIGFtb3VudCBvZiBoaXRzIHRoZSBzaGlwIHdpbGwgZ2V0LlxuICAgIGNvbnN0IGhpdCA9IChpc0hpdCkgPT4ge1xuICAgICAgICByZXR1cm4gaGl0cyArPSBpc0hpdDtcbiAgICB9XG5cbiAgICAvLyBpc1N1bmsoKTogV2lsbCBkZXRlcm1pbmUgaWYgdGhlIHNoaXAgaGFzIHN1bmsuIFxuICAgIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHN1bmsgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB7aGl0LCBpc1N1bmssIGRlZmF1bHRMZW5ndGhzLCBsZW5ndGh9O1xufVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIHxUZXN0aW5nIEFyZWEgSWRlbnRpZmllcnMgYW5kIENvbXBvbmVudHN8ICovXG4jY29udGVudCA+IGRpdiA+IGJ1dHRvbntcbiAgICBwYWRkaW5nOiAxMHB4IDVweCAxMHB4IDVweDtcbiAgICBmb250LWZhbWlseTptb25vc3BhY2U7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGNvcmFsOyBcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4jY29udGVudCA+IGRpdiA+IGJ1dHRvbjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRibHVlO1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIHxNYWluIENvbnRlbnQgU2VjdGlvbnwgKi9cbiNjb250ZW50e1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICBwYWRkaW5nOiAxMHB4OyBcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiB8R2FtZWJvYXJkIENvbnRhaW5lcnwgKi9cbi5nYW1lYm9hcmQtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxMHB4O1xuXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHdpZHRoOiAxMDAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi8qIFBsYXllciBPbmUgQm9hcmQgKi9cbi5wbGF5ZXItb25lLWJvYXJke1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG4ucGxheWVyLW9uZS1ib2FyZCA+IGRpdnsgLyogY29sdW1ucyAqL1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgKi9cbiAgICAvKiBwYWRkaW5nOiA1cHg7ICovXG59XG4ucGxheWVyLW9uZS1ib2FyZCA+IGRpdiA+IGRpdnsgLyogcm93cyAqL1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Y29yYWw7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbn1cblxuLyogUGxheWVyIFR3byBCb2FyZCAqL1xuLnBsYXllci10d28tYm9hcmR7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcHVycGxlO1xufVxuXG5cbi8qIGhvdmVyLXRlc3QgKi9cbi5ob3Zlci10ZXN0e1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrICFpbXBvcnRhbnQ7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyogfEludGVmYWNlIFNlY3Rpb258ICovXG4uaW50ZXJmYWNle1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBcbiAgICBib3JkZXI6IDFweCBzb2xpZCBvcmFuZ2U7XG4gICAgcGFkZGluZzogMTBweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsOENBQThDO0FBQzlDO0lBQ0ksMEJBQTBCO0lBQzFCLHFCQUFxQjtJQUNyQiw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLDJCQUEyQjtJQUMzQiwyQkFBMkI7QUFDL0I7O0FBRUEsNEtBQTRLO0FBQzVLLDRLQUE0SztBQUM1SywyQkFBMkI7QUFDM0I7SUFDSSxxQkFBcUI7SUFDckIsYUFBYTtBQUNqQjs7QUFFQSw0S0FBNEs7QUFDNUssNEtBQTRLO0FBQzVLLDBCQUEwQjtBQUMxQjtJQUNJLGFBQWE7SUFDYixTQUFTOztJQUVULHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsYUFBYTtJQUNiLGNBQWM7QUFDbEI7O0FBRUEscUJBQXFCO0FBQ3JCO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjs7SUFFdEIsdUJBQXVCO0lBQ3ZCLGFBQWE7QUFDakI7QUFDQSx5QkFBeUIsWUFBWTtJQUNqQyxhQUFhOztJQUViLDZCQUE2QjtJQUM3QixrQkFBa0I7QUFDdEI7QUFDQSwrQkFBK0IsU0FBUztJQUNwQyw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBLHFCQUFxQjtBQUNyQjtJQUNJLHdCQUF3QjtBQUM1Qjs7O0FBR0EsZUFBZTtBQUNmO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBLDRLQUE0SztBQUM1Syw0S0FBNEs7QUFDNUssdUJBQXVCO0FBQ3ZCO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjs7SUFFdEIsd0JBQXdCO0lBQ3hCLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogfFRlc3RpbmcgQXJlYSBJZGVudGlmaWVycyBhbmQgQ29tcG9uZW50c3wgKi9cXG4jY29udGVudCA+IGRpdiA+IGJ1dHRvbntcXG4gICAgcGFkZGluZzogMTBweCA1cHggMTBweCA1cHg7XFxuICAgIGZvbnQtZmFtaWx5Om1vbm9zcGFjZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRjb3JhbDsgXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI2NvbnRlbnQgPiBkaXYgPiBidXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRibHVlO1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyogfE1haW4gQ29udGVudCBTZWN0aW9ufCAqL1xcbiNjb250ZW50e1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxuICAgIHBhZGRpbmc6IDEwcHg7IFxcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyogfEdhbWVib2FyZCBDb250YWluZXJ8ICovXFxuLmdhbWVib2FyZC1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG5cXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgd2lkdGg6IDEwMDBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi8qIFBsYXllciBPbmUgQm9hcmQgKi9cXG4ucGxheWVyLW9uZS1ib2FyZHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcbi5wbGF5ZXItb25lLWJvYXJkID4gZGl2eyAvKiBjb2x1bW5zICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xcbiAgICAvKiBwYWRkaW5nOiA1cHg7ICovXFxufVxcbi5wbGF5ZXItb25lLWJvYXJkID4gZGl2ID4gZGl2eyAvKiByb3dzICovXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Y29yYWw7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG59XFxuXFxuLyogUGxheWVyIFR3byBCb2FyZCAqL1xcbi5wbGF5ZXItdHdvLWJvYXJke1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBwdXJwbGU7XFxufVxcblxcblxcbi8qIGhvdmVyLXRlc3QgKi9cXG4uaG92ZXItdGVzdHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2sgIWltcG9ydGFudDtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qIHxJbnRlZmFjZSBTZWN0aW9ufCAqL1xcbi5pbnRlcmZhY2V7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIFxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBvcmFuZ2U7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi91dGlscy9TaGlwXCI7XG5cbmltcG9ydCB7IEluaXRpYWxpemVET00gfSBmcm9tIFwiLi9tb2R1bGVzL0RvbUNvbnRlbnRcIjtcblxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuaW1wb3J0IHRlc3RTb3VuZCBmcm9tICcuL3NvdW5kcy9taXhraXQtcmV0cm8tZ2FtZS1ub3RpZmljYXRpb24tMjEyLndhdic7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIE5vdGVzOlxuLy8gMSkgSSBvbmx5IGhhdmUgdG8gdGVzdCB0aGUgc2hpcCBvYmplY3RzIHB1YmxpYyBpbnRlcmZhY2UuIE9ubHkgJ21ldGhvZHMgb3IgcHJvcGVydGllcycgdGhhdCBhcmUgdXNlZCBvdXRzaWRlIG9mIHlvdXIgc2hpcCBvYmplY3QgXG4vLyBuZWVkIHVuaXQgdGVzdHMuIFxuLy8gXG4vLyAyKSBOb3RlIHRoYXQgd2UgaGF2ZSBub3QgeWV0IGNyZWF0ZWQgYW55IFVzZXIgSW50ZXJmYWNlLiBXZSBzaG91bGQga25vd1xuLy8gb3VyIGNvZGUgaXMgY29taW5nIHRvZ2V0aGVyIGJ5IHJ1bm5pbmcgdGhlIHRlc3RzLiBZb3Ugc2hvdWxkbid0IGJlXG4vLyByZWx5aW5nIG9uICdjb25zb2xlLmxvZycgb3IgJ0RPTSBtZXRob2RzJyB0byBtYWtlIHN1cmUgeW91ciBjb2RlIGlzXG4vLyBkb2luZyB3aGF0IHlvdSBleHBlY3QgaXQgdG8uXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gfFRlc3RpbmcgQXJlYXxcbmNvbnNvbGUubG9nKCd8VGVzdGluZyBBcmVhfCcpO1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5jb25zb2xlLmxvZyhjb250ZW50KTsgLy8gVGVzdGluZyBcblxuY29uc3QgYnV0dG9uT25lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBidXR0b25PbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTsgXG5idXR0b25PbmUudGV4dENvbnRlbnQgPSAnQ2xpY2sgTWUhJztcblxuY29uc3QgbmV3U291bmQgPSBuZXcgQXVkaW8odGVzdFNvdW5kKTtcblxuLy8gYnV0dG9uT25lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKCdZb3UgY2xpY2tlZCB0aGUgYnV0dG9uIScpOyAvLyBUZXN0aW5nXG4vLyAgICAgbmV3U291bmQucGxheSgpO1xuLy8gfSk7IFxuXG4vLyBidXR0b25PbmVDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uT25lKTtcbi8vIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnV0dG9uT25lQ29udGFpbmVyKTtcbi8vIGNvbnNvbGUubG9nKCdcXG4nKTsgLy8gVGVzdGluZyBcblxuLyoqIHxTcHJlYWQgU3ludGF4KC4uLil8XG4gKiBUaGUgc3ByZWFkKC4uLikgc3ludGF4IGFsbG93IGFuIGl0ZXJhYmxlLCBzdWNoIGFzIGFuIGFycmF5IG9yIHN0cmluZywgdG8gYmUgZXhwYW5kZWQgaW4gcGxhY2VzIFxuICogd2hlcmUgemVybyBvciBtb3JlIGFyZ3VtZW50cyAoZm9yIGZ1bmN0aW9uIGNhbGxzKSBvciBlbGVtZW50cyAoZm9yIGFycmF5IGxpdGVyYWxzKSBhcmUgZXhwZWN0ZWQuXG4gKiBJbiBhbiBvYmplY3QgbGl0ZXJhbCwgdGhlIHNwcmVhZCBzeW50YXggZW51bWVyYXRlcyB0aGUgcHJvcGVydGllcyBvZiBhbiBvYmplY3QgYW5kIGFkZHMgdGhlIGtleS12YWx1ZSBwYWlyc1xuICogdG8gdGhlIG9iamVjdCBiZWluZyBjcmVhdGVkLiBcbiAqIFxuICogU3ByZWFkIHN5bnRheCBsb29rcyBleGFjdGx5IGxpa2UgcmVzdCBzeW50YXguIEluIGEgd2F5LCBzcHJlYWQgc3ludGF4IGlzIHRoZSBvcHBvc2l0ZSBvZiByZXN0IHN5bnRheC5cbiAqIFNwcmVhZCBzeW50YXggXCJleHBhbmRzXCIgYW4gYXJyYXkgaW50byBpdHMgZWxlbWVudHMsIHdoaWxlIHJlc3Qgc3ludGF4IGNvbGxlY3RzIG11bHRpcGxlIGVsZW1lbnRzIGFuZFxuICogXCJjb25kZW5zZXNcIiB0aGVtIGludG8gYSBzaW5nbGUgZWxlbWVudC4gXG4gKiBcbiAqIE5vdGU6IFVzaW5nIHRoZSBcIm1hcCBhcnJheSBtZXRob2RcIiB3aWxsIGNyZWF0ZSBhIG5ldyBhcnJheSBmcm9tIHRoZSBjYWxsaW5nIFsuLi5hcnJheSg4KV0gdGhhdCBpc1xuICogc3ByZWFkaW5nIDggZWxlbWVudHMgaW50byBpdC4gRWFjaCBlbGVtZW50IHdpbGwgYmUgYW4gQXJyYXkgb2YgOCBlbGVtZW50cyB0aGF0IGlzIGZpbGxlZCB3aXRoIChcIlwiKTtcbiAqL1xuY29uc3QgYXJyVGVzdCA9IFsuLi5BcnJheSg4KV0ubWFwKCgpID0+IEFycmF5KDgpLmZpbGwoXCJcIikpOyBcbmNvbnNvbGUubG9nKCdUaGUgQXJyYXk6ICcsIGFyclRlc3QpOyAvLyBUZXN0aW5nXG5jb25zb2xlLmxvZygnXFxuJyk7IC8vIFRlc3Rpbmdcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbkluaXRpYWxpemVET00oKTsiXSwibmFtZXMiOlsiR2FtZWJvYXJkIiwiQXhpc1NlbGVjdGVkIiwiYXhpc1NlbGVjdGVkIiwiTmV3R2FtZVNlbGVjdGVkIiwibmV3R2FtZVNlbGVjdGVkIiwiU2hpcERhdGEiLCJsZW5ndGhJbmRleCIsInNoaXBMZW5ndGgiLCJzaGlwc09uQm9hcmQiLCJwbGFjZW1lbnRDb21tZW5jZWQiLCJBeGlzQ2hhbmdlIiwiYXhpc0NoYW5nZSIsIkluaXRpYWxpemVET00iLCJjb25zb2xlIiwibG9nIiwiR2FtZWJvYXJkRE9NIiwiSW50ZXJmYWNlRE9NIiwiUGxheWVyT25lRE9NIiwiUGxheWVyVHdvRE9NIiwiY29udGVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdhbWVib2FyZENvbnRhaW5lciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmRDaGlsZCIsInBsYXllck9uZUJvYXJkIiwicGxheWVyT25lIiwiaSIsImdhbWVib2FyZCIsImxlbmd0aCIsInJvdyIsImoiLCJjZWxsIiwiZGF0YXNldCIsIngiLCJ5IiwicGxheWVyVHdvIiwiUGxhY2VTaGlwcyIsImUiLCJjZWxscyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ4Q29vcmQiLCJ5Q29vcmQiLCJib2FyZCIsInNoaXAiLCJTaGlwIiwiZGVmYXVsdExlbmd0aHMiLCJhZGRFdmVudExpc3RlbmVyIiwiRW50ZXJYIiwiTGVhdmVYIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkVudGVyWSIsIkxlYXZlWSIsInBsYXllckludGVyZmFjZSIsIm5ld0dhbWUiLCJ0ZXh0Q29udGVudCIsInBsYWNlU2hpcCIsImNvb3JkaW5hdGVDb250YWluZXIiLCJOZXdHYW1lIiwiQXhpc0RPTSIsIkNoYW5nZVRvWEF4aXMiLCJmb3JFYWNoIiwidGFyZ2V0IiwiY29uY2F0IiwibmV4dENlbGxPbmUiLCJwYXJzZUludCIsIm5leHRDZWxsVHdvIiwibmV4dENlbGxUaHJlZSIsImNvbnRhaW5zIiwicmVtb3ZlIiwiQ2hhbmdlVG9ZQXhpcyIsIm5leHRDZWxsIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiQXJyYXkiLCJtYXAiLCJmaWxsIiwicmVjZWl2ZUF0dGFjayIsImhpdHMiLCJzdW5rIiwiaGl0IiwiaXNIaXQiLCJpc1N1bmsiLCJ0ZXN0U291bmQiLCJnZXRFbGVtZW50QnlJZCIsImJ1dHRvbk9uZUNvbnRhaW5lciIsImJ1dHRvbk9uZSIsIm5ld1NvdW5kIiwiQXVkaW8iLCJhcnJUZXN0Il0sInNvdXJjZVJvb3QiOiIifQ==