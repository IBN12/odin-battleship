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
    numberOfShipsPlaced.textContent = "Ships: ".concat(_utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.shipsPlaced);
  }
  if (_utils_ActivateGame__WEBPACK_IMPORTED_MODULE_4__.ActivateGame.activateGame) {
    numberOfShipsPlaced.textContent = "Ships: ".concat(_utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.shipsPlaced);
  }
}

// GameboardDOM(): The gameboard DOM for the entire application. 
function GameboardDOM() {
  var content = document.querySelector('#content');
  var gameboardContainer = document.createElement('div');
  gameboardContainer.classList.add('gameboard-container');
  content.appendChild(gameboardContainer);
}

// PlayerOneDOM(): Player one gameboard.
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

// ComputerDOM(): Computer gameboard
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
  var commenceAttack = document.querySelector('.interface > div:nth-child(4)');
  if (!_utils_AxisChange__WEBPACK_IMPORTED_MODULE_3__.AxisChange.axisWasChanged && _utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.lengthIndex < 10) {
    NumberOfShipsPlaced();
    var board = (0,_utils_Gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();
    var ship = board.Ship();
    _utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.shipLength = ship.defaultLengths[_utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.lengthIndex];
    ship.length = _utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.shipLength + 1;
    _utils_ShipPlacementData__WEBPACK_IMPORTED_MODULE_6__.PlacedShips["ship ".concat(_utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.lengthIndex)] = ship;
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
      xCoord.removeEventListener('click', ChangeToXAxis);
      yCoord.removeEventListener('click', ChangeToYAxis);
      _utils_ActivateGame__WEBPACK_IMPORTED_MODULE_4__.ActivateGame.activateGame = true;
      commenceAttack.classList.add('commence-attack');
      commenceAttack.textContent = "Commence Attack!";
      GameInitiated();
    } else {
    for (var _i = 0; _i < cells.length; _i++) {
      if (_utils_AxisChange__WEBPACK_IMPORTED_MODULE_3__.AxisChange.axisChange === null) {
        cells[_i].removeEventListener('mouseenter', EnterY);
        cells[_i].removeEventListener('mouseleave', LeaveY);
        cells[_i].addEventListener('mouseenter', EnterX);
        cells[_i].addEventListener('mouseleave', LeaveX);
      } else if (_utils_AxisChange__WEBPACK_IMPORTED_MODULE_3__.AxisChange.axisChange === 1) {
        cells[_i].removeEventListener('click', PlaceOnY);
        cells[_i].removeEventListener('mouseenter', EnterY);
        cells[_i].removeEventListener('mouseleave', LeaveY);
        cells[_i].addEventListener('mouseenter', EnterX);
        cells[_i].addEventListener('mouseleave', LeaveX);
      } else if (_utils_AxisChange__WEBPACK_IMPORTED_MODULE_3__.AxisChange.axisChange === 2) {
        cells[_i].removeEventListener('click', PlaceOnX);
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
  NumberOfShipsPlaced();
  PlayerOneWins();
  ComputerWins();
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
    ComputerTurn();
  }
}

// PlayerOneWins(): All computer ships sunk = Player one wins.
function PlayerOneWins() {
  var computerCells = document.querySelectorAll('.computer-gameboard > div > div');
  var totalComputerShipsSunk = 0;
  for (var key in _utils_ShipPlacementData__WEBPACK_IMPORTED_MODULE_6__.ComputerPlacedShips) {
    if (_utils_ShipPlacementData__WEBPACK_IMPORTED_MODULE_6__.ComputerPlacedShips[key].sunk === true) {
      totalComputerShipsSunk++;
    }
  }
  if (totalComputerShipsSunk === 10) {
    _utils_ActivateGame__WEBPACK_IMPORTED_MODULE_4__.ActivateGame.activateGame = false;
    _utils_ActivateGame__WEBPACK_IMPORTED_MODULE_4__.ActivateGame.activatePlayerOneTurn = true;
    _utils_NewGame__WEBPACK_IMPORTED_MODULE_1__.NewGameSelected.newGameSelected = false;
    computerCells.forEach(function (cell) {
      cell.removeEventListener('click', PlayerOneTurn);
    });
    DisplayPlayerOneGameboardEvents(2, null, false);
    DisplayComputerGameboardEvents(3, false, null);
  }
}

// ComputerWins(): All player one ships sunk = Computer wins. 
function ComputerWins() {
  var totalPlayerShipsSunk = 0;
  for (var key in _utils_ShipPlacementData__WEBPACK_IMPORTED_MODULE_6__.PlacedShips) {
    if (_utils_ShipPlacementData__WEBPACK_IMPORTED_MODULE_6__.PlacedShips[key].sunk === true) {
      totalPlayerShipsSunk++;
    }
  }
  if (totalPlayerShipsSunk === 10) {
    _utils_ActivateGame__WEBPACK_IMPORTED_MODULE_4__.ActivateGame.activateGame = false;
    _utils_ActivateGame__WEBPACK_IMPORTED_MODULE_4__.ActivateGame.activatePlayerOneTurn = true;
    _utils_NewGame__WEBPACK_IMPORTED_MODULE_1__.NewGameSelected.newGameSelected = false;
    DisplayComputerGameboardEvents(2, false, null);
    DisplayPlayerOneGameboardEvents(3, null, false);
  }
}

// PlayerOneTurn(): Player one will choose a spot on the board. 
function PlayerOneTurn(e) {
  var computerCell = document.querySelector(".computer-gameboard > div > div[data-x=\"".concat(e.target.dataset.x, "\"][data-y=\"").concat(e.target.dataset.y, "\"]"));
  var explosion = new Audio(_sounds_water_explosion_wav__WEBPACK_IMPORTED_MODULE_7__);
  var computerShipIndex = 0;
  var shipNumberSunk = 0;
  var shipSunk = false;
  if (e.target.dataset.x !== undefined && e.target.dataset.y !== undefined) {
    if (computerCell.classList.contains('computer-ship-placed')) {
      for (var key in _utils_ShipPlacementData__WEBPACK_IMPORTED_MODULE_6__.ComputerPlacedShips) {
        computerShipIndex++;
        for (var coord in _utils_ShipPlacementData__WEBPACK_IMPORTED_MODULE_6__.ComputerPlacedShips[key].coordinates) {
          if (_utils_ShipPlacementData__WEBPACK_IMPORTED_MODULE_6__.ComputerPlacedShips[key].coordinates[coord][0] === parseInt(e.target.dataset.x) && _utils_ShipPlacementData__WEBPACK_IMPORTED_MODULE_6__.ComputerPlacedShips[key].coordinates[coord][1] === parseInt(e.target.dataset.y)) {
            _utils_ShipPlacementData__WEBPACK_IMPORTED_MODULE_6__.ComputerPlacedShips[key].hits += 1;
            if (_utils_ShipPlacementData__WEBPACK_IMPORTED_MODULE_6__.ComputerPlacedShips[key].hits === _utils_ShipPlacementData__WEBPACK_IMPORTED_MODULE_6__.ComputerPlacedShips[key].length) {
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
      _utils_ActivateGame__WEBPACK_IMPORTED_MODULE_4__.ActivateGame.activatePlayerOneTurn = false;
    } else if (!computerCell.hasAttribute('style')) {
      computerCell.setAttribute('style', 'background-color:#bef264;');
      DisplayPlayerOneGameboardEvents(0, computerCell, shipSunk, null);
      _utils_ActivateGame__WEBPACK_IMPORTED_MODULE_4__.ActivateGame.activatePlayerOneTurn = false;
    } else if (computerCell.classList.contains('computer-ship-hit') || computerCell.hasAttribute('style')) {
      return;
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
  var computerRows = document.querySelectorAll('.computer-gameboard > div');
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
      while (!computerShipPlaced) {
        // Test if the coordinates already have a ship placed. 
        if (document.querySelector(".computer-gameboard > div > div[data-x=\"".concat(xCoordRandom, "\"][data-y=\"").concat(yCoordRandom, "\"]")).classList.contains('computer-ship-placed')) {
          xCoordRandom = Math.floor(Math.random() * computerRows.length);
          yCoordRandom = Math.floor(Math.random() * 10);
        }

        // Test if the new coordinates are generated off the board. 
        if (xCoordRandom + 1 >= 10 || yCoordRandom + 1 >= 10) {
          xCoordRandom = Math.floor(Math.random() * computerRows.length);
          yCoordRandom = Math.floor(Math.random() * 10);
        } else {
          computerShipPlaced = true;
        }
      }
      var computerCell = document.querySelector(".computer-gameboard > div > div[data-x=\"".concat(xCoordRandom, "\"][data-y=\"").concat(yCoordRandom, "\"]"));
      computerCell.classList.add('computer-ship-placed');
      _utils_ShipPlacementData__WEBPACK_IMPORTED_MODULE_6__.ComputerPlacedShips["ship ".concat(index)] = {
        coordinates: {
          0: [xCoordRandom, yCoordRandom]
        },
        length: ship + 1,
        hits: 0,
        sunk: false
      };
    } else if (ship === 1) {
      var _loop = function _loop() {
        var coordinates = {};
        var coordinateIndex = 0;

        // Search for the coordinates that have ships placed on them. 
        computerCells.forEach(function (cell) {
          if (cell.classList.contains('computer-ship-placed')) {
            coordinates[coordinateIndex++] = [parseInt(cell.dataset.x), parseInt(cell.dataset.y)];
          }
        });
        for (var key in coordinates) {
          var coordinatesNotOverlapping = false;
          while (!coordinatesNotOverlapping) {
            // Test if the generated coordinates are overlapping coordinates with ship placements. 
            if (coordinates[key][0] === xCoordRandom && coordinates[key][1] === yCoordRandom || coordinates[key][0] === xCoordRandom + xLengthOne && coordinates[key][1] === yCoordRandom + yLengthOne || coordinates[key][0] === xCoordRandom && coordinates[key][1] === yCoordRandom && coordinates[key][0] === xCoordRandom + xLengthOne && coordinates[key][1] === yCoordRandom + yLengthOne) {
              xCoordRandom = Math.floor(Math.random() * computerRows.length);
              yCoordRandom = Math.floor(Math.random() * 10);
            } else {
              coordinatesNotOverlapping = true;
            }

            // Test if the new coordinates are generated off the board.  
            if (xCoordRandom + 1 >= 10 || yCoordRandom + 1 >= 10) {
              xCoordRandom = Math.floor(Math.random() * computerRows.length);
              yCoordRandom = Math.floor(Math.random() * 10);
            }
          }
        }
        var computerCell = document.querySelector(".computer-gameboard > div > div[data-x=\"".concat(xCoordRandom, "\"][data-y=\"").concat(yCoordRandom, "\"]"));
        var computerCellOne = document.querySelector(".computer-gameboard > div > div[data-x=\"".concat(xCoordRandom + xLengthOne, "\"][data-y=\"").concat(yCoordRandom + yLengthOne, "\"]"));

        // Final Test:  generated coordinates off the board; coordinates overlap; leave the loop.
        if (xCoordRandom + 1 >= 10 || yCoordRandom + 1 >= 10) {
          xCoordRandom = Math.floor(Math.random() * computerRows.length);
          yCoordRandom = Math.floor(Math.random() * 10);
        } else if (computerCell.classList.contains('computer-ship-placed') || computerCellOne.classList.contains('computer-ship-placed')) {
          xCoordRandom = Math.floor(Math.random() * computerRows.length);
          yCoordRandom = Math.floor(Math.random() * 10);
        } else {
          computerShipPlaced = true;
        }
      };
      while (!computerShipPlaced) {
        _loop();
      }
      var _computerCell = document.querySelector(".computer-gameboard > div > div[data-x=\"".concat(xCoordRandom, "\"][data-y=\"").concat(yCoordRandom, "\"]"));
      _computerCell.classList.add('computer-ship-placed');
      var computerCellOne = document.querySelector(".computer-gameboard > div > div[data-x=\"".concat(xCoordRandom + xLengthOne, "\"][data-y=\"").concat(yCoordRandom + yLengthOne, "\"]"));
      computerCellOne.classList.add('computer-ship-placed');
      _utils_ShipPlacementData__WEBPACK_IMPORTED_MODULE_6__.ComputerPlacedShips["ship ".concat(index)] = {
        coordinates: {
          0: [xCoordRandom, yCoordRandom],
          1: [xCoordRandom + xLengthOne, yCoordRandom + yLengthOne]
        },
        length: ship + 1,
        hits: 0,
        sunk: false
      };
    } else if (ship === 2) {
      var _loop2 = function _loop2() {
        var coordinates = {};
        var coordinateIndex = 0;
        computerCells.forEach(function (cell) {
          if (cell.classList.contains('computer-ship-placed')) {
            coordinates[coordinateIndex++] = [parseInt(cell.dataset.x), parseInt(cell.dataset.y)];
          }
        });
        for (var key in coordinates) {
          var coordinatesNotOverlapping = false;
          while (!coordinatesNotOverlapping) {
            if (coordinates[key][0] === xCoordRandom && coordinates[key][1] === yCoordRandom || coordinates[key][0] === xCoordRandom + xLengthOne && coordinates[key][1] === yCoordRandom + yLengthOne || coordinates[key][0] === xCoordRandom + xLengthTwo && coordinates[key][1] === yCoordRandom + yLengthTwo || coordinates[key][0] === xCoordRandom && coordinates[key][1] === yCoordRandom && coordinates[key][0] === xCoordRandom + xLengthOne && coordinates[key][1] === yCoordRandom + yLengthOne && coordinates[key][0] === xCoordRandom + xLengthTwo && coordinates[key][1] === yCoordRandom + yLengthTwo) {
              xCoordRandom = Math.floor(Math.random() * computerRows.length);
              yCoordRandom = Math.floor(Math.random() * 10);
            } else {
              coordinatesNotOverlapping = true;
            }
            if (xCoordRandom + 2 >= 10 || yCoordRandom + 2 >= 10) {
              xCoordRandom = Math.floor(Math.random() * computerRows.length);
              yCoordRandom = Math.floor(Math.random() * 10);
            }
          }
        }
        var computerCell = document.querySelector(".computer-gameboard > div > div[data-x=\"".concat(xCoordRandom, "\"][data-y=\"").concat(yCoordRandom, "\"]"));
        var computerCellOne = document.querySelector(".computer-gameboard > div > div[data-x=\"".concat(xCoordRandom + xLengthOne, "\"][data-y=\"").concat(yCoordRandom + yLengthOne, "\"]"));
        var computerCellTwo = document.querySelector(".computer-gameboard > div > div[data-x=\"".concat(xCoordRandom + xLengthTwo, "\"][data-y=\"").concat(yCoordRandom + yLengthTwo, "\"]"));
        if (xCoordRandom + 2 >= 10 || yCoordRandom + 2 >= 10) {
          xCoordRandom = Math.floor(Math.random() * computerRows.length);
          yCoordRandom = Math.floor(Math.random() * 10);
        } else if (computerCell.classList.contains('computer-ship-placed') || computerCellOne.classList.contains('computer-ship-placed') || computerCellTwo.classList.contains('computer-ship-placed')) {
          xCoordRandom = Math.floor(Math.random() * computerRows.length);
          yCoordRandom = Math.floor(Math.random() * 10);
        } else {
          computerShipPlaced = true;
        }
      };
      while (!computerShipPlaced) {
        _loop2();
      }
      var _computerCell2 = document.querySelector(".computer-gameboard > div > div[data-x=\"".concat(xCoordRandom, "\"][data-y=\"").concat(yCoordRandom, "\"]"));
      _computerCell2.classList.add('computer-ship-placed');
      var _computerCellOne = document.querySelector(".computer-gameboard > div > div[data-x=\"".concat(xCoordRandom + xLengthOne, "\"][data-y=\"").concat(yCoordRandom + yLengthOne, "\"]"));
      _computerCellOne.classList.add('computer-ship-placed');
      var computerCellTwo = document.querySelector(".computer-gameboard > div > div[data-x=\"".concat(xCoordRandom + xLengthTwo, "\"][data-y=\"").concat(yCoordRandom + yLengthTwo, "\"]"));
      computerCellTwo.classList.add('computer-ship-placed');
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
    } else if (ship === 3) {
      var _loop3 = function _loop3() {
        var coordinates = {};
        var coordinateIndex = 0;
        computerCells.forEach(function (cell) {
          if (cell.classList.contains('computer-ship-placed')) {
            coordinates[coordinateIndex++] = [parseInt(cell.dataset.x), parseInt(cell.dataset.y)];
          }
        });
        for (var key in coordinates) {
          var coordinatesNotOverlapping = false;
          while (!coordinatesNotOverlapping) {
            if (coordinates[key][0] === xCoordRandom && coordinates[key][1] === yCoordRandom || coordinates[key][0] === xCoordRandom + xLengthOne && coordinates[key][1] === yCoordRandom + yLengthOne || coordinates[key][0] === xCoordRandom + xLengthTwo && coordinates[key][1] === yCoordRandom + yLengthTwo || coordinates[key][0] === xCoordRandom + xLengthThree && coordinates[key][1] === yCoordRandom + yLengthThree || coordinates[key][0] === xCoordRandom && coordinates[key][1] === yCoordRandom && coordinates[key][0] === xCoordRandom + xLengthOne && coordinates[key][1] === yCoordRandom + yLengthOne && coordinates[key][0] === xCoordRandom + xLengthTwo && coordinates[key][1] === yCoordRandom + yLengthTwo && coordinates[key][0] === xCoordRandom + xLengthThree && coordinates[key][1] === yCoordRandom + yLengthThree) {
              xCoordRandom = Math.floor(Math.random() * computerRows.length);
              yCoordRandom = Math.floor(Math.random() * 10);
            } else {
              coordinatesNotOverlapping = true;
            }
            if (xCoordRandom + 3 >= 10 || yCoordRandom + 3 >= 10) {
              xCoordRandom = Math.floor(Math.random() * computerRows.length);
              yCoordRandom = Math.floor(Math.random() * 10);
            }
          }
        }
        var computerCell = document.querySelector(".computer-gameboard > div > div[data-x=\"".concat(xCoordRandom, "\"][data-y=\"").concat(yCoordRandom, "\"]"));
        var computerCellOne = document.querySelector(".computer-gameboard > div > div[data-x=\"".concat(xCoordRandom + xLengthOne, "\"][data-y=\"").concat(yCoordRandom + yLengthOne, "\"]"));
        var computerCellTwo = document.querySelector(".computer-gameboard > div > div[data-x=\"".concat(xCoordRandom + xLengthTwo, "\"][data-y=\"").concat(yCoordRandom + yLengthTwo, "\"]"));
        var computerCellThree = document.querySelector(".computer-gameboard > div > div[data-x=\"".concat(xCoordRandom + xLengthThree, "\"][data-y=\"").concat(yCoordRandom + yLengthThree, "\"]"));
        if (xCoordRandom + 3 >= 10 || yCoordRandom + 3 >= 10) {
          xCoordRandom = Math.floor(Math.random() * computerRows.length);
          yCoordRandom = Math.floor(Math.random() * 10);
        } else if (computerCell.classList.contains('computer-ship-placed') || computerCellOne.classList.contains('computer-ship-placed') || computerCellTwo.classList.contains('computer-ship-placed') || computerCellThree.classList.contains('computer-ship-placed')) {
          xCoordRandom = Math.floor(Math.random() * computerRows.length);
          yCoordRandom = Math.floor(Math.random() * 10);
        } else {
          computerShipPlaced = true;
        }
      };
      while (!computerShipPlaced) {
        _loop3();
      }
      var _computerCell3 = document.querySelector(".computer-gameboard > div > div[data-x=\"".concat(xCoordRandom, "\"][data-y=\"").concat(yCoordRandom, "\"]"));
      _computerCell3.classList.add('computer-ship-placed');
      var _computerCellOne2 = document.querySelector(".computer-gameboard > div > div[data-x=\"".concat(xCoordRandom + xLengthOne, "\"][data-y=\"").concat(yCoordRandom + yLengthOne, "\"]"));
      _computerCellOne2.classList.add('computer-ship-placed');
      var _computerCellTwo = document.querySelector(".computer-gameboard > div > div[data-x=\"".concat(xCoordRandom + xLengthTwo, "\"][data-y=\"").concat(yCoordRandom + yLengthTwo, "\"]"));
      _computerCellTwo.classList.add('computer-ship-placed');
      var computerCellThree = document.querySelector(".computer-gameboard > div > div[data-x=\"".concat(xCoordRandom + xLengthThree, "\"][data-y=\"").concat(yCoordRandom + yLengthThree, "\"]"));
      computerCellThree.classList.add('computer-ship-placed');
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
  var commenceAttack = document.createElement('div');
  playerInterface.appendChild(newGame);
  playerInterface.appendChild(coordinateContainer);
  playerInterface.appendChild(numberOfShipsPlaced);
  playerInterface.appendChild(commenceAttack);
  gameboardContainer.appendChild(playerInterface);
  newGame.addEventListener('click', NewGame);
}

// ChangeToXAxis(): Will allow the player to place ships along the x-axis.
function ChangeToXAxis(e) {
  var xCoord = document.querySelector('.interface > div > button:nth-child(1)');
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
  for (var key in _utils_ShipPlacementData__WEBPACK_IMPORTED_MODULE_6__.PlacedShips) {
    delete _utils_ShipPlacementData__WEBPACK_IMPORTED_MODULE_6__.PlacedShips[key];
  }
  _utils_AxisChange__WEBPACK_IMPORTED_MODULE_3__.AxisChange.axisChange = null;
  _utils_AxisChange__WEBPACK_IMPORTED_MODULE_3__.AxisChange.axisWasChanged = false;
  _utils_NewGame__WEBPACK_IMPORTED_MODULE_1__.NewGameSelected.newGameSelected = true;
  _utils_ActivateGame__WEBPACK_IMPORTED_MODULE_4__.ActivateGame.activateGame = false;
  _utils_ActivateGame__WEBPACK_IMPORTED_MODULE_4__.ActivateGame.activatePlayerOneTurn = true;
  _utils_DisablePlacement__WEBPACK_IMPORTED_MODULE_5__.DisablePlacement.disablePlacement = false;
  _utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.lengthIndex = 0;
  _utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.shipLength = 0;
  _utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.shipsPlaced = 0;

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
    cell.replaceChildren();
  });

  // Clean the x and y axe buttons. 
  xCoord.classList.remove('current-coordinate');
  yCoord.classList.remove('current-coordinate');
  xCoord.addEventListener('click', ChangeToXAxis);
  yCoord.addEventListener('click', ChangeToYAxis);

  // Cleans the player and computer display events. 
  document.getElementById('player-gameboard-events').textContent = "";
  document.getElementById('computer-gameboard-events').textContent = "";

  // Remove Commence Attack Label.
  document.querySelector('.interface > div:nth-child(4)').classList.remove('commence-attack');
  document.querySelector('.interface > div:nth-child(4)').textContent = "";
  ComputerPlaceShips();
  PlaceShips();
}

// EnterX(): Will enter each cell on the x-axis selection. 
function EnterX(e) {
  var cell = document.querySelector("[data-x=\"".concat(e.target.dataset.x, "\"][data-y=\"").concat(e.target.dataset.y, "\"]"));
  var nextCellOne = document.querySelector("[data-x=\"".concat(e.target.dataset.x, "\"][data-y=\"").concat(parseInt(e.target.dataset.y) + 1, "\"]"));
  var nextCellTwo = document.querySelector("[data-x=\"".concat(e.target.dataset.x, "\"][data-y=\"").concat(parseInt(e.target.dataset.y) + 2, "\"]"));
  var nextCellThree = document.querySelector("[data-x=\"".concat(e.target.dataset.x, "\"][data-y=\"").concat(parseInt(e.target.dataset.y) + 3, "\"]"));
  if (_utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.shipLength === 0)
    // The ship length to be placed on the board. 
    {
      cell.classList.add('hover-test');
    } else if (_utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.shipLength === 1) {
    if (!(parseInt(e.target.dataset.y) === 9))
      // Keeps all ship placements on the gameboard. 
      {
        cell.classList.add('hover-test');
        nextCellOne.classList.add('hover-test');
        _utils_DisablePlacement__WEBPACK_IMPORTED_MODULE_5__.DisablePlacement.disablePlacement = false;
      } else {
      // Stop the null syntax error when the player clicks on the board when the hover test reaches its board limit. 
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
  cell.addEventListener('click', PlaceOnX);
}

// PlaceOnX(): Will place a ship on the gameboards x-axis.
function PlaceOnX(e) {
  if (!_utils_DisablePlacement__WEBPACK_IMPORTED_MODULE_5__.DisablePlacement.disablePlacement) {
    var cell = document.querySelector("[data-x=\"".concat(e.target.dataset.x, "\"][data-y=\"").concat(e.target.dataset.y, "\"]"));
    var nextCellOne = document.querySelector("[data-x=\"".concat(e.target.dataset.x, "\"][data-y=\"").concat(parseInt(e.target.dataset.y) + 1, "\"]"));
    var nextCellTwo = document.querySelector("[data-x=\"".concat(e.target.dataset.x, "\"][data-y=\"").concat(parseInt(e.target.dataset.y) + 2, "\"]"));
    var nextCellThree = document.querySelector("[data-x=\"".concat(e.target.dataset.x, "\"][data-y=\"").concat(parseInt(e.target.dataset.y) + 3, "\"]"));
    if (_utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.shipLength === 0 && _utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.lengthIndex < 10) {
      // Cant place the ship on this cell when there is one already on the cell. 
      if (cell.classList.contains('ship-placed')) {
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

      // null protection if the player leaves the board before the first ship length 1 placement. 
      if (nextCellOne !== null) {
        nextCellOne.classList.remove('hover-test');
      }
    } else if (_utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.shipLength === 2) {
      cell.classList.remove('hover-test');
      nextCellOne.classList.remove('hover-test');
      if (nextCellTwo !== null) {
        nextCellTwo.classList.remove('hover-test');
      }
    } else if (_utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.shipLength === 3) {
      cell.classList.remove('hover-test');
      nextCellOne.classList.remove('hover-test');
      nextCellTwo.classList.remove('hover-test');
      if (nextCellThree !== null) {
        nextCellThree.classList.remove('hover-test');
      }
    }
  }
}

// EnterY(): Will enter each cell on the y-axis selection.
function EnterY(e) {
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
  cell.addEventListener('click', PlaceOnY);
}

// PlaceOnY(): Will place a ship on the gameboards y-axis. 
function PlaceOnY(e) {
  if (!_utils_DisablePlacement__WEBPACK_IMPORTED_MODULE_5__.DisablePlacement.disablePlacement) {
    var cell = document.querySelector("[data-x=\"".concat(e.target.dataset.x, "\"][data-y=\"").concat(e.target.dataset.y, "\"]"));
    var nextCellOne = document.querySelector("[data-x=\"".concat(parseInt(e.target.dataset.x) + 1, "\"][data-y=\"").concat(e.target.dataset.y, "\"]"));
    var nextCellTwo = document.querySelector("[data-x=\"".concat(parseInt(e.target.dataset.x) + 2, "\"][data-y=\"").concat(e.target.dataset.y, "\"]"));
    var nextCellThree = document.querySelector("[data-x=\"".concat(parseInt(e.target.dataset.x) + 3, "\"][data-y=\"").concat(e.target.dataset.y, "\"]"));
    if (_utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.shipLength === 0 && _utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.lengthIndex < 10) {
      if (cell.classList.contains('ship-placed')) {
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
      if (nextCellOne !== null) {
        nextCellOne.classList.remove('hover-test');
      }
    } else if (_utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.shipLength === 2) {
      cell.classList.remove('hover-test');
      nextCellOne.classList.remove('hover-test');
      if (nextCellTwo !== null) {
        nextCellTwo.classList.remove('hover-test');
      }
    } else if (_utils_ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.shipLength === 3) {
      cell.classList.remove('hover-test');
      nextCellOne.classList.remove('hover-test');
      nextCellTwo.classList.remove('hover-test');
      if (nextCellThree !== null) {
        nextCellThree.classList.remove('hover-test');
      }
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
/* harmony import */ var _ShipData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShipData */ "./src/utils/ShipData.js");
/* harmony import */ var _images_explosion_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/explosion.png */ "./src/images/explosion.png");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }





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
            PlacedShips[key].hits += 1;
            var shipSunk = PlacedShips[key].hit(PlacedShips[key].hits, PlacedShips[key].length); // adds a hit to the ship. 

            (0,_modules_DomContent__WEBPACK_IMPORTED_MODULE_1__.DisplayComputerGameboardEvents)(1, false, shipNum);
            PlacedShips[key].isSunk(shipSunk, shipNum); // Checks if the ship has sunk.

            // If true change the sunk status to true.  
            if (shipSunk) {
              PlacedShips[key].sunk = shipSunk;
              _ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.shipsPlaced--;
            }
            var explosionImg = document.createElement('img');
            explosionImg.src = _images_explosion_png__WEBPACK_IMPORTED_MODULE_3__;
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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/comfortaa/Comfortaa-Regular.ttf */ "./src/fonts/comfortaa/Comfortaa-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/play_pretend/Play Pretend.otf */ "./src/fonts/play_pretend/Play Pretend.otf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* body - The main body for the entire application. */
body{
    padding: 0;
    margin: 0; 
    background: linear-gradient(to right, #43e97b 0%, #38f9d7 100%);
}

/* * - All the elements in the application. */
*{
    box-sizing: border-box; 
}

/* Fonts */
/* font-0 - Comfortaa */
@font-face {
    font-family: comfortaa;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

/* font-1 Play Pretend */
@font-face {
    font-family: play-pretend;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
} 

/* mobile-availability - Displays not availability for mobile or tablet devices. */
#mobile-availability{
    display: none; 
}
/***************************************************************************************************************************************************************************/
/***************************************************************************************************************************************************************************/
/* |Testing Area Identifiers and Components| */
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
    /* border: 1px solid red; */
    padding: 10px; 
}

/***************************************************************************************************************************************************************************/
/***************************************************************************************************************************************************************************/
/* |Gameboard Container| */
.gameboard-container{
    display: flex;
    justify-content: center;
    gap: 10px;

    padding: 10px;
    width: 1200px;
    margin: 0 auto;
}

/* Player One Board */
.player-one-board{
    display: flex;
    flex-direction: column;
}
.player-one-board > div{ /* rows */
    display: flex;
}
.player-one-board > div > div{ /* cells */
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid #c2410c;
    padding: 5px;
    width: 40px;
    height: 40px;
    cursor: pointer;
}
.player-one-board > div > div > div{ /* Missed Hit Container */
    height: 20px;
    font-size: 20px;
    color: #d946ef;
}

/* Computer Gameboard */
.computer-gameboard{
    display: flex;
    flex-direction: column;
}
.computer-gameboard > div{ /* Rows */
    display: flex;
}
.computer-gameboard > div > div{ /* cells */
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid lightgreen;
    padding: 5px;
    width: 40px; 
    height: 40px;
    cursor: pointer;
}

/* hover-test */
.hover-test{
    border: 2px solid #6366f1 !important;
}

/* ship-placed - Displays each ship placed on the board. */
.ship-placed{
    border: 2px solid #6366f1 !important;
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
    align-items: center;
    gap: 10px;
}
.interface > button{ /* New Button */
    font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: bold; 
    font-size: 20px;
    cursor: pointer; 
    border: 1px solid rgba(0, 0, 0, 0); 
    border-radius: 5px; 
    background-color:#38f9d600;
    color: white;
}
.interface > button:hover{
    background-color:#a3e635;
}

.interface > div:nth-child(2){ /* x and y coordinate container. */
    display: flex;
    gap: 10px;
}
.interface > div:nth-child(2) > button{ /* x and y coordinate buttons. */ 
    font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: bold;
    font-size: 18px;
    padding: 1px 15px 1px 15px; 
    border-radius: 5px; 
    border: 1px solid white;
    cursor: pointer; 
    background-color:#38f9d600;
    color: white;
}
.interface > div:nth-child(2) > button:hover{
    background-color: #a3e635;
}

.interface > div:nth-child(3){ /* Number of ships on the player board. */
    padding: 5px;
    font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    color: white; 
}

/* current-coordinate - The current coordinate choosen by the user. */
.current-coordinate{
    background-color: #a3e635 !important;
    border: 1px solid #a3e635 !important; 
}

/* commence-attack - Lets the player know that they can begin attacking the computer gameboard ships. */
.commence-attack{
    border: 1px solid white;
    border-radius: 10px;
    padding: 5px;
    font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    color: white; 
}

/***************************************************************************************************************************************************************************/
/***************************************************************************************************************************************************************************/
/* |Gameboard Events Section| */
/* player-gameboard-events - All the player gameboard events. */
#player-gameboard-events{
    padding: 10px;
    margin-bottom: 10px;
    text-align: center; 
    font-size: 20px;
    font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    color: white; 
}
#player-gameboard-events > p{
    display: inline; 
}

/* computer-gameboard-events - All the computer gameboard events. */
#computer-gameboard-events{
    padding: 10px;
    margin-bottom: 10px;
    text-align: center; 
    font-size: 20px; 
    font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    color: white;
}
#computer-gameboard-events > p{
    display: inline;  
}

/***************************************************************************************************************************************************************************/
/***************************************************************************************************************************************************************************/
/* |Application Title| */
#application-title{
    text-align: center;
    font-family: play-pretend, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 60px;
    letter-spacing: 3px;
    color: #e2e8f0;
    margin-top: 40px;
}

/***************************************************************************************************************************************************************************/
/***************************************************************************************************************************************************************************/
/* |Mobile Section| */
/* media-0 - Will display that mobile and minimization doesn't exist.*/
@media only screen and (max-width: 1100px)
{
    #application-title{
        font-size: 30px;
        text-align: center;
    }

    #mobile-availability{
        display: block;
        text-align: center;
        margin-top: 20px;
        font-size: 19px;
        font-family: comfortaa, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        color: white;
    }

    #content{
        display: none;
    }

    #computer-gameboard-events{
        display: none;
    }

    #player-gameboard-events{
        display: none;
    }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* body - The main body for the entire application. */\nbody{\n    padding: 0;\n    margin: 0; \n    background: linear-gradient(to right, #43e97b 0%, #38f9d7 100%);\n}\n\n/* * - All the elements in the application. */\n*{\n    box-sizing: border-box; \n}\n\n/* Fonts */\n/* font-0 - Comfortaa */\n@font-face {\n    font-family: comfortaa;\n    src: url('./fonts/comfortaa/Comfortaa-Regular.ttf');\n}\n\n/* font-1 Play Pretend */\n@font-face {\n    font-family: play-pretend;\n    src: url('./fonts/play_pretend/Play\\ Pretend.otf');\n} \n\n/* mobile-availability - Displays not availability for mobile or tablet devices. */\n#mobile-availability{\n    display: none; \n}\n/***************************************************************************************************************************************************************************/\n/***************************************************************************************************************************************************************************/\n/* |Testing Area Identifiers and Components| */\n#content > div > button{\n    padding: 10px 5px 10px 5px;\n    font-family:monospace;\n    background-color: lightcoral;\n    border: 1px solid lightcoral; \n    cursor: pointer;\n}\n#content > div > button:hover{\n    background-color: lightblue;\n    border: 1px solid lightblue;\n}\n\n/***************************************************************************************************************************************************************************/\n/***************************************************************************************************************************************************************************/\n/* |Main Content Section| */\n#content{\n    /* border: 1px solid red; */\n    padding: 10px; \n}\n\n/***************************************************************************************************************************************************************************/\n/***************************************************************************************************************************************************************************/\n/* |Gameboard Container| */\n.gameboard-container{\n    display: flex;\n    justify-content: center;\n    gap: 10px;\n\n    padding: 10px;\n    width: 1200px;\n    margin: 0 auto;\n}\n\n/* Player One Board */\n.player-one-board{\n    display: flex;\n    flex-direction: column;\n}\n.player-one-board > div{ /* rows */\n    display: flex;\n}\n.player-one-board > div > div{ /* cells */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    border: 1px solid #c2410c;\n    padding: 5px;\n    width: 40px;\n    height: 40px;\n    cursor: pointer;\n}\n.player-one-board > div > div > div{ /* Missed Hit Container */\n    height: 20px;\n    font-size: 20px;\n    color: #d946ef;\n}\n\n/* Computer Gameboard */\n.computer-gameboard{\n    display: flex;\n    flex-direction: column;\n}\n.computer-gameboard > div{ /* Rows */\n    display: flex;\n}\n.computer-gameboard > div > div{ /* cells */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    border: 1px solid lightgreen;\n    padding: 5px;\n    width: 40px; \n    height: 40px;\n    cursor: pointer;\n}\n\n/* hover-test */\n.hover-test{\n    border: 2px solid #6366f1 !important;\n}\n\n/* ship-placed - Displays each ship placed on the board. */\n.ship-placed{\n    border: 2px solid #6366f1 !important;\n}\n\n/* computer-ship-placed - Displays each ship that the computer places on their board. */\n.computer-ship-placed{\n    border: 1px solid lightgreen !important;\n}\n\n/* computer-ship-hit - Indicates that computer ship has been hit. */\n.computer-ship-hit > img[src]{\n    width: 100%;\n    height: 100%; \n}\n\n/* player-one-ship-hit - Indicates that the player one ship has been hit. */\n.player-one-ship-hit > img[src]{\n    width: 100%;\n    height: 100%;\n}\n\n/***************************************************************************************************************************************************************************/\n/***************************************************************************************************************************************************************************/\n/* |Inteface Section| */\n.interface{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n}\n.interface > button{ /* New Button */\n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-weight: bold; \n    font-size: 20px;\n    cursor: pointer; \n    border: 1px solid rgba(0, 0, 0, 0); \n    border-radius: 5px; \n    background-color:#38f9d600;\n    color: white;\n}\n.interface > button:hover{\n    background-color:#a3e635;\n}\n\n.interface > div:nth-child(2){ /* x and y coordinate container. */\n    display: flex;\n    gap: 10px;\n}\n.interface > div:nth-child(2) > button{ /* x and y coordinate buttons. */ \n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-weight: bold;\n    font-size: 18px;\n    padding: 1px 15px 1px 15px; \n    border-radius: 5px; \n    border: 1px solid white;\n    cursor: pointer; \n    background-color:#38f9d600;\n    color: white;\n}\n.interface > div:nth-child(2) > button:hover{\n    background-color: #a3e635;\n}\n\n.interface > div:nth-child(3){ /* Number of ships on the player board. */\n    padding: 5px;\n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    color: white; \n}\n\n/* current-coordinate - The current coordinate choosen by the user. */\n.current-coordinate{\n    background-color: #a3e635 !important;\n    border: 1px solid #a3e635 !important; \n}\n\n/* commence-attack - Lets the player know that they can begin attacking the computer gameboard ships. */\n.commence-attack{\n    border: 1px solid white;\n    border-radius: 10px;\n    padding: 5px;\n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    color: white; \n}\n\n/***************************************************************************************************************************************************************************/\n/***************************************************************************************************************************************************************************/\n/* |Gameboard Events Section| */\n/* player-gameboard-events - All the player gameboard events. */\n#player-gameboard-events{\n    padding: 10px;\n    margin-bottom: 10px;\n    text-align: center; \n    font-size: 20px;\n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    color: white; \n}\n#player-gameboard-events > p{\n    display: inline; \n}\n\n/* computer-gameboard-events - All the computer gameboard events. */\n#computer-gameboard-events{\n    padding: 10px;\n    margin-bottom: 10px;\n    text-align: center; \n    font-size: 20px; \n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    color: white;\n}\n#computer-gameboard-events > p{\n    display: inline;  \n}\n\n/***************************************************************************************************************************************************************************/\n/***************************************************************************************************************************************************************************/\n/* |Application Title| */\n#application-title{\n    text-align: center;\n    font-family: play-pretend, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 60px;\n    letter-spacing: 3px;\n    color: #e2e8f0;\n    margin-top: 40px;\n}\n\n/***************************************************************************************************************************************************************************/\n/***************************************************************************************************************************************************************************/\n/* |Mobile Section| */\n/* media-0 - Will display that mobile and minimization doesn't exist.*/\n@media only screen and (max-width: 1100px)\n{\n    #application-title{\n        font-size: 30px;\n        text-align: center;\n    }\n\n    #mobile-availability{\n        display: block;\n        text-align: center;\n        margin-top: 20px;\n        font-size: 19px;\n        font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n        color: white;\n    }\n\n    #content{\n        display: none;\n    }\n\n    #computer-gameboard-events{\n        display: none;\n    }\n\n    #player-gameboard-events{\n        display: none;\n    }\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ "./src/fonts/comfortaa/Comfortaa-Regular.ttf":
/*!***************************************************!*\
  !*** ./src/fonts/comfortaa/Comfortaa-Regular.ttf ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "886fcced57daea5944e7.ttf";

/***/ }),

/***/ "./src/fonts/play_pretend/Play Pretend.otf":
/*!*************************************************!*\
  !*** ./src/fonts/play_pretend/Play Pretend.otf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7bf18095f58b1ff37286.otf";

/***/ }),

/***/ "./src/images/explosion.png":
/*!**********************************!*\
  !*** ./src/images/explosion.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d96036a1ac7a46b47820.png";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/* harmony import */ var _modules_DomContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/DomContent */ "./src/modules/DomContent.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


(0,_modules_DomContent__WEBPACK_IMPORTED_MODULE_0__.InitializeDOM)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBWSxhQUFhLE9BQU8sWUFBWSxhQUFhLGFBQWEsTUFBTSxZQUFZLFdBQVcsT0FBTyxZQUFZLGFBQWEsYUFBYSxNQUFNLFVBQVUsWUFBWSxZQUFZLFVBQVUsVUFBVSxVQUFVLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxNQUFNLGlCQUFpQixXQUFXLE1BQU0saUJBQWlCLFdBQVcsWUFBWSxjQUFjLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLG1CQUFtQixXQUFXLFVBQVUsVUFBVSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksTUFBTSxpQkFBaUIsV0FBVyxNQUFNLGlCQUFpQixXQUFXLFlBQVksY0FBYyxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxVQUFVLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxPQUFPLFlBQVksYUFBYSxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLGlCQUFpQixhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxtQkFBbUIsV0FBVyxVQUFVLEtBQUssbUJBQW1CLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sbUJBQW1CLFdBQVcsWUFBWSxXQUFXLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxZQUFZLGFBQWEsYUFBYSxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLHNGQUFzRixpQkFBaUIsaUJBQWlCLHNFQUFzRSxHQUFHLHNEQUFzRCw4QkFBOEIsR0FBRyx1REFBdUQsNkJBQTZCLDBEQUEwRCxHQUFHLDJDQUEyQyxnQ0FBZ0MsMERBQTBELElBQUksOEdBQThHLHFCQUFxQixHQUFHLHlhQUF5YSxpQ0FBaUMsNEJBQTRCLG1DQUFtQyxvQ0FBb0Msc0JBQXNCLEdBQUcsZ0NBQWdDLGtDQUFrQyxrQ0FBa0MsR0FBRyx5WUFBeVksZ0NBQWdDLHVCQUF1QixHQUFHLG9aQUFvWixvQkFBb0IsOEJBQThCLGdCQUFnQixzQkFBc0Isb0JBQW9CLHFCQUFxQixHQUFHLDhDQUE4QyxvQkFBb0IsNkJBQTZCLEdBQUcsMkJBQTJCLDhCQUE4QixHQUFHLGlDQUFpQywrQkFBK0IsOEJBQThCLDBCQUEwQixrQ0FBa0MsbUJBQW1CLGtCQUFrQixtQkFBbUIsc0JBQXNCLEdBQUcsdUNBQXVDLDZDQUE2QyxzQkFBc0IscUJBQXFCLEdBQUcsa0RBQWtELG9CQUFvQiw2QkFBNkIsR0FBRyw2QkFBNkIsOEJBQThCLEdBQUcsbUNBQW1DLCtCQUErQiw4QkFBOEIsMEJBQTBCLHFDQUFxQyxtQkFBbUIsbUJBQW1CLG1CQUFtQixzQkFBc0IsR0FBRyxrQ0FBa0MsMkNBQTJDLEdBQUcsOEVBQThFLDJDQUEyQyxHQUFHLG9IQUFvSCw4Q0FBOEMsR0FBRyx3R0FBd0csa0JBQWtCLG9CQUFvQixHQUFHLGtIQUFrSCxrQkFBa0IsbUJBQW1CLEdBQUcsdVlBQXVZLG9CQUFvQiw2QkFBNkIsMEJBQTBCLGdCQUFnQixHQUFHLHVCQUF1Qiw0S0FBNEsseUJBQXlCLHNCQUFzQix1QkFBdUIsMENBQTBDLDBCQUEwQixpQ0FBaUMsbUJBQW1CLEdBQUcsNEJBQTRCLCtCQUErQixHQUFHLG1DQUFtQyx1REFBdUQsZ0JBQWdCLEdBQUcsMENBQTBDLDhMQUE4TCx3QkFBd0Isc0JBQXNCLGtDQUFrQywwQkFBMEIsOEJBQThCLHVCQUF1QixpQ0FBaUMsbUJBQW1CLEdBQUcsK0NBQStDLGdDQUFnQyxHQUFHLG1DQUFtQyw2REFBNkQsNEpBQTRKLG9CQUFvQixHQUFHLGdHQUFnRywyQ0FBMkMsNENBQTRDLEdBQUcsK0hBQStILDhCQUE4QiwwQkFBMEIsbUJBQW1CLDRKQUE0SixvQkFBb0IsR0FBRywrZEFBK2Qsb0JBQW9CLDBCQUEwQiwwQkFBMEIsc0JBQXNCLDRKQUE0SixvQkFBb0IsR0FBRywrQkFBK0IsdUJBQXVCLEdBQUcscUdBQXFHLG9CQUFvQiwwQkFBMEIsMEJBQTBCLHVCQUF1Qiw0SkFBNEosbUJBQW1CLEdBQUcsaUNBQWlDLHdCQUF3QixHQUFHLGdaQUFnWix5QkFBeUIsK0pBQStKLHNCQUFzQiwwQkFBMEIscUJBQXFCLHVCQUF1QixHQUFHLGdmQUFnZix5QkFBeUIsMEJBQTBCLDZCQUE2QixPQUFPLDZCQUE2Qix5QkFBeUIsNkJBQTZCLDJCQUEyQiwwQkFBMEIsZ0tBQWdLLHVCQUF1QixPQUFPLGlCQUFpQix3QkFBd0IsT0FBTyxtQ0FBbUMsd0JBQXdCLE9BQU8saUNBQWlDLHdCQUF3QixPQUFPLEdBQUcsbUJBQW1CO0FBQ3hzWDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQzVSMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDekJhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBcUQ7QUFFaEM7QUFFckJHLGtFQUFhLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvRG9tQ29udGVudC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvdXRpbHMvQWN0aXZhdGVHYW1lLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy91dGlscy9BeGlzQ2hhbmdlLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy91dGlscy9EaXNhYmxlUGxhY2VtZW50LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy91dGlscy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3V0aWxzL05ld0dhbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3V0aWxzL1NoaXAuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3V0aWxzL1NoaXBEYXRhLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy91dGlscy9TaGlwUGxhY2VtZW50RGF0YS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi4vdXRpbHMvR2FtZWJvYXJkXCI7XG5cbmltcG9ydCB7IE5ld0dhbWVTZWxlY3RlZCB9IGZyb20gXCIuLi91dGlscy9OZXdHYW1lXCI7XG5pbXBvcnQgeyBTaGlwRGF0YSB9IGZyb20gXCIuLi91dGlscy9TaGlwRGF0YVwiO1xuaW1wb3J0IHsgQXhpc0NoYW5nZSB9IGZyb20gXCIuLi91dGlscy9BeGlzQ2hhbmdlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZUdhbWUgfSBmcm9tIFwiLi4vdXRpbHMvQWN0aXZhdGVHYW1lXCI7XG5pbXBvcnQgeyBEaXNhYmxlUGxhY2VtZW50IH0gZnJvbSBcIi4uL3V0aWxzL0Rpc2FibGVQbGFjZW1lbnRcIjtcbmltcG9ydCB7IFBsYWNlZFNoaXBzLCBDb21wdXRlclBsYWNlZFNoaXBzIH0gZnJvbSBcIi4uL3V0aWxzL1NoaXBQbGFjZW1lbnREYXRhXCI7XG5cbmltcG9ydCB3YXRlckV4cGxvc2lvbiBmcm9tIFwiLi4vc291bmRzL3dhdGVyLWV4cGxvc2lvbi53YXZcIjsgXG5pbXBvcnQgZXhwbG9zaW9uSW1hZ2UgZnJvbSBcIi4uL2ltYWdlcy9leHBsb3Npb24ucG5nXCI7IFxuXG4vLyBJbml0aWFsaXppbmdET00oKTogSW50aWFsaXppbmcgRE9NIENvbnRlbnQgZm9yIHRoZSBlbnRpcmUgYXBwbGljYXRpb24uIFxuZXhwb3J0IGZ1bmN0aW9uIEluaXRpYWxpemVET00oKXtcbiAgICBHYW1lYm9hcmRET00oKTtcbiAgICBJbnRlcmZhY2VET00oKTtcbiAgICBQbGF5ZXJPbmVET00oKTtcbiAgICBDb21wdXRlckRPTSgpO1xuICAgIERpc3BsYXlQbGF5ZXJPbmVHYW1lYm9hcmRFdmVudHMoKTtcbiAgICBEaXNwbGF5Q29tcHV0ZXJHYW1lYm9hcmRFdmVudHMoKTtcbn1cblxuLy8gRGlzcGxheVBsYXllck9uZUdhbWVib2FyZEV2ZW50cygpOiBXaWxsIGRpc3BsYXkgYWxsIHRoZSBldmVudHMgdGhhdCBwbGF5ZXIgb25lIGluaXRpYXRlcyBvbiB0aGUgY29tcHV0ZXJzIGdhbWVib2FyZC5cbmZ1bmN0aW9uIERpc3BsYXlQbGF5ZXJPbmVHYW1lYm9hcmRFdmVudHMoYm9hcmRTdGF0dXMsIGNvb3Jkcywgc3Vua1N0YXR1cyl7XG4gICAgY29uc3Qgc2hpcFN1bmtNc3NnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGlmIChib2FyZFN0YXR1cyA9PT0gMSlcbiAgICB7XG4gICAgICAgIHNoaXBTdW5rTXNzZy50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItZ2FtZWJvYXJkLWV2ZW50cycpLnRleHRDb250ZW50ID0gYFlvdSBoaXQgYSBzaGlwIGF0IHRoZSBjb29yZGluYXRlcyBbJHtjb29yZHMuZGF0YXNldC54fSwgJHtjb29yZHMuZGF0YXNldC55fV0hYDtcbiAgICB9XG4gICAgZWxzZSBpZiAoYm9hcmRTdGF0dXMgPT09IDApXG4gICAge1xuICAgICAgICBzaGlwU3Vua01zc2cudGV4dENvbnRlbnQgPSBcIlwiOyBcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci1nYW1lYm9hcmQtZXZlbnRzJykudGV4dENvbnRlbnQgPSBgWW91ciBoaXQgbWlzc2VkIGF0IHRoZSBjb29yZGluYXRlcyBbJHtjb29yZHMuZGF0YXNldC54fSwgJHtjb29yZHMuZGF0YXNldC55fV0hYDtcbiAgICB9XG4gICAgZWxzZSBpZiAoYm9hcmRTdGF0dXMgPT09IDIpXG4gICAge1xuICAgICAgICBzaGlwU3Vua01zc2cudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLWdhbWVib2FyZC1ldmVudHMnKS50ZXh0Q29udGVudCA9ICdQbGF5ZXIgT25lIFdpbnMgQmF0dGxlc2hpcCEnOyBcbiAgICB9XG4gICAgZWxzZSBpZiAoYm9hcmRTdGF0dXMgPT09IDMpXG4gICAge1xuICAgICAgICBzaGlwU3Vua01zc2cudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLWdhbWVib2FyZC1ldmVudHMnKS50ZXh0Q29udGVudCA9ICdQbGF5ZXIgT25lIExvc2VzIEJhdHRsZXNoaXAhJzsgXG4gICAgfVxuXG4gICAgaWYgKHN1bmtTdGF0dXMpXG4gICAge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLWdhbWVib2FyZC1ldmVudHMnKS5hcHBlbmRDaGlsZChzaGlwU3Vua01zc2cpO1xuICAgICAgICBzaGlwU3Vua01zc2cudGV4dENvbnRlbnQgPSBgIFlvdSBzdW5rIHRoZSBzaGlwIWA7XG4gICAgfVxufVxuXG4vLyBEaXNwbGF5Q29tcHV0ZXJHYW1lYm9hcmRFdmVudHMoKTogV2lsbCBkaXNwbGF5IGFsbCB0aGUgZXZlbnRzIHRoYXQgdGhlIGNvbXB1dGVyIGluaXRpYXRlcyBvbiBwbGF5ZXIgb25lJ3MgZ2FtZWJvYXJkLiBcbmV4cG9ydCBmdW5jdGlvbiBEaXNwbGF5Q29tcHV0ZXJHYW1lYm9hcmRFdmVudHMoYm9hcmRTdGF0dXMsIHN1bmtTdGF0dXMsIHNoaXBOdW0pe1xuICAgIGNvbnN0IHNoaXBTdW5rTXNzZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIGlmIChib2FyZFN0YXR1cyA9PT0gMSlcbiAgICB7XG4gICAgICAgIHNoaXBTdW5rTXNzZy50ZXh0Q29udGVudCA9IFwiXCI7IFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcHV0ZXItZ2FtZWJvYXJkLWV2ZW50cycpLnRleHRDb250ZW50ID0gYFRoZSBjb21wdXRlciBoaXQgc2hpcCAke3NoaXBOdW19IWA7XG4gICAgfVxuICAgIGVsc2UgaWYgKGJvYXJkU3RhdHVzID09PSAwKVxuICAgIHtcbiAgICAgICAgc2hpcFN1bmtNc3NnLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXB1dGVyLWdhbWVib2FyZC1ldmVudHMnKS50ZXh0Q29udGVudCA9ICdUaGUgY29tcHV0ZXIgbWlzc2VkISc7IFxuICAgIH1cbiAgICBlbHNlIGlmIChib2FyZFN0YXR1cyA9PT0gMilcbiAgICB7XG4gICAgICAgIHNoaXBTdW5rTXNzZy50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wdXRlci1nYW1lYm9hcmQtZXZlbnRzJykudGV4dENvbnRlbnQgPSAnVGhlIENvbXB1dGVyIFdpbnMgQmF0dGxlc2hpcCEnOyBcbiAgICB9XG4gICAgZWxzZSBpZiAoYm9hcmRTdGF0dXMgPT09IDMpXG4gICAge1xuICAgICAgICBzaGlwU3Vua01zc2cudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcHV0ZXItZ2FtZWJvYXJkLWV2ZW50cycpLnRleHRDb250ZW50ID0gJ1RoZSBDb21wdXRlciBMb3NlcyBCYXR0bGVzaGlwISc7IFxuICAgIH1cblxuICAgIGlmIChzdW5rU3RhdHVzKVxuICAgIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXB1dGVyLWdhbWVib2FyZC1ldmVudHMnKS5hcHBlbmRDaGlsZChzaGlwU3Vua01zc2cpO1xuICAgICAgICBzaGlwU3Vua01zc2cudGV4dENvbnRlbnQgPSBcIiBUaGUgY29tcHV0ZXIgc3VuayB0aGUgc2hpcCFcIjtcbiAgICB9XG59XG5cbi8vIE51bWJlck9mU2hpcHNQbGFjZWQoKTogV2lsbCBrZWVwIHRyYWNrIG9mIHRoZSBjdXJyZW50IHNoaXAgdG8gYmUgcGxhY2VkIG9uIHRoZSBnYW1lYm9hcmQuXG5mdW5jdGlvbiBOdW1iZXJPZlNoaXBzUGxhY2VkKCl7XG4gICAgY29uc3QgbnVtYmVyT2ZTaGlwc1BsYWNlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5udW1iZXItb2Ytc2hpcHMnKTtcblxuICAgIGlmICghKChTaGlwRGF0YS5sZW5ndGhJbmRleCArIDEpID4gMTApKVxuICAgIHtcbiAgICAgICAgU2hpcERhdGEuc2hpcHNQbGFjZWQrKztcbiAgICAgICAgbnVtYmVyT2ZTaGlwc1BsYWNlZC50ZXh0Q29udGVudCA9IGBTaGlwczogJHtTaGlwRGF0YS5zaGlwc1BsYWNlZH1gO1xuICAgIH1cblxuICAgIGlmIChBY3RpdmF0ZUdhbWUuYWN0aXZhdGVHYW1lKVxuICAgIHtcbiAgICAgICAgbnVtYmVyT2ZTaGlwc1BsYWNlZC50ZXh0Q29udGVudCA9IGBTaGlwczogJHtTaGlwRGF0YS5zaGlwc1BsYWNlZH1gOyBcbiAgICB9XG59XG5cbi8vIEdhbWVib2FyZERPTSgpOiBUaGUgZ2FtZWJvYXJkIERPTSBmb3IgdGhlIGVudGlyZSBhcHBsaWNhdGlvbi4gXG5mdW5jdGlvbiBHYW1lYm9hcmRET00oKXtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IGdhbWVib2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdhbWVib2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdnYW1lYm9hcmQtY29udGFpbmVyJyk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGdhbWVib2FyZENvbnRhaW5lcik7IFxufVxuXG4vLyBQbGF5ZXJPbmVET00oKTogUGxheWVyIG9uZSBnYW1lYm9hcmQuXG5mdW5jdGlvbiBQbGF5ZXJPbmVET00oKXtcbiAgICBjb25zdCBnYW1lYm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZWJvYXJkLWNvbnRhaW5lcicpOyBcblxuICAgIGNvbnN0IHBsYXllck9uZUJvYXJkID0gR2FtZWJvYXJkKCk7IFxuXG4gICAgY29uc3QgcGxheWVyT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuICAgIHBsYXllck9uZS5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItb25lLWJvYXJkJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllck9uZUJvYXJkLmdhbWVib2FyZC5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcblxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHBsYXllck9uZUJvYXJkLmdhbWVib2FyZFtpXS5sZW5ndGg7IGorKyl7XG4gICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgICAgICAgICBjZWxsLmRhdGFzZXQueCA9IGk7XG4gICAgICAgICAgICBjZWxsLmRhdGFzZXQueSA9IGo7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICAgIH1cblxuICAgICAgICBwbGF5ZXJPbmUuYXBwZW5kQ2hpbGQocm93KTsgXG4gICAgfVxuXG4gICAgZ2FtZWJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllck9uZSk7IFxufVxuXG4vLyBDb21wdXRlckRPTSgpOiBDb21wdXRlciBnYW1lYm9hcmRcbmZ1bmN0aW9uIENvbXB1dGVyRE9NKCl7XG4gICAgY29uc3QgZ2FtZWJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVib2FyZC1jb250YWluZXInKTtcbiAgICBcbiAgICBjb25zdCBjb21wdXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcbiAgICBjb21wdXRlci5jbGFzc0xpc3QuYWRkKCdjb21wdXRlci1nYW1lYm9hcmQnKTsgXG5cbiAgICBjb25zdCBjb21wdXRlckJvYXJkID0gR2FtZWJvYXJkKCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbXB1dGVyQm9hcmQuZ2FtZWJvYXJkLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgICAgY29uc3QgY29tcHV0ZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG5cbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb21wdXRlckJvYXJkLmdhbWVib2FyZFtpXS5sZW5ndGg7IGorKylcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgY29tcHV0ZXJDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuICAgICAgICAgICAgY29tcHV0ZXJDZWxsLmRhdGFzZXQueCA9IGk7XG4gICAgICAgICAgICBjb21wdXRlckNlbGwuZGF0YXNldC55ID0gajtcbiAgICAgICAgICAgIGNvbXB1dGVyUm93LmFwcGVuZENoaWxkKGNvbXB1dGVyQ2VsbCk7IFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb21wdXRlci5hcHBlbmRDaGlsZChjb21wdXRlclJvdyk7IFxuICAgIH1cblxuICAgIGdhbWVib2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChjb21wdXRlcik7IFxufVxuXG4vLyBQbGFjZVNoaXBzKCk6IFdpbGwgcGxhY2UgdGhlIHNoaXBzIG9uIHRoZSBnYW1lYm9hcmQuXG5mdW5jdGlvbiBQbGFjZVNoaXBzKGUpe1xuICAgIGNvbnN0IGNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllci1vbmUtYm9hcmQgPiBkaXYgPiBkaXYnKTsgXG4gICAgY29uc3QgeENvb3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVib2FyZC1jb250YWluZXIgPiBkaXY6bnRoLWNoaWxkKDEpID4gZGl2ID4gYnV0dG9uOm50aC1jaGlsZCgxKScpO1xuICAgIGNvbnN0IHlDb29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lYm9hcmQtY29udGFpbmVyID4gZGl2Om50aC1jaGlsZCgxKSA+IGRpdiA+IGJ1dHRvbjpudGgtY2hpbGQoMiknKTsgXG4gICAgY29uc3QgY29tbWVuY2VBdHRhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW50ZXJmYWNlID4gZGl2Om50aC1jaGlsZCg0KScpO1xuXG4gICAgaWYgKCFBeGlzQ2hhbmdlLmF4aXNXYXNDaGFuZ2VkICYmIFNoaXBEYXRhLmxlbmd0aEluZGV4IDwgMTApXG4gICAge1xuICAgICAgICBOdW1iZXJPZlNoaXBzUGxhY2VkKCk7IFxuICAgICAgICAgICAgXG4gICAgICAgIGNvbnN0IGJvYXJkID0gR2FtZWJvYXJkKCk7XG4gICAgICAgIGNvbnN0IHNoaXAgPSBib2FyZC5TaGlwKCk7XG4gICAgXG4gICAgICAgIFNoaXBEYXRhLnNoaXBMZW5ndGggPSBzaGlwLmRlZmF1bHRMZW5ndGhzW1NoaXBEYXRhLmxlbmd0aEluZGV4XTtcblxuICAgICAgICBzaGlwLmxlbmd0aCA9IFNoaXBEYXRhLnNoaXBMZW5ndGggKyAxOyBcblxuICAgICAgICBQbGFjZWRTaGlwc1tgc2hpcCAke1NoaXBEYXRhLmxlbmd0aEluZGV4fWBdID0gc2hpcDtcbiAgICB9XG5cbiAgICBpZiAoU2hpcERhdGEubGVuZ3RoSW5kZXggPiA5KSAvLyBXaWxsIGRlYWN0aXZhdGUgcGxheWVyIG9uZXMgc2hpcCBwbGFjZW1lbnQuIFxuICAgIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNlbGxzLmxlbmd0aDsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBjZWxsc1tpXS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgRW50ZXJYKTtcbiAgICAgICAgICAgIGNlbGxzW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBMZWF2ZVgpOyBcbiAgICAgICAgICAgIGNlbGxzW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBFbnRlclkpO1xuICAgICAgICAgICAgY2VsbHNbaV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIExlYXZlWSk7XG4gICAgICAgICAgICBjZWxsc1tpXS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIFBsYWNlT25YKTsgXG4gICAgICAgICAgICBjZWxsc1tpXS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIFBsYWNlT25ZKTsgXG4gICAgICAgIH1cblxuICAgICAgICB4Q29vcmQuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudC1jb29yZGluYXRlJyk7XG4gICAgICAgIHlDb29yZC5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50LWNvb3JkaW5hdGUnKTtcbiAgICAgICAgeENvb3JkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgQ2hhbmdlVG9YQXhpcyk7XG4gICAgICAgIHlDb29yZC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIENoYW5nZVRvWUF4aXMpO1xuXG4gICAgICAgIEFjdGl2YXRlR2FtZS5hY3RpdmF0ZUdhbWUgPSB0cnVlOyBcblxuICAgICAgICBjb21tZW5jZUF0dGFjay5jbGFzc0xpc3QuYWRkKCdjb21tZW5jZS1hdHRhY2snKTsgXG4gICAgICAgIGNvbW1lbmNlQXR0YWNrLnRleHRDb250ZW50ID0gXCJDb21tZW5jZSBBdHRhY2shXCI7IFxuXG4gICAgICAgIEdhbWVJbml0aWF0ZWQoKTsgXG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2VsbHMubGVuZ3RoOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmIChBeGlzQ2hhbmdlLmF4aXNDaGFuZ2UgPT09IG51bGwpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2VsbHNbaV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIEVudGVyWSk7XG4gICAgICAgICAgICAgICAgY2VsbHNbaV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIExlYXZlWSk7IFxuICAgICAgICAgICAgICAgIGNlbGxzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBFbnRlclgpO1xuICAgICAgICAgICAgICAgIGNlbGxzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBMZWF2ZVgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoQXhpc0NoYW5nZS5heGlzQ2hhbmdlID09PSAxKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNlbGxzW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgUGxhY2VPblkpO1xuICAgICAgICAgICAgICAgIGNlbGxzW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBFbnRlclkpO1xuICAgICAgICAgICAgICAgIGNlbGxzW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBMZWF2ZVkpO1xuICAgICAgICAgICAgICAgIGNlbGxzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBFbnRlclgpO1xuICAgICAgICAgICAgICAgIGNlbGxzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBMZWF2ZVgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoQXhpc0NoYW5nZS5heGlzQ2hhbmdlID09PSAyKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNlbGxzW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgUGxhY2VPblgpO1xuICAgICAgICAgICAgICAgIGNlbGxzW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBFbnRlclgpO1xuICAgICAgICAgICAgICAgIGNlbGxzW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBMZWF2ZVgpO1xuICAgICAgICAgICAgICAgIGNlbGxzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBFbnRlclkpO1xuICAgICAgICAgICAgICAgIGNlbGxzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBMZWF2ZVkpOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gR2FtZUluaXRpYXRlZCgpOiBUaGUgcGxheWVyIGFuZCBjb21wdXRlciB3aWxsIHRha2UgdHVybnMgcGlja2luZyBjb29yZGluYXRlcyBvbiBlYWNoIG90aGVycyBnYW1lYm9hcmQgdG8gc2luayBhIHNoaXAuXG5mdW5jdGlvbiBHYW1lSW5pdGlhdGVkKCl7XG4gICAgY29uc3QgY29tcHV0ZXJDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXYgPiBkaXZgKTtcblxuICAgIE51bWJlck9mU2hpcHNQbGFjZWQoKTsgXG5cbiAgICBQbGF5ZXJPbmVXaW5zKCk7XG5cbiAgICBDb21wdXRlcldpbnMoKTtcblxuICAgIGlmIChBY3RpdmF0ZUdhbWUuYWN0aXZhdGVHYW1lKVxuICAgIHtcbiAgICAgICAgY29tcHV0ZXJDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgUGxheWVyT25lVHVybik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICghQWN0aXZhdGVHYW1lLmFjdGl2YXRlUGxheWVyT25lVHVybilcbiAgICB7XG4gICAgICAgIC8vIFJlbW92ZSB0aGUgZXZlbnRzIGZvciBhbGwgY2VsbHMgb24gdGhlIGNvbXB1dGVyIGdhbWVib2FyZC5cbiAgICAgICAgY29tcHV0ZXJDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgUGxheWVyT25lVHVybik7IFxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIENvbXB1dGVyVHVybigpOyAgXG4gICAgfVxufVxuXG4vLyBQbGF5ZXJPbmVXaW5zKCk6IEFsbCBjb21wdXRlciBzaGlwcyBzdW5rID0gUGxheWVyIG9uZSB3aW5zLlxuZnVuY3Rpb24gUGxheWVyT25lV2lucygpe1xuICAgIGNvbnN0IGNvbXB1dGVyQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tcHV0ZXItZ2FtZWJvYXJkID4gZGl2ID4gZGl2Jyk7IFxuICAgIGxldCB0b3RhbENvbXB1dGVyU2hpcHNTdW5rID0gMDsgXG4gICAgZm9yIChsZXQga2V5IGluIENvbXB1dGVyUGxhY2VkU2hpcHMpXG4gICAge1xuICAgICAgICBpZiAoQ29tcHV0ZXJQbGFjZWRTaGlwc1trZXldLnN1bmsgPT09IHRydWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRvdGFsQ29tcHV0ZXJTaGlwc1N1bmsrKztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0b3RhbENvbXB1dGVyU2hpcHNTdW5rID09PSAxMClcbiAgICB7XG4gICAgICAgIEFjdGl2YXRlR2FtZS5hY3RpdmF0ZUdhbWUgPSBmYWxzZTsgXG4gICAgICAgIEFjdGl2YXRlR2FtZS5hY3RpdmF0ZVBsYXllck9uZVR1cm4gPSB0cnVlO1xuICAgICAgICBOZXdHYW1lU2VsZWN0ZWQubmV3R2FtZVNlbGVjdGVkID0gZmFsc2U7IFxuXG4gICAgICAgIGNvbXB1dGVyQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIFBsYXllck9uZVR1cm4pOyBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgRGlzcGxheVBsYXllck9uZUdhbWVib2FyZEV2ZW50cygyLCBudWxsLCBmYWxzZSk7IFxuICAgICAgICBEaXNwbGF5Q29tcHV0ZXJHYW1lYm9hcmRFdmVudHMoMywgZmFsc2UsIG51bGwpOyAgXG4gICAgfVxufVxuXG4vLyBDb21wdXRlcldpbnMoKTogQWxsIHBsYXllciBvbmUgc2hpcHMgc3VuayA9IENvbXB1dGVyIHdpbnMuIFxuZnVuY3Rpb24gQ29tcHV0ZXJXaW5zKCl7XG4gICAgbGV0IHRvdGFsUGxheWVyU2hpcHNTdW5rID0gMDtcbiAgICBmb3IgKGxldCBrZXkgaW4gUGxhY2VkU2hpcHMpXG4gICAge1xuICAgICAgICBpZiAoUGxhY2VkU2hpcHNba2V5XS5zdW5rID09PSB0cnVlKVxuICAgICAgICB7XG4gICAgICAgICAgICB0b3RhbFBsYXllclNoaXBzU3VuaysrOyAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRvdGFsUGxheWVyU2hpcHNTdW5rID09PSAxMClcbiAgICB7XG4gICAgICAgIEFjdGl2YXRlR2FtZS5hY3RpdmF0ZUdhbWUgPSBmYWxzZTtcbiAgICAgICAgQWN0aXZhdGVHYW1lLmFjdGl2YXRlUGxheWVyT25lVHVybiA9IHRydWU7XG4gICAgICAgIE5ld0dhbWVTZWxlY3RlZC5uZXdHYW1lU2VsZWN0ZWQgPSBmYWxzZTsgXG5cbiAgICAgICAgRGlzcGxheUNvbXB1dGVyR2FtZWJvYXJkRXZlbnRzKDIsIGZhbHNlLCBudWxsKTtcbiAgICAgICAgRGlzcGxheVBsYXllck9uZUdhbWVib2FyZEV2ZW50cygzLCBudWxsLCBmYWxzZSk7XG4gICAgfVxufVxuXG4vLyBQbGF5ZXJPbmVUdXJuKCk6IFBsYXllciBvbmUgd2lsbCBjaG9vc2UgYSBzcG90IG9uIHRoZSBib2FyZC4gXG5mdW5jdGlvbiBQbGF5ZXJPbmVUdXJuKGUpe1xuICAgIGNvbnN0IGNvbXB1dGVyQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXYgPiBkaXZbZGF0YS14PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnh9XCJdW2RhdGEteT1cIiR7ZS50YXJnZXQuZGF0YXNldC55fVwiXWApOyBcbiAgICBjb25zdCBleHBsb3Npb24gPSBuZXcgQXVkaW8od2F0ZXJFeHBsb3Npb24pOyBcbiAgICBsZXQgY29tcHV0ZXJTaGlwSW5kZXggPSAwO1xuICAgIGxldCBzaGlwTnVtYmVyU3VuayA9IDA7IFxuICAgIGxldCBzaGlwU3VuayA9IGZhbHNlOyBcblxuICAgIGlmIChlLnRhcmdldC5kYXRhc2V0LnggIT09IHVuZGVmaW5lZCAmJiBlLnRhcmdldC5kYXRhc2V0LnkgIT09IHVuZGVmaW5lZClcbiAgICB7XG4gICAgICAgIGlmIChjb21wdXRlckNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb21wdXRlci1zaGlwLXBsYWNlZCcpKVxuICAgICAgICB7XG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gQ29tcHV0ZXJQbGFjZWRTaGlwcylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb21wdXRlclNoaXBJbmRleCsrOyBcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjb29yZCBpbiBDb21wdXRlclBsYWNlZFNoaXBzW2tleV0uY29vcmRpbmF0ZXMpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZiAoQ29tcHV0ZXJQbGFjZWRTaGlwc1trZXldLmNvb3JkaW5hdGVzW2Nvb3JkXVswXSA9PT0gcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC54KSAmJiBDb21wdXRlclBsYWNlZFNoaXBzW2tleV0uY29vcmRpbmF0ZXNbY29vcmRdWzFdID09PSBwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnkpKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDb21wdXRlclBsYWNlZFNoaXBzW2tleV0uaGl0cyArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoQ29tcHV0ZXJQbGFjZWRTaGlwc1trZXldLmhpdHMgPT09IENvbXB1dGVyUGxhY2VkU2hpcHNba2V5XS5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29tcHV0ZXJQbGFjZWRTaGlwc1trZXldLnN1bmsgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTdW5rID0gQ29tcHV0ZXJQbGFjZWRTaGlwc1trZXldLnN1bms7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcE51bWJlclN1bmsgPSBjb21wdXRlclNoaXBJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgZXhwbG9zaW9uSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7IFxuICAgICAgICAgICAgZXhwbG9zaW9uSW1nLnNyYyA9IGV4cGxvc2lvbkltYWdlOyBcbiAgICAgICAgICAgIGNvbXB1dGVyQ2VsbC5hcHBlbmRDaGlsZChleHBsb3Npb25JbWcpOyBcbiAgICAgICAgICAgIGNvbXB1dGVyQ2VsbC5jbGFzc0xpc3QuYWRkKCdjb21wdXRlci1zaGlwLWhpdCcpOyBcbiAgICBcbiAgICAgICAgICAgIGV4cGxvc2lvbi5wbGF5KCk7IFxuXG4gICAgICAgICAgICBEaXNwbGF5UGxheWVyT25lR2FtZWJvYXJkRXZlbnRzKDEsIGNvbXB1dGVyQ2VsbCwgc2hpcFN1bmssIHNoaXBOdW1iZXJTdW5rKTsgXG4gICAgICAgICAgICBBY3RpdmF0ZUdhbWUuYWN0aXZhdGVQbGF5ZXJPbmVUdXJuID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIWNvbXB1dGVyQ2VsbC5oYXNBdHRyaWJ1dGUoJ3N0eWxlJykpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbXB1dGVyQ2VsbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQtY29sb3I6I2JlZjI2NDsnKTtcbiAgICAgICAgICAgIERpc3BsYXlQbGF5ZXJPbmVHYW1lYm9hcmRFdmVudHMoMCwgY29tcHV0ZXJDZWxsLCBzaGlwU3VuaywgbnVsbCk7IFxuICAgICAgICAgICAgQWN0aXZhdGVHYW1lLmFjdGl2YXRlUGxheWVyT25lVHVybiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbXB1dGVyQ2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbXB1dGVyLXNoaXAtaGl0JykgfHwgY29tcHV0ZXJDZWxsLmhhc0F0dHJpYnV0ZSgnc3R5bGUnKSlcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuOyBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEFjdGl2YXRlR2FtZS5hY3RpdmF0ZVBsYXllck9uZVR1cm4gPSBmYWxzZTtcblxuICAgIEdhbWVJbml0aWF0ZWQoKTsgXG59XG5cbi8vIENvbXB1dGVyVHVybigpOiBDb21wdXRlciB3aWxsIGNob29zZSBhIHNwb250IG9uIHBsYXllciBvbmUncyBib2FyZC5cbmZ1bmN0aW9uIENvbXB1dGVyVHVybigpe1xuICAgIGNvbnN0IGdhbWVib2FyZCA9IEdhbWVib2FyZCgpOyBcbiAgICBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhQbGFjZWRTaGlwcyk7XG5cbiAgICBBY3RpdmF0ZUdhbWUuYWN0aXZhdGVQbGF5ZXJPbmVUdXJuID0gdHJ1ZTsgXG5cbiAgICBHYW1lSW5pdGlhdGVkKCk7IFxufVxuXG4vLyBDb21wdXRlclBsYWNlU2hpcHMoKTogVGhlIGNvbXB1dGVyIHdpbGwgcGxhY2Ugc2hpcHMgb24gdGhlaXIgZ2FtZWJvYXJkLlxuZnVuY3Rpb24gQ29tcHV0ZXJQbGFjZVNoaXBzKCl7XG4gICAgY29uc3QgY29tcHV0ZXJDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXYgPiBkaXYnKTtcblxuICAgIGNvbnN0IGNvbXB1dGVyUm93cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXYnKTsgXG5cbiAgICBjb25zdCBjb21wdXRlckJvYXJkID0gR2FtZWJvYXJkKCk7XG4gICAgY29uc3QgY29tcHV0ZXJTaGlwcyA9IGNvbXB1dGVyQm9hcmQuU2hpcCgpO1xuXG4gICAgY29tcHV0ZXJTaGlwcy5kZWZhdWx0TGVuZ3Rocy5mb3JFYWNoKChzaGlwLCBpbmRleCkgPT4ge1xuICAgICAgICBsZXQgY29tcHV0ZXJTaGlwUGxhY2VkID0gZmFsc2U7XG4gICAgICAgIGxldCB4Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoY29tcHV0ZXJSb3dzLmxlbmd0aCkpOyAvLyBSZXR1cm5zIGEgcmFuZG9tIG51bWJlciBmcm9tIDAgdG8gOS5cbiAgICAgICAgbGV0IHlDb29yZFJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTsgXG4gICAgICAgIGxldCBheGlzUmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG4gICAgICAgIGxldCB4TGVuZ3RoT25lID0gMCwgeExlbmd0aFR3byA9IDAsIHhMZW5ndGhUaHJlZSA9IDA7XG4gICAgICAgIGxldCB5TGVuZ3RoT25lID0gMCwgeUxlbmd0aFR3byA9IDAsIHlMZW5ndGhUaHJlZSA9IDA7IFxuXG4gICAgICAgIGlmIChheGlzUmFuZG9tID09PSAxKSAvLyB4LWF4aXNcbiAgICAgICAge1xuICAgICAgICAgICAgeExlbmd0aE9uZSA9IDA7IFxuICAgICAgICAgICAgeUxlbmd0aE9uZSA9IDE7IFxuXG4gICAgICAgICAgICB4TGVuZ3RoVHdvID0gMDtcbiAgICAgICAgICAgIHlMZW5ndGhUd28gPSAyO1xuXG4gICAgICAgICAgICB4TGVuZ3RoVGhyZWUgPSAwO1xuICAgICAgICAgICAgeUxlbmd0aFRocmVlID0gMztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChheGlzUmFuZG9tID09PSAwKSAvLyB5LWF4aXNcbiAgICAgICAge1xuICAgICAgICAgICAgeExlbmd0aE9uZSA9IDE7XG4gICAgICAgICAgICB5TGVuZ3RoT25lID0gMDtcblxuICAgICAgICAgICAgeExlbmd0aFR3byA9IDI7XG4gICAgICAgICAgICB5TGVuZ3RoVHdvID0gMDtcblxuICAgICAgICAgICAgeExlbmd0aFRocmVlID0gMztcbiAgICAgICAgICAgIHlMZW5ndGhUaHJlZSA9IDA7IFxuICAgICAgICB9XG5cblxuICAgICAgICBpZiAoc2hpcCA9PT0gMClcbiAgICAgICAge1xuICAgICAgICAgICAgd2hpbGUoIWNvbXB1dGVyU2hpcFBsYWNlZClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyBUZXN0IGlmIHRoZSBjb29yZGluYXRlcyBhbHJlYWR5IGhhdmUgYSBzaGlwIHBsYWNlZC4gXG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXYgPiBkaXZbZGF0YS14PVwiJHt4Q29vcmRSYW5kb219XCJdW2RhdGEteT1cIiR7eUNvb3JkUmFuZG9tfVwiXWApLmNsYXNzTGlzdC5jb250YWlucygnY29tcHV0ZXItc2hpcC1wbGFjZWQnKSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHhDb29yZFJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbXB1dGVyUm93cy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICB5Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIC8vIFRlc3QgaWYgdGhlIG5ldyBjb29yZGluYXRlcyBhcmUgZ2VuZXJhdGVkIG9mZiB0aGUgYm9hcmQuIFxuICAgICAgICAgICAgICAgIGlmICgoeENvb3JkUmFuZG9tICsgMSkgPj0gMTAgfHwgKHlDb29yZFJhbmRvbSArIDEpID49IDEwKVxuICAgICAgICAgICAgICAgIHsgICAgXG4gICAgICAgICAgICAgICAgICAgIHhDb29yZFJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbXB1dGVyUm93cy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICB5Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXB1dGVyU2hpcFBsYWNlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgY29uc3QgY29tcHV0ZXJDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNvbXB1dGVyLWdhbWVib2FyZCA+IGRpdiA+IGRpdltkYXRhLXg9XCIke3hDb29yZFJhbmRvbX1cIl1bZGF0YS15PVwiJHt5Q29vcmRSYW5kb219XCJdYCk7XG4gICAgICAgICAgICBjb21wdXRlckNlbGwuY2xhc3NMaXN0LmFkZCgnY29tcHV0ZXItc2hpcC1wbGFjZWQnKTsgXG5cbiAgICAgICAgICAgIENvbXB1dGVyUGxhY2VkU2hpcHNbYHNoaXAgJHtpbmRleH1gXSA9IHtjb29yZGluYXRlczogezA6IFt4Q29vcmRSYW5kb20sIHlDb29yZFJhbmRvbV19LCBsZW5ndGg6IHNoaXAgKyAxLCBoaXRzOiAwLCBzdW5rOiBmYWxzZX07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc2hpcCA9PT0gMSlcbiAgICAgICAge1xuICAgICAgICAgICAgd2hpbGUgKCFjb21wdXRlclNoaXBQbGFjZWQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0ge307XG4gICAgICAgICAgICAgICAgbGV0IGNvb3JkaW5hdGVJbmRleCA9IDA7XG5cbiAgICAgICAgICAgICAgICAvLyBTZWFyY2ggZm9yIHRoZSBjb29yZGluYXRlcyB0aGF0IGhhdmUgc2hpcHMgcGxhY2VkIG9uIHRoZW0uIFxuICAgICAgICAgICAgICAgIGNvbXB1dGVyQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbXB1dGVyLXNoaXAtcGxhY2VkJykpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzW2Nvb3JkaW5hdGVJbmRleCsrXSA9IFtwYXJzZUludChjZWxsLmRhdGFzZXQueCksIHBhcnNlSW50KGNlbGwuZGF0YXNldC55KV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBjb29yZGluYXRlcylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjb29yZGluYXRlc05vdE92ZXJsYXBwaW5nID0gZmFsc2U7IFxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoIWNvb3JkaW5hdGVzTm90T3ZlcmxhcHBpbmcpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRlc3QgaWYgdGhlIGdlbmVyYXRlZCBjb29yZGluYXRlcyBhcmUgb3ZlcmxhcHBpbmcgY29vcmRpbmF0ZXMgd2l0aCBzaGlwIHBsYWNlbWVudHMuIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCgoY29vcmRpbmF0ZXNba2V5XVswXSA9PT0geENvb3JkUmFuZG9tICYmIGNvb3JkaW5hdGVzW2tleV1bMV0gPT09IHlDb29yZFJhbmRvbSkgfHwgKGNvb3JkaW5hdGVzW2tleV1bMF0gPT09ICh4Q29vcmRSYW5kb20gKyB4TGVuZ3RoT25lKSAmJiBjb29yZGluYXRlc1trZXldWzFdID09PSAoeUNvb3JkUmFuZG9tICsgeUxlbmd0aE9uZSkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgfHwgKChjb29yZGluYXRlc1trZXldWzBdID09PSB4Q29vcmRSYW5kb20gJiYgY29vcmRpbmF0ZXNba2V5XVsxXSA9PT0geUNvb3JkUmFuZG9tKSAmJiAoY29vcmRpbmF0ZXNba2V5XVswXSA9PT0gKHhDb29yZFJhbmRvbSArIHhMZW5ndGhPbmUgKSAmJiBjb29yZGluYXRlc1trZXldWzFdID09PSAoeUNvb3JkUmFuZG9tICsgeUxlbmd0aE9uZSkpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb21wdXRlclJvd3MubGVuZ3RoKTsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeUNvb3JkUmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlc05vdE92ZXJsYXBwaW5nID0gdHJ1ZTsgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGVzdCBpZiB0aGUgbmV3IGNvb3JkaW5hdGVzIGFyZSBnZW5lcmF0ZWQgb2ZmIHRoZSBib2FyZC4gIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCh4Q29vcmRSYW5kb20gKyAxKSA+PSAxMCB8fCAoeUNvb3JkUmFuZG9tICsgMSkgPj0gMTApXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeENvb3JkUmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29tcHV0ZXJSb3dzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeUNvb3JkUmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVyQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXYgPiBkaXZbZGF0YS14PVwiJHt4Q29vcmRSYW5kb219XCJdW2RhdGEteT1cIiR7eUNvb3JkUmFuZG9tfVwiXWApO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVyQ2VsbE9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXYgPiBkaXZbZGF0YS14PVwiJHt4Q29vcmRSYW5kb20gKyB4TGVuZ3RoT25lfVwiXVtkYXRhLXk9XCIke3lDb29yZFJhbmRvbSArIHlMZW5ndGhPbmV9XCJdYCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gRmluYWwgVGVzdDogIGdlbmVyYXRlZCBjb29yZGluYXRlcyBvZmYgdGhlIGJvYXJkOyBjb29yZGluYXRlcyBvdmVybGFwOyBsZWF2ZSB0aGUgbG9vcC5cbiAgICAgICAgICAgICAgICBpZiAoKHhDb29yZFJhbmRvbSArIDEpID49IDEwIHx8ICh5Q29vcmRSYW5kb20gKyAxKSA+PSAxMClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHhDb29yZFJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbXB1dGVyUm93cy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICB5Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjb21wdXRlckNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb21wdXRlci1zaGlwLXBsYWNlZCcpIHx8IGNvbXB1dGVyQ2VsbE9uZS5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbXB1dGVyLXNoaXAtcGxhY2VkJykpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb21wdXRlclJvd3MubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgeUNvb3JkUmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApOyBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXB1dGVyU2hpcFBsYWNlZCA9IHRydWU7IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgY29tcHV0ZXJDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNvbXB1dGVyLWdhbWVib2FyZCA+IGRpdiA+IGRpdltkYXRhLXg9XCIke3hDb29yZFJhbmRvbX1cIl1bZGF0YS15PVwiJHt5Q29vcmRSYW5kb219XCJdYCk7XG4gICAgICAgICAgICBjb21wdXRlckNlbGwuY2xhc3NMaXN0LmFkZCgnY29tcHV0ZXItc2hpcC1wbGFjZWQnKTtcblxuICAgICAgICAgICAgY29uc3QgY29tcHV0ZXJDZWxsT25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNvbXB1dGVyLWdhbWVib2FyZCA+IGRpdiA+IGRpdltkYXRhLXg9XCIke3hDb29yZFJhbmRvbSArIHhMZW5ndGhPbmV9XCJdW2RhdGEteT1cIiR7eUNvb3JkUmFuZG9tICsgeUxlbmd0aE9uZX1cIl1gKTtcbiAgICAgICAgICAgIGNvbXB1dGVyQ2VsbE9uZS5jbGFzc0xpc3QuYWRkKCdjb21wdXRlci1zaGlwLXBsYWNlZCcpOyBcblxuICAgICAgICAgICAgQ29tcHV0ZXJQbGFjZWRTaGlwc1tgc2hpcCAke2luZGV4fWBdID0ge2Nvb3JkaW5hdGVzOiB7MDogW3hDb29yZFJhbmRvbSwgeUNvb3JkUmFuZG9tXSwgMTogW3hDb29yZFJhbmRvbSArIHhMZW5ndGhPbmUsIHlDb29yZFJhbmRvbSArIHlMZW5ndGhPbmVdfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZW5ndGg6IHNoaXAgKyAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpdHM6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VuazogZmFsc2V9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNoaXAgPT09IDIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHdoaWxlICghY29tcHV0ZXJTaGlwUGxhY2VkKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxldCBjb29yZGluYXRlcyA9IHt9O1xuICAgICAgICAgICAgICAgIGxldCBjb29yZGluYXRlSW5kZXggPSAwOyBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb21wdXRlckNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb21wdXRlci1zaGlwLXBsYWNlZCcpKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlc1tjb29yZGluYXRlSW5kZXgrK10gPSBbcGFyc2VJbnQoY2VsbC5kYXRhc2V0LngpLCBwYXJzZUludChjZWxsLmRhdGFzZXQueSldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gY29vcmRpbmF0ZXMpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY29vcmRpbmF0ZXNOb3RPdmVybGFwcGluZyA9IGZhbHNlOyBcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUoIWNvb3JkaW5hdGVzTm90T3ZlcmxhcHBpbmcpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoKGNvb3JkaW5hdGVzW2tleV1bMF0gPT09IHhDb29yZFJhbmRvbSAmJiBjb29yZGluYXRlc1trZXldWzFdID09PSB5Q29vcmRSYW5kb20pIHx8IFxuICAgICAgICAgICAgICAgICAgICAgICAgKGNvb3JkaW5hdGVzW2tleV1bMF0gPT09ICh4Q29vcmRSYW5kb20gKyB4TGVuZ3RoT25lKSAmJiBjb29yZGluYXRlc1trZXldWzFdID09PSAoeUNvb3JkUmFuZG9tICsgeUxlbmd0aE9uZSkpIHx8IFxuICAgICAgICAgICAgICAgICAgICAgICAgKGNvb3JkaW5hdGVzW2tleV1bMF0gPT09ICh4Q29vcmRSYW5kb20gKyB4TGVuZ3RoVHdvKSkgJiYgKGNvb3JkaW5hdGVzW2tleV1bMV0gPT09ICh5Q29vcmRSYW5kb20gKyB5TGVuZ3RoVHdvKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCAoKGNvb3JkaW5hdGVzW2tleV1bMF0gPT09IHhDb29yZFJhbmRvbSAmJiBjb29yZGluYXRlc1trZXldWzFdID09PSB5Q29vcmRSYW5kb20pICYmIFxuICAgICAgICAgICAgICAgICAgICAgICAgKGNvb3JkaW5hdGVzW2tleV1bMF0gPT09ICh4Q29vcmRSYW5kb20gKyB4TGVuZ3RoT25lKSAmJiBjb29yZGluYXRlc1trZXldWzFdID09PSAoeUNvb3JkUmFuZG9tICsgeUxlbmd0aE9uZSkpICYmIFxuICAgICAgICAgICAgICAgICAgICAgICAgKGNvb3JkaW5hdGVzW2tleV1bMF0gPT09ICh4Q29vcmRSYW5kb20gKyB4TGVuZ3RoVHdvKSAmJiBjb29yZGluYXRlc1trZXldWzFdID09PSAoeUNvb3JkUmFuZG9tICsgeUxlbmd0aFR3bykpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb21wdXRlclJvd3MubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzTm90T3ZlcmxhcHBpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHhDb29yZFJhbmRvbSArIDIpID49IDEwIHx8ICh5Q29vcmRSYW5kb20gKyAyKSA+PSAxMClcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb21wdXRlclJvd3MubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgY29tcHV0ZXJDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNvbXB1dGVyLWdhbWVib2FyZCA+IGRpdiA+IGRpdltkYXRhLXg9XCIke3hDb29yZFJhbmRvbX1cIl1bZGF0YS15PVwiJHt5Q29vcmRSYW5kb219XCJdYCk7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcHV0ZXJDZWxsT25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNvbXB1dGVyLWdhbWVib2FyZCA+IGRpdiA+IGRpdltkYXRhLXg9XCIke3hDb29yZFJhbmRvbSArIHhMZW5ndGhPbmV9XCJdW2RhdGEteT1cIiR7eUNvb3JkUmFuZG9tICsgeUxlbmd0aE9uZX1cIl1gKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wdXRlckNlbGxUd28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY29tcHV0ZXItZ2FtZWJvYXJkID4gZGl2ID4gZGl2W2RhdGEteD1cIiR7eENvb3JkUmFuZG9tICsgeExlbmd0aFR3b31cIl1bZGF0YS15PVwiJHt5Q29vcmRSYW5kb20gKyB5TGVuZ3RoVHdvfVwiXWApOyBcblxuICAgICAgICAgICAgICAgIGlmICgoeENvb3JkUmFuZG9tICsgMikgPj0gMTAgfHwgKHlDb29yZFJhbmRvbSArIDIpID49IDEwKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeENvb3JkUmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29tcHV0ZXJSb3dzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIHlDb29yZFJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNvbXB1dGVyQ2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbXB1dGVyLXNoaXAtcGxhY2VkJykgfHwgY29tcHV0ZXJDZWxsT25lLmNsYXNzTGlzdC5jb250YWlucygnY29tcHV0ZXItc2hpcC1wbGFjZWQnKSB8fCBjb21wdXRlckNlbGxUd28uY2xhc3NMaXN0LmNvbnRhaW5zKCdjb21wdXRlci1zaGlwLXBsYWNlZCcpKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeENvb3JkUmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29tcHV0ZXJSb3dzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIHlDb29yZFJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcHV0ZXJTaGlwUGxhY2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IFxuXG4gICAgICAgICAgICBjb25zdCBjb21wdXRlckNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY29tcHV0ZXItZ2FtZWJvYXJkID4gZGl2ID4gZGl2W2RhdGEteD1cIiR7eENvb3JkUmFuZG9tfVwiXVtkYXRhLXk9XCIke3lDb29yZFJhbmRvbX1cIl1gKTtcbiAgICAgICAgICAgIGNvbXB1dGVyQ2VsbC5jbGFzc0xpc3QuYWRkKCdjb21wdXRlci1zaGlwLXBsYWNlZCcpO1xuXG4gICAgICAgICAgICBjb25zdCBjb21wdXRlckNlbGxPbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY29tcHV0ZXItZ2FtZWJvYXJkID4gZGl2ID4gZGl2W2RhdGEteD1cIiR7eENvb3JkUmFuZG9tICsgeExlbmd0aE9uZX1cIl1bZGF0YS15PVwiJHt5Q29vcmRSYW5kb20gKyB5TGVuZ3RoT25lfVwiXWApO1xuICAgICAgICAgICAgY29tcHV0ZXJDZWxsT25lLmNsYXNzTGlzdC5hZGQoJ2NvbXB1dGVyLXNoaXAtcGxhY2VkJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVyQ2VsbFR3byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXYgPiBkaXZbZGF0YS14PVwiJHt4Q29vcmRSYW5kb20gKyB4TGVuZ3RoVHdvfVwiXVtkYXRhLXk9XCIke3lDb29yZFJhbmRvbSArIHlMZW5ndGhUd299XCJdYCk7XG4gICAgICAgICAgICBjb21wdXRlckNlbGxUd28uY2xhc3NMaXN0LmFkZCgnY29tcHV0ZXItc2hpcC1wbGFjZWQnKTsgXG5cbiAgICAgICAgICAgIENvbXB1dGVyUGxhY2VkU2hpcHNbYHNoaXAgJHtpbmRleH1gXSA9IHtjb29yZGluYXRlczogezA6IFt4Q29vcmRSYW5kb20sIHlDb29yZFJhbmRvbV0sIDE6IFt4Q29vcmRSYW5kb20gKyB4TGVuZ3RoT25lLCB5Q29vcmRSYW5kb20gKyB5TGVuZ3RoT25lXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDI6IFt4Q29vcmRSYW5kb20gKyB4TGVuZ3RoVHdvLCB5Q29vcmRSYW5kb20gKyB5TGVuZ3RoVHdvXX0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVuZ3RoOiBzaGlwICsgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaXRzOiAwLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdW5rOiBmYWxzZX07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc2hpcCA9PT0gMylcbiAgICAgICAge1xuICAgICAgICAgICAgd2hpbGUoIWNvbXB1dGVyU2hpcFBsYWNlZClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsZXQgY29vcmRpbmF0ZXMgPSB7fTtcbiAgICAgICAgICAgICAgICBsZXQgY29vcmRpbmF0ZUluZGV4ID0gMDsgXG5cbiAgICAgICAgICAgICAgICBjb21wdXRlckNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb21wdXRlci1zaGlwLXBsYWNlZCcpKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlc1tjb29yZGluYXRlSW5kZXgrK10gPSBbcGFyc2VJbnQoY2VsbC5kYXRhc2V0LngpLCBwYXJzZUludChjZWxsLmRhdGFzZXQueSldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gY29vcmRpbmF0ZXMpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY29vcmRpbmF0ZXNOb3RPdmVybGFwcGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSghY29vcmRpbmF0ZXNOb3RPdmVybGFwcGluZylcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCgoY29vcmRpbmF0ZXNba2V5XVswXSA9PT0geENvb3JkUmFuZG9tICYmIGNvb3JkaW5hdGVzW2tleV1bMV0gPT09IHlDb29yZFJhbmRvbSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAoY29vcmRpbmF0ZXNba2V5XVswXSA9PT0gKHhDb29yZFJhbmRvbSArIHhMZW5ndGhPbmUpICYmIGNvb3JkaW5hdGVzW2tleV1bMV0gPT09ICh5Q29vcmRSYW5kb20gKyB5TGVuZ3RoT25lKSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAoY29vcmRpbmF0ZXNba2V5XVswXSA9PT0gKHhDb29yZFJhbmRvbSArIHhMZW5ndGhUd28pICYmIGNvb3JkaW5hdGVzW2tleV1bMV0gPT09ICh5Q29vcmRSYW5kb20gKyB5TGVuZ3RoVHdvKSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAoY29vcmRpbmF0ZXNba2V5XVswXSA9PT0gKHhDb29yZFJhbmRvbSArIHhMZW5ndGhUaHJlZSkgJiYgY29vcmRpbmF0ZXNba2V5XVsxXSA9PT0gKHlDb29yZFJhbmRvbSArIHlMZW5ndGhUaHJlZSkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgIHx8ICgoY29vcmRpbmF0ZXNba2V5XVswXSA9PT0geENvb3JkUmFuZG9tICYmIGNvb3JkaW5hdGVzW2tleV1bMV0gPT09IHlDb29yZFJhbmRvbSkgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICAgKGNvb3JkaW5hdGVzW2tleV1bMF0gPT09ICh4Q29vcmRSYW5kb20gKyB4TGVuZ3RoT25lKSAmJiBjb29yZGluYXRlc1trZXldWzFdID09PSAoeUNvb3JkUmFuZG9tICsgeUxlbmd0aE9uZSkpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgKGNvb3JkaW5hdGVzW2tleV1bMF0gPT09ICh4Q29vcmRSYW5kb20gKyB4TGVuZ3RoVHdvKSAmJiBjb29yZGluYXRlc1trZXldWzFdID09PSAoeUNvb3JkUmFuZG9tICsgeUxlbmd0aFR3bykpICYmIFxuICAgICAgICAgICAgICAgICAgICAgICAgIChjb29yZGluYXRlc1trZXldWzBdID09PSAoeENvb3JkUmFuZG9tICsgeExlbmd0aFRocmVlKSAmJiBjb29yZGluYXRlc1trZXldWzFdID09PSAoeUNvb3JkUmFuZG9tICsgeUxlbmd0aFRocmVlKSkpKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhDb29yZFJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbXB1dGVyUm93cy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlDb29yZFJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTsgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzTm90T3ZlcmxhcHBpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHhDb29yZFJhbmRvbSArIDMpID49IDEwIHx8ICh5Q29vcmRSYW5kb20gKyAzKSA+PSAxMClcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb21wdXRlclJvd3MubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgY29tcHV0ZXJDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNvbXB1dGVyLWdhbWVib2FyZCA+IGRpdiA+IGRpdltkYXRhLXg9XCIke3hDb29yZFJhbmRvbX1cIl1bZGF0YS15PVwiJHt5Q29vcmRSYW5kb219XCJdYCk7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcHV0ZXJDZWxsT25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNvbXB1dGVyLWdhbWVib2FyZCA+IGRpdiA+IGRpdltkYXRhLXg9XCIke3hDb29yZFJhbmRvbSArIHhMZW5ndGhPbmV9XCJdW2RhdGEteT1cIiR7eUNvb3JkUmFuZG9tICsgeUxlbmd0aE9uZX1cIl1gKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wdXRlckNlbGxUd28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY29tcHV0ZXItZ2FtZWJvYXJkID4gZGl2ID4gZGl2W2RhdGEteD1cIiR7eENvb3JkUmFuZG9tICsgeExlbmd0aFR3b31cIl1bZGF0YS15PVwiJHt5Q29vcmRSYW5kb20gKyB5TGVuZ3RoVHdvfVwiXWApOyBcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wdXRlckNlbGxUaHJlZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXYgPiBkaXZbZGF0YS14PVwiJHt4Q29vcmRSYW5kb20gKyB4TGVuZ3RoVGhyZWV9XCJdW2RhdGEteT1cIiR7eUNvb3JkUmFuZG9tICsgeUxlbmd0aFRocmVlfVwiXWApOyBcblxuICAgICAgICAgICAgICAgIGlmICgoeENvb3JkUmFuZG9tICsgMykgPj0gMTAgfHwgKHlDb29yZFJhbmRvbSArIDMpID49IDEwKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeENvb3JkUmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29tcHV0ZXJSb3dzLmxlbmd0aCk7IFxuICAgICAgICAgICAgICAgICAgICB5Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjb21wdXRlckNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb21wdXRlci1zaGlwLXBsYWNlZCcpIHx8IGNvbXB1dGVyQ2VsbE9uZS5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbXB1dGVyLXNoaXAtcGxhY2VkJykgfHwgXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wdXRlckNlbGxUd28uY2xhc3NMaXN0LmNvbnRhaW5zKCdjb21wdXRlci1zaGlwLXBsYWNlZCcpIHx8IGNvbXB1dGVyQ2VsbFRocmVlLmNsYXNzTGlzdC5jb250YWlucygnY29tcHV0ZXItc2hpcC1wbGFjZWQnKSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHhDb29yZFJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbXB1dGVyUm93cy5sZW5ndGgpOyBcbiAgICAgICAgICAgICAgICAgICAgeUNvb3JkUmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApOyBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcHV0ZXJTaGlwUGxhY2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVyQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXYgPiBkaXZbZGF0YS14PVwiJHt4Q29vcmRSYW5kb219XCJdW2RhdGEteT1cIiR7eUNvb3JkUmFuZG9tfVwiXWApOyBcbiAgICAgICAgICAgIGNvbXB1dGVyQ2VsbC5jbGFzc0xpc3QuYWRkKCdjb21wdXRlci1zaGlwLXBsYWNlZCcpO1xuXG4gICAgICAgICAgICBjb25zdCBjb21wdXRlckNlbGxPbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY29tcHV0ZXItZ2FtZWJvYXJkID4gZGl2ID4gZGl2W2RhdGEteD1cIiR7eENvb3JkUmFuZG9tICsgeExlbmd0aE9uZX1cIl1bZGF0YS15PVwiJHt5Q29vcmRSYW5kb20gKyB5TGVuZ3RoT25lfVwiXWApO1xuICAgICAgICAgICAgY29tcHV0ZXJDZWxsT25lLmNsYXNzTGlzdC5hZGQoJ2NvbXB1dGVyLXNoaXAtcGxhY2VkJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVyQ2VsbFR3byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXYgPiBkaXZbZGF0YS14PVwiJHt4Q29vcmRSYW5kb20gKyB4TGVuZ3RoVHdvfVwiXVtkYXRhLXk9XCIke3lDb29yZFJhbmRvbSArIHlMZW5ndGhUd299XCJdYCk7XG4gICAgICAgICAgICBjb21wdXRlckNlbGxUd28uY2xhc3NMaXN0LmFkZCgnY29tcHV0ZXItc2hpcC1wbGFjZWQnKTsgXG5cbiAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVyQ2VsbFRocmVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNvbXB1dGVyLWdhbWVib2FyZCA+IGRpdiA+IGRpdltkYXRhLXg9XCIke3hDb29yZFJhbmRvbSArIHhMZW5ndGhUaHJlZX1cIl1bZGF0YS15PVwiJHt5Q29vcmRSYW5kb20gKyB5TGVuZ3RoVGhyZWV9XCJdYCk7XG4gICAgICAgICAgICBjb21wdXRlckNlbGxUaHJlZS5jbGFzc0xpc3QuYWRkKCdjb21wdXRlci1zaGlwLXBsYWNlZCcpO1xuXG4gICAgICAgICAgICBDb21wdXRlclBsYWNlZFNoaXBzW2BzaGlwICR7aW5kZXh9YF0gPSB7Y29vcmRpbmF0ZXM6IHswOiBbeENvb3JkUmFuZG9tLCB5Q29vcmRSYW5kb21dLCAxOiBbeENvb3JkUmFuZG9tICsgeExlbmd0aE9uZSwgeUNvb3JkUmFuZG9tICsgeUxlbmd0aE9uZV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyOiBbeENvb3JkUmFuZG9tICsgeExlbmd0aFR3bywgeUNvb3JkUmFuZG9tICsgeUxlbmd0aFR3b10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzOiBbeENvb3JkUmFuZG9tICsgeExlbmd0aFRocmVlLCB5Q29vcmRSYW5kb20gKyB5TGVuZ3RoVGhyZWVdfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZW5ndGg6IHNoaXAgKyAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpdHM6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VuazogZmFsc2V9O1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbi8vIEludGVmYWNlRE9NKCk6IEludGVyZmFjZSBzZWN0aW9uIGZvciB0aGUgdXNlci4gXG5mdW5jdGlvbiBJbnRlcmZhY2VET00oKXtcbiAgICBjb25zdCBnYW1lYm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZWJvYXJkLWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgcGxheWVySW50ZXJmYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGxheWVySW50ZXJmYWNlLmNsYXNzTGlzdC5hZGQoJ2ludGVyZmFjZScpO1xuXG4gICAgY29uc3QgbmV3R2FtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG5ld0dhbWUudGV4dENvbnRlbnQgPSAnTmV3IEdhbWUnO1xuXG4gICAgY29uc3QgY29vcmRpbmF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHhDb29yZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHhDb29yZC50ZXh0Q29udGVudCA9ICd4JztcbiAgICBjb25zdCB5Q29vcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB5Q29vcmQudGV4dENvbnRlbnQgPSAneSc7IFxuICAgIGNvb3JkaW5hdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoeENvb3JkKTtcbiAgICBjb29yZGluYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKHlDb29yZCk7IFxuXG4gICAgY29uc3QgbnVtYmVyT2ZTaGlwc1BsYWNlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG51bWJlck9mU2hpcHNQbGFjZWQuY2xhc3NMaXN0LmFkZCgnbnVtYmVyLW9mLXNoaXBzJyk7IFxuXG4gICAgY29uc3QgY29tbWVuY2VBdHRhY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHBsYXllckludGVyZmFjZS5hcHBlbmRDaGlsZChuZXdHYW1lKTtcbiAgICBwbGF5ZXJJbnRlcmZhY2UuYXBwZW5kQ2hpbGQoY29vcmRpbmF0ZUNvbnRhaW5lcik7IFxuICAgIHBsYXllckludGVyZmFjZS5hcHBlbmRDaGlsZChudW1iZXJPZlNoaXBzUGxhY2VkKTsgXG4gICAgcGxheWVySW50ZXJmYWNlLmFwcGVuZENoaWxkKGNvbW1lbmNlQXR0YWNrKTsgXG4gICAgZ2FtZWJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllckludGVyZmFjZSk7XG5cbiAgICBuZXdHYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgTmV3R2FtZSk7XG59XG5cbi8vIENoYW5nZVRvWEF4aXMoKTogV2lsbCBhbGxvdyB0aGUgcGxheWVyIHRvIHBsYWNlIHNoaXBzIGFsb25nIHRoZSB4LWF4aXMuXG5mdW5jdGlvbiBDaGFuZ2VUb1hBeGlzKGUpe1xuICAgIGNvbnN0IHhDb29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnRlcmZhY2UgPiBkaXYgPiBidXR0b246bnRoLWNoaWxkKDEpJyk7XG4gICAgY29uc3QgeUNvb3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmludGVyZmFjZSA+IGRpdiA+IGJ1dHRvbjpudGgtY2hpbGQoMiknKTsgXG4gICAgaWYgKE5ld0dhbWVTZWxlY3RlZC5uZXdHYW1lU2VsZWN0ZWQpXG4gICAge1xuICAgICAgICBBeGlzQ2hhbmdlLmF4aXNXYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgQXhpc0NoYW5nZS5heGlzQ2hhbmdlID0gMTtcbiAgICAgICAgeUNvb3JkLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQtY29vcmRpbmF0ZScpO1xuICAgICAgICB4Q29vcmQuY2xhc3NMaXN0LmFkZCgnY3VycmVudC1jb29yZGluYXRlJyk7XG4gICAgICAgIFBsYWNlU2hpcHMoZSk7XG4gICAgfVxufVxuXG4vLyBDaGFuZ2VUb1lBeGlzKCk6IFdpbGwgYWxsb3cgdGhlIHBsYXllciB0byBwbGFjZSBzaGlwcyBhbG9uZyB0aGUgeS1heGlzLiBcbmZ1bmN0aW9uIENoYW5nZVRvWUF4aXMoZSl7XG4gICAgY29uc3QgeENvb3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmludGVyZmFjZSA+IGRpdiA+IGJ1dHRvbjpudGgtY2hpbGQoMSknKTtcbiAgICBjb25zdCB5Q29vcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW50ZXJmYWNlID4gZGl2ID4gYnV0dG9uOm50aC1jaGlsZCgyKScpOyBcbiAgICBpZiAoTmV3R2FtZVNlbGVjdGVkLm5ld0dhbWVTZWxlY3RlZClcbiAgICB7XG4gICAgICAgIEF4aXNDaGFuZ2UuYXhpc1dhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICBBeGlzQ2hhbmdlLmF4aXNDaGFuZ2UgPSAyO1xuICAgICAgICB4Q29vcmQuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudC1jb29yZGluYXRlJyk7XG4gICAgICAgIHlDb29yZC5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LWNvb3JkaW5hdGUnKTsgXG4gICAgICAgIFBsYWNlU2hpcHMoZSk7XG4gICAgfVxufVxuXG4vLyBOZXdHYW1lKCk6IFdpbGwgYmVnaW4gYSBuZXcgZ2FtZSBmb3IgdGhlIHBsYXllci4gXG5mdW5jdGlvbiBOZXdHYW1lKCl7XG4gICAgY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheWVyLW9uZS1ib2FyZCA+IGRpdiA+IGRpdicpOyBcbiAgICBjb25zdCBjb21wdXRlckNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbXB1dGVyLWdhbWVib2FyZCA+IGRpdiA+IGRpdicpOyBcbiAgICBjb25zdCB4Q29vcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW50ZXJmYWNlID4gZGl2ID4gYnV0dG9uOm50aC1jaGlsZCgxKScpO1xuICAgIGNvbnN0IHlDb29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnRlcmZhY2UgPiBkaXYgPiBidXR0b246bnRoLWNoaWxkKDIpJyk7IFxuXG4gICAgZm9yIChsZXQga2V5IGluIFBsYWNlZFNoaXBzKVxuICAgIHtcbiAgICAgICAgZGVsZXRlIFBsYWNlZFNoaXBzW2tleV07XG4gICAgfVxuICAgIFxuICAgIEF4aXNDaGFuZ2UuYXhpc0NoYW5nZSA9IG51bGw7XG4gICAgQXhpc0NoYW5nZS5heGlzV2FzQ2hhbmdlZCA9IGZhbHNlOyBcblxuICAgIE5ld0dhbWVTZWxlY3RlZC5uZXdHYW1lU2VsZWN0ZWQgPSB0cnVlOyBcblxuICAgIEFjdGl2YXRlR2FtZS5hY3RpdmF0ZUdhbWUgPSBmYWxzZTtcbiAgICBBY3RpdmF0ZUdhbWUuYWN0aXZhdGVQbGF5ZXJPbmVUdXJuID0gdHJ1ZTsgXG5cbiAgICBEaXNhYmxlUGxhY2VtZW50LmRpc2FibGVQbGFjZW1lbnQgPSBmYWxzZTsgXG5cbiAgICBTaGlwRGF0YS5sZW5ndGhJbmRleCA9IDA7XG4gICAgU2hpcERhdGEuc2hpcExlbmd0aCA9IDA7XG4gICAgU2hpcERhdGEuc2hpcHNQbGFjZWQgPSAwOyBcbiAgICBcbiAgICAvLyBDbGVhbiB0aGUgY29tcHV0ZXIgZ2FtZWJvYXJkLiBcbiAgICBjb21wdXRlckNlbGxzLmZvckVhY2goKGNvbXB1dGVyQ2VsbCkgPT4ge1xuICAgICAgICBjb21wdXRlckNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnY29tcHV0ZXItc2hpcC1wbGFjZWQnKTsgXG4gICAgICAgIGNvbXB1dGVyQ2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdjb21wdXRlci1zaGlwLWhpdCcpO1xuICAgICAgICBjb21wdXRlckNlbGwucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpOyAvLyBUZXN0aW5nICBcbiAgICAgICAgY29tcHV0ZXJDZWxsLnJlcGxhY2VDaGlsZHJlbigpOyBcbiAgICB9KTsgXG4gICAgXG4gICAgLy8gQ2xlYW4gdGhlIHBsYXllciBnYW1lYm9hcmQuIFxuICAgIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwLXBsYWNlZCcpOyBcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci10ZXN0Jyk7IFxuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYXllci1vbmUtc2hpcC1oaXQnKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdjb21wdXRlci1oaXQtbWlzc2VkJyk7IFxuICAgICAgICBjZWxsLnJlcGxhY2VDaGlsZHJlbigpOyBcbiAgICB9KTtcblxuICAgIC8vIENsZWFuIHRoZSB4IGFuZCB5IGF4ZSBidXR0b25zLiBcbiAgICB4Q29vcmQuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudC1jb29yZGluYXRlJyk7IFxuICAgIHlDb29yZC5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50LWNvb3JkaW5hdGUnKTtcbiAgICB4Q29vcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBDaGFuZ2VUb1hBeGlzKTtcbiAgICB5Q29vcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBDaGFuZ2VUb1lBeGlzKTsgXG5cbiAgICAvLyBDbGVhbnMgdGhlIHBsYXllciBhbmQgY29tcHV0ZXIgZGlzcGxheSBldmVudHMuIFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItZ2FtZWJvYXJkLWV2ZW50cycpLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcHV0ZXItZ2FtZWJvYXJkLWV2ZW50cycpLnRleHRDb250ZW50ID0gXCJcIjsgIFxuXG4gICAgLy8gUmVtb3ZlIENvbW1lbmNlIEF0dGFjayBMYWJlbC5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW50ZXJmYWNlID4gZGl2Om50aC1jaGlsZCg0KScpLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbW1lbmNlLWF0dGFjaycpOyBcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW50ZXJmYWNlID4gZGl2Om50aC1jaGlsZCg0KScpLnRleHRDb250ZW50ID0gXCJcIjsgXG5cbiAgICBDb21wdXRlclBsYWNlU2hpcHMoKTsgXG4gICAgUGxhY2VTaGlwcygpO1xufVxuXG4vLyBFbnRlclgoKTogV2lsbCBlbnRlciBlYWNoIGNlbGwgb24gdGhlIHgtYXhpcyBzZWxlY3Rpb24uIFxuZnVuY3Rpb24gRW50ZXJYKGUpeyBcbiAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7ZS50YXJnZXQuZGF0YXNldC54fVwiXVtkYXRhLXk9XCIke2UudGFyZ2V0LmRhdGFzZXQueX1cIl1gKTtcbiAgICBjb25zdCBuZXh0Q2VsbE9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke2UudGFyZ2V0LmRhdGFzZXQueH1cIl1bZGF0YS15PVwiJHtwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnkpICsgMX1cIl1gKTtcbiAgICBjb25zdCBuZXh0Q2VsbFR3byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke2UudGFyZ2V0LmRhdGFzZXQueH1cIl1bZGF0YS15PVwiJHtwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnkpICsgMn1cIl1gKTtcbiAgICBjb25zdCBuZXh0Q2VsbFRocmVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7ZS50YXJnZXQuZGF0YXNldC54fVwiXVtkYXRhLXk9XCIke3BhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueSkgKyAzfVwiXWApO1xuXG4gICAgaWYgKFNoaXBEYXRhLnNoaXBMZW5ndGggPT09IDApIC8vIFRoZSBzaGlwIGxlbmd0aCB0byBiZSBwbGFjZWQgb24gdGhlIGJvYXJkLiBcbiAgICB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaG92ZXItdGVzdCcpOyBcbiAgICB9XG4gICAgZWxzZSBpZiAoU2hpcERhdGEuc2hpcExlbmd0aCA9PT0gMSkgXG4gICAge1xuICAgICAgICBpZiAoIShwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnkpID09PSA5KSkgLy8gS2VlcHMgYWxsIHNoaXAgcGxhY2VtZW50cyBvbiB0aGUgZ2FtZWJvYXJkLiBcbiAgICAgICAge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgICAgICBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuYWRkKCdob3Zlci10ZXN0Jyk7IFxuICAgICAgICAgICAgRGlzYWJsZVBsYWNlbWVudC5kaXNhYmxlUGxhY2VtZW50ID0gZmFsc2U7IFxuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gU3RvcCB0aGUgbnVsbCBzeW50YXggZXJyb3Igd2hlbiB0aGUgcGxheWVyIGNsaWNrcyBvbiB0aGUgYm9hcmQgd2hlbiB0aGUgaG92ZXIgdGVzdCByZWFjaGVzIGl0cyBib2FyZCBsaW1pdC4gXG4gICAgICAgICAgICBEaXNhYmxlUGxhY2VtZW50LmRpc2FibGVQbGFjZW1lbnQgPSB0cnVlOyBcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAyKVxuICAgIHtcbiAgICAgICAgaWYgKCEoKHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueSkgKyAyKSA9PT0gMTApICYmICEoKHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueSkgKyAxKSA9PT0gOSkgJiYgIShwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnkpID09PSA5KSlcbiAgICAgICAge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgICAgICBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuYWRkKCdob3Zlci10ZXN0Jyk7IFxuICAgICAgICAgICAgbmV4dENlbGxUd28uY2xhc3NMaXN0LmFkZCgnaG92ZXItdGVzdCcpO1xuICAgICAgICAgICAgRGlzYWJsZVBsYWNlbWVudC5kaXNhYmxlUGxhY2VtZW50ID0gZmFsc2U7IFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgXG4gICAgICAgIHtcbiAgICAgICAgICAgIERpc2FibGVQbGFjZW1lbnQuZGlzYWJsZVBsYWNlbWVudCA9IHRydWU7IFxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKFNoaXBEYXRhLnNoaXBMZW5ndGggPT09IDMpXG4gICAge1xuICAgICAgICBpZiAoISgocGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC55KSArIDMpID09PSAxMCkgJiYgISgocGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC55KSArIDIpID09PSA5KSAmJiAhKChwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnkpICsgMSkgPT09IDkpICYmICEocGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC55KSA9PT0gOSkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaG92ZXItdGVzdCcpO1xuICAgICAgICAgICAgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmFkZCgnaG92ZXItdGVzdCcpO1xuICAgICAgICAgICAgbmV4dENlbGxUd28uY2xhc3NMaXN0LmFkZCgnaG92ZXItdGVzdCcpO1xuICAgICAgICAgICAgbmV4dENlbGxUaHJlZS5jbGFzc0xpc3QuYWRkKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgICAgICBEaXNhYmxlUGxhY2VtZW50LmRpc2FibGVQbGFjZW1lbnQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIFxuICAgICAgICB7XG4gICAgICAgICAgICBEaXNhYmxlUGxhY2VtZW50LmRpc2FibGVQbGFjZW1lbnQgPSB0cnVlOyBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBQbGFjZU9uWCk7XG59XG5cbi8vIFBsYWNlT25YKCk6IFdpbGwgcGxhY2UgYSBzaGlwIG9uIHRoZSBnYW1lYm9hcmRzIHgtYXhpcy5cbmZ1bmN0aW9uIFBsYWNlT25YKGUpe1xuICAgIGlmICghRGlzYWJsZVBsYWNlbWVudC5kaXNhYmxlUGxhY2VtZW50KVxuICAgIHsgICAgXG4gICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnh9XCJdW2RhdGEteT1cIiR7ZS50YXJnZXQuZGF0YXNldC55fVwiXWApO1xuICAgICAgICBjb25zdCBuZXh0Q2VsbE9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke2UudGFyZ2V0LmRhdGFzZXQueH1cIl1bZGF0YS15PVwiJHtwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnkpICsgMX1cIl1gKTtcbiAgICAgICAgY29uc3QgbmV4dENlbGxUd28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnh9XCJdW2RhdGEteT1cIiR7cGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC55KSArIDJ9XCJdYCk7XG4gICAgICAgIGNvbnN0IG5leHRDZWxsVGhyZWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnh9XCJdW2RhdGEteT1cIiR7cGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC55KSArIDN9XCJdYCk7XG4gICAgXG4gICAgICAgIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAwICYmIFNoaXBEYXRhLmxlbmd0aEluZGV4IDwgMTApIFxuICAgICAgICB7XG4gICAgICAgICAgICAvLyBDYW50IHBsYWNlIHRoZSBzaGlwIG9uIHRoaXMgY2VsbCB3aGVuIHRoZXJlIGlzIG9uZSBhbHJlYWR5IG9uIHRoZSBjZWxsLiBcbiAgICAgICAgICAgIGlmIChjZWxsLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSkgXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcC1wbGFjZWQnKTsgXG4gICAgICAgICAgICAgICAgUGxhY2VkU2hpcHNbYHNoaXAgJHtTaGlwRGF0YS5sZW5ndGhJbmRleH1gXS5jb29yZGluYXRlcyA9IHswOiBbcGFyc2VJbnQoY2VsbC5kYXRhc2V0LngpLCBwYXJzZUludChjZWxsLmRhdGFzZXQueSldfTtcbiAgICAgICAgICAgICAgICBTaGlwRGF0YS5sZW5ndGhJbmRleCsrOyBcbiAgICAgICAgICAgICAgICBBeGlzQ2hhbmdlLmF4aXNXYXNDaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgUGxhY2VTaGlwcygpOyBcbiAgICAgICAgICAgIH0gICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoU2hpcERhdGEuc2hpcExlbmd0aCA9PT0gMSAmJiBTaGlwRGF0YS5sZW5ndGhJbmRleCA8IDEwKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoKGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpICYmIG5leHRDZWxsT25lLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSkgXG4gICAgICAgICAgICB8fCAoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgfHwgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm47IFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcC1wbGFjZWQnKTtcbiAgICAgICAgICAgICAgICBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlZCcpO1xuICAgICAgICAgICAgICAgIFBsYWNlZFNoaXBzW2BzaGlwICR7U2hpcERhdGEubGVuZ3RoSW5kZXh9YF0uY29vcmRpbmF0ZXMgPSB7MDogW3BhcnNlSW50KGNlbGwuZGF0YXNldC54KSwgcGFyc2VJbnQoY2VsbC5kYXRhc2V0LnkpXSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxOiBbcGFyc2VJbnQobmV4dENlbGxPbmUuZGF0YXNldC54KSwgcGFyc2VJbnQobmV4dENlbGxPbmUuZGF0YXNldC55KV19O1xuICAgICAgICAgICAgICAgIFNoaXBEYXRhLmxlbmd0aEluZGV4Kys7XG4gICAgICAgICAgICAgICAgQXhpc0NoYW5nZS5heGlzV2FzQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIFBsYWNlU2hpcHMoKTsgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoU2hpcERhdGEuc2hpcExlbmd0aCA9PT0gMiAmJiBTaGlwRGF0YS5sZW5ndGhJbmRleCA8IDEwKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoKGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpICYmIG5leHRDZWxsT25lLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSAmJiBuZXh0Q2VsbFR3by5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykpIFxuICAgICAgICAgICAgfHwgKGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpIHx8IG5leHRDZWxsT25lLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSB8fCBuZXh0Q2VsbFR3by5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VkJyk7XG4gICAgICAgICAgICAgICAgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmFkZCgnc2hpcC1wbGFjZWQnKTtcbiAgICAgICAgICAgICAgICBuZXh0Q2VsbFR3by5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlZCcpO1xuICAgICAgICAgICAgICAgIFBsYWNlZFNoaXBzW2BzaGlwICR7U2hpcERhdGEubGVuZ3RoSW5kZXh9YF0uY29vcmRpbmF0ZXMgPSB7MDogW3BhcnNlSW50KGNlbGwuZGF0YXNldC54KSwgcGFyc2VJbnQoY2VsbC5kYXRhc2V0LnkpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDE6IFtwYXJzZUludChuZXh0Q2VsbE9uZS5kYXRhc2V0LngpLCBwYXJzZUludChuZXh0Q2VsbE9uZS5kYXRhc2V0LnkpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDI6IFtwYXJzZUludChuZXh0Q2VsbFR3by5kYXRhc2V0LngpLCBwYXJzZUludChuZXh0Q2VsbFR3by5kYXRhc2V0LnkpXX07XG4gICAgICAgICAgICAgICAgU2hpcERhdGEubGVuZ3RoSW5kZXgrKztcbiAgICAgICAgICAgICAgICBBeGlzQ2hhbmdlLmF4aXNXYXNDaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgUGxhY2VTaGlwcygpOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAzICYmIFNoaXBEYXRhLmxlbmd0aEluZGV4IDwgMTApXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICgoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgJiYgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpICYmIG5leHRDZWxsVHdvLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSAmJiBuZXh0Q2VsbFRocmVlLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSlcbiAgICAgICAgICAgIHx8IChjZWxsLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSB8fCBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgfHwgbmV4dENlbGxUd28uY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpIHx8IG5leHRDZWxsVGhyZWUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm47IFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcC1wbGFjZWQnKTtcbiAgICAgICAgICAgICAgICBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlZCcpO1xuICAgICAgICAgICAgICAgIG5leHRDZWxsVHdvLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VkJyk7XG4gICAgICAgICAgICAgICAgbmV4dENlbGxUaHJlZS5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlZCcpO1xuICAgICAgICAgICAgICAgIFBsYWNlZFNoaXBzW2BzaGlwICR7U2hpcERhdGEubGVuZ3RoSW5kZXh9YF0uY29vcmRpbmF0ZXMgPSB7MDogW3BhcnNlSW50KGNlbGwuZGF0YXNldC54KSwgcGFyc2VJbnQoY2VsbC5kYXRhc2V0LnkpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDE6IFtwYXJzZUludChuZXh0Q2VsbE9uZS5kYXRhc2V0LngpLCBwYXJzZUludChuZXh0Q2VsbE9uZS5kYXRhc2V0LnkpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDI6IFtwYXJzZUludChuZXh0Q2VsbFR3by5kYXRhc2V0LngpLCBwYXJzZUludChuZXh0Q2VsbFR3by5kYXRhc2V0LnkpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDM6IFtwYXJzZUludChuZXh0Q2VsbFRocmVlLmRhdGFzZXQueCksIHBhcnNlSW50KG5leHRDZWxsVGhyZWUuZGF0YXNldC55KV19O1xuICAgICAgICAgICAgICAgIFNoaXBEYXRhLmxlbmd0aEluZGV4Kys7IFxuICAgICAgICAgICAgICAgIEF4aXNDaGFuZ2UuYXhpc1dhc0NoYW5nZWQgPSBmYWxzZTsgXG4gICAgICAgICAgICAgICAgUGxhY2VTaGlwcygpOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0gXG5cbi8vIExlYXZlWCgpOiBXaWxsIGxlYXZlIGVhY2ggY2VsbCBmcm9tIHRoZSB4LWF4aXMgc2VsZWN0aW9uLiBcbmZ1bmN0aW9uIExlYXZlWChlKXtcbiAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7ZS50YXJnZXQuZGF0YXNldC54fVwiXVtkYXRhLXk9XCIke2UudGFyZ2V0LmRhdGFzZXQueX1cIl1gKTtcbiAgICBjb25zdCBuZXh0Q2VsbE9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke2UudGFyZ2V0LmRhdGFzZXQueH1cIl1bZGF0YS15PVwiJHtwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnkpICsgMX1cIl1gKTtcbiAgICBjb25zdCBuZXh0Q2VsbFR3byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke2UudGFyZ2V0LmRhdGFzZXQueH1cIl1bZGF0YS15PVwiJHtwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnkpICsgMn1cIl1gKTtcbiAgICBjb25zdCBuZXh0Q2VsbFRocmVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7ZS50YXJnZXQuZGF0YXNldC54fVwiXVtkYXRhLXk9XCIke3BhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueSkgKyAzfVwiXWApO1xuXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaG92ZXItdGVzdCcpKVxuICAgIHtcbiAgICAgICAgaWYgKFNoaXBEYXRhLnNoaXBMZW5ndGggPT09IDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItdGVzdCcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKFNoaXBEYXRhLnNoaXBMZW5ndGggPT09IDEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItdGVzdCcpO1xuXG4gICAgICAgICAgICAvLyBudWxsIHByb3RlY3Rpb24gaWYgdGhlIHBsYXllciBsZWF2ZXMgdGhlIGJvYXJkIGJlZm9yZSB0aGUgZmlyc3Qgc2hpcCBsZW5ndGggMSBwbGFjZW1lbnQuIFxuICAgICAgICAgICAgaWYgKG5leHRDZWxsT25lICE9PSBudWxsKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5leHRDZWxsT25lLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAyKVxuICAgICAgICB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgICAgIG5leHRDZWxsT25lLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTtcblxuICAgICAgICAgICAgaWYgKG5leHRDZWxsVHdvICE9PSBudWxsKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5leHRDZWxsVHdvLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTsgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoU2hpcERhdGEuc2hpcExlbmd0aCA9PT0gMylcbiAgICAgICAge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgICAgICBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgICAgICBuZXh0Q2VsbFR3by5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci10ZXN0Jyk7XG5cbiAgICAgICAgICAgIGlmIChuZXh0Q2VsbFRocmVlICE9PSBudWxsKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5leHRDZWxsVGhyZWUuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItdGVzdCcpOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gRW50ZXJZKCk6IFdpbGwgZW50ZXIgZWFjaCBjZWxsIG9uIHRoZSB5LWF4aXMgc2VsZWN0aW9uLlxuZnVuY3Rpb24gRW50ZXJZKGUpe1xuICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnh9XCJdW2RhdGEteT1cIiR7ZS50YXJnZXQuZGF0YXNldC55fVwiXWApO1xuICAgIGNvbnN0IG5leHRDZWxsT25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7cGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC54KSArIDF9XCJdW2RhdGEteT1cIiR7ZS50YXJnZXQuZGF0YXNldC55fVwiXWApO1xuICAgIGNvbnN0IG5leHRDZWxsVHdvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7cGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC54KSArIDJ9XCJdW2RhdGEteT1cIiR7ZS50YXJnZXQuZGF0YXNldC55fVwiXWApO1xuICAgIGNvbnN0IG5leHRDZWxsVGhyZWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LngpICsgM31cIl1bZGF0YS15PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnl9XCJdYCk7XG5cbiAgICBpZiAoU2hpcERhdGEuc2hpcExlbmd0aCA9PT0gMClcbiAgICB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaG92ZXItdGVzdCcpO1xuICAgIH1cbiAgICBlbHNlIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAxKVxuICAgIHtcbiAgICAgICAgaWYgKCEocGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC54KSA9PT0gOSkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaG92ZXItdGVzdCcpO1xuICAgICAgICAgICAgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmFkZCgnaG92ZXItdGVzdCcpO1xuICAgICAgICAgICAgRGlzYWJsZVBsYWNlbWVudC5kaXNhYmxlUGxhY2VtZW50ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBcbiAgICAgICAge1xuICAgICAgICAgICAgRGlzYWJsZVBsYWNlbWVudC5kaXNhYmxlUGxhY2VtZW50ID0gdHJ1ZTsgXG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoU2hpcERhdGEuc2hpcExlbmd0aCA9PT0gMilcbiAgICB7XG4gICAgICAgIGlmICghKChwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LngpICsgMikgPT09IDEwKSAmJiAhKChwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LngpICsgMSkgPT09IDkpICYmICEocGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC54KSA9PT0gOSkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaG92ZXItdGVzdCcpO1xuICAgICAgICAgICAgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmFkZCgnaG92ZXItdGVzdCcpO1xuICAgICAgICAgICAgbmV4dENlbGxUd28uY2xhc3NMaXN0LmFkZCgnaG92ZXItdGVzdCcpO1xuICAgICAgICAgICAgRGlzYWJsZVBsYWNlbWVudC5kaXNhYmxlUGxhY2VtZW50ID0gZmFsc2U7IFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgXG4gICAgICAgIHtcbiAgICAgICAgICAgIERpc2FibGVQbGFjZW1lbnQuZGlzYWJsZVBsYWNlbWVudCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoU2hpcERhdGEuc2hpcExlbmd0aCA9PT0gMylcbiAgICB7XG4gICAgICAgIGlmICghKChwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LngpICsgMykgPT09IDEwKSAmJiAhKChwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LngpICsgMikgPT09IDkpICYmICEoKHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueCkgKyAxKSA9PT0gOSkgJiYgIShwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LngpID09PSA5KSlcbiAgICAgICAge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgICAgICBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuYWRkKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgICAgICBuZXh0Q2VsbFR3by5jbGFzc0xpc3QuYWRkKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgICAgICBuZXh0Q2VsbFRocmVlLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgICAgIERpc2FibGVQbGFjZW1lbnQuZGlzYWJsZVBsYWNlbWVudCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgRGlzYWJsZVBsYWNlbWVudC5kaXNhYmxlUGxhY2VtZW50ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0gICBcblxuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBQbGFjZU9uWSk7IFxufVxuXG4vLyBQbGFjZU9uWSgpOiBXaWxsIHBsYWNlIGEgc2hpcCBvbiB0aGUgZ2FtZWJvYXJkcyB5LWF4aXMuIFxuZnVuY3Rpb24gUGxhY2VPblkoZSl7XG4gICAgaWYgKCFEaXNhYmxlUGxhY2VtZW50LmRpc2FibGVQbGFjZW1lbnQpXG4gICAge1xuICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7ZS50YXJnZXQuZGF0YXNldC54fVwiXVtkYXRhLXk9XCIke2UudGFyZ2V0LmRhdGFzZXQueX1cIl1gKTtcbiAgICAgICAgY29uc3QgbmV4dENlbGxPbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LngpICsgMX1cIl1bZGF0YS15PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnl9XCJdYCk7IFxuICAgICAgICBjb25zdCBuZXh0Q2VsbFR3byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke3BhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueCkgKyAyfVwiXVtkYXRhLXk9XCIke2UudGFyZ2V0LmRhdGFzZXQueX1cIl1gKTtcbiAgICAgICAgY29uc3QgbmV4dENlbGxUaHJlZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke3BhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueCkgKyAzfVwiXVtkYXRhLXk9XCIke2UudGFyZ2V0LmRhdGFzZXQueX1cIl1gKTtcblxuICAgICAgICBpZiAoU2hpcERhdGEuc2hpcExlbmd0aCA9PT0gMCAmJiBTaGlwRGF0YS5sZW5ndGhJbmRleCA8IDEwKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcC1wbGFjZWQnKTsgXG4gICAgICAgICAgICAgICAgUGxhY2VkU2hpcHNbYHNoaXAgJHtTaGlwRGF0YS5sZW5ndGhJbmRleH1gXS5jb29yZGluYXRlcyA9IHswOiBbcGFyc2VJbnQoY2VsbC5kYXRhc2V0LngpLCBwYXJzZUludChjZWxsLmRhdGFzZXQueSldfTtcbiAgICAgICAgICAgICAgICBTaGlwRGF0YS5sZW5ndGhJbmRleCsrOyBcbiAgICAgICAgICAgICAgICBBeGlzQ2hhbmdlLmF4aXNXYXNDaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgUGxhY2VTaGlwcygpOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAxICYmIFNoaXBEYXRhLmxlbmd0aEluZGV4IDwgMTApXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICgoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgJiYgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpKSBcbiAgICAgICAgICAgIHx8IChjZWxsLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSB8fCBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VkJyk7XG4gICAgICAgICAgICAgICAgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmFkZCgnc2hpcC1wbGFjZWQnKTsgXG4gICAgICAgICAgICAgICAgUGxhY2VkU2hpcHNbYHNoaXAgJHtTaGlwRGF0YS5sZW5ndGhJbmRleH1gXS5jb29yZGluYXRlcyA9IHswOiBbcGFyc2VJbnQoY2VsbC5kYXRhc2V0LngpLCBwYXJzZUludChjZWxsLmRhdGFzZXQueSldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTogW3BhcnNlSW50KG5leHRDZWxsT25lLmRhdGFzZXQueCksIHBhcnNlSW50KG5leHRDZWxsT25lLmRhdGFzZXQueSldfTtcbiAgICAgICAgICAgICAgICBTaGlwRGF0YS5sZW5ndGhJbmRleCsrO1xuICAgICAgICAgICAgICAgIEF4aXNDaGFuZ2UuYXhpc1dhc0NoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBQbGFjZVNoaXBzKCk7IFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKFNoaXBEYXRhLnNoaXBMZW5ndGggPT09IDIgJiYgU2hpcERhdGEubGVuZ3RoSW5kZXggPCAxMClcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKChjZWxsLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSAmJiBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgJiYgbmV4dENlbGxUd28uY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpKSBcbiAgICAgICAgICAgIHx8IChjZWxsLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSB8fCBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgfHwgbmV4dENlbGxUd28uY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlZCcpOyBcbiAgICAgICAgICAgICAgICBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlZCcpO1xuICAgICAgICAgICAgICAgIG5leHRDZWxsVHdvLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VkJyk7XG4gICAgICAgICAgICAgICAgUGxhY2VkU2hpcHNbYHNoaXAgJHtTaGlwRGF0YS5sZW5ndGhJbmRleH1gXS5jb29yZGluYXRlcyA9IHswOiBbcGFyc2VJbnQoY2VsbC5kYXRhc2V0LngpLCBwYXJzZUludChjZWxsLmRhdGFzZXQueSldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTogW3BhcnNlSW50KG5leHRDZWxsT25lLmRhdGFzZXQueCksIHBhcnNlSW50KG5leHRDZWxsT25lLmRhdGFzZXQueSldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMjogW3BhcnNlSW50KG5leHRDZWxsVHdvLmRhdGFzZXQueCksIHBhcnNlSW50KG5leHRDZWxsVHdvLmRhdGFzZXQueSldfTtcbiAgICAgICAgICAgICAgICBTaGlwRGF0YS5sZW5ndGhJbmRleCsrO1xuICAgICAgICAgICAgICAgIEF4aXNDaGFuZ2UuYXhpc1dhc0NoYW5nZWQgPSBmYWxzZTsgXG4gICAgICAgICAgICAgICAgUGxhY2VTaGlwcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKFNoaXBEYXRhLnNoaXBMZW5ndGggPT09IDMgJiYgU2hpcERhdGEubGVuZ3RoSW5kZXggPCAxMClcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKChjZWxsLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSAmJiBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgJiYgbmV4dENlbGxUd28uY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpICYmIG5leHRDZWxsVGhyZWUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpKVxuICAgICAgICAgICAgfHwgKGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpIHx8IG5leHRDZWxsT25lLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSB8fCBuZXh0Q2VsbFRocmVlLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSAmJiBuZXh0Q2VsbFRocmVlLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlZCcpOyBcbiAgICAgICAgICAgICAgICBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlZCcpO1xuICAgICAgICAgICAgICAgIG5leHRDZWxsVHdvLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VkJyk7XG4gICAgICAgICAgICAgICAgbmV4dENlbGxUaHJlZS5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlZCcpO1xuICAgICAgICAgICAgICAgIFBsYWNlZFNoaXBzW2BzaGlwICR7U2hpcERhdGEubGVuZ3RoSW5kZXh9YF0uY29vcmRpbmF0ZXMgPSB7MDogW3BhcnNlSW50KGNlbGwuZGF0YXNldC54KSwgcGFyc2VJbnQoY2VsbC5kYXRhc2V0LnkpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDE6IFtwYXJzZUludChuZXh0Q2VsbE9uZS5kYXRhc2V0LngpLCBwYXJzZUludChuZXh0Q2VsbE9uZS5kYXRhc2V0LnkpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDI6IFtwYXJzZUludChuZXh0Q2VsbFR3by5kYXRhc2V0LngpLCBwYXJzZUludChuZXh0Q2VsbFR3by5kYXRhc2V0LnkpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDM6IFtwYXJzZUludChuZXh0Q2VsbFRocmVlLmRhdGFzZXQueCksIHBhcnNlSW50KG5leHRDZWxsVGhyZWUuZGF0YXNldC55KV19O1xuICAgICAgICAgICAgICAgIFNoaXBEYXRhLmxlbmd0aEluZGV4Kys7XG4gICAgICAgICAgICAgICAgQXhpc0NoYW5nZS5heGlzV2FzQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIFBsYWNlU2hpcHMoKTsgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIExlYXZlWSgpOiBXaWxsIGxlYXZlIGVhY2ggY2VsbCBmcm9tIHRoZSB5LWF4aXMgc2VsZWN0aW9uLlxuZnVuY3Rpb24gTGVhdmVZKGUpe1xuICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnh9XCJdW2RhdGEteT1cIiR7ZS50YXJnZXQuZGF0YXNldC55fVwiXWApO1xuICAgIGNvbnN0IG5leHRDZWxsT25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7cGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC54KSArIDF9XCJdW2RhdGEteT1cIiR7ZS50YXJnZXQuZGF0YXNldC55fVwiXWApO1xuICAgIGNvbnN0IG5leHRDZWxsVHdvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7cGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC54KSArIDJ9XCJdW2RhdGEteT1cIiR7ZS50YXJnZXQuZGF0YXNldC55fVwiXWApO1xuICAgIGNvbnN0IG5leHRDZWxsVGhyZWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LngpICsgM31cIl1bZGF0YS15PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnl9XCJdYCk7XG5cbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdob3Zlci10ZXN0JykpXG4gICAge1xuICAgICAgICBpZiAoU2hpcERhdGEuc2hpcExlbmd0aCA9PT0gIDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItdGVzdCcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKFNoaXBEYXRhLnNoaXBMZW5ndGggPT09IDEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItdGVzdCcpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAobmV4dENlbGxPbmUgIT09IG51bGwpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmV4dENlbGxPbmUuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItdGVzdCcpOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAyKVxuICAgICAgICB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgICAgIG5leHRDZWxsT25lLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTtcblxuICAgICAgICAgICAgaWYgKG5leHRDZWxsVHdvICE9PSBudWxsKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5leHRDZWxsVHdvLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTsgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoU2hpcERhdGEuc2hpcExlbmd0aCA9PT0gMylcbiAgICAgICAge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgICAgICBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgICAgICBuZXh0Q2VsbFR3by5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChuZXh0Q2VsbFRocmVlICE9PSBudWxsKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5leHRDZWxsVGhyZWUuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItdGVzdCcpOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8vIEFjdGl2YXRlR2FtZSBMaXRlcmFsIE9iamVjdDogRGF0YSBrZXlzIGZvciBhY3RpdmF0aW5nIHRoZSBnYW1lLlxuZXhwb3J0IGNvbnN0IEFjdGl2YXRlR2FtZSA9IHtcbiAgICBhY3RpdmF0ZUdhbWU6IGZhbHNlLFxuICAgIGFjdGl2YXRlUGxheWVyT25lVHVybjogdHJ1ZSwgLy8gUGxheWVyIG9uZSB3aWxsIGFsd2F5cyBnZXQgdG8gbWFrZSB0aGUgZmlyc3QgaGl0LlxufSIsIi8vIEF4aXNDaGFuZ2UgTGl0ZXJhbCBPYmplY3Q6IFdpbGwgY29udGFpbiBkYXRhIGZvciB0b2dnbGluZyB0aGUgeCBhbmQgeSBheGlzLlxuZXhwb3J0IGNvbnN0IEF4aXNDaGFuZ2UgPSB7XG4gICAgYXhpc0NoYW5nZTogbnVsbCxcbiAgICBheGlzV2FzQ2hhbmdlZDogZmFsc2UsIFxufSIsIi8vIERpc2FibGVQbGFjZW1lbnQgTGl0ZXJhbCBPYmplY3Q6IFdpbGwgc3RvcCB0aGUgcGxheWVyIGZyb20gdGhlIGNsaWNraW5nIG9uIGEgY2VsbCB3aGVuIHRoZSBzaGlwIGlzIG9mZiB0aGUgYm9hcmQuIFxuZXhwb3J0IGNvbnN0IERpc2FibGVQbGFjZW1lbnQgPSB7XG4gICAgZGlzYWJsZVBsYWNlbWVudDogZmFsc2UsXG59IiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL1NoaXBcIjtcbmltcG9ydCB7IERpc3BsYXlDb21wdXRlckdhbWVib2FyZEV2ZW50cyB9IGZyb20gXCIuLi9tb2R1bGVzL0RvbUNvbnRlbnRcIjtcbmltcG9ydCB7IFNoaXBEYXRhIH0gZnJvbSBcIi4vU2hpcERhdGFcIjtcbmltcG9ydCBleHBsb3Npb25JbWFnZSBmcm9tIFwiLi4vaW1hZ2VzL2V4cGxvc2lvbi5wbmdcIjtcblxuLy8gR2FtZWJvYXJkKCk6IEdhbWVib2FyZCBmYWN0b3J5IGZ1bmN0aW9uLlxuZXhwb3J0IGNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCBnYW1lYm9hcmQgPSBbLi4uQXJyYXkoMTApXS5tYXAoKCkgPT4gQXJyYXkoMTApLmZpbGwoXCJcIikpOyBcbiAgICBsZXQgc2hpcHNPbkJvYXJkID0gMDsgXG5cbiAgICBjb25zdCByZWNlaXZlQXR0YWNrID0gKFBsYWNlZFNoaXBzKSA9PiB7XG4gICAgICAgIGxldCB4Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIGxldCB5Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIGxldCBwbGF5ZXJPbmVDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7eENvb3JkUmFuZG9tfVwiXVtkYXRhLXk9XCIke3lDb29yZFJhbmRvbX1cIl1gKTtcbiAgICAgICAgbGV0IHNoaXBOdW0gPSAwOyBcblxuICAgICAgICAvLyBUZXN0IGlmIHRoZSBjb21wdXRlciBoYXMgYWxyZWFkeSBjaG9vc2VuIHRoZXNlIGNvb3JkaW5hdGVzLiBcbiAgICAgICAgd2hpbGUocGxheWVyT25lQ2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3BsYXllci1vbmUtc2hpcC1oaXQnKSB8fCBwbGF5ZXJPbmVDZWxsLmNsYXNzTGlzdC5jb250YWlucygnY29tcHV0ZXItaGl0LW1pc3NlZCcpKVxuICAgICAgICB7XG4gICAgICAgICAgICB4Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICB5Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7IFxuXG4gICAgICAgICAgICBwbGF5ZXJPbmVDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7eENvb3JkUmFuZG9tfVwiXVtkYXRhLXk9XCIke3lDb29yZFJhbmRvbX1cIl1gKTsgXG4gICAgICAgIH1cblxuICAgICAgICAvLyBUZXN0IGlmIHRoZSBjb29yZGluYXRlcyBjb250YWluIGFuIGVuZW15IHNoaXAuIFxuICAgICAgICBpZiAocGxheWVyT25lQ2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBQbGFjZWRTaGlwcylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzaGlwTnVtKys7IFxuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgY29vcmQgaW4gUGxhY2VkU2hpcHNba2V5XS5jb29yZGluYXRlcylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChQbGFjZWRTaGlwc1trZXldLmNvb3JkaW5hdGVzW2Nvb3JkXVswXSA9PT0geENvb3JkUmFuZG9tICYmIFBsYWNlZFNoaXBzW2tleV0uY29vcmRpbmF0ZXNbY29vcmRdWzFdID09PSB5Q29vcmRSYW5kb20pXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFBsYWNlZFNoaXBzW2tleV0uaGl0cyArPSAxOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzaGlwU3VuayA9IFBsYWNlZFNoaXBzW2tleV0uaGl0KFBsYWNlZFNoaXBzW2tleV0uaGl0cywgUGxhY2VkU2hpcHNba2V5XS5sZW5ndGgpOyAvLyBhZGRzIGEgaGl0IHRvIHRoZSBzaGlwLiBcblxuICAgICAgICAgICAgICAgICAgICAgICAgRGlzcGxheUNvbXB1dGVyR2FtZWJvYXJkRXZlbnRzKDEsIGZhbHNlLCBzaGlwTnVtKTsgXG4gICAgICAgICAgICAgICAgICAgICAgICBQbGFjZWRTaGlwc1trZXldLmlzU3VuayhzaGlwU3Vuaywgc2hpcE51bSk7IC8vIENoZWNrcyBpZiB0aGUgc2hpcCBoYXMgc3Vuay5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgdHJ1ZSBjaGFuZ2UgdGhlIHN1bmsgc3RhdHVzIHRvIHRydWUuICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaGlwU3VuaylcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQbGFjZWRTaGlwc1trZXldLnN1bmsgPSBzaGlwU3VuazsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2hpcERhdGEuc2hpcHNQbGFjZWQtLTsgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4cGxvc2lvbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhwbG9zaW9uSW1nLnNyYyA9IGV4cGxvc2lvbkltYWdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyT25lQ2VsbC5hcHBlbmRDaGlsZChleHBsb3Npb25JbWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyT25lQ2VsbC5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItb25lLXNoaXAtaGl0Jyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBjb21wdXRlckhpdE1pc3NlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29tcHV0ZXJIaXRNaXNzZWQudGV4dENvbnRlbnQgPSBcIk1cIjsgXG4gICAgICAgICAgICBwbGF5ZXJPbmVDZWxsLmNsYXNzTGlzdC5hZGQoJ2NvbXB1dGVyLWhpdC1taXNzZWQnKTtcbiAgICAgICAgICAgIHBsYXllck9uZUNlbGwuYXBwZW5kQ2hpbGQoY29tcHV0ZXJIaXRNaXNzZWQpOyBcbiAgICAgICAgICAgIERpc3BsYXlDb21wdXRlckdhbWVib2FyZEV2ZW50cygwKTsgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge2dhbWVib2FyZCwgc2hpcHNPbkJvYXJkLCByZWNlaXZlQXR0YWNrLCBTaGlwfTtcbn0iLCIvLyBOZXdHYW1lU2VsZWN0ZWQoKTogVG9nZ2xlcyB0cnVlIGlmIHRoZSBuZXcgYnV0dG9uIHdhcyBjbGlja2VkLiBcbmV4cG9ydCBjb25zdCBOZXdHYW1lU2VsZWN0ZWQgPSAoKCkgPT4ge1xuICAgIGxldCBuZXdHYW1lU2VsZWN0ZWQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHtuZXdHYW1lU2VsZWN0ZWR9O1xufSkoKTsiLCJpbXBvcnQgeyBEaXNwbGF5Q29tcHV0ZXJHYW1lYm9hcmRFdmVudHMgfSBmcm9tIFwiLi4vbW9kdWxlcy9Eb21Db250ZW50XCI7XG5cbi8vIFNoaXAoKTogU2hpcCBmYWN0b3J5IGZ1bmN0aW9uLiBcbmV4cG9ydCBjb25zdCBTaGlwID0gKCkgPT4ge1xuICAgIGxldCBkZWZhdWx0TGVuZ3RocyA9IFswLCAwLCAwLCAwLCAxLCAxLCAxLCAyLCAyLCAzXTsgXG4gICAgbGV0IGxlbmd0aCA9IG51bGw7XG4gICAgbGV0IGhpdHMgPSAwO1xuICAgIGxldCBzdW5rID0gZmFsc2U7IFxuXG4gICAgLy8gaGl0KCk6IFdpbGwgZ2F0aGVyIHRoZSBhbW91bnQgb2YgaGl0cyB0aGUgc2hpcCB3aWxsIGdldC5cbiAgICBjb25zdCBoaXQgPSAoaXNIaXQsIHNoaXBMZW5ndGgpID0+IHtcblxuICAgICAgICBpZiAoaXNIaXQgPT09IHNoaXBMZW5ndGgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlOyBcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsOyBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlzU3VuaygpOiBXaWxsIGRldGVybWluZSBpZiB0aGUgc2hpcCBoYXMgc3Vuay4gXG4gICAgY29uc3QgaXNTdW5rID0gKHNoaXBTdW5rLCBzaGlwTnVtKSA9PiB7XG4gICAgICAgIERpc3BsYXlDb21wdXRlckdhbWVib2FyZEV2ZW50cyhudWxsLCBzaGlwU3Vuaywgc2hpcE51bSk7IFxuICAgIH1cblxuICAgIHJldHVybiB7aGl0LCBpc1N1bmssIGRlZmF1bHRMZW5ndGhzLCBsZW5ndGgsIGhpdHMsIHN1bmt9O1xufVxuIiwiLy8gU2hpcERhdGEgTGl0ZXJhbCBPYmplY3Q6IFdpbGwgY29udGFpbiBzaGlwIGRhdGEgdG8gY29udHJvbCB0aGUgZmxvdyBvZiBzaGlwcyBvbiB0aGUgZ2FtZWJvYXJkLiBcbmV4cG9ydCBjb25zdCBTaGlwRGF0YSA9IHtcbiAgICBsZW5ndGhJbmRleDogMCxcbiAgICBzaGlwc1BsYWNlZDogMCxcbiAgICBzaGlwTGVuZ3RoOiAwLFxufSIsIi8vIFBsYWNlZFNoaXBzIExpdGVyYWwgT2JqZWN0OiBEYXRhIGZvciBhbGwgc2hpcHMgcGxhY2VkIG9uIHRoZSBnYW1lYm9hcmQgYnkgcGxheWVyIG9uZS4gXG5leHBvcnQgbGV0IFBsYWNlZFNoaXBzID0ge1xufVxuXG4vLyBDb21wdXRlclBsYWNlZFNoaXBzIExpdGVyYWwgT2JqZWN0OiBEYXRhIGZvciBhbGwgc2hpcHMgcGxhY2VkIG9uIHRoZSBnYW1lYm9hcmQgYnkgdGhlIGNvbXB1dGVyLlxuZXhwb3J0IGxldCBDb21wdXRlclBsYWNlZFNoaXBzID0ge1xufVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvY29tZm9ydGFhL0NvbWZvcnRhYS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udHMvcGxheV9wcmV0ZW5kL1BsYXkgUHJldGVuZC5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBib2R5IC0gVGhlIG1haW4gYm9keSBmb3IgdGhlIGVudGlyZSBhcHBsaWNhdGlvbi4gKi9cbmJvZHl7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7IFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzQzZTk3YiAwJSwgIzM4ZjlkNyAxMDAlKTtcbn1cblxuLyogKiAtIEFsbCB0aGUgZWxlbWVudHMgaW4gdGhlIGFwcGxpY2F0aW9uLiAqL1xuKntcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyBcbn1cblxuLyogRm9udHMgKi9cbi8qIGZvbnQtMCAtIENvbWZvcnRhYSAqL1xuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IGNvbWZvcnRhYTtcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuLyogZm9udC0xIFBsYXkgUHJldGVuZCAqL1xuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IHBsYXktcHJldGVuZDtcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbn0gXG5cbi8qIG1vYmlsZS1hdmFpbGFiaWxpdHkgLSBEaXNwbGF5cyBub3QgYXZhaWxhYmlsaXR5IGZvciBtb2JpbGUgb3IgdGFibGV0IGRldmljZXMuICovXG4jbW9iaWxlLWF2YWlsYWJpbGl0eXtcbiAgICBkaXNwbGF5OiBub25lOyBcbn1cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyogfFRlc3RpbmcgQXJlYSBJZGVudGlmaWVycyBhbmQgQ29tcG9uZW50c3wgKi9cbiNjb250ZW50ID4gZGl2ID4gYnV0dG9ue1xuICAgIHBhZGRpbmc6IDEwcHggNXB4IDEwcHggNXB4O1xuICAgIGZvbnQtZmFtaWx5Om1vbm9zcGFjZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Y29yYWw7IFxuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNjb250ZW50ID4gZGl2ID4gYnV0dG9uOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGJsdWU7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyogfE1haW4gQ29udGVudCBTZWN0aW9ufCAqL1xuI2NvbnRlbnR7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xuICAgIHBhZGRpbmc6IDEwcHg7IFxufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIHxHYW1lYm9hcmQgQ29udGFpbmVyfCAqL1xuLmdhbWVib2FyZC1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG5cbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHdpZHRoOiAxMjAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi8qIFBsYXllciBPbmUgQm9hcmQgKi9cbi5wbGF5ZXItb25lLWJvYXJke1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5wbGF5ZXItb25lLWJvYXJkID4gZGl2eyAvKiByb3dzICovXG4gICAgZGlzcGxheTogZmxleDtcbn1cbi5wbGF5ZXItb25lLWJvYXJkID4gZGl2ID4gZGl2eyAvKiBjZWxscyAqL1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjMjQxMGM7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucGxheWVyLW9uZS1ib2FyZCA+IGRpdiA+IGRpdiA+IGRpdnsgLyogTWlzc2VkIEhpdCBDb250YWluZXIgKi9cbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjZDk0NmVmO1xufVxuXG4vKiBDb21wdXRlciBHYW1lYm9hcmQgKi9cbi5jb21wdXRlci1nYW1lYm9hcmR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmNvbXB1dGVyLWdhbWVib2FyZCA+IGRpdnsgLyogUm93cyAqL1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG4uY29tcHV0ZXItZ2FtZWJvYXJkID4gZGl2ID4gZGl2eyAvKiBjZWxscyAqL1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JlZW47XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHdpZHRoOiA0MHB4OyBcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBob3Zlci10ZXN0ICovXG4uaG92ZXItdGVzdHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNjM2NmYxICFpbXBvcnRhbnQ7XG59XG5cbi8qIHNoaXAtcGxhY2VkIC0gRGlzcGxheXMgZWFjaCBzaGlwIHBsYWNlZCBvbiB0aGUgYm9hcmQuICovXG4uc2hpcC1wbGFjZWR7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzYzNjZmMSAhaW1wb3J0YW50O1xufVxuXG4vKiBjb21wdXRlci1zaGlwLXBsYWNlZCAtIERpc3BsYXlzIGVhY2ggc2hpcCB0aGF0IHRoZSBjb21wdXRlciBwbGFjZXMgb24gdGhlaXIgYm9hcmQuICovXG4uY29tcHV0ZXItc2hpcC1wbGFjZWR7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmVlbiAhaW1wb3J0YW50O1xufVxuXG4vKiBjb21wdXRlci1zaGlwLWhpdCAtIEluZGljYXRlcyB0aGF0IGNvbXB1dGVyIHNoaXAgaGFzIGJlZW4gaGl0LiAqL1xuLmNvbXB1dGVyLXNoaXAtaGl0ID4gaW1nW3NyY117XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlOyBcbn1cblxuLyogcGxheWVyLW9uZS1zaGlwLWhpdCAtIEluZGljYXRlcyB0aGF0IHRoZSBwbGF5ZXIgb25lIHNoaXAgaGFzIGJlZW4gaGl0LiAqL1xuLnBsYXllci1vbmUtc2hpcC1oaXQgPiBpbWdbc3JjXXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyogfEludGVmYWNlIFNlY3Rpb258ICovXG4uaW50ZXJmYWNle1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbn1cbi5pbnRlcmZhY2UgPiBidXR0b257IC8qIE5ldyBCdXR0b24gKi9cbiAgICBmb250LWZhbWlseTogY29tZm9ydGFhLCBzeXN0ZW0tdWksIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcbiAgICBmb250LXdlaWdodDogYm9sZDsgXG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjsgXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTsgXG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzOGY5ZDYwMDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4uaW50ZXJmYWNlID4gYnV0dG9uOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6I2EzZTYzNTtcbn1cblxuLmludGVyZmFjZSA+IGRpdjpudGgtY2hpbGQoMil7IC8qIHggYW5kIHkgY29vcmRpbmF0ZSBjb250YWluZXIuICovXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEwcHg7XG59XG4uaW50ZXJmYWNlID4gZGl2Om50aC1jaGlsZCgyKSA+IGJ1dHRvbnsgLyogeCBhbmQgeSBjb29yZGluYXRlIGJ1dHRvbnMuICovIFxuICAgIGZvbnQtZmFtaWx5OiBjb21mb3J0YWEsIHN5c3RlbS11aSwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBwYWRkaW5nOiAxcHggMTVweCAxcHggMTVweDsgXG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyBcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IFxuICAgIGJhY2tncm91bmQtY29sb3I6IzM4ZjlkNjAwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi5pbnRlcmZhY2UgPiBkaXY6bnRoLWNoaWxkKDIpID4gYnV0dG9uOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNhM2U2MzU7XG59XG5cbi5pbnRlcmZhY2UgPiBkaXY6bnRoLWNoaWxkKDMpeyAvKiBOdW1iZXIgb2Ygc2hpcHMgb24gdGhlIHBsYXllciBib2FyZC4gKi9cbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZm9udC1mYW1pbHk6IGNvbWZvcnRhYSwgc3lzdGVtLXVpLCBcIlNlZ29lIFVJXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XG4gICAgY29sb3I6IHdoaXRlOyBcbn1cblxuLyogY3VycmVudC1jb29yZGluYXRlIC0gVGhlIGN1cnJlbnQgY29vcmRpbmF0ZSBjaG9vc2VuIGJ5IHRoZSB1c2VyLiAqL1xuLmN1cnJlbnQtY29vcmRpbmF0ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTNlNjM1ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2EzZTYzNSAhaW1wb3J0YW50OyBcbn1cblxuLyogY29tbWVuY2UtYXR0YWNrIC0gTGV0cyB0aGUgcGxheWVyIGtub3cgdGhhdCB0aGV5IGNhbiBiZWdpbiBhdHRhY2tpbmcgdGhlIGNvbXB1dGVyIGdhbWVib2FyZCBzaGlwcy4gKi9cbi5jb21tZW5jZS1hdHRhY2t7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZm9udC1mYW1pbHk6IGNvbWZvcnRhYSwgc3lzdGVtLXVpLCBcIlNlZ29lIFVJXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XG4gICAgY29sb3I6IHdoaXRlOyBcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiB8R2FtZWJvYXJkIEV2ZW50cyBTZWN0aW9ufCAqL1xuLyogcGxheWVyLWdhbWVib2FyZC1ldmVudHMgLSBBbGwgdGhlIHBsYXllciBnYW1lYm9hcmQgZXZlbnRzLiAqL1xuI3BsYXllci1nYW1lYm9hcmQtZXZlbnRze1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LWZhbWlseTogY29tZm9ydGFhLCBzeXN0ZW0tdWksIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcbiAgICBjb2xvcjogd2hpdGU7IFxufVxuI3BsYXllci1nYW1lYm9hcmQtZXZlbnRzID4gcHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7IFxufVxuXG4vKiBjb21wdXRlci1nYW1lYm9hcmQtZXZlbnRzIC0gQWxsIHRoZSBjb21wdXRlciBnYW1lYm9hcmQgZXZlbnRzLiAqL1xuI2NvbXB1dGVyLWdhbWVib2FyZC1ldmVudHN7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gICAgZm9udC1zaXplOiAyMHB4OyBcbiAgICBmb250LWZhbWlseTogY29tZm9ydGFhLCBzeXN0ZW0tdWksIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4jY29tcHV0ZXItZ2FtZWJvYXJkLWV2ZW50cyA+IHB7XG4gICAgZGlzcGxheTogaW5saW5lOyAgXG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyogfEFwcGxpY2F0aW9uIFRpdGxlfCAqL1xuI2FwcGxpY2F0aW9uLXRpdGxle1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogcGxheS1wcmV0ZW5kLCBzeXN0ZW0tdWksIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcbiAgICBmb250LXNpemU6IDYwcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgICBjb2xvcjogI2UyZThmMDtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIHxNb2JpbGUgU2VjdGlvbnwgKi9cbi8qIG1lZGlhLTAgLSBXaWxsIGRpc3BsYXkgdGhhdCBtb2JpbGUgYW5kIG1pbmltaXphdGlvbiBkb2Vzbid0IGV4aXN0LiovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweClcbntcbiAgICAjYXBwbGljYXRpb24tdGl0bGV7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgICNtb2JpbGUtYXZhaWxhYmlsaXR5e1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICBmb250LXNpemU6IDE5cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBjb21mb3J0YWEsIHN5c3RlbS11aSwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgI2NvbnRlbnR7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgI2NvbXB1dGVyLWdhbWVib2FyZC1ldmVudHN7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgI3BsYXllci1nYW1lYm9hcmQtZXZlbnRze1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEscURBQXFEO0FBQ3JEO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCwrREFBK0Q7QUFDbkU7O0FBRUEsNkNBQTZDO0FBQzdDO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBLFVBQVU7QUFDVix1QkFBdUI7QUFDdkI7SUFDSSxzQkFBc0I7SUFDdEIsNENBQW1EO0FBQ3ZEOztBQUVBLHdCQUF3QjtBQUN4QjtJQUNJLHlCQUF5QjtJQUN6Qiw0Q0FBa0Q7QUFDdEQ7O0FBRUEsa0ZBQWtGO0FBQ2xGO0lBQ0ksYUFBYTtBQUNqQjtBQUNBLDRLQUE0SztBQUM1Syw0S0FBNEs7QUFDNUssOENBQThDO0FBQzlDO0lBQ0ksMEJBQTBCO0lBQzFCLHFCQUFx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QTtJQUNJLGVBQWU7QUFDbkI7O0FBRUEsNEtBQTRLO0FBQzVLLDRLQUE0SztBQUM1Syx3QkFBd0I7QUFDeEI7SUFDSSxrQkFBa0I7SUFDbEIsZ0pBQWdKO0lBQ2hKLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQSw0S0FBNEs7QUFDNUssNEtBQTRLO0FBQzVLLHFCQUFxQjtBQUNyQixzRUFBc0U7QUFDdEU7O0lBRUk7UUFDSSxlQUFlO1FBQ2Ysa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksY0FBYztRQUNkLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsZUFBZTtRQUNmLDZJQUE2STtRQUM3SSxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogYm9keSAtIFRoZSBtYWluIGJvZHkgZm9yIHRoZSBlbnRpcmUgYXBwbGljYXRpb24uICovXFxuYm9keXtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwOyBcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNDNlOTdiIDAlLCAjMzhmOWQ3IDEwMCUpO1xcbn1cXG5cXG4vKiAqIC0gQWxsIHRoZSBlbGVtZW50cyBpbiB0aGUgYXBwbGljYXRpb24uICovXFxuKntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgXFxufVxcblxcbi8qIEZvbnRzICovXFxuLyogZm9udC0wIC0gQ29tZm9ydGFhICovXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBjb21mb3J0YWE7XFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL2NvbWZvcnRhYS9Db21mb3J0YWEtUmVndWxhci50dGYnKTtcXG59XFxuXFxuLyogZm9udC0xIFBsYXkgUHJldGVuZCAqL1xcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogcGxheS1wcmV0ZW5kO1xcbiAgICBzcmM6IHVybCgnLi9mb250cy9wbGF5X3ByZXRlbmQvUGxheVxcXFwgUHJldGVuZC5vdGYnKTtcXG59IFxcblxcbi8qIG1vYmlsZS1hdmFpbGFiaWxpdHkgLSBEaXNwbGF5cyBub3QgYXZhaWxhYmlsaXR5IGZvciBtb2JpbGUgb3IgdGFibGV0IGRldmljZXMuICovXFxuI21vYmlsZS1hdmFpbGFiaWxpdHl7XFxuICAgIGRpc3BsYXk6IG5vbmU7IFxcbn1cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyogfFRlc3RpbmcgQXJlYSBJZGVudGlmaWVycyBhbmQgQ29tcG9uZW50c3wgKi9cXG4jY29udGVudCA+IGRpdiA+IGJ1dHRvbntcXG4gICAgcGFkZGluZzogMTBweCA1cHggMTBweCA1cHg7XFxuICAgIGZvbnQtZmFtaWx5Om1vbm9zcGFjZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRjb3JhbDsgXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI2NvbnRlbnQgPiBkaXYgPiBidXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRibHVlO1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyogfE1haW4gQ29udGVudCBTZWN0aW9ufCAqL1xcbiNjb250ZW50e1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxuICAgIHBhZGRpbmc6IDEwcHg7IFxcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyogfEdhbWVib2FyZCBDb250YWluZXJ8ICovXFxuLmdhbWVib2FyZC1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHdpZHRoOiAxMjAwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4vKiBQbGF5ZXIgT25lIEJvYXJkICovXFxuLnBsYXllci1vbmUtYm9hcmR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5wbGF5ZXItb25lLWJvYXJkID4gZGl2eyAvKiByb3dzICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5wbGF5ZXItb25lLWJvYXJkID4gZGl2ID4gZGl2eyAvKiBjZWxscyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2MyNDEwYztcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5wbGF5ZXItb25lLWJvYXJkID4gZGl2ID4gZGl2ID4gZGl2eyAvKiBNaXNzZWQgSGl0IENvbnRhaW5lciAqL1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgY29sb3I6ICNkOTQ2ZWY7XFxufVxcblxcbi8qIENvbXB1dGVyIEdhbWVib2FyZCAqL1xcbi5jb21wdXRlci1nYW1lYm9hcmR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXZ7IC8qIFJvd3MgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuLmNvbXB1dGVyLWdhbWVib2FyZCA+IGRpdiA+IGRpdnsgLyogY2VsbHMgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JlZW47XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgd2lkdGg6IDQwcHg7IFxcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogaG92ZXItdGVzdCAqL1xcbi5ob3Zlci10ZXN0e1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNjM2NmYxICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIHNoaXAtcGxhY2VkIC0gRGlzcGxheXMgZWFjaCBzaGlwIHBsYWNlZCBvbiB0aGUgYm9hcmQuICovXFxuLnNoaXAtcGxhY2Vke1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNjM2NmYxICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIGNvbXB1dGVyLXNoaXAtcGxhY2VkIC0gRGlzcGxheXMgZWFjaCBzaGlwIHRoYXQgdGhlIGNvbXB1dGVyIHBsYWNlcyBvbiB0aGVpciBib2FyZC4gKi9cXG4uY29tcHV0ZXItc2hpcC1wbGFjZWR7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JlZW4gIWltcG9ydGFudDtcXG59XFxuXFxuLyogY29tcHV0ZXItc2hpcC1oaXQgLSBJbmRpY2F0ZXMgdGhhdCBjb21wdXRlciBzaGlwIGhhcyBiZWVuIGhpdC4gKi9cXG4uY29tcHV0ZXItc2hpcC1oaXQgPiBpbWdbc3JjXXtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTsgXFxufVxcblxcbi8qIHBsYXllci1vbmUtc2hpcC1oaXQgLSBJbmRpY2F0ZXMgdGhhdCB0aGUgcGxheWVyIG9uZSBzaGlwIGhhcyBiZWVuIGhpdC4gKi9cXG4ucGxheWVyLW9uZS1zaGlwLWhpdCA+IGltZ1tzcmNde1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyogfEludGVmYWNlIFNlY3Rpb258ICovXFxuLmludGVyZmFjZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG4uaW50ZXJmYWNlID4gYnV0dG9ueyAvKiBOZXcgQnV0dG9uICovXFxuICAgIGZvbnQtZmFtaWx5OiBjb21mb3J0YWEsIHN5c3RlbS11aSwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7IFxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzOGY5ZDYwMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4uaW50ZXJmYWNlID4gYnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNhM2U2MzU7XFxufVxcblxcbi5pbnRlcmZhY2UgPiBkaXY6bnRoLWNoaWxkKDIpeyAvKiB4IGFuZCB5IGNvb3JkaW5hdGUgY29udGFpbmVyLiAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcbi5pbnRlcmZhY2UgPiBkaXY6bnRoLWNoaWxkKDIpID4gYnV0dG9ueyAvKiB4IGFuZCB5IGNvb3JkaW5hdGUgYnV0dG9ucy4gKi8gXFxuICAgIGZvbnQtZmFtaWx5OiBjb21mb3J0YWEsIHN5c3RlbS11aSwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgcGFkZGluZzogMXB4IDE1cHggMXB4IDE1cHg7IFxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7IFxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMzhmOWQ2MDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmludGVyZmFjZSA+IGRpdjpudGgtY2hpbGQoMikgPiBidXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhM2U2MzU7XFxufVxcblxcbi5pbnRlcmZhY2UgPiBkaXY6bnRoLWNoaWxkKDMpeyAvKiBOdW1iZXIgb2Ygc2hpcHMgb24gdGhlIHBsYXllciBib2FyZC4gKi9cXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBmb250LWZhbWlseTogY29tZm9ydGFhLCBzeXN0ZW0tdWksIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxuICAgIGNvbG9yOiB3aGl0ZTsgXFxufVxcblxcbi8qIGN1cnJlbnQtY29vcmRpbmF0ZSAtIFRoZSBjdXJyZW50IGNvb3JkaW5hdGUgY2hvb3NlbiBieSB0aGUgdXNlci4gKi9cXG4uY3VycmVudC1jb29yZGluYXRle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTNlNjM1ICFpbXBvcnRhbnQ7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhM2U2MzUgIWltcG9ydGFudDsgXFxufVxcblxcbi8qIGNvbW1lbmNlLWF0dGFjayAtIExldHMgdGhlIHBsYXllciBrbm93IHRoYXQgdGhleSBjYW4gYmVnaW4gYXR0YWNraW5nIHRoZSBjb21wdXRlciBnYW1lYm9hcmQgc2hpcHMuICovXFxuLmNvbW1lbmNlLWF0dGFja3tcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZm9udC1mYW1pbHk6IGNvbWZvcnRhYSwgc3lzdGVtLXVpLCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiO1xcbiAgICBjb2xvcjogd2hpdGU7IFxcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyogfEdhbWVib2FyZCBFdmVudHMgU2VjdGlvbnwgKi9cXG4vKiBwbGF5ZXItZ2FtZWJvYXJkLWV2ZW50cyAtIEFsbCB0aGUgcGxheWVyIGdhbWVib2FyZCBldmVudHMuICovXFxuI3BsYXllci1nYW1lYm9hcmQtZXZlbnRze1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBjb21mb3J0YWEsIHN5c3RlbS11aSwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXG4gICAgY29sb3I6IHdoaXRlOyBcXG59XFxuI3BsYXllci1nYW1lYm9hcmQtZXZlbnRzID4gcHtcXG4gICAgZGlzcGxheTogaW5saW5lOyBcXG59XFxuXFxuLyogY29tcHV0ZXItZ2FtZWJvYXJkLWV2ZW50cyAtIEFsbCB0aGUgY29tcHV0ZXIgZ2FtZWJvYXJkIGV2ZW50cy4gKi9cXG4jY29tcHV0ZXItZ2FtZWJvYXJkLWV2ZW50c3tcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcXG4gICAgZm9udC1zaXplOiAyMHB4OyBcXG4gICAgZm9udC1mYW1pbHk6IGNvbWZvcnRhYSwgc3lzdGVtLXVpLCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbiNjb21wdXRlci1nYW1lYm9hcmQtZXZlbnRzID4gcHtcXG4gICAgZGlzcGxheTogaW5saW5lOyAgXFxufVxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKiB8QXBwbGljYXRpb24gVGl0bGV8ICovXFxuI2FwcGxpY2F0aW9uLXRpdGxle1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBwbGF5LXByZXRlbmQsIHN5c3RlbS11aSwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXG4gICAgZm9udC1zaXplOiA2MHB4O1xcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xcbiAgICBjb2xvcjogI2UyZThmMDtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qIHxNb2JpbGUgU2VjdGlvbnwgKi9cXG4vKiBtZWRpYS0wIC0gV2lsbCBkaXNwbGF5IHRoYXQgbW9iaWxlIGFuZCBtaW5pbWl6YXRpb24gZG9lc24ndCBleGlzdC4qL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KVxcbntcXG4gICAgI2FwcGxpY2F0aW9uLXRpdGxle1xcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgICNtb2JpbGUtYXZhaWxhYmlsaXR5e1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICAgICAgZm9udC1zaXplOiAxOXB4O1xcbiAgICAgICAgZm9udC1mYW1pbHk6IGNvbWZvcnRhYSwgc3lzdGVtLXVpLCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiO1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICB9XFxuXFxuICAgICNjb250ZW50e1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAjY29tcHV0ZXItZ2FtZWJvYXJkLWV2ZW50c3tcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgI3BsYXllci1nYW1lYm9hcmQtZXZlbnRze1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgSW5pdGlhbGl6ZURPTSB9IGZyb20gXCIuL21vZHVsZXMvRG9tQ29udGVudFwiO1xuXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5Jbml0aWFsaXplRE9NKCk7Il0sIm5hbWVzIjpbIkdhbWVib2FyZCIsIk5ld0dhbWVTZWxlY3RlZCIsIlNoaXBEYXRhIiwiQXhpc0NoYW5nZSIsIkFjdGl2YXRlR2FtZSIsIkRpc2FibGVQbGFjZW1lbnQiLCJQbGFjZWRTaGlwcyIsIkNvbXB1dGVyUGxhY2VkU2hpcHMiLCJ3YXRlckV4cGxvc2lvbiIsImV4cGxvc2lvbkltYWdlIiwiSW5pdGlhbGl6ZURPTSIsIkdhbWVib2FyZERPTSIsIkludGVyZmFjZURPTSIsIlBsYXllck9uZURPTSIsIkNvbXB1dGVyRE9NIiwiRGlzcGxheVBsYXllck9uZUdhbWVib2FyZEV2ZW50cyIsIkRpc3BsYXlDb21wdXRlckdhbWVib2FyZEV2ZW50cyIsImJvYXJkU3RhdHVzIiwiY29vcmRzIiwic3Vua1N0YXR1cyIsInNoaXBTdW5rTXNzZyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb25jYXQiLCJkYXRhc2V0IiwieCIsInkiLCJhcHBlbmRDaGlsZCIsInNoaXBOdW0iLCJOdW1iZXJPZlNoaXBzUGxhY2VkIiwibnVtYmVyT2ZTaGlwc1BsYWNlZCIsInF1ZXJ5U2VsZWN0b3IiLCJsZW5ndGhJbmRleCIsInNoaXBzUGxhY2VkIiwiYWN0aXZhdGVHYW1lIiwiY29udGVudCIsImdhbWVib2FyZENvbnRhaW5lciIsImNsYXNzTGlzdCIsImFkZCIsInBsYXllck9uZUJvYXJkIiwicGxheWVyT25lIiwiaSIsImdhbWVib2FyZCIsImxlbmd0aCIsInJvdyIsImoiLCJjZWxsIiwiY29tcHV0ZXIiLCJjb21wdXRlckJvYXJkIiwiY29tcHV0ZXJSb3ciLCJjb21wdXRlckNlbGwiLCJQbGFjZVNoaXBzIiwiZSIsImNlbGxzIiwicXVlcnlTZWxlY3RvckFsbCIsInhDb29yZCIsInlDb29yZCIsImNvbW1lbmNlQXR0YWNrIiwiYXhpc1dhc0NoYW5nZWQiLCJib2FyZCIsInNoaXAiLCJTaGlwIiwic2hpcExlbmd0aCIsImRlZmF1bHRMZW5ndGhzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkVudGVyWCIsIkxlYXZlWCIsIkVudGVyWSIsIkxlYXZlWSIsIlBsYWNlT25YIiwiUGxhY2VPblkiLCJyZW1vdmUiLCJDaGFuZ2VUb1hBeGlzIiwiQ2hhbmdlVG9ZQXhpcyIsIkdhbWVJbml0aWF0ZWQiLCJheGlzQ2hhbmdlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbXB1dGVyQ2VsbHMiLCJQbGF5ZXJPbmVXaW5zIiwiQ29tcHV0ZXJXaW5zIiwiZm9yRWFjaCIsIlBsYXllck9uZVR1cm4iLCJhY3RpdmF0ZVBsYXllck9uZVR1cm4iLCJDb21wdXRlclR1cm4iLCJ0b3RhbENvbXB1dGVyU2hpcHNTdW5rIiwia2V5Iiwic3VuayIsIm5ld0dhbWVTZWxlY3RlZCIsInRvdGFsUGxheWVyU2hpcHNTdW5rIiwidGFyZ2V0IiwiZXhwbG9zaW9uIiwiQXVkaW8iLCJjb21wdXRlclNoaXBJbmRleCIsInNoaXBOdW1iZXJTdW5rIiwic2hpcFN1bmsiLCJ1bmRlZmluZWQiLCJjb250YWlucyIsImNvb3JkIiwiY29vcmRpbmF0ZXMiLCJwYXJzZUludCIsImhpdHMiLCJleHBsb3Npb25JbWciLCJzcmMiLCJwbGF5IiwiaGFzQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwicmVjZWl2ZUF0dGFjayIsIkNvbXB1dGVyUGxhY2VTaGlwcyIsImNvbXB1dGVyUm93cyIsImNvbXB1dGVyU2hpcHMiLCJpbmRleCIsImNvbXB1dGVyU2hpcFBsYWNlZCIsInhDb29yZFJhbmRvbSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInlDb29yZFJhbmRvbSIsImF4aXNSYW5kb20iLCJ4TGVuZ3RoT25lIiwieExlbmd0aFR3byIsInhMZW5ndGhUaHJlZSIsInlMZW5ndGhPbmUiLCJ5TGVuZ3RoVHdvIiwieUxlbmd0aFRocmVlIiwiX2xvb3AiLCJjb29yZGluYXRlSW5kZXgiLCJjb29yZGluYXRlc05vdE92ZXJsYXBwaW5nIiwiY29tcHV0ZXJDZWxsT25lIiwiX2xvb3AyIiwiY29tcHV0ZXJDZWxsVHdvIiwiX2xvb3AzIiwiY29tcHV0ZXJDZWxsVGhyZWUiLCJwbGF5ZXJJbnRlcmZhY2UiLCJuZXdHYW1lIiwiY29vcmRpbmF0ZUNvbnRhaW5lciIsIk5ld0dhbWUiLCJkaXNhYmxlUGxhY2VtZW50IiwicmVtb3ZlQXR0cmlidXRlIiwicmVwbGFjZUNoaWxkcmVuIiwibmV4dENlbGxPbmUiLCJuZXh0Q2VsbFR3byIsIm5leHRDZWxsVGhyZWUiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJBcnJheSIsIm1hcCIsImZpbGwiLCJzaGlwc09uQm9hcmQiLCJwbGF5ZXJPbmVDZWxsIiwiaGl0IiwiaXNTdW5rIiwiY29tcHV0ZXJIaXRNaXNzZWQiLCJpc0hpdCJdLCJzb3VyY2VSb290IjoiIn0=