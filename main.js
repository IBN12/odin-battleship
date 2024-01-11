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
/* harmony export */   DisplayComputerGameboardEvents: () => (/* binding */ DisplayComputerGameboardEvents),
/* harmony export */   InitializeDOM: () => (/* binding */ InitializeDOM)
/* harmony export */ });
/* harmony import */ var _utils_Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Gameboard */ "./src/utils/Gameboard.js");
/* harmony import */ var _utils_NewGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/NewGame */ "./src/utils/NewGame.js");
/* harmony import */ var _utils_ShipData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/ShipData */ "./src/utils/ShipData.js");
/* harmony import */ var _utils_AxisChange__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/AxisChange */ "./src/utils/AxisChange.js");
/* harmony import */ var _utils_ActivateGame__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/ActivateGame */ "./src/utils/ActivateGame.js");
/* harmony import */ var _utils_DisablePlacement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/DisablePlacement */ "./src/utils/DisablePlacement.js");
/* harmony import */ var _utils_ShipPlacementData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/ShipPlacementData */ "./src/utils/ShipPlacementData.js");
/* harmony import */ var _sounds_water_explosion_wav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sounds/water-explosion.wav */ "./src/sounds/water-explosion.wav");
/* harmony import */ var _images_explosion_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/explosion.png */ "./src/images/explosion.png");










// InitializingDOM(): Intializing DOM Content for the entire application. 
function InitializeDOM() {
  console.log("Initializing DOM Content..."); // Testing 
  console.log('\n'); // Testing 

  GameboardDOM();
  InterfaceDOM();
  PlayerOneDOM();
  ComputerDOM();
  DisplayPlayerOneGameboardEvents();
  DisplayComputerGameboardEvents();
}

// DisplayPlayerOneGameboardEvents(): Will display all the events that player one initiates on the computers gameboard.
function DisplayPlayerOneGameboardEvents(boardStatus, coords, sunkStatus) {
  var shipSunkMssg = document.createElement('p');
  if (boardStatus === 1) {
    shipSunkMssg.textContent = "";
    document.getElementById('player-gameboard-events').textContent = "You hit a ship at the coordinates [".concat(coords.dataset.x, ", ").concat(coords.dataset.y, "]!");
  } else if (boardStatus === 0) {
    shipSunkMssg.textContent = "";
    document.getElementById('player-gameboard-events').textContent = "Your hit missed at the coordinates [".concat(coords.dataset.x, ", ").concat(coords.dataset.y, "]!");
  } else if (boardStatus === 2) {
    shipSunkMssg.textContent = "";
    document.getElementById('player-gameboard-events').textContent = 'Player One Wins Battleship!';
  } else if (boardStatus === 3) {
    shipSunkMssg.textContent = "";
    document.getElementById('player-gameboard-events').textContent = 'Player One Loses Battleship!';
  }
  if (sunkStatus) {
    document.getElementById('player-gameboard-events').appendChild(shipSunkMssg);
    shipSunkMssg.textContent = " You sunk the ship!";
  }
}

// DisplayComputerGameboardEvents(): Will display all the events that the computer initiates on player one's gameboard. 
function DisplayComputerGameboardEvents(boardStatus, sunkStatus, shipNum) {
  var shipSunkMssg = document.createElement('p');
  if (boardStatus === 1) {
    shipSunkMssg.textContent = "";
    document.getElementById('computer-gameboard-events').textContent = "The computer hit ship ".concat(shipNum, "!");
  } else if (boardStatus === 0) {
    shipSunkMssg.textContent = "";
    document.getElementById('computer-gameboard-events').textContent = 'The computer missed!';
  } else if (boardStatus === 2) {
    shipSunkMssg.textContent = "";
    document.getElementById('computer-gameboard-events').textContent = 'The Computer Wins Battleship!';
  } else if (boardStatus === 3) {
    shipSunkMssg.textContent = "";
    document.getElementById('computer-gameboard-events').textContent = 'The Computer Loses Battleship!';
  }
  if (sunkStatus) {
    document.getElementById('computer-gameboard-events').appendChild(shipSunkMssg);
    shipSunkMssg.textContent = " The computer sunk the ship!";
  }
}

// NumberOfShipsPlaced(): Will keep track of the current ship to be placed on the gameboard.
function NumberOfShipsPlaced() {
  var numberOfShipsPlaced = document.querySelector('.number-of-ships');
  if (!(_utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.lengthIndex + 1 > 10)) {
    _utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.shipsPlaced++;
    numberOfShipsPlaced.textContent = "Ship: ".concat(_utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.shipsPlaced);
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

// ComputerDOM(): The computer gameboard
function ComputerDOM() {
  var gameboardContainer = document.querySelector('.gameboard-container');
  var computer = document.createElement('div');
  computer.classList.add('computer-gameboard');
  var computerBoard = (0,_utils_Gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();
  for (var i = 0; i < computerBoard.gameboard.length; i++) {
    var computerRow = document.createElement('div');
    for (var j = 0; j < computerBoard.gameboard[i].length; j++) {
      var computerCell = document.createElement('div');
      computerCell.dataset.x = i;
      computerCell.dataset.y = j;
      computerRow.appendChild(computerCell);
    }
    computer.appendChild(computerRow);
  }
  gameboardContainer.appendChild(computer);
}

// PlaceShips(): Will place the ships on the gameboard.
function PlaceShips(e) {
  var cells = document.querySelectorAll('.player-one-board > div > div');
  var xCoord = document.querySelector('.gameboard-container > div:nth-child(1) > div > button:nth-child(1)');
  var yCoord = document.querySelector('.gameboard-container > div:nth-child(1) > div > button:nth-child(2)');
  console.log('Current Axis: ', _utils_AxisChange__WEBPACK_IMPORTED_MODULE_3__.AxisChange.axisChange); // Testing  
  console.log('\n'); // Testing 

  if (!_utils_AxisChange__WEBPACK_IMPORTED_MODULE_3__.AxisChange.axisWasChanged && _utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.lengthIndex < 10) {
    NumberOfShipsPlaced();
    var board = (0,_utils_Gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();
    var ship = board.Ship();
    _utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.shipLength = ship.defaultLengths[_utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.lengthIndex];
    ship.length = _utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.shipLength + 1;
    console.log('Ship number to be placed: ', _utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.lengthIndex + 1); // Testing 
    console.log('The length of the ship to be placed: ', _utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.shipLength); // Testing 

    _utils_ShipPlacementData__WEBPACK_IMPORTED_MODULE_6__.PlacedShips["ship ".concat(_utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.lengthIndex)] = ship;
    console.log('Object with placed ships: ', _utils_ShipPlacementData__WEBPACK_IMPORTED_MODULE_6__.PlacedShips); // Testing 
    console.log('\n'); // Testing
  }
  if (_utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.lengthIndex > 9)
    // Will deactivate player ones ship placement. 
    {
      for (var i = 0; i < cells.length; i++) {
        cells[i].removeEventListener('mouseenter', EnterX);
        cells[i].removeEventListener('mouseleave', LeaveX);
        cells[i].removeEventListener('mouseenter', EnterY);
        cells[i].removeEventListener('mouseleave', LeaveY);
        cells[i].removeEventListener('click', PlaceOnX);
        cells[i].removeEventListener('click', PlaceOnY);
      }
      xCoord.classList.remove('current-coordinate');
      yCoord.classList.remove('current-coordinate');
      _utils_ActivateGame__WEBPACK_IMPORTED_MODULE_4__.ActivateGame.activateGame = true;
      console.log("Game Activated: ", _utils_ActivateGame__WEBPACK_IMPORTED_MODULE_4__.ActivateGame.activateGame); // Testing
      GameInitiated();
    } else {
    for (var _i = 0; _i < cells.length; _i++) {
      if (_utils_AxisChange__WEBPACK_IMPORTED_MODULE_3__.AxisChange.axisChange === null) {
        cells[_i].addEventListener('mouseenter', EnterX);
        cells[_i].addEventListener('mouseleave', LeaveX);
      } else if (_utils_AxisChange__WEBPACK_IMPORTED_MODULE_3__.AxisChange.axisChange === 1) {
        cells[_i].removeEventListener('mouseenter', EnterY);
        cells[_i].removeEventListener('mouseleave', LeaveY);
        cells[_i].addEventListener('mouseenter', EnterX);
        cells[_i].addEventListener('mouseleave', LeaveX);
      } else if (_utils_AxisChange__WEBPACK_IMPORTED_MODULE_3__.AxisChange.axisChange === 2) {
        cells[_i].removeEventListener('mouseenter', EnterX);
        cells[_i].removeEventListener('mouseleave', LeaveX);
        cells[_i].addEventListener('mouseenter', EnterY);
        cells[_i].addEventListener('mouseleave', LeaveY);
      }
    }
  }
}

// GameInitiated(): The player and computer will take turns picking coordinates on each others gameboard to sink a ship.
function GameInitiated() {
  var computerCells = document.querySelectorAll(".computer-gameboard > div > div");
  var totalComputerShipsSunk = 0;
  var totalPlayerShipsSunk = 0;

  // Check if all the computer placed ships have been sunk: Player One Wins. 
  // Note: These two test can be in its own function. 
  for (var key in _utils_ShipPlacementData__WEBPACK_IMPORTED_MODULE_6__.ComputerPlacedShips) {
    if (_utils_ShipPlacementData__WEBPACK_IMPORTED_MODULE_6__.ComputerPlacedShips[key].sunk === true) {
      totalComputerShipsSunk++;
    }
  }

  // Check if all the player placed ships have been sunk: Computer wins
  for (var _key in _utils_ShipPlacementData__WEBPACK_IMPORTED_MODULE_6__.PlacedShips) {
    if (_utils_ShipPlacementData__WEBPACK_IMPORTED_MODULE_6__.PlacedShips[_key].sunk === true) {
      totalPlayerShipsSunk++;
    }
  }

  // Crown the winner. 
  if (totalComputerShipsSunk === _utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.shipsPlaced) {
    console.log('Player One Wins Battleship!'); // Testing  
    // Notes: End the Click Event for PlayerOneTurn.
    // set ActivateGame.activateGame = false
    // set ActivateGame.activatePlayerOneTurn = true
    _utils_ActivateGame__WEBPACK_IMPORTED_MODULE_4__.ActivateGame.activateGame = false;
    _utils_ActivateGame__WEBPACK_IMPORTED_MODULE_4__.ActivateGame.activatePlayerOneTurn = true;
    _utils_NewGame__WEBPACK_IMPORTED_MODULE_1__.NewGameSelected.newGameSelected = false;
    computerCells.forEach(function (cell) {
      cell.removeEventListener('click', PlayerOneTurn);
    });
    DisplayPlayerOneGameboardEvents(2, null, false);
    DisplayComputerGameboardEvents(3, false, null);
  } else if (totalPlayerShipsSunk === _utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.shipsPlaced) {
    console.log('Computer Wins Battleship!'); // Testing
    _utils_ActivateGame__WEBPACK_IMPORTED_MODULE_4__.ActivateGame.activateGame = false;
    _utils_ActivateGame__WEBPACK_IMPORTED_MODULE_4__.ActivateGame.activatePlayerOneTurn = true;
    _utils_NewGame__WEBPACK_IMPORTED_MODULE_1__.NewGameSelected.newGameSelected = false;
    DisplayComputerGameboardEvents(2, false, null);
    DisplayPlayerOneGameboardEvents(3, null, false);
  }
  if (_utils_ActivateGame__WEBPACK_IMPORTED_MODULE_4__.ActivateGame.activateGame) {
    computerCells.forEach(function (cell) {
      cell.addEventListener('click', PlayerOneTurn);
    });
  }
  if (!_utils_ActivateGame__WEBPACK_IMPORTED_MODULE_4__.ActivateGame.activatePlayerOneTurn) {
    // Remove the events for all cells on the computer gameboard.
    computerCells.forEach(function (cell) {
      cell.removeEventListener('click', PlayerOneTurn);
    });
    console.log("Player One Turn Over"); // Testing 
    console.log("\n"); // Testing

    ComputerTurn();
  }
}

// PlayerOneTurn(): Player one will choose a spot on the board. 
function PlayerOneTurn(e) {
  var computerCell = document.querySelector(".computer-gameboard > div > div[data-x=\"".concat(e.target.dataset.x, "\"][data-y=\"").concat(e.target.dataset.y, "\"]"));
  var explosion = new Audio(_sounds_water_explosion_wav__WEBPACK_IMPORTED_MODULE_7__);
  var computerShipIndex = 0;
  var shipNumberSunk = 0;
  var shipSunk = false;
  console.log(e.target); // Testing 
  console.log(computerCell); // Testing 
  console.log("X: ", e.target.dataset.x); // Testing 
  console.log("Y: ", e.target.dataset.y); // Testing

  if (e.target.dataset.x !== undefined && e.target.dataset.y !== undefined) {
    if (computerCell.classList.contains('computer-ship-placed')) {
      for (var key in _utils_ShipPlacementData__WEBPACK_IMPORTED_MODULE_6__.ComputerPlacedShips) {
        computerShipIndex++;
        for (var coord in _utils_ShipPlacementData__WEBPACK_IMPORTED_MODULE_6__.ComputerPlacedShips[key].coordinates) {
          if (_utils_ShipPlacementData__WEBPACK_IMPORTED_MODULE_6__.ComputerPlacedShips[key].coordinates[coord][0] === parseInt(e.target.dataset.x) && _utils_ShipPlacementData__WEBPACK_IMPORTED_MODULE_6__.ComputerPlacedShips[key].coordinates[coord][1] === parseInt(e.target.dataset.y)) {
            _utils_ShipPlacementData__WEBPACK_IMPORTED_MODULE_6__.ComputerPlacedShips[key].hits += 1;
            console.log(_utils_ShipPlacementData__WEBPACK_IMPORTED_MODULE_6__.ComputerPlacedShips[key]);
            if (_utils_ShipPlacementData__WEBPACK_IMPORTED_MODULE_6__.ComputerPlacedShips[key].hits === _utils_ShipPlacementData__WEBPACK_IMPORTED_MODULE_6__.ComputerPlacedShips[key].length) {
              console.log("You sunk computer ship ".concat(computerShipIndex)); // Testing 
              _utils_ShipPlacementData__WEBPACK_IMPORTED_MODULE_6__.ComputerPlacedShips[key].sunk = true;
              shipSunk = _utils_ShipPlacementData__WEBPACK_IMPORTED_MODULE_6__.ComputerPlacedShips[key].sunk;
              shipNumberSunk = computerShipIndex;
            }
          }
        }
      }
      var explosionImg = document.createElement('img');
      explosionImg.src = _images_explosion_png__WEBPACK_IMPORTED_MODULE_8__;
      computerCell.appendChild(explosionImg);
      computerCell.classList.add('computer-ship-hit');
      explosion.play();
      DisplayPlayerOneGameboardEvents(1, computerCell, shipSunk, shipNumberSunk);
    } else if (!computerCell.hasAttribute('style')) {
      computerCell.setAttribute('style', 'background-color:#bef264;');
      DisplayPlayerOneGameboardEvents(0, computerCell, shipSunk, null);
    }
  }
  _utils_ActivateGame__WEBPACK_IMPORTED_MODULE_4__.ActivateGame.activatePlayerOneTurn = false;
  GameInitiated();
}

// ComputerTurn(): Computer will choose a spont on player one's board.
function ComputerTurn() {
  var gameboard = (0,_utils_Gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();
  gameboard.receiveAttack(_utils_ShipPlacementData__WEBPACK_IMPORTED_MODULE_6__.PlacedShips);
  _utils_ActivateGame__WEBPACK_IMPORTED_MODULE_4__.ActivateGame.activatePlayerOneTurn = true;
  GameInitiated();
}

// ComputerPlaceShips(): The computer will place ships on their gameboard.
function ComputerPlaceShips() {
  var computerCells = document.querySelectorAll('.computer-gameboard > div > div');
  console.log('Computer Cells: ', computerCells); // Testing

  var computerRows = document.querySelectorAll('.computer-gameboard > div');
  console.log('Computer Rows: ', computerRows); // Testing

  var computerBoard = (0,_utils_Gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();
  var computerShips = computerBoard.Ship();
  computerShips.defaultLengths.forEach(function (ship, index) {
    var computerShipPlaced = false;
    var xCoordRandom = Math.floor(Math.random() * computerRows.length); // Returns a random number from 0 to 9.
    var yCoordRandom = Math.floor(Math.random() * 10);
    var axisRandom = Math.floor(Math.random() * 2);
    var xLengthOne = 0,
      xLengthTwo = 0,
      xLengthThree = 0;
    var yLengthOne = 0,
      yLengthTwo = 0,
      yLengthThree = 0;
    if (axisRandom === 1)
      // x-axis
      {
        xLengthOne = 0;
        yLengthOne = 1;
        xLengthTwo = 0;
        yLengthTwo = 2;
        xLengthThree = 0;
        yLengthThree = 3;
      } else if (axisRandom === 0)
      // y-axis
      {
        xLengthOne = 1;
        yLengthOne = 0;
        xLengthTwo = 2;
        yLengthTwo = 0;
        xLengthThree = 3;
        yLengthThree = 0;
      }
    if (ship === 0) {
      console.log("|Ship ".concat(ship, "|")); // Testing
      while (!computerShipPlaced) {
        if (document.querySelector(".computer-gameboard > div > div[data-x=\"".concat(xCoordRandom, "\"][data-y=\"").concat(yCoordRandom, "\"]")).classList.contains('computer-ship-placed')) {
          xCoordRandom = Math.floor(Math.random() * computerRows.length);
          yCoordRandom = Math.floor(Math.random() * 10);
        }
        if (xCoordRandom + 1 >= 10 || yCoordRandom + 1 >= 10) {
          console.log('Coordinates are off the board'); // Testing
          console.log('X: ', xCoordRandom + 1); // Testing
          console.log('Y: ', yCoordRandom + 1); // Testing
          console.log('\n'); // Testing  

          xCoordRandom = Math.floor(Math.random() * computerRows.length);
          yCoordRandom = Math.floor(Math.random() * 10);
        } else {
          computerShipPlaced = true;
        }
      }
      var computerCell = document.querySelector(".computer-gameboard > div > div[data-x=\"".concat(xCoordRandom, "\"][data-y=\"").concat(yCoordRandom, "\"]"));
      computerCell.classList.add('computer-ship-placed');
      computerCell.setAttribute('style', 'background-color: purple;');
      _utils_ShipPlacementData__WEBPACK_IMPORTED_MODULE_6__.ComputerPlacedShips["ship ".concat(index)] = {
        coordinates: {
          0: [xCoordRandom, yCoordRandom]
        },
        length: ship + 1,
        hits: 0,
        sunk: false
      };
      console.log("Computer Placed Ships: ", _utils_ShipPlacementData__WEBPACK_IMPORTED_MODULE_6__.ComputerPlacedShips); // Testing 
    } else if (ship === 1) {
      console.log("|Ship ".concat(ship, "|")); // Testing
      var _loop = function _loop() {
        var coordinates = {};
        var coordinateIndex = 0;
        computerCells.forEach(function (cell) {
          if (cell.classList.contains('computer-ship-placed')) {
            console.log('X Cell: ', cell.dataset.x); // Testing
            console.log('Y Cell: ', cell.dataset.y); // Testing 
            console.log('X Random: ', xCoordRandom); // Testing
            console.log('Y Random: ', yCoordRandom); // Testing 
            coordinates[coordinateIndex++] = [parseInt(cell.dataset.x), parseInt(cell.dataset.y)];
            console.log('\n'); // Testing 
          }
        });
        console.log('Coordinates with ship placements: ', coordinates); // Testing 

        for (var key in coordinates) {
          var coordinatesNotOverlapping = false;
          console.log(coordinates[key]); // Testing
          while (!coordinatesNotOverlapping) {
            if (coordinates[key][0] === xCoordRandom && coordinates[key][1] === yCoordRandom || coordinates[key][0] === xCoordRandom + xLengthOne && coordinates[key][1] === yCoordRandom + yLengthOne || coordinates[key][0] === xCoordRandom && coordinates[key][1] === yCoordRandom && coordinates[key][0] === xCoordRandom + xLengthOne && coordinates[key][1] === yCoordRandom + yLengthOne) {
              xCoordRandom = Math.floor(Math.random() * computerRows.length);
              yCoordRandom = Math.floor(Math.random() * 10);
              console.log('found'); // Testing 

              // TODO: Need to test one more time to find out if it still overlaps with any of the cells. 
            } else {
              coordinatesNotOverlapping = true;
            }
            if (xCoordRandom + 1 >= 10 || yCoordRandom + 1 >= 10) {
              xCoordRandom = Math.floor(Math.random() * computerRows.length);
              yCoordRandom = Math.floor(Math.random() * 10);
            }
          }
        }
        var computerCell = document.querySelector(".computer-gameboard > div > div[data-x=\"".concat(xCoordRandom, "\"][data-y=\"").concat(yCoordRandom, "\"]"));
        var computerCellOne = document.querySelector(".computer-gameboard > div > div[data-x=\"".concat(xCoordRandom + xLengthOne, "\"][data-y=\"").concat(yCoordRandom + yLengthOne, "\"]"));
        console.log(computerCell);
        console.log(computerCellOne);
        if (xCoordRandom + 1 >= 10 || yCoordRandom + 1 >= 10) {
          console.log('Coordinates are off the board.'); // Testing
          console.log('X: ', xCoordRandom + 1); // Testing
          console.log('Y: ', yCoordRandom + 1); // Testing 
          console.log('\n'); // Testing 

          xCoordRandom = Math.floor(Math.random() * computerRows.length);
          yCoordRandom = Math.floor(Math.random() * 10);
        } else if (computerCell.classList.contains('computer-ship-placed') || computerCellOne.classList.contains('computer-ship-placed')) {
          console.log('There is an overlap'); // Testing
          xCoordRandom = Math.floor(Math.random() * computerRows.length);
          yCoordRandom = Math.floor(Math.random() * 10);
        } else {
          console.log('Leave Loop...');
          console.log('\n'); // Testing  
          computerShipPlaced = true;
        }
        console.log('-----------------------------'); // Testing
      };
      while (!computerShipPlaced) {
        _loop();
      }
      var _computerCell = document.querySelector(".computer-gameboard > div > div[data-x=\"".concat(xCoordRandom, "\"][data-y=\"").concat(yCoordRandom, "\"]"));
      _computerCell.classList.add('computer-ship-placed');
      _computerCell.setAttribute('style', 'background-color: red;'); // Testing

      var computerCellOne = document.querySelector(".computer-gameboard > div > div[data-x=\"".concat(xCoordRandom + xLengthOne, "\"][data-y=\"").concat(yCoordRandom + yLengthOne, "\"]"));
      computerCellOne.classList.add('computer-ship-placed');
      computerCellOne.setAttribute('style', 'background-color: red;'); // Testing 

      _utils_ShipPlacementData__WEBPACK_IMPORTED_MODULE_6__.ComputerPlacedShips["ship ".concat(index)] = {
        coordinates: {
          0: [xCoordRandom, yCoordRandom],
          1: [xCoordRandom + xLengthOne, yCoordRandom + yLengthOne]
        },
        length: ship + 1,
        hits: 0,
        sunk: false
      };
      console.log('Computer Placed Ships: ', _utils_ShipPlacementData__WEBPACK_IMPORTED_MODULE_6__.ComputerPlacedShips); // Testing 
    } else if (ship === 2) {
      console.log("|Ship ".concat(ship, "|")); // Testing
      var _loop2 = function _loop2() {
        var coordinates = {};
        var coordinateIndex = 0;

        // Find which coordinates already have ship placements (Find 'computer-ship-placed'): 
        computerCells.forEach(function (cell) {
          if (cell.classList.contains('computer-ship-placed')) {
            console.log('X Cell: ', cell.dataset.x); // Testing
            console.log('Y Cell: ', cell.dataset.y); // Testing
            console.log('X Random: ', xCoordRandom); // Testing 
            console.log('Y Random: ', yCoordRandom); // Testing 
            coordinates[coordinateIndex++] = [parseInt(cell.dataset.x), parseInt(cell.dataset.y)];
            console.log('\n'); // Testing
          }
        });
        console.log('Coordinates with ship placements: ', coordinates); // Testing

        // Testing for overlapping ship placements and searching for open cells. 
        for (var key in coordinates) {
          // Test if ship length 2 is overlapping the other ships on the board. 
          var coordinatesNotOverlapping = false;
          console.log(coordinates[key]); // Testing 
          while (!coordinatesNotOverlapping) {
            if (coordinates[key][0] === xCoordRandom && coordinates[key][1] === yCoordRandom || coordinates[key][0] === xCoordRandom + xLengthOne && coordinates[key][1] === yCoordRandom + yLengthOne || coordinates[key][0] === xCoordRandom + xLengthTwo && coordinates[key][1] === yCoordRandom + yLengthTwo || coordinates[key][0] === xCoordRandom && coordinates[key][1] === yCoordRandom && coordinates[key][0] === xCoordRandom + xLengthOne && coordinates[key][1] === yCoordRandom + yLengthOne && coordinates[key][0] === xCoordRandom + xLengthTwo && coordinates[key][1] === yCoordRandom + yLengthTwo) {
              xCoordRandom = Math.floor(Math.random() * computerRows.length);
              yCoordRandom = Math.floor(Math.random() * 10);
              console.log("found"); // Testing
            } else {
              coordinatesNotOverlapping = true;
            }

            // Stop the coordinates from leaving the board if they are changed. 
            if (xCoordRandom + 2 >= 10 || yCoordRandom + 2 >= 10) {
              xCoordRandom = Math.floor(Math.random() * computerRows.length);
              yCoordRandom = Math.floor(Math.random() * 10);
            }
          }
        }
        var computerCell = document.querySelector(".computer-gameboard > div > div[data-x=\"".concat(xCoordRandom, "\"][data-y=\"").concat(yCoordRandom, "\"]")); // Testing
        var computerCellOne = document.querySelector(".computer-gameboard > div > div[data-x=\"".concat(xCoordRandom + xLengthOne, "\"][data-y=\"").concat(yCoordRandom + yLengthOne, "\"]")); // Testing
        var computerCellTwo = document.querySelector(".computer-gameboard > div > div[data-x=\"".concat(xCoordRandom + xLengthTwo, "\"][data-y=\"").concat(yCoordRandom + yLengthTwo, "\"]")); // Testing
        console.log(computerCell); // Testing 
        console.log(computerCellOne); // Testing 
        console.log(computerCellTwo); // Testing 

        if (xCoordRandom + 2 >= 10 || yCoordRandom + 2 >= 10) {
          console.log("Coordinates are off the board."); // Testing
          console.log("X: ", xCoordRandom + 2); // Testing 
          console.log("Y: ", yCoordRandom + 2); // Testing
          console.log('\n'); // Testing 

          xCoordRandom = Math.floor(Math.random() * computerRows.length);
          yCoordRandom = Math.floor(Math.random() * 10);
        } else if (computerCell.classList.contains('computer-ship-placed') || computerCellOne.classList.contains('computer-ship-placed') || computerCellTwo.classList.contains('computer-ship-placed')) {
          console.log('There is an overlap.'); // Testing
          xCoordRandom = Math.floor(Math.random() * computerRows.length);
          yCoordRandom = Math.floor(Math.random() * 10);
        } else {
          console.log("Leaving..."); // Testing 
          console.log('\n'); // Testing 
          computerShipPlaced = true; // Testing 
        }
        console.log("-----------------------------"); // Testing 
      };
      while (!computerShipPlaced) {
        _loop2();
      }
      var _computerCell2 = document.querySelector(".computer-gameboard > div > div[data-x=\"".concat(xCoordRandom, "\"][data-y=\"").concat(yCoordRandom, "\"]"));
      _computerCell2.classList.add('computer-ship-placed');
      _computerCell2.setAttribute('style', 'background-color: green;');
      var _computerCellOne = document.querySelector(".computer-gameboard > div > div[data-x=\"".concat(xCoordRandom + xLengthOne, "\"][data-y=\"").concat(yCoordRandom + yLengthOne, "\"]"));
      _computerCellOne.classList.add('computer-ship-placed');
      _computerCellOne.setAttribute('style', 'background-color: green;');
      var computerCellTwo = document.querySelector(".computer-gameboard > div > div[data-x=\"".concat(xCoordRandom + xLengthTwo, "\"][data-y=\"").concat(yCoordRandom + yLengthTwo, "\"]"));
      computerCellTwo.classList.add('computer-ship-placed');
      computerCellTwo.setAttribute('style', 'background-color: green;');
      _utils_ShipPlacementData__WEBPACK_IMPORTED_MODULE_6__.ComputerPlacedShips["ship ".concat(index)] = {
        coordinates: {
          0: [xCoordRandom, yCoordRandom],
          1: [xCoordRandom + xLengthOne, yCoordRandom + yLengthOne],
          2: [xCoordRandom + xLengthTwo, yCoordRandom + yLengthTwo]
        },
        length: ship + 1,
        hits: 0,
        sunk: false
      };
      console.log('Computer Placed Ships: ', _utils_ShipPlacementData__WEBPACK_IMPORTED_MODULE_6__.ComputerPlacedShips); // Testing 
    } else if (ship === 3) {
      console.log("|Ship ".concat(ship, "|"));
      var _loop3 = function _loop3() {
        var coordinates = {};
        var coordinateIndex = 0;

        // Find which coordinates already have ship placements (Find 'computer-ship-placed'): 
        computerCells.forEach(function (cell) {
          if (cell.classList.contains('computer-ship-placed')) {
            console.log("X Cell: ", cell.dataset.x); // Testing
            console.log("Y Cell: ", cell.dataset.y); // Testing 
            console.log("X Random: ", xCoordRandom); // Testing
            console.log("Y Random: ", yCoordRandom); // Testing
            coordinates[coordinateIndex++] = [parseInt(cell.dataset.x), parseInt(cell.dataset.y)];
            console.log('\n'); // Testing
          }
        });
        console.log("Coordinates with ship placements: ", coordinates); // Testing 

        // Testing for overlapping ship placements and searching for open cells. 
        for (var key in coordinates) {
          // Test if ship length 2 is overlapping the other ships on the board. 
          var coordinatesNotOverlapping = false;
          console.log(coordinates[key]); // Testing 
          while (!coordinatesNotOverlapping) {
            if (coordinates[key][0] === xCoordRandom && coordinates[key][1] === yCoordRandom || coordinates[key][0] === xCoordRandom + xLengthOne && coordinates[key][1] === yCoordRandom + yLengthOne || coordinates[key][0] === xCoordRandom + xLengthTwo && coordinates[key][1] === yCoordRandom + yLengthTwo || coordinates[key][0] === xCoordRandom + xLengthThree && coordinates[key][1] === yCoordRandom + yLengthThree || coordinates[key][0] === xCoordRandom && coordinates[key][1] === yCoordRandom && coordinates[key][0] === xCoordRandom + xLengthOne && coordinates[key][1] === yCoordRandom + yLengthOne && coordinates[key][0] === xCoordRandom + xLengthTwo && coordinates[key][1] === yCoordRandom + yLengthTwo && coordinates[key][0] === xCoordRandom + xLengthThree && coordinates[key][1] === yCoordRandom + yLengthThree) {
              xCoordRandom = Math.floor(Math.random() * computerRows.length);
              yCoordRandom = Math.floor(Math.random() * 10);
              console.log("found"); // Testing
            } else {
              coordinatesNotOverlapping = true;
            }

            // Stop the coordinates from leaving the board if they are changed. 
            if (xCoordRandom + 3 >= 10 || yCoordRandom + 3 >= 10) {
              xCoordRandom = Math.floor(Math.random() * computerRows.length);
              yCoordRandom = Math.floor(Math.random() * 10);
            }
          }
        }
        var computerCell = document.querySelector(".computer-gameboard > div > div[data-x=\"".concat(xCoordRandom, "\"][data-y=\"").concat(yCoordRandom, "\"]")); // Testing
        var computerCellOne = document.querySelector(".computer-gameboard > div > div[data-x=\"".concat(xCoordRandom + xLengthOne, "\"][data-y=\"").concat(yCoordRandom + yLengthOne, "\"]")); // Testing
        var computerCellTwo = document.querySelector(".computer-gameboard > div > div[data-x=\"".concat(xCoordRandom + xLengthTwo, "\"][data-y=\"").concat(yCoordRandom + yLengthTwo, "\"]")); // Testing
        var computerCellThree = document.querySelector(".computer-gameboard > div > div[data-x=\"".concat(xCoordRandom + xLengthThree, "\"][data-y=\"").concat(yCoordRandom + yLengthThree, "\"]")); // Testing
        console.log(computerCell); // Testing
        console.log(computerCellOne); // Testing
        console.log(computerCellTwo); // Testing
        console.log(computerCellThree); // Testing

        if (xCoordRandom + 3 >= 10 || yCoordRandom + 3 >= 10) {
          console.log("Coordinates are off the board."); // Testing
          console.log("X: ", xCoordRandom + 3); // Testing
          console.log("Y: ", yCoordRandom + 3); // Testing
          console.log('\n'); // Testing  

          xCoordRandom = Math.floor(Math.random() * computerRows.length);
          yCoordRandom = Math.floor(Math.random() * 10);
        } else if (computerCell.classList.contains('computer-ship-placed') || computerCellOne.classList.contains('computer-ship-placed') || computerCellTwo.classList.contains('computer-ship-placed') || computerCellThree.classList.contains('computer-ship-placed')) {
          console.log("There is an overlap."); // Testing
          xCoordRandom = Math.floor(Math.random() * computerRows.length);
          yCoordRandom = Math.floor(Math.random() * 10);
        } else {
          console.log("Leaving..."); // Testing
          console.log("\n"); // Testing
          computerShipPlaced = true;
        }
        console.log("-----------------------------"); // Testing 
      };
      while (!computerShipPlaced) {
        _loop3();
      }
      var _computerCell3 = document.querySelector(".computer-gameboard > div > div[data-x=\"".concat(xCoordRandom, "\"][data-y=\"").concat(yCoordRandom, "\"]"));
      _computerCell3.classList.add('computer-ship-placed');
      _computerCell3.setAttribute('style', 'background-color: orange;');
      var _computerCellOne2 = document.querySelector(".computer-gameboard > div > div[data-x=\"".concat(xCoordRandom + xLengthOne, "\"][data-y=\"").concat(yCoordRandom + yLengthOne, "\"]"));
      _computerCellOne2.classList.add('computer-ship-placed');
      _computerCellOne2.setAttribute('style', 'background-color: orange;');
      var _computerCellTwo = document.querySelector(".computer-gameboard > div > div[data-x=\"".concat(xCoordRandom + xLengthTwo, "\"][data-y=\"").concat(yCoordRandom + yLengthTwo, "\"]"));
      _computerCellTwo.classList.add('computer-ship-placed');
      _computerCellTwo.setAttribute('style', 'background-color: orange;');
      var computerCellThree = document.querySelector(".computer-gameboard > div > div[data-x=\"".concat(xCoordRandom + xLengthThree, "\"][data-y=\"").concat(yCoordRandom + yLengthThree, "\"]"));
      computerCellThree.classList.add('computer-ship-placed');
      computerCellThree.setAttribute('style', 'background-color: orange;');
      _utils_ShipPlacementData__WEBPACK_IMPORTED_MODULE_6__.ComputerPlacedShips["ship ".concat(index)] = {
        coordinates: {
          0: [xCoordRandom, yCoordRandom],
          1: [xCoordRandom + xLengthOne, yCoordRandom + yLengthOne],
          2: [xCoordRandom + xLengthTwo, yCoordRandom + yLengthTwo],
          3: [xCoordRandom + xLengthThree, yCoordRandom + yLengthThree]
        },
        length: ship + 1,
        hits: 0,
        sunk: false
      };
      console.log('Computer Placed Ships: ', _utils_ShipPlacementData__WEBPACK_IMPORTED_MODULE_6__.ComputerPlacedShips); // Testing 
    }
  });
}

// IntefaceDOM(): Interface section for the user. 
function InterfaceDOM() {
  var gameboardContainer = document.querySelector('.gameboard-container');
  var playerInterface = document.createElement('div');
  playerInterface.classList.add('interface');
  var newGame = document.createElement('button');
  newGame.textContent = 'New Game';
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
  playerInterface.appendChild(coordinateContainer);
  playerInterface.appendChild(numberOfShipsPlaced);
  gameboardContainer.appendChild(playerInterface);
  newGame.addEventListener('click', NewGame);

  // xCoord.addEventListener('click', ChangeToXAxis);
  // yCoord.addEventListener('click', ChangeToYAxis); 
}

// ChangeToXAxis(): Will allow the player to place ships along the x-axis.
function ChangeToXAxis(e) {
  var xCoord = document.querySelector('.interface > div > button:nth-child(1)');
  console.log(xCoord);
  var yCoord = document.querySelector('.interface > div > button:nth-child(2)');
  if (_utils_NewGame__WEBPACK_IMPORTED_MODULE_1__.NewGameSelected.newGameSelected) {
    _utils_AxisChange__WEBPACK_IMPORTED_MODULE_3__.AxisChange.axisWasChanged = true;
    _utils_AxisChange__WEBPACK_IMPORTED_MODULE_3__.AxisChange.axisChange = 1;
    yCoord.classList.remove('current-coordinate');
    xCoord.classList.add('current-coordinate');
    PlaceShips(e);
  }
}

// ChangeToYAxis(): Will allow the player to place ships along the y-axis. 
function ChangeToYAxis(e) {
  var xCoord = document.querySelector('.interface > div > button:nth-child(1)');
  var yCoord = document.querySelector('.interface > div > button:nth-child(2)');
  if (_utils_NewGame__WEBPACK_IMPORTED_MODULE_1__.NewGameSelected.newGameSelected) {
    _utils_AxisChange__WEBPACK_IMPORTED_MODULE_3__.AxisChange.axisWasChanged = true;
    _utils_AxisChange__WEBPACK_IMPORTED_MODULE_3__.AxisChange.axisChange = 2;
    xCoord.classList.remove('current-coordinate');
    yCoord.classList.add('current-coordinate');
    PlaceShips(e);
  }
}

// NewGame(): Will begin a new game for the player. 
function NewGame() {
  var cells = document.querySelectorAll('.player-one-board > div > div');
  var computerCells = document.querySelectorAll('.computer-gameboard > div > div');
  var xCoord = document.querySelector('.interface > div > button:nth-child(1)');
  var yCoord = document.querySelector('.interface > div > button:nth-child(2)');
  console.log('Player begins a new game.'); // Testing 
  console.log('\n'); // Testing 

  // TODO: Reset all the game attributes in this function when the
  // user wants to start a new game. 

  // TODO: Reset all the cells on each gameboard. 

  _utils_NewGame__WEBPACK_IMPORTED_MODULE_1__.NewGameSelected.newGameSelected = true;
  _utils_ActivateGame__WEBPACK_IMPORTED_MODULE_4__.ActivateGame.activateGame = false;
  _utils_ActivateGame__WEBPACK_IMPORTED_MODULE_4__.ActivateGame.activatePlayerOneTurn = true;
  _utils_DisablePlacement__WEBPACK_IMPORTED_MODULE_5__.DisablePlacement.disablePlacement = false;
  _utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.lengthIndex = 0;
  _utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.shipLength = 0;
  _utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.shipsPlaced = 0;
  _utils_AxisChange__WEBPACK_IMPORTED_MODULE_3__.AxisChange.axisChange = null;
  _utils_AxisChange__WEBPACK_IMPORTED_MODULE_3__.AxisChange.axisWasChanged = false;
  Object.assign(_utils_ShipPlacementData__WEBPACK_IMPORTED_MODULE_6__.PlacedShips, {}); // assign empty objects to both of the placement objects. 
  Object.assign(_utils_ShipPlacementData__WEBPACK_IMPORTED_MODULE_6__.ComputerPlacedShips, {});

  // Clean the computer gameboard. 
  computerCells.forEach(function (computerCell) {
    computerCell.classList.remove('computer-ship-placed');
    computerCell.classList.remove('computer-ship-hit');
    computerCell.removeAttribute('style'); // Testing  
    computerCell.replaceChildren();
  });

  // Clean the player gameboard. 
  cells.forEach(function (cell) {
    cell.classList.remove('ship-placed');
    cell.classList.remove('hover-test');
    cell.classList.remove('player-one-ship-hit');
    cell.classList.remove('computer-hit-missed');
    cell.removeEventListener('click', PlaceOnX);
    cell.removeEventListener('click', PlaceOnY);
    cell.replaceChildren();
  });

  // Clean the x and y axe buttons. 
  // xCoord.classList.remove('current-coordinate'); 
  // yCoord.classList.remove('current-coordinate');
  xCoord.addEventListener('click', ChangeToXAxis);
  yCoord.addEventListener('click', ChangeToYAxis);

  // Cleans the player and computer display events. 
  document.getElementById('player-gameboard-events').textContent = "";
  document.getElementById('computer-gameboard-events').textContent = "";
  ComputerPlaceShips();
  PlaceShips();
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
  if (_utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.shipLength === 0) {
    cell.classList.add('hover-test');
  } else if (_utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.shipLength === 1)
    // The ship length to be placed on the board.
    {
      if (!(parseInt(e.target.dataset.y) === 9))
        // Keeps all ship placements on the gameboard. 
        {
          cell.classList.add('hover-test');
          nextCellOne.classList.add('hover-test');
          _utils_DisablePlacement__WEBPACK_IMPORTED_MODULE_5__.DisablePlacement.disablePlacement = false;
        } else {
        _utils_DisablePlacement__WEBPACK_IMPORTED_MODULE_5__.DisablePlacement.disablePlacement = true;
      }
    } else if (_utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.shipLength === 2) {
    if (!(parseInt(e.target.dataset.y) + 2 === 10) && !(parseInt(e.target.dataset.y) + 1 === 9) && !(parseInt(e.target.dataset.y) === 9)) {
      cell.classList.add('hover-test');
      nextCellOne.classList.add('hover-test');
      nextCellTwo.classList.add('hover-test');
      _utils_DisablePlacement__WEBPACK_IMPORTED_MODULE_5__.DisablePlacement.disablePlacement = false;
    } else {
      _utils_DisablePlacement__WEBPACK_IMPORTED_MODULE_5__.DisablePlacement.disablePlacement = true;
    }
  } else if (_utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.shipLength === 3) {
    if (!(parseInt(e.target.dataset.y) + 3 === 10) && !(parseInt(e.target.dataset.y) + 2 === 9) && !(parseInt(e.target.dataset.y) + 1 === 9) && !(parseInt(e.target.dataset.y) === 9)) {
      cell.classList.add('hover-test');
      nextCellOne.classList.add('hover-test');
      nextCellTwo.classList.add('hover-test');
      nextCellThree.classList.add('hover-test');
      _utils_DisablePlacement__WEBPACK_IMPORTED_MODULE_5__.DisablePlacement.disablePlacement = false;
    } else {
      _utils_DisablePlacement__WEBPACK_IMPORTED_MODULE_5__.DisablePlacement.disablePlacement = true;
    }
  }

  // Note: I could put this in its own function, but for now I will use the EnterX function to test
  // this alogorithm out. It would be a lot more effecient to place this in another function
  // so you can remove the click event. You should put them in the PlaceOnX() and PlaceOnY() functions. But
  // for now you can use the ShipData.lengthIndex property in the if statement condition. Currently
  // Using disablePlacement to stop the player from the placing a ship on the gameboard when they leave
  // the board. 

  cell.addEventListener('click', PlaceOnX);
  // cell.addEventListener('click', () => {
  //     if (!disablePlacement)
  //     {
  //         console.log('X: ', cell.dataset.x); 
  //         console.log('Y: ', cell.dataset.y); 

  //         if (ShipData.shipLength === 0 && ShipData.lengthIndex < 10) 
  //         {
  //             if (cell.classList.contains('ship-placed')) // Cant place the ship on this cell when there is one already on the cell. 
  //             {
  //                 console.log('Cell already contains a ship'); // Testing
  //             }
  //             else
  //             {
  //                 cell.classList.add('ship-placed'); 
  //                 PlacedShips[`ship ${ShipData.lengthIndex}`].coordinates = {0: [parseInt(cell.dataset.x), parseInt(cell.dataset.y)]};
  //                 ShipData.lengthIndex++; 
  //                 AxisChange.axisWasChanged = false;
  //                 PlaceShips(); 
  //             }       
  //         }
  //         else if (ShipData.shipLength === 1 && ShipData.lengthIndex < 10)
  //         {
  //             if ((cell.classList.contains('ship-placed') && nextCellOne.classList.contains('ship-placed')) 
  //             || (cell.classList.contains('ship-placed') || nextCellOne.classList.contains('ship-placed')))
  //             {
  //                 console.log('Cell already contains a ship'); // Testing
  //             }
  //             else
  //             {
  //                 cell.classList.add('ship-placed');
  //                 nextCellOne.classList.add('ship-placed');
  //                 PlacedShips[`ship ${ShipData.lengthIndex}`].coordinates = {0: [parseInt(cell.dataset.x), parseInt(cell.dataset.y)], 
  //                                                                            1: [parseInt(nextCellOne.dataset.x), parseInt(nextCellOne.dataset.y)]};
  //                 ShipData.lengthIndex++;
  //                 AxisChange.axisWasChanged = false;
  //                 PlaceShips(); 
  //             }
  //         }
  //         else if (ShipData.shipLength === 2 && ShipData.lengthIndex < 10)
  //         {
  //             if ((cell.classList.contains('ship-placed') && nextCellOne.classList.contains('ship-placed') && nextCellTwo.classList.contains('ship-placed')) 
  //             || (cell.classList.contains('ship-placed') || nextCellOne.classList.contains('ship-placed') || nextCellTwo.classList.contains('ship-placed')))
  //             {
  //                 console.log('Cell already contains a ship'); // Testing
  //             }
  //             else
  //             {
  //                 cell.classList.add('ship-placed');
  //                 nextCellOne.classList.add('ship-placed');
  //                 nextCellTwo.classList.add('ship-placed');
  //                 PlacedShips[`ship ${ShipData.lengthIndex}`].coordinates = {0: [parseInt(cell.dataset.x), parseInt(cell.dataset.y)],
  //                                                                            1: [parseInt(nextCellOne.dataset.x), parseInt(nextCellOne.dataset.y)],
  //                                                                            2: [parseInt(nextCellTwo.dataset.x), parseInt(nextCellTwo.dataset.y)]};
  //                 ShipData.lengthIndex++;
  //                 AxisChange.axisWasChanged = false;
  //                 PlaceShips(); 
  //             }
  //         }
  //         else if (ShipData.shipLength === 3 && ShipData.lengthIndex < 10)
  //         {
  //             if ((cell.classList.contains('ship-placed') && nextCellOne.classList.contains('ship-placed') && nextCellTwo.classList.contains('ship-placed') && nextCellThree.classList.contains('ship-placed'))
  //             || (cell.classList.contains('ship-placed') || nextCellOne.classList.contains('ship-placed') || nextCellTwo.classList.contains('ship-placed') || nextCellThree.classList.contains('ship-placed')))
  //             {
  //                 console.log('Cell already contains a ship'); // Testing
  //             }
  //             else
  //             {
  //                 cell.classList.add('ship-placed');
  //                 nextCellOne.classList.add('ship-placed');
  //                 nextCellTwo.classList.add('ship-placed');
  //                 nextCellThree.classList.add('ship-placed');
  //                 PlacedShips[`ship ${ShipData.lengthIndex}`].coordinates = {0: [parseInt(cell.dataset.x), parseInt(cell.dataset.y)],
  //                                                                            1: [parseInt(nextCellOne.dataset.x), parseInt(nextCellOne.dataset.y)],
  //                                                                            2: [parseInt(nextCellTwo.dataset.x), parseInt(nextCellTwo.dataset.y)],
  //                                                                            3: [parseInt(nextCellThree.dataset.x), parseInt(nextCellThree.dataset.y)]};
  //                 ShipData.lengthIndex++; 
  //                 AxisChange.axisWasChanged = false; 
  //                 PlaceShips(); 
  //             }
  //         }
  //     }
  // });
}

// PlaceOnX(): Will place a ship on the gameboards x-axis.
function PlaceOnX(e) {
  var cells = document.querySelectorAll('.player-one-board > div > div');
  cells.forEach(function (cell) {
    cell.classList.remove('hover-test');
  });
  if (!_utils_DisablePlacement__WEBPACK_IMPORTED_MODULE_5__.DisablePlacement.disablePlacement) {
    console.log('X: ', e.target.dataset.x);
    console.log('Y: ', e.target.dataset.y);
    var cell = document.querySelector("[data-x=\"".concat(e.target.dataset.x, "\"][data-y=\"").concat(e.target.dataset.y, "\"]"));
    var nextCellOne = document.querySelector("[data-x=\"".concat(e.target.dataset.x, "\"][data-y=\"").concat(parseInt(e.target.dataset.y) + 1, "\"]"));
    var nextCellTwo = document.querySelector("[data-x=\"".concat(e.target.dataset.x, "\"][data-y=\"").concat(parseInt(e.target.dataset.y) + 2, "\"]"));
    var nextCellThree = document.querySelector("[data-x=\"".concat(e.target.dataset.x, "\"][data-y=\"").concat(parseInt(e.target.dataset.y) + 3, "\"]"));
    if (_utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.shipLength === 0 && _utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.lengthIndex < 10) {
      if (cell.classList.contains('ship-placed'))
        // Cant place the ship on this cell when there is one already on the cell. 
        {
          // console.log('Cell already contains a ship'); // Testing
          return;
        } else {
        cell.classList.add('ship-placed');
        _utils_ShipPlacementData__WEBPACK_IMPORTED_MODULE_6__.PlacedShips["ship ".concat(_utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.lengthIndex)].coordinates = {
          0: [parseInt(cell.dataset.x), parseInt(cell.dataset.y)]
        };
        _utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.lengthIndex++;
        _utils_AxisChange__WEBPACK_IMPORTED_MODULE_3__.AxisChange.axisWasChanged = false;
        PlaceShips();
      }
    } else if (_utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.shipLength === 1 && _utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.lengthIndex < 10) {
      if (cell.classList.contains('ship-placed') && nextCellOne.classList.contains('ship-placed') || cell.classList.contains('ship-placed') || nextCellOne.classList.contains('ship-placed')) {
        // console.log('Cell already contains a ship'); // Testing
        return;
      } else {
        cell.classList.add('ship-placed');
        nextCellOne.classList.add('ship-placed');
        _utils_ShipPlacementData__WEBPACK_IMPORTED_MODULE_6__.PlacedShips["ship ".concat(_utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.lengthIndex)].coordinates = {
          0: [parseInt(cell.dataset.x), parseInt(cell.dataset.y)],
          1: [parseInt(nextCellOne.dataset.x), parseInt(nextCellOne.dataset.y)]
        };
        _utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.lengthIndex++;
        _utils_AxisChange__WEBPACK_IMPORTED_MODULE_3__.AxisChange.axisWasChanged = false;
        PlaceShips();
      }
    } else if (_utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.shipLength === 2 && _utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.lengthIndex < 10) {
      if (cell.classList.contains('ship-placed') && nextCellOne.classList.contains('ship-placed') && nextCellTwo.classList.contains('ship-placed') || cell.classList.contains('ship-placed') || nextCellOne.classList.contains('ship-placed') || nextCellTwo.classList.contains('ship-placed')) {
        // console.log('Cell already contains a ship'); // Testing
        return;
      } else {
        cell.classList.add('ship-placed');
        nextCellOne.classList.add('ship-placed');
        nextCellTwo.classList.add('ship-placed');
        _utils_ShipPlacementData__WEBPACK_IMPORTED_MODULE_6__.PlacedShips["ship ".concat(_utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.lengthIndex)].coordinates = {
          0: [parseInt(cell.dataset.x), parseInt(cell.dataset.y)],
          1: [parseInt(nextCellOne.dataset.x), parseInt(nextCellOne.dataset.y)],
          2: [parseInt(nextCellTwo.dataset.x), parseInt(nextCellTwo.dataset.y)]
        };
        _utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.lengthIndex++;
        _utils_AxisChange__WEBPACK_IMPORTED_MODULE_3__.AxisChange.axisWasChanged = false;
        PlaceShips();
      }
    } else if (_utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.shipLength === 3 && _utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.lengthIndex < 10) {
      if (cell.classList.contains('ship-placed') && nextCellOne.classList.contains('ship-placed') && nextCellTwo.classList.contains('ship-placed') && nextCellThree.classList.contains('ship-placed') || cell.classList.contains('ship-placed') || nextCellOne.classList.contains('ship-placed') || nextCellTwo.classList.contains('ship-placed') || nextCellThree.classList.contains('ship-placed')) {
        // console.log('Cell already contains a ship'); // Testing
        return;
      } else {
        cell.classList.add('ship-placed');
        nextCellOne.classList.add('ship-placed');
        nextCellTwo.classList.add('ship-placed');
        nextCellThree.classList.add('ship-placed');
        _utils_ShipPlacementData__WEBPACK_IMPORTED_MODULE_6__.PlacedShips["ship ".concat(_utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.lengthIndex)].coordinates = {
          0: [parseInt(cell.dataset.x), parseInt(cell.dataset.y)],
          1: [parseInt(nextCellOne.dataset.x), parseInt(nextCellOne.dataset.y)],
          2: [parseInt(nextCellTwo.dataset.x), parseInt(nextCellTwo.dataset.y)],
          3: [parseInt(nextCellThree.dataset.x), parseInt(nextCellThree.dataset.y)]
        };
        _utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.lengthIndex++;
        _utils_AxisChange__WEBPACK_IMPORTED_MODULE_3__.AxisChange.axisWasChanged = false;
        PlaceShips();
      }
    }
  }
}

// LeaveX(): Will leave each cell from the x-axis selection. 
function LeaveX(e) {
  var cell = document.querySelector("[data-x=\"".concat(e.target.dataset.x, "\"][data-y=\"").concat(e.target.dataset.y, "\"]"));
  var nextCellOne = document.querySelector("[data-x=\"".concat(e.target.dataset.x, "\"][data-y=\"").concat(parseInt(e.target.dataset.y) + 1, "\"]"));
  var nextCellTwo = document.querySelector("[data-x=\"".concat(e.target.dataset.x, "\"][data-y=\"").concat(parseInt(e.target.dataset.y) + 2, "\"]"));
  var nextCellThree = document.querySelector("[data-x=\"".concat(e.target.dataset.x, "\"][data-y=\"").concat(parseInt(e.target.dataset.y) + 3, "\"]"));
  if (e.target.classList.contains('hover-test')) {
    if (_utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.shipLength === 0) {
      cell.classList.remove('hover-test');
    } else if (_utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.shipLength === 1) {
      cell.classList.remove('hover-test');
      nextCellOne.classList.remove('hover-test');
    } else if (_utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.shipLength === 2) {
      cell.classList.remove('hover-test');
      nextCellOne.classList.remove('hover-test');
      nextCellTwo.classList.remove('hover-test');
    } else if (_utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.shipLength === 3) {
      cell.classList.remove('hover-test');
      nextCellOne.classList.remove('hover-test');
      nextCellTwo.classList.remove('hover-test');
      nextCellThree.classList.remove('hover-test');
    }
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
  if (_utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.shipLength === 0) {
    cell.classList.add('hover-test');
  } else if (_utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.shipLength === 1) {
    if (!(parseInt(e.target.dataset.x) === 9)) {
      cell.classList.add('hover-test');
      nextCellOne.classList.add('hover-test');
      _utils_DisablePlacement__WEBPACK_IMPORTED_MODULE_5__.DisablePlacement.disablePlacement = false;
    } else {
      _utils_DisablePlacement__WEBPACK_IMPORTED_MODULE_5__.DisablePlacement.disablePlacement = true;
    }
  } else if (_utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.shipLength === 2) {
    if (!(parseInt(e.target.dataset.x) + 2 === 10) && !(parseInt(e.target.dataset.x) + 1 === 9) && !(parseInt(e.target.dataset.x) === 9)) {
      cell.classList.add('hover-test');
      nextCellOne.classList.add('hover-test');
      nextCellTwo.classList.add('hover-test');
      _utils_DisablePlacement__WEBPACK_IMPORTED_MODULE_5__.DisablePlacement.disablePlacement = false;
    } else {
      _utils_DisablePlacement__WEBPACK_IMPORTED_MODULE_5__.DisablePlacement.disablePlacement = true;
    }
  } else if (_utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.shipLength === 3) {
    if (!(parseInt(e.target.dataset.x) + 3 === 10) && !(parseInt(e.target.dataset.x) + 2 === 9) && !(parseInt(e.target.dataset.x) + 1 === 9) && !(parseInt(e.target.dataset.x) === 9)) {
      cell.classList.add('hover-test');
      nextCellOne.classList.add('hover-test');
      nextCellTwo.classList.add('hover-test');
      nextCellThree.classList.add('hover-test');
      _utils_DisablePlacement__WEBPACK_IMPORTED_MODULE_5__.DisablePlacement.disablePlacement = false;
    } else {
      _utils_DisablePlacement__WEBPACK_IMPORTED_MODULE_5__.DisablePlacement.disablePlacement = true;
    }
  }

  // Places the ships on the board cells:
  cell.addEventListener('click', PlaceOnY);
  // cell.addEventListener('click', () => {
  //     if (!disablePlacement)
  //     {
  //         console.log("X: ", cell.dataset.x); // Testing 
  //         console.log("Y: ", cell.dataset.y); // Testing   
  //         if (ShipData.shipLength === 0 && ShipData.lengthIndex < 10)
  //         {
  //             if (cell.classList.contains('ship-placed'))
  //             {
  //                 console.log("Cell already contains a ship."); // Testing 
  //             }
  //             else
  //             {
  //                 cell.classList.add('ship-placed'); 
  //                 PlacedShips[`ship ${ShipData.lengthIndex}`].coordinates = {0: [parseInt(cell.dataset.x), parseInt(cell.dataset.y)]};
  //                 ShipData.lengthIndex++; 
  //                 AxisChange.axisWasChanged = false;
  //                 PlaceShips(); 
  //             }
  //         }
  //         else if (ShipData.shipLength === 1 && ShipData.lengthIndex < 10)
  //         {
  //             if ((cell.classList.contains('ship-placed') && nextCellOne.classList.contains('ship-placed')) 
  //             || (cell.classList.contains('ship-placed') || nextCellOne.classList.contains('ship-placed')))
  //             {
  //                 console.log("Cell already contains a ship."); // Testing 
  //             }
  //             else
  //             {
  //                 cell.classList.add('ship-placed');
  //                 nextCellOne.classList.add('ship-placed'); 
  //                 PlacedShips[`ship ${ShipData.lengthIndex}`].coordinates = {0: [parseInt(cell.dataset.x), parseInt(cell.dataset.y)],
  //                                                                            1: [parseInt(nextCellOne.dataset.x), parseInt(nextCellOne.dataset.y)]};
  //                 ShipData.lengthIndex++;
  //                 AxisChange.axisWasChanged = false;
  //                 PlaceShips(); 
  //             }
  //         }
  //         else if (ShipData.shipLength === 2 && ShipData.lengthIndex < 10)
  //         {
  //             if ((cell.classList.contains('ship-placed') && nextCellOne.classList.contains('ship-placed') && nextCellTwo.classList.contains('ship-placed')) 
  //             || (cell.classList.contains('ship-placed') || nextCellOne.classList.contains('ship-placed') || nextCellTwo.classList.contains('ship-placed')))
  //             {
  //                 console.log("Cell already contains a ship"); // Testing 
  //             }
  //             else
  //             {
  //                 cell.classList.add('ship-placed'); 
  //                 nextCellOne.classList.add('ship-placed');
  //                 nextCellTwo.classList.add('ship-placed');
  //                 PlacedShips[`ship ${ShipData.lengthIndex}`].coordinates = {0: [parseInt(cell.dataset.x), parseInt(cell.dataset.y)],
  //                                                                            1: [parseInt(nextCellOne.dataset.x), parseInt(nextCellOne.dataset.y)],
  //                                                                            2: [parseInt(nextCellTwo.dataset.x), parseInt(nextCellTwo.dataset.y)]};
  //                 ShipData.lengthIndex++;
  //                 AxisChange.axisWasChanged = false; 
  //                 PlaceShips();
  //             }
  //         }
  //         else if (ShipData.shipLength === 3 && ShipData.lengthIndex < 10)
  //         {
  //             if ((cell.classList.contains('ship-placed') && nextCellOne.classList.contains('ship-placed') && nextCellTwo.classList.contains('ship-placed') && nextCellThree.classList.contains('ship-placed'))
  //             || (cell.classList.contains('ship-placed') || nextCellOne.classList.contains('ship-placed') || nextCellThree.classList.contains('ship-placed') && nextCellThree.classList.contains('ship-placed')))
  //             {
  //                 console.log("Cell already contains a ship"); // Testing 
  //             }
  //             else 
  //             {
  //                 cell.classList.add('ship-placed'); 
  //                 nextCellOne.classList.add('ship-placed');
  //                 nextCellTwo.classList.add('ship-placed');
  //                 nextCellThree.classList.add('ship-placed');
  //                 PlacedShips[`ship ${ShipData.lengthIndex}`].coordinates = {0: [parseInt(cell.dataset.x), parseInt(cell.dataset.y)],
  //                                                                            1: [parseInt(nextCellOne.dataset.x), parseInt(nextCellOne.dataset.y)],
  //                                                                            2: [parseInt(nextCellTwo.dataset.x), parseInt(nextCellTwo.dataset.y)],
  //                                                                            3: [parseInt(nextCellThree.dataset.x), parseInt(nextCellThree.dataset.y)]};
  //                 ShipData.lengthIndex++;
  //                 AxisChange.axisWasChanged = false;
  //                 PlaceShips(); 
  //             }
  //         }            
  //     }
  // });
}

// PlaceOnY(): Will place a ship on the gameboards y-axis. 
function PlaceOnY(e) {
  var cells = document.querySelectorAll('.player-one-board > div > div');
  cells.forEach(function (cell) {
    cell.classList.remove('hover-test');
  });
  if (!_utils_DisablePlacement__WEBPACK_IMPORTED_MODULE_5__.DisablePlacement.disablePlacement) {
    console.log("X: ", e.target.dataset.x); // Testing 
    console.log("Y: ", e.target.dataset.y); // Testing   

    var cell = document.querySelector("[data-x=\"".concat(e.target.dataset.x, "\"][data-y=\"").concat(e.target.dataset.y, "\"]"));
    var nextCellOne = document.querySelector("[data-x=\"".concat(parseInt(e.target.dataset.x) + 1, "\"][data-y=\"").concat(e.target.dataset.y, "\"]"));
    var nextCellTwo = document.querySelector("[data-x=\"".concat(parseInt(e.target.dataset.x) + 2, "\"][data-y=\"").concat(e.target.dataset.y, "\"]"));
    var nextCellThree = document.querySelector("[data-x=\"".concat(parseInt(e.target.dataset.x) + 3, "\"][data-y=\"").concat(e.target.dataset.y, "\"]"));
    if (_utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.shipLength === 0 && _utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.lengthIndex < 10) {
      if (cell.classList.contains('ship-placed')) {
        console.log("Cell already contains a ship."); // Testing 
        return;
      } else {
        cell.classList.add('ship-placed');
        _utils_ShipPlacementData__WEBPACK_IMPORTED_MODULE_6__.PlacedShips["ship ".concat(_utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.lengthIndex)].coordinates = {
          0: [parseInt(cell.dataset.x), parseInt(cell.dataset.y)]
        };
        _utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.lengthIndex++;
        _utils_AxisChange__WEBPACK_IMPORTED_MODULE_3__.AxisChange.axisWasChanged = false;
        PlaceShips();
      }
    } else if (_utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.shipLength === 1 && _utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.lengthIndex < 10) {
      if (cell.classList.contains('ship-placed') && nextCellOne.classList.contains('ship-placed') || cell.classList.contains('ship-placed') || nextCellOne.classList.contains('ship-placed')) {
        console.log("Cell already contains a ship."); // Testing 
        return;
      } else {
        cell.classList.add('ship-placed');
        nextCellOne.classList.add('ship-placed');
        _utils_ShipPlacementData__WEBPACK_IMPORTED_MODULE_6__.PlacedShips["ship ".concat(_utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.lengthIndex)].coordinates = {
          0: [parseInt(cell.dataset.x), parseInt(cell.dataset.y)],
          1: [parseInt(nextCellOne.dataset.x), parseInt(nextCellOne.dataset.y)]
        };
        _utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.lengthIndex++;
        _utils_AxisChange__WEBPACK_IMPORTED_MODULE_3__.AxisChange.axisWasChanged = false;
        PlaceShips();
      }
    } else if (_utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.shipLength === 2 && _utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.lengthIndex < 10) {
      if (cell.classList.contains('ship-placed') && nextCellOne.classList.contains('ship-placed') && nextCellTwo.classList.contains('ship-placed') || cell.classList.contains('ship-placed') || nextCellOne.classList.contains('ship-placed') || nextCellTwo.classList.contains('ship-placed')) {
        console.log("Cell already contains a ship"); // Testing 
        return;
      } else {
        cell.classList.add('ship-placed');
        nextCellOne.classList.add('ship-placed');
        nextCellTwo.classList.add('ship-placed');
        _utils_ShipPlacementData__WEBPACK_IMPORTED_MODULE_6__.PlacedShips["ship ".concat(_utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.lengthIndex)].coordinates = {
          0: [parseInt(cell.dataset.x), parseInt(cell.dataset.y)],
          1: [parseInt(nextCellOne.dataset.x), parseInt(nextCellOne.dataset.y)],
          2: [parseInt(nextCellTwo.dataset.x), parseInt(nextCellTwo.dataset.y)]
        };
        _utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.lengthIndex++;
        _utils_AxisChange__WEBPACK_IMPORTED_MODULE_3__.AxisChange.axisWasChanged = false;
        PlaceShips();
      }
    } else if (_utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.shipLength === 3 && _utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.lengthIndex < 10) {
      if (cell.classList.contains('ship-placed') && nextCellOne.classList.contains('ship-placed') && nextCellTwo.classList.contains('ship-placed') && nextCellThree.classList.contains('ship-placed') || cell.classList.contains('ship-placed') || nextCellOne.classList.contains('ship-placed') || nextCellThree.classList.contains('ship-placed') && nextCellThree.classList.contains('ship-placed')) {
        console.log("Cell already contains a ship"); // Testing 
        return;
      } else {
        cell.classList.add('ship-placed');
        nextCellOne.classList.add('ship-placed');
        nextCellTwo.classList.add('ship-placed');
        nextCellThree.classList.add('ship-placed');
        _utils_ShipPlacementData__WEBPACK_IMPORTED_MODULE_6__.PlacedShips["ship ".concat(_utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.lengthIndex)].coordinates = {
          0: [parseInt(cell.dataset.x), parseInt(cell.dataset.y)],
          1: [parseInt(nextCellOne.dataset.x), parseInt(nextCellOne.dataset.y)],
          2: [parseInt(nextCellTwo.dataset.x), parseInt(nextCellTwo.dataset.y)],
          3: [parseInt(nextCellThree.dataset.x), parseInt(nextCellThree.dataset.y)]
        };
        _utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.lengthIndex++;
        _utils_AxisChange__WEBPACK_IMPORTED_MODULE_3__.AxisChange.axisWasChanged = false;
        PlaceShips();
      }
    }
  }
}

// LeaveY(): Will leave each cell from the y-axis selection.
function LeaveY(e) {
  var cell = document.querySelector("[data-x=\"".concat(e.target.dataset.x, "\"][data-y=\"").concat(e.target.dataset.y, "\"]"));
  var nextCellOne = document.querySelector("[data-x=\"".concat(parseInt(e.target.dataset.x) + 1, "\"][data-y=\"").concat(e.target.dataset.y, "\"]"));
  var nextCellTwo = document.querySelector("[data-x=\"".concat(parseInt(e.target.dataset.x) + 2, "\"][data-y=\"").concat(e.target.dataset.y, "\"]"));
  var nextCellThree = document.querySelector("[data-x=\"".concat(parseInt(e.target.dataset.x) + 3, "\"][data-y=\"").concat(e.target.dataset.y, "\"]"));
  if (e.target.classList.contains('hover-test')) {
    if (_utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.shipLength === 0) {
      cell.classList.remove('hover-test');
    } else if (_utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.shipLength === 1) {
      cell.classList.remove('hover-test');
      nextCellOne.classList.remove('hover-test');
    } else if (_utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.shipLength === 2) {
      cell.classList.remove('hover-test');
      nextCellOne.classList.remove('hover-test');
      nextCellTwo.classList.remove('hover-test');
    } else if (_utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.shipLength === 3) {
      cell.classList.remove('hover-test');
      nextCellOne.classList.remove('hover-test');
      nextCellTwo.classList.remove('hover-test');
      nextCellThree.classList.remove('hover-test');
    }
  }
}

/***/ }),

/***/ "./src/utils/ActivateGame.js":
/*!***********************************!*\
  !*** ./src/utils/ActivateGame.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActivateGame: () => (/* binding */ ActivateGame)
/* harmony export */ });
// ActivateGame Literal Object: Data keys for activating the game.
var ActivateGame = {
  activateGame: false,
  activatePlayerOneTurn: true // Player one will always get to make the first hit.
};

/***/ }),

/***/ "./src/utils/AxisChange.js":
/*!*********************************!*\
  !*** ./src/utils/AxisChange.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AxisChange: () => (/* binding */ AxisChange)
/* harmony export */ });
// AxisChange Literal Object: Will contain data for toggling the x and y axis.
var AxisChange = {
  axisChange: null,
  axisWasChanged: false
};

/***/ }),

/***/ "./src/utils/DisablePlacement.js":
/*!***************************************!*\
  !*** ./src/utils/DisablePlacement.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DisablePlacement: () => (/* binding */ DisablePlacement)
/* harmony export */ });
// DisablePlacement Literal Object: Will stop the player from the clicking on a cell when the ship is off the board. 
var DisablePlacement = {
  disablePlacement: false
};

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
/* harmony import */ var _modules_DomContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/DomContent */ "./src/modules/DomContent.js");
/* harmony import */ var _images_explosion_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/explosion.png */ "./src/images/explosion.png");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }




/** Gameboard
 * -> Gameboards should be able to place ships at specific coordinates by 
 * calling the 'ship factory function'. 
 * 
 * -> Gameboards should have a receiveAttack function that takes a pair
 * of coordinates, determines whether or not the attack hit a ship and
 * then sends the 'hit' function to the correct ship, or record the 
 * coordinates of the missed shot. 
 * 
 * -> Gameboards should keep track of missed attacks so they can display them
 * properly.
 * 
 * -> Gameboards should be able to report whether or not all of their ships
 * have been sunk. 
 */

// Gameboard(): Gameboard factory function.
var Gameboard = function Gameboard() {
  var gameboard = _toConsumableArray(Array(10)).map(function () {
    return Array(10).fill("");
  });
  var shipsOnBoard = 0;
  var receiveAttack = function receiveAttack(PlacedShips) {
    var xCoordRandom = Math.floor(Math.random() * 10);
    var yCoordRandom = Math.floor(Math.random() * 10);
    var playerOneCell = document.querySelector("[data-x=\"".concat(xCoordRandom, "\"][data-y=\"").concat(yCoordRandom, "\"]"));
    var shipNum = 0;
    console.log("Computer choose: ", playerOneCell); // Testing
    console.log("\n"); // Testing

    // Test if the computer has already choosen these coordinates. 
    while (playerOneCell.classList.contains('player-one-ship-hit') || playerOneCell.classList.contains('computer-hit-missed')) {
      xCoordRandom = Math.floor(Math.random() * 10);
      yCoordRandom = Math.floor(Math.random() * 10);
      playerOneCell = document.querySelector("[data-x=\"".concat(xCoordRandom, "\"][data-y=\"").concat(yCoordRandom, "\"]"));
    }

    // Test if the coordinates contain an enemy ship. 
    if (playerOneCell.classList.contains('ship-placed')) {
      for (var key in PlacedShips) {
        shipNum++;
        for (var coord in PlacedShips[key].coordinates) {
          if (PlacedShips[key].coordinates[coord][0] === xCoordRandom && PlacedShips[key].coordinates[coord][1] === yCoordRandom) {
            console.log('The computer got a hit: ', [xCoordRandom, yCoordRandom]); // Testing
            console.log("".concat(key, " was hit.")); // Testing 
            PlacedShips[key].hits += 1;
            var shipSunk = PlacedShips[key].hit(PlacedShips[key].hits, PlacedShips[key].length); // adds a hit to the ship. 

            (0,_modules_DomContent__WEBPACK_IMPORTED_MODULE_1__.DisplayComputerGameboardEvents)(1, false, shipNum);
            PlacedShips[key].isSunk(shipSunk, shipNum); // Checks if the ship has sunk.

            // If true change the sunk status to true.  
            if (shipSunk) {
              PlacedShips[key].sunk = shipSunk;
              console.log('Sunk status should be true: ', PlacedShips[key]); // Testing 
            }
            var explosionImg = document.createElement('img');
            explosionImg.src = _images_explosion_png__WEBPACK_IMPORTED_MODULE_2__;
            playerOneCell.appendChild(explosionImg);
            playerOneCell.classList.add('player-one-ship-hit');
          }
        }
      }
    } else {
      var computerHitMissed = document.createElement('div');
      computerHitMissed.textContent = "M";
      playerOneCell.classList.add('computer-hit-missed');
      playerOneCell.appendChild(computerHitMissed);
      (0,_modules_DomContent__WEBPACK_IMPORTED_MODULE_1__.DisplayComputerGameboardEvents)(0);
    }
  };
  return {
    gameboard: gameboard,
    shipsOnBoard: shipsOnBoard,
    receiveAttack: receiveAttack,
    Ship: _Ship__WEBPACK_IMPORTED_MODULE_0__.Ship
  };
};

/***/ }),

/***/ "./src/utils/NewGame.js":
/*!******************************!*\
  !*** ./src/utils/NewGame.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewGameSelected: () => (/* binding */ NewGameSelected)
/* harmony export */ });
// NewGameSelected(): Toggles true if the new button was clicked. 
var NewGameSelected = function () {
  var newGameSelected = true;
  return {
    newGameSelected: newGameSelected
  };
}();

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
/* harmony import */ var _modules_DomContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/DomContent */ "./src/modules/DomContent.js");


/** Ship */
// Ship(): Ship factory function. 
var Ship = function Ship() {
  var defaultLengths = [0, 0, 0, 0, 1, 1, 1, 2, 2, 3];
  var length = null;
  var hits = 0;
  var sunk = false;

  // hit(): Will gather the amount of hits the ship will get.
  var hit = function hit(isHit, shipLength) {
    if (isHit === shipLength) {
      return true;
    } else {
      return null;
    }
  };

  // isSunk(): Will determine if the ship has sunk. 
  var isSunk = function isSunk(shipSunk, shipNum) {
    (0,_modules_DomContent__WEBPACK_IMPORTED_MODULE_0__.DisplayComputerGameboardEvents)(null, shipSunk, shipNum);
    // Note: You need to use the testing file (ship.test.js) 
    // to test this function. 
  };
  return {
    hit: hit,
    isSunk: isSunk,
    defaultLengths: defaultLengths,
    length: length,
    hits: hits,
    sunk: sunk
  };
};

/***/ }),

/***/ "./src/utils/ShipData.js":
/*!*******************************!*\
  !*** ./src/utils/ShipData.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShipData: () => (/* binding */ ShipData)
/* harmony export */ });
// ShipData Literal Object: Will contain ship data to control the flow of ships on the gameboard. 
var ShipData = {
  lengthIndex: 0,
  shipsPlaced: 0,
  shipLength: 0
};

/***/ }),

/***/ "./src/utils/ShipPlacementData.js":
/*!****************************************!*\
  !*** ./src/utils/ShipPlacementData.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComputerPlacedShips: () => (/* binding */ ComputerPlacedShips),
/* harmony export */   PlacedShips: () => (/* binding */ PlacedShips)
/* harmony export */ });
// PlacedShips Literal Object: Data for all ships placed on the gameboard by player one. 
var PlacedShips = {};

// ComputerPlacedShips Literal Object: Data for all ships placed on the gameboard by the computer.
var ComputerPlacedShips = {};

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
.player-one-board > div{ /* rows */
    display: flex;

    /* border: 1px solid black; */
    /* padding: 5px; */
}
.player-one-board > div > div{ /* cells */
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid lightcoral;
    padding: 5px;
    width: 30px;
    height: 30px;
}
.player-one-board > div > div > div{ /* Missed Hit Container */
    /* border: 1px solid black; */
    height: 20px;
    font-size: 20px;
    color: #d946ef;
}

/* Computer Gameboard */
.computer-gameboard{
    display: flex;
    flex-direction: column;

    border: 1px solid purple;
    padding: 10px;
}
.computer-gameboard > div{ /* Rows */
    display: flex;

    /* padding: 10px; */
}
.computer-gameboard > div > div{ /* cells */
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid lightgreen;
    padding: 5px;
    width: 30px; 
    height: 30px;
}

/* hover-test */
.hover-test{
    border: 1px solid black !important;
}

/* ship-placed - Displays each ship placed on the board. */
.ship-placed{
    border: 1px solid black !important;
}

/* computer-ship-placed - Displays each ship that the computer places on their board. */
.computer-ship-placed{
    border: 1px solid lightgreen !important;
}

/* computer-ship-hit - Indicates that computer ship has been hit. */
.computer-ship-hit > img[src]{
    width: 100%;
    height: 100%; 
}

/* player-one-ship-hit - Indicates that the player one ship has been hit. */
.player-one-ship-hit > img[src]{
    width: 100%;
    height: 100%;
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
}

/***************************************************************************************************************************************************************************/
/***************************************************************************************************************************************************************************/
/* |Gameboard Events Section| */
/* player-gameboard-events - All the player gameboard events. */
#player-gameboard-events{
    border: 1px solid orange;
    padding: 10px;
    margin-bottom: 10px;
    text-align: center; 
    font-size: 20px;
}
#player-gameboard-events > p{
    display: inline; 
}

/* computer-gameboard-events - All the computer gameboard events. */
#computer-gameboard-events{
    border: 1px solid lightblue;
    padding: 10px;
    margin-bottom: 10px;
    text-align: center; 
    font-size: 20px; 
}
#computer-gameboard-events > p{
    display: inline;  
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,8CAA8C;AAC9C;IACI,0BAA0B;IAC1B,qBAAqB;IACrB,4BAA4B;IAC5B,4BAA4B;IAC5B,eAAe;AACnB;AACA;IACI,2BAA2B;IAC3B,2BAA2B;AAC/B;;AAEA,4KAA4K;AAC5K,4KAA4K;AAC5K,2BAA2B;AAC3B;IACI,qBAAqB;IACrB,aAAa;AACjB;;AAEA,4KAA4K;AAC5K,4KAA4K;AAC5K,0BAA0B;AAC1B;IACI,aAAa;IACb,SAAS;;IAET,sBAAsB;IACtB,aAAa;IACb,aAAa;IACb,cAAc;AAClB;;AAEA,qBAAqB;AACrB;IACI,aAAa;IACb,sBAAsB;;IAEtB,uBAAuB;IACvB,aAAa;AACjB;AACA,yBAAyB,SAAS;IAC9B,aAAa;;IAEb,6BAA6B;IAC7B,kBAAkB;AACtB;AACA,+BAA+B,UAAU;IACrC,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;IAEnB,4BAA4B;IAC5B,YAAY;IACZ,WAAW;IACX,YAAY;AAChB;AACA,qCAAqC,yBAAyB;IAC1D,6BAA6B;IAC7B,YAAY;IACZ,eAAe;IACf,cAAc;AAClB;;AAEA,uBAAuB;AACvB;IACI,aAAa;IACb,sBAAsB;;IAEtB,wBAAwB;IACxB,aAAa;AACjB;AACA,2BAA2B,SAAS;IAChC,aAAa;;IAEb,mBAAmB;AACvB;AACA,iCAAiC,UAAU;IACvC,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;IAEnB,4BAA4B;IAC5B,YAAY;IACZ,WAAW;IACX,YAAY;AAChB;;AAEA,eAAe;AACf;IACI,kCAAkC;AACtC;;AAEA,0DAA0D;AAC1D;IACI,kCAAkC;AACtC;;AAEA,uFAAuF;AACvF;IACI,uCAAuC;AAC3C;;AAEA,mEAAmE;AACnE;IACI,WAAW;IACX,YAAY;AAChB;;AAEA,2EAA2E;AAC3E;IACI,WAAW;IACX,YAAY;AAChB;;AAEA,4KAA4K;AAC5K,4KAA4K;AAC5K,uBAAuB;AACvB;IACI,aAAa;IACb,sBAAsB;;IAEtB,wBAAwB;IACxB,aAAa;AACjB;;AAEA,qEAAqE;AACrE;IACI,4BAA4B;IAC5B,4BAA4B;AAChC;;AAEA,4KAA4K;AAC5K,4KAA4K;AAC5K,+BAA+B;AAC/B,+DAA+D;AAC/D;IACI,wBAAwB;IACxB,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,eAAe;AACnB;AACA;IACI,eAAe;AACnB;;AAEA,mEAAmE;AACnE;IACI,2BAA2B;IAC3B,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,eAAe;AACnB;AACA;IACI,eAAe;AACnB","sourcesContent":["/* |Testing Area Identifiers and Components| */\n#content > div > button{\n    padding: 10px 5px 10px 5px;\n    font-family:monospace;\n    background-color: lightcoral;\n    border: 1px solid lightcoral; \n    cursor: pointer;\n}\n#content > div > button:hover{\n    background-color: lightblue;\n    border: 1px solid lightblue;\n}\n\n/***************************************************************************************************************************************************************************/\n/***************************************************************************************************************************************************************************/\n/* |Main Content Section| */\n#content{\n    border: 1px solid red;\n    padding: 10px; \n}\n\n/***************************************************************************************************************************************************************************/\n/***************************************************************************************************************************************************************************/\n/* |Gameboard Container| */\n.gameboard-container{\n    display: flex;\n    gap: 10px;\n\n    border: 1px solid blue;\n    padding: 10px;\n    width: 1000px;\n    margin: 0 auto;\n}\n\n/* Player One Board */\n.player-one-board{\n    display: flex;\n    flex-direction: column;\n\n    border: 1px solid green;\n    padding: 10px;\n}\n.player-one-board > div{ /* rows */\n    display: flex;\n\n    /* border: 1px solid black; */\n    /* padding: 5px; */\n}\n.player-one-board > div > div{ /* cells */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    border: 1px solid lightcoral;\n    padding: 5px;\n    width: 30px;\n    height: 30px;\n}\n.player-one-board > div > div > div{ /* Missed Hit Container */\n    /* border: 1px solid black; */\n    height: 20px;\n    font-size: 20px;\n    color: #d946ef;\n}\n\n/* Computer Gameboard */\n.computer-gameboard{\n    display: flex;\n    flex-direction: column;\n\n    border: 1px solid purple;\n    padding: 10px;\n}\n.computer-gameboard > div{ /* Rows */\n    display: flex;\n\n    /* padding: 10px; */\n}\n.computer-gameboard > div > div{ /* cells */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    border: 1px solid lightgreen;\n    padding: 5px;\n    width: 30px; \n    height: 30px;\n}\n\n/* hover-test */\n.hover-test{\n    border: 1px solid black !important;\n}\n\n/* ship-placed - Displays each ship placed on the board. */\n.ship-placed{\n    border: 1px solid black !important;\n}\n\n/* computer-ship-placed - Displays each ship that the computer places on their board. */\n.computer-ship-placed{\n    border: 1px solid lightgreen !important;\n}\n\n/* computer-ship-hit - Indicates that computer ship has been hit. */\n.computer-ship-hit > img[src]{\n    width: 100%;\n    height: 100%; \n}\n\n/* player-one-ship-hit - Indicates that the player one ship has been hit. */\n.player-one-ship-hit > img[src]{\n    width: 100%;\n    height: 100%;\n}\n\n/***************************************************************************************************************************************************************************/\n/***************************************************************************************************************************************************************************/\n/* |Inteface Section| */\n.interface{\n    display: flex;\n    flex-direction: column;\n    \n    border: 1px solid orange;\n    padding: 10px;\n}\n\n/* current-coordinate - The current coordinate choosen by the user. */\n.current-coordinate{\n    background-color: lightcoral;\n    border: 1px solid lightcoral;\n}\n\n/***************************************************************************************************************************************************************************/\n/***************************************************************************************************************************************************************************/\n/* |Gameboard Events Section| */\n/* player-gameboard-events - All the player gameboard events. */\n#player-gameboard-events{\n    border: 1px solid orange;\n    padding: 10px;\n    margin-bottom: 10px;\n    text-align: center; \n    font-size: 20px;\n}\n#player-gameboard-events > p{\n    display: inline; \n}\n\n/* computer-gameboard-events - All the computer gameboard events. */\n#computer-gameboard-events{\n    border: 1px solid lightblue;\n    padding: 10px;\n    margin-bottom: 10px;\n    text-align: center; \n    font-size: 20px; \n}\n#computer-gameboard-events > p{\n    display: inline;  \n}"],"sourceRoot":""}]);
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

/***/ "./src/images/explosion.png":
/*!**********************************!*\
  !*** ./src/images/explosion.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d96036a1ac7a46b47820.png";

/***/ }),

/***/ "./src/sounds/mixkit-retro-game-notification-212.wav":
/*!***********************************************************!*\
  !*** ./src/sounds/mixkit-retro-game-notification-212.wav ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b222ebf03a29c11b61f0.wav";

/***/ }),

/***/ "./src/sounds/water-explosion.wav":
/*!****************************************!*\
  !*** ./src/sounds/water-explosion.wav ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d91cfb01856e89b9f52b.wav";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0EsSUFBTUksT0FBTyxHQUFHZCxrQkFBQSxDQUFJQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUVDLEdBQUcsQ0FBQztFQUFBLE9BQU1ELEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUFBLEVBQUM7QUFDMUR6SSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxhQUFhLEVBQUVtSixPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQ3JDcEosT0FBTyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUNuQjs7QUFFQUYsa0VBQWEsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9Eb21Db250ZW50LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy91dGlscy9BY3RpdmF0ZUdhbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3V0aWxzL0F4aXNDaGFuZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3V0aWxzL0Rpc2FibGVQbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3V0aWxzL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvdXRpbHMvTmV3R2FtZS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvdXRpbHMvU2hpcC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvdXRpbHMvU2hpcERhdGEuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3V0aWxzL1NoaXBQbGFjZW1lbnREYXRhLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gXCIuLi91dGlscy9HYW1lYm9hcmRcIjtcblxuaW1wb3J0IHsgTmV3R2FtZVNlbGVjdGVkIH0gZnJvbSBcIi4uL3V0aWxzL05ld0dhbWVcIjtcbmltcG9ydCB7IFNoaXBEYXRhIH0gZnJvbSBcIi4uL3V0aWxzL1NoaXBEYXRhXCI7XG5pbXBvcnQgeyBBeGlzQ2hhbmdlIH0gZnJvbSBcIi4uL3V0aWxzL0F4aXNDaGFuZ2VcIjtcbmltcG9ydCB7IEFjdGl2YXRlR2FtZSB9IGZyb20gXCIuLi91dGlscy9BY3RpdmF0ZUdhbWVcIjtcbmltcG9ydCB7IERpc2FibGVQbGFjZW1lbnQgfSBmcm9tIFwiLi4vdXRpbHMvRGlzYWJsZVBsYWNlbWVudFwiO1xuaW1wb3J0IHsgUGxhY2VkU2hpcHMsIENvbXB1dGVyUGxhY2VkU2hpcHMgfSBmcm9tIFwiLi4vdXRpbHMvU2hpcFBsYWNlbWVudERhdGFcIjtcblxuaW1wb3J0IHdhdGVyRXhwbG9zaW9uIGZyb20gXCIuLi9zb3VuZHMvd2F0ZXItZXhwbG9zaW9uLndhdlwiOyBcbmltcG9ydCBleHBsb3Npb25JbWFnZSBmcm9tIFwiLi4vaW1hZ2VzL2V4cGxvc2lvbi5wbmdcIjsgXG5cbi8vIEluaXRpYWxpemluZ0RPTSgpOiBJbnRpYWxpemluZyBET00gQ29udGVudCBmb3IgdGhlIGVudGlyZSBhcHBsaWNhdGlvbi4gXG5leHBvcnQgZnVuY3Rpb24gSW5pdGlhbGl6ZURPTSgpe1xuICAgIGNvbnNvbGUubG9nKFwiSW5pdGlhbGl6aW5nIERPTSBDb250ZW50Li4uXCIpOyAvLyBUZXN0aW5nIFxuICAgIGNvbnNvbGUubG9nKCdcXG4nKTsgLy8gVGVzdGluZyBcblxuICAgIEdhbWVib2FyZERPTSgpO1xuICAgIEludGVyZmFjZURPTSgpO1xuICAgIFBsYXllck9uZURPTSgpO1xuICAgIENvbXB1dGVyRE9NKCk7XG4gICAgRGlzcGxheVBsYXllck9uZUdhbWVib2FyZEV2ZW50cygpO1xuICAgIERpc3BsYXlDb21wdXRlckdhbWVib2FyZEV2ZW50cygpO1xufVxuXG4vLyBEaXNwbGF5UGxheWVyT25lR2FtZWJvYXJkRXZlbnRzKCk6IFdpbGwgZGlzcGxheSBhbGwgdGhlIGV2ZW50cyB0aGF0IHBsYXllciBvbmUgaW5pdGlhdGVzIG9uIHRoZSBjb21wdXRlcnMgZ2FtZWJvYXJkLlxuZnVuY3Rpb24gRGlzcGxheVBsYXllck9uZUdhbWVib2FyZEV2ZW50cyhib2FyZFN0YXR1cywgY29vcmRzLCBzdW5rU3RhdHVzKXtcbiAgICBjb25zdCBzaGlwU3Vua01zc2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaWYgKGJvYXJkU3RhdHVzID09PSAxKVxuICAgIHtcbiAgICAgICAgc2hpcFN1bmtNc3NnLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci1nYW1lYm9hcmQtZXZlbnRzJykudGV4dENvbnRlbnQgPSBgWW91IGhpdCBhIHNoaXAgYXQgdGhlIGNvb3JkaW5hdGVzIFske2Nvb3Jkcy5kYXRhc2V0Lnh9LCAke2Nvb3Jkcy5kYXRhc2V0Lnl9XSFgO1xuICAgIH1cbiAgICBlbHNlIGlmIChib2FyZFN0YXR1cyA9PT0gMClcbiAgICB7XG4gICAgICAgIHNoaXBTdW5rTXNzZy50ZXh0Q29udGVudCA9IFwiXCI7IFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLWdhbWVib2FyZC1ldmVudHMnKS50ZXh0Q29udGVudCA9IGBZb3VyIGhpdCBtaXNzZWQgYXQgdGhlIGNvb3JkaW5hdGVzIFske2Nvb3Jkcy5kYXRhc2V0Lnh9LCAke2Nvb3Jkcy5kYXRhc2V0Lnl9XSFgO1xuICAgIH1cbiAgICBlbHNlIGlmIChib2FyZFN0YXR1cyA9PT0gMilcbiAgICB7XG4gICAgICAgIHNoaXBTdW5rTXNzZy50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItZ2FtZWJvYXJkLWV2ZW50cycpLnRleHRDb250ZW50ID0gJ1BsYXllciBPbmUgV2lucyBCYXR0bGVzaGlwISc7IFxuICAgIH1cbiAgICBlbHNlIGlmIChib2FyZFN0YXR1cyA9PT0gMylcbiAgICB7XG4gICAgICAgIHNoaXBTdW5rTXNzZy50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItZ2FtZWJvYXJkLWV2ZW50cycpLnRleHRDb250ZW50ID0gJ1BsYXllciBPbmUgTG9zZXMgQmF0dGxlc2hpcCEnOyBcbiAgICB9XG5cbiAgICBpZiAoc3Vua1N0YXR1cylcbiAgICB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItZ2FtZWJvYXJkLWV2ZW50cycpLmFwcGVuZENoaWxkKHNoaXBTdW5rTXNzZyk7XG4gICAgICAgIHNoaXBTdW5rTXNzZy50ZXh0Q29udGVudCA9IGAgWW91IHN1bmsgdGhlIHNoaXAhYDtcbiAgICB9XG59XG5cbi8vIERpc3BsYXlDb21wdXRlckdhbWVib2FyZEV2ZW50cygpOiBXaWxsIGRpc3BsYXkgYWxsIHRoZSBldmVudHMgdGhhdCB0aGUgY29tcHV0ZXIgaW5pdGlhdGVzIG9uIHBsYXllciBvbmUncyBnYW1lYm9hcmQuIFxuZXhwb3J0IGZ1bmN0aW9uIERpc3BsYXlDb21wdXRlckdhbWVib2FyZEV2ZW50cyhib2FyZFN0YXR1cywgc3Vua1N0YXR1cywgc2hpcE51bSl7XG4gICAgY29uc3Qgc2hpcFN1bmtNc3NnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgaWYgKGJvYXJkU3RhdHVzID09PSAxKVxuICAgIHtcbiAgICAgICAgc2hpcFN1bmtNc3NnLnRleHRDb250ZW50ID0gXCJcIjsgXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wdXRlci1nYW1lYm9hcmQtZXZlbnRzJykudGV4dENvbnRlbnQgPSBgVGhlIGNvbXB1dGVyIGhpdCBzaGlwICR7c2hpcE51bX0hYDtcbiAgICB9XG4gICAgZWxzZSBpZiAoYm9hcmRTdGF0dXMgPT09IDApXG4gICAge1xuICAgICAgICBzaGlwU3Vua01zc2cudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcHV0ZXItZ2FtZWJvYXJkLWV2ZW50cycpLnRleHRDb250ZW50ID0gJ1RoZSBjb21wdXRlciBtaXNzZWQhJzsgXG4gICAgfVxuICAgIGVsc2UgaWYgKGJvYXJkU3RhdHVzID09PSAyKVxuICAgIHtcbiAgICAgICAgc2hpcFN1bmtNc3NnLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXB1dGVyLWdhbWVib2FyZC1ldmVudHMnKS50ZXh0Q29udGVudCA9ICdUaGUgQ29tcHV0ZXIgV2lucyBCYXR0bGVzaGlwISc7IFxuICAgIH1cbiAgICBlbHNlIGlmIChib2FyZFN0YXR1cyA9PT0gMylcbiAgICB7XG4gICAgICAgIHNoaXBTdW5rTXNzZy50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wdXRlci1nYW1lYm9hcmQtZXZlbnRzJykudGV4dENvbnRlbnQgPSAnVGhlIENvbXB1dGVyIExvc2VzIEJhdHRsZXNoaXAhJzsgXG4gICAgfVxuXG4gICAgaWYgKHN1bmtTdGF0dXMpXG4gICAge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcHV0ZXItZ2FtZWJvYXJkLWV2ZW50cycpLmFwcGVuZENoaWxkKHNoaXBTdW5rTXNzZyk7XG4gICAgICAgIHNoaXBTdW5rTXNzZy50ZXh0Q29udGVudCA9IFwiIFRoZSBjb21wdXRlciBzdW5rIHRoZSBzaGlwIVwiO1xuICAgIH1cblxufVxuXG4vLyBOdW1iZXJPZlNoaXBzUGxhY2VkKCk6IFdpbGwga2VlcCB0cmFjayBvZiB0aGUgY3VycmVudCBzaGlwIHRvIGJlIHBsYWNlZCBvbiB0aGUgZ2FtZWJvYXJkLlxuZnVuY3Rpb24gTnVtYmVyT2ZTaGlwc1BsYWNlZCgpe1xuICAgIGNvbnN0IG51bWJlck9mU2hpcHNQbGFjZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubnVtYmVyLW9mLXNoaXBzJyk7XG5cbiAgICBpZiAoISgoU2hpcERhdGEubGVuZ3RoSW5kZXggKyAxKSA+IDEwKSlcbiAgICB7XG4gICAgICAgIFNoaXBEYXRhLnNoaXBzUGxhY2VkKys7XG4gICAgICAgIG51bWJlck9mU2hpcHNQbGFjZWQudGV4dENvbnRlbnQgPSBgU2hpcDogJHtTaGlwRGF0YS5zaGlwc1BsYWNlZH1gO1xuICAgIH1cbn1cblxuLy8gR2FtZWJvYXJkRE9NKCk6IFRoZSBnYW1lYm9hcmQgRE9NIGZvciB0aGUgZW50aXJlIGFwcGxpY2F0aW9uLiBcbmZ1bmN0aW9uIEdhbWVib2FyZERPTSgpe1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG4gICAgY29uc3QgZ2FtZWJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ2FtZWJvYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2dhbWVib2FyZC1jb250YWluZXInKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZ2FtZWJvYXJkQ29udGFpbmVyKTsgXG59XG5cbi8vIFBsYXllck9uZURPTSgpOiBUaGUgcGxheWVyIG9uZSBib2FyZC5cbmZ1bmN0aW9uIFBsYXllck9uZURPTSgpe1xuICAgIGNvbnN0IGdhbWVib2FyZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lYm9hcmQtY29udGFpbmVyJyk7IFxuXG4gICAgY29uc3QgcGxheWVyT25lQm9hcmQgPSBHYW1lYm9hcmQoKTsgXG5cbiAgICBjb25zdCBwbGF5ZXJPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgcGxheWVyT25lLmNsYXNzTGlzdC5hZGQoJ3BsYXllci1vbmUtYm9hcmQnKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyT25lQm9hcmQuZ2FtZWJvYXJkLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcGxheWVyT25lQm9hcmQuZ2FtZWJvYXJkW2ldLmxlbmd0aDsgaisrKXtcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcbiAgICAgICAgICAgIGNlbGwuZGF0YXNldC54ID0gaTtcbiAgICAgICAgICAgIGNlbGwuZGF0YXNldC55ID0gajtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBsYXllck9uZS5hcHBlbmRDaGlsZChyb3cpOyBcbiAgICB9XG5cbiAgICBnYW1lYm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyT25lKTsgXG59XG5cbi8vIENvbXB1dGVyRE9NKCk6IFRoZSBjb21wdXRlciBnYW1lYm9hcmRcbmZ1bmN0aW9uIENvbXB1dGVyRE9NKCl7XG4gICAgY29uc3QgZ2FtZWJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVib2FyZC1jb250YWluZXInKTtcbiAgICBcbiAgICBjb25zdCBjb21wdXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcbiAgICBjb21wdXRlci5jbGFzc0xpc3QuYWRkKCdjb21wdXRlci1nYW1lYm9hcmQnKTsgXG5cbiAgICBjb25zdCBjb21wdXRlckJvYXJkID0gR2FtZWJvYXJkKCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbXB1dGVyQm9hcmQuZ2FtZWJvYXJkLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgICAgY29uc3QgY29tcHV0ZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG5cbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb21wdXRlckJvYXJkLmdhbWVib2FyZFtpXS5sZW5ndGg7IGorKylcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgY29tcHV0ZXJDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuICAgICAgICAgICAgY29tcHV0ZXJDZWxsLmRhdGFzZXQueCA9IGk7XG4gICAgICAgICAgICBjb21wdXRlckNlbGwuZGF0YXNldC55ID0gajtcbiAgICAgICAgICAgIGNvbXB1dGVyUm93LmFwcGVuZENoaWxkKGNvbXB1dGVyQ2VsbCk7IFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb21wdXRlci5hcHBlbmRDaGlsZChjb21wdXRlclJvdyk7IFxuICAgIH1cblxuICAgIGdhbWVib2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChjb21wdXRlcik7IFxufVxuXG4vLyBQbGFjZVNoaXBzKCk6IFdpbGwgcGxhY2UgdGhlIHNoaXBzIG9uIHRoZSBnYW1lYm9hcmQuXG5mdW5jdGlvbiBQbGFjZVNoaXBzKGUpe1xuICAgIGNvbnN0IGNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllci1vbmUtYm9hcmQgPiBkaXYgPiBkaXYnKTsgXG4gICAgY29uc3QgeENvb3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVib2FyZC1jb250YWluZXIgPiBkaXY6bnRoLWNoaWxkKDEpID4gZGl2ID4gYnV0dG9uOm50aC1jaGlsZCgxKScpO1xuICAgIGNvbnN0IHlDb29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lYm9hcmQtY29udGFpbmVyID4gZGl2Om50aC1jaGlsZCgxKSA+IGRpdiA+IGJ1dHRvbjpudGgtY2hpbGQoMiknKTsgXG5cbiBcbiAgICBjb25zb2xlLmxvZygnQ3VycmVudCBBeGlzOiAnLCBBeGlzQ2hhbmdlLmF4aXNDaGFuZ2UpOyAvLyBUZXN0aW5nICBcbiAgICBjb25zb2xlLmxvZygnXFxuJyk7IC8vIFRlc3RpbmcgXG5cbiAgICBpZiAoIUF4aXNDaGFuZ2UuYXhpc1dhc0NoYW5nZWQgJiYgU2hpcERhdGEubGVuZ3RoSW5kZXggPCAxMClcbiAgICB7XG4gICAgICAgIE51bWJlck9mU2hpcHNQbGFjZWQoKTsgXG4gICAgICAgICAgICBcbiAgICAgICAgY29uc3QgYm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgICAgICAgY29uc3Qgc2hpcCA9IGJvYXJkLlNoaXAoKTtcbiAgICBcbiAgICAgICAgU2hpcERhdGEuc2hpcExlbmd0aCA9IHNoaXAuZGVmYXVsdExlbmd0aHNbU2hpcERhdGEubGVuZ3RoSW5kZXhdO1xuXG4gICAgICAgIHNoaXAubGVuZ3RoID0gU2hpcERhdGEuc2hpcExlbmd0aCArIDE7IFxuXG4gICAgICAgIGNvbnNvbGUubG9nKCdTaGlwIG51bWJlciB0byBiZSBwbGFjZWQ6ICcsIFNoaXBEYXRhLmxlbmd0aEluZGV4ICsgMSk7IC8vIFRlc3RpbmcgXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaGUgbGVuZ3RoIG9mIHRoZSBzaGlwIHRvIGJlIHBsYWNlZDogJywgU2hpcERhdGEuc2hpcExlbmd0aCk7IC8vIFRlc3RpbmcgXG5cbiAgICAgICAgUGxhY2VkU2hpcHNbYHNoaXAgJHtTaGlwRGF0YS5sZW5ndGhJbmRleH1gXSA9IHNoaXA7XG4gICAgICAgIGNvbnNvbGUubG9nKCdPYmplY3Qgd2l0aCBwbGFjZWQgc2hpcHM6ICcsIFBsYWNlZFNoaXBzKTsgLy8gVGVzdGluZyBcbiAgICAgICAgY29uc29sZS5sb2coJ1xcbicpOyAvLyBUZXN0aW5nXG4gICAgfVxuXG5cbiAgICBpZiAoU2hpcERhdGEubGVuZ3RoSW5kZXggPiA5KSAvLyBXaWxsIGRlYWN0aXZhdGUgcGxheWVyIG9uZXMgc2hpcCBwbGFjZW1lbnQuIFxuICAgIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNlbGxzLmxlbmd0aDsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBjZWxsc1tpXS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgRW50ZXJYKTtcbiAgICAgICAgICAgIGNlbGxzW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBMZWF2ZVgpOyBcbiAgICAgICAgICAgIGNlbGxzW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBFbnRlclkpO1xuICAgICAgICAgICAgY2VsbHNbaV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIExlYXZlWSk7XG4gICAgICAgICAgICBjZWxsc1tpXS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIFBsYWNlT25YKTsgXG4gICAgICAgICAgICBjZWxsc1tpXS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIFBsYWNlT25ZKTsgXG4gICAgICAgIH1cblxuICAgICAgICB4Q29vcmQuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudC1jb29yZGluYXRlJyk7XG4gICAgICAgIHlDb29yZC5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50LWNvb3JkaW5hdGUnKTtcblxuICAgICAgICBBY3RpdmF0ZUdhbWUuYWN0aXZhdGVHYW1lID0gdHJ1ZTsgXG4gICAgICAgIGNvbnNvbGUubG9nKFwiR2FtZSBBY3RpdmF0ZWQ6IFwiLCBBY3RpdmF0ZUdhbWUuYWN0aXZhdGVHYW1lKTsgLy8gVGVzdGluZ1xuICAgICAgICBHYW1lSW5pdGlhdGVkKCk7IFxuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNlbGxzLmxlbmd0aDsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoQXhpc0NoYW5nZS5heGlzQ2hhbmdlID09PSBudWxsKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNlbGxzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBFbnRlclgpO1xuICAgICAgICAgICAgICAgIGNlbGxzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBMZWF2ZVgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoQXhpc0NoYW5nZS5heGlzQ2hhbmdlID09PSAxKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNlbGxzW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBFbnRlclkpO1xuICAgICAgICAgICAgICAgIGNlbGxzW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBMZWF2ZVkpO1xuICAgICAgICAgICAgICAgIGNlbGxzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBFbnRlclgpO1xuICAgICAgICAgICAgICAgIGNlbGxzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBMZWF2ZVgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoQXhpc0NoYW5nZS5heGlzQ2hhbmdlID09PSAyKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNlbGxzW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBFbnRlclgpO1xuICAgICAgICAgICAgICAgIGNlbGxzW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBMZWF2ZVgpO1xuICAgICAgICAgICAgICAgIGNlbGxzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBFbnRlclkpO1xuICAgICAgICAgICAgICAgIGNlbGxzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBMZWF2ZVkpOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gR2FtZUluaXRpYXRlZCgpOiBUaGUgcGxheWVyIGFuZCBjb21wdXRlciB3aWxsIHRha2UgdHVybnMgcGlja2luZyBjb29yZGluYXRlcyBvbiBlYWNoIG90aGVycyBnYW1lYm9hcmQgdG8gc2luayBhIHNoaXAuXG5mdW5jdGlvbiBHYW1lSW5pdGlhdGVkKCl7XG4gICAgY29uc3QgY29tcHV0ZXJDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXYgPiBkaXZgKTtcbiAgICBsZXQgdG90YWxDb21wdXRlclNoaXBzU3VuayA9IDA7IFxuICAgIGxldCB0b3RhbFBsYXllclNoaXBzU3VuayA9IDA7IFxuICAgIFxuICAgIC8vIENoZWNrIGlmIGFsbCB0aGUgY29tcHV0ZXIgcGxhY2VkIHNoaXBzIGhhdmUgYmVlbiBzdW5rOiBQbGF5ZXIgT25lIFdpbnMuIFxuICAgIC8vIE5vdGU6IFRoZXNlIHR3byB0ZXN0IGNhbiBiZSBpbiBpdHMgb3duIGZ1bmN0aW9uLiBcbiAgICBmb3IgKGxldCBrZXkgaW4gQ29tcHV0ZXJQbGFjZWRTaGlwcylcbiAgICB7XG4gICAgICAgIGlmIChDb21wdXRlclBsYWNlZFNoaXBzW2tleV0uc3VuayA9PT0gdHJ1ZSlcbiAgICAgICAge1xuICAgICAgICAgICAgdG90YWxDb21wdXRlclNoaXBzU3VuaysrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgaWYgYWxsIHRoZSBwbGF5ZXIgcGxhY2VkIHNoaXBzIGhhdmUgYmVlbiBzdW5rOiBDb21wdXRlciB3aW5zXG4gICAgZm9yIChsZXQga2V5IGluIFBsYWNlZFNoaXBzKVxuICAgIHtcbiAgICAgICAgaWYgKFBsYWNlZFNoaXBzW2tleV0uc3VuayA9PT0gdHJ1ZSlcbiAgICAgICAge1xuICAgICAgICAgICAgdG90YWxQbGF5ZXJTaGlwc1N1bmsrKzsgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIENyb3duIHRoZSB3aW5uZXIuIFxuICAgIGlmICh0b3RhbENvbXB1dGVyU2hpcHNTdW5rID09PSBTaGlwRGF0YS5zaGlwc1BsYWNlZClcbiAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdQbGF5ZXIgT25lIFdpbnMgQmF0dGxlc2hpcCEnKTsgLy8gVGVzdGluZyAgXG4gICAgICAgIC8vIE5vdGVzOiBFbmQgdGhlIENsaWNrIEV2ZW50IGZvciBQbGF5ZXJPbmVUdXJuLlxuICAgICAgICAvLyBzZXQgQWN0aXZhdGVHYW1lLmFjdGl2YXRlR2FtZSA9IGZhbHNlXG4gICAgICAgIC8vIHNldCBBY3RpdmF0ZUdhbWUuYWN0aXZhdGVQbGF5ZXJPbmVUdXJuID0gdHJ1ZVxuICAgICAgICBBY3RpdmF0ZUdhbWUuYWN0aXZhdGVHYW1lID0gZmFsc2U7IFxuICAgICAgICBBY3RpdmF0ZUdhbWUuYWN0aXZhdGVQbGF5ZXJPbmVUdXJuID0gdHJ1ZTtcbiAgICAgICAgTmV3R2FtZVNlbGVjdGVkLm5ld0dhbWVTZWxlY3RlZCA9IGZhbHNlOyBcblxuICAgICAgICBjb21wdXRlckNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBQbGF5ZXJPbmVUdXJuKTsgXG4gICAgICAgIH0pO1xuXG4gICAgICAgIERpc3BsYXlQbGF5ZXJPbmVHYW1lYm9hcmRFdmVudHMoMiwgbnVsbCwgZmFsc2UpOyBcbiAgICAgICAgRGlzcGxheUNvbXB1dGVyR2FtZWJvYXJkRXZlbnRzKDMsIGZhbHNlLCBudWxsKTsgIFxuICAgIH1cbiAgICBlbHNlIGlmICh0b3RhbFBsYXllclNoaXBzU3VuayA9PT0gU2hpcERhdGEuc2hpcHNQbGFjZWQpXG4gICAge1xuICAgICAgICBjb25zb2xlLmxvZygnQ29tcHV0ZXIgV2lucyBCYXR0bGVzaGlwIScpOyAvLyBUZXN0aW5nXG4gICAgICAgIEFjdGl2YXRlR2FtZS5hY3RpdmF0ZUdhbWUgPSBmYWxzZTtcbiAgICAgICAgQWN0aXZhdGVHYW1lLmFjdGl2YXRlUGxheWVyT25lVHVybiA9IHRydWU7XG4gICAgICAgIE5ld0dhbWVTZWxlY3RlZC5uZXdHYW1lU2VsZWN0ZWQgPSBmYWxzZTsgXG5cbiAgICAgICAgRGlzcGxheUNvbXB1dGVyR2FtZWJvYXJkRXZlbnRzKDIsIGZhbHNlLCBudWxsKTtcbiAgICAgICAgRGlzcGxheVBsYXllck9uZUdhbWVib2FyZEV2ZW50cygzLCBudWxsLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgaWYgKEFjdGl2YXRlR2FtZS5hY3RpdmF0ZUdhbWUpXG4gICAge1xuICAgICAgICBjb21wdXRlckNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBQbGF5ZXJPbmVUdXJuKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCFBY3RpdmF0ZUdhbWUuYWN0aXZhdGVQbGF5ZXJPbmVUdXJuKVxuICAgIHtcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBldmVudHMgZm9yIGFsbCBjZWxscyBvbiB0aGUgY29tcHV0ZXIgZ2FtZWJvYXJkLlxuICAgICAgICBjb21wdXRlckNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBQbGF5ZXJPbmVUdXJuKTsgXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUGxheWVyIE9uZSBUdXJuIE92ZXJcIik7IC8vIFRlc3RpbmcgXG4gICAgICAgIGNvbnNvbGUubG9nKFwiXFxuXCIpOyAvLyBUZXN0aW5nXG4gICAgICAgIFxuICAgICAgICBDb21wdXRlclR1cm4oKTsgIFxuICAgIH1cbn1cblxuLy8gUGxheWVyT25lVHVybigpOiBQbGF5ZXIgb25lIHdpbGwgY2hvb3NlIGEgc3BvdCBvbiB0aGUgYm9hcmQuIFxuZnVuY3Rpb24gUGxheWVyT25lVHVybihlKXtcbiAgICBjb25zdCBjb21wdXRlckNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY29tcHV0ZXItZ2FtZWJvYXJkID4gZGl2ID4gZGl2W2RhdGEteD1cIiR7ZS50YXJnZXQuZGF0YXNldC54fVwiXVtkYXRhLXk9XCIke2UudGFyZ2V0LmRhdGFzZXQueX1cIl1gKTsgXG4gICAgY29uc3QgZXhwbG9zaW9uID0gbmV3IEF1ZGlvKHdhdGVyRXhwbG9zaW9uKTsgXG4gICAgbGV0IGNvbXB1dGVyU2hpcEluZGV4ID0gMDtcbiAgICBsZXQgc2hpcE51bWJlclN1bmsgPSAwOyBcbiAgICBsZXQgc2hpcFN1bmsgPSBmYWxzZTsgXG4gICAgY29uc29sZS5sb2coZS50YXJnZXQpOyAvLyBUZXN0aW5nIFxuICAgIGNvbnNvbGUubG9nKGNvbXB1dGVyQ2VsbCk7IC8vIFRlc3RpbmcgXG4gICAgY29uc29sZS5sb2coXCJYOiBcIiwgZS50YXJnZXQuZGF0YXNldC54KTsgLy8gVGVzdGluZyBcbiAgICBjb25zb2xlLmxvZyhcIlk6IFwiLCBlLnRhcmdldC5kYXRhc2V0LnkpOyAvLyBUZXN0aW5nXG5cbiAgICBpZiAoZS50YXJnZXQuZGF0YXNldC54ICE9PSB1bmRlZmluZWQgJiYgZS50YXJnZXQuZGF0YXNldC55ICE9PSB1bmRlZmluZWQpXG4gICAge1xuICAgICAgICBpZiAoY29tcHV0ZXJDZWxsLmNsYXNzTGlzdC5jb250YWlucygnY29tcHV0ZXItc2hpcC1wbGFjZWQnKSlcbiAgICAgICAge1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIENvbXB1dGVyUGxhY2VkU2hpcHMpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29tcHV0ZXJTaGlwSW5kZXgrKzsgXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgY29vcmQgaW4gQ29tcHV0ZXJQbGFjZWRTaGlwc1trZXldLmNvb3JkaW5hdGVzKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKENvbXB1dGVyUGxhY2VkU2hpcHNba2V5XS5jb29yZGluYXRlc1tjb29yZF1bMF0gPT09IHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueCkgJiYgQ29tcHV0ZXJQbGFjZWRTaGlwc1trZXldLmNvb3JkaW5hdGVzW2Nvb3JkXVsxXSA9PT0gcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC55KSlcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ29tcHV0ZXJQbGFjZWRTaGlwc1trZXldLmhpdHMgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKENvbXB1dGVyUGxhY2VkU2hpcHNba2V5XSk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoQ29tcHV0ZXJQbGFjZWRTaGlwc1trZXldLmhpdHMgPT09IENvbXB1dGVyUGxhY2VkU2hpcHNba2V5XS5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFlvdSBzdW5rIGNvbXB1dGVyIHNoaXAgJHtjb21wdXRlclNoaXBJbmRleH1gKTsgLy8gVGVzdGluZyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb21wdXRlclBsYWNlZFNoaXBzW2tleV0uc3VuayA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFN1bmsgPSBDb21wdXRlclBsYWNlZFNoaXBzW2tleV0uc3VuaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwTnVtYmVyU3VuayA9IGNvbXB1dGVyU2hpcEluZGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBleHBsb3Npb25JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTsgXG4gICAgICAgICAgICBleHBsb3Npb25JbWcuc3JjID0gZXhwbG9zaW9uSW1hZ2U7IFxuICAgICAgICAgICAgY29tcHV0ZXJDZWxsLmFwcGVuZENoaWxkKGV4cGxvc2lvbkltZyk7IFxuICAgICAgICAgICAgY29tcHV0ZXJDZWxsLmNsYXNzTGlzdC5hZGQoJ2NvbXB1dGVyLXNoaXAtaGl0Jyk7IFxuICAgIFxuICAgICAgICAgICAgZXhwbG9zaW9uLnBsYXkoKTsgXG5cbiAgICAgICAgICAgIERpc3BsYXlQbGF5ZXJPbmVHYW1lYm9hcmRFdmVudHMoMSwgY29tcHV0ZXJDZWxsLCBzaGlwU3Vuaywgc2hpcE51bWJlclN1bmspOyBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghY29tcHV0ZXJDZWxsLmhhc0F0dHJpYnV0ZSgnc3R5bGUnKSlcbiAgICAgICAge1xuICAgICAgICAgICAgY29tcHV0ZXJDZWxsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZC1jb2xvcjojYmVmMjY0OycpO1xuICAgICAgICAgICAgRGlzcGxheVBsYXllck9uZUdhbWVib2FyZEV2ZW50cygwLCBjb21wdXRlckNlbGwsIHNoaXBTdW5rLCBudWxsKTsgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBBY3RpdmF0ZUdhbWUuYWN0aXZhdGVQbGF5ZXJPbmVUdXJuID0gZmFsc2U7XG4gICAgR2FtZUluaXRpYXRlZCgpOyBcbn1cblxuLy8gQ29tcHV0ZXJUdXJuKCk6IENvbXB1dGVyIHdpbGwgY2hvb3NlIGEgc3BvbnQgb24gcGxheWVyIG9uZSdzIGJvYXJkLlxuZnVuY3Rpb24gQ29tcHV0ZXJUdXJuKCl7XG4gICAgY29uc3QgZ2FtZWJvYXJkID0gR2FtZWJvYXJkKCk7IFxuICAgIGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKFBsYWNlZFNoaXBzKTtcblxuICAgIEFjdGl2YXRlR2FtZS5hY3RpdmF0ZVBsYXllck9uZVR1cm4gPSB0cnVlOyBcblxuICAgIEdhbWVJbml0aWF0ZWQoKTsgXG59XG5cbi8vIENvbXB1dGVyUGxhY2VTaGlwcygpOiBUaGUgY29tcHV0ZXIgd2lsbCBwbGFjZSBzaGlwcyBvbiB0aGVpciBnYW1lYm9hcmQuXG5mdW5jdGlvbiBDb21wdXRlclBsYWNlU2hpcHMoKXtcbiAgICBjb25zdCBjb21wdXRlckNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbXB1dGVyLWdhbWVib2FyZCA+IGRpdiA+IGRpdicpO1xuICAgIGNvbnNvbGUubG9nKCdDb21wdXRlciBDZWxsczogJywgY29tcHV0ZXJDZWxscyk7IC8vIFRlc3RpbmdcblxuICAgIGNvbnN0IGNvbXB1dGVyUm93cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXYnKTsgXG4gICAgY29uc29sZS5sb2coJ0NvbXB1dGVyIFJvd3M6ICcsIGNvbXB1dGVyUm93cyk7IC8vIFRlc3RpbmdcblxuICAgIGNvbnN0IGNvbXB1dGVyQm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgICBjb25zdCBjb21wdXRlclNoaXBzID0gY29tcHV0ZXJCb2FyZC5TaGlwKCk7XG5cblxuICAgIGNvbXB1dGVyU2hpcHMuZGVmYXVsdExlbmd0aHMuZm9yRWFjaCgoc2hpcCwgaW5kZXgpID0+IHtcbiAgICAgICAgbGV0IGNvbXB1dGVyU2hpcFBsYWNlZCA9IGZhbHNlO1xuICAgICAgICBsZXQgeENvb3JkUmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGNvbXB1dGVyUm93cy5sZW5ndGgpKTsgLy8gUmV0dXJucyBhIHJhbmRvbSBudW1iZXIgZnJvbSAwIHRvIDkuXG4gICAgICAgIGxldCB5Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7IFxuICAgICAgICBsZXQgYXhpc1JhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuICAgICAgICBsZXQgeExlbmd0aE9uZSA9IDAsIHhMZW5ndGhUd28gPSAwLCB4TGVuZ3RoVGhyZWUgPSAwO1xuICAgICAgICBsZXQgeUxlbmd0aE9uZSA9IDAsIHlMZW5ndGhUd28gPSAwLCB5TGVuZ3RoVGhyZWUgPSAwOyBcblxuICAgICAgICBpZiAoYXhpc1JhbmRvbSA9PT0gMSkgLy8geC1heGlzXG4gICAgICAgIHtcbiAgICAgICAgICAgIHhMZW5ndGhPbmUgPSAwOyBcbiAgICAgICAgICAgIHlMZW5ndGhPbmUgPSAxOyBcblxuICAgICAgICAgICAgeExlbmd0aFR3byA9IDA7XG4gICAgICAgICAgICB5TGVuZ3RoVHdvID0gMjtcblxuICAgICAgICAgICAgeExlbmd0aFRocmVlID0gMDtcbiAgICAgICAgICAgIHlMZW5ndGhUaHJlZSA9IDM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYXhpc1JhbmRvbSA9PT0gMCkgLy8geS1heGlzXG4gICAgICAgIHtcbiAgICAgICAgICAgIHhMZW5ndGhPbmUgPSAxO1xuICAgICAgICAgICAgeUxlbmd0aE9uZSA9IDA7XG5cbiAgICAgICAgICAgIHhMZW5ndGhUd28gPSAyO1xuICAgICAgICAgICAgeUxlbmd0aFR3byA9IDA7XG5cbiAgICAgICAgICAgIHhMZW5ndGhUaHJlZSA9IDM7XG4gICAgICAgICAgICB5TGVuZ3RoVGhyZWUgPSAwOyBcbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKHNoaXAgPT09IDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGB8U2hpcCAke3NoaXB9fGApOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICB3aGlsZSghY29tcHV0ZXJTaGlwUGxhY2VkKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY29tcHV0ZXItZ2FtZWJvYXJkID4gZGl2ID4gZGl2W2RhdGEteD1cIiR7eENvb3JkUmFuZG9tfVwiXVtkYXRhLXk9XCIke3lDb29yZFJhbmRvbX1cIl1gKS5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbXB1dGVyLXNoaXAtcGxhY2VkJykpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb21wdXRlclJvd3MubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgeUNvb3JkUmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICBpZiAoKHhDb29yZFJhbmRvbSArIDEpID49IDEwIHx8ICh5Q29vcmRSYW5kb20gKyAxKSA+PSAxMClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb29yZGluYXRlcyBhcmUgb2ZmIHRoZSBib2FyZCcpOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdYOiAnLCB4Q29vcmRSYW5kb20gKyAxKTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnWTogJywgeUNvb3JkUmFuZG9tICsgMSk7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1xcbicpOyAvLyBUZXN0aW5nICBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgeENvb3JkUmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29tcHV0ZXJSb3dzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIHlDb29yZFJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcHV0ZXJTaGlwUGxhY2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICBjb25zdCBjb21wdXRlckNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY29tcHV0ZXItZ2FtZWJvYXJkID4gZGl2ID4gZGl2W2RhdGEteD1cIiR7eENvb3JkUmFuZG9tfVwiXVtkYXRhLXk9XCIke3lDb29yZFJhbmRvbX1cIl1gKTtcbiAgICAgICAgICAgIGNvbXB1dGVyQ2VsbC5jbGFzc0xpc3QuYWRkKCdjb21wdXRlci1zaGlwLXBsYWNlZCcpOyBcbiAgICAgICAgICAgIGNvbXB1dGVyQ2VsbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQtY29sb3I6IHB1cnBsZTsnKTtcbiAgICAgICAgICAgIENvbXB1dGVyUGxhY2VkU2hpcHNbYHNoaXAgJHtpbmRleH1gXSA9IHtjb29yZGluYXRlczogezA6IFt4Q29vcmRSYW5kb20sIHlDb29yZFJhbmRvbV19LCBsZW5ndGg6IHNoaXAgKyAxLCBoaXRzOiAwLCBzdW5rOiBmYWxzZX07XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvbXB1dGVyIFBsYWNlZCBTaGlwczogXCIsIENvbXB1dGVyUGxhY2VkU2hpcHMpOyAvLyBUZXN0aW5nIFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNoaXAgPT09IDEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGB8U2hpcCAke3NoaXB9fGApOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICB3aGlsZSAoIWNvbXB1dGVyU2hpcFBsYWNlZClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsZXQgY29vcmRpbmF0ZXMgPSB7fTtcbiAgICAgICAgICAgICAgICBsZXQgY29vcmRpbmF0ZUluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICBjb21wdXRlckNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb21wdXRlci1zaGlwLXBsYWNlZCcpKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnWCBDZWxsOiAnLCBjZWxsLmRhdGFzZXQueCk7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdZIENlbGw6ICcsIGNlbGwuZGF0YXNldC55KTsgLy8gVGVzdGluZyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdYIFJhbmRvbTogJywgeENvb3JkUmFuZG9tKTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1kgUmFuZG9tOiAnLCB5Q29vcmRSYW5kb20pOyAvLyBUZXN0aW5nIFxuICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXNbY29vcmRpbmF0ZUluZGV4KytdID0gW3BhcnNlSW50KGNlbGwuZGF0YXNldC54KSwgcGFyc2VJbnQoY2VsbC5kYXRhc2V0LnkpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdcXG4nKTsgLy8gVGVzdGluZyBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb29yZGluYXRlcyB3aXRoIHNoaXAgcGxhY2VtZW50czogJywgY29vcmRpbmF0ZXMpOyAvLyBUZXN0aW5nIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIGNvb3JkaW5hdGVzKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvb3JkaW5hdGVzTm90T3ZlcmxhcHBpbmcgPSBmYWxzZTsgXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvb3JkaW5hdGVzW2tleV0pOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICghY29vcmRpbmF0ZXNOb3RPdmVybGFwcGluZylcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCgoY29vcmRpbmF0ZXNba2V5XVswXSA9PT0geENvb3JkUmFuZG9tICYmIGNvb3JkaW5hdGVzW2tleV1bMV0gPT09IHlDb29yZFJhbmRvbSkgfHwgKGNvb3JkaW5hdGVzW2tleV1bMF0gPT09ICh4Q29vcmRSYW5kb20gKyB4TGVuZ3RoT25lKSAmJiBjb29yZGluYXRlc1trZXldWzFdID09PSAoeUNvb3JkUmFuZG9tICsgeUxlbmd0aE9uZSkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgfHwgKChjb29yZGluYXRlc1trZXldWzBdID09PSB4Q29vcmRSYW5kb20gJiYgY29vcmRpbmF0ZXNba2V5XVsxXSA9PT0geUNvb3JkUmFuZG9tKSAmJiAoY29vcmRpbmF0ZXNba2V5XVswXSA9PT0gKHhDb29yZFJhbmRvbSArIHhMZW5ndGhPbmUgKSAmJiBjb29yZGluYXRlc1trZXldWzFdID09PSAoeUNvb3JkUmFuZG9tICsgeUxlbmd0aE9uZSkpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb21wdXRlclJvd3MubGVuZ3RoKTsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeUNvb3JkUmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApOyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZm91bmQnKTsgLy8gVGVzdGluZyBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBOZWVkIHRvIHRlc3Qgb25lIG1vcmUgdGltZSB0byBmaW5kIG91dCBpZiBpdCBzdGlsbCBvdmVybGFwcyB3aXRoIGFueSBvZiB0aGUgY2VsbHMuIFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzTm90T3ZlcmxhcHBpbmcgPSB0cnVlOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHhDb29yZFJhbmRvbSArIDEpID49IDEwIHx8ICh5Q29vcmRSYW5kb20gKyAxKSA+PSAxMClcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb21wdXRlclJvd3MubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgY29tcHV0ZXJDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNvbXB1dGVyLWdhbWVib2FyZCA+IGRpdiA+IGRpdltkYXRhLXg9XCIke3hDb29yZFJhbmRvbX1cIl1bZGF0YS15PVwiJHt5Q29vcmRSYW5kb219XCJdYCk7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcHV0ZXJDZWxsT25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNvbXB1dGVyLWdhbWVib2FyZCA+IGRpdiA+IGRpdltkYXRhLXg9XCIke3hDb29yZFJhbmRvbSArIHhMZW5ndGhPbmV9XCJdW2RhdGEteT1cIiR7eUNvb3JkUmFuZG9tICsgeUxlbmd0aE9uZX1cIl1gKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb21wdXRlckNlbGwpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbXB1dGVyQ2VsbE9uZSk7IFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICgoeENvb3JkUmFuZG9tICsgMSkgPj0gMTAgfHwgKHlDb29yZFJhbmRvbSArIDEpID49IDEwKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Nvb3JkaW5hdGVzIGFyZSBvZmYgdGhlIGJvYXJkLicpOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdYOiAnLCB4Q29vcmRSYW5kb20gKyAxKTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnWTogJywgeUNvb3JkUmFuZG9tICsgMSk7IC8vIFRlc3RpbmcgXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdcXG4nKTsgLy8gVGVzdGluZyBcblxuICAgICAgICAgICAgICAgICAgICB4Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb21wdXRlclJvd3MubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgeUNvb3JkUmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApOyBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY29tcHV0ZXJDZWxsLmNsYXNzTGlzdC5jb250YWlucygnY29tcHV0ZXItc2hpcC1wbGFjZWQnKSB8fCBjb21wdXRlckNlbGxPbmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb21wdXRlci1zaGlwLXBsYWNlZCcpKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RoZXJlIGlzIGFuIG92ZXJsYXAnKTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgICAgICAgICB4Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb21wdXRlclJvd3MubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgeUNvb3JkUmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApOyBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdMZWF2ZSBMb29wLi4uJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdcXG4nKTsgLy8gVGVzdGluZyAgXG4gICAgICAgICAgICAgICAgICAgIGNvbXB1dGVyU2hpcFBsYWNlZCA9IHRydWU7IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBjb21wdXRlckNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY29tcHV0ZXItZ2FtZWJvYXJkID4gZGl2ID4gZGl2W2RhdGEteD1cIiR7eENvb3JkUmFuZG9tfVwiXVtkYXRhLXk9XCIke3lDb29yZFJhbmRvbX1cIl1gKTtcbiAgICAgICAgICAgIGNvbXB1dGVyQ2VsbC5jbGFzc0xpc3QuYWRkKCdjb21wdXRlci1zaGlwLXBsYWNlZCcpO1xuICAgICAgICAgICAgY29tcHV0ZXJDZWxsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZC1jb2xvcjogcmVkOycpOyAvLyBUZXN0aW5nXG5cbiAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVyQ2VsbE9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXYgPiBkaXZbZGF0YS14PVwiJHt4Q29vcmRSYW5kb20gKyB4TGVuZ3RoT25lfVwiXVtkYXRhLXk9XCIke3lDb29yZFJhbmRvbSArIHlMZW5ndGhPbmV9XCJdYCk7XG4gICAgICAgICAgICBjb21wdXRlckNlbGxPbmUuY2xhc3NMaXN0LmFkZCgnY29tcHV0ZXItc2hpcC1wbGFjZWQnKTsgXG4gICAgICAgICAgICBjb21wdXRlckNlbGxPbmUuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7Jyk7IC8vIFRlc3RpbmcgXG5cbiAgICAgICAgICAgIENvbXB1dGVyUGxhY2VkU2hpcHNbYHNoaXAgJHtpbmRleH1gXSA9IHtjb29yZGluYXRlczogezA6IFt4Q29vcmRSYW5kb20sIHlDb29yZFJhbmRvbV0sIDE6IFt4Q29vcmRSYW5kb20gKyB4TGVuZ3RoT25lLCB5Q29vcmRSYW5kb20gKyB5TGVuZ3RoT25lXX0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVuZ3RoOiBzaGlwICsgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaXRzOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1bms6IGZhbHNlfTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb21wdXRlciBQbGFjZWQgU2hpcHM6ICcsIENvbXB1dGVyUGxhY2VkU2hpcHMpOyAvLyBUZXN0aW5nIFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNoaXAgPT09IDIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGB8U2hpcCAke3NoaXB9fGApOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICB3aGlsZSAoIWNvbXB1dGVyU2hpcFBsYWNlZClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsZXQgY29vcmRpbmF0ZXMgPSB7fTtcbiAgICAgICAgICAgICAgICBsZXQgY29vcmRpbmF0ZUluZGV4ID0gMDsgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gRmluZCB3aGljaCBjb29yZGluYXRlcyBhbHJlYWR5IGhhdmUgc2hpcCBwbGFjZW1lbnRzIChGaW5kICdjb21wdXRlci1zaGlwLXBsYWNlZCcpOiBcbiAgICAgICAgICAgICAgICBjb21wdXRlckNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb21wdXRlci1zaGlwLXBsYWNlZCcpKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnWCBDZWxsOiAnLCBjZWxsLmRhdGFzZXQueCk7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdZIENlbGw6ICcsIGNlbGwuZGF0YXNldC55KTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1ggUmFuZG9tOiAnLCB4Q29vcmRSYW5kb20pOyAvLyBUZXN0aW5nIFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1kgUmFuZG9tOiAnLCB5Q29vcmRSYW5kb20pOyAvLyBUZXN0aW5nIFxuICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXNbY29vcmRpbmF0ZUluZGV4KytdID0gW3BhcnNlSW50KGNlbGwuZGF0YXNldC54KSwgcGFyc2VJbnQoY2VsbC5kYXRhc2V0LnkpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdcXG4nKTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Nvb3JkaW5hdGVzIHdpdGggc2hpcCBwbGFjZW1lbnRzOiAnLCBjb29yZGluYXRlcyk7IC8vIFRlc3RpbmdcblxuICAgICAgICAgICAgICAgIC8vIFRlc3RpbmcgZm9yIG92ZXJsYXBwaW5nIHNoaXAgcGxhY2VtZW50cyBhbmQgc2VhcmNoaW5nIGZvciBvcGVuIGNlbGxzLiBcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gY29vcmRpbmF0ZXMpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvLyBUZXN0IGlmIHNoaXAgbGVuZ3RoIDIgaXMgb3ZlcmxhcHBpbmcgdGhlIG90aGVyIHNoaXBzIG9uIHRoZSBib2FyZC4gXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb29yZGluYXRlc05vdE92ZXJsYXBwaW5nID0gZmFsc2U7IFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb29yZGluYXRlc1trZXldKTsgLy8gVGVzdGluZyBcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUoIWNvb3JkaW5hdGVzTm90T3ZlcmxhcHBpbmcpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoKGNvb3JkaW5hdGVzW2tleV1bMF0gPT09IHhDb29yZFJhbmRvbSAmJiBjb29yZGluYXRlc1trZXldWzFdID09PSB5Q29vcmRSYW5kb20pIHx8IFxuICAgICAgICAgICAgICAgICAgICAgICAgKGNvb3JkaW5hdGVzW2tleV1bMF0gPT09ICh4Q29vcmRSYW5kb20gKyB4TGVuZ3RoT25lKSAmJiBjb29yZGluYXRlc1trZXldWzFdID09PSAoeUNvb3JkUmFuZG9tICsgeUxlbmd0aE9uZSkpIHx8IFxuICAgICAgICAgICAgICAgICAgICAgICAgKGNvb3JkaW5hdGVzW2tleV1bMF0gPT09ICh4Q29vcmRSYW5kb20gKyB4TGVuZ3RoVHdvKSkgJiYgKGNvb3JkaW5hdGVzW2tleV1bMV0gPT09ICh5Q29vcmRSYW5kb20gKyB5TGVuZ3RoVHdvKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCAoKGNvb3JkaW5hdGVzW2tleV1bMF0gPT09IHhDb29yZFJhbmRvbSAmJiBjb29yZGluYXRlc1trZXldWzFdID09PSB5Q29vcmRSYW5kb20pICYmIFxuICAgICAgICAgICAgICAgICAgICAgICAgKGNvb3JkaW5hdGVzW2tleV1bMF0gPT09ICh4Q29vcmRSYW5kb20gKyB4TGVuZ3RoT25lKSAmJiBjb29yZGluYXRlc1trZXldWzFdID09PSAoeUNvb3JkUmFuZG9tICsgeUxlbmd0aE9uZSkpICYmIFxuICAgICAgICAgICAgICAgICAgICAgICAgKGNvb3JkaW5hdGVzW2tleV1bMF0gPT09ICh4Q29vcmRSYW5kb20gKyB4TGVuZ3RoVHdvKSAmJiBjb29yZGluYXRlc1trZXldWzFdID09PSAoeUNvb3JkUmFuZG9tICsgeUxlbmd0aFR3bykpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb21wdXRlclJvd3MubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZm91bmRcIik7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlc05vdE92ZXJsYXBwaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RvcCB0aGUgY29vcmRpbmF0ZXMgZnJvbSBsZWF2aW5nIHRoZSBib2FyZCBpZiB0aGV5IGFyZSBjaGFuZ2VkLiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoeENvb3JkUmFuZG9tICsgMikgPj0gMTAgfHwgKHlDb29yZFJhbmRvbSArIDIpID49IDEwKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhDb29yZFJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbXB1dGVyUm93cy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlDb29yZFJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTsgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjb21wdXRlckNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY29tcHV0ZXItZ2FtZWJvYXJkID4gZGl2ID4gZGl2W2RhdGEteD1cIiR7eENvb3JkUmFuZG9tfVwiXVtkYXRhLXk9XCIke3lDb29yZFJhbmRvbX1cIl1gKTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVyQ2VsbE9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXYgPiBkaXZbZGF0YS14PVwiJHt4Q29vcmRSYW5kb20gKyB4TGVuZ3RoT25lfVwiXVtkYXRhLXk9XCIke3lDb29yZFJhbmRvbSArIHlMZW5ndGhPbmV9XCJdYCk7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wdXRlckNlbGxUd28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY29tcHV0ZXItZ2FtZWJvYXJkID4gZGl2ID4gZGl2W2RhdGEteD1cIiR7eENvb3JkUmFuZG9tICsgeExlbmd0aFR3b31cIl1bZGF0YS15PVwiJHt5Q29vcmRSYW5kb20gKyB5TGVuZ3RoVHdvfVwiXWApOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29tcHV0ZXJDZWxsKTsgLy8gVGVzdGluZyBcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb21wdXRlckNlbGxPbmUpOyAvLyBUZXN0aW5nIFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbXB1dGVyQ2VsbFR3byk7IC8vIFRlc3RpbmcgXG5cbiAgICAgICAgICAgICAgICBpZiAoKHhDb29yZFJhbmRvbSArIDIpID49IDEwIHx8ICh5Q29vcmRSYW5kb20gKyAyKSA+PSAxMClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29vcmRpbmF0ZXMgYXJlIG9mZiB0aGUgYm9hcmQuXCIpOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiWDogXCIsIHhDb29yZFJhbmRvbSArIDIpOyAvLyBUZXN0aW5nIFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlk6IFwiLCB5Q29vcmRSYW5kb20gKyAyKTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnXFxuJyk7IC8vIFRlc3RpbmcgXG5cbiAgICAgICAgICAgICAgICAgICAgeENvb3JkUmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29tcHV0ZXJSb3dzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIHlDb29yZFJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNvbXB1dGVyQ2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbXB1dGVyLXNoaXAtcGxhY2VkJykgfHwgY29tcHV0ZXJDZWxsT25lLmNsYXNzTGlzdC5jb250YWlucygnY29tcHV0ZXItc2hpcC1wbGFjZWQnKSB8fCBjb21wdXRlckNlbGxUd28uY2xhc3NMaXN0LmNvbnRhaW5zKCdjb21wdXRlci1zaGlwLXBsYWNlZCcpKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RoZXJlIGlzIGFuIG92ZXJsYXAuJyk7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgeENvb3JkUmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29tcHV0ZXJSb3dzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIHlDb29yZFJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJMZWF2aW5nLi4uXCIpOyAvLyBUZXN0aW5nIFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnXFxuJyk7IC8vIFRlc3RpbmcgXG4gICAgICAgICAgICAgICAgICAgIGNvbXB1dGVyU2hpcFBsYWNlZCA9IHRydWU7IC8vIFRlc3RpbmcgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIik7IC8vIFRlc3RpbmcgXG4gICAgICAgICAgICB9IFxuXG4gICAgICAgICAgICBjb25zdCBjb21wdXRlckNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY29tcHV0ZXItZ2FtZWJvYXJkID4gZGl2ID4gZGl2W2RhdGEteD1cIiR7eENvb3JkUmFuZG9tfVwiXVtkYXRhLXk9XCIke3lDb29yZFJhbmRvbX1cIl1gKTtcbiAgICAgICAgICAgIGNvbXB1dGVyQ2VsbC5jbGFzc0xpc3QuYWRkKCdjb21wdXRlci1zaGlwLXBsYWNlZCcpO1xuICAgICAgICAgICAgY29tcHV0ZXJDZWxsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47Jyk7IFxuXG4gICAgICAgICAgICBjb25zdCBjb21wdXRlckNlbGxPbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY29tcHV0ZXItZ2FtZWJvYXJkID4gZGl2ID4gZGl2W2RhdGEteD1cIiR7eENvb3JkUmFuZG9tICsgeExlbmd0aE9uZX1cIl1bZGF0YS15PVwiJHt5Q29vcmRSYW5kb20gKyB5TGVuZ3RoT25lfVwiXWApO1xuICAgICAgICAgICAgY29tcHV0ZXJDZWxsT25lLmNsYXNzTGlzdC5hZGQoJ2NvbXB1dGVyLXNoaXAtcGxhY2VkJyk7XG4gICAgICAgICAgICBjb21wdXRlckNlbGxPbmUuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjsnKTtcblxuICAgICAgICAgICAgY29uc3QgY29tcHV0ZXJDZWxsVHdvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNvbXB1dGVyLWdhbWVib2FyZCA+IGRpdiA+IGRpdltkYXRhLXg9XCIke3hDb29yZFJhbmRvbSArIHhMZW5ndGhUd299XCJdW2RhdGEteT1cIiR7eUNvb3JkUmFuZG9tICsgeUxlbmd0aFR3b31cIl1gKTtcbiAgICAgICAgICAgIGNvbXB1dGVyQ2VsbFR3by5jbGFzc0xpc3QuYWRkKCdjb21wdXRlci1zaGlwLXBsYWNlZCcpOyBcbiAgICAgICAgICAgIGNvbXB1dGVyQ2VsbFR3by5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQtY29sb3I6IGdyZWVuOycpOyBcbiAgICAgICAgICAgIENvbXB1dGVyUGxhY2VkU2hpcHNbYHNoaXAgJHtpbmRleH1gXSA9IHtjb29yZGluYXRlczogezA6IFt4Q29vcmRSYW5kb20sIHlDb29yZFJhbmRvbV0sIDE6IFt4Q29vcmRSYW5kb20gKyB4TGVuZ3RoT25lLCB5Q29vcmRSYW5kb20gKyB5TGVuZ3RoT25lXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDI6IFt4Q29vcmRSYW5kb20gKyB4TGVuZ3RoVHdvLCB5Q29vcmRSYW5kb20gKyB5TGVuZ3RoVHdvXX0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVuZ3RoOiBzaGlwICsgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaXRzOiAwLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdW5rOiBmYWxzZX07XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ29tcHV0ZXIgUGxhY2VkIFNoaXBzOiAnLCBDb21wdXRlclBsYWNlZFNoaXBzKTsgLy8gVGVzdGluZyBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzaGlwID09PSAzKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgfFNoaXAgJHtzaGlwfXxgKTsgICBcbiAgICAgICAgICAgIHdoaWxlKCFjb21wdXRlclNoaXBQbGFjZWQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0ge307XG4gICAgICAgICAgICAgICAgbGV0IGNvb3JkaW5hdGVJbmRleCA9IDA7IFxuXG4gICAgICAgICAgICAgICAgLy8gRmluZCB3aGljaCBjb29yZGluYXRlcyBhbHJlYWR5IGhhdmUgc2hpcCBwbGFjZW1lbnRzIChGaW5kICdjb21wdXRlci1zaGlwLXBsYWNlZCcpOiBcbiAgICAgICAgICAgICAgICBjb21wdXRlckNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb21wdXRlci1zaGlwLXBsYWNlZCcpKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlggQ2VsbDogXCIsIGNlbGwuZGF0YXNldC54KTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJZIENlbGw6IFwiLCBjZWxsLmRhdGFzZXQueSk7IC8vIFRlc3RpbmcgXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlggUmFuZG9tOiBcIiwgeENvb3JkUmFuZG9tKTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJZIFJhbmRvbTogXCIsIHlDb29yZFJhbmRvbSk7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzW2Nvb3JkaW5hdGVJbmRleCsrXSA9IFtwYXJzZUludChjZWxsLmRhdGFzZXQueCksIHBhcnNlSW50KGNlbGwuZGF0YXNldC55KV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnXFxuJyk7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29vcmRpbmF0ZXMgd2l0aCBzaGlwIHBsYWNlbWVudHM6IFwiLCBjb29yZGluYXRlcyk7IC8vIFRlc3RpbmcgXG5cbiAgICAgICAgICAgICAgICAvLyBUZXN0aW5nIGZvciBvdmVybGFwcGluZyBzaGlwIHBsYWNlbWVudHMgYW5kIHNlYXJjaGluZyBmb3Igb3BlbiBjZWxscy4gXG4gICAgICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIGNvb3JkaW5hdGVzKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGVzdCBpZiBzaGlwIGxlbmd0aCAyIGlzIG92ZXJsYXBwaW5nIHRoZSBvdGhlciBzaGlwcyBvbiB0aGUgYm9hcmQuIFxuICAgICAgICAgICAgICAgICAgICBsZXQgY29vcmRpbmF0ZXNOb3RPdmVybGFwcGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb29yZGluYXRlc1trZXldKTsgLy8gVGVzdGluZyBcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUoIWNvb3JkaW5hdGVzTm90T3ZlcmxhcHBpbmcpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoKGNvb3JkaW5hdGVzW2tleV1bMF0gPT09IHhDb29yZFJhbmRvbSAmJiBjb29yZGluYXRlc1trZXldWzFdID09PSB5Q29vcmRSYW5kb20pIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKGNvb3JkaW5hdGVzW2tleV1bMF0gPT09ICh4Q29vcmRSYW5kb20gKyB4TGVuZ3RoT25lKSAmJiBjb29yZGluYXRlc1trZXldWzFdID09PSAoeUNvb3JkUmFuZG9tICsgeUxlbmd0aE9uZSkpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKGNvb3JkaW5hdGVzW2tleV1bMF0gPT09ICh4Q29vcmRSYW5kb20gKyB4TGVuZ3RoVHdvKSAmJiBjb29yZGluYXRlc1trZXldWzFdID09PSAoeUNvb3JkUmFuZG9tICsgeUxlbmd0aFR3bykpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKGNvb3JkaW5hdGVzW2tleV1bMF0gPT09ICh4Q29vcmRSYW5kb20gKyB4TGVuZ3RoVGhyZWUpICYmIGNvb3JkaW5hdGVzW2tleV1bMV0gPT09ICh5Q29vcmRSYW5kb20gKyB5TGVuZ3RoVGhyZWUpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICB8fCAoKGNvb3JkaW5hdGVzW2tleV1bMF0gPT09IHhDb29yZFJhbmRvbSAmJiBjb29yZGluYXRlc1trZXldWzFdID09PSB5Q29vcmRSYW5kb20pICYmIFxuICAgICAgICAgICAgICAgICAgICAgICAgIChjb29yZGluYXRlc1trZXldWzBdID09PSAoeENvb3JkUmFuZG9tICsgeExlbmd0aE9uZSkgJiYgY29vcmRpbmF0ZXNba2V5XVsxXSA9PT0gKHlDb29yZFJhbmRvbSArIHlMZW5ndGhPbmUpKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgIChjb29yZGluYXRlc1trZXldWzBdID09PSAoeENvb3JkUmFuZG9tICsgeExlbmd0aFR3bykgJiYgY29vcmRpbmF0ZXNba2V5XVsxXSA9PT0gKHlDb29yZFJhbmRvbSArIHlMZW5ndGhUd28pKSAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAoY29vcmRpbmF0ZXNba2V5XVswXSA9PT0gKHhDb29yZFJhbmRvbSArIHhMZW5ndGhUaHJlZSkgJiYgY29vcmRpbmF0ZXNba2V5XVsxXSA9PT0gKHlDb29yZFJhbmRvbSArIHlMZW5ndGhUaHJlZSkpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb21wdXRlclJvd3MubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZm91bmRcIik7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXNOb3RPdmVybGFwcGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0b3AgdGhlIGNvb3JkaW5hdGVzIGZyb20gbGVhdmluZyB0aGUgYm9hcmQgaWYgdGhleSBhcmUgY2hhbmdlZC4gXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHhDb29yZFJhbmRvbSArIDMpID49IDEwIHx8ICh5Q29vcmRSYW5kb20gKyAzKSA+PSAxMClcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb21wdXRlclJvd3MubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgY29tcHV0ZXJDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNvbXB1dGVyLWdhbWVib2FyZCA+IGRpdiA+IGRpdltkYXRhLXg9XCIke3hDb29yZFJhbmRvbX1cIl1bZGF0YS15PVwiJHt5Q29vcmRSYW5kb219XCJdYCk7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wdXRlckNlbGxPbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY29tcHV0ZXItZ2FtZWJvYXJkID4gZGl2ID4gZGl2W2RhdGEteD1cIiR7eENvb3JkUmFuZG9tICsgeExlbmd0aE9uZX1cIl1bZGF0YS15PVwiJHt5Q29vcmRSYW5kb20gKyB5TGVuZ3RoT25lfVwiXWApOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICAgICAgY29uc3QgY29tcHV0ZXJDZWxsVHdvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNvbXB1dGVyLWdhbWVib2FyZCA+IGRpdiA+IGRpdltkYXRhLXg9XCIke3hDb29yZFJhbmRvbSArIHhMZW5ndGhUd299XCJdW2RhdGEteT1cIiR7eUNvb3JkUmFuZG9tICsgeUxlbmd0aFR3b31cIl1gKTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVyQ2VsbFRocmVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNvbXB1dGVyLWdhbWVib2FyZCA+IGRpdiA+IGRpdltkYXRhLXg9XCIke3hDb29yZFJhbmRvbSArIHhMZW5ndGhUaHJlZX1cIl1bZGF0YS15PVwiJHt5Q29vcmRSYW5kb20gKyB5TGVuZ3RoVGhyZWV9XCJdYCk7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb21wdXRlckNlbGwpOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29tcHV0ZXJDZWxsT25lKTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbXB1dGVyQ2VsbFR3byk7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb21wdXRlckNlbGxUaHJlZSk7IC8vIFRlc3RpbmdcblxuICAgICAgICAgICAgICAgIGlmICgoeENvb3JkUmFuZG9tICsgMykgPj0gMTAgfHwgKHlDb29yZFJhbmRvbSArIDMpID49IDEwKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb29yZGluYXRlcyBhcmUgb2ZmIHRoZSBib2FyZC5cIik7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJYOiBcIiwgeENvb3JkUmFuZG9tICsgMyk7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJZOiBcIiwgeUNvb3JkUmFuZG9tICsgMyk7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1xcbicpOyAvLyBUZXN0aW5nICBcblxuICAgICAgICAgICAgICAgICAgICB4Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb21wdXRlclJvd3MubGVuZ3RoKTsgXG4gICAgICAgICAgICAgICAgICAgIHlDb29yZFJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNvbXB1dGVyQ2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbXB1dGVyLXNoaXAtcGxhY2VkJykgfHwgY29tcHV0ZXJDZWxsT25lLmNsYXNzTGlzdC5jb250YWlucygnY29tcHV0ZXItc2hpcC1wbGFjZWQnKSB8fCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXB1dGVyQ2VsbFR3by5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbXB1dGVyLXNoaXAtcGxhY2VkJykgfHwgY29tcHV0ZXJDZWxsVGhyZWUuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb21wdXRlci1zaGlwLXBsYWNlZCcpKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaGVyZSBpcyBhbiBvdmVybGFwLlwiKTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgICAgICAgICB4Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb21wdXRlclJvd3MubGVuZ3RoKTsgXG4gICAgICAgICAgICAgICAgICAgIHlDb29yZFJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTGVhdmluZy4uLlwiKTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlxcblwiKTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgICAgICAgICBjb21wdXRlclNoaXBQbGFjZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpOyAvLyBUZXN0aW5nIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBjb21wdXRlckNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY29tcHV0ZXItZ2FtZWJvYXJkID4gZGl2ID4gZGl2W2RhdGEteD1cIiR7eENvb3JkUmFuZG9tfVwiXVtkYXRhLXk9XCIke3lDb29yZFJhbmRvbX1cIl1gKTsgXG4gICAgICAgICAgICBjb21wdXRlckNlbGwuY2xhc3NMaXN0LmFkZCgnY29tcHV0ZXItc2hpcC1wbGFjZWQnKTtcbiAgICAgICAgICAgIGNvbXB1dGVyQ2VsbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQtY29sb3I6IG9yYW5nZTsnKTtcblxuICAgICAgICAgICAgY29uc3QgY29tcHV0ZXJDZWxsT25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNvbXB1dGVyLWdhbWVib2FyZCA+IGRpdiA+IGRpdltkYXRhLXg9XCIke3hDb29yZFJhbmRvbSArIHhMZW5ndGhPbmV9XCJdW2RhdGEteT1cIiR7eUNvb3JkUmFuZG9tICsgeUxlbmd0aE9uZX1cIl1gKTtcbiAgICAgICAgICAgIGNvbXB1dGVyQ2VsbE9uZS5jbGFzc0xpc3QuYWRkKCdjb21wdXRlci1zaGlwLXBsYWNlZCcpO1xuICAgICAgICAgICAgY29tcHV0ZXJDZWxsT25lLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlOycpO1xuXG4gICAgICAgICAgICBjb25zdCBjb21wdXRlckNlbGxUd28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY29tcHV0ZXItZ2FtZWJvYXJkID4gZGl2ID4gZGl2W2RhdGEteD1cIiR7eENvb3JkUmFuZG9tICsgeExlbmd0aFR3b31cIl1bZGF0YS15PVwiJHt5Q29vcmRSYW5kb20gKyB5TGVuZ3RoVHdvfVwiXWApO1xuICAgICAgICAgICAgY29tcHV0ZXJDZWxsVHdvLmNsYXNzTGlzdC5hZGQoJ2NvbXB1dGVyLXNoaXAtcGxhY2VkJyk7IFxuICAgICAgICAgICAgY29tcHV0ZXJDZWxsVHdvLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlOycpO1xuXG4gICAgICAgICAgICBjb25zdCBjb21wdXRlckNlbGxUaHJlZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXYgPiBkaXZbZGF0YS14PVwiJHt4Q29vcmRSYW5kb20gKyB4TGVuZ3RoVGhyZWV9XCJdW2RhdGEteT1cIiR7eUNvb3JkUmFuZG9tICsgeUxlbmd0aFRocmVlfVwiXWApO1xuICAgICAgICAgICAgY29tcHV0ZXJDZWxsVGhyZWUuY2xhc3NMaXN0LmFkZCgnY29tcHV0ZXItc2hpcC1wbGFjZWQnKTtcbiAgICAgICAgICAgIGNvbXB1dGVyQ2VsbFRocmVlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlOycpOyBcbiAgICAgICAgICAgIENvbXB1dGVyUGxhY2VkU2hpcHNbYHNoaXAgJHtpbmRleH1gXSA9IHtjb29yZGluYXRlczogezA6IFt4Q29vcmRSYW5kb20sIHlDb29yZFJhbmRvbV0sIDE6IFt4Q29vcmRSYW5kb20gKyB4TGVuZ3RoT25lLCB5Q29vcmRSYW5kb20gKyB5TGVuZ3RoT25lXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDI6IFt4Q29vcmRSYW5kb20gKyB4TGVuZ3RoVHdvLCB5Q29vcmRSYW5kb20gKyB5TGVuZ3RoVHdvXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDM6IFt4Q29vcmRSYW5kb20gKyB4TGVuZ3RoVGhyZWUsIHlDb29yZFJhbmRvbSArIHlMZW5ndGhUaHJlZV19LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlbmd0aDogc2hpcCArIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGl0czogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdW5rOiBmYWxzZX07XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ29tcHV0ZXIgUGxhY2VkIFNoaXBzOiAnLCBDb21wdXRlclBsYWNlZFNoaXBzKTsgLy8gVGVzdGluZyBcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG4vLyBJbnRlZmFjZURPTSgpOiBJbnRlcmZhY2Ugc2VjdGlvbiBmb3IgdGhlIHVzZXIuIFxuZnVuY3Rpb24gSW50ZXJmYWNlRE9NKCl7XG4gICAgY29uc3QgZ2FtZWJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVib2FyZC1jb250YWluZXInKTtcblxuICAgIGNvbnN0IHBsYXllckludGVyZmFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBsYXllckludGVyZmFjZS5jbGFzc0xpc3QuYWRkKCdpbnRlcmZhY2UnKTtcblxuICAgIGNvbnN0IG5ld0dhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBuZXdHYW1lLnRleHRDb250ZW50ID0gJ05ldyBHYW1lJztcblxuICAgIGNvbnN0IGNvb3JkaW5hdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB4Q29vcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB4Q29vcmQudGV4dENvbnRlbnQgPSAneCc7XG4gICAgY29uc3QgeUNvb3JkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgeUNvb3JkLnRleHRDb250ZW50ID0gJ3knOyBcbiAgICBjb29yZGluYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKHhDb29yZCk7XG4gICAgY29vcmRpbmF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh5Q29vcmQpOyBcblxuICAgIGNvbnN0IG51bWJlck9mU2hpcHNQbGFjZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBudW1iZXJPZlNoaXBzUGxhY2VkLmNsYXNzTGlzdC5hZGQoJ251bWJlci1vZi1zaGlwcycpOyBcblxuICAgIHBsYXllckludGVyZmFjZS5hcHBlbmRDaGlsZChuZXdHYW1lKTtcbiAgICBwbGF5ZXJJbnRlcmZhY2UuYXBwZW5kQ2hpbGQoY29vcmRpbmF0ZUNvbnRhaW5lcik7IFxuICAgIHBsYXllckludGVyZmFjZS5hcHBlbmRDaGlsZChudW1iZXJPZlNoaXBzUGxhY2VkKTsgXG4gICAgZ2FtZWJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllckludGVyZmFjZSk7XG5cbiAgICBuZXdHYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgTmV3R2FtZSk7XG5cbiAgICAvLyB4Q29vcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBDaGFuZ2VUb1hBeGlzKTtcbiAgICAvLyB5Q29vcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBDaGFuZ2VUb1lBeGlzKTsgXG59XG5cbi8vIENoYW5nZVRvWEF4aXMoKTogV2lsbCBhbGxvdyB0aGUgcGxheWVyIHRvIHBsYWNlIHNoaXBzIGFsb25nIHRoZSB4LWF4aXMuXG5mdW5jdGlvbiBDaGFuZ2VUb1hBeGlzKGUpe1xuICAgIGNvbnN0IHhDb29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnRlcmZhY2UgPiBkaXYgPiBidXR0b246bnRoLWNoaWxkKDEpJyk7XG4gICAgY29uc29sZS5sb2coeENvb3JkKTsgXG4gICAgY29uc3QgeUNvb3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmludGVyZmFjZSA+IGRpdiA+IGJ1dHRvbjpudGgtY2hpbGQoMiknKTsgXG4gICAgaWYgKE5ld0dhbWVTZWxlY3RlZC5uZXdHYW1lU2VsZWN0ZWQpXG4gICAge1xuICAgICAgICBBeGlzQ2hhbmdlLmF4aXNXYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgQXhpc0NoYW5nZS5heGlzQ2hhbmdlID0gMTtcbiAgICAgICAgeUNvb3JkLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQtY29vcmRpbmF0ZScpO1xuICAgICAgICB4Q29vcmQuY2xhc3NMaXN0LmFkZCgnY3VycmVudC1jb29yZGluYXRlJyk7XG4gICAgICAgIFBsYWNlU2hpcHMoZSk7XG4gICAgfVxufVxuXG4vLyBDaGFuZ2VUb1lBeGlzKCk6IFdpbGwgYWxsb3cgdGhlIHBsYXllciB0byBwbGFjZSBzaGlwcyBhbG9uZyB0aGUgeS1heGlzLiBcbmZ1bmN0aW9uIENoYW5nZVRvWUF4aXMoZSl7XG4gICAgY29uc3QgeENvb3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmludGVyZmFjZSA+IGRpdiA+IGJ1dHRvbjpudGgtY2hpbGQoMSknKTtcbiAgICBjb25zdCB5Q29vcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW50ZXJmYWNlID4gZGl2ID4gYnV0dG9uOm50aC1jaGlsZCgyKScpOyBcbiAgICBpZiAoTmV3R2FtZVNlbGVjdGVkLm5ld0dhbWVTZWxlY3RlZClcbiAgICB7XG4gICAgICAgIEF4aXNDaGFuZ2UuYXhpc1dhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICBBeGlzQ2hhbmdlLmF4aXNDaGFuZ2UgPSAyO1xuICAgICAgICB4Q29vcmQuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudC1jb29yZGluYXRlJyk7XG4gICAgICAgIHlDb29yZC5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LWNvb3JkaW5hdGUnKTsgXG4gICAgICAgIFBsYWNlU2hpcHMoZSk7XG4gICAgfVxufVxuXG4vLyBOZXdHYW1lKCk6IFdpbGwgYmVnaW4gYSBuZXcgZ2FtZSBmb3IgdGhlIHBsYXllci4gXG5mdW5jdGlvbiBOZXdHYW1lKCl7XG4gICAgY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheWVyLW9uZS1ib2FyZCA+IGRpdiA+IGRpdicpOyBcbiAgICBjb25zdCBjb21wdXRlckNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbXB1dGVyLWdhbWVib2FyZCA+IGRpdiA+IGRpdicpOyBcbiAgICBjb25zdCB4Q29vcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW50ZXJmYWNlID4gZGl2ID4gYnV0dG9uOm50aC1jaGlsZCgxKScpO1xuICAgIGNvbnN0IHlDb29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnRlcmZhY2UgPiBkaXYgPiBidXR0b246bnRoLWNoaWxkKDIpJyk7IFxuXG4gICAgY29uc29sZS5sb2coJ1BsYXllciBiZWdpbnMgYSBuZXcgZ2FtZS4nKTsgLy8gVGVzdGluZyBcbiAgICBjb25zb2xlLmxvZygnXFxuJyk7IC8vIFRlc3RpbmcgXG5cbiAgICAvLyBUT0RPOiBSZXNldCBhbGwgdGhlIGdhbWUgYXR0cmlidXRlcyBpbiB0aGlzIGZ1bmN0aW9uIHdoZW4gdGhlXG4gICAgLy8gdXNlciB3YW50cyB0byBzdGFydCBhIG5ldyBnYW1lLiBcblxuICAgIC8vIFRPRE86IFJlc2V0IGFsbCB0aGUgY2VsbHMgb24gZWFjaCBnYW1lYm9hcmQuIFxuXG4gICAgTmV3R2FtZVNlbGVjdGVkLm5ld0dhbWVTZWxlY3RlZCA9IHRydWU7IFxuXG4gICAgQWN0aXZhdGVHYW1lLmFjdGl2YXRlR2FtZSA9IGZhbHNlO1xuICAgIEFjdGl2YXRlR2FtZS5hY3RpdmF0ZVBsYXllck9uZVR1cm4gPSB0cnVlOyBcblxuICAgIERpc2FibGVQbGFjZW1lbnQuZGlzYWJsZVBsYWNlbWVudCA9IGZhbHNlOyBcblxuICAgIFNoaXBEYXRhLmxlbmd0aEluZGV4ID0gMDtcbiAgICBTaGlwRGF0YS5zaGlwTGVuZ3RoID0gMDtcbiAgICBTaGlwRGF0YS5zaGlwc1BsYWNlZCA9IDA7IFxuXG4gICAgQXhpc0NoYW5nZS5heGlzQ2hhbmdlID0gbnVsbDtcbiAgICBBeGlzQ2hhbmdlLmF4aXNXYXNDaGFuZ2VkID0gZmFsc2U7IFxuXG4gICAgT2JqZWN0LmFzc2lnbihQbGFjZWRTaGlwcywge30pOyAvLyBhc3NpZ24gZW1wdHkgb2JqZWN0cyB0byBib3RoIG9mIHRoZSBwbGFjZW1lbnQgb2JqZWN0cy4gXG4gICAgT2JqZWN0LmFzc2lnbihDb21wdXRlclBsYWNlZFNoaXBzLCB7fSk7IFxuICAgIFxuICAgIC8vIENsZWFuIHRoZSBjb21wdXRlciBnYW1lYm9hcmQuIFxuICAgIGNvbXB1dGVyQ2VsbHMuZm9yRWFjaCgoY29tcHV0ZXJDZWxsKSA9PiB7XG4gICAgICAgIGNvbXB1dGVyQ2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdjb21wdXRlci1zaGlwLXBsYWNlZCcpOyBcbiAgICAgICAgY29tcHV0ZXJDZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXB1dGVyLXNoaXAtaGl0Jyk7XG4gICAgICAgIGNvbXB1dGVyQ2VsbC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7IC8vIFRlc3RpbmcgIFxuICAgICAgICBjb21wdXRlckNlbGwucmVwbGFjZUNoaWxkcmVuKCk7IFxuICAgIH0pOyBcbiAgICBcbiAgICAvLyBDbGVhbiB0aGUgcGxheWVyIGdhbWVib2FyZC4gXG4gICAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXAtcGxhY2VkJyk7IFxuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTsgXG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgncGxheWVyLW9uZS1zaGlwLWhpdCcpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXB1dGVyLWhpdC1taXNzZWQnKTsgXG4gICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBQbGFjZU9uWCk7IFxuICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgUGxhY2VPblkpO1xuICAgICAgICBjZWxsLnJlcGxhY2VDaGlsZHJlbigpOyBcbiAgICB9KTtcblxuICAgIC8vIENsZWFuIHRoZSB4IGFuZCB5IGF4ZSBidXR0b25zLiBcbiAgICAvLyB4Q29vcmQuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudC1jb29yZGluYXRlJyk7IFxuICAgIC8vIHlDb29yZC5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50LWNvb3JkaW5hdGUnKTtcbiAgICB4Q29vcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBDaGFuZ2VUb1hBeGlzKTtcbiAgICB5Q29vcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBDaGFuZ2VUb1lBeGlzKTsgXG5cbiAgICAvLyBDbGVhbnMgdGhlIHBsYXllciBhbmQgY29tcHV0ZXIgZGlzcGxheSBldmVudHMuIFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItZ2FtZWJvYXJkLWV2ZW50cycpLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcHV0ZXItZ2FtZWJvYXJkLWV2ZW50cycpLnRleHRDb250ZW50ID0gXCJcIjsgIFxuXG4gICAgQ29tcHV0ZXJQbGFjZVNoaXBzKCk7IFxuICAgIFBsYWNlU2hpcHMoKTsgXG59XG5cbi8vIEVudGVyWCgpOiBXaWxsIGVudGVyIGVhY2ggY2VsbCBvbiB0aGUgeC1heGlzIHNlbGVjdGlvbi4gXG5mdW5jdGlvbiBFbnRlclgoZSl7XG4gICAgY29uc29sZS5sb2coZSk7IC8vIFRlc3RpbmcgXG4gICAgY29uc29sZS5sb2coZS50YXJnZXQpOyAvLyBUZXN0aW5nIFxuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmRhdGFzZXQueCk7IC8vIFRlc3RpbmcgXG4gICAgY29uc29sZS5sb2coZS50YXJnZXQuZGF0YXNldC55KTsgLy8gVGVzdGluZ1xuICAgIGNvbnNvbGUubG9nKCdcXG4nKTsgLy8gVGVzdGluZ1xuIFxuICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnh9XCJdW2RhdGEteT1cIiR7ZS50YXJnZXQuZGF0YXNldC55fVwiXWApO1xuICAgIGNvbnN0IG5leHRDZWxsT25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7ZS50YXJnZXQuZGF0YXNldC54fVwiXVtkYXRhLXk9XCIke3BhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueSkgKyAxfVwiXWApO1xuICAgIGNvbnN0IG5leHRDZWxsVHdvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7ZS50YXJnZXQuZGF0YXNldC54fVwiXVtkYXRhLXk9XCIke3BhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueSkgKyAyfVwiXWApO1xuICAgIGNvbnN0IG5leHRDZWxsVGhyZWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnh9XCJdW2RhdGEteT1cIiR7cGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC55KSArIDN9XCJdYCk7XG5cbiAgICBpZiAoU2hpcERhdGEuc2hpcExlbmd0aCA9PT0gMClcbiAgICB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaG92ZXItdGVzdCcpOyBcbiAgICB9XG4gICAgZWxzZSBpZiAoU2hpcERhdGEuc2hpcExlbmd0aCA9PT0gMSkgLy8gVGhlIHNoaXAgbGVuZ3RoIHRvIGJlIHBsYWNlZCBvbiB0aGUgYm9hcmQuXG4gICAge1xuICAgICAgICBpZiAoIShwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnkpID09PSA5KSkgLy8gS2VlcHMgYWxsIHNoaXAgcGxhY2VtZW50cyBvbiB0aGUgZ2FtZWJvYXJkLiBcbiAgICAgICAge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgICAgICBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuYWRkKCdob3Zlci10ZXN0Jyk7IFxuICAgICAgICAgICAgRGlzYWJsZVBsYWNlbWVudC5kaXNhYmxlUGxhY2VtZW50ID0gZmFsc2U7IFxuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgRGlzYWJsZVBsYWNlbWVudC5kaXNhYmxlUGxhY2VtZW50ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAyKVxuICAgIHtcbiAgICAgICAgaWYgKCEoKHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueSkgKyAyKSA9PT0gMTApICYmICEoKHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueSkgKyAxKSA9PT0gOSkgJiYgIShwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnkpID09PSA5KSlcbiAgICAgICAge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgICAgICBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuYWRkKCdob3Zlci10ZXN0Jyk7IFxuICAgICAgICAgICAgbmV4dENlbGxUd28uY2xhc3NMaXN0LmFkZCgnaG92ZXItdGVzdCcpO1xuICAgICAgICAgICAgRGlzYWJsZVBsYWNlbWVudC5kaXNhYmxlUGxhY2VtZW50ID0gZmFsc2U7IFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgXG4gICAgICAgIHtcbiAgICAgICAgICAgIERpc2FibGVQbGFjZW1lbnQuZGlzYWJsZVBsYWNlbWVudCA9IHRydWU7IFxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKFNoaXBEYXRhLnNoaXBMZW5ndGggPT09IDMpXG4gICAge1xuICAgICAgICBpZiAoISgocGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC55KSArIDMpID09PSAxMCkgJiYgISgocGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC55KSArIDIpID09PSA5KSAmJiAhKChwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnkpICsgMSkgPT09IDkpICYmICEocGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC55KSA9PT0gOSkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaG92ZXItdGVzdCcpO1xuICAgICAgICAgICAgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmFkZCgnaG92ZXItdGVzdCcpO1xuICAgICAgICAgICAgbmV4dENlbGxUd28uY2xhc3NMaXN0LmFkZCgnaG92ZXItdGVzdCcpO1xuICAgICAgICAgICAgbmV4dENlbGxUaHJlZS5jbGFzc0xpc3QuYWRkKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgICAgICBEaXNhYmxlUGxhY2VtZW50LmRpc2FibGVQbGFjZW1lbnQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIFxuICAgICAgICB7XG4gICAgICAgICAgICBEaXNhYmxlUGxhY2VtZW50LmRpc2FibGVQbGFjZW1lbnQgPSB0cnVlOyBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIE5vdGU6IEkgY291bGQgcHV0IHRoaXMgaW4gaXRzIG93biBmdW5jdGlvbiwgYnV0IGZvciBub3cgSSB3aWxsIHVzZSB0aGUgRW50ZXJYIGZ1bmN0aW9uIHRvIHRlc3RcbiAgICAvLyB0aGlzIGFsb2dvcml0aG0gb3V0LiBJdCB3b3VsZCBiZSBhIGxvdCBtb3JlIGVmZmVjaWVudCB0byBwbGFjZSB0aGlzIGluIGFub3RoZXIgZnVuY3Rpb25cbiAgICAvLyBzbyB5b3UgY2FuIHJlbW92ZSB0aGUgY2xpY2sgZXZlbnQuIFlvdSBzaG91bGQgcHV0IHRoZW0gaW4gdGhlIFBsYWNlT25YKCkgYW5kIFBsYWNlT25ZKCkgZnVuY3Rpb25zLiBCdXRcbiAgICAvLyBmb3Igbm93IHlvdSBjYW4gdXNlIHRoZSBTaGlwRGF0YS5sZW5ndGhJbmRleCBwcm9wZXJ0eSBpbiB0aGUgaWYgc3RhdGVtZW50IGNvbmRpdGlvbi4gQ3VycmVudGx5XG4gICAgLy8gVXNpbmcgZGlzYWJsZVBsYWNlbWVudCB0byBzdG9wIHRoZSBwbGF5ZXIgZnJvbSB0aGUgcGxhY2luZyBhIHNoaXAgb24gdGhlIGdhbWVib2FyZCB3aGVuIHRoZXkgbGVhdmVcbiAgICAvLyB0aGUgYm9hcmQuIFxuXG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFBsYWNlT25YKTtcbiAgICAvLyBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vICAgICBpZiAoIWRpc2FibGVQbGFjZW1lbnQpXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdYOiAnLCBjZWxsLmRhdGFzZXQueCk7IFxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ1k6ICcsIGNlbGwuZGF0YXNldC55KTsgXG5cbiAgICAvLyAgICAgICAgIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAwICYmIFNoaXBEYXRhLmxlbmd0aEluZGV4IDwgMTApIFxuICAgIC8vICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgIGlmIChjZWxsLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSkgLy8gQ2FudCBwbGFjZSB0aGUgc2hpcCBvbiB0aGlzIGNlbGwgd2hlbiB0aGVyZSBpcyBvbmUgYWxyZWFkeSBvbiB0aGUgY2VsbC4gXG4gICAgLy8gICAgICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ2VsbCBhbHJlYWR5IGNvbnRhaW5zIGEgc2hpcCcpOyAvLyBUZXN0aW5nXG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgIGVsc2VcbiAgICAvLyAgICAgICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcC1wbGFjZWQnKTsgXG4gICAgLy8gICAgICAgICAgICAgICAgIFBsYWNlZFNoaXBzW2BzaGlwICR7U2hpcERhdGEubGVuZ3RoSW5kZXh9YF0uY29vcmRpbmF0ZXMgPSB7MDogW3BhcnNlSW50KGNlbGwuZGF0YXNldC54KSwgcGFyc2VJbnQoY2VsbC5kYXRhc2V0LnkpXX07XG4gICAgLy8gICAgICAgICAgICAgICAgIFNoaXBEYXRhLmxlbmd0aEluZGV4Kys7IFxuICAgIC8vICAgICAgICAgICAgICAgICBBeGlzQ2hhbmdlLmF4aXNXYXNDaGFuZ2VkID0gZmFsc2U7XG4gICAgLy8gICAgICAgICAgICAgICAgIFBsYWNlU2hpcHMoKTsgXG4gICAgLy8gICAgICAgICAgICAgfSAgICAgICBcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIGVsc2UgaWYgKFNoaXBEYXRhLnNoaXBMZW5ndGggPT09IDEgJiYgU2hpcERhdGEubGVuZ3RoSW5kZXggPCAxMClcbiAgICAvLyAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICBpZiAoKGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpICYmIG5leHRDZWxsT25lLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSkgXG4gICAgLy8gICAgICAgICAgICAgfHwgKGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpIHx8IG5leHRDZWxsT25lLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSkpXG4gICAgLy8gICAgICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ2VsbCBhbHJlYWR5IGNvbnRhaW5zIGEgc2hpcCcpOyAvLyBUZXN0aW5nXG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgIGVsc2VcbiAgICAvLyAgICAgICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcC1wbGFjZWQnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmFkZCgnc2hpcC1wbGFjZWQnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgUGxhY2VkU2hpcHNbYHNoaXAgJHtTaGlwRGF0YS5sZW5ndGhJbmRleH1gXS5jb29yZGluYXRlcyA9IHswOiBbcGFyc2VJbnQoY2VsbC5kYXRhc2V0LngpLCBwYXJzZUludChjZWxsLmRhdGFzZXQueSldLCBcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxOiBbcGFyc2VJbnQobmV4dENlbGxPbmUuZGF0YXNldC54KSwgcGFyc2VJbnQobmV4dENlbGxPbmUuZGF0YXNldC55KV19O1xuICAgIC8vICAgICAgICAgICAgICAgICBTaGlwRGF0YS5sZW5ndGhJbmRleCsrO1xuICAgIC8vICAgICAgICAgICAgICAgICBBeGlzQ2hhbmdlLmF4aXNXYXNDaGFuZ2VkID0gZmFsc2U7XG4gICAgLy8gICAgICAgICAgICAgICAgIFBsYWNlU2hpcHMoKTsgXG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgICAgZWxzZSBpZiAoU2hpcERhdGEuc2hpcExlbmd0aCA9PT0gMiAmJiBTaGlwRGF0YS5sZW5ndGhJbmRleCA8IDEwKVxuICAgIC8vICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgIGlmICgoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgJiYgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpICYmIG5leHRDZWxsVHdvLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSkgXG4gICAgLy8gICAgICAgICAgICAgfHwgKGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpIHx8IG5leHRDZWxsT25lLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSB8fCBuZXh0Q2VsbFR3by5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykpKVxuICAgIC8vICAgICAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NlbGwgYWxyZWFkeSBjb250YWlucyBhIHNoaXAnKTsgLy8gVGVzdGluZ1xuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICBlbHNlXG4gICAgLy8gICAgICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VkJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgIG5leHRDZWxsT25lLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VkJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgIG5leHRDZWxsVHdvLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VkJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgIFBsYWNlZFNoaXBzW2BzaGlwICR7U2hpcERhdGEubGVuZ3RoSW5kZXh9YF0uY29vcmRpbmF0ZXMgPSB7MDogW3BhcnNlSW50KGNlbGwuZGF0YXNldC54KSwgcGFyc2VJbnQoY2VsbC5kYXRhc2V0LnkpXSxcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxOiBbcGFyc2VJbnQobmV4dENlbGxPbmUuZGF0YXNldC54KSwgcGFyc2VJbnQobmV4dENlbGxPbmUuZGF0YXNldC55KV0sXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMjogW3BhcnNlSW50KG5leHRDZWxsVHdvLmRhdGFzZXQueCksIHBhcnNlSW50KG5leHRDZWxsVHdvLmRhdGFzZXQueSldfTtcbiAgICAvLyAgICAgICAgICAgICAgICAgU2hpcERhdGEubGVuZ3RoSW5kZXgrKztcbiAgICAvLyAgICAgICAgICAgICAgICAgQXhpc0NoYW5nZS5heGlzV2FzQ2hhbmdlZCA9IGZhbHNlO1xuICAgIC8vICAgICAgICAgICAgICAgICBQbGFjZVNoaXBzKCk7IFxuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIGVsc2UgaWYgKFNoaXBEYXRhLnNoaXBMZW5ndGggPT09IDMgJiYgU2hpcERhdGEubGVuZ3RoSW5kZXggPCAxMClcbiAgICAvLyAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICBpZiAoKGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpICYmIG5leHRDZWxsT25lLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSAmJiBuZXh0Q2VsbFR3by5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgJiYgbmV4dENlbGxUaHJlZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykpXG4gICAgLy8gICAgICAgICAgICAgfHwgKGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpIHx8IG5leHRDZWxsT25lLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSB8fCBuZXh0Q2VsbFR3by5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgfHwgbmV4dENlbGxUaHJlZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykpKVxuICAgIC8vICAgICAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NlbGwgYWxyZWFkeSBjb250YWlucyBhIHNoaXAnKTsgLy8gVGVzdGluZ1xuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICBlbHNlXG4gICAgLy8gICAgICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VkJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgIG5leHRDZWxsT25lLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VkJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgIG5leHRDZWxsVHdvLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VkJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgIG5leHRDZWxsVGhyZWUuY2xhc3NMaXN0LmFkZCgnc2hpcC1wbGFjZWQnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgUGxhY2VkU2hpcHNbYHNoaXAgJHtTaGlwRGF0YS5sZW5ndGhJbmRleH1gXS5jb29yZGluYXRlcyA9IHswOiBbcGFyc2VJbnQoY2VsbC5kYXRhc2V0LngpLCBwYXJzZUludChjZWxsLmRhdGFzZXQueSldLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDE6IFtwYXJzZUludChuZXh0Q2VsbE9uZS5kYXRhc2V0LngpLCBwYXJzZUludChuZXh0Q2VsbE9uZS5kYXRhc2V0LnkpXSxcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyOiBbcGFyc2VJbnQobmV4dENlbGxUd28uZGF0YXNldC54KSwgcGFyc2VJbnQobmV4dENlbGxUd28uZGF0YXNldC55KV0sXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMzogW3BhcnNlSW50KG5leHRDZWxsVGhyZWUuZGF0YXNldC54KSwgcGFyc2VJbnQobmV4dENlbGxUaHJlZS5kYXRhc2V0LnkpXX07XG4gICAgLy8gICAgICAgICAgICAgICAgIFNoaXBEYXRhLmxlbmd0aEluZGV4Kys7IFxuICAgIC8vICAgICAgICAgICAgICAgICBBeGlzQ2hhbmdlLmF4aXNXYXNDaGFuZ2VkID0gZmFsc2U7IFxuICAgIC8vICAgICAgICAgICAgICAgICBQbGFjZVNoaXBzKCk7IFxuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfVxuICAgIC8vIH0pO1xufVxuXG4vLyBQbGFjZU9uWCgpOiBXaWxsIHBsYWNlIGEgc2hpcCBvbiB0aGUgZ2FtZWJvYXJkcyB4LWF4aXMuXG5mdW5jdGlvbiBQbGFjZU9uWChlKXtcbiAgICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5ZXItb25lLWJvYXJkID4gZGl2ID4gZGl2Jyk7XG4gICAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTsgXG4gICAgfSk7IFxuXG4gICAgaWYgKCFEaXNhYmxlUGxhY2VtZW50LmRpc2FibGVQbGFjZW1lbnQpXG4gICAge1xuICAgICAgICBjb25zb2xlLmxvZygnWDogJywgZS50YXJnZXQuZGF0YXNldC54KTsgXG4gICAgICAgIGNvbnNvbGUubG9nKCdZOiAnLCBlLnRhcmdldC5kYXRhc2V0LnkpOyBcbiAgICBcbiAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke2UudGFyZ2V0LmRhdGFzZXQueH1cIl1bZGF0YS15PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnl9XCJdYCk7XG4gICAgICAgIGNvbnN0IG5leHRDZWxsT25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7ZS50YXJnZXQuZGF0YXNldC54fVwiXVtkYXRhLXk9XCIke3BhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueSkgKyAxfVwiXWApO1xuICAgICAgICBjb25zdCBuZXh0Q2VsbFR3byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke2UudGFyZ2V0LmRhdGFzZXQueH1cIl1bZGF0YS15PVwiJHtwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnkpICsgMn1cIl1gKTtcbiAgICAgICAgY29uc3QgbmV4dENlbGxUaHJlZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke2UudGFyZ2V0LmRhdGFzZXQueH1cIl1bZGF0YS15PVwiJHtwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnkpICsgM31cIl1gKTtcbiAgICBcbiAgICAgICAgaWYgKFNoaXBEYXRhLnNoaXBMZW5ndGggPT09IDAgJiYgU2hpcERhdGEubGVuZ3RoSW5kZXggPCAxMCkgXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmIChjZWxsLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSkgLy8gQ2FudCBwbGFjZSB0aGUgc2hpcCBvbiB0aGlzIGNlbGwgd2hlbiB0aGVyZSBpcyBvbmUgYWxyZWFkeSBvbiB0aGUgY2VsbC4gXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ0NlbGwgYWxyZWFkeSBjb250YWlucyBhIHNoaXAnKTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VkJyk7IFxuICAgICAgICAgICAgICAgIFBsYWNlZFNoaXBzW2BzaGlwICR7U2hpcERhdGEubGVuZ3RoSW5kZXh9YF0uY29vcmRpbmF0ZXMgPSB7MDogW3BhcnNlSW50KGNlbGwuZGF0YXNldC54KSwgcGFyc2VJbnQoY2VsbC5kYXRhc2V0LnkpXX07XG4gICAgICAgICAgICAgICAgU2hpcERhdGEubGVuZ3RoSW5kZXgrKzsgXG4gICAgICAgICAgICAgICAgQXhpc0NoYW5nZS5heGlzV2FzQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIFBsYWNlU2hpcHMoKTsgXG4gICAgICAgICAgICB9ICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKFNoaXBEYXRhLnNoaXBMZW5ndGggPT09IDEgJiYgU2hpcERhdGEubGVuZ3RoSW5kZXggPCAxMClcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKChjZWxsLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSAmJiBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykpIFxuICAgICAgICAgICAgfHwgKGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpIHx8IG5leHRDZWxsT25lLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ0NlbGwgYWxyZWFkeSBjb250YWlucyBhIHNoaXAnKTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgICAgIHJldHVybjsgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlZCcpO1xuICAgICAgICAgICAgICAgIG5leHRDZWxsT25lLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VkJyk7XG4gICAgICAgICAgICAgICAgUGxhY2VkU2hpcHNbYHNoaXAgJHtTaGlwRGF0YS5sZW5ndGhJbmRleH1gXS5jb29yZGluYXRlcyA9IHswOiBbcGFyc2VJbnQoY2VsbC5kYXRhc2V0LngpLCBwYXJzZUludChjZWxsLmRhdGFzZXQueSldLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDE6IFtwYXJzZUludChuZXh0Q2VsbE9uZS5kYXRhc2V0LngpLCBwYXJzZUludChuZXh0Q2VsbE9uZS5kYXRhc2V0LnkpXX07XG4gICAgICAgICAgICAgICAgU2hpcERhdGEubGVuZ3RoSW5kZXgrKztcbiAgICAgICAgICAgICAgICBBeGlzQ2hhbmdlLmF4aXNXYXNDaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgUGxhY2VTaGlwcygpOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAyICYmIFNoaXBEYXRhLmxlbmd0aEluZGV4IDwgMTApXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICgoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgJiYgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpICYmIG5leHRDZWxsVHdvLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSkgXG4gICAgICAgICAgICB8fCAoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgfHwgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpIHx8IG5leHRDZWxsVHdvLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ0NlbGwgYWxyZWFkeSBjb250YWlucyBhIHNoaXAnKTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VkJyk7XG4gICAgICAgICAgICAgICAgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmFkZCgnc2hpcC1wbGFjZWQnKTtcbiAgICAgICAgICAgICAgICBuZXh0Q2VsbFR3by5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlZCcpO1xuICAgICAgICAgICAgICAgIFBsYWNlZFNoaXBzW2BzaGlwICR7U2hpcERhdGEubGVuZ3RoSW5kZXh9YF0uY29vcmRpbmF0ZXMgPSB7MDogW3BhcnNlSW50KGNlbGwuZGF0YXNldC54KSwgcGFyc2VJbnQoY2VsbC5kYXRhc2V0LnkpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDE6IFtwYXJzZUludChuZXh0Q2VsbE9uZS5kYXRhc2V0LngpLCBwYXJzZUludChuZXh0Q2VsbE9uZS5kYXRhc2V0LnkpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDI6IFtwYXJzZUludChuZXh0Q2VsbFR3by5kYXRhc2V0LngpLCBwYXJzZUludChuZXh0Q2VsbFR3by5kYXRhc2V0LnkpXX07XG4gICAgICAgICAgICAgICAgU2hpcERhdGEubGVuZ3RoSW5kZXgrKztcbiAgICAgICAgICAgICAgICBBeGlzQ2hhbmdlLmF4aXNXYXNDaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgUGxhY2VTaGlwcygpOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAzICYmIFNoaXBEYXRhLmxlbmd0aEluZGV4IDwgMTApXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICgoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgJiYgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpICYmIG5leHRDZWxsVHdvLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSAmJiBuZXh0Q2VsbFRocmVlLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSlcbiAgICAgICAgICAgIHx8IChjZWxsLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSB8fCBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgfHwgbmV4dENlbGxUd28uY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpIHx8IG5leHRDZWxsVGhyZWUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnQ2VsbCBhbHJlYWR5IGNvbnRhaW5zIGEgc2hpcCcpOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICAgICAgcmV0dXJuOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VkJyk7XG4gICAgICAgICAgICAgICAgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmFkZCgnc2hpcC1wbGFjZWQnKTtcbiAgICAgICAgICAgICAgICBuZXh0Q2VsbFR3by5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlZCcpO1xuICAgICAgICAgICAgICAgIG5leHRDZWxsVGhyZWUuY2xhc3NMaXN0LmFkZCgnc2hpcC1wbGFjZWQnKTtcbiAgICAgICAgICAgICAgICBQbGFjZWRTaGlwc1tgc2hpcCAke1NoaXBEYXRhLmxlbmd0aEluZGV4fWBdLmNvb3JkaW5hdGVzID0gezA6IFtwYXJzZUludChjZWxsLmRhdGFzZXQueCksIHBhcnNlSW50KGNlbGwuZGF0YXNldC55KV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxOiBbcGFyc2VJbnQobmV4dENlbGxPbmUuZGF0YXNldC54KSwgcGFyc2VJbnQobmV4dENlbGxPbmUuZGF0YXNldC55KV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyOiBbcGFyc2VJbnQobmV4dENlbGxUd28uZGF0YXNldC54KSwgcGFyc2VJbnQobmV4dENlbGxUd28uZGF0YXNldC55KV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzOiBbcGFyc2VJbnQobmV4dENlbGxUaHJlZS5kYXRhc2V0LngpLCBwYXJzZUludChuZXh0Q2VsbFRocmVlLmRhdGFzZXQueSldfTtcbiAgICAgICAgICAgICAgICBTaGlwRGF0YS5sZW5ndGhJbmRleCsrOyBcbiAgICAgICAgICAgICAgICBBeGlzQ2hhbmdlLmF4aXNXYXNDaGFuZ2VkID0gZmFsc2U7IFxuICAgICAgICAgICAgICAgIFBsYWNlU2hpcHMoKTsgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IFxuXG4vLyBMZWF2ZVgoKTogV2lsbCBsZWF2ZSBlYWNoIGNlbGwgZnJvbSB0aGUgeC1heGlzIHNlbGVjdGlvbi4gXG5mdW5jdGlvbiBMZWF2ZVgoZSl7XG4gICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke2UudGFyZ2V0LmRhdGFzZXQueH1cIl1bZGF0YS15PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnl9XCJdYCk7XG4gICAgY29uc3QgbmV4dENlbGxPbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnh9XCJdW2RhdGEteT1cIiR7cGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC55KSArIDF9XCJdYCk7XG4gICAgY29uc3QgbmV4dENlbGxUd28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnh9XCJdW2RhdGEteT1cIiR7cGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC55KSArIDJ9XCJdYCk7XG4gICAgY29uc3QgbmV4dENlbGxUaHJlZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke2UudGFyZ2V0LmRhdGFzZXQueH1cIl1bZGF0YS15PVwiJHtwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnkpICsgM31cIl1gKTtcblxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2hvdmVyLXRlc3QnKSlcbiAgICB7XG4gICAgICAgIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAwKVxuICAgICAgICB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAxKVxuICAgICAgICB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgICAgIG5leHRDZWxsT25lLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAyKVxuICAgICAgICB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgICAgIG5leHRDZWxsT25lLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgICAgIG5leHRDZWxsVHdvLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTsgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoU2hpcERhdGEuc2hpcExlbmd0aCA9PT0gMylcbiAgICAgICAge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgICAgICBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgICAgICBuZXh0Q2VsbFR3by5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgICAgICBuZXh0Q2VsbFRocmVlLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTsgXG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIEVudGVyWSgpOiBXaWxsIGVudGVyIGVhY2ggY2VsbCBvbiB0aGUgeS1heGlzIHNlbGVjdGlvbi5cbmZ1bmN0aW9uIEVudGVyWShlKXtcbiAgICBjb25zb2xlLmxvZyhlKTsgLy8gVGVzdGluZyBcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldCk7IC8vIFRlc3RpbmdcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5kYXRhc2V0LngpOyAvLyBUZXN0aW5nXG4gICAgY29uc29sZS5sb2coZS50YXJnZXQuZGF0YXNldC55KTsgLy8gVGVzdGluZyBcbiAgICBjb25zb2xlLmxvZygnXFxuJyk7IC8vIFRlc3RpbmdcblxuICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnh9XCJdW2RhdGEteT1cIiR7ZS50YXJnZXQuZGF0YXNldC55fVwiXWApO1xuICAgIGNvbnN0IG5leHRDZWxsT25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7cGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC54KSArIDF9XCJdW2RhdGEteT1cIiR7ZS50YXJnZXQuZGF0YXNldC55fVwiXWApO1xuICAgIGNvbnN0IG5leHRDZWxsVHdvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7cGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC54KSArIDJ9XCJdW2RhdGEteT1cIiR7ZS50YXJnZXQuZGF0YXNldC55fVwiXWApO1xuICAgIGNvbnN0IG5leHRDZWxsVGhyZWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LngpICsgM31cIl1bZGF0YS15PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnl9XCJdYCk7XG5cbiAgICBpZiAoU2hpcERhdGEuc2hpcExlbmd0aCA9PT0gMClcbiAgICB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaG92ZXItdGVzdCcpO1xuICAgIH1cbiAgICBlbHNlIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAxKVxuICAgIHtcbiAgICAgICAgaWYgKCEocGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC54KSA9PT0gOSkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaG92ZXItdGVzdCcpO1xuICAgICAgICAgICAgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmFkZCgnaG92ZXItdGVzdCcpO1xuICAgICAgICAgICAgRGlzYWJsZVBsYWNlbWVudC5kaXNhYmxlUGxhY2VtZW50ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBcbiAgICAgICAge1xuICAgICAgICAgICAgRGlzYWJsZVBsYWNlbWVudC5kaXNhYmxlUGxhY2VtZW50ID0gdHJ1ZTsgXG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoU2hpcERhdGEuc2hpcExlbmd0aCA9PT0gMilcbiAgICB7XG4gICAgICAgIGlmICghKChwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LngpICsgMikgPT09IDEwKSAmJiAhKChwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LngpICsgMSkgPT09IDkpICYmICEocGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC54KSA9PT0gOSkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaG92ZXItdGVzdCcpO1xuICAgICAgICAgICAgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmFkZCgnaG92ZXItdGVzdCcpO1xuICAgICAgICAgICAgbmV4dENlbGxUd28uY2xhc3NMaXN0LmFkZCgnaG92ZXItdGVzdCcpO1xuICAgICAgICAgICAgRGlzYWJsZVBsYWNlbWVudC5kaXNhYmxlUGxhY2VtZW50ID0gZmFsc2U7IFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgXG4gICAgICAgIHtcbiAgICAgICAgICAgIERpc2FibGVQbGFjZW1lbnQuZGlzYWJsZVBsYWNlbWVudCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoU2hpcERhdGEuc2hpcExlbmd0aCA9PT0gMylcbiAgICB7XG4gICAgICAgIGlmICghKChwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LngpICsgMykgPT09IDEwKSAmJiAhKChwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LngpICsgMikgPT09IDkpICYmICEoKHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueCkgKyAxKSA9PT0gOSkgJiYgIShwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LngpID09PSA5KSlcbiAgICAgICAge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgICAgICBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuYWRkKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgICAgICBuZXh0Q2VsbFR3by5jbGFzc0xpc3QuYWRkKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgICAgICBuZXh0Q2VsbFRocmVlLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgICAgIERpc2FibGVQbGFjZW1lbnQuZGlzYWJsZVBsYWNlbWVudCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgRGlzYWJsZVBsYWNlbWVudC5kaXNhYmxlUGxhY2VtZW50ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0gICBcblxuICAgIC8vIFBsYWNlcyB0aGUgc2hpcHMgb24gdGhlIGJvYXJkIGNlbGxzOlxuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBQbGFjZU9uWSk7IFxuICAgIC8vIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgLy8gICAgIGlmICghZGlzYWJsZVBsYWNlbWVudClcbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJYOiBcIiwgY2VsbC5kYXRhc2V0LngpOyAvLyBUZXN0aW5nIFxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJZOiBcIiwgY2VsbC5kYXRhc2V0LnkpOyAvLyBUZXN0aW5nICAgXG4gICAgLy8gICAgICAgICBpZiAoU2hpcERhdGEuc2hpcExlbmd0aCA9PT0gMCAmJiBTaGlwRGF0YS5sZW5ndGhJbmRleCA8IDEwKVxuICAgIC8vICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgIGlmIChjZWxsLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSlcbiAgICAvLyAgICAgICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2VsbCBhbHJlYWR5IGNvbnRhaW5zIGEgc2hpcC5cIik7IC8vIFRlc3RpbmcgXG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgIGVsc2VcbiAgICAvLyAgICAgICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcC1wbGFjZWQnKTsgXG4gICAgLy8gICAgICAgICAgICAgICAgIFBsYWNlZFNoaXBzW2BzaGlwICR7U2hpcERhdGEubGVuZ3RoSW5kZXh9YF0uY29vcmRpbmF0ZXMgPSB7MDogW3BhcnNlSW50KGNlbGwuZGF0YXNldC54KSwgcGFyc2VJbnQoY2VsbC5kYXRhc2V0LnkpXX07XG4gICAgLy8gICAgICAgICAgICAgICAgIFNoaXBEYXRhLmxlbmd0aEluZGV4Kys7IFxuICAgIC8vICAgICAgICAgICAgICAgICBBeGlzQ2hhbmdlLmF4aXNXYXNDaGFuZ2VkID0gZmFsc2U7XG4gICAgLy8gICAgICAgICAgICAgICAgIFBsYWNlU2hpcHMoKTsgXG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgICAgZWxzZSBpZiAoU2hpcERhdGEuc2hpcExlbmd0aCA9PT0gMSAmJiBTaGlwRGF0YS5sZW5ndGhJbmRleCA8IDEwKVxuICAgIC8vICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgIGlmICgoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgJiYgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpKSBcbiAgICAvLyAgICAgICAgICAgICB8fCAoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgfHwgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpKSlcbiAgICAvLyAgICAgICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2VsbCBhbHJlYWR5IGNvbnRhaW5zIGEgc2hpcC5cIik7IC8vIFRlc3RpbmcgXG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgIGVsc2VcbiAgICAvLyAgICAgICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcC1wbGFjZWQnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmFkZCgnc2hpcC1wbGFjZWQnKTsgXG4gICAgLy8gICAgICAgICAgICAgICAgIFBsYWNlZFNoaXBzW2BzaGlwICR7U2hpcERhdGEubGVuZ3RoSW5kZXh9YF0uY29vcmRpbmF0ZXMgPSB7MDogW3BhcnNlSW50KGNlbGwuZGF0YXNldC54KSwgcGFyc2VJbnQoY2VsbC5kYXRhc2V0LnkpXSxcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxOiBbcGFyc2VJbnQobmV4dENlbGxPbmUuZGF0YXNldC54KSwgcGFyc2VJbnQobmV4dENlbGxPbmUuZGF0YXNldC55KV19O1xuICAgIC8vICAgICAgICAgICAgICAgICBTaGlwRGF0YS5sZW5ndGhJbmRleCsrO1xuICAgIC8vICAgICAgICAgICAgICAgICBBeGlzQ2hhbmdlLmF4aXNXYXNDaGFuZ2VkID0gZmFsc2U7XG4gICAgLy8gICAgICAgICAgICAgICAgIFBsYWNlU2hpcHMoKTsgXG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgICAgZWxzZSBpZiAoU2hpcERhdGEuc2hpcExlbmd0aCA9PT0gMiAmJiBTaGlwRGF0YS5sZW5ndGhJbmRleCA8IDEwKVxuICAgIC8vICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgIGlmICgoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgJiYgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpICYmIG5leHRDZWxsVHdvLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSkgXG4gICAgLy8gICAgICAgICAgICAgfHwgKGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpIHx8IG5leHRDZWxsT25lLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSB8fCBuZXh0Q2VsbFR3by5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykpKVxuICAgIC8vICAgICAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDZWxsIGFscmVhZHkgY29udGFpbnMgYSBzaGlwXCIpOyAvLyBUZXN0aW5nIFxuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICBlbHNlXG4gICAgLy8gICAgICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VkJyk7IFxuICAgIC8vICAgICAgICAgICAgICAgICBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlZCcpO1xuICAgIC8vICAgICAgICAgICAgICAgICBuZXh0Q2VsbFR3by5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlZCcpO1xuICAgIC8vICAgICAgICAgICAgICAgICBQbGFjZWRTaGlwc1tgc2hpcCAke1NoaXBEYXRhLmxlbmd0aEluZGV4fWBdLmNvb3JkaW5hdGVzID0gezA6IFtwYXJzZUludChjZWxsLmRhdGFzZXQueCksIHBhcnNlSW50KGNlbGwuZGF0YXNldC55KV0sXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTogW3BhcnNlSW50KG5leHRDZWxsT25lLmRhdGFzZXQueCksIHBhcnNlSW50KG5leHRDZWxsT25lLmRhdGFzZXQueSldLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDI6IFtwYXJzZUludChuZXh0Q2VsbFR3by5kYXRhc2V0LngpLCBwYXJzZUludChuZXh0Q2VsbFR3by5kYXRhc2V0LnkpXX07XG4gICAgLy8gICAgICAgICAgICAgICAgIFNoaXBEYXRhLmxlbmd0aEluZGV4Kys7XG4gICAgLy8gICAgICAgICAgICAgICAgIEF4aXNDaGFuZ2UuYXhpc1dhc0NoYW5nZWQgPSBmYWxzZTsgXG4gICAgLy8gICAgICAgICAgICAgICAgIFBsYWNlU2hpcHMoKTtcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICBlbHNlIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAzICYmIFNoaXBEYXRhLmxlbmd0aEluZGV4IDwgMTApXG4gICAgLy8gICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgaWYgKChjZWxsLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSAmJiBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgJiYgbmV4dENlbGxUd28uY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpICYmIG5leHRDZWxsVGhyZWUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpKVxuICAgIC8vICAgICAgICAgICAgIHx8IChjZWxsLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSB8fCBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgfHwgbmV4dENlbGxUaHJlZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgJiYgbmV4dENlbGxUaHJlZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykpKVxuICAgIC8vICAgICAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDZWxsIGFscmVhZHkgY29udGFpbnMgYSBzaGlwXCIpOyAvLyBUZXN0aW5nIFxuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICBlbHNlIFxuICAgIC8vICAgICAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlZCcpOyBcbiAgICAvLyAgICAgICAgICAgICAgICAgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmFkZCgnc2hpcC1wbGFjZWQnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgbmV4dENlbGxUd28uY2xhc3NMaXN0LmFkZCgnc2hpcC1wbGFjZWQnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgbmV4dENlbGxUaHJlZS5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlZCcpO1xuICAgIC8vICAgICAgICAgICAgICAgICBQbGFjZWRTaGlwc1tgc2hpcCAke1NoaXBEYXRhLmxlbmd0aEluZGV4fWBdLmNvb3JkaW5hdGVzID0gezA6IFtwYXJzZUludChjZWxsLmRhdGFzZXQueCksIHBhcnNlSW50KGNlbGwuZGF0YXNldC55KV0sXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTogW3BhcnNlSW50KG5leHRDZWxsT25lLmRhdGFzZXQueCksIHBhcnNlSW50KG5leHRDZWxsT25lLmRhdGFzZXQueSldLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDI6IFtwYXJzZUludChuZXh0Q2VsbFR3by5kYXRhc2V0LngpLCBwYXJzZUludChuZXh0Q2VsbFR3by5kYXRhc2V0LnkpXSxcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzOiBbcGFyc2VJbnQobmV4dENlbGxUaHJlZS5kYXRhc2V0LngpLCBwYXJzZUludChuZXh0Q2VsbFRocmVlLmRhdGFzZXQueSldfTtcbiAgICAvLyAgICAgICAgICAgICAgICAgU2hpcERhdGEubGVuZ3RoSW5kZXgrKztcbiAgICAvLyAgICAgICAgICAgICAgICAgQXhpc0NoYW5nZS5heGlzV2FzQ2hhbmdlZCA9IGZhbHNlO1xuICAgIC8vICAgICAgICAgICAgICAgICBQbGFjZVNoaXBzKCk7IFxuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH0gICAgICAgICAgICBcbiAgICAvLyAgICAgfVxuICAgIC8vIH0pO1xufVxuXG4vLyBQbGFjZU9uWSgpOiBXaWxsIHBsYWNlIGEgc2hpcCBvbiB0aGUgZ2FtZWJvYXJkcyB5LWF4aXMuIFxuZnVuY3Rpb24gUGxhY2VPblkoZSl7XG4gICAgY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheWVyLW9uZS1ib2FyZCA+IGRpdiA+IGRpdicpO1xuICAgIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci10ZXN0Jyk7IFxuICAgIH0pO1xuXG4gICAgaWYgKCFEaXNhYmxlUGxhY2VtZW50LmRpc2FibGVQbGFjZW1lbnQpXG4gICAge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlg6IFwiLCBlLnRhcmdldC5kYXRhc2V0LngpOyAvLyBUZXN0aW5nIFxuICAgICAgICBjb25zb2xlLmxvZyhcIlk6IFwiLCBlLnRhcmdldC5kYXRhc2V0LnkpOyAvLyBUZXN0aW5nICAgXG5cbiAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke2UudGFyZ2V0LmRhdGFzZXQueH1cIl1bZGF0YS15PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnl9XCJdYCk7XG4gICAgICAgIGNvbnN0IG5leHRDZWxsT25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7cGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC54KSArIDF9XCJdW2RhdGEteT1cIiR7ZS50YXJnZXQuZGF0YXNldC55fVwiXWApOyBcbiAgICAgICAgY29uc3QgbmV4dENlbGxUd28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LngpICsgMn1cIl1bZGF0YS15PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnl9XCJdYCk7XG4gICAgICAgIGNvbnN0IG5leHRDZWxsVGhyZWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LngpICsgM31cIl1bZGF0YS15PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnl9XCJdYCk7XG5cbiAgICAgICAgaWYgKFNoaXBEYXRhLnNoaXBMZW5ndGggPT09IDAgJiYgU2hpcERhdGEubGVuZ3RoSW5kZXggPCAxMClcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2VsbCBhbHJlYWR5IGNvbnRhaW5zIGEgc2hpcC5cIik7IC8vIFRlc3RpbmcgXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcC1wbGFjZWQnKTsgXG4gICAgICAgICAgICAgICAgUGxhY2VkU2hpcHNbYHNoaXAgJHtTaGlwRGF0YS5sZW5ndGhJbmRleH1gXS5jb29yZGluYXRlcyA9IHswOiBbcGFyc2VJbnQoY2VsbC5kYXRhc2V0LngpLCBwYXJzZUludChjZWxsLmRhdGFzZXQueSldfTtcbiAgICAgICAgICAgICAgICBTaGlwRGF0YS5sZW5ndGhJbmRleCsrOyBcbiAgICAgICAgICAgICAgICBBeGlzQ2hhbmdlLmF4aXNXYXNDaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgUGxhY2VTaGlwcygpOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAxICYmIFNoaXBEYXRhLmxlbmd0aEluZGV4IDwgMTApXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICgoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgJiYgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpKSBcbiAgICAgICAgICAgIHx8IChjZWxsLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSB8fCBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2VsbCBhbHJlYWR5IGNvbnRhaW5zIGEgc2hpcC5cIik7IC8vIFRlc3RpbmcgXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcC1wbGFjZWQnKTtcbiAgICAgICAgICAgICAgICBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlZCcpOyBcbiAgICAgICAgICAgICAgICBQbGFjZWRTaGlwc1tgc2hpcCAke1NoaXBEYXRhLmxlbmd0aEluZGV4fWBdLmNvb3JkaW5hdGVzID0gezA6IFtwYXJzZUludChjZWxsLmRhdGFzZXQueCksIHBhcnNlSW50KGNlbGwuZGF0YXNldC55KV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxOiBbcGFyc2VJbnQobmV4dENlbGxPbmUuZGF0YXNldC54KSwgcGFyc2VJbnQobmV4dENlbGxPbmUuZGF0YXNldC55KV19O1xuICAgICAgICAgICAgICAgIFNoaXBEYXRhLmxlbmd0aEluZGV4Kys7XG4gICAgICAgICAgICAgICAgQXhpc0NoYW5nZS5heGlzV2FzQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIFBsYWNlU2hpcHMoKTsgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoU2hpcERhdGEuc2hpcExlbmd0aCA9PT0gMiAmJiBTaGlwRGF0YS5sZW5ndGhJbmRleCA8IDEwKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoKGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpICYmIG5leHRDZWxsT25lLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSAmJiBuZXh0Q2VsbFR3by5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykpIFxuICAgICAgICAgICAgfHwgKGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpIHx8IG5leHRDZWxsT25lLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSB8fCBuZXh0Q2VsbFR3by5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2VsbCBhbHJlYWR5IGNvbnRhaW5zIGEgc2hpcFwiKTsgLy8gVGVzdGluZyBcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlZCcpOyBcbiAgICAgICAgICAgICAgICBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlZCcpO1xuICAgICAgICAgICAgICAgIG5leHRDZWxsVHdvLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VkJyk7XG4gICAgICAgICAgICAgICAgUGxhY2VkU2hpcHNbYHNoaXAgJHtTaGlwRGF0YS5sZW5ndGhJbmRleH1gXS5jb29yZGluYXRlcyA9IHswOiBbcGFyc2VJbnQoY2VsbC5kYXRhc2V0LngpLCBwYXJzZUludChjZWxsLmRhdGFzZXQueSldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTogW3BhcnNlSW50KG5leHRDZWxsT25lLmRhdGFzZXQueCksIHBhcnNlSW50KG5leHRDZWxsT25lLmRhdGFzZXQueSldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMjogW3BhcnNlSW50KG5leHRDZWxsVHdvLmRhdGFzZXQueCksIHBhcnNlSW50KG5leHRDZWxsVHdvLmRhdGFzZXQueSldfTtcbiAgICAgICAgICAgICAgICBTaGlwRGF0YS5sZW5ndGhJbmRleCsrO1xuICAgICAgICAgICAgICAgIEF4aXNDaGFuZ2UuYXhpc1dhc0NoYW5nZWQgPSBmYWxzZTsgXG4gICAgICAgICAgICAgICAgUGxhY2VTaGlwcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKFNoaXBEYXRhLnNoaXBMZW5ndGggPT09IDMgJiYgU2hpcERhdGEubGVuZ3RoSW5kZXggPCAxMClcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKChjZWxsLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSAmJiBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgJiYgbmV4dENlbGxUd28uY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpICYmIG5leHRDZWxsVGhyZWUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpKVxuICAgICAgICAgICAgfHwgKGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpIHx8IG5leHRDZWxsT25lLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSB8fCBuZXh0Q2VsbFRocmVlLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSAmJiBuZXh0Q2VsbFRocmVlLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDZWxsIGFscmVhZHkgY29udGFpbnMgYSBzaGlwXCIpOyAvLyBUZXN0aW5nIFxuICAgICAgICAgICAgICAgIHJldHVybjsgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcC1wbGFjZWQnKTsgXG4gICAgICAgICAgICAgICAgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmFkZCgnc2hpcC1wbGFjZWQnKTtcbiAgICAgICAgICAgICAgICBuZXh0Q2VsbFR3by5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlZCcpO1xuICAgICAgICAgICAgICAgIG5leHRDZWxsVGhyZWUuY2xhc3NMaXN0LmFkZCgnc2hpcC1wbGFjZWQnKTtcbiAgICAgICAgICAgICAgICBQbGFjZWRTaGlwc1tgc2hpcCAke1NoaXBEYXRhLmxlbmd0aEluZGV4fWBdLmNvb3JkaW5hdGVzID0gezA6IFtwYXJzZUludChjZWxsLmRhdGFzZXQueCksIHBhcnNlSW50KGNlbGwuZGF0YXNldC55KV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxOiBbcGFyc2VJbnQobmV4dENlbGxPbmUuZGF0YXNldC54KSwgcGFyc2VJbnQobmV4dENlbGxPbmUuZGF0YXNldC55KV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyOiBbcGFyc2VJbnQobmV4dENlbGxUd28uZGF0YXNldC54KSwgcGFyc2VJbnQobmV4dENlbGxUd28uZGF0YXNldC55KV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzOiBbcGFyc2VJbnQobmV4dENlbGxUaHJlZS5kYXRhc2V0LngpLCBwYXJzZUludChuZXh0Q2VsbFRocmVlLmRhdGFzZXQueSldfTtcbiAgICAgICAgICAgICAgICBTaGlwRGF0YS5sZW5ndGhJbmRleCsrO1xuICAgICAgICAgICAgICAgIEF4aXNDaGFuZ2UuYXhpc1dhc0NoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBQbGFjZVNoaXBzKCk7IFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBMZWF2ZVkoKTogV2lsbCBsZWF2ZSBlYWNoIGNlbGwgZnJvbSB0aGUgeS1heGlzIHNlbGVjdGlvbi5cbmZ1bmN0aW9uIExlYXZlWShlKXtcbiAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7ZS50YXJnZXQuZGF0YXNldC54fVwiXVtkYXRhLXk9XCIke2UudGFyZ2V0LmRhdGFzZXQueX1cIl1gKTtcbiAgICBjb25zdCBuZXh0Q2VsbE9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke3BhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueCkgKyAxfVwiXVtkYXRhLXk9XCIke2UudGFyZ2V0LmRhdGFzZXQueX1cIl1gKTtcbiAgICBjb25zdCBuZXh0Q2VsbFR3byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke3BhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueCkgKyAyfVwiXVtkYXRhLXk9XCIke2UudGFyZ2V0LmRhdGFzZXQueX1cIl1gKTtcbiAgICBjb25zdCBuZXh0Q2VsbFRocmVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7cGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC54KSArIDN9XCJdW2RhdGEteT1cIiR7ZS50YXJnZXQuZGF0YXNldC55fVwiXWApO1xuXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaG92ZXItdGVzdCcpKVxuICAgIHtcbiAgICAgICAgaWYgKFNoaXBEYXRhLnNoaXBMZW5ndGggPT09ICAwKVxuICAgICAgICB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAxKVxuICAgICAgICB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgICAgIG5leHRDZWxsT25lLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTsgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoU2hpcERhdGEuc2hpcExlbmd0aCA9PT0gMilcbiAgICAgICAge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgICAgICBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgICAgICBuZXh0Q2VsbFR3by5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci10ZXN0Jyk7IFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKFNoaXBEYXRhLnNoaXBMZW5ndGggPT09IDMpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItdGVzdCcpO1xuICAgICAgICAgICAgbmV4dENlbGxPbmUuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItdGVzdCcpO1xuICAgICAgICAgICAgbmV4dENlbGxUd28uY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItdGVzdCcpO1xuICAgICAgICAgICAgbmV4dENlbGxUaHJlZS5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci10ZXN0Jyk7IFxuICAgICAgICB9XG4gICAgfVxufVxuIiwiLy8gQWN0aXZhdGVHYW1lIExpdGVyYWwgT2JqZWN0OiBEYXRhIGtleXMgZm9yIGFjdGl2YXRpbmcgdGhlIGdhbWUuXG5leHBvcnQgY29uc3QgQWN0aXZhdGVHYW1lID0ge1xuICAgIGFjdGl2YXRlR2FtZTogZmFsc2UsXG4gICAgYWN0aXZhdGVQbGF5ZXJPbmVUdXJuOiB0cnVlLCAvLyBQbGF5ZXIgb25lIHdpbGwgYWx3YXlzIGdldCB0byBtYWtlIHRoZSBmaXJzdCBoaXQuXG59IiwiLy8gQXhpc0NoYW5nZSBMaXRlcmFsIE9iamVjdDogV2lsbCBjb250YWluIGRhdGEgZm9yIHRvZ2dsaW5nIHRoZSB4IGFuZCB5IGF4aXMuXG5leHBvcnQgY29uc3QgQXhpc0NoYW5nZSA9IHtcbiAgICBheGlzQ2hhbmdlOiBudWxsLFxuICAgIGF4aXNXYXNDaGFuZ2VkOiBmYWxzZSwgXG59IiwiLy8gRGlzYWJsZVBsYWNlbWVudCBMaXRlcmFsIE9iamVjdDogV2lsbCBzdG9wIHRoZSBwbGF5ZXIgZnJvbSB0aGUgY2xpY2tpbmcgb24gYSBjZWxsIHdoZW4gdGhlIHNoaXAgaXMgb2ZmIHRoZSBib2FyZC4gXG5leHBvcnQgY29uc3QgRGlzYWJsZVBsYWNlbWVudCA9IHtcbiAgICBkaXNhYmxlUGxhY2VtZW50OiBmYWxzZSxcbn0iLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vU2hpcFwiO1xuaW1wb3J0IHsgRGlzcGxheUNvbXB1dGVyR2FtZWJvYXJkRXZlbnRzIH0gZnJvbSBcIi4uL21vZHVsZXMvRG9tQ29udGVudFwiO1xuaW1wb3J0IGV4cGxvc2lvbkltYWdlIGZyb20gXCIuLi9pbWFnZXMvZXhwbG9zaW9uLnBuZ1wiO1xuXG4vKiogR2FtZWJvYXJkXG4gKiAtPiBHYW1lYm9hcmRzIHNob3VsZCBiZSBhYmxlIHRvIHBsYWNlIHNoaXBzIGF0IHNwZWNpZmljIGNvb3JkaW5hdGVzIGJ5IFxuICogY2FsbGluZyB0aGUgJ3NoaXAgZmFjdG9yeSBmdW5jdGlvbicuIFxuICogXG4gKiAtPiBHYW1lYm9hcmRzIHNob3VsZCBoYXZlIGEgcmVjZWl2ZUF0dGFjayBmdW5jdGlvbiB0aGF0IHRha2VzIGEgcGFpclxuICogb2YgY29vcmRpbmF0ZXMsIGRldGVybWluZXMgd2hldGhlciBvciBub3QgdGhlIGF0dGFjayBoaXQgYSBzaGlwIGFuZFxuICogdGhlbiBzZW5kcyB0aGUgJ2hpdCcgZnVuY3Rpb24gdG8gdGhlIGNvcnJlY3Qgc2hpcCwgb3IgcmVjb3JkIHRoZSBcbiAqIGNvb3JkaW5hdGVzIG9mIHRoZSBtaXNzZWQgc2hvdC4gXG4gKiBcbiAqIC0+IEdhbWVib2FyZHMgc2hvdWxkIGtlZXAgdHJhY2sgb2YgbWlzc2VkIGF0dGFja3Mgc28gdGhleSBjYW4gZGlzcGxheSB0aGVtXG4gKiBwcm9wZXJseS5cbiAqIFxuICogLT4gR2FtZWJvYXJkcyBzaG91bGQgYmUgYWJsZSB0byByZXBvcnQgd2hldGhlciBvciBub3QgYWxsIG9mIHRoZWlyIHNoaXBzXG4gKiBoYXZlIGJlZW4gc3Vuay4gXG4gKi9cblxuLy8gR2FtZWJvYXJkKCk6IEdhbWVib2FyZCBmYWN0b3J5IGZ1bmN0aW9uLlxuZXhwb3J0IGNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCBnYW1lYm9hcmQgPSBbLi4uQXJyYXkoMTApXS5tYXAoKCkgPT4gQXJyYXkoMTApLmZpbGwoXCJcIikpOyBcbiAgICBsZXQgc2hpcHNPbkJvYXJkID0gMDsgXG5cbiAgICBjb25zdCByZWNlaXZlQXR0YWNrID0gKFBsYWNlZFNoaXBzKSA9PiB7XG4gICAgICAgIGxldCB4Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIGxldCB5Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIGxldCBwbGF5ZXJPbmVDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7eENvb3JkUmFuZG9tfVwiXVtkYXRhLXk9XCIke3lDb29yZFJhbmRvbX1cIl1gKTtcbiAgICAgICAgbGV0IHNoaXBOdW0gPSAwOyBcbiAgICAgICAgY29uc29sZS5sb2coXCJDb21wdXRlciBjaG9vc2U6IFwiLCBwbGF5ZXJPbmVDZWxsKTsgLy8gVGVzdGluZ1xuICAgICAgICBjb25zb2xlLmxvZyhcIlxcblwiKTsgLy8gVGVzdGluZ1xuXG4gICAgICAgIC8vIFRlc3QgaWYgdGhlIGNvbXB1dGVyIGhhcyBhbHJlYWR5IGNob29zZW4gdGhlc2UgY29vcmRpbmF0ZXMuIFxuICAgICAgICB3aGlsZShwbGF5ZXJPbmVDZWxsLmNsYXNzTGlzdC5jb250YWlucygncGxheWVyLW9uZS1zaGlwLWhpdCcpIHx8IHBsYXllck9uZUNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb21wdXRlci1oaXQtbWlzc2VkJykpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHhDb29yZFJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICAgIHlDb29yZFJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTsgXG5cbiAgICAgICAgICAgIHBsYXllck9uZUNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHt4Q29vcmRSYW5kb219XCJdW2RhdGEteT1cIiR7eUNvb3JkUmFuZG9tfVwiXWApOyBcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRlc3QgaWYgdGhlIGNvb3JkaW5hdGVzIGNvbnRhaW4gYW4gZW5lbXkgc2hpcC4gXG4gICAgICAgIGlmIChwbGF5ZXJPbmVDZWxsLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSlcbiAgICAgICAge1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIFBsYWNlZFNoaXBzKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNoaXBOdW0rKzsgXG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjb29yZCBpbiBQbGFjZWRTaGlwc1trZXldLmNvb3JkaW5hdGVzKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFBsYWNlZFNoaXBzW2tleV0uY29vcmRpbmF0ZXNbY29vcmRdWzBdID09PSB4Q29vcmRSYW5kb20gJiYgUGxhY2VkU2hpcHNba2V5XS5jb29yZGluYXRlc1tjb29yZF1bMV0gPT09IHlDb29yZFJhbmRvbSlcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RoZSBjb21wdXRlciBnb3QgYSBoaXQ6ICcsIFt4Q29vcmRSYW5kb20sIHlDb29yZFJhbmRvbV0pOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtrZXl9IHdhcyBoaXQuYCk7IC8vIFRlc3RpbmcgXG4gICAgICAgICAgICAgICAgICAgICAgICBQbGFjZWRTaGlwc1trZXldLmhpdHMgKz0gMTsgXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2hpcFN1bmsgPSBQbGFjZWRTaGlwc1trZXldLmhpdChQbGFjZWRTaGlwc1trZXldLmhpdHMsIFBsYWNlZFNoaXBzW2tleV0ubGVuZ3RoKTsgLy8gYWRkcyBhIGhpdCB0byB0aGUgc2hpcC4gXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIERpc3BsYXlDb21wdXRlckdhbWVib2FyZEV2ZW50cygxLCBmYWxzZSwgc2hpcE51bSk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgUGxhY2VkU2hpcHNba2V5XS5pc1N1bmsoc2hpcFN1bmssIHNoaXBOdW0pOyAvLyBDaGVja3MgaWYgdGhlIHNoaXAgaGFzIHN1bmsuXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHRydWUgY2hhbmdlIHRoZSBzdW5rIHN0YXR1cyB0byB0cnVlLiAgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hpcFN1bmspXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUGxhY2VkU2hpcHNba2V5XS5zdW5rID0gc2hpcFN1bms7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTdW5rIHN0YXR1cyBzaG91bGQgYmUgdHJ1ZTogJywgUGxhY2VkU2hpcHNba2V5XSk7IC8vIFRlc3RpbmcgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4cGxvc2lvbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhwbG9zaW9uSW1nLnNyYyA9IGV4cGxvc2lvbkltYWdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyT25lQ2VsbC5hcHBlbmRDaGlsZChleHBsb3Npb25JbWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyT25lQ2VsbC5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItb25lLXNoaXAtaGl0Jyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBjb21wdXRlckhpdE1pc3NlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29tcHV0ZXJIaXRNaXNzZWQudGV4dENvbnRlbnQgPSBcIk1cIjsgXG4gICAgICAgICAgICBwbGF5ZXJPbmVDZWxsLmNsYXNzTGlzdC5hZGQoJ2NvbXB1dGVyLWhpdC1taXNzZWQnKTtcbiAgICAgICAgICAgIHBsYXllck9uZUNlbGwuYXBwZW5kQ2hpbGQoY29tcHV0ZXJIaXRNaXNzZWQpOyBcbiAgICAgICAgICAgIERpc3BsYXlDb21wdXRlckdhbWVib2FyZEV2ZW50cygwKTsgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge2dhbWVib2FyZCwgc2hpcHNPbkJvYXJkLCByZWNlaXZlQXR0YWNrLCBTaGlwfTtcbn0iLCIvLyBOZXdHYW1lU2VsZWN0ZWQoKTogVG9nZ2xlcyB0cnVlIGlmIHRoZSBuZXcgYnV0dG9uIHdhcyBjbGlja2VkLiBcbmV4cG9ydCBjb25zdCBOZXdHYW1lU2VsZWN0ZWQgPSAoKCkgPT4ge1xuICAgIGxldCBuZXdHYW1lU2VsZWN0ZWQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHtuZXdHYW1lU2VsZWN0ZWR9O1xufSkoKTsiLCJpbXBvcnQgeyBEaXNwbGF5Q29tcHV0ZXJHYW1lYm9hcmRFdmVudHMgfSBmcm9tIFwiLi4vbW9kdWxlcy9Eb21Db250ZW50XCI7XG5cbi8qKiBTaGlwICovXG4vLyBTaGlwKCk6IFNoaXAgZmFjdG9yeSBmdW5jdGlvbi4gXG5leHBvcnQgY29uc3QgU2hpcCA9ICgpID0+IHtcbiAgICBsZXQgZGVmYXVsdExlbmd0aHMgPSBbMCwgMCwgMCwgMCwgMSwgMSwgMSwgMiwgMiwgM107IFxuICAgIGxldCBsZW5ndGggPSBudWxsO1xuICAgIGxldCBoaXRzID0gMDtcbiAgICBsZXQgc3VuayA9IGZhbHNlOyBcblxuICAgIC8vIGhpdCgpOiBXaWxsIGdhdGhlciB0aGUgYW1vdW50IG9mIGhpdHMgdGhlIHNoaXAgd2lsbCBnZXQuXG4gICAgY29uc3QgaGl0ID0gKGlzSGl0LCBzaGlwTGVuZ3RoKSA9PiB7XG5cbiAgICAgICAgaWYgKGlzSGl0ID09PSBzaGlwTGVuZ3RoKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTsgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDsgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpc1N1bmsoKTogV2lsbCBkZXRlcm1pbmUgaWYgdGhlIHNoaXAgaGFzIHN1bmsuIFxuICAgIGNvbnN0IGlzU3VuayA9IChzaGlwU3Vuaywgc2hpcE51bSkgPT4ge1xuICAgICAgICBEaXNwbGF5Q29tcHV0ZXJHYW1lYm9hcmRFdmVudHMobnVsbCwgc2hpcFN1bmssIHNoaXBOdW0pOyBcbiAgICAgICAgLy8gTm90ZTogWW91IG5lZWQgdG8gdXNlIHRoZSB0ZXN0aW5nIGZpbGUgKHNoaXAudGVzdC5qcykgXG4gICAgICAgIC8vIHRvIHRlc3QgdGhpcyBmdW5jdGlvbi4gXG4gICAgfVxuXG4gICAgcmV0dXJuIHtoaXQsIGlzU3VuaywgZGVmYXVsdExlbmd0aHMsIGxlbmd0aCwgaGl0cywgc3Vua307XG59XG4iLCIvLyBTaGlwRGF0YSBMaXRlcmFsIE9iamVjdDogV2lsbCBjb250YWluIHNoaXAgZGF0YSB0byBjb250cm9sIHRoZSBmbG93IG9mIHNoaXBzIG9uIHRoZSBnYW1lYm9hcmQuIFxuZXhwb3J0IGNvbnN0IFNoaXBEYXRhID0ge1xuICAgIGxlbmd0aEluZGV4OiAwLFxuICAgIHNoaXBzUGxhY2VkOiAwLFxuICAgIHNoaXBMZW5ndGg6IDAsXG59IiwiLy8gUGxhY2VkU2hpcHMgTGl0ZXJhbCBPYmplY3Q6IERhdGEgZm9yIGFsbCBzaGlwcyBwbGFjZWQgb24gdGhlIGdhbWVib2FyZCBieSBwbGF5ZXIgb25lLiBcbmV4cG9ydCBsZXQgUGxhY2VkU2hpcHMgPSB7XG59XG5cbi8vIENvbXB1dGVyUGxhY2VkU2hpcHMgTGl0ZXJhbCBPYmplY3Q6IERhdGEgZm9yIGFsbCBzaGlwcyBwbGFjZWQgb24gdGhlIGdhbWVib2FyZCBieSB0aGUgY29tcHV0ZXIuXG5leHBvcnQgbGV0IENvbXB1dGVyUGxhY2VkU2hpcHMgPSB7XG59XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogfFRlc3RpbmcgQXJlYSBJZGVudGlmaWVycyBhbmQgQ29tcG9uZW50c3wgKi9cbiNjb250ZW50ID4gZGl2ID4gYnV0dG9ue1xuICAgIHBhZGRpbmc6IDEwcHggNXB4IDEwcHggNXB4O1xuICAgIGZvbnQtZmFtaWx5Om1vbm9zcGFjZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Y29yYWw7IFxuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNjb250ZW50ID4gZGl2ID4gYnV0dG9uOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGJsdWU7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyogfE1haW4gQ29udGVudCBTZWN0aW9ufCAqL1xuI2NvbnRlbnR7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAgIHBhZGRpbmc6IDEwcHg7IFxufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIHxHYW1lYm9hcmQgQ29udGFpbmVyfCAqL1xuLmdhbWVib2FyZC1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEwcHg7XG5cbiAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgd2lkdGg6IDEwMDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuLyogUGxheWVyIE9uZSBCb2FyZCAqL1xuLnBsYXllci1vbmUtYm9hcmR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XG4gICAgcGFkZGluZzogMTBweDtcbn1cbi5wbGF5ZXItb25lLWJvYXJkID4gZGl2eyAvKiByb3dzICovXG4gICAgZGlzcGxheTogZmxleDtcblxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xuICAgIC8qIHBhZGRpbmc6IDVweDsgKi9cbn1cbi5wbGF5ZXItb25lLWJvYXJkID4gZGl2ID4gZGl2eyAvKiBjZWxscyAqL1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Y29yYWw7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbn1cbi5wbGF5ZXItb25lLWJvYXJkID4gZGl2ID4gZGl2ID4gZGl2eyAvKiBNaXNzZWQgSGl0IENvbnRhaW5lciAqL1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xuICAgIGhlaWdodDogMjBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6ICNkOTQ2ZWY7XG59XG5cbi8qIENvbXB1dGVyIEdhbWVib2FyZCAqL1xuLmNvbXB1dGVyLWdhbWVib2FyZHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICBib3JkZXI6IDFweCBzb2xpZCBwdXJwbGU7XG4gICAgcGFkZGluZzogMTBweDtcbn1cbi5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXZ7IC8qIFJvd3MgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgLyogcGFkZGluZzogMTBweDsgKi9cbn1cbi5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXYgPiBkaXZ7IC8qIGNlbGxzICovXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmVlbjtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgd2lkdGg6IDMwcHg7IFxuICAgIGhlaWdodDogMzBweDtcbn1cblxuLyogaG92ZXItdGVzdCAqL1xuLmhvdmVyLXRlc3R7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2sgIWltcG9ydGFudDtcbn1cblxuLyogc2hpcC1wbGFjZWQgLSBEaXNwbGF5cyBlYWNoIHNoaXAgcGxhY2VkIG9uIHRoZSBib2FyZC4gKi9cbi5zaGlwLXBsYWNlZHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjayAhaW1wb3J0YW50O1xufVxuXG4vKiBjb21wdXRlci1zaGlwLXBsYWNlZCAtIERpc3BsYXlzIGVhY2ggc2hpcCB0aGF0IHRoZSBjb21wdXRlciBwbGFjZXMgb24gdGhlaXIgYm9hcmQuICovXG4uY29tcHV0ZXItc2hpcC1wbGFjZWR7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmVlbiAhaW1wb3J0YW50O1xufVxuXG4vKiBjb21wdXRlci1zaGlwLWhpdCAtIEluZGljYXRlcyB0aGF0IGNvbXB1dGVyIHNoaXAgaGFzIGJlZW4gaGl0LiAqL1xuLmNvbXB1dGVyLXNoaXAtaGl0ID4gaW1nW3NyY117XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlOyBcbn1cblxuLyogcGxheWVyLW9uZS1zaGlwLWhpdCAtIEluZGljYXRlcyB0aGF0IHRoZSBwbGF5ZXIgb25lIHNoaXAgaGFzIGJlZW4gaGl0LiAqL1xuLnBsYXllci1vbmUtc2hpcC1oaXQgPiBpbWdbc3JjXXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyogfEludGVmYWNlIFNlY3Rpb258ICovXG4uaW50ZXJmYWNle1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBcbiAgICBib3JkZXI6IDFweCBzb2xpZCBvcmFuZ2U7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLyogY3VycmVudC1jb29yZGluYXRlIC0gVGhlIGN1cnJlbnQgY29vcmRpbmF0ZSBjaG9vc2VuIGJ5IHRoZSB1c2VyLiAqL1xuLmN1cnJlbnQtY29vcmRpbmF0ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Y29yYWw7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyogfEdhbWVib2FyZCBFdmVudHMgU2VjdGlvbnwgKi9cbi8qIHBsYXllci1nYW1lYm9hcmQtZXZlbnRzIC0gQWxsIHRoZSBwbGF5ZXIgZ2FtZWJvYXJkIGV2ZW50cy4gKi9cbiNwbGF5ZXItZ2FtZWJvYXJkLWV2ZW50c3tcbiAgICBib3JkZXI6IDFweCBzb2xpZCBvcmFuZ2U7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuI3BsYXllci1nYW1lYm9hcmQtZXZlbnRzID4gcHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7IFxufVxuXG4vKiBjb21wdXRlci1nYW1lYm9hcmQtZXZlbnRzIC0gQWxsIHRoZSBjb21wdXRlciBnYW1lYm9hcmQgZXZlbnRzLiAqL1xuI2NvbXB1dGVyLWdhbWVib2FyZC1ldmVudHN7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRibHVlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxuICAgIGZvbnQtc2l6ZTogMjBweDsgXG59XG4jY29tcHV0ZXItZ2FtZWJvYXJkLWV2ZW50cyA+IHB7XG4gICAgZGlzcGxheTogaW5saW5lOyAgXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDhDQUE4QztBQUM5QztJQUNJLDBCQUEwQjtJQUMxQixxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1QixlQUFlO0FBQ25CO0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0IsMkJBQTJCO0FBQy9COztBQUVBLDRLQUE0SztBQUM1Syw0S0FBNEs7QUFDNUssMkJBQTJCO0FBQzNCO0lBQ0kscUJBQXFCO0lBQ3JCLGFBQWE7QUFDakI7O0FBRUEsNEtBQTRLO0FBQzVLLDRLQUE0SztBQUM1SywwQkFBMEI7QUFDMUI7SUFDSSxhQUFhO0lBQ2IsU0FBUzs7SUFFVCxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGFBQWE7SUFDYixjQUFjO0FBQ2xCOztBQUVBLHFCQUFxQjtBQUNyQjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7O0lBRXRCLHVCQUF1QjtJQUN2QixhQUFhO0FBQ2pCO0FBQ0EseUJBQXlCLFNBQVM7SUFDOUIsYUFBYTs7SUFFYiw2QkFBNkI7SUFDN0Isa0JBQWtCO0FBQ3RCO0FBQ0EsK0JBQStCLFVBQVU7SUFDckMsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7O0lBRW5CLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQSxxQ0FBcUMseUJBQXlCO0lBQzFELDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUEsdUJBQXVCO0FBQ3ZCO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjs7SUFFdEIsd0JBQXdCO0lBQ3hCLGFBQWE7QUFDakI7QUFDQSwyQkFBMkIsU0FBUztJQUNoQyxhQUFhOztJQUViLG1CQUFtQjtBQUN2QjtBQUNBLGlDQUFpQyxVQUFVO0lBQ3ZDLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1COztJQUVuQiw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBLGVBQWU7QUFDZjtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQSwwREFBMEQ7QUFDMUQ7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUEsdUZBQXVGO0FBQ3ZGO0lBQ0ksdUNBQXVDO0FBQzNDOztBQUVBLG1FQUFtRTtBQUNuRTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBLDJFQUEyRTtBQUMzRTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBLDRLQUE0SztBQUM1Syw0S0FBNEs7QUFDNUssdUJBQXVCO0FBQ3ZCO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjs7SUFFdEIsd0JBQXdCO0lBQ3hCLGFBQWE7QUFDakI7O0FBRUEscUVBQXFFO0FBQ3JFO0lBQ0ksNEJBQTRCO0lBQzVCLDRCQUE0QjtBQUNoQzs7QUFFQSw0S0FBNEs7QUFDNUssNEtBQTRLO0FBQzVLLCtCQUErQjtBQUMvQiwrREFBK0Q7QUFDL0Q7SUFDSSx3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQSxtRUFBbUU7QUFDbkU7SUFDSSwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiB8VGVzdGluZyBBcmVhIElkZW50aWZpZXJzIGFuZCBDb21wb25lbnRzfCAqL1xcbiNjb250ZW50ID4gZGl2ID4gYnV0dG9ue1xcbiAgICBwYWRkaW5nOiAxMHB4IDVweCAxMHB4IDVweDtcXG4gICAgZm9udC1mYW1pbHk6bW9ub3NwYWNlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGNvcmFsOyBcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jY29udGVudCA+IGRpdiA+IGJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGJsdWU7XFxufVxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKiB8TWFpbiBDb250ZW50IFNlY3Rpb258ICovXFxuI2NvbnRlbnR7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG4gICAgcGFkZGluZzogMTBweDsgXFxufVxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKiB8R2FtZWJvYXJkIENvbnRhaW5lcnwgKi9cXG4uZ2FtZWJvYXJkLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcblxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB3aWR0aDogMTAwMHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLyogUGxheWVyIE9uZSBCb2FyZCAqL1xcbi5wbGF5ZXItb25lLWJvYXJke1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuLnBsYXllci1vbmUtYm9hcmQgPiBkaXZ7IC8qIHJvd3MgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG5cXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICovXFxuICAgIC8qIHBhZGRpbmc6IDVweDsgKi9cXG59XFxuLnBsYXllci1vbmUtYm9hcmQgPiBkaXYgPiBkaXZ7IC8qIGNlbGxzICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGNvcmFsO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxufVxcbi5wbGF5ZXItb25lLWJvYXJkID4gZGl2ID4gZGl2ID4gZGl2eyAvKiBNaXNzZWQgSGl0IENvbnRhaW5lciAqL1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgKi9cXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGNvbG9yOiAjZDk0NmVmO1xcbn1cXG5cXG4vKiBDb21wdXRlciBHYW1lYm9hcmQgKi9cXG4uY29tcHV0ZXItZ2FtZWJvYXJke1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBwdXJwbGU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcbi5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXZ7IC8qIFJvd3MgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG5cXG4gICAgLyogcGFkZGluZzogMTBweDsgKi9cXG59XFxuLmNvbXB1dGVyLWdhbWVib2FyZCA+IGRpdiA+IGRpdnsgLyogY2VsbHMgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JlZW47XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgd2lkdGg6IDMwcHg7IFxcbiAgICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbi8qIGhvdmVyLXRlc3QgKi9cXG4uaG92ZXItdGVzdHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2sgIWltcG9ydGFudDtcXG59XFxuXFxuLyogc2hpcC1wbGFjZWQgLSBEaXNwbGF5cyBlYWNoIHNoaXAgcGxhY2VkIG9uIHRoZSBib2FyZC4gKi9cXG4uc2hpcC1wbGFjZWR7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIGNvbXB1dGVyLXNoaXAtcGxhY2VkIC0gRGlzcGxheXMgZWFjaCBzaGlwIHRoYXQgdGhlIGNvbXB1dGVyIHBsYWNlcyBvbiB0aGVpciBib2FyZC4gKi9cXG4uY29tcHV0ZXItc2hpcC1wbGFjZWR7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JlZW4gIWltcG9ydGFudDtcXG59XFxuXFxuLyogY29tcHV0ZXItc2hpcC1oaXQgLSBJbmRpY2F0ZXMgdGhhdCBjb21wdXRlciBzaGlwIGhhcyBiZWVuIGhpdC4gKi9cXG4uY29tcHV0ZXItc2hpcC1oaXQgPiBpbWdbc3JjXXtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTsgXFxufVxcblxcbi8qIHBsYXllci1vbmUtc2hpcC1oaXQgLSBJbmRpY2F0ZXMgdGhhdCB0aGUgcGxheWVyIG9uZSBzaGlwIGhhcyBiZWVuIGhpdC4gKi9cXG4ucGxheWVyLW9uZS1zaGlwLWhpdCA+IGltZ1tzcmNde1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyogfEludGVmYWNlIFNlY3Rpb258ICovXFxuLmludGVyZmFjZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIG9yYW5nZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLyogY3VycmVudC1jb29yZGluYXRlIC0gVGhlIGN1cnJlbnQgY29vcmRpbmF0ZSBjaG9vc2VuIGJ5IHRoZSB1c2VyLiAqL1xcbi5jdXJyZW50LWNvb3JkaW5hdGV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Y29yYWw7XFxufVxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKiB8R2FtZWJvYXJkIEV2ZW50cyBTZWN0aW9ufCAqL1xcbi8qIHBsYXllci1nYW1lYm9hcmQtZXZlbnRzIC0gQWxsIHRoZSBwbGF5ZXIgZ2FtZWJvYXJkIGV2ZW50cy4gKi9cXG4jcGxheWVyLWdhbWVib2FyZC1ldmVudHN7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIG9yYW5nZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG4jcGxheWVyLWdhbWVib2FyZC1ldmVudHMgPiBwe1xcbiAgICBkaXNwbGF5OiBpbmxpbmU7IFxcbn1cXG5cXG4vKiBjb21wdXRlci1nYW1lYm9hcmQtZXZlbnRzIC0gQWxsIHRoZSBjb21wdXRlciBnYW1lYm9hcmQgZXZlbnRzLiAqL1xcbiNjb21wdXRlci1nYW1lYm9hcmQtZXZlbnRze1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGJsdWU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXFxuICAgIGZvbnQtc2l6ZTogMjBweDsgXFxufVxcbiNjb21wdXRlci1nYW1lYm9hcmQtZXZlbnRzID4gcHtcXG4gICAgZGlzcGxheTogaW5saW5lOyAgXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi91dGlscy9TaGlwXCI7XG5cbmltcG9ydCB7IEluaXRpYWxpemVET00gfSBmcm9tIFwiLi9tb2R1bGVzL0RvbUNvbnRlbnRcIjtcblxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuaW1wb3J0IHRlc3RTb3VuZCBmcm9tICcuL3NvdW5kcy9taXhraXQtcmV0cm8tZ2FtZS1ub3RpZmljYXRpb24tMjEyLndhdic7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIE5vdGVzOlxuLy8gMSkgSSBvbmx5IGhhdmUgdG8gdGVzdCB0aGUgc2hpcCBvYmplY3RzIHB1YmxpYyBpbnRlcmZhY2UuIE9ubHkgJ21ldGhvZHMgb3IgcHJvcGVydGllcycgdGhhdCBhcmUgdXNlZCBvdXRzaWRlIG9mIHlvdXIgc2hpcCBvYmplY3QgXG4vLyBuZWVkIHVuaXQgdGVzdHMuIFxuLy8gXG4vLyAyKSBOb3RlIHRoYXQgd2UgaGF2ZSBub3QgeWV0IGNyZWF0ZWQgYW55IFVzZXIgSW50ZXJmYWNlLiBXZSBzaG91bGQga25vd1xuLy8gb3VyIGNvZGUgaXMgY29taW5nIHRvZ2V0aGVyIGJ5IHJ1bm5pbmcgdGhlIHRlc3RzLiBZb3Ugc2hvdWxkbid0IGJlXG4vLyByZWx5aW5nIG9uICdjb25zb2xlLmxvZycgb3IgJ0RPTSBtZXRob2RzJyB0byBtYWtlIHN1cmUgeW91ciBjb2RlIGlzXG4vLyBkb2luZyB3aGF0IHlvdSBleHBlY3QgaXQgdG8uXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gfFRlc3RpbmcgQXJlYXxcbmNvbnNvbGUubG9nKCd8VGVzdGluZyBBcmVhfCcpO1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5jb25zb2xlLmxvZyhjb250ZW50KTsgLy8gVGVzdGluZyBcblxuY29uc3QgYnV0dG9uT25lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBidXR0b25PbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTsgXG5idXR0b25PbmUudGV4dENvbnRlbnQgPSAnQ2xpY2sgTWUhJztcblxuY29uc3QgbmV3U291bmQgPSBuZXcgQXVkaW8odGVzdFNvdW5kKTtcblxuLy8gYnV0dG9uT25lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKCdZb3UgY2xpY2tlZCB0aGUgYnV0dG9uIScpOyAvLyBUZXN0aW5nXG4vLyAgICAgbmV3U291bmQucGxheSgpO1xuLy8gfSk7IFxuXG4vLyBidXR0b25PbmVDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uT25lKTtcbi8vIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnV0dG9uT25lQ29udGFpbmVyKTtcbi8vIGNvbnNvbGUubG9nKCdcXG4nKTsgLy8gVGVzdGluZyBcblxuLyoqIHxTcHJlYWQgU3ludGF4KC4uLil8XG4gKiBUaGUgc3ByZWFkKC4uLikgc3ludGF4IGFsbG93IGFuIGl0ZXJhYmxlLCBzdWNoIGFzIGFuIGFycmF5IG9yIHN0cmluZywgdG8gYmUgZXhwYW5kZWQgaW4gcGxhY2VzIFxuICogd2hlcmUgemVybyBvciBtb3JlIGFyZ3VtZW50cyAoZm9yIGZ1bmN0aW9uIGNhbGxzKSBvciBlbGVtZW50cyAoZm9yIGFycmF5IGxpdGVyYWxzKSBhcmUgZXhwZWN0ZWQuXG4gKiBJbiBhbiBvYmplY3QgbGl0ZXJhbCwgdGhlIHNwcmVhZCBzeW50YXggZW51bWVyYXRlcyB0aGUgcHJvcGVydGllcyBvZiBhbiBvYmplY3QgYW5kIGFkZHMgdGhlIGtleS12YWx1ZSBwYWlyc1xuICogdG8gdGhlIG9iamVjdCBiZWluZyBjcmVhdGVkLiBcbiAqIFxuICogU3ByZWFkIHN5bnRheCBsb29rcyBleGFjdGx5IGxpa2UgcmVzdCBzeW50YXguIEluIGEgd2F5LCBzcHJlYWQgc3ludGF4IGlzIHRoZSBvcHBvc2l0ZSBvZiByZXN0IHN5bnRheC5cbiAqIFNwcmVhZCBzeW50YXggXCJleHBhbmRzXCIgYW4gYXJyYXkgaW50byBpdHMgZWxlbWVudHMsIHdoaWxlIHJlc3Qgc3ludGF4IGNvbGxlY3RzIG11bHRpcGxlIGVsZW1lbnRzIGFuZFxuICogXCJjb25kZW5zZXNcIiB0aGVtIGludG8gYSBzaW5nbGUgZWxlbWVudC4gXG4gKiBcbiAqIE5vdGU6IFVzaW5nIHRoZSBcIm1hcCBhcnJheSBtZXRob2RcIiB3aWxsIGNyZWF0ZSBhIG5ldyBhcnJheSBmcm9tIHRoZSBjYWxsaW5nIFsuLi5hcnJheSg4KV0gdGhhdCBpc1xuICogc3ByZWFkaW5nIDggZWxlbWVudHMgaW50byBpdC4gRWFjaCBlbGVtZW50IHdpbGwgYmUgYW4gQXJyYXkgb2YgOCBlbGVtZW50cyB0aGF0IGlzIGZpbGxlZCB3aXRoIChcIlwiKTtcbiAqL1xuY29uc3QgYXJyVGVzdCA9IFsuLi5BcnJheSg4KV0ubWFwKCgpID0+IEFycmF5KDgpLmZpbGwoXCJcIikpOyBcbmNvbnNvbGUubG9nKCdUaGUgQXJyYXk6ICcsIGFyclRlc3QpOyAvLyBUZXN0aW5nXG5jb25zb2xlLmxvZygnXFxuJyk7IC8vIFRlc3Rpbmdcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbkluaXRpYWxpemVET00oKTsiXSwibmFtZXMiOlsiR2FtZWJvYXJkIiwiTmV3R2FtZVNlbGVjdGVkIiwiU2hpcERhdGEiLCJBeGlzQ2hhbmdlIiwiQWN0aXZhdGVHYW1lIiwiRGlzYWJsZVBsYWNlbWVudCIsIlBsYWNlZFNoaXBzIiwiQ29tcHV0ZXJQbGFjZWRTaGlwcyIsIndhdGVyRXhwbG9zaW9uIiwiZXhwbG9zaW9uSW1hZ2UiLCJJbml0aWFsaXplRE9NIiwiY29uc29sZSIsImxvZyIsIkdhbWVib2FyZERPTSIsIkludGVyZmFjZURPTSIsIlBsYXllck9uZURPTSIsIkNvbXB1dGVyRE9NIiwiRGlzcGxheVBsYXllck9uZUdhbWVib2FyZEV2ZW50cyIsIkRpc3BsYXlDb21wdXRlckdhbWVib2FyZEV2ZW50cyIsImJvYXJkU3RhdHVzIiwiY29vcmRzIiwic3Vua1N0YXR1cyIsInNoaXBTdW5rTXNzZyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb25jYXQiLCJkYXRhc2V0IiwieCIsInkiLCJhcHBlbmRDaGlsZCIsInNoaXBOdW0iLCJOdW1iZXJPZlNoaXBzUGxhY2VkIiwibnVtYmVyT2ZTaGlwc1BsYWNlZCIsInF1ZXJ5U2VsZWN0b3IiLCJsZW5ndGhJbmRleCIsInNoaXBzUGxhY2VkIiwiY29udGVudCIsImdhbWVib2FyZENvbnRhaW5lciIsImNsYXNzTGlzdCIsImFkZCIsInBsYXllck9uZUJvYXJkIiwicGxheWVyT25lIiwiaSIsImdhbWVib2FyZCIsImxlbmd0aCIsInJvdyIsImoiLCJjZWxsIiwiY29tcHV0ZXIiLCJjb21wdXRlckJvYXJkIiwiY29tcHV0ZXJSb3ciLCJjb21wdXRlckNlbGwiLCJQbGFjZVNoaXBzIiwiZSIsImNlbGxzIiwicXVlcnlTZWxlY3RvckFsbCIsInhDb29yZCIsInlDb29yZCIsImF4aXNDaGFuZ2UiLCJheGlzV2FzQ2hhbmdlZCIsImJvYXJkIiwic2hpcCIsIlNoaXAiLCJzaGlwTGVuZ3RoIiwiZGVmYXVsdExlbmd0aHMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiRW50ZXJYIiwiTGVhdmVYIiwiRW50ZXJZIiwiTGVhdmVZIiwiUGxhY2VPblgiLCJQbGFjZU9uWSIsInJlbW92ZSIsImFjdGl2YXRlR2FtZSIsIkdhbWVJbml0aWF0ZWQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29tcHV0ZXJDZWxscyIsInRvdGFsQ29tcHV0ZXJTaGlwc1N1bmsiLCJ0b3RhbFBsYXllclNoaXBzU3VuayIsImtleSIsInN1bmsiLCJhY3RpdmF0ZVBsYXllck9uZVR1cm4iLCJuZXdHYW1lU2VsZWN0ZWQiLCJmb3JFYWNoIiwiUGxheWVyT25lVHVybiIsIkNvbXB1dGVyVHVybiIsInRhcmdldCIsImV4cGxvc2lvbiIsIkF1ZGlvIiwiY29tcHV0ZXJTaGlwSW5kZXgiLCJzaGlwTnVtYmVyU3VuayIsInNoaXBTdW5rIiwidW5kZWZpbmVkIiwiY29udGFpbnMiLCJjb29yZCIsImNvb3JkaW5hdGVzIiwicGFyc2VJbnQiLCJoaXRzIiwiZXhwbG9zaW9uSW1nIiwic3JjIiwicGxheSIsImhhc0F0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInJlY2VpdmVBdHRhY2siLCJDb21wdXRlclBsYWNlU2hpcHMiLCJjb21wdXRlclJvd3MiLCJjb21wdXRlclNoaXBzIiwiaW5kZXgiLCJjb21wdXRlclNoaXBQbGFjZWQiLCJ4Q29vcmRSYW5kb20iLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ5Q29vcmRSYW5kb20iLCJheGlzUmFuZG9tIiwieExlbmd0aE9uZSIsInhMZW5ndGhUd28iLCJ4TGVuZ3RoVGhyZWUiLCJ5TGVuZ3RoT25lIiwieUxlbmd0aFR3byIsInlMZW5ndGhUaHJlZSIsIl9sb29wIiwiY29vcmRpbmF0ZUluZGV4IiwiY29vcmRpbmF0ZXNOb3RPdmVybGFwcGluZyIsImNvbXB1dGVyQ2VsbE9uZSIsIl9sb29wMiIsImNvbXB1dGVyQ2VsbFR3byIsIl9sb29wMyIsImNvbXB1dGVyQ2VsbFRocmVlIiwicGxheWVySW50ZXJmYWNlIiwibmV3R2FtZSIsImNvb3JkaW5hdGVDb250YWluZXIiLCJOZXdHYW1lIiwiQ2hhbmdlVG9YQXhpcyIsIkNoYW5nZVRvWUF4aXMiLCJkaXNhYmxlUGxhY2VtZW50IiwiT2JqZWN0IiwiYXNzaWduIiwicmVtb3ZlQXR0cmlidXRlIiwicmVwbGFjZUNoaWxkcmVuIiwibmV4dENlbGxPbmUiLCJuZXh0Q2VsbFR3byIsIm5leHRDZWxsVGhyZWUiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJBcnJheSIsIm1hcCIsImZpbGwiLCJzaGlwc09uQm9hcmQiLCJwbGF5ZXJPbmVDZWxsIiwiaGl0IiwiaXNTdW5rIiwiY29tcHV0ZXJIaXRNaXNzZWQiLCJpc0hpdCIsInRlc3RTb3VuZCIsImJ1dHRvbk9uZUNvbnRhaW5lciIsImJ1dHRvbk9uZSIsIm5ld1NvdW5kIiwiYXJyVGVzdCJdLCJzb3VyY2VSb290IjoiIn0=