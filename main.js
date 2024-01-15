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
  var commenceAttack = document.querySelector('.interface > div:nth-child(4)');
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
      xCoord.removeEventListener('click', ChangeToXAxis);
      yCoord.removeEventListener('click', ChangeToYAxis);
      _utils_ActivateGame__WEBPACK_IMPORTED_MODULE_4__.ActivateGame.activateGame = true;
      commenceAttack.classList.add('commence-attack');
      commenceAttack.textContent = "Commence Attack!";
      console.log("Game Activated: ", _utils_ActivateGame__WEBPACK_IMPORTED_MODULE_4__.ActivateGame.activateGame); // Testing
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
  var totalComputerShipsSunk = 0;
  var totalPlayerShipsSunk = 0;
  NumberOfShipsPlaced();

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
  if (totalComputerShipsSunk === 10) {
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
  } else if (totalPlayerShipsSunk === 10) {
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
      _utils_ActivateGame__WEBPACK_IMPORTED_MODULE_4__.ActivateGame.activatePlayerOneTurn = false;
    } else if (!computerCell.hasAttribute('style')) {
      computerCell.setAttribute('style', 'background-color:#bef264;');
      DisplayPlayerOneGameboardEvents(0, computerCell, shipSunk, null);
      _utils_ActivateGame__WEBPACK_IMPORTED_MODULE_4__.ActivateGame.activatePlayerOneTurn = false;
    } else if (computerCell.classList.contains('computer-ship-hit') || computerCell.hasAttribute('style')) {
      return;
    }
  }

  // ActivateGame.activatePlayerOneTurn = false;
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
      // computerCell.setAttribute('style', 'background-color: purple;');
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
      // computerCell.setAttribute('style', 'background-color: red;'); // Testing

      var computerCellOne = document.querySelector(".computer-gameboard > div > div[data-x=\"".concat(xCoordRandom + xLengthOne, "\"][data-y=\"").concat(yCoordRandom + yLengthOne, "\"]"));
      computerCellOne.classList.add('computer-ship-placed');
      // computerCellOne.setAttribute('style', 'background-color: red;'); // Testing 

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
      // computerCell.setAttribute('style', 'background-color: green;'); 

      var _computerCellOne = document.querySelector(".computer-gameboard > div > div[data-x=\"".concat(xCoordRandom + xLengthOne, "\"][data-y=\"").concat(yCoordRandom + yLengthOne, "\"]"));
      _computerCellOne.classList.add('computer-ship-placed');
      // computerCellOne.setAttribute('style', 'background-color: green;');

      var computerCellTwo = document.querySelector(".computer-gameboard > div > div[data-x=\"".concat(xCoordRandom + xLengthTwo, "\"][data-y=\"").concat(yCoordRandom + yLengthTwo, "\"]"));
      computerCellTwo.classList.add('computer-ship-placed');
      // computerCellTwo.setAttribute('style', 'background-color: green;'); 
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
      // computerCell.setAttribute('style', 'background-color: orange;');

      var _computerCellOne2 = document.querySelector(".computer-gameboard > div > div[data-x=\"".concat(xCoordRandom + xLengthOne, "\"][data-y=\"").concat(yCoordRandom + yLengthOne, "\"]"));
      _computerCellOne2.classList.add('computer-ship-placed');
      // computerCellOne.setAttribute('style', 'background-color: orange;');

      var _computerCellTwo = document.querySelector(".computer-gameboard > div > div[data-x=\"".concat(xCoordRandom + xLengthTwo, "\"][data-y=\"").concat(yCoordRandom + yLengthTwo, "\"]"));
      _computerCellTwo.classList.add('computer-ship-placed');
      // computerCellTwo.setAttribute('style', 'background-color: orange;');

      var computerCellThree = document.querySelector(".computer-gameboard > div > div[data-x=\"".concat(xCoordRandom + xLengthThree, "\"][data-y=\"").concat(yCoordRandom + yLengthThree, "\"]"));
      computerCellThree.classList.add('computer-ship-placed');
      // computerCellThree.setAttribute('style', 'background-color: orange;'); 
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
  var cells = document.querySelectorAll('.player-one-board > div > div');
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

  // xCoord.removeEventListener('click', ChangeToXAxis);
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

  // yCoord.removeEventListener('click', ChangeToYAxis); 
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

  // assign empty objects to both of the placement objects. 
  // Object.assign(PlacedShips, {}); 
  // Object.assign(ComputerPlacedShips, {});  
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
    // cell.removeEventListener('click', PlaceOnX); 
    // cell.removeEventListener('click', PlaceOnY);
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
  // cells.forEach((cell) => {
  //     cell.classList.remove('hover-test'); 
  // }); 

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
  // cells.forEach((cell) => {
  //     cell.classList.remove('hover-test'); 
  // });

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
/* harmony import */ var _ShipData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShipData */ "./src/utils/ShipData.js");
/* harmony import */ var _images_explosion_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/explosion.png */ "./src/images/explosion.png");
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
              _ShipData__WEBPACK_IMPORTED_MODULE_2__.ShipData.shipsPlaced--;
              console.log('Sunk status should be true: ', PlacedShips[key]); // Testing 
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
    border: 1px solid red;
    padding: 10px; 
}

/***************************************************************************************************************************************************************************/
/***************************************************************************************************************************************************************************/
/* |Gameboard Container| */
.gameboard-container{
    display: flex;
    justify-content: center;
    gap: 10px;

    border: 1px solid blue;
    padding: 10px;
    width: 1200px;
    margin: 0 auto;
}

/* Player One Board */
.player-one-board{
    display: flex;
    flex-direction: column;

    /* border: 1px solid green; */
    /* padding: 10px; */
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

    border: 1px solid #c2410c;
    padding: 5px;
    width: 40px;
    height: 40px;
    cursor: pointer;
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

    /* border: 1px solid purple; */
    /* padding: 10px; */
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
    
    /* border: 1px solid orange; */
    /* padding: 10px; */

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

    /* border: 1px solid black;  */
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
    border: 1px solid orange;
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
    border: 1px solid lightblue;
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
    border: 1px solid lightgreen;
    text-align: center;
    font-family: play-pretend, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 50px;
    letter-spacing: 3px;
    color: #e2e8f0;
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* body - The main body for the entire application. */\nbody{\n    padding: 0;\n    margin: 0; \n    background: linear-gradient(to right, #43e97b 0%, #38f9d7 100%);\n}\n\n/* * - All the elements in the application. */\n*{\n    box-sizing: border-box; \n}\n\n/* Fonts */\n/* font-0 - Comfortaa */\n@font-face {\n    font-family: comfortaa;\n    src: url('./fonts/comfortaa/Comfortaa-Regular.ttf');\n}\n\n/* font-1 Play Pretend */\n@font-face {\n    font-family: play-pretend;\n    src: url('./fonts/play_pretend/Play\\ Pretend.otf');\n} \n\n/* mobile-availability - Displays not availability for mobile or tablet devices. */\n#mobile-availability{\n    display: none; \n}\n/***************************************************************************************************************************************************************************/\n/***************************************************************************************************************************************************************************/\n/* |Testing Area Identifiers and Components| */\n#content > div > button{\n    padding: 10px 5px 10px 5px;\n    font-family:monospace;\n    background-color: lightcoral;\n    border: 1px solid lightcoral; \n    cursor: pointer;\n}\n#content > div > button:hover{\n    background-color: lightblue;\n    border: 1px solid lightblue;\n}\n\n/***************************************************************************************************************************************************************************/\n/***************************************************************************************************************************************************************************/\n/* |Main Content Section| */\n#content{\n    border: 1px solid red;\n    padding: 10px; \n}\n\n/***************************************************************************************************************************************************************************/\n/***************************************************************************************************************************************************************************/\n/* |Gameboard Container| */\n.gameboard-container{\n    display: flex;\n    justify-content: center;\n    gap: 10px;\n\n    border: 1px solid blue;\n    padding: 10px;\n    width: 1200px;\n    margin: 0 auto;\n}\n\n/* Player One Board */\n.player-one-board{\n    display: flex;\n    flex-direction: column;\n\n    /* border: 1px solid green; */\n    /* padding: 10px; */\n}\n.player-one-board > div{ /* rows */\n    display: flex;\n\n    /* border: 1px solid black; */\n    /* padding: 5px; */\n}\n.player-one-board > div > div{ /* cells */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    border: 1px solid #c2410c;\n    padding: 5px;\n    width: 40px;\n    height: 40px;\n    cursor: pointer;\n}\n.player-one-board > div > div > div{ /* Missed Hit Container */\n    /* border: 1px solid black; */\n    height: 20px;\n    font-size: 20px;\n    color: #d946ef;\n}\n\n/* Computer Gameboard */\n.computer-gameboard{\n    display: flex;\n    flex-direction: column;\n\n    /* border: 1px solid purple; */\n    /* padding: 10px; */\n}\n.computer-gameboard > div{ /* Rows */\n    display: flex;\n\n    /* padding: 10px; */\n}\n.computer-gameboard > div > div{ /* cells */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    border: 1px solid lightgreen;\n    padding: 5px;\n    width: 40px; \n    height: 40px;\n    cursor: pointer;\n}\n\n/* hover-test */\n.hover-test{\n    border: 2px solid #6366f1 !important;\n}\n\n/* ship-placed - Displays each ship placed on the board. */\n.ship-placed{\n    border: 2px solid #6366f1 !important;\n}\n\n/* computer-ship-placed - Displays each ship that the computer places on their board. */\n.computer-ship-placed{\n    border: 1px solid lightgreen !important;\n}\n\n/* computer-ship-hit - Indicates that computer ship has been hit. */\n.computer-ship-hit > img[src]{\n    width: 100%;\n    height: 100%; \n}\n\n/* player-one-ship-hit - Indicates that the player one ship has been hit. */\n.player-one-ship-hit > img[src]{\n    width: 100%;\n    height: 100%;\n}\n\n/***************************************************************************************************************************************************************************/\n/***************************************************************************************************************************************************************************/\n/* |Inteface Section| */\n.interface{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n    \n    /* border: 1px solid orange; */\n    /* padding: 10px; */\n\n}\n.interface > button{ /* New Button */\n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-weight: bold; \n    font-size: 20px;\n    cursor: pointer; \n    border: 1px solid rgba(0, 0, 0, 0); \n    border-radius: 5px; \n    background-color:#38f9d600;\n    color: white;\n}\n.interface > button:hover{\n    background-color:#a3e635;\n}\n\n.interface > div:nth-child(2){ /* x and y coordinate container. */\n    display: flex;\n    gap: 10px;\n\n    /* border: 1px solid black;  */\n}\n.interface > div:nth-child(2) > button{ /* x and y coordinate buttons. */ \n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-weight: bold;\n    font-size: 18px;\n    padding: 1px 15px 1px 15px; \n    border-radius: 5px; \n    border: 1px solid white;\n    cursor: pointer; \n    background-color:#38f9d600;\n    color: white;\n}\n.interface > div:nth-child(2) > button:hover{\n    background-color: #a3e635;\n}\n\n.interface > div:nth-child(3){ /* Number of ships on the player board. */\n    padding: 5px;\n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    color: white; \n}\n\n/* current-coordinate - The current coordinate choosen by the user. */\n.current-coordinate{\n    background-color: #a3e635 !important;\n    border: 1px solid #a3e635 !important; \n}\n\n/* commence-attack - Lets the player know that they can begin attacking the computer gameboard ships. */\n.commence-attack{\n    border: 1px solid white;\n    border-radius: 10px;\n    padding: 5px;\n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    color: white; \n}\n\n/***************************************************************************************************************************************************************************/\n/***************************************************************************************************************************************************************************/\n/* |Gameboard Events Section| */\n/* player-gameboard-events - All the player gameboard events. */\n#player-gameboard-events{\n    border: 1px solid orange;\n    padding: 10px;\n    margin-bottom: 10px;\n    text-align: center; \n    font-size: 20px;\n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    color: white; \n}\n#player-gameboard-events > p{\n    display: inline; \n}\n\n/* computer-gameboard-events - All the computer gameboard events. */\n#computer-gameboard-events{\n    border: 1px solid lightblue;\n    padding: 10px;\n    margin-bottom: 10px;\n    text-align: center; \n    font-size: 20px; \n    font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    color: white;\n}\n#computer-gameboard-events > p{\n    display: inline;  \n}\n\n/***************************************************************************************************************************************************************************/\n/***************************************************************************************************************************************************************************/\n/* |Application Title| */\n#application-title{\n    border: 1px solid lightgreen;\n    text-align: center;\n    font-family: play-pretend, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 50px;\n    letter-spacing: 3px;\n    color: #e2e8f0;\n}\n\n/***************************************************************************************************************************************************************************/\n/***************************************************************************************************************************************************************************/\n/* |Mobile Section| */\n/* media-0 - Will display that mobile and minimization doesn't exist.*/\n@media only screen and (max-width: 1100px)\n{\n    #application-title{\n        font-size: 30px;\n        text-align: center;\n    }\n\n    #mobile-availability{\n        display: block;\n        text-align: center;\n        margin-top: 20px;\n        font-size: 19px;\n        font-family: comfortaa, system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n        color: white;\n    }\n\n    #content{\n        display: none;\n    }\n\n    #computer-gameboard-events{\n        display: none;\n    }\n\n    #player-gameboard-events{\n        display: none;\n    }\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUksT0FBTyxHQUFHZCxrQkFBQSxDQUFJQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUVDLEdBQUcsQ0FBQztFQUFBLE9BQU1ELEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUFBLEVBQUM7QUFDMUR4SSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxhQUFhLEVBQUVrSixPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQ3JDbkosT0FBTyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUNuQjs7QUFFQUYsa0VBQWEsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9Eb21Db250ZW50LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy91dGlscy9BY3RpdmF0ZUdhbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3V0aWxzL0F4aXNDaGFuZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3V0aWxzL0Rpc2FibGVQbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3V0aWxzL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvdXRpbHMvTmV3R2FtZS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvdXRpbHMvU2hpcC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvdXRpbHMvU2hpcERhdGEuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3V0aWxzL1NoaXBQbGFjZW1lbnREYXRhLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gXCIuLi91dGlscy9HYW1lYm9hcmRcIjtcblxuaW1wb3J0IHsgTmV3R2FtZVNlbGVjdGVkIH0gZnJvbSBcIi4uL3V0aWxzL05ld0dhbWVcIjtcbmltcG9ydCB7IFNoaXBEYXRhIH0gZnJvbSBcIi4uL3V0aWxzL1NoaXBEYXRhXCI7XG5pbXBvcnQgeyBBeGlzQ2hhbmdlIH0gZnJvbSBcIi4uL3V0aWxzL0F4aXNDaGFuZ2VcIjtcbmltcG9ydCB7IEFjdGl2YXRlR2FtZSB9IGZyb20gXCIuLi91dGlscy9BY3RpdmF0ZUdhbWVcIjtcbmltcG9ydCB7IERpc2FibGVQbGFjZW1lbnQgfSBmcm9tIFwiLi4vdXRpbHMvRGlzYWJsZVBsYWNlbWVudFwiO1xuaW1wb3J0IHsgUGxhY2VkU2hpcHMsIENvbXB1dGVyUGxhY2VkU2hpcHMgfSBmcm9tIFwiLi4vdXRpbHMvU2hpcFBsYWNlbWVudERhdGFcIjtcblxuaW1wb3J0IHdhdGVyRXhwbG9zaW9uIGZyb20gXCIuLi9zb3VuZHMvd2F0ZXItZXhwbG9zaW9uLndhdlwiOyBcbmltcG9ydCBleHBsb3Npb25JbWFnZSBmcm9tIFwiLi4vaW1hZ2VzL2V4cGxvc2lvbi5wbmdcIjsgXG5cbi8vIEluaXRpYWxpemluZ0RPTSgpOiBJbnRpYWxpemluZyBET00gQ29udGVudCBmb3IgdGhlIGVudGlyZSBhcHBsaWNhdGlvbi4gXG5leHBvcnQgZnVuY3Rpb24gSW5pdGlhbGl6ZURPTSgpe1xuICAgIGNvbnNvbGUubG9nKFwiSW5pdGlhbGl6aW5nIERPTSBDb250ZW50Li4uXCIpOyAvLyBUZXN0aW5nIFxuICAgIGNvbnNvbGUubG9nKCdcXG4nKTsgLy8gVGVzdGluZyBcblxuICAgIEdhbWVib2FyZERPTSgpO1xuICAgIEludGVyZmFjZURPTSgpO1xuICAgIFBsYXllck9uZURPTSgpO1xuICAgIENvbXB1dGVyRE9NKCk7XG4gICAgRGlzcGxheVBsYXllck9uZUdhbWVib2FyZEV2ZW50cygpO1xuICAgIERpc3BsYXlDb21wdXRlckdhbWVib2FyZEV2ZW50cygpO1xufVxuXG4vLyBEaXNwbGF5UGxheWVyT25lR2FtZWJvYXJkRXZlbnRzKCk6IFdpbGwgZGlzcGxheSBhbGwgdGhlIGV2ZW50cyB0aGF0IHBsYXllciBvbmUgaW5pdGlhdGVzIG9uIHRoZSBjb21wdXRlcnMgZ2FtZWJvYXJkLlxuZnVuY3Rpb24gRGlzcGxheVBsYXllck9uZUdhbWVib2FyZEV2ZW50cyhib2FyZFN0YXR1cywgY29vcmRzLCBzdW5rU3RhdHVzKXtcbiAgICBjb25zdCBzaGlwU3Vua01zc2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaWYgKGJvYXJkU3RhdHVzID09PSAxKVxuICAgIHtcbiAgICAgICAgc2hpcFN1bmtNc3NnLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci1nYW1lYm9hcmQtZXZlbnRzJykudGV4dENvbnRlbnQgPSBgWW91IGhpdCBhIHNoaXAgYXQgdGhlIGNvb3JkaW5hdGVzIFske2Nvb3Jkcy5kYXRhc2V0Lnh9LCAke2Nvb3Jkcy5kYXRhc2V0Lnl9XSFgO1xuICAgIH1cbiAgICBlbHNlIGlmIChib2FyZFN0YXR1cyA9PT0gMClcbiAgICB7XG4gICAgICAgIHNoaXBTdW5rTXNzZy50ZXh0Q29udGVudCA9IFwiXCI7IFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLWdhbWVib2FyZC1ldmVudHMnKS50ZXh0Q29udGVudCA9IGBZb3VyIGhpdCBtaXNzZWQgYXQgdGhlIGNvb3JkaW5hdGVzIFske2Nvb3Jkcy5kYXRhc2V0Lnh9LCAke2Nvb3Jkcy5kYXRhc2V0Lnl9XSFgO1xuICAgIH1cbiAgICBlbHNlIGlmIChib2FyZFN0YXR1cyA9PT0gMilcbiAgICB7XG4gICAgICAgIHNoaXBTdW5rTXNzZy50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItZ2FtZWJvYXJkLWV2ZW50cycpLnRleHRDb250ZW50ID0gJ1BsYXllciBPbmUgV2lucyBCYXR0bGVzaGlwISc7IFxuICAgIH1cbiAgICBlbHNlIGlmIChib2FyZFN0YXR1cyA9PT0gMylcbiAgICB7XG4gICAgICAgIHNoaXBTdW5rTXNzZy50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItZ2FtZWJvYXJkLWV2ZW50cycpLnRleHRDb250ZW50ID0gJ1BsYXllciBPbmUgTG9zZXMgQmF0dGxlc2hpcCEnOyBcbiAgICB9XG5cbiAgICBpZiAoc3Vua1N0YXR1cylcbiAgICB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItZ2FtZWJvYXJkLWV2ZW50cycpLmFwcGVuZENoaWxkKHNoaXBTdW5rTXNzZyk7XG4gICAgICAgIHNoaXBTdW5rTXNzZy50ZXh0Q29udGVudCA9IGAgWW91IHN1bmsgdGhlIHNoaXAhYDtcbiAgICB9XG59XG5cbi8vIERpc3BsYXlDb21wdXRlckdhbWVib2FyZEV2ZW50cygpOiBXaWxsIGRpc3BsYXkgYWxsIHRoZSBldmVudHMgdGhhdCB0aGUgY29tcHV0ZXIgaW5pdGlhdGVzIG9uIHBsYXllciBvbmUncyBnYW1lYm9hcmQuIFxuZXhwb3J0IGZ1bmN0aW9uIERpc3BsYXlDb21wdXRlckdhbWVib2FyZEV2ZW50cyhib2FyZFN0YXR1cywgc3Vua1N0YXR1cywgc2hpcE51bSl7XG4gICAgY29uc3Qgc2hpcFN1bmtNc3NnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgaWYgKGJvYXJkU3RhdHVzID09PSAxKVxuICAgIHtcbiAgICAgICAgc2hpcFN1bmtNc3NnLnRleHRDb250ZW50ID0gXCJcIjsgXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wdXRlci1nYW1lYm9hcmQtZXZlbnRzJykudGV4dENvbnRlbnQgPSBgVGhlIGNvbXB1dGVyIGhpdCBzaGlwICR7c2hpcE51bX0hYDtcbiAgICB9XG4gICAgZWxzZSBpZiAoYm9hcmRTdGF0dXMgPT09IDApXG4gICAge1xuICAgICAgICBzaGlwU3Vua01zc2cudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcHV0ZXItZ2FtZWJvYXJkLWV2ZW50cycpLnRleHRDb250ZW50ID0gJ1RoZSBjb21wdXRlciBtaXNzZWQhJzsgXG4gICAgfVxuICAgIGVsc2UgaWYgKGJvYXJkU3RhdHVzID09PSAyKVxuICAgIHtcbiAgICAgICAgc2hpcFN1bmtNc3NnLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXB1dGVyLWdhbWVib2FyZC1ldmVudHMnKS50ZXh0Q29udGVudCA9ICdUaGUgQ29tcHV0ZXIgV2lucyBCYXR0bGVzaGlwISc7IFxuICAgIH1cbiAgICBlbHNlIGlmIChib2FyZFN0YXR1cyA9PT0gMylcbiAgICB7XG4gICAgICAgIHNoaXBTdW5rTXNzZy50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wdXRlci1nYW1lYm9hcmQtZXZlbnRzJykudGV4dENvbnRlbnQgPSAnVGhlIENvbXB1dGVyIExvc2VzIEJhdHRsZXNoaXAhJzsgXG4gICAgfVxuXG4gICAgaWYgKHN1bmtTdGF0dXMpXG4gICAge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcHV0ZXItZ2FtZWJvYXJkLWV2ZW50cycpLmFwcGVuZENoaWxkKHNoaXBTdW5rTXNzZyk7XG4gICAgICAgIHNoaXBTdW5rTXNzZy50ZXh0Q29udGVudCA9IFwiIFRoZSBjb21wdXRlciBzdW5rIHRoZSBzaGlwIVwiO1xuICAgIH1cblxufVxuXG4vLyBOdW1iZXJPZlNoaXBzUGxhY2VkKCk6IFdpbGwga2VlcCB0cmFjayBvZiB0aGUgY3VycmVudCBzaGlwIHRvIGJlIHBsYWNlZCBvbiB0aGUgZ2FtZWJvYXJkLlxuZnVuY3Rpb24gTnVtYmVyT2ZTaGlwc1BsYWNlZCgpe1xuICAgIGNvbnN0IG51bWJlck9mU2hpcHNQbGFjZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubnVtYmVyLW9mLXNoaXBzJyk7XG5cbiAgICBpZiAoISgoU2hpcERhdGEubGVuZ3RoSW5kZXggKyAxKSA+IDEwKSlcbiAgICB7XG4gICAgICAgIFNoaXBEYXRhLnNoaXBzUGxhY2VkKys7XG4gICAgICAgIG51bWJlck9mU2hpcHNQbGFjZWQudGV4dENvbnRlbnQgPSBgU2hpcHM6ICR7U2hpcERhdGEuc2hpcHNQbGFjZWR9YDtcbiAgICB9XG5cbiAgICBpZiAoQWN0aXZhdGVHYW1lLmFjdGl2YXRlR2FtZSlcbiAgICB7XG4gICAgICAgIG51bWJlck9mU2hpcHNQbGFjZWQudGV4dENvbnRlbnQgPSBgU2hpcHM6ICR7U2hpcERhdGEuc2hpcHNQbGFjZWR9YDsgXG4gICAgfVxufVxuXG4vLyBHYW1lYm9hcmRET00oKTogVGhlIGdhbWVib2FyZCBET00gZm9yIHRoZSBlbnRpcmUgYXBwbGljYXRpb24uIFxuZnVuY3Rpb24gR2FtZWJvYXJkRE9NKCl7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbiAgICBjb25zdCBnYW1lYm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBnYW1lYm9hcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZ2FtZWJvYXJkLWNvbnRhaW5lcicpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChnYW1lYm9hcmRDb250YWluZXIpOyBcbn1cblxuLy8gUGxheWVyT25lRE9NKCk6IFRoZSBwbGF5ZXIgb25lIGJvYXJkLlxuZnVuY3Rpb24gUGxheWVyT25lRE9NKCl7XG4gICAgY29uc3QgZ2FtZWJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVib2FyZC1jb250YWluZXInKTsgXG5cbiAgICBjb25zdCBwbGF5ZXJPbmVCb2FyZCA9IEdhbWVib2FyZCgpOyBcblxuICAgIGNvbnN0IHBsYXllck9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcbiAgICBwbGF5ZXJPbmUuY2xhc3NMaXN0LmFkZCgncGxheWVyLW9uZS1ib2FyZCcpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJPbmVCb2FyZC5nYW1lYm9hcmQubGVuZ3RoOyBpKyspe1xuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG5cbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBwbGF5ZXJPbmVCb2FyZC5nYW1lYm9hcmRbaV0ubGVuZ3RoOyBqKyspe1xuICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xuICAgICAgICAgICAgY2VsbC5kYXRhc2V0LnggPSBpO1xuICAgICAgICAgICAgY2VsbC5kYXRhc2V0LnkgPSBqO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgcGxheWVyT25lLmFwcGVuZENoaWxkKHJvdyk7IFxuICAgIH1cblxuICAgIGdhbWVib2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJPbmUpOyBcbn1cblxuLy8gQ29tcHV0ZXJET00oKTogVGhlIGNvbXB1dGVyIGdhbWVib2FyZFxuZnVuY3Rpb24gQ29tcHV0ZXJET00oKXtcbiAgICBjb25zdCBnYW1lYm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZWJvYXJkLWNvbnRhaW5lcicpO1xuICAgIFxuICAgIGNvbnN0IGNvbXB1dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuICAgIGNvbXB1dGVyLmNsYXNzTGlzdC5hZGQoJ2NvbXB1dGVyLWdhbWVib2FyZCcpOyBcblxuICAgIGNvbnN0IGNvbXB1dGVyQm9hcmQgPSBHYW1lYm9hcmQoKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29tcHV0ZXJCb2FyZC5nYW1lYm9hcmQubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgICBjb25zdCBjb21wdXRlclJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcblxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbXB1dGVyQm9hcmQuZ2FtZWJvYXJkW2ldLmxlbmd0aDsgaisrKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBjb21wdXRlckNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgICAgICAgICBjb21wdXRlckNlbGwuZGF0YXNldC54ID0gaTtcbiAgICAgICAgICAgIGNvbXB1dGVyQ2VsbC5kYXRhc2V0LnkgPSBqO1xuICAgICAgICAgICAgY29tcHV0ZXJSb3cuYXBwZW5kQ2hpbGQoY29tcHV0ZXJDZWxsKTsgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbXB1dGVyLmFwcGVuZENoaWxkKGNvbXB1dGVyUm93KTsgXG4gICAgfVxuXG4gICAgZ2FtZWJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbXB1dGVyKTsgXG59XG5cbi8vIFBsYWNlU2hpcHMoKTogV2lsbCBwbGFjZSB0aGUgc2hpcHMgb24gdGhlIGdhbWVib2FyZC5cbmZ1bmN0aW9uIFBsYWNlU2hpcHMoZSl7XG4gICAgY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheWVyLW9uZS1ib2FyZCA+IGRpdiA+IGRpdicpOyBcbiAgICBjb25zdCB4Q29vcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZWJvYXJkLWNvbnRhaW5lciA+IGRpdjpudGgtY2hpbGQoMSkgPiBkaXYgPiBidXR0b246bnRoLWNoaWxkKDEpJyk7XG4gICAgY29uc3QgeUNvb3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVib2FyZC1jb250YWluZXIgPiBkaXY6bnRoLWNoaWxkKDEpID4gZGl2ID4gYnV0dG9uOm50aC1jaGlsZCgyKScpOyBcbiAgICBjb25zdCBjb21tZW5jZUF0dGFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnRlcmZhY2UgPiBkaXY6bnRoLWNoaWxkKDQpJyk7XG5cbiAgICBjb25zb2xlLmxvZygnQ3VycmVudCBBeGlzOiAnLCBBeGlzQ2hhbmdlLmF4aXNDaGFuZ2UpOyAvLyBUZXN0aW5nICBcbiAgICBjb25zb2xlLmxvZygnXFxuJyk7IC8vIFRlc3RpbmcgXG5cbiAgICBpZiAoIUF4aXNDaGFuZ2UuYXhpc1dhc0NoYW5nZWQgJiYgU2hpcERhdGEubGVuZ3RoSW5kZXggPCAxMClcbiAgICB7XG4gICAgICAgIE51bWJlck9mU2hpcHNQbGFjZWQoKTsgXG4gICAgICAgICAgICBcbiAgICAgICAgY29uc3QgYm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgICAgICAgY29uc3Qgc2hpcCA9IGJvYXJkLlNoaXAoKTtcbiAgICBcbiAgICAgICAgU2hpcERhdGEuc2hpcExlbmd0aCA9IHNoaXAuZGVmYXVsdExlbmd0aHNbU2hpcERhdGEubGVuZ3RoSW5kZXhdO1xuXG4gICAgICAgIHNoaXAubGVuZ3RoID0gU2hpcERhdGEuc2hpcExlbmd0aCArIDE7IFxuXG4gICAgICAgIGNvbnNvbGUubG9nKCdTaGlwIG51bWJlciB0byBiZSBwbGFjZWQ6ICcsIFNoaXBEYXRhLmxlbmd0aEluZGV4ICsgMSk7IC8vIFRlc3RpbmcgXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaGUgbGVuZ3RoIG9mIHRoZSBzaGlwIHRvIGJlIHBsYWNlZDogJywgU2hpcERhdGEuc2hpcExlbmd0aCk7IC8vIFRlc3RpbmcgXG5cbiAgICAgICAgUGxhY2VkU2hpcHNbYHNoaXAgJHtTaGlwRGF0YS5sZW5ndGhJbmRleH1gXSA9IHNoaXA7XG4gICAgICAgIGNvbnNvbGUubG9nKCdPYmplY3Qgd2l0aCBwbGFjZWQgc2hpcHM6ICcsIFBsYWNlZFNoaXBzKTsgLy8gVGVzdGluZyBcbiAgICAgICAgY29uc29sZS5sb2coJ1xcbicpOyAvLyBUZXN0aW5nXG4gICAgfVxuXG5cbiAgICBpZiAoU2hpcERhdGEubGVuZ3RoSW5kZXggPiA5KSAvLyBXaWxsIGRlYWN0aXZhdGUgcGxheWVyIG9uZXMgc2hpcCBwbGFjZW1lbnQuIFxuICAgIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNlbGxzLmxlbmd0aDsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBjZWxsc1tpXS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgRW50ZXJYKTtcbiAgICAgICAgICAgIGNlbGxzW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBMZWF2ZVgpOyBcbiAgICAgICAgICAgIGNlbGxzW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBFbnRlclkpO1xuICAgICAgICAgICAgY2VsbHNbaV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIExlYXZlWSk7XG4gICAgICAgICAgICBjZWxsc1tpXS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIFBsYWNlT25YKTsgXG4gICAgICAgICAgICBjZWxsc1tpXS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIFBsYWNlT25ZKTsgXG4gICAgICAgIH1cblxuICAgICAgICB4Q29vcmQuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudC1jb29yZGluYXRlJyk7XG4gICAgICAgIHlDb29yZC5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50LWNvb3JkaW5hdGUnKTtcbiAgICAgICAgeENvb3JkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgQ2hhbmdlVG9YQXhpcyk7XG4gICAgICAgIHlDb29yZC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIENoYW5nZVRvWUF4aXMpO1xuXG4gICAgICAgIEFjdGl2YXRlR2FtZS5hY3RpdmF0ZUdhbWUgPSB0cnVlOyBcbiAgICAgICAgY29tbWVuY2VBdHRhY2suY2xhc3NMaXN0LmFkZCgnY29tbWVuY2UtYXR0YWNrJyk7IFxuICAgICAgICBjb21tZW5jZUF0dGFjay50ZXh0Q29udGVudCA9IFwiQ29tbWVuY2UgQXR0YWNrIVwiOyBcbiAgICAgICAgY29uc29sZS5sb2coXCJHYW1lIEFjdGl2YXRlZDogXCIsIEFjdGl2YXRlR2FtZS5hY3RpdmF0ZUdhbWUpOyAvLyBUZXN0aW5nXG4gICAgICAgIEdhbWVJbml0aWF0ZWQoKTsgXG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2VsbHMubGVuZ3RoOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmIChBeGlzQ2hhbmdlLmF4aXNDaGFuZ2UgPT09IG51bGwpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2VsbHNbaV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIEVudGVyWSk7XG4gICAgICAgICAgICAgICAgY2VsbHNbaV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIExlYXZlWSk7IFxuICAgICAgICAgICAgICAgIGNlbGxzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBFbnRlclgpO1xuICAgICAgICAgICAgICAgIGNlbGxzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBMZWF2ZVgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoQXhpc0NoYW5nZS5heGlzQ2hhbmdlID09PSAxKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNlbGxzW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgUGxhY2VPblkpO1xuICAgICAgICAgICAgICAgIGNlbGxzW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBFbnRlclkpO1xuICAgICAgICAgICAgICAgIGNlbGxzW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBMZWF2ZVkpO1xuICAgICAgICAgICAgICAgIGNlbGxzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBFbnRlclgpO1xuICAgICAgICAgICAgICAgIGNlbGxzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBMZWF2ZVgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoQXhpc0NoYW5nZS5heGlzQ2hhbmdlID09PSAyKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNlbGxzW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgUGxhY2VPblgpO1xuICAgICAgICAgICAgICAgIGNlbGxzW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBFbnRlclgpO1xuICAgICAgICAgICAgICAgIGNlbGxzW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBMZWF2ZVgpO1xuICAgICAgICAgICAgICAgIGNlbGxzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBFbnRlclkpO1xuICAgICAgICAgICAgICAgIGNlbGxzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBMZWF2ZVkpOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gR2FtZUluaXRpYXRlZCgpOiBUaGUgcGxheWVyIGFuZCBjb21wdXRlciB3aWxsIHRha2UgdHVybnMgcGlja2luZyBjb29yZGluYXRlcyBvbiBlYWNoIG90aGVycyBnYW1lYm9hcmQgdG8gc2luayBhIHNoaXAuXG5mdW5jdGlvbiBHYW1lSW5pdGlhdGVkKCl7XG4gICAgY29uc3QgY29tcHV0ZXJDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXYgPiBkaXZgKTtcbiAgICBsZXQgdG90YWxDb21wdXRlclNoaXBzU3VuayA9IDA7IFxuICAgIGxldCB0b3RhbFBsYXllclNoaXBzU3VuayA9IDA7IFxuXG4gICAgTnVtYmVyT2ZTaGlwc1BsYWNlZCgpOyBcbiAgICBcbiAgICAvLyBDaGVjayBpZiBhbGwgdGhlIGNvbXB1dGVyIHBsYWNlZCBzaGlwcyBoYXZlIGJlZW4gc3VuazogUGxheWVyIE9uZSBXaW5zLiBcbiAgICAvLyBOb3RlOiBUaGVzZSB0d28gdGVzdCBjYW4gYmUgaW4gaXRzIG93biBmdW5jdGlvbi4gXG4gICAgZm9yIChsZXQga2V5IGluIENvbXB1dGVyUGxhY2VkU2hpcHMpXG4gICAge1xuICAgICAgICBpZiAoQ29tcHV0ZXJQbGFjZWRTaGlwc1trZXldLnN1bmsgPT09IHRydWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRvdGFsQ29tcHV0ZXJTaGlwc1N1bmsrKztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIENoZWNrIGlmIGFsbCB0aGUgcGxheWVyIHBsYWNlZCBzaGlwcyBoYXZlIGJlZW4gc3VuazogQ29tcHV0ZXIgd2luc1xuICAgIGZvciAobGV0IGtleSBpbiBQbGFjZWRTaGlwcylcbiAgICB7XG4gICAgICAgIGlmIChQbGFjZWRTaGlwc1trZXldLnN1bmsgPT09IHRydWUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRvdGFsUGxheWVyU2hpcHNTdW5rKys7ICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDcm93biB0aGUgd2lubmVyLiBcbiAgICBpZiAodG90YWxDb21wdXRlclNoaXBzU3VuayA9PT0gMTApXG4gICAge1xuICAgICAgICBjb25zb2xlLmxvZygnUGxheWVyIE9uZSBXaW5zIEJhdHRsZXNoaXAhJyk7IC8vIFRlc3RpbmcgIFxuICAgICAgICAvLyBOb3RlczogRW5kIHRoZSBDbGljayBFdmVudCBmb3IgUGxheWVyT25lVHVybi5cbiAgICAgICAgLy8gc2V0IEFjdGl2YXRlR2FtZS5hY3RpdmF0ZUdhbWUgPSBmYWxzZVxuICAgICAgICAvLyBzZXQgQWN0aXZhdGVHYW1lLmFjdGl2YXRlUGxheWVyT25lVHVybiA9IHRydWVcbiAgICAgICAgQWN0aXZhdGVHYW1lLmFjdGl2YXRlR2FtZSA9IGZhbHNlOyBcbiAgICAgICAgQWN0aXZhdGVHYW1lLmFjdGl2YXRlUGxheWVyT25lVHVybiA9IHRydWU7XG4gICAgICAgIE5ld0dhbWVTZWxlY3RlZC5uZXdHYW1lU2VsZWN0ZWQgPSBmYWxzZTsgXG5cbiAgICAgICAgY29tcHV0ZXJDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgUGxheWVyT25lVHVybik7IFxuICAgICAgICB9KTtcblxuICAgICAgICBEaXNwbGF5UGxheWVyT25lR2FtZWJvYXJkRXZlbnRzKDIsIG51bGwsIGZhbHNlKTsgXG4gICAgICAgIERpc3BsYXlDb21wdXRlckdhbWVib2FyZEV2ZW50cygzLCBmYWxzZSwgbnVsbCk7ICBcbiAgICB9XG4gICAgZWxzZSBpZiAodG90YWxQbGF5ZXJTaGlwc1N1bmsgPT09IDEwKVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0NvbXB1dGVyIFdpbnMgQmF0dGxlc2hpcCEnKTsgLy8gVGVzdGluZ1xuICAgICAgICBBY3RpdmF0ZUdhbWUuYWN0aXZhdGVHYW1lID0gZmFsc2U7XG4gICAgICAgIEFjdGl2YXRlR2FtZS5hY3RpdmF0ZVBsYXllck9uZVR1cm4gPSB0cnVlO1xuICAgICAgICBOZXdHYW1lU2VsZWN0ZWQubmV3R2FtZVNlbGVjdGVkID0gZmFsc2U7IFxuXG4gICAgICAgIERpc3BsYXlDb21wdXRlckdhbWVib2FyZEV2ZW50cygyLCBmYWxzZSwgbnVsbCk7XG4gICAgICAgIERpc3BsYXlQbGF5ZXJPbmVHYW1lYm9hcmRFdmVudHMoMywgbnVsbCwgZmFsc2UpO1xuICAgIH1cblxuICAgIGlmIChBY3RpdmF0ZUdhbWUuYWN0aXZhdGVHYW1lKVxuICAgIHtcbiAgICAgICAgY29tcHV0ZXJDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgUGxheWVyT25lVHVybik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICghQWN0aXZhdGVHYW1lLmFjdGl2YXRlUGxheWVyT25lVHVybilcbiAgICB7XG4gICAgICAgIC8vIFJlbW92ZSB0aGUgZXZlbnRzIGZvciBhbGwgY2VsbHMgb24gdGhlIGNvbXB1dGVyIGdhbWVib2FyZC5cbiAgICAgICAgY29tcHV0ZXJDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgUGxheWVyT25lVHVybik7IFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIlBsYXllciBPbmUgVHVybiBPdmVyXCIpOyAvLyBUZXN0aW5nIFxuICAgICAgICBjb25zb2xlLmxvZyhcIlxcblwiKTsgLy8gVGVzdGluZ1xuICAgICAgICBcbiAgICAgICAgQ29tcHV0ZXJUdXJuKCk7ICBcbiAgICB9XG59XG5cbi8vIFBsYXllck9uZVR1cm4oKTogUGxheWVyIG9uZSB3aWxsIGNob29zZSBhIHNwb3Qgb24gdGhlIGJvYXJkLiBcbmZ1bmN0aW9uIFBsYXllck9uZVR1cm4oZSl7XG4gICAgY29uc3QgY29tcHV0ZXJDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNvbXB1dGVyLWdhbWVib2FyZCA+IGRpdiA+IGRpdltkYXRhLXg9XCIke2UudGFyZ2V0LmRhdGFzZXQueH1cIl1bZGF0YS15PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnl9XCJdYCk7IFxuICAgIGNvbnN0IGV4cGxvc2lvbiA9IG5ldyBBdWRpbyh3YXRlckV4cGxvc2lvbik7IFxuICAgIGxldCBjb21wdXRlclNoaXBJbmRleCA9IDA7XG4gICAgbGV0IHNoaXBOdW1iZXJTdW5rID0gMDsgXG4gICAgbGV0IHNoaXBTdW5rID0gZmFsc2U7IFxuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KTsgLy8gVGVzdGluZyBcbiAgICBjb25zb2xlLmxvZyhjb21wdXRlckNlbGwpOyAvLyBUZXN0aW5nIFxuICAgIGNvbnNvbGUubG9nKFwiWDogXCIsIGUudGFyZ2V0LmRhdGFzZXQueCk7IC8vIFRlc3RpbmcgXG4gICAgY29uc29sZS5sb2coXCJZOiBcIiwgZS50YXJnZXQuZGF0YXNldC55KTsgLy8gVGVzdGluZ1xuXG4gICAgaWYgKGUudGFyZ2V0LmRhdGFzZXQueCAhPT0gdW5kZWZpbmVkICYmIGUudGFyZ2V0LmRhdGFzZXQueSAhPT0gdW5kZWZpbmVkKVxuICAgIHtcbiAgICAgICAgaWYgKGNvbXB1dGVyQ2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbXB1dGVyLXNoaXAtcGxhY2VkJykpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBDb21wdXRlclBsYWNlZFNoaXBzKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbXB1dGVyU2hpcEluZGV4Kys7IFxuICAgICAgICAgICAgICAgIGZvciAobGV0IGNvb3JkIGluIENvbXB1dGVyUGxhY2VkU2hpcHNba2V5XS5jb29yZGluYXRlcylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChDb21wdXRlclBsYWNlZFNoaXBzW2tleV0uY29vcmRpbmF0ZXNbY29vcmRdWzBdID09PSBwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LngpICYmIENvbXB1dGVyUGxhY2VkU2hpcHNba2V5XS5jb29yZGluYXRlc1tjb29yZF1bMV0gPT09IHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueSkpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbXB1dGVyUGxhY2VkU2hpcHNba2V5XS5oaXRzICs9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhDb21wdXRlclBsYWNlZFNoaXBzW2tleV0pOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKENvbXB1dGVyUGxhY2VkU2hpcHNba2V5XS5oaXRzID09PSBDb21wdXRlclBsYWNlZFNoaXBzW2tleV0ubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBZb3Ugc3VuayBjb21wdXRlciBzaGlwICR7Y29tcHV0ZXJTaGlwSW5kZXh9YCk7IC8vIFRlc3RpbmcgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29tcHV0ZXJQbGFjZWRTaGlwc1trZXldLnN1bmsgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTdW5rID0gQ29tcHV0ZXJQbGFjZWRTaGlwc1trZXldLnN1bms7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcE51bWJlclN1bmsgPSBjb21wdXRlclNoaXBJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgZXhwbG9zaW9uSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7IFxuICAgICAgICAgICAgZXhwbG9zaW9uSW1nLnNyYyA9IGV4cGxvc2lvbkltYWdlOyBcbiAgICAgICAgICAgIGNvbXB1dGVyQ2VsbC5hcHBlbmRDaGlsZChleHBsb3Npb25JbWcpOyBcbiAgICAgICAgICAgIGNvbXB1dGVyQ2VsbC5jbGFzc0xpc3QuYWRkKCdjb21wdXRlci1zaGlwLWhpdCcpOyBcbiAgICBcbiAgICAgICAgICAgIGV4cGxvc2lvbi5wbGF5KCk7IFxuXG4gICAgICAgICAgICBEaXNwbGF5UGxheWVyT25lR2FtZWJvYXJkRXZlbnRzKDEsIGNvbXB1dGVyQ2VsbCwgc2hpcFN1bmssIHNoaXBOdW1iZXJTdW5rKTsgXG4gICAgICAgICAgICBBY3RpdmF0ZUdhbWUuYWN0aXZhdGVQbGF5ZXJPbmVUdXJuID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIWNvbXB1dGVyQ2VsbC5oYXNBdHRyaWJ1dGUoJ3N0eWxlJykpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbXB1dGVyQ2VsbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQtY29sb3I6I2JlZjI2NDsnKTtcbiAgICAgICAgICAgIERpc3BsYXlQbGF5ZXJPbmVHYW1lYm9hcmRFdmVudHMoMCwgY29tcHV0ZXJDZWxsLCBzaGlwU3VuaywgbnVsbCk7IFxuICAgICAgICAgICAgQWN0aXZhdGVHYW1lLmFjdGl2YXRlUGxheWVyT25lVHVybiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbXB1dGVyQ2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbXB1dGVyLXNoaXAtaGl0JykgfHwgY29tcHV0ZXJDZWxsLmhhc0F0dHJpYnV0ZSgnc3R5bGUnKSlcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuOyBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFjdGl2YXRlR2FtZS5hY3RpdmF0ZVBsYXllck9uZVR1cm4gPSBmYWxzZTtcbiAgICBHYW1lSW5pdGlhdGVkKCk7IFxufVxuXG4vLyBDb21wdXRlclR1cm4oKTogQ29tcHV0ZXIgd2lsbCBjaG9vc2UgYSBzcG9udCBvbiBwbGF5ZXIgb25lJ3MgYm9hcmQuXG5mdW5jdGlvbiBDb21wdXRlclR1cm4oKXtcbiAgICBjb25zdCBnYW1lYm9hcmQgPSBHYW1lYm9hcmQoKTsgXG4gICAgZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soUGxhY2VkU2hpcHMpO1xuXG4gICAgQWN0aXZhdGVHYW1lLmFjdGl2YXRlUGxheWVyT25lVHVybiA9IHRydWU7IFxuXG4gICAgR2FtZUluaXRpYXRlZCgpOyBcbn1cblxuLy8gQ29tcHV0ZXJQbGFjZVNoaXBzKCk6IFRoZSBjb21wdXRlciB3aWxsIHBsYWNlIHNoaXBzIG9uIHRoZWlyIGdhbWVib2FyZC5cbmZ1bmN0aW9uIENvbXB1dGVyUGxhY2VTaGlwcygpe1xuICAgIGNvbnN0IGNvbXB1dGVyQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tcHV0ZXItZ2FtZWJvYXJkID4gZGl2ID4gZGl2Jyk7XG4gICAgY29uc29sZS5sb2coJ0NvbXB1dGVyIENlbGxzOiAnLCBjb21wdXRlckNlbGxzKTsgLy8gVGVzdGluZ1xuXG4gICAgY29uc3QgY29tcHV0ZXJSb3dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbXB1dGVyLWdhbWVib2FyZCA+IGRpdicpOyBcbiAgICBjb25zb2xlLmxvZygnQ29tcHV0ZXIgUm93czogJywgY29tcHV0ZXJSb3dzKTsgLy8gVGVzdGluZ1xuXG4gICAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IEdhbWVib2FyZCgpO1xuICAgIGNvbnN0IGNvbXB1dGVyU2hpcHMgPSBjb21wdXRlckJvYXJkLlNoaXAoKTtcblxuXG4gICAgY29tcHV0ZXJTaGlwcy5kZWZhdWx0TGVuZ3Rocy5mb3JFYWNoKChzaGlwLCBpbmRleCkgPT4ge1xuICAgICAgICBsZXQgY29tcHV0ZXJTaGlwUGxhY2VkID0gZmFsc2U7XG4gICAgICAgIGxldCB4Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoY29tcHV0ZXJSb3dzLmxlbmd0aCkpOyAvLyBSZXR1cm5zIGEgcmFuZG9tIG51bWJlciBmcm9tIDAgdG8gOS5cbiAgICAgICAgbGV0IHlDb29yZFJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTsgXG4gICAgICAgIGxldCBheGlzUmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG4gICAgICAgIGxldCB4TGVuZ3RoT25lID0gMCwgeExlbmd0aFR3byA9IDAsIHhMZW5ndGhUaHJlZSA9IDA7XG4gICAgICAgIGxldCB5TGVuZ3RoT25lID0gMCwgeUxlbmd0aFR3byA9IDAsIHlMZW5ndGhUaHJlZSA9IDA7IFxuXG4gICAgICAgIGlmIChheGlzUmFuZG9tID09PSAxKSAvLyB4LWF4aXNcbiAgICAgICAge1xuICAgICAgICAgICAgeExlbmd0aE9uZSA9IDA7IFxuICAgICAgICAgICAgeUxlbmd0aE9uZSA9IDE7IFxuXG4gICAgICAgICAgICB4TGVuZ3RoVHdvID0gMDtcbiAgICAgICAgICAgIHlMZW5ndGhUd28gPSAyO1xuXG4gICAgICAgICAgICB4TGVuZ3RoVGhyZWUgPSAwO1xuICAgICAgICAgICAgeUxlbmd0aFRocmVlID0gMztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChheGlzUmFuZG9tID09PSAwKSAvLyB5LWF4aXNcbiAgICAgICAge1xuICAgICAgICAgICAgeExlbmd0aE9uZSA9IDE7XG4gICAgICAgICAgICB5TGVuZ3RoT25lID0gMDtcblxuICAgICAgICAgICAgeExlbmd0aFR3byA9IDI7XG4gICAgICAgICAgICB5TGVuZ3RoVHdvID0gMDtcblxuICAgICAgICAgICAgeExlbmd0aFRocmVlID0gMztcbiAgICAgICAgICAgIHlMZW5ndGhUaHJlZSA9IDA7IFxuICAgICAgICB9XG5cblxuICAgICAgICBpZiAoc2hpcCA9PT0gMClcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYHxTaGlwICR7c2hpcH18YCk7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgIHdoaWxlKCFjb21wdXRlclNoaXBQbGFjZWQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXYgPiBkaXZbZGF0YS14PVwiJHt4Q29vcmRSYW5kb219XCJdW2RhdGEteT1cIiR7eUNvb3JkUmFuZG9tfVwiXWApLmNsYXNzTGlzdC5jb250YWlucygnY29tcHV0ZXItc2hpcC1wbGFjZWQnKSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHhDb29yZFJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbXB1dGVyUm93cy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICB5Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIGlmICgoeENvb3JkUmFuZG9tICsgMSkgPj0gMTAgfHwgKHlDb29yZFJhbmRvbSArIDEpID49IDEwKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Nvb3JkaW5hdGVzIGFyZSBvZmYgdGhlIGJvYXJkJyk7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1g6ICcsIHhDb29yZFJhbmRvbSArIDEpOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdZOiAnLCB5Q29vcmRSYW5kb20gKyAxKTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnXFxuJyk7IC8vIFRlc3RpbmcgIFxuICAgIFxuICAgICAgICAgICAgICAgICAgICB4Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb21wdXRlclJvd3MubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgeUNvb3JkUmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb21wdXRlclNoaXBQbGFjZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVyQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXYgPiBkaXZbZGF0YS14PVwiJHt4Q29vcmRSYW5kb219XCJdW2RhdGEteT1cIiR7eUNvb3JkUmFuZG9tfVwiXWApO1xuICAgICAgICAgICAgY29tcHV0ZXJDZWxsLmNsYXNzTGlzdC5hZGQoJ2NvbXB1dGVyLXNoaXAtcGxhY2VkJyk7IFxuICAgICAgICAgICAgLy8gY29tcHV0ZXJDZWxsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZC1jb2xvcjogcHVycGxlOycpO1xuICAgICAgICAgICAgQ29tcHV0ZXJQbGFjZWRTaGlwc1tgc2hpcCAke2luZGV4fWBdID0ge2Nvb3JkaW5hdGVzOiB7MDogW3hDb29yZFJhbmRvbSwgeUNvb3JkUmFuZG9tXX0sIGxlbmd0aDogc2hpcCArIDEsIGhpdHM6IDAsIHN1bms6IGZhbHNlfTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29tcHV0ZXIgUGxhY2VkIFNoaXBzOiBcIiwgQ29tcHV0ZXJQbGFjZWRTaGlwcyk7IC8vIFRlc3RpbmcgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc2hpcCA9PT0gMSlcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYHxTaGlwICR7c2hpcH18YCk7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgIHdoaWxlICghY29tcHV0ZXJTaGlwUGxhY2VkKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxldCBjb29yZGluYXRlcyA9IHt9O1xuICAgICAgICAgICAgICAgIGxldCBjb29yZGluYXRlSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgIGNvbXB1dGVyQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbXB1dGVyLXNoaXAtcGxhY2VkJykpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdYIENlbGw6ICcsIGNlbGwuZGF0YXNldC54KTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1kgQ2VsbDogJywgY2VsbC5kYXRhc2V0LnkpOyAvLyBUZXN0aW5nIFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1ggUmFuZG9tOiAnLCB4Q29vcmRSYW5kb20pOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnWSBSYW5kb206ICcsIHlDb29yZFJhbmRvbSk7IC8vIFRlc3RpbmcgXG4gICAgICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlc1tjb29yZGluYXRlSW5kZXgrK10gPSBbcGFyc2VJbnQoY2VsbC5kYXRhc2V0LngpLCBwYXJzZUludChjZWxsLmRhdGFzZXQueSldO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1xcbicpOyAvLyBUZXN0aW5nIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Nvb3JkaW5hdGVzIHdpdGggc2hpcCBwbGFjZW1lbnRzOiAnLCBjb29yZGluYXRlcyk7IC8vIFRlc3RpbmcgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gY29vcmRpbmF0ZXMpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY29vcmRpbmF0ZXNOb3RPdmVybGFwcGluZyA9IGZhbHNlOyBcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29vcmRpbmF0ZXNba2V5XSk7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKCFjb29yZGluYXRlc05vdE92ZXJsYXBwaW5nKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKChjb29yZGluYXRlc1trZXldWzBdID09PSB4Q29vcmRSYW5kb20gJiYgY29vcmRpbmF0ZXNba2V5XVsxXSA9PT0geUNvb3JkUmFuZG9tKSB8fCAoY29vcmRpbmF0ZXNba2V5XVswXSA9PT0gKHhDb29yZFJhbmRvbSArIHhMZW5ndGhPbmUpICYmIGNvb3JkaW5hdGVzW2tleV1bMV0gPT09ICh5Q29vcmRSYW5kb20gKyB5TGVuZ3RoT25lKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCAoKGNvb3JkaW5hdGVzW2tleV1bMF0gPT09IHhDb29yZFJhbmRvbSAmJiBjb29yZGluYXRlc1trZXldWzFdID09PSB5Q29vcmRSYW5kb20pICYmIChjb29yZGluYXRlc1trZXldWzBdID09PSAoeENvb3JkUmFuZG9tICsgeExlbmd0aE9uZSApICYmIGNvb3JkaW5hdGVzW2tleV1bMV0gPT09ICh5Q29vcmRSYW5kb20gKyB5TGVuZ3RoT25lKSkpKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhDb29yZFJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbXB1dGVyUm93cy5sZW5ndGgpOyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmb3VuZCcpOyAvLyBUZXN0aW5nIFxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IE5lZWQgdG8gdGVzdCBvbmUgbW9yZSB0aW1lIHRvIGZpbmQgb3V0IGlmIGl0IHN0aWxsIG92ZXJsYXBzIHdpdGggYW55IG9mIHRoZSBjZWxscy4gXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXNOb3RPdmVybGFwcGluZyA9IHRydWU7IFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoeENvb3JkUmFuZG9tICsgMSkgPj0gMTAgfHwgKHlDb29yZFJhbmRvbSArIDEpID49IDEwKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhDb29yZFJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbXB1dGVyUm93cy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlDb29yZFJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTsgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjb21wdXRlckNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY29tcHV0ZXItZ2FtZWJvYXJkID4gZGl2ID4gZGl2W2RhdGEteD1cIiR7eENvb3JkUmFuZG9tfVwiXVtkYXRhLXk9XCIke3lDb29yZFJhbmRvbX1cIl1gKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wdXRlckNlbGxPbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY29tcHV0ZXItZ2FtZWJvYXJkID4gZGl2ID4gZGl2W2RhdGEteD1cIiR7eENvb3JkUmFuZG9tICsgeExlbmd0aE9uZX1cIl1bZGF0YS15PVwiJHt5Q29vcmRSYW5kb20gKyB5TGVuZ3RoT25lfVwiXWApO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbXB1dGVyQ2VsbCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29tcHV0ZXJDZWxsT25lKTsgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKCh4Q29vcmRSYW5kb20gKyAxKSA+PSAxMCB8fCAoeUNvb3JkUmFuZG9tICsgMSkgPj0gMTApXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ29vcmRpbmF0ZXMgYXJlIG9mZiB0aGUgYm9hcmQuJyk7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1g6ICcsIHhDb29yZFJhbmRvbSArIDEpOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdZOiAnLCB5Q29vcmRSYW5kb20gKyAxKTsgLy8gVGVzdGluZyBcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1xcbicpOyAvLyBUZXN0aW5nIFxuXG4gICAgICAgICAgICAgICAgICAgIHhDb29yZFJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbXB1dGVyUm93cy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICB5Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjb21wdXRlckNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb21wdXRlci1zaGlwLXBsYWNlZCcpIHx8IGNvbXB1dGVyQ2VsbE9uZS5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbXB1dGVyLXNoaXAtcGxhY2VkJykpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGhlcmUgaXMgYW4gb3ZlcmxhcCcpOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICAgICAgICAgIHhDb29yZFJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbXB1dGVyUm93cy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICB5Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0xlYXZlIExvb3AuLi4nKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1xcbicpOyAvLyBUZXN0aW5nICBcbiAgICAgICAgICAgICAgICAgICAgY29tcHV0ZXJTaGlwUGxhY2VkID0gdHJ1ZTsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVyQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXYgPiBkaXZbZGF0YS14PVwiJHt4Q29vcmRSYW5kb219XCJdW2RhdGEteT1cIiR7eUNvb3JkUmFuZG9tfVwiXWApO1xuICAgICAgICAgICAgY29tcHV0ZXJDZWxsLmNsYXNzTGlzdC5hZGQoJ2NvbXB1dGVyLXNoaXAtcGxhY2VkJyk7XG4gICAgICAgICAgICAvLyBjb21wdXRlckNlbGwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7Jyk7IC8vIFRlc3RpbmdcblxuICAgICAgICAgICAgY29uc3QgY29tcHV0ZXJDZWxsT25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNvbXB1dGVyLWdhbWVib2FyZCA+IGRpdiA+IGRpdltkYXRhLXg9XCIke3hDb29yZFJhbmRvbSArIHhMZW5ndGhPbmV9XCJdW2RhdGEteT1cIiR7eUNvb3JkUmFuZG9tICsgeUxlbmd0aE9uZX1cIl1gKTtcbiAgICAgICAgICAgIGNvbXB1dGVyQ2VsbE9uZS5jbGFzc0xpc3QuYWRkKCdjb21wdXRlci1zaGlwLXBsYWNlZCcpOyBcbiAgICAgICAgICAgIC8vIGNvbXB1dGVyQ2VsbE9uZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQtY29sb3I6IHJlZDsnKTsgLy8gVGVzdGluZyBcblxuICAgICAgICAgICAgQ29tcHV0ZXJQbGFjZWRTaGlwc1tgc2hpcCAke2luZGV4fWBdID0ge2Nvb3JkaW5hdGVzOiB7MDogW3hDb29yZFJhbmRvbSwgeUNvb3JkUmFuZG9tXSwgMTogW3hDb29yZFJhbmRvbSArIHhMZW5ndGhPbmUsIHlDb29yZFJhbmRvbSArIHlMZW5ndGhPbmVdfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZW5ndGg6IHNoaXAgKyAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpdHM6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VuazogZmFsc2V9O1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvbXB1dGVyIFBsYWNlZCBTaGlwczogJywgQ29tcHV0ZXJQbGFjZWRTaGlwcyk7IC8vIFRlc3RpbmcgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc2hpcCA9PT0gMilcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYHxTaGlwICR7c2hpcH18YCk7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgIHdoaWxlICghY29tcHV0ZXJTaGlwUGxhY2VkKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxldCBjb29yZGluYXRlcyA9IHt9O1xuICAgICAgICAgICAgICAgIGxldCBjb29yZGluYXRlSW5kZXggPSAwOyBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBGaW5kIHdoaWNoIGNvb3JkaW5hdGVzIGFscmVhZHkgaGF2ZSBzaGlwIHBsYWNlbWVudHMgKEZpbmQgJ2NvbXB1dGVyLXNoaXAtcGxhY2VkJyk6IFxuICAgICAgICAgICAgICAgIGNvbXB1dGVyQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbXB1dGVyLXNoaXAtcGxhY2VkJykpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdYIENlbGw6ICcsIGNlbGwuZGF0YXNldC54KTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1kgQ2VsbDogJywgY2VsbC5kYXRhc2V0LnkpOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnWCBSYW5kb206ICcsIHhDb29yZFJhbmRvbSk7IC8vIFRlc3RpbmcgXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnWSBSYW5kb206ICcsIHlDb29yZFJhbmRvbSk7IC8vIFRlc3RpbmcgXG4gICAgICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlc1tjb29yZGluYXRlSW5kZXgrK10gPSBbcGFyc2VJbnQoY2VsbC5kYXRhc2V0LngpLCBwYXJzZUludChjZWxsLmRhdGFzZXQueSldO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1xcbicpOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ29vcmRpbmF0ZXMgd2l0aCBzaGlwIHBsYWNlbWVudHM6ICcsIGNvb3JkaW5hdGVzKTsgLy8gVGVzdGluZ1xuXG4gICAgICAgICAgICAgICAgLy8gVGVzdGluZyBmb3Igb3ZlcmxhcHBpbmcgc2hpcCBwbGFjZW1lbnRzIGFuZCBzZWFyY2hpbmcgZm9yIG9wZW4gY2VsbHMuIFxuICAgICAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBjb29yZGluYXRlcylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRlc3QgaWYgc2hpcCBsZW5ndGggMiBpcyBvdmVybGFwcGluZyB0aGUgb3RoZXIgc2hpcHMgb24gdGhlIGJvYXJkLiBcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvb3JkaW5hdGVzTm90T3ZlcmxhcHBpbmcgPSBmYWxzZTsgXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvb3JkaW5hdGVzW2tleV0pOyAvLyBUZXN0aW5nIFxuICAgICAgICAgICAgICAgICAgICB3aGlsZSghY29vcmRpbmF0ZXNOb3RPdmVybGFwcGluZylcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCgoY29vcmRpbmF0ZXNba2V5XVswXSA9PT0geENvb3JkUmFuZG9tICYmIGNvb3JkaW5hdGVzW2tleV1bMV0gPT09IHlDb29yZFJhbmRvbSkgfHwgXG4gICAgICAgICAgICAgICAgICAgICAgICAoY29vcmRpbmF0ZXNba2V5XVswXSA9PT0gKHhDb29yZFJhbmRvbSArIHhMZW5ndGhPbmUpICYmIGNvb3JkaW5hdGVzW2tleV1bMV0gPT09ICh5Q29vcmRSYW5kb20gKyB5TGVuZ3RoT25lKSkgfHwgXG4gICAgICAgICAgICAgICAgICAgICAgICAoY29vcmRpbmF0ZXNba2V5XVswXSA9PT0gKHhDb29yZFJhbmRvbSArIHhMZW5ndGhUd28pKSAmJiAoY29vcmRpbmF0ZXNba2V5XVsxXSA9PT0gKHlDb29yZFJhbmRvbSArIHlMZW5ndGhUd28pKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHx8ICgoY29vcmRpbmF0ZXNba2V5XVswXSA9PT0geENvb3JkUmFuZG9tICYmIGNvb3JkaW5hdGVzW2tleV1bMV0gPT09IHlDb29yZFJhbmRvbSkgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICAoY29vcmRpbmF0ZXNba2V5XVswXSA9PT0gKHhDb29yZFJhbmRvbSArIHhMZW5ndGhPbmUpICYmIGNvb3JkaW5hdGVzW2tleV1bMV0gPT09ICh5Q29vcmRSYW5kb20gKyB5TGVuZ3RoT25lKSkgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICAoY29vcmRpbmF0ZXNba2V5XVswXSA9PT0gKHhDb29yZFJhbmRvbSArIHhMZW5ndGhUd28pICYmIGNvb3JkaW5hdGVzW2tleV1bMV0gPT09ICh5Q29vcmRSYW5kb20gKyB5TGVuZ3RoVHdvKSkpKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhDb29yZFJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbXB1dGVyUm93cy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlDb29yZFJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmb3VuZFwiKTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzTm90T3ZlcmxhcHBpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTdG9wIHRoZSBjb29yZGluYXRlcyBmcm9tIGxlYXZpbmcgdGhlIGJvYXJkIGlmIHRoZXkgYXJlIGNoYW5nZWQuIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCh4Q29vcmRSYW5kb20gKyAyKSA+PSAxMCB8fCAoeUNvb3JkUmFuZG9tICsgMikgPj0gMTApXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeENvb3JkUmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29tcHV0ZXJSb3dzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeUNvb3JkUmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVyQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXYgPiBkaXZbZGF0YS14PVwiJHt4Q29vcmRSYW5kb219XCJdW2RhdGEteT1cIiR7eUNvb3JkUmFuZG9tfVwiXWApOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICAgICAgY29uc3QgY29tcHV0ZXJDZWxsT25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNvbXB1dGVyLWdhbWVib2FyZCA+IGRpdiA+IGRpdltkYXRhLXg9XCIke3hDb29yZFJhbmRvbSArIHhMZW5ndGhPbmV9XCJdW2RhdGEteT1cIiR7eUNvb3JkUmFuZG9tICsgeUxlbmd0aE9uZX1cIl1gKTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVyQ2VsbFR3byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXYgPiBkaXZbZGF0YS14PVwiJHt4Q29vcmRSYW5kb20gKyB4TGVuZ3RoVHdvfVwiXVtkYXRhLXk9XCIke3lDb29yZFJhbmRvbSArIHlMZW5ndGhUd299XCJdYCk7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb21wdXRlckNlbGwpOyAvLyBUZXN0aW5nIFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbXB1dGVyQ2VsbE9uZSk7IC8vIFRlc3RpbmcgXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29tcHV0ZXJDZWxsVHdvKTsgLy8gVGVzdGluZyBcblxuICAgICAgICAgICAgICAgIGlmICgoeENvb3JkUmFuZG9tICsgMikgPj0gMTAgfHwgKHlDb29yZFJhbmRvbSArIDIpID49IDEwKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb29yZGluYXRlcyBhcmUgb2ZmIHRoZSBib2FyZC5cIik7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJYOiBcIiwgeENvb3JkUmFuZG9tICsgMik7IC8vIFRlc3RpbmcgXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiWTogXCIsIHlDb29yZFJhbmRvbSArIDIpOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdcXG4nKTsgLy8gVGVzdGluZyBcblxuICAgICAgICAgICAgICAgICAgICB4Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb21wdXRlclJvd3MubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgeUNvb3JkUmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApOyBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY29tcHV0ZXJDZWxsLmNsYXNzTGlzdC5jb250YWlucygnY29tcHV0ZXItc2hpcC1wbGFjZWQnKSB8fCBjb21wdXRlckNlbGxPbmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb21wdXRlci1zaGlwLXBsYWNlZCcpIHx8IGNvbXB1dGVyQ2VsbFR3by5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbXB1dGVyLXNoaXAtcGxhY2VkJykpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGhlcmUgaXMgYW4gb3ZlcmxhcC4nKTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgICAgICAgICB4Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb21wdXRlclJvd3MubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgeUNvb3JkUmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxlYXZpbmcuLi5cIik7IC8vIFRlc3RpbmcgXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdcXG4nKTsgLy8gVGVzdGluZyBcbiAgICAgICAgICAgICAgICAgICAgY29tcHV0ZXJTaGlwUGxhY2VkID0gdHJ1ZTsgLy8gVGVzdGluZyBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKTsgLy8gVGVzdGluZyBcbiAgICAgICAgICAgIH0gXG5cbiAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVyQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXYgPiBkaXZbZGF0YS14PVwiJHt4Q29vcmRSYW5kb219XCJdW2RhdGEteT1cIiR7eUNvb3JkUmFuZG9tfVwiXWApO1xuICAgICAgICAgICAgY29tcHV0ZXJDZWxsLmNsYXNzTGlzdC5hZGQoJ2NvbXB1dGVyLXNoaXAtcGxhY2VkJyk7XG4gICAgICAgICAgICAvLyBjb21wdXRlckNlbGwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjsnKTsgXG5cbiAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVyQ2VsbE9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXYgPiBkaXZbZGF0YS14PVwiJHt4Q29vcmRSYW5kb20gKyB4TGVuZ3RoT25lfVwiXVtkYXRhLXk9XCIke3lDb29yZFJhbmRvbSArIHlMZW5ndGhPbmV9XCJdYCk7XG4gICAgICAgICAgICBjb21wdXRlckNlbGxPbmUuY2xhc3NMaXN0LmFkZCgnY29tcHV0ZXItc2hpcC1wbGFjZWQnKTtcbiAgICAgICAgICAgIC8vIGNvbXB1dGVyQ2VsbE9uZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQtY29sb3I6IGdyZWVuOycpO1xuXG4gICAgICAgICAgICBjb25zdCBjb21wdXRlckNlbGxUd28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY29tcHV0ZXItZ2FtZWJvYXJkID4gZGl2ID4gZGl2W2RhdGEteD1cIiR7eENvb3JkUmFuZG9tICsgeExlbmd0aFR3b31cIl1bZGF0YS15PVwiJHt5Q29vcmRSYW5kb20gKyB5TGVuZ3RoVHdvfVwiXWApO1xuICAgICAgICAgICAgY29tcHV0ZXJDZWxsVHdvLmNsYXNzTGlzdC5hZGQoJ2NvbXB1dGVyLXNoaXAtcGxhY2VkJyk7IFxuICAgICAgICAgICAgLy8gY29tcHV0ZXJDZWxsVHdvLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47Jyk7IFxuICAgICAgICAgICAgQ29tcHV0ZXJQbGFjZWRTaGlwc1tgc2hpcCAke2luZGV4fWBdID0ge2Nvb3JkaW5hdGVzOiB7MDogW3hDb29yZFJhbmRvbSwgeUNvb3JkUmFuZG9tXSwgMTogW3hDb29yZFJhbmRvbSArIHhMZW5ndGhPbmUsIHlDb29yZFJhbmRvbSArIHlMZW5ndGhPbmVdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMjogW3hDb29yZFJhbmRvbSArIHhMZW5ndGhUd28sIHlDb29yZFJhbmRvbSArIHlMZW5ndGhUd29dfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZW5ndGg6IHNoaXAgKyAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpdHM6IDAsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1bms6IGZhbHNlfTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb21wdXRlciBQbGFjZWQgU2hpcHM6ICcsIENvbXB1dGVyUGxhY2VkU2hpcHMpOyAvLyBUZXN0aW5nIFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNoaXAgPT09IDMpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGB8U2hpcCAke3NoaXB9fGApOyAgIFxuICAgICAgICAgICAgd2hpbGUoIWNvbXB1dGVyU2hpcFBsYWNlZClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsZXQgY29vcmRpbmF0ZXMgPSB7fTtcbiAgICAgICAgICAgICAgICBsZXQgY29vcmRpbmF0ZUluZGV4ID0gMDsgXG5cbiAgICAgICAgICAgICAgICAvLyBGaW5kIHdoaWNoIGNvb3JkaW5hdGVzIGFscmVhZHkgaGF2ZSBzaGlwIHBsYWNlbWVudHMgKEZpbmQgJ2NvbXB1dGVyLXNoaXAtcGxhY2VkJyk6IFxuICAgICAgICAgICAgICAgIGNvbXB1dGVyQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbXB1dGVyLXNoaXAtcGxhY2VkJykpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiWCBDZWxsOiBcIiwgY2VsbC5kYXRhc2V0LngpOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlkgQ2VsbDogXCIsIGNlbGwuZGF0YXNldC55KTsgLy8gVGVzdGluZyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiWCBSYW5kb206IFwiLCB4Q29vcmRSYW5kb20pOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlkgUmFuZG9tOiBcIiwgeUNvb3JkUmFuZG9tKTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXNbY29vcmRpbmF0ZUluZGV4KytdID0gW3BhcnNlSW50KGNlbGwuZGF0YXNldC54KSwgcGFyc2VJbnQoY2VsbC5kYXRhc2V0LnkpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdcXG4nKTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb29yZGluYXRlcyB3aXRoIHNoaXAgcGxhY2VtZW50czogXCIsIGNvb3JkaW5hdGVzKTsgLy8gVGVzdGluZyBcblxuICAgICAgICAgICAgICAgIC8vIFRlc3RpbmcgZm9yIG92ZXJsYXBwaW5nIHNoaXAgcGxhY2VtZW50cyBhbmQgc2VhcmNoaW5nIGZvciBvcGVuIGNlbGxzLiBcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gY29vcmRpbmF0ZXMpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvLyBUZXN0IGlmIHNoaXAgbGVuZ3RoIDIgaXMgb3ZlcmxhcHBpbmcgdGhlIG90aGVyIHNoaXBzIG9uIHRoZSBib2FyZC4gXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb29yZGluYXRlc05vdE92ZXJsYXBwaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvb3JkaW5hdGVzW2tleV0pOyAvLyBUZXN0aW5nIFxuICAgICAgICAgICAgICAgICAgICB3aGlsZSghY29vcmRpbmF0ZXNOb3RPdmVybGFwcGluZylcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCgoY29vcmRpbmF0ZXNba2V5XVswXSA9PT0geENvb3JkUmFuZG9tICYmIGNvb3JkaW5hdGVzW2tleV1bMV0gPT09IHlDb29yZFJhbmRvbSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAoY29vcmRpbmF0ZXNba2V5XVswXSA9PT0gKHhDb29yZFJhbmRvbSArIHhMZW5ndGhPbmUpICYmIGNvb3JkaW5hdGVzW2tleV1bMV0gPT09ICh5Q29vcmRSYW5kb20gKyB5TGVuZ3RoT25lKSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAoY29vcmRpbmF0ZXNba2V5XVswXSA9PT0gKHhDb29yZFJhbmRvbSArIHhMZW5ndGhUd28pICYmIGNvb3JkaW5hdGVzW2tleV1bMV0gPT09ICh5Q29vcmRSYW5kb20gKyB5TGVuZ3RoVHdvKSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAoY29vcmRpbmF0ZXNba2V5XVswXSA9PT0gKHhDb29yZFJhbmRvbSArIHhMZW5ndGhUaHJlZSkgJiYgY29vcmRpbmF0ZXNba2V5XVsxXSA9PT0gKHlDb29yZFJhbmRvbSArIHlMZW5ndGhUaHJlZSkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgIHx8ICgoY29vcmRpbmF0ZXNba2V5XVswXSA9PT0geENvb3JkUmFuZG9tICYmIGNvb3JkaW5hdGVzW2tleV1bMV0gPT09IHlDb29yZFJhbmRvbSkgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICAgKGNvb3JkaW5hdGVzW2tleV1bMF0gPT09ICh4Q29vcmRSYW5kb20gKyB4TGVuZ3RoT25lKSAmJiBjb29yZGluYXRlc1trZXldWzFdID09PSAoeUNvb3JkUmFuZG9tICsgeUxlbmd0aE9uZSkpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgKGNvb3JkaW5hdGVzW2tleV1bMF0gPT09ICh4Q29vcmRSYW5kb20gKyB4TGVuZ3RoVHdvKSAmJiBjb29yZGluYXRlc1trZXldWzFdID09PSAoeUNvb3JkUmFuZG9tICsgeUxlbmd0aFR3bykpICYmIFxuICAgICAgICAgICAgICAgICAgICAgICAgIChjb29yZGluYXRlc1trZXldWzBdID09PSAoeENvb3JkUmFuZG9tICsgeExlbmd0aFRocmVlKSAmJiBjb29yZGluYXRlc1trZXldWzFdID09PSAoeUNvb3JkUmFuZG9tICsgeUxlbmd0aFRocmVlKSkpKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhDb29yZFJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbXB1dGVyUm93cy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlDb29yZFJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmb3VuZFwiKTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlc05vdE92ZXJsYXBwaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RvcCB0aGUgY29vcmRpbmF0ZXMgZnJvbSBsZWF2aW5nIHRoZSBib2FyZCBpZiB0aGV5IGFyZSBjaGFuZ2VkLiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoeENvb3JkUmFuZG9tICsgMykgPj0gMTAgfHwgKHlDb29yZFJhbmRvbSArIDMpID49IDEwKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhDb29yZFJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbXB1dGVyUm93cy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlDb29yZFJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTsgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjb21wdXRlckNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY29tcHV0ZXItZ2FtZWJvYXJkID4gZGl2ID4gZGl2W2RhdGEteD1cIiR7eENvb3JkUmFuZG9tfVwiXVtkYXRhLXk9XCIke3lDb29yZFJhbmRvbX1cIl1gKTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVyQ2VsbE9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXYgPiBkaXZbZGF0YS14PVwiJHt4Q29vcmRSYW5kb20gKyB4TGVuZ3RoT25lfVwiXVtkYXRhLXk9XCIke3lDb29yZFJhbmRvbSArIHlMZW5ndGhPbmV9XCJdYCk7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wdXRlckNlbGxUd28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY29tcHV0ZXItZ2FtZWJvYXJkID4gZGl2ID4gZGl2W2RhdGEteD1cIiR7eENvb3JkUmFuZG9tICsgeExlbmd0aFR3b31cIl1bZGF0YS15PVwiJHt5Q29vcmRSYW5kb20gKyB5TGVuZ3RoVHdvfVwiXWApOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICAgICAgY29uc3QgY29tcHV0ZXJDZWxsVGhyZWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY29tcHV0ZXItZ2FtZWJvYXJkID4gZGl2ID4gZGl2W2RhdGEteD1cIiR7eENvb3JkUmFuZG9tICsgeExlbmd0aFRocmVlfVwiXVtkYXRhLXk9XCIke3lDb29yZFJhbmRvbSArIHlMZW5ndGhUaHJlZX1cIl1gKTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbXB1dGVyQ2VsbCk7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb21wdXRlckNlbGxPbmUpOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29tcHV0ZXJDZWxsVHdvKTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbXB1dGVyQ2VsbFRocmVlKTsgLy8gVGVzdGluZ1xuXG4gICAgICAgICAgICAgICAgaWYgKCh4Q29vcmRSYW5kb20gKyAzKSA+PSAxMCB8fCAoeUNvb3JkUmFuZG9tICsgMykgPj0gMTApXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvb3JkaW5hdGVzIGFyZSBvZmYgdGhlIGJvYXJkLlwiKTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlg6IFwiLCB4Q29vcmRSYW5kb20gKyAzKTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlk6IFwiLCB5Q29vcmRSYW5kb20gKyAzKTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnXFxuJyk7IC8vIFRlc3RpbmcgIFxuXG4gICAgICAgICAgICAgICAgICAgIHhDb29yZFJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbXB1dGVyUm93cy5sZW5ndGgpOyBcbiAgICAgICAgICAgICAgICAgICAgeUNvb3JkUmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApOyBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY29tcHV0ZXJDZWxsLmNsYXNzTGlzdC5jb250YWlucygnY29tcHV0ZXItc2hpcC1wbGFjZWQnKSB8fCBjb21wdXRlckNlbGxPbmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb21wdXRlci1zaGlwLXBsYWNlZCcpIHx8IFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcHV0ZXJDZWxsVHdvLmNsYXNzTGlzdC5jb250YWlucygnY29tcHV0ZXItc2hpcC1wbGFjZWQnKSB8fCBjb21wdXRlckNlbGxUaHJlZS5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbXB1dGVyLXNoaXAtcGxhY2VkJykpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoZXJlIGlzIGFuIG92ZXJsYXAuXCIpOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICAgICAgICAgIHhDb29yZFJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbXB1dGVyUm93cy5sZW5ndGgpOyBcbiAgICAgICAgICAgICAgICAgICAgeUNvb3JkUmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApOyBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJMZWF2aW5nLi4uXCIpOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiXFxuXCIpOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICAgICAgICAgIGNvbXB1dGVyU2hpcFBsYWNlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIik7IC8vIFRlc3RpbmcgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVyQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXYgPiBkaXZbZGF0YS14PVwiJHt4Q29vcmRSYW5kb219XCJdW2RhdGEteT1cIiR7eUNvb3JkUmFuZG9tfVwiXWApOyBcbiAgICAgICAgICAgIGNvbXB1dGVyQ2VsbC5jbGFzc0xpc3QuYWRkKCdjb21wdXRlci1zaGlwLXBsYWNlZCcpO1xuICAgICAgICAgICAgLy8gY29tcHV0ZXJDZWxsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlOycpO1xuXG4gICAgICAgICAgICBjb25zdCBjb21wdXRlckNlbGxPbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY29tcHV0ZXItZ2FtZWJvYXJkID4gZGl2ID4gZGl2W2RhdGEteD1cIiR7eENvb3JkUmFuZG9tICsgeExlbmd0aE9uZX1cIl1bZGF0YS15PVwiJHt5Q29vcmRSYW5kb20gKyB5TGVuZ3RoT25lfVwiXWApO1xuICAgICAgICAgICAgY29tcHV0ZXJDZWxsT25lLmNsYXNzTGlzdC5hZGQoJ2NvbXB1dGVyLXNoaXAtcGxhY2VkJyk7XG4gICAgICAgICAgICAvLyBjb21wdXRlckNlbGxPbmUuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7Jyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVyQ2VsbFR3byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXYgPiBkaXZbZGF0YS14PVwiJHt4Q29vcmRSYW5kb20gKyB4TGVuZ3RoVHdvfVwiXVtkYXRhLXk9XCIke3lDb29yZFJhbmRvbSArIHlMZW5ndGhUd299XCJdYCk7XG4gICAgICAgICAgICBjb21wdXRlckNlbGxUd28uY2xhc3NMaXN0LmFkZCgnY29tcHV0ZXItc2hpcC1wbGFjZWQnKTsgXG4gICAgICAgICAgICAvLyBjb21wdXRlckNlbGxUd28uc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7Jyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVyQ2VsbFRocmVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNvbXB1dGVyLWdhbWVib2FyZCA+IGRpdiA+IGRpdltkYXRhLXg9XCIke3hDb29yZFJhbmRvbSArIHhMZW5ndGhUaHJlZX1cIl1bZGF0YS15PVwiJHt5Q29vcmRSYW5kb20gKyB5TGVuZ3RoVGhyZWV9XCJdYCk7XG4gICAgICAgICAgICBjb21wdXRlckNlbGxUaHJlZS5jbGFzc0xpc3QuYWRkKCdjb21wdXRlci1zaGlwLXBsYWNlZCcpO1xuICAgICAgICAgICAgLy8gY29tcHV0ZXJDZWxsVGhyZWUuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7Jyk7IFxuICAgICAgICAgICAgQ29tcHV0ZXJQbGFjZWRTaGlwc1tgc2hpcCAke2luZGV4fWBdID0ge2Nvb3JkaW5hdGVzOiB7MDogW3hDb29yZFJhbmRvbSwgeUNvb3JkUmFuZG9tXSwgMTogW3hDb29yZFJhbmRvbSArIHhMZW5ndGhPbmUsIHlDb29yZFJhbmRvbSArIHlMZW5ndGhPbmVdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMjogW3hDb29yZFJhbmRvbSArIHhMZW5ndGhUd28sIHlDb29yZFJhbmRvbSArIHlMZW5ndGhUd29dLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMzogW3hDb29yZFJhbmRvbSArIHhMZW5ndGhUaHJlZSwgeUNvb3JkUmFuZG9tICsgeUxlbmd0aFRocmVlXX0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVuZ3RoOiBzaGlwICsgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaXRzOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1bms6IGZhbHNlfTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb21wdXRlciBQbGFjZWQgU2hpcHM6ICcsIENvbXB1dGVyUGxhY2VkU2hpcHMpOyAvLyBUZXN0aW5nIFxuICAgICAgICB9XG4gICAgfSk7XG59XG5cbi8vIEludGVmYWNlRE9NKCk6IEludGVyZmFjZSBzZWN0aW9uIGZvciB0aGUgdXNlci4gXG5mdW5jdGlvbiBJbnRlcmZhY2VET00oKXtcbiAgICBjb25zdCBnYW1lYm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZWJvYXJkLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllci1vbmUtYm9hcmQgPiBkaXYgPiBkaXYnKTsgXG5cbiAgICBjb25zdCBwbGF5ZXJJbnRlcmZhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwbGF5ZXJJbnRlcmZhY2UuY2xhc3NMaXN0LmFkZCgnaW50ZXJmYWNlJyk7XG5cbiAgICBjb25zdCBuZXdHYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbmV3R2FtZS50ZXh0Q29udGVudCA9ICdOZXcgR2FtZSc7XG5cbiAgICBjb25zdCBjb29yZGluYXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgeENvb3JkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgeENvb3JkLnRleHRDb250ZW50ID0gJ3gnO1xuICAgIGNvbnN0IHlDb29yZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHlDb29yZC50ZXh0Q29udGVudCA9ICd5JzsgXG4gICAgY29vcmRpbmF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh4Q29vcmQpO1xuICAgIGNvb3JkaW5hdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoeUNvb3JkKTsgXG5cbiAgICBjb25zdCBudW1iZXJPZlNoaXBzUGxhY2VkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbnVtYmVyT2ZTaGlwc1BsYWNlZC5jbGFzc0xpc3QuYWRkKCdudW1iZXItb2Ytc2hpcHMnKTsgXG5cbiAgICBjb25zdCBjb21tZW5jZUF0dGFjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5cbiAgICBwbGF5ZXJJbnRlcmZhY2UuYXBwZW5kQ2hpbGQobmV3R2FtZSk7XG4gICAgcGxheWVySW50ZXJmYWNlLmFwcGVuZENoaWxkKGNvb3JkaW5hdGVDb250YWluZXIpOyBcbiAgICBwbGF5ZXJJbnRlcmZhY2UuYXBwZW5kQ2hpbGQobnVtYmVyT2ZTaGlwc1BsYWNlZCk7IFxuICAgIHBsYXllckludGVyZmFjZS5hcHBlbmRDaGlsZChjb21tZW5jZUF0dGFjayk7IFxuICAgIGdhbWVib2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJJbnRlcmZhY2UpO1xuXG4gICAgbmV3R2FtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIE5ld0dhbWUpO1xufVxuXG4vLyBDaGFuZ2VUb1hBeGlzKCk6IFdpbGwgYWxsb3cgdGhlIHBsYXllciB0byBwbGFjZSBzaGlwcyBhbG9uZyB0aGUgeC1heGlzLlxuZnVuY3Rpb24gQ2hhbmdlVG9YQXhpcyhlKXtcbiAgICBjb25zdCB4Q29vcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW50ZXJmYWNlID4gZGl2ID4gYnV0dG9uOm50aC1jaGlsZCgxKScpO1xuICAgIGNvbnN0IHlDb29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnRlcmZhY2UgPiBkaXYgPiBidXR0b246bnRoLWNoaWxkKDIpJyk7IFxuICAgIGlmIChOZXdHYW1lU2VsZWN0ZWQubmV3R2FtZVNlbGVjdGVkKVxuICAgIHtcbiAgICAgICAgQXhpc0NoYW5nZS5heGlzV2FzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgIEF4aXNDaGFuZ2UuYXhpc0NoYW5nZSA9IDE7XG4gICAgICAgIHlDb29yZC5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50LWNvb3JkaW5hdGUnKTtcbiAgICAgICAgeENvb3JkLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQtY29vcmRpbmF0ZScpO1xuICAgICAgICBQbGFjZVNoaXBzKGUpO1xuICAgIH1cblxuICAgIC8vIHhDb29yZC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIENoYW5nZVRvWEF4aXMpO1xufVxuXG4vLyBDaGFuZ2VUb1lBeGlzKCk6IFdpbGwgYWxsb3cgdGhlIHBsYXllciB0byBwbGFjZSBzaGlwcyBhbG9uZyB0aGUgeS1heGlzLiBcbmZ1bmN0aW9uIENoYW5nZVRvWUF4aXMoZSl7XG4gICAgY29uc3QgeENvb3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmludGVyZmFjZSA+IGRpdiA+IGJ1dHRvbjpudGgtY2hpbGQoMSknKTtcbiAgICBjb25zdCB5Q29vcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW50ZXJmYWNlID4gZGl2ID4gYnV0dG9uOm50aC1jaGlsZCgyKScpOyBcbiAgICBpZiAoTmV3R2FtZVNlbGVjdGVkLm5ld0dhbWVTZWxlY3RlZClcbiAgICB7XG4gICAgICAgIEF4aXNDaGFuZ2UuYXhpc1dhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICBBeGlzQ2hhbmdlLmF4aXNDaGFuZ2UgPSAyO1xuICAgICAgICB4Q29vcmQuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudC1jb29yZGluYXRlJyk7XG4gICAgICAgIHlDb29yZC5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LWNvb3JkaW5hdGUnKTsgXG4gICAgICAgIFBsYWNlU2hpcHMoZSk7XG4gICAgfVxuXG4gICAgLy8geUNvb3JkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgQ2hhbmdlVG9ZQXhpcyk7IFxufVxuXG4vLyBOZXdHYW1lKCk6IFdpbGwgYmVnaW4gYSBuZXcgZ2FtZSBmb3IgdGhlIHBsYXllci4gXG5mdW5jdGlvbiBOZXdHYW1lKCl7XG4gICAgY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheWVyLW9uZS1ib2FyZCA+IGRpdiA+IGRpdicpOyBcbiAgICBjb25zdCBjb21wdXRlckNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbXB1dGVyLWdhbWVib2FyZCA+IGRpdiA+IGRpdicpOyBcbiAgICBjb25zdCB4Q29vcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW50ZXJmYWNlID4gZGl2ID4gYnV0dG9uOm50aC1jaGlsZCgxKScpO1xuICAgIGNvbnN0IHlDb29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnRlcmZhY2UgPiBkaXYgPiBidXR0b246bnRoLWNoaWxkKDIpJyk7IFxuXG4gICAgY29uc29sZS5sb2coJ1BsYXllciBiZWdpbnMgYSBuZXcgZ2FtZS4nKTsgLy8gVGVzdGluZyBcbiAgICBjb25zb2xlLmxvZygnXFxuJyk7IC8vIFRlc3RpbmcgXG5cbiAgICAvLyBUT0RPOiBSZXNldCBhbGwgdGhlIGdhbWUgYXR0cmlidXRlcyBpbiB0aGlzIGZ1bmN0aW9uIHdoZW4gdGhlXG4gICAgLy8gdXNlciB3YW50cyB0byBzdGFydCBhIG5ldyBnYW1lLiBcblxuICAgIC8vIFRPRE86IFJlc2V0IGFsbCB0aGUgY2VsbHMgb24gZWFjaCBnYW1lYm9hcmQuIFxuXG4gICAgLy8gYXNzaWduIGVtcHR5IG9iamVjdHMgdG8gYm90aCBvZiB0aGUgcGxhY2VtZW50IG9iamVjdHMuIFxuICAgIC8vIE9iamVjdC5hc3NpZ24oUGxhY2VkU2hpcHMsIHt9KTsgXG4gICAgLy8gT2JqZWN0LmFzc2lnbihDb21wdXRlclBsYWNlZFNoaXBzLCB7fSk7ICBcbiAgICBmb3IgKGxldCBrZXkgaW4gUGxhY2VkU2hpcHMpXG4gICAge1xuICAgICAgICBkZWxldGUgUGxhY2VkU2hpcHNba2V5XTtcbiAgICB9XG4gICAgXG4gICAgQXhpc0NoYW5nZS5heGlzQ2hhbmdlID0gbnVsbDtcbiAgICBBeGlzQ2hhbmdlLmF4aXNXYXNDaGFuZ2VkID0gZmFsc2U7IFxuXG4gICAgTmV3R2FtZVNlbGVjdGVkLm5ld0dhbWVTZWxlY3RlZCA9IHRydWU7IFxuXG4gICAgQWN0aXZhdGVHYW1lLmFjdGl2YXRlR2FtZSA9IGZhbHNlO1xuICAgIEFjdGl2YXRlR2FtZS5hY3RpdmF0ZVBsYXllck9uZVR1cm4gPSB0cnVlOyBcblxuICAgIERpc2FibGVQbGFjZW1lbnQuZGlzYWJsZVBsYWNlbWVudCA9IGZhbHNlOyBcblxuICAgIFNoaXBEYXRhLmxlbmd0aEluZGV4ID0gMDtcbiAgICBTaGlwRGF0YS5zaGlwTGVuZ3RoID0gMDtcbiAgICBTaGlwRGF0YS5zaGlwc1BsYWNlZCA9IDA7IFxuICAgIFxuICAgIC8vIENsZWFuIHRoZSBjb21wdXRlciBnYW1lYm9hcmQuIFxuICAgIGNvbXB1dGVyQ2VsbHMuZm9yRWFjaCgoY29tcHV0ZXJDZWxsKSA9PiB7XG4gICAgICAgIGNvbXB1dGVyQ2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdjb21wdXRlci1zaGlwLXBsYWNlZCcpOyBcbiAgICAgICAgY29tcHV0ZXJDZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXB1dGVyLXNoaXAtaGl0Jyk7XG4gICAgICAgIGNvbXB1dGVyQ2VsbC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7IC8vIFRlc3RpbmcgIFxuICAgICAgICBjb21wdXRlckNlbGwucmVwbGFjZUNoaWxkcmVuKCk7IFxuICAgIH0pOyBcbiAgICBcbiAgICAvLyBDbGVhbiB0aGUgcGxheWVyIGdhbWVib2FyZC4gXG4gICAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXAtcGxhY2VkJyk7IFxuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTsgXG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgncGxheWVyLW9uZS1zaGlwLWhpdCcpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXB1dGVyLWhpdC1taXNzZWQnKTsgXG4gICAgICAgIC8vIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBQbGFjZU9uWCk7IFxuICAgICAgICAvLyBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgUGxhY2VPblkpO1xuICAgICAgICBjZWxsLnJlcGxhY2VDaGlsZHJlbigpOyBcbiAgICB9KTtcblxuICAgIC8vIENsZWFuIHRoZSB4IGFuZCB5IGF4ZSBidXR0b25zLiBcbiAgICB4Q29vcmQuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudC1jb29yZGluYXRlJyk7IFxuICAgIHlDb29yZC5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50LWNvb3JkaW5hdGUnKTtcbiAgICB4Q29vcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBDaGFuZ2VUb1hBeGlzKTtcbiAgICB5Q29vcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBDaGFuZ2VUb1lBeGlzKTsgXG5cbiAgICAvLyBDbGVhbnMgdGhlIHBsYXllciBhbmQgY29tcHV0ZXIgZGlzcGxheSBldmVudHMuIFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItZ2FtZWJvYXJkLWV2ZW50cycpLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcHV0ZXItZ2FtZWJvYXJkLWV2ZW50cycpLnRleHRDb250ZW50ID0gXCJcIjsgIFxuXG4gICAgLy8gUmVtb3ZlIENvbW1lbmNlIEF0dGFjayBMYWJlbC5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW50ZXJmYWNlID4gZGl2Om50aC1jaGlsZCg0KScpLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbW1lbmNlLWF0dGFjaycpOyBcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW50ZXJmYWNlID4gZGl2Om50aC1jaGlsZCg0KScpLnRleHRDb250ZW50ID0gXCJcIjsgXG5cbiAgICBDb21wdXRlclBsYWNlU2hpcHMoKTsgXG4gICAgUGxhY2VTaGlwcygpO1xufVxuXG4vLyBFbnRlclgoKTogV2lsbCBlbnRlciBlYWNoIGNlbGwgb24gdGhlIHgtYXhpcyBzZWxlY3Rpb24uIFxuZnVuY3Rpb24gRW50ZXJYKGUpe1xuICAgIGNvbnNvbGUubG9nKGUpOyAvLyBUZXN0aW5nIFxuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KTsgLy8gVGVzdGluZyBcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5kYXRhc2V0LngpOyAvLyBUZXN0aW5nIFxuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmRhdGFzZXQueSk7IC8vIFRlc3RpbmdcbiAgICBjb25zb2xlLmxvZygnXFxuJyk7IC8vIFRlc3RpbmdcbiBcbiAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7ZS50YXJnZXQuZGF0YXNldC54fVwiXVtkYXRhLXk9XCIke2UudGFyZ2V0LmRhdGFzZXQueX1cIl1gKTtcbiAgICBjb25zdCBuZXh0Q2VsbE9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke2UudGFyZ2V0LmRhdGFzZXQueH1cIl1bZGF0YS15PVwiJHtwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnkpICsgMX1cIl1gKTtcbiAgICBjb25zdCBuZXh0Q2VsbFR3byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke2UudGFyZ2V0LmRhdGFzZXQueH1cIl1bZGF0YS15PVwiJHtwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnkpICsgMn1cIl1gKTtcbiAgICBjb25zdCBuZXh0Q2VsbFRocmVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7ZS50YXJnZXQuZGF0YXNldC54fVwiXVtkYXRhLXk9XCIke3BhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueSkgKyAzfVwiXWApO1xuXG4gICAgaWYgKFNoaXBEYXRhLnNoaXBMZW5ndGggPT09IDApXG4gICAge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXRlc3QnKTsgXG4gICAgfVxuICAgIGVsc2UgaWYgKFNoaXBEYXRhLnNoaXBMZW5ndGggPT09IDEpIC8vIFRoZSBzaGlwIGxlbmd0aCB0byBiZSBwbGFjZWQgb24gdGhlIGJvYXJkLlxuICAgIHtcbiAgICAgICAgaWYgKCEocGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC55KSA9PT0gOSkpIC8vIEtlZXBzIGFsbCBzaGlwIHBsYWNlbWVudHMgb24gdGhlIGdhbWVib2FyZC4gXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaG92ZXItdGVzdCcpO1xuICAgICAgICAgICAgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmFkZCgnaG92ZXItdGVzdCcpOyBcbiAgICAgICAgICAgIERpc2FibGVQbGFjZW1lbnQuZGlzYWJsZVBsYWNlbWVudCA9IGZhbHNlOyBcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIERpc2FibGVQbGFjZW1lbnQuZGlzYWJsZVBsYWNlbWVudCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoU2hpcERhdGEuc2hpcExlbmd0aCA9PT0gMilcbiAgICB7XG4gICAgICAgIGlmICghKChwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnkpICsgMikgPT09IDEwKSAmJiAhKChwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnkpICsgMSkgPT09IDkpICYmICEocGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC55KSA9PT0gOSkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaG92ZXItdGVzdCcpO1xuICAgICAgICAgICAgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmFkZCgnaG92ZXItdGVzdCcpOyBcbiAgICAgICAgICAgIG5leHRDZWxsVHdvLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgICAgIERpc2FibGVQbGFjZW1lbnQuZGlzYWJsZVBsYWNlbWVudCA9IGZhbHNlOyBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIFxuICAgICAgICB7XG4gICAgICAgICAgICBEaXNhYmxlUGxhY2VtZW50LmRpc2FibGVQbGFjZW1lbnQgPSB0cnVlOyBcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAzKVxuICAgIHtcbiAgICAgICAgaWYgKCEoKHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueSkgKyAzKSA9PT0gMTApICYmICEoKHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueSkgKyAyKSA9PT0gOSkgJiYgISgocGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC55KSArIDEpID09PSA5KSAmJiAhKHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueSkgPT09IDkpKVxuICAgICAgICB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgICAgIG5leHRDZWxsT25lLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgICAgIG5leHRDZWxsVHdvLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgICAgIG5leHRDZWxsVGhyZWUuY2xhc3NMaXN0LmFkZCgnaG92ZXItdGVzdCcpO1xuICAgICAgICAgICAgRGlzYWJsZVBsYWNlbWVudC5kaXNhYmxlUGxhY2VtZW50ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBcbiAgICAgICAge1xuICAgICAgICAgICAgRGlzYWJsZVBsYWNlbWVudC5kaXNhYmxlUGxhY2VtZW50ID0gdHJ1ZTsgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBOb3RlOiBJIGNvdWxkIHB1dCB0aGlzIGluIGl0cyBvd24gZnVuY3Rpb24sIGJ1dCBmb3Igbm93IEkgd2lsbCB1c2UgdGhlIEVudGVyWCBmdW5jdGlvbiB0byB0ZXN0XG4gICAgLy8gdGhpcyBhbG9nb3JpdGhtIG91dC4gSXQgd291bGQgYmUgYSBsb3QgbW9yZSBlZmZlY2llbnQgdG8gcGxhY2UgdGhpcyBpbiBhbm90aGVyIGZ1bmN0aW9uXG4gICAgLy8gc28geW91IGNhbiByZW1vdmUgdGhlIGNsaWNrIGV2ZW50LiBZb3Ugc2hvdWxkIHB1dCB0aGVtIGluIHRoZSBQbGFjZU9uWCgpIGFuZCBQbGFjZU9uWSgpIGZ1bmN0aW9ucy4gQnV0XG4gICAgLy8gZm9yIG5vdyB5b3UgY2FuIHVzZSB0aGUgU2hpcERhdGEubGVuZ3RoSW5kZXggcHJvcGVydHkgaW4gdGhlIGlmIHN0YXRlbWVudCBjb25kaXRpb24uIEN1cnJlbnRseVxuICAgIC8vIFVzaW5nIGRpc2FibGVQbGFjZW1lbnQgdG8gc3RvcCB0aGUgcGxheWVyIGZyb20gdGhlIHBsYWNpbmcgYSBzaGlwIG9uIHRoZSBnYW1lYm9hcmQgd2hlbiB0aGV5IGxlYXZlXG4gICAgLy8gdGhlIGJvYXJkLiBcblxuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBQbGFjZU9uWCk7XG4gICAgLy8gY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAvLyAgICAgaWYgKCFkaXNhYmxlUGxhY2VtZW50KVxuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZygnWDogJywgY2VsbC5kYXRhc2V0LngpOyBcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdZOiAnLCBjZWxsLmRhdGFzZXQueSk7IFxuXG4gICAgLy8gICAgICAgICBpZiAoU2hpcERhdGEuc2hpcExlbmd0aCA9PT0gMCAmJiBTaGlwRGF0YS5sZW5ndGhJbmRleCA8IDEwKSBcbiAgICAvLyAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICBpZiAoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykpIC8vIENhbnQgcGxhY2UgdGhlIHNoaXAgb24gdGhpcyBjZWxsIHdoZW4gdGhlcmUgaXMgb25lIGFscmVhZHkgb24gdGhlIGNlbGwuIFxuICAgIC8vICAgICAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NlbGwgYWxyZWFkeSBjb250YWlucyBhIHNoaXAnKTsgLy8gVGVzdGluZ1xuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICBlbHNlXG4gICAgLy8gICAgICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VkJyk7IFxuICAgIC8vICAgICAgICAgICAgICAgICBQbGFjZWRTaGlwc1tgc2hpcCAke1NoaXBEYXRhLmxlbmd0aEluZGV4fWBdLmNvb3JkaW5hdGVzID0gezA6IFtwYXJzZUludChjZWxsLmRhdGFzZXQueCksIHBhcnNlSW50KGNlbGwuZGF0YXNldC55KV19O1xuICAgIC8vICAgICAgICAgICAgICAgICBTaGlwRGF0YS5sZW5ndGhJbmRleCsrOyBcbiAgICAvLyAgICAgICAgICAgICAgICAgQXhpc0NoYW5nZS5heGlzV2FzQ2hhbmdlZCA9IGZhbHNlO1xuICAgIC8vICAgICAgICAgICAgICAgICBQbGFjZVNoaXBzKCk7IFxuICAgIC8vICAgICAgICAgICAgIH0gICAgICAgXG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICBlbHNlIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAxICYmIFNoaXBEYXRhLmxlbmd0aEluZGV4IDwgMTApXG4gICAgLy8gICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgaWYgKChjZWxsLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSAmJiBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykpIFxuICAgIC8vICAgICAgICAgICAgIHx8IChjZWxsLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSB8fCBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykpKVxuICAgIC8vICAgICAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NlbGwgYWxyZWFkeSBjb250YWlucyBhIHNoaXAnKTsgLy8gVGVzdGluZ1xuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICBlbHNlXG4gICAgLy8gICAgICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VkJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgIG5leHRDZWxsT25lLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VkJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgIFBsYWNlZFNoaXBzW2BzaGlwICR7U2hpcERhdGEubGVuZ3RoSW5kZXh9YF0uY29vcmRpbmF0ZXMgPSB7MDogW3BhcnNlSW50KGNlbGwuZGF0YXNldC54KSwgcGFyc2VJbnQoY2VsbC5kYXRhc2V0LnkpXSwgXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTogW3BhcnNlSW50KG5leHRDZWxsT25lLmRhdGFzZXQueCksIHBhcnNlSW50KG5leHRDZWxsT25lLmRhdGFzZXQueSldfTtcbiAgICAvLyAgICAgICAgICAgICAgICAgU2hpcERhdGEubGVuZ3RoSW5kZXgrKztcbiAgICAvLyAgICAgICAgICAgICAgICAgQXhpc0NoYW5nZS5heGlzV2FzQ2hhbmdlZCA9IGZhbHNlO1xuICAgIC8vICAgICAgICAgICAgICAgICBQbGFjZVNoaXBzKCk7IFxuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIGVsc2UgaWYgKFNoaXBEYXRhLnNoaXBMZW5ndGggPT09IDIgJiYgU2hpcERhdGEubGVuZ3RoSW5kZXggPCAxMClcbiAgICAvLyAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICBpZiAoKGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpICYmIG5leHRDZWxsT25lLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSAmJiBuZXh0Q2VsbFR3by5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykpIFxuICAgIC8vICAgICAgICAgICAgIHx8IChjZWxsLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSB8fCBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgfHwgbmV4dENlbGxUd28uY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpKSlcbiAgICAvLyAgICAgICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDZWxsIGFscmVhZHkgY29udGFpbnMgYSBzaGlwJyk7IC8vIFRlc3RpbmdcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgICAgZWxzZVxuICAgIC8vICAgICAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlZCcpO1xuICAgIC8vICAgICAgICAgICAgICAgICBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlZCcpO1xuICAgIC8vICAgICAgICAgICAgICAgICBuZXh0Q2VsbFR3by5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlZCcpO1xuICAgIC8vICAgICAgICAgICAgICAgICBQbGFjZWRTaGlwc1tgc2hpcCAke1NoaXBEYXRhLmxlbmd0aEluZGV4fWBdLmNvb3JkaW5hdGVzID0gezA6IFtwYXJzZUludChjZWxsLmRhdGFzZXQueCksIHBhcnNlSW50KGNlbGwuZGF0YXNldC55KV0sXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTogW3BhcnNlSW50KG5leHRDZWxsT25lLmRhdGFzZXQueCksIHBhcnNlSW50KG5leHRDZWxsT25lLmRhdGFzZXQueSldLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDI6IFtwYXJzZUludChuZXh0Q2VsbFR3by5kYXRhc2V0LngpLCBwYXJzZUludChuZXh0Q2VsbFR3by5kYXRhc2V0LnkpXX07XG4gICAgLy8gICAgICAgICAgICAgICAgIFNoaXBEYXRhLmxlbmd0aEluZGV4Kys7XG4gICAgLy8gICAgICAgICAgICAgICAgIEF4aXNDaGFuZ2UuYXhpc1dhc0NoYW5nZWQgPSBmYWxzZTtcbiAgICAvLyAgICAgICAgICAgICAgICAgUGxhY2VTaGlwcygpOyBcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICBlbHNlIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAzICYmIFNoaXBEYXRhLmxlbmd0aEluZGV4IDwgMTApXG4gICAgLy8gICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgaWYgKChjZWxsLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSAmJiBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgJiYgbmV4dENlbGxUd28uY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpICYmIG5leHRDZWxsVGhyZWUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpKVxuICAgIC8vICAgICAgICAgICAgIHx8IChjZWxsLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSB8fCBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgfHwgbmV4dENlbGxUd28uY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpIHx8IG5leHRDZWxsVGhyZWUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpKSlcbiAgICAvLyAgICAgICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDZWxsIGFscmVhZHkgY29udGFpbnMgYSBzaGlwJyk7IC8vIFRlc3RpbmdcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgICAgZWxzZVxuICAgIC8vICAgICAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlZCcpO1xuICAgIC8vICAgICAgICAgICAgICAgICBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlZCcpO1xuICAgIC8vICAgICAgICAgICAgICAgICBuZXh0Q2VsbFR3by5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlZCcpO1xuICAgIC8vICAgICAgICAgICAgICAgICBuZXh0Q2VsbFRocmVlLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VkJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgIFBsYWNlZFNoaXBzW2BzaGlwICR7U2hpcERhdGEubGVuZ3RoSW5kZXh9YF0uY29vcmRpbmF0ZXMgPSB7MDogW3BhcnNlSW50KGNlbGwuZGF0YXNldC54KSwgcGFyc2VJbnQoY2VsbC5kYXRhc2V0LnkpXSxcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxOiBbcGFyc2VJbnQobmV4dENlbGxPbmUuZGF0YXNldC54KSwgcGFyc2VJbnQobmV4dENlbGxPbmUuZGF0YXNldC55KV0sXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMjogW3BhcnNlSW50KG5leHRDZWxsVHdvLmRhdGFzZXQueCksIHBhcnNlSW50KG5leHRDZWxsVHdvLmRhdGFzZXQueSldLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDM6IFtwYXJzZUludChuZXh0Q2VsbFRocmVlLmRhdGFzZXQueCksIHBhcnNlSW50KG5leHRDZWxsVGhyZWUuZGF0YXNldC55KV19O1xuICAgIC8vICAgICAgICAgICAgICAgICBTaGlwRGF0YS5sZW5ndGhJbmRleCsrOyBcbiAgICAvLyAgICAgICAgICAgICAgICAgQXhpc0NoYW5nZS5heGlzV2FzQ2hhbmdlZCA9IGZhbHNlOyBcbiAgICAvLyAgICAgICAgICAgICAgICAgUGxhY2VTaGlwcygpOyBcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvLyB9KTtcbn1cblxuLy8gUGxhY2VPblgoKTogV2lsbCBwbGFjZSBhIHNoaXAgb24gdGhlIGdhbWVib2FyZHMgeC1heGlzLlxuZnVuY3Rpb24gUGxhY2VPblgoZSl7XG4gICAgY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheWVyLW9uZS1ib2FyZCA+IGRpdiA+IGRpdicpO1xuICAgIC8vIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAvLyAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci10ZXN0Jyk7IFxuICAgIC8vIH0pOyBcblxuICAgIGlmICghRGlzYWJsZVBsYWNlbWVudC5kaXNhYmxlUGxhY2VtZW50KVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1g6ICcsIGUudGFyZ2V0LmRhdGFzZXQueCk7IFxuICAgICAgICBjb25zb2xlLmxvZygnWTogJywgZS50YXJnZXQuZGF0YXNldC55KTsgXG4gICAgXG4gICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnh9XCJdW2RhdGEteT1cIiR7ZS50YXJnZXQuZGF0YXNldC55fVwiXWApO1xuICAgICAgICBjb25zdCBuZXh0Q2VsbE9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke2UudGFyZ2V0LmRhdGFzZXQueH1cIl1bZGF0YS15PVwiJHtwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnkpICsgMX1cIl1gKTtcbiAgICAgICAgY29uc3QgbmV4dENlbGxUd28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnh9XCJdW2RhdGEteT1cIiR7cGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC55KSArIDJ9XCJdYCk7XG4gICAgICAgIGNvbnN0IG5leHRDZWxsVGhyZWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnh9XCJdW2RhdGEteT1cIiR7cGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC55KSArIDN9XCJdYCk7XG4gICAgXG4gICAgICAgIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAwICYmIFNoaXBEYXRhLmxlbmd0aEluZGV4IDwgMTApIFxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykpIC8vIENhbnQgcGxhY2UgdGhlIHNoaXAgb24gdGhpcyBjZWxsIHdoZW4gdGhlcmUgaXMgb25lIGFscmVhZHkgb24gdGhlIGNlbGwuIFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdDZWxsIGFscmVhZHkgY29udGFpbnMgYSBzaGlwJyk7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlZCcpOyBcbiAgICAgICAgICAgICAgICBQbGFjZWRTaGlwc1tgc2hpcCAke1NoaXBEYXRhLmxlbmd0aEluZGV4fWBdLmNvb3JkaW5hdGVzID0gezA6IFtwYXJzZUludChjZWxsLmRhdGFzZXQueCksIHBhcnNlSW50KGNlbGwuZGF0YXNldC55KV19O1xuICAgICAgICAgICAgICAgIFNoaXBEYXRhLmxlbmd0aEluZGV4Kys7IFxuICAgICAgICAgICAgICAgIEF4aXNDaGFuZ2UuYXhpc1dhc0NoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBQbGFjZVNoaXBzKCk7IFxuICAgICAgICAgICAgfSAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAxICYmIFNoaXBEYXRhLmxlbmd0aEluZGV4IDwgMTApXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICgoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgJiYgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpKSBcbiAgICAgICAgICAgIHx8IChjZWxsLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSB8fCBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdDZWxsIGFscmVhZHkgY29udGFpbnMgYSBzaGlwJyk7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgICAgICByZXR1cm47IFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcC1wbGFjZWQnKTtcbiAgICAgICAgICAgICAgICBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlZCcpO1xuICAgICAgICAgICAgICAgIFBsYWNlZFNoaXBzW2BzaGlwICR7U2hpcERhdGEubGVuZ3RoSW5kZXh9YF0uY29vcmRpbmF0ZXMgPSB7MDogW3BhcnNlSW50KGNlbGwuZGF0YXNldC54KSwgcGFyc2VJbnQoY2VsbC5kYXRhc2V0LnkpXSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxOiBbcGFyc2VJbnQobmV4dENlbGxPbmUuZGF0YXNldC54KSwgcGFyc2VJbnQobmV4dENlbGxPbmUuZGF0YXNldC55KV19O1xuICAgICAgICAgICAgICAgIFNoaXBEYXRhLmxlbmd0aEluZGV4Kys7XG4gICAgICAgICAgICAgICAgQXhpc0NoYW5nZS5heGlzV2FzQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIFBsYWNlU2hpcHMoKTsgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoU2hpcERhdGEuc2hpcExlbmd0aCA9PT0gMiAmJiBTaGlwRGF0YS5sZW5ndGhJbmRleCA8IDEwKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoKGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpICYmIG5leHRDZWxsT25lLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSAmJiBuZXh0Q2VsbFR3by5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykpIFxuICAgICAgICAgICAgfHwgKGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpIHx8IG5leHRDZWxsT25lLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSB8fCBuZXh0Q2VsbFR3by5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdDZWxsIGFscmVhZHkgY29udGFpbnMgYSBzaGlwJyk7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlZCcpO1xuICAgICAgICAgICAgICAgIG5leHRDZWxsT25lLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VkJyk7XG4gICAgICAgICAgICAgICAgbmV4dENlbGxUd28uY2xhc3NMaXN0LmFkZCgnc2hpcC1wbGFjZWQnKTtcbiAgICAgICAgICAgICAgICBQbGFjZWRTaGlwc1tgc2hpcCAke1NoaXBEYXRhLmxlbmd0aEluZGV4fWBdLmNvb3JkaW5hdGVzID0gezA6IFtwYXJzZUludChjZWxsLmRhdGFzZXQueCksIHBhcnNlSW50KGNlbGwuZGF0YXNldC55KV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxOiBbcGFyc2VJbnQobmV4dENlbGxPbmUuZGF0YXNldC54KSwgcGFyc2VJbnQobmV4dENlbGxPbmUuZGF0YXNldC55KV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyOiBbcGFyc2VJbnQobmV4dENlbGxUd28uZGF0YXNldC54KSwgcGFyc2VJbnQobmV4dENlbGxUd28uZGF0YXNldC55KV19O1xuICAgICAgICAgICAgICAgIFNoaXBEYXRhLmxlbmd0aEluZGV4Kys7XG4gICAgICAgICAgICAgICAgQXhpc0NoYW5nZS5heGlzV2FzQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIFBsYWNlU2hpcHMoKTsgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoU2hpcERhdGEuc2hpcExlbmd0aCA9PT0gMyAmJiBTaGlwRGF0YS5sZW5ndGhJbmRleCA8IDEwKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoKGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpICYmIG5leHRDZWxsT25lLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSAmJiBuZXh0Q2VsbFR3by5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgJiYgbmV4dENlbGxUaHJlZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykpXG4gICAgICAgICAgICB8fCAoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgfHwgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpIHx8IG5leHRDZWxsVHdvLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSB8fCBuZXh0Q2VsbFRocmVlLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ0NlbGwgYWxyZWFkeSBjb250YWlucyBhIHNoaXAnKTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgICAgIHJldHVybjsgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlZCcpO1xuICAgICAgICAgICAgICAgIG5leHRDZWxsT25lLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VkJyk7XG4gICAgICAgICAgICAgICAgbmV4dENlbGxUd28uY2xhc3NMaXN0LmFkZCgnc2hpcC1wbGFjZWQnKTtcbiAgICAgICAgICAgICAgICBuZXh0Q2VsbFRocmVlLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VkJyk7XG4gICAgICAgICAgICAgICAgUGxhY2VkU2hpcHNbYHNoaXAgJHtTaGlwRGF0YS5sZW5ndGhJbmRleH1gXS5jb29yZGluYXRlcyA9IHswOiBbcGFyc2VJbnQoY2VsbC5kYXRhc2V0LngpLCBwYXJzZUludChjZWxsLmRhdGFzZXQueSldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTogW3BhcnNlSW50KG5leHRDZWxsT25lLmRhdGFzZXQueCksIHBhcnNlSW50KG5leHRDZWxsT25lLmRhdGFzZXQueSldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMjogW3BhcnNlSW50KG5leHRDZWxsVHdvLmRhdGFzZXQueCksIHBhcnNlSW50KG5leHRDZWxsVHdvLmRhdGFzZXQueSldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMzogW3BhcnNlSW50KG5leHRDZWxsVGhyZWUuZGF0YXNldC54KSwgcGFyc2VJbnQobmV4dENlbGxUaHJlZS5kYXRhc2V0LnkpXX07XG4gICAgICAgICAgICAgICAgU2hpcERhdGEubGVuZ3RoSW5kZXgrKzsgXG4gICAgICAgICAgICAgICAgQXhpc0NoYW5nZS5heGlzV2FzQ2hhbmdlZCA9IGZhbHNlOyBcbiAgICAgICAgICAgICAgICBQbGFjZVNoaXBzKCk7IFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSBcblxuLy8gTGVhdmVYKCk6IFdpbGwgbGVhdmUgZWFjaCBjZWxsIGZyb20gdGhlIHgtYXhpcyBzZWxlY3Rpb24uIFxuZnVuY3Rpb24gTGVhdmVYKGUpe1xuICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnh9XCJdW2RhdGEteT1cIiR7ZS50YXJnZXQuZGF0YXNldC55fVwiXWApO1xuICAgIGNvbnN0IG5leHRDZWxsT25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7ZS50YXJnZXQuZGF0YXNldC54fVwiXVtkYXRhLXk9XCIke3BhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueSkgKyAxfVwiXWApO1xuICAgIGNvbnN0IG5leHRDZWxsVHdvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7ZS50YXJnZXQuZGF0YXNldC54fVwiXVtkYXRhLXk9XCIke3BhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueSkgKyAyfVwiXWApO1xuICAgIGNvbnN0IG5leHRDZWxsVGhyZWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnh9XCJdW2RhdGEteT1cIiR7cGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC55KSArIDN9XCJdYCk7XG5cbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdob3Zlci10ZXN0JykpXG4gICAge1xuICAgICAgICBpZiAoU2hpcERhdGEuc2hpcExlbmd0aCA9PT0gMClcbiAgICAgICAge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoU2hpcERhdGEuc2hpcExlbmd0aCA9PT0gMSlcbiAgICAgICAge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgICAgICBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoU2hpcERhdGEuc2hpcExlbmd0aCA9PT0gMilcbiAgICAgICAge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgICAgICBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgICAgICBuZXh0Q2VsbFR3by5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci10ZXN0Jyk7IFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKFNoaXBEYXRhLnNoaXBMZW5ndGggPT09IDMpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItdGVzdCcpO1xuICAgICAgICAgICAgbmV4dENlbGxPbmUuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItdGVzdCcpO1xuICAgICAgICAgICAgbmV4dENlbGxUd28uY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItdGVzdCcpO1xuICAgICAgICAgICAgbmV4dENlbGxUaHJlZS5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci10ZXN0Jyk7IFxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBFbnRlclkoKTogV2lsbCBlbnRlciBlYWNoIGNlbGwgb24gdGhlIHktYXhpcyBzZWxlY3Rpb24uXG5mdW5jdGlvbiBFbnRlclkoZSl7XG4gICAgY29uc29sZS5sb2coZSk7IC8vIFRlc3RpbmcgXG4gICAgY29uc29sZS5sb2coZS50YXJnZXQpOyAvLyBUZXN0aW5nXG4gICAgY29uc29sZS5sb2coZS50YXJnZXQuZGF0YXNldC54KTsgLy8gVGVzdGluZ1xuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmRhdGFzZXQueSk7IC8vIFRlc3RpbmcgXG4gICAgY29uc29sZS5sb2coJ1xcbicpOyAvLyBUZXN0aW5nXG5cbiAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7ZS50YXJnZXQuZGF0YXNldC54fVwiXVtkYXRhLXk9XCIke2UudGFyZ2V0LmRhdGFzZXQueX1cIl1gKTtcbiAgICBjb25zdCBuZXh0Q2VsbE9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke3BhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueCkgKyAxfVwiXVtkYXRhLXk9XCIke2UudGFyZ2V0LmRhdGFzZXQueX1cIl1gKTtcbiAgICBjb25zdCBuZXh0Q2VsbFR3byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke3BhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueCkgKyAyfVwiXVtkYXRhLXk9XCIke2UudGFyZ2V0LmRhdGFzZXQueX1cIl1gKTtcbiAgICBjb25zdCBuZXh0Q2VsbFRocmVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7cGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC54KSArIDN9XCJdW2RhdGEteT1cIiR7ZS50YXJnZXQuZGF0YXNldC55fVwiXWApO1xuXG4gICAgaWYgKFNoaXBEYXRhLnNoaXBMZW5ndGggPT09IDApXG4gICAge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXRlc3QnKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoU2hpcERhdGEuc2hpcExlbmd0aCA9PT0gMSlcbiAgICB7XG4gICAgICAgIGlmICghKHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueCkgPT09IDkpKVxuICAgICAgICB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgICAgIG5leHRDZWxsT25lLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgICAgIERpc2FibGVQbGFjZW1lbnQuZGlzYWJsZVBsYWNlbWVudCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgXG4gICAgICAgIHtcbiAgICAgICAgICAgIERpc2FibGVQbGFjZW1lbnQuZGlzYWJsZVBsYWNlbWVudCA9IHRydWU7IFxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKFNoaXBEYXRhLnNoaXBMZW5ndGggPT09IDIpXG4gICAge1xuICAgICAgICBpZiAoISgocGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC54KSArIDIpID09PSAxMCkgJiYgISgocGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC54KSArIDEpID09PSA5KSAmJiAhKHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueCkgPT09IDkpKVxuICAgICAgICB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgICAgIG5leHRDZWxsT25lLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgICAgIG5leHRDZWxsVHdvLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgICAgIERpc2FibGVQbGFjZW1lbnQuZGlzYWJsZVBsYWNlbWVudCA9IGZhbHNlOyBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIFxuICAgICAgICB7XG4gICAgICAgICAgICBEaXNhYmxlUGxhY2VtZW50LmRpc2FibGVQbGFjZW1lbnQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKFNoaXBEYXRhLnNoaXBMZW5ndGggPT09IDMpXG4gICAge1xuICAgICAgICBpZiAoISgocGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC54KSArIDMpID09PSAxMCkgJiYgISgocGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC54KSArIDIpID09PSA5KSAmJiAhKChwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LngpICsgMSkgPT09IDkpICYmICEocGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC54KSA9PT0gOSkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaG92ZXItdGVzdCcpO1xuICAgICAgICAgICAgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmFkZCgnaG92ZXItdGVzdCcpO1xuICAgICAgICAgICAgbmV4dENlbGxUd28uY2xhc3NMaXN0LmFkZCgnaG92ZXItdGVzdCcpO1xuICAgICAgICAgICAgbmV4dENlbGxUaHJlZS5jbGFzc0xpc3QuYWRkKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgICAgICBEaXNhYmxlUGxhY2VtZW50LmRpc2FibGVQbGFjZW1lbnQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIERpc2FibGVQbGFjZW1lbnQuZGlzYWJsZVBsYWNlbWVudCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9ICAgXG5cbiAgICAvLyBQbGFjZXMgdGhlIHNoaXBzIG9uIHRoZSBib2FyZCBjZWxsczpcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgUGxhY2VPblkpOyBcbiAgICAvLyBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vICAgICBpZiAoIWRpc2FibGVQbGFjZW1lbnQpXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwiWDogXCIsIGNlbGwuZGF0YXNldC54KTsgLy8gVGVzdGluZyBcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwiWTogXCIsIGNlbGwuZGF0YXNldC55KTsgLy8gVGVzdGluZyAgIFxuICAgIC8vICAgICAgICAgaWYgKFNoaXBEYXRhLnNoaXBMZW5ndGggPT09IDAgJiYgU2hpcERhdGEubGVuZ3RoSW5kZXggPCAxMClcbiAgICAvLyAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICBpZiAoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykpXG4gICAgLy8gICAgICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNlbGwgYWxyZWFkeSBjb250YWlucyBhIHNoaXAuXCIpOyAvLyBUZXN0aW5nIFxuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICBlbHNlXG4gICAgLy8gICAgICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VkJyk7IFxuICAgIC8vICAgICAgICAgICAgICAgICBQbGFjZWRTaGlwc1tgc2hpcCAke1NoaXBEYXRhLmxlbmd0aEluZGV4fWBdLmNvb3JkaW5hdGVzID0gezA6IFtwYXJzZUludChjZWxsLmRhdGFzZXQueCksIHBhcnNlSW50KGNlbGwuZGF0YXNldC55KV19O1xuICAgIC8vICAgICAgICAgICAgICAgICBTaGlwRGF0YS5sZW5ndGhJbmRleCsrOyBcbiAgICAvLyAgICAgICAgICAgICAgICAgQXhpc0NoYW5nZS5heGlzV2FzQ2hhbmdlZCA9IGZhbHNlO1xuICAgIC8vICAgICAgICAgICAgICAgICBQbGFjZVNoaXBzKCk7IFxuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIGVsc2UgaWYgKFNoaXBEYXRhLnNoaXBMZW5ndGggPT09IDEgJiYgU2hpcERhdGEubGVuZ3RoSW5kZXggPCAxMClcbiAgICAvLyAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICBpZiAoKGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpICYmIG5leHRDZWxsT25lLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSkgXG4gICAgLy8gICAgICAgICAgICAgfHwgKGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpIHx8IG5leHRDZWxsT25lLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSkpXG4gICAgLy8gICAgICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNlbGwgYWxyZWFkeSBjb250YWlucyBhIHNoaXAuXCIpOyAvLyBUZXN0aW5nIFxuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICBlbHNlXG4gICAgLy8gICAgICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VkJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgIG5leHRDZWxsT25lLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VkJyk7IFxuICAgIC8vICAgICAgICAgICAgICAgICBQbGFjZWRTaGlwc1tgc2hpcCAke1NoaXBEYXRhLmxlbmd0aEluZGV4fWBdLmNvb3JkaW5hdGVzID0gezA6IFtwYXJzZUludChjZWxsLmRhdGFzZXQueCksIHBhcnNlSW50KGNlbGwuZGF0YXNldC55KV0sXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTogW3BhcnNlSW50KG5leHRDZWxsT25lLmRhdGFzZXQueCksIHBhcnNlSW50KG5leHRDZWxsT25lLmRhdGFzZXQueSldfTtcbiAgICAvLyAgICAgICAgICAgICAgICAgU2hpcERhdGEubGVuZ3RoSW5kZXgrKztcbiAgICAvLyAgICAgICAgICAgICAgICAgQXhpc0NoYW5nZS5heGlzV2FzQ2hhbmdlZCA9IGZhbHNlO1xuICAgIC8vICAgICAgICAgICAgICAgICBQbGFjZVNoaXBzKCk7IFxuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIGVsc2UgaWYgKFNoaXBEYXRhLnNoaXBMZW5ndGggPT09IDIgJiYgU2hpcERhdGEubGVuZ3RoSW5kZXggPCAxMClcbiAgICAvLyAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICBpZiAoKGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpICYmIG5leHRDZWxsT25lLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSAmJiBuZXh0Q2VsbFR3by5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykpIFxuICAgIC8vICAgICAgICAgICAgIHx8IChjZWxsLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSB8fCBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgfHwgbmV4dENlbGxUd28uY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpKSlcbiAgICAvLyAgICAgICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2VsbCBhbHJlYWR5IGNvbnRhaW5zIGEgc2hpcFwiKTsgLy8gVGVzdGluZyBcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgICAgZWxzZVxuICAgIC8vICAgICAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlZCcpOyBcbiAgICAvLyAgICAgICAgICAgICAgICAgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmFkZCgnc2hpcC1wbGFjZWQnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgbmV4dENlbGxUd28uY2xhc3NMaXN0LmFkZCgnc2hpcC1wbGFjZWQnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgUGxhY2VkU2hpcHNbYHNoaXAgJHtTaGlwRGF0YS5sZW5ndGhJbmRleH1gXS5jb29yZGluYXRlcyA9IHswOiBbcGFyc2VJbnQoY2VsbC5kYXRhc2V0LngpLCBwYXJzZUludChjZWxsLmRhdGFzZXQueSldLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDE6IFtwYXJzZUludChuZXh0Q2VsbE9uZS5kYXRhc2V0LngpLCBwYXJzZUludChuZXh0Q2VsbE9uZS5kYXRhc2V0LnkpXSxcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyOiBbcGFyc2VJbnQobmV4dENlbGxUd28uZGF0YXNldC54KSwgcGFyc2VJbnQobmV4dENlbGxUd28uZGF0YXNldC55KV19O1xuICAgIC8vICAgICAgICAgICAgICAgICBTaGlwRGF0YS5sZW5ndGhJbmRleCsrO1xuICAgIC8vICAgICAgICAgICAgICAgICBBeGlzQ2hhbmdlLmF4aXNXYXNDaGFuZ2VkID0gZmFsc2U7IFxuICAgIC8vICAgICAgICAgICAgICAgICBQbGFjZVNoaXBzKCk7XG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgICAgZWxzZSBpZiAoU2hpcERhdGEuc2hpcExlbmd0aCA9PT0gMyAmJiBTaGlwRGF0YS5sZW5ndGhJbmRleCA8IDEwKVxuICAgIC8vICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgIGlmICgoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgJiYgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpICYmIG5leHRDZWxsVHdvLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSAmJiBuZXh0Q2VsbFRocmVlLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSlcbiAgICAvLyAgICAgICAgICAgICB8fCAoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgfHwgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpIHx8IG5leHRDZWxsVGhyZWUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpICYmIG5leHRDZWxsVGhyZWUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpKSlcbiAgICAvLyAgICAgICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2VsbCBhbHJlYWR5IGNvbnRhaW5zIGEgc2hpcFwiKTsgLy8gVGVzdGluZyBcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgICAgZWxzZSBcbiAgICAvLyAgICAgICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcC1wbGFjZWQnKTsgXG4gICAgLy8gICAgICAgICAgICAgICAgIG5leHRDZWxsT25lLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VkJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgIG5leHRDZWxsVHdvLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VkJyk7XG4gICAgLy8gICAgICAgICAgICAgICAgIG5leHRDZWxsVGhyZWUuY2xhc3NMaXN0LmFkZCgnc2hpcC1wbGFjZWQnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgUGxhY2VkU2hpcHNbYHNoaXAgJHtTaGlwRGF0YS5sZW5ndGhJbmRleH1gXS5jb29yZGluYXRlcyA9IHswOiBbcGFyc2VJbnQoY2VsbC5kYXRhc2V0LngpLCBwYXJzZUludChjZWxsLmRhdGFzZXQueSldLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDE6IFtwYXJzZUludChuZXh0Q2VsbE9uZS5kYXRhc2V0LngpLCBwYXJzZUludChuZXh0Q2VsbE9uZS5kYXRhc2V0LnkpXSxcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyOiBbcGFyc2VJbnQobmV4dENlbGxUd28uZGF0YXNldC54KSwgcGFyc2VJbnQobmV4dENlbGxUd28uZGF0YXNldC55KV0sXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMzogW3BhcnNlSW50KG5leHRDZWxsVGhyZWUuZGF0YXNldC54KSwgcGFyc2VJbnQobmV4dENlbGxUaHJlZS5kYXRhc2V0LnkpXX07XG4gICAgLy8gICAgICAgICAgICAgICAgIFNoaXBEYXRhLmxlbmd0aEluZGV4Kys7XG4gICAgLy8gICAgICAgICAgICAgICAgIEF4aXNDaGFuZ2UuYXhpc1dhc0NoYW5nZWQgPSBmYWxzZTtcbiAgICAvLyAgICAgICAgICAgICAgICAgUGxhY2VTaGlwcygpOyBcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICB9ICAgICAgICAgICAgXG4gICAgLy8gICAgIH1cbiAgICAvLyB9KTtcbn1cblxuLy8gUGxhY2VPblkoKTogV2lsbCBwbGFjZSBhIHNoaXAgb24gdGhlIGdhbWVib2FyZHMgeS1heGlzLiBcbmZ1bmN0aW9uIFBsYWNlT25ZKGUpe1xuICAgIGNvbnN0IGNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllci1vbmUtYm9hcmQgPiBkaXYgPiBkaXYnKTtcbiAgICAvLyBjZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgLy8gICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItdGVzdCcpOyBcbiAgICAvLyB9KTtcblxuICAgIGlmICghRGlzYWJsZVBsYWNlbWVudC5kaXNhYmxlUGxhY2VtZW50KVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJYOiBcIiwgZS50YXJnZXQuZGF0YXNldC54KTsgLy8gVGVzdGluZyBcbiAgICAgICAgY29uc29sZS5sb2coXCJZOiBcIiwgZS50YXJnZXQuZGF0YXNldC55KTsgLy8gVGVzdGluZyAgIFxuXG4gICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnh9XCJdW2RhdGEteT1cIiR7ZS50YXJnZXQuZGF0YXNldC55fVwiXWApO1xuICAgICAgICBjb25zdCBuZXh0Q2VsbE9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke3BhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueCkgKyAxfVwiXVtkYXRhLXk9XCIke2UudGFyZ2V0LmRhdGFzZXQueX1cIl1gKTsgXG4gICAgICAgIGNvbnN0IG5leHRDZWxsVHdvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7cGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC54KSArIDJ9XCJdW2RhdGEteT1cIiR7ZS50YXJnZXQuZGF0YXNldC55fVwiXWApO1xuICAgICAgICBjb25zdCBuZXh0Q2VsbFRocmVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7cGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC54KSArIDN9XCJdW2RhdGEteT1cIiR7ZS50YXJnZXQuZGF0YXNldC55fVwiXWApO1xuXG4gICAgICAgIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAwICYmIFNoaXBEYXRhLmxlbmd0aEluZGV4IDwgMTApXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmIChjZWxsLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNlbGwgYWxyZWFkeSBjb250YWlucyBhIHNoaXAuXCIpOyAvLyBUZXN0aW5nIFxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VkJyk7IFxuICAgICAgICAgICAgICAgIFBsYWNlZFNoaXBzW2BzaGlwICR7U2hpcERhdGEubGVuZ3RoSW5kZXh9YF0uY29vcmRpbmF0ZXMgPSB7MDogW3BhcnNlSW50KGNlbGwuZGF0YXNldC54KSwgcGFyc2VJbnQoY2VsbC5kYXRhc2V0LnkpXX07XG4gICAgICAgICAgICAgICAgU2hpcERhdGEubGVuZ3RoSW5kZXgrKzsgXG4gICAgICAgICAgICAgICAgQXhpc0NoYW5nZS5heGlzV2FzQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIFBsYWNlU2hpcHMoKTsgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoU2hpcERhdGEuc2hpcExlbmd0aCA9PT0gMSAmJiBTaGlwRGF0YS5sZW5ndGhJbmRleCA8IDEwKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoKGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpICYmIG5leHRDZWxsT25lLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSkgXG4gICAgICAgICAgICB8fCAoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgfHwgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNlbGwgYWxyZWFkeSBjb250YWlucyBhIHNoaXAuXCIpOyAvLyBUZXN0aW5nIFxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VkJyk7XG4gICAgICAgICAgICAgICAgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmFkZCgnc2hpcC1wbGFjZWQnKTsgXG4gICAgICAgICAgICAgICAgUGxhY2VkU2hpcHNbYHNoaXAgJHtTaGlwRGF0YS5sZW5ndGhJbmRleH1gXS5jb29yZGluYXRlcyA9IHswOiBbcGFyc2VJbnQoY2VsbC5kYXRhc2V0LngpLCBwYXJzZUludChjZWxsLmRhdGFzZXQueSldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTogW3BhcnNlSW50KG5leHRDZWxsT25lLmRhdGFzZXQueCksIHBhcnNlSW50KG5leHRDZWxsT25lLmRhdGFzZXQueSldfTtcbiAgICAgICAgICAgICAgICBTaGlwRGF0YS5sZW5ndGhJbmRleCsrO1xuICAgICAgICAgICAgICAgIEF4aXNDaGFuZ2UuYXhpc1dhc0NoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBQbGFjZVNoaXBzKCk7IFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKFNoaXBEYXRhLnNoaXBMZW5ndGggPT09IDIgJiYgU2hpcERhdGEubGVuZ3RoSW5kZXggPCAxMClcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKChjZWxsLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSAmJiBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgJiYgbmV4dENlbGxUd28uY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpKSBcbiAgICAgICAgICAgIHx8IChjZWxsLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSB8fCBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgfHwgbmV4dENlbGxUd28uY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNlbGwgYWxyZWFkeSBjb250YWlucyBhIHNoaXBcIik7IC8vIFRlc3RpbmcgXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcC1wbGFjZWQnKTsgXG4gICAgICAgICAgICAgICAgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmFkZCgnc2hpcC1wbGFjZWQnKTtcbiAgICAgICAgICAgICAgICBuZXh0Q2VsbFR3by5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlZCcpO1xuICAgICAgICAgICAgICAgIFBsYWNlZFNoaXBzW2BzaGlwICR7U2hpcERhdGEubGVuZ3RoSW5kZXh9YF0uY29vcmRpbmF0ZXMgPSB7MDogW3BhcnNlSW50KGNlbGwuZGF0YXNldC54KSwgcGFyc2VJbnQoY2VsbC5kYXRhc2V0LnkpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDE6IFtwYXJzZUludChuZXh0Q2VsbE9uZS5kYXRhc2V0LngpLCBwYXJzZUludChuZXh0Q2VsbE9uZS5kYXRhc2V0LnkpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDI6IFtwYXJzZUludChuZXh0Q2VsbFR3by5kYXRhc2V0LngpLCBwYXJzZUludChuZXh0Q2VsbFR3by5kYXRhc2V0LnkpXX07XG4gICAgICAgICAgICAgICAgU2hpcERhdGEubGVuZ3RoSW5kZXgrKztcbiAgICAgICAgICAgICAgICBBeGlzQ2hhbmdlLmF4aXNXYXNDaGFuZ2VkID0gZmFsc2U7IFxuICAgICAgICAgICAgICAgIFBsYWNlU2hpcHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAzICYmIFNoaXBEYXRhLmxlbmd0aEluZGV4IDwgMTApXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICgoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgJiYgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpICYmIG5leHRDZWxsVHdvLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSAmJiBuZXh0Q2VsbFRocmVlLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSlcbiAgICAgICAgICAgIHx8IChjZWxsLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSB8fCBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgfHwgbmV4dENlbGxUaHJlZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgJiYgbmV4dENlbGxUaHJlZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2VsbCBhbHJlYWR5IGNvbnRhaW5zIGEgc2hpcFwiKTsgLy8gVGVzdGluZyBcbiAgICAgICAgICAgICAgICByZXR1cm47IFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VkJyk7IFxuICAgICAgICAgICAgICAgIG5leHRDZWxsT25lLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VkJyk7XG4gICAgICAgICAgICAgICAgbmV4dENlbGxUd28uY2xhc3NMaXN0LmFkZCgnc2hpcC1wbGFjZWQnKTtcbiAgICAgICAgICAgICAgICBuZXh0Q2VsbFRocmVlLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VkJyk7XG4gICAgICAgICAgICAgICAgUGxhY2VkU2hpcHNbYHNoaXAgJHtTaGlwRGF0YS5sZW5ndGhJbmRleH1gXS5jb29yZGluYXRlcyA9IHswOiBbcGFyc2VJbnQoY2VsbC5kYXRhc2V0LngpLCBwYXJzZUludChjZWxsLmRhdGFzZXQueSldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTogW3BhcnNlSW50KG5leHRDZWxsT25lLmRhdGFzZXQueCksIHBhcnNlSW50KG5leHRDZWxsT25lLmRhdGFzZXQueSldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMjogW3BhcnNlSW50KG5leHRDZWxsVHdvLmRhdGFzZXQueCksIHBhcnNlSW50KG5leHRDZWxsVHdvLmRhdGFzZXQueSldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMzogW3BhcnNlSW50KG5leHRDZWxsVGhyZWUuZGF0YXNldC54KSwgcGFyc2VJbnQobmV4dENlbGxUaHJlZS5kYXRhc2V0LnkpXX07XG4gICAgICAgICAgICAgICAgU2hpcERhdGEubGVuZ3RoSW5kZXgrKztcbiAgICAgICAgICAgICAgICBBeGlzQ2hhbmdlLmF4aXNXYXNDaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgUGxhY2VTaGlwcygpOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gTGVhdmVZKCk6IFdpbGwgbGVhdmUgZWFjaCBjZWxsIGZyb20gdGhlIHktYXhpcyBzZWxlY3Rpb24uXG5mdW5jdGlvbiBMZWF2ZVkoZSl7XG4gICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke2UudGFyZ2V0LmRhdGFzZXQueH1cIl1bZGF0YS15PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnl9XCJdYCk7XG4gICAgY29uc3QgbmV4dENlbGxPbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LngpICsgMX1cIl1bZGF0YS15PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnl9XCJdYCk7XG4gICAgY29uc3QgbmV4dENlbGxUd28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LngpICsgMn1cIl1bZGF0YS15PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnl9XCJdYCk7XG4gICAgY29uc3QgbmV4dENlbGxUaHJlZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke3BhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueCkgKyAzfVwiXVtkYXRhLXk9XCIke2UudGFyZ2V0LmRhdGFzZXQueX1cIl1gKTtcblxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2hvdmVyLXRlc3QnKSlcbiAgICB7XG4gICAgICAgIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAgMClcbiAgICAgICAge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoU2hpcERhdGEuc2hpcExlbmd0aCA9PT0gMSlcbiAgICAgICAge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgICAgICBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci10ZXN0Jyk7IFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKFNoaXBEYXRhLnNoaXBMZW5ndGggPT09IDIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItdGVzdCcpO1xuICAgICAgICAgICAgbmV4dENlbGxPbmUuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItdGVzdCcpO1xuICAgICAgICAgICAgbmV4dENlbGxUd28uY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItdGVzdCcpOyBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAzKVxuICAgICAgICB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgICAgIG5leHRDZWxsT25lLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgICAgIG5leHRDZWxsVHdvLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgICAgIG5leHRDZWxsVGhyZWUuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItdGVzdCcpOyBcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8vIEFjdGl2YXRlR2FtZSBMaXRlcmFsIE9iamVjdDogRGF0YSBrZXlzIGZvciBhY3RpdmF0aW5nIHRoZSBnYW1lLlxuZXhwb3J0IGNvbnN0IEFjdGl2YXRlR2FtZSA9IHtcbiAgICBhY3RpdmF0ZUdhbWU6IGZhbHNlLFxuICAgIGFjdGl2YXRlUGxheWVyT25lVHVybjogdHJ1ZSwgLy8gUGxheWVyIG9uZSB3aWxsIGFsd2F5cyBnZXQgdG8gbWFrZSB0aGUgZmlyc3QgaGl0LlxufSIsIi8vIEF4aXNDaGFuZ2UgTGl0ZXJhbCBPYmplY3Q6IFdpbGwgY29udGFpbiBkYXRhIGZvciB0b2dnbGluZyB0aGUgeCBhbmQgeSBheGlzLlxuZXhwb3J0IGNvbnN0IEF4aXNDaGFuZ2UgPSB7XG4gICAgYXhpc0NoYW5nZTogbnVsbCxcbiAgICBheGlzV2FzQ2hhbmdlZDogZmFsc2UsIFxufSIsIi8vIERpc2FibGVQbGFjZW1lbnQgTGl0ZXJhbCBPYmplY3Q6IFdpbGwgc3RvcCB0aGUgcGxheWVyIGZyb20gdGhlIGNsaWNraW5nIG9uIGEgY2VsbCB3aGVuIHRoZSBzaGlwIGlzIG9mZiB0aGUgYm9hcmQuIFxuZXhwb3J0IGNvbnN0IERpc2FibGVQbGFjZW1lbnQgPSB7XG4gICAgZGlzYWJsZVBsYWNlbWVudDogZmFsc2UsXG59IiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL1NoaXBcIjtcbmltcG9ydCB7IERpc3BsYXlDb21wdXRlckdhbWVib2FyZEV2ZW50cyB9IGZyb20gXCIuLi9tb2R1bGVzL0RvbUNvbnRlbnRcIjtcbmltcG9ydCB7IFNoaXBEYXRhIH0gZnJvbSBcIi4vU2hpcERhdGFcIjtcbmltcG9ydCBleHBsb3Npb25JbWFnZSBmcm9tIFwiLi4vaW1hZ2VzL2V4cGxvc2lvbi5wbmdcIjtcblxuLyoqIEdhbWVib2FyZFxuICogLT4gR2FtZWJvYXJkcyBzaG91bGQgYmUgYWJsZSB0byBwbGFjZSBzaGlwcyBhdCBzcGVjaWZpYyBjb29yZGluYXRlcyBieSBcbiAqIGNhbGxpbmcgdGhlICdzaGlwIGZhY3RvcnkgZnVuY3Rpb24nLiBcbiAqIFxuICogLT4gR2FtZWJvYXJkcyBzaG91bGQgaGF2ZSBhIHJlY2VpdmVBdHRhY2sgZnVuY3Rpb24gdGhhdCB0YWtlcyBhIHBhaXJcbiAqIG9mIGNvb3JkaW5hdGVzLCBkZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRoZSBhdHRhY2sgaGl0IGEgc2hpcCBhbmRcbiAqIHRoZW4gc2VuZHMgdGhlICdoaXQnIGZ1bmN0aW9uIHRvIHRoZSBjb3JyZWN0IHNoaXAsIG9yIHJlY29yZCB0aGUgXG4gKiBjb29yZGluYXRlcyBvZiB0aGUgbWlzc2VkIHNob3QuIFxuICogXG4gKiAtPiBHYW1lYm9hcmRzIHNob3VsZCBrZWVwIHRyYWNrIG9mIG1pc3NlZCBhdHRhY2tzIHNvIHRoZXkgY2FuIGRpc3BsYXkgdGhlbVxuICogcHJvcGVybHkuXG4gKiBcbiAqIC0+IEdhbWVib2FyZHMgc2hvdWxkIGJlIGFibGUgdG8gcmVwb3J0IHdoZXRoZXIgb3Igbm90IGFsbCBvZiB0aGVpciBzaGlwc1xuICogaGF2ZSBiZWVuIHN1bmsuIFxuICovXG5cbi8vIEdhbWVib2FyZCgpOiBHYW1lYm9hcmQgZmFjdG9yeSBmdW5jdGlvbi5cbmV4cG9ydCBjb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XG4gICAgY29uc3QgZ2FtZWJvYXJkID0gWy4uLkFycmF5KDEwKV0ubWFwKCgpID0+IEFycmF5KDEwKS5maWxsKFwiXCIpKTsgXG4gICAgbGV0IHNoaXBzT25Cb2FyZCA9IDA7IFxuXG4gICAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChQbGFjZWRTaGlwcykgPT4ge1xuICAgICAgICBsZXQgeENvb3JkUmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICBsZXQgeUNvb3JkUmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICBsZXQgcGxheWVyT25lQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke3hDb29yZFJhbmRvbX1cIl1bZGF0YS15PVwiJHt5Q29vcmRSYW5kb219XCJdYCk7XG4gICAgICAgIGxldCBzaGlwTnVtID0gMDsgXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ29tcHV0ZXIgY2hvb3NlOiBcIiwgcGxheWVyT25lQ2VsbCk7IC8vIFRlc3RpbmdcbiAgICAgICAgY29uc29sZS5sb2coXCJcXG5cIik7IC8vIFRlc3RpbmdcblxuICAgICAgICAvLyBUZXN0IGlmIHRoZSBjb21wdXRlciBoYXMgYWxyZWFkeSBjaG9vc2VuIHRoZXNlIGNvb3JkaW5hdGVzLiBcbiAgICAgICAgd2hpbGUocGxheWVyT25lQ2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3BsYXllci1vbmUtc2hpcC1oaXQnKSB8fCBwbGF5ZXJPbmVDZWxsLmNsYXNzTGlzdC5jb250YWlucygnY29tcHV0ZXItaGl0LW1pc3NlZCcpKVxuICAgICAgICB7XG4gICAgICAgICAgICB4Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICB5Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7IFxuXG4gICAgICAgICAgICBwbGF5ZXJPbmVDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7eENvb3JkUmFuZG9tfVwiXVtkYXRhLXk9XCIke3lDb29yZFJhbmRvbX1cIl1gKTsgXG4gICAgICAgIH1cblxuICAgICAgICAvLyBUZXN0IGlmIHRoZSBjb29yZGluYXRlcyBjb250YWluIGFuIGVuZW15IHNoaXAuIFxuICAgICAgICBpZiAocGxheWVyT25lQ2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBQbGFjZWRTaGlwcylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzaGlwTnVtKys7IFxuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgY29vcmQgaW4gUGxhY2VkU2hpcHNba2V5XS5jb29yZGluYXRlcylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChQbGFjZWRTaGlwc1trZXldLmNvb3JkaW5hdGVzW2Nvb3JkXVswXSA9PT0geENvb3JkUmFuZG9tICYmIFBsYWNlZFNoaXBzW2tleV0uY29vcmRpbmF0ZXNbY29vcmRdWzFdID09PSB5Q29vcmRSYW5kb20pXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaGUgY29tcHV0ZXIgZ290IGEgaGl0OiAnLCBbeENvb3JkUmFuZG9tLCB5Q29vcmRSYW5kb21dKTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7a2V5fSB3YXMgaGl0LmApOyAvLyBUZXN0aW5nIFxuICAgICAgICAgICAgICAgICAgICAgICAgUGxhY2VkU2hpcHNba2V5XS5oaXRzICs9IDE7IFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNoaXBTdW5rID0gUGxhY2VkU2hpcHNba2V5XS5oaXQoUGxhY2VkU2hpcHNba2V5XS5oaXRzLCBQbGFjZWRTaGlwc1trZXldLmxlbmd0aCk7IC8vIGFkZHMgYSBoaXQgdG8gdGhlIHNoaXAuIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBEaXNwbGF5Q29tcHV0ZXJHYW1lYm9hcmRFdmVudHMoMSwgZmFsc2UsIHNoaXBOdW0pOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIFBsYWNlZFNoaXBzW2tleV0uaXNTdW5rKHNoaXBTdW5rLCBzaGlwTnVtKTsgLy8gQ2hlY2tzIGlmIHRoZSBzaGlwIGhhcyBzdW5rLlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0cnVlIGNoYW5nZSB0aGUgc3VuayBzdGF0dXMgdG8gdHJ1ZS4gIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNoaXBTdW5rKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBsYWNlZFNoaXBzW2tleV0uc3VuayA9IHNoaXBTdW5rOyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaGlwRGF0YS5zaGlwc1BsYWNlZC0tOyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU3VuayBzdGF0dXMgc2hvdWxkIGJlIHRydWU6ICcsIFBsYWNlZFNoaXBzW2tleV0pOyAvLyBUZXN0aW5nIFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBleHBsb3Npb25JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGxvc2lvbkltZy5zcmMgPSBleHBsb3Npb25JbWFnZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllck9uZUNlbGwuYXBwZW5kQ2hpbGQoZXhwbG9zaW9uSW1nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllck9uZUNlbGwuY2xhc3NMaXN0LmFkZCgncGxheWVyLW9uZS1zaGlwLWhpdCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgY29tcHV0ZXJIaXRNaXNzZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbXB1dGVySGl0TWlzc2VkLnRleHRDb250ZW50ID0gXCJNXCI7IFxuICAgICAgICAgICAgcGxheWVyT25lQ2VsbC5jbGFzc0xpc3QuYWRkKCdjb21wdXRlci1oaXQtbWlzc2VkJyk7XG4gICAgICAgICAgICBwbGF5ZXJPbmVDZWxsLmFwcGVuZENoaWxkKGNvbXB1dGVySGl0TWlzc2VkKTsgXG4gICAgICAgICAgICBEaXNwbGF5Q29tcHV0ZXJHYW1lYm9hcmRFdmVudHMoMCk7IFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtnYW1lYm9hcmQsIHNoaXBzT25Cb2FyZCwgcmVjZWl2ZUF0dGFjaywgU2hpcH07XG59IiwiLy8gTmV3R2FtZVNlbGVjdGVkKCk6IFRvZ2dsZXMgdHJ1ZSBpZiB0aGUgbmV3IGJ1dHRvbiB3YXMgY2xpY2tlZC4gXG5leHBvcnQgY29uc3QgTmV3R2FtZVNlbGVjdGVkID0gKCgpID0+IHtcbiAgICBsZXQgbmV3R2FtZVNlbGVjdGVkID0gdHJ1ZTtcblxuICAgIHJldHVybiB7bmV3R2FtZVNlbGVjdGVkfTtcbn0pKCk7IiwiaW1wb3J0IHsgRGlzcGxheUNvbXB1dGVyR2FtZWJvYXJkRXZlbnRzIH0gZnJvbSBcIi4uL21vZHVsZXMvRG9tQ29udGVudFwiO1xuXG4vKiogU2hpcCAqL1xuLy8gU2hpcCgpOiBTaGlwIGZhY3RvcnkgZnVuY3Rpb24uIFxuZXhwb3J0IGNvbnN0IFNoaXAgPSAoKSA9PiB7XG4gICAgbGV0IGRlZmF1bHRMZW5ndGhzID0gWzAsIDAsIDAsIDAsIDEsIDEsIDEsIDIsIDIsIDNdOyBcbiAgICBsZXQgbGVuZ3RoID0gbnVsbDtcbiAgICBsZXQgaGl0cyA9IDA7XG4gICAgbGV0IHN1bmsgPSBmYWxzZTsgXG5cbiAgICAvLyBoaXQoKTogV2lsbCBnYXRoZXIgdGhlIGFtb3VudCBvZiBoaXRzIHRoZSBzaGlwIHdpbGwgZ2V0LlxuICAgIGNvbnN0IGhpdCA9IChpc0hpdCwgc2hpcExlbmd0aCkgPT4ge1xuXG4gICAgICAgIGlmIChpc0hpdCA9PT0gc2hpcExlbmd0aClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7IFxuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7IFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gaXNTdW5rKCk6IFdpbGwgZGV0ZXJtaW5lIGlmIHRoZSBzaGlwIGhhcyBzdW5rLiBcbiAgICBjb25zdCBpc1N1bmsgPSAoc2hpcFN1bmssIHNoaXBOdW0pID0+IHtcbiAgICAgICAgRGlzcGxheUNvbXB1dGVyR2FtZWJvYXJkRXZlbnRzKG51bGwsIHNoaXBTdW5rLCBzaGlwTnVtKTsgXG4gICAgICAgIC8vIE5vdGU6IFlvdSBuZWVkIHRvIHVzZSB0aGUgdGVzdGluZyBmaWxlIChzaGlwLnRlc3QuanMpIFxuICAgICAgICAvLyB0byB0ZXN0IHRoaXMgZnVuY3Rpb24uIFxuICAgIH1cblxuICAgIHJldHVybiB7aGl0LCBpc1N1bmssIGRlZmF1bHRMZW5ndGhzLCBsZW5ndGgsIGhpdHMsIHN1bmt9O1xufVxuIiwiLy8gU2hpcERhdGEgTGl0ZXJhbCBPYmplY3Q6IFdpbGwgY29udGFpbiBzaGlwIGRhdGEgdG8gY29udHJvbCB0aGUgZmxvdyBvZiBzaGlwcyBvbiB0aGUgZ2FtZWJvYXJkLiBcbmV4cG9ydCBjb25zdCBTaGlwRGF0YSA9IHtcbiAgICBsZW5ndGhJbmRleDogMCxcbiAgICBzaGlwc1BsYWNlZDogMCxcbiAgICBzaGlwTGVuZ3RoOiAwLFxufSIsIi8vIFBsYWNlZFNoaXBzIExpdGVyYWwgT2JqZWN0OiBEYXRhIGZvciBhbGwgc2hpcHMgcGxhY2VkIG9uIHRoZSBnYW1lYm9hcmQgYnkgcGxheWVyIG9uZS4gXG5leHBvcnQgbGV0IFBsYWNlZFNoaXBzID0ge1xufVxuXG4vLyBDb21wdXRlclBsYWNlZFNoaXBzIExpdGVyYWwgT2JqZWN0OiBEYXRhIGZvciBhbGwgc2hpcHMgcGxhY2VkIG9uIHRoZSBnYW1lYm9hcmQgYnkgdGhlIGNvbXB1dGVyLlxuZXhwb3J0IGxldCBDb21wdXRlclBsYWNlZFNoaXBzID0ge1xufVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvY29tZm9ydGFhL0NvbWZvcnRhYS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udHMvcGxheV9wcmV0ZW5kL1BsYXkgUHJldGVuZC5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBib2R5IC0gVGhlIG1haW4gYm9keSBmb3IgdGhlIGVudGlyZSBhcHBsaWNhdGlvbi4gKi9cbmJvZHl7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7IFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzQzZTk3YiAwJSwgIzM4ZjlkNyAxMDAlKTtcbn1cblxuLyogKiAtIEFsbCB0aGUgZWxlbWVudHMgaW4gdGhlIGFwcGxpY2F0aW9uLiAqL1xuKntcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyBcbn1cblxuLyogRm9udHMgKi9cbi8qIGZvbnQtMCAtIENvbWZvcnRhYSAqL1xuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IGNvbWZvcnRhYTtcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuLyogZm9udC0xIFBsYXkgUHJldGVuZCAqL1xuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IHBsYXktcHJldGVuZDtcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbn0gXG5cbi8qIG1vYmlsZS1hdmFpbGFiaWxpdHkgLSBEaXNwbGF5cyBub3QgYXZhaWxhYmlsaXR5IGZvciBtb2JpbGUgb3IgdGFibGV0IGRldmljZXMuICovXG4jbW9iaWxlLWF2YWlsYWJpbGl0eXtcbiAgICBkaXNwbGF5OiBub25lOyBcbn1cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyogfFRlc3RpbmcgQXJlYSBJZGVudGlmaWVycyBhbmQgQ29tcG9uZW50c3wgKi9cbiNjb250ZW50ID4gZGl2ID4gYnV0dG9ue1xuICAgIHBhZGRpbmc6IDEwcHggNXB4IDEwcHggNXB4O1xuICAgIGZvbnQtZmFtaWx5Om1vbm9zcGFjZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Y29yYWw7IFxuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNjb250ZW50ID4gZGl2ID4gYnV0dG9uOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGJsdWU7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyogfE1haW4gQ29udGVudCBTZWN0aW9ufCAqL1xuI2NvbnRlbnR7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAgIHBhZGRpbmc6IDEwcHg7IFxufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIHxHYW1lYm9hcmQgQ29udGFpbmVyfCAqL1xuLmdhbWVib2FyZC1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG5cbiAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgd2lkdGg6IDEyMDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuLyogUGxheWVyIE9uZSBCb2FyZCAqL1xuLnBsYXllci1vbmUtYm9hcmR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JlZW47ICovXG4gICAgLyogcGFkZGluZzogMTBweDsgKi9cbn1cbi5wbGF5ZXItb25lLWJvYXJkID4gZGl2eyAvKiByb3dzICovXG4gICAgZGlzcGxheTogZmxleDtcblxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xuICAgIC8qIHBhZGRpbmc6IDVweDsgKi9cbn1cbi5wbGF5ZXItb25lLWJvYXJkID4gZGl2ID4gZGl2eyAvKiBjZWxscyAqL1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjMjQxMGM7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucGxheWVyLW9uZS1ib2FyZCA+IGRpdiA+IGRpdiA+IGRpdnsgLyogTWlzc2VkIEhpdCBDb250YWluZXIgKi9cbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgKi9cbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjZDk0NmVmO1xufVxuXG4vKiBDb21wdXRlciBHYW1lYm9hcmQgKi9cbi5jb21wdXRlci1nYW1lYm9hcmR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcHVycGxlOyAqL1xuICAgIC8qIHBhZGRpbmc6IDEwcHg7ICovXG59XG4uY29tcHV0ZXItZ2FtZWJvYXJkID4gZGl2eyAvKiBSb3dzICovXG4gICAgZGlzcGxheTogZmxleDtcblxuICAgIC8qIHBhZGRpbmc6IDEwcHg7ICovXG59XG4uY29tcHV0ZXItZ2FtZWJvYXJkID4gZGl2ID4gZGl2eyAvKiBjZWxscyAqL1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JlZW47XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHdpZHRoOiA0MHB4OyBcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBob3Zlci10ZXN0ICovXG4uaG92ZXItdGVzdHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNjM2NmYxICFpbXBvcnRhbnQ7XG59XG5cbi8qIHNoaXAtcGxhY2VkIC0gRGlzcGxheXMgZWFjaCBzaGlwIHBsYWNlZCBvbiB0aGUgYm9hcmQuICovXG4uc2hpcC1wbGFjZWR7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzYzNjZmMSAhaW1wb3J0YW50O1xufVxuXG4vKiBjb21wdXRlci1zaGlwLXBsYWNlZCAtIERpc3BsYXlzIGVhY2ggc2hpcCB0aGF0IHRoZSBjb21wdXRlciBwbGFjZXMgb24gdGhlaXIgYm9hcmQuICovXG4uY29tcHV0ZXItc2hpcC1wbGFjZWR7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmVlbiAhaW1wb3J0YW50O1xufVxuXG4vKiBjb21wdXRlci1zaGlwLWhpdCAtIEluZGljYXRlcyB0aGF0IGNvbXB1dGVyIHNoaXAgaGFzIGJlZW4gaGl0LiAqL1xuLmNvbXB1dGVyLXNoaXAtaGl0ID4gaW1nW3NyY117XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlOyBcbn1cblxuLyogcGxheWVyLW9uZS1zaGlwLWhpdCAtIEluZGljYXRlcyB0aGF0IHRoZSBwbGF5ZXIgb25lIHNoaXAgaGFzIGJlZW4gaGl0LiAqL1xuLnBsYXllci1vbmUtc2hpcC1oaXQgPiBpbWdbc3JjXXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyogfEludGVmYWNlIFNlY3Rpb258ICovXG4uaW50ZXJmYWNle1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbiAgICBcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBvcmFuZ2U7ICovXG4gICAgLyogcGFkZGluZzogMTBweDsgKi9cblxufVxuLmludGVyZmFjZSA+IGJ1dHRvbnsgLyogTmV3IEJ1dHRvbiAqL1xuICAgIGZvbnQtZmFtaWx5OiBjb21mb3J0YWEsIHN5c3RlbS11aSwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyBcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyOyBcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApOyBcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7IFxuICAgIGJhY2tncm91bmQtY29sb3I6IzM4ZjlkNjAwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi5pbnRlcmZhY2UgPiBidXR0b246aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojYTNlNjM1O1xufVxuXG4uaW50ZXJmYWNlID4gZGl2Om50aC1jaGlsZCgyKXsgLyogeCBhbmQgeSBjb29yZGluYXRlIGNvbnRhaW5lci4gKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTBweDtcblxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAgKi9cbn1cbi5pbnRlcmZhY2UgPiBkaXY6bnRoLWNoaWxkKDIpID4gYnV0dG9ueyAvKiB4IGFuZCB5IGNvb3JkaW5hdGUgYnV0dG9ucy4gKi8gXG4gICAgZm9udC1mYW1pbHk6IGNvbWZvcnRhYSwgc3lzdGVtLXVpLCBcIlNlZ29lIFVJXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHBhZGRpbmc6IDFweCAxNXB4IDFweCAxNXB4OyBcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7IFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMzhmOWQ2MDA7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuLmludGVyZmFjZSA+IGRpdjpudGgtY2hpbGQoMikgPiBidXR0b246aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2EzZTYzNTtcbn1cblxuLmludGVyZmFjZSA+IGRpdjpudGgtY2hpbGQoMyl7IC8qIE51bWJlciBvZiBzaGlwcyBvbiB0aGUgcGxheWVyIGJvYXJkLiAqL1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBmb250LWZhbWlseTogY29tZm9ydGFhLCBzeXN0ZW0tdWksIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcbiAgICBjb2xvcjogd2hpdGU7IFxufVxuXG4vKiBjdXJyZW50LWNvb3JkaW5hdGUgLSBUaGUgY3VycmVudCBjb29yZGluYXRlIGNob29zZW4gYnkgdGhlIHVzZXIuICovXG4uY3VycmVudC1jb29yZGluYXRle1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNhM2U2MzUgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYTNlNjM1ICFpbXBvcnRhbnQ7IFxufVxuXG4vKiBjb21tZW5jZS1hdHRhY2sgLSBMZXRzIHRoZSBwbGF5ZXIga25vdyB0aGF0IHRoZXkgY2FuIGJlZ2luIGF0dGFja2luZyB0aGUgY29tcHV0ZXIgZ2FtZWJvYXJkIHNoaXBzLiAqL1xuLmNvbW1lbmNlLWF0dGFja3tcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBmb250LWZhbWlseTogY29tZm9ydGFhLCBzeXN0ZW0tdWksIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcbiAgICBjb2xvcjogd2hpdGU7IFxufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIHxHYW1lYm9hcmQgRXZlbnRzIFNlY3Rpb258ICovXG4vKiBwbGF5ZXItZ2FtZWJvYXJkLWV2ZW50cyAtIEFsbCB0aGUgcGxheWVyIGdhbWVib2FyZCBldmVudHMuICovXG4jcGxheWVyLWdhbWVib2FyZC1ldmVudHN7XG4gICAgYm9yZGVyOiAxcHggc29saWQgb3JhbmdlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LWZhbWlseTogY29tZm9ydGFhLCBzeXN0ZW0tdWksIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcbiAgICBjb2xvcjogd2hpdGU7IFxufVxuI3BsYXllci1nYW1lYm9hcmQtZXZlbnRzID4gcHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7IFxufVxuXG4vKiBjb21wdXRlci1nYW1lYm9hcmQtZXZlbnRzIC0gQWxsIHRoZSBjb21wdXRlciBnYW1lYm9hcmQgZXZlbnRzLiAqL1xuI2NvbXB1dGVyLWdhbWVib2FyZC1ldmVudHN7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRibHVlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxuICAgIGZvbnQtc2l6ZTogMjBweDsgXG4gICAgZm9udC1mYW1pbHk6IGNvbWZvcnRhYSwgc3lzdGVtLXVpLCBcIlNlZ29lIFVJXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuI2NvbXB1dGVyLWdhbWVib2FyZC1ldmVudHMgPiBwe1xuICAgIGRpc3BsYXk6IGlubGluZTsgIFxufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIHxBcHBsaWNhdGlvbiBUaXRsZXwgKi9cbiNhcHBsaWNhdGlvbi10aXRsZXtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZWVuO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogcGxheS1wcmV0ZW5kLCBzeXN0ZW0tdWksIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgICBjb2xvcjogI2UyZThmMDtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiB8TW9iaWxlIFNlY3Rpb258ICovXG4vKiBtZWRpYS0wIC0gV2lsbCBkaXNwbGF5IHRoYXQgbW9iaWxlIGFuZCBtaW5pbWl6YXRpb24gZG9lc24ndCBleGlzdC4qL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpXG57XG4gICAgI2FwcGxpY2F0aW9uLXRpdGxle1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAjbW9iaWxlLWF2YWlsYWJpbGl0eXtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgZm9udC1zaXplOiAxOXB4O1xuICAgICAgICBmb250LWZhbWlseTogY29tZm9ydGFhLCBzeXN0ZW0tdWksIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgICNjb250ZW50e1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgICNjb21wdXRlci1nYW1lYm9hcmQtZXZlbnRze1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgICNwbGF5ZXItZ2FtZWJvYXJkLWV2ZW50c3tcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHFEQUFxRDtBQUNyRDtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1QsK0RBQStEO0FBQ25FOztBQUVBLDZDQUE2QztBQUM3QztJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQSxVQUFVO0FBQ1YsdUJBQXVCO0FBQ3ZCO0lBQ0ksc0JBQXNCO0lBQ3RCLDRDQUFtRDtBQUN2RDs7QUFFQSx3QkFBd0I7QUFDeEI7SUFDSSx5QkFBeUI7SUFDekIsNENBQWtEO0FBQ3REOztBQUVBLGtGQUFrRjtBQUNsRjtJQUNJLGFBQWE7QUFDakI7QUFDQSw0S0FBNEs7QUFDNUssNEtBQTRLO0FBQzVLLDhDQUE4QztBQUM5QztJQUNJLDBCQUEwQjtJQUMxQixxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1QixlQUFlO0FBQ25CO0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0IsMkJBQTJCO0FBQy9COztBQUVBLDRLQUE0SztBQUM1Syw0S0FBNEs7QUFDNUssMkJBQTJCO0FBQzNCO0lBQ0kscUJBQXFCO0lBQ3JCLGFBQWE7QUFDakI7O0FBRUEsNEtBQTRLO0FBQzVLLDRLQUE0SztBQUM1SywwQkFBMEI7QUFDMUI7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFNBQVM7O0lBRVQsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixhQUFhO0lBQ2IsY0FBYztBQUNsQjs7QUFFQSxxQkFBcUI7QUFDckI7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCOztJQUV0Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCO0FBQ0EseUJBQXlCLFNBQVM7SUFDOUIsYUFBYTs7SUFFYiw2QkFBNkI7SUFDN0Isa0JBQWtCO0FBQ3RCO0FBQ0EsK0JB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O1FBQ0ksY0FBYztRQUNkLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsZUFBZTtRQUNmLDZJQUE2STtRQUM3SSxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogYm9keSAtIFRoZSBtYWluIGJvZHkgZm9yIHRoZSBlbnRpcmUgYXBwbGljYXRpb24uICovXFxuYm9keXtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwOyBcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNDNlOTdiIDAlLCAjMzhmOWQ3IDEwMCUpO1xcbn1cXG5cXG4vKiAqIC0gQWxsIHRoZSBlbGVtZW50cyBpbiB0aGUgYXBwbGljYXRpb24uICovXFxuKntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgXFxufVxcblxcbi8qIEZvbnRzICovXFxuLyogZm9udC0wIC0gQ29tZm9ydGFhICovXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBjb21mb3J0YWE7XFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL2NvbWZvcnRhYS9Db21mb3J0YWEtUmVndWxhci50dGYnKTtcXG59XFxuXFxuLyogZm9udC0xIFBsYXkgUHJldGVuZCAqL1xcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogcGxheS1wcmV0ZW5kO1xcbiAgICBzcmM6IHVybCgnLi9mb250cy9wbGF5X3ByZXRlbmQvUGxheVxcXFwgUHJldGVuZC5vdGYnKTtcXG59IFxcblxcbi8qIG1vYmlsZS1hdmFpbGFiaWxpdHkgLSBEaXNwbGF5cyBub3QgYXZhaWxhYmlsaXR5IGZvciBtb2JpbGUgb3IgdGFibGV0IGRldmljZXMuICovXFxuI21vYmlsZS1hdmFpbGFiaWxpdHl7XFxuICAgIGRpc3BsYXk6IG5vbmU7IFxcbn1cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyogfFRlc3RpbmcgQXJlYSBJZGVudGlmaWVycyBhbmQgQ29tcG9uZW50c3wgKi9cXG4jY29udGVudCA+IGRpdiA+IGJ1dHRvbntcXG4gICAgcGFkZGluZzogMTBweCA1cHggMTBweCA1cHg7XFxuICAgIGZvbnQtZmFtaWx5Om1vbm9zcGFjZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRjb3JhbDsgXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI2NvbnRlbnQgPiBkaXYgPiBidXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRibHVlO1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyogfE1haW4gQ29udGVudCBTZWN0aW9ufCAqL1xcbiNjb250ZW50e1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxuICAgIHBhZGRpbmc6IDEwcHg7IFxcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyogfEdhbWVib2FyZCBDb250YWluZXJ8ICovXFxuLmdhbWVib2FyZC1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHdpZHRoOiAxMjAwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4vKiBQbGF5ZXIgT25lIEJvYXJkICovXFxuLnBsYXllci1vbmUtYm9hcmR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuOyAqL1xcbiAgICAvKiBwYWRkaW5nOiAxMHB4OyAqL1xcbn1cXG4ucGxheWVyLW9uZS1ib2FyZCA+IGRpdnsgLyogcm93cyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgKi9cXG4gICAgLyogcGFkZGluZzogNXB4OyAqL1xcbn1cXG4ucGxheWVyLW9uZS1ib2FyZCA+IGRpdiA+IGRpdnsgLyogY2VsbHMgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjMjQxMGM7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ucGxheWVyLW9uZS1ib2FyZCA+IGRpdiA+IGRpdiA+IGRpdnsgLyogTWlzc2VkIEhpdCBDb250YWluZXIgKi9cXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICovXFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBjb2xvcjogI2Q5NDZlZjtcXG59XFxuXFxuLyogQ29tcHV0ZXIgR2FtZWJvYXJkICovXFxuLmNvbXB1dGVyLWdhbWVib2FyZHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcHVycGxlOyAqL1xcbiAgICAvKiBwYWRkaW5nOiAxMHB4OyAqL1xcbn1cXG4uY29tcHV0ZXItZ2FtZWJvYXJkID4gZGl2eyAvKiBSb3dzICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxuICAgIC8qIHBhZGRpbmc6IDEwcHg7ICovXFxufVxcbi5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXYgPiBkaXZ7IC8qIGNlbGxzICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZWVuO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHdpZHRoOiA0MHB4OyBcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIGhvdmVyLXRlc3QgKi9cXG4uaG92ZXItdGVzdHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzYzNjZmMSAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKiBzaGlwLXBsYWNlZCAtIERpc3BsYXlzIGVhY2ggc2hpcCBwbGFjZWQgb24gdGhlIGJvYXJkLiAqL1xcbi5zaGlwLXBsYWNlZHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzYzNjZmMSAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKiBjb21wdXRlci1zaGlwLXBsYWNlZCAtIERpc3BsYXlzIGVhY2ggc2hpcCB0aGF0IHRoZSBjb21wdXRlciBwbGFjZXMgb24gdGhlaXIgYm9hcmQuICovXFxuLmNvbXB1dGVyLXNoaXAtcGxhY2Vke1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZWVuICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIGNvbXB1dGVyLXNoaXAtaGl0IC0gSW5kaWNhdGVzIHRoYXQgY29tcHV0ZXIgc2hpcCBoYXMgYmVlbiBoaXQuICovXFxuLmNvbXB1dGVyLXNoaXAtaGl0ID4gaW1nW3NyY117XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7IFxcbn1cXG5cXG4vKiBwbGF5ZXItb25lLXNoaXAtaGl0IC0gSW5kaWNhdGVzIHRoYXQgdGhlIHBsYXllciBvbmUgc2hpcCBoYXMgYmVlbiBoaXQuICovXFxuLnBsYXllci1vbmUtc2hpcC1oaXQgPiBpbWdbc3JjXXtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qIHxJbnRlZmFjZSBTZWN0aW9ufCAqL1xcbi5pbnRlcmZhY2V7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgXFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIG9yYW5nZTsgKi9cXG4gICAgLyogcGFkZGluZzogMTBweDsgKi9cXG5cXG59XFxuLmludGVyZmFjZSA+IGJ1dHRvbnsgLyogTmV3IEJ1dHRvbiAqL1xcbiAgICBmb250LWZhbWlseTogY29tZm9ydGFhLCBzeXN0ZW0tdWksIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyBcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IFxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApOyBcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMzhmOWQ2MDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmludGVyZmFjZSA+IGJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojYTNlNjM1O1xcbn1cXG5cXG4uaW50ZXJmYWNlID4gZGl2Om50aC1jaGlsZCgyKXsgLyogeCBhbmQgeSBjb29yZGluYXRlIGNvbnRhaW5lci4gKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcblxcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgICovXFxufVxcbi5pbnRlcmZhY2UgPiBkaXY6bnRoLWNoaWxkKDIpID4gYnV0dG9ueyAvKiB4IGFuZCB5IGNvb3JkaW5hdGUgYnV0dG9ucy4gKi8gXFxuICAgIGZvbnQtZmFtaWx5OiBjb21mb3J0YWEsIHN5c3RlbS11aSwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgcGFkZGluZzogMXB4IDE1cHggMXB4IDE1cHg7IFxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7IFxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMzhmOWQ2MDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmludGVyZmFjZSA+IGRpdjpudGgtY2hpbGQoMikgPiBidXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhM2U2MzU7XFxufVxcblxcbi5pbnRlcmZhY2UgPiBkaXY6bnRoLWNoaWxkKDMpeyAvKiBOdW1iZXIgb2Ygc2hpcHMgb24gdGhlIHBsYXllciBib2FyZC4gKi9cXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBmb250LWZhbWlseTogY29tZm9ydGFhLCBzeXN0ZW0tdWksIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxuICAgIGNvbG9yOiB3aGl0ZTsgXFxufVxcblxcbi8qIGN1cnJlbnQtY29vcmRpbmF0ZSAtIFRoZSBjdXJyZW50IGNvb3JkaW5hdGUgY2hvb3NlbiBieSB0aGUgdXNlci4gKi9cXG4uY3VycmVudC1jb29yZGluYXRle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTNlNjM1ICFpbXBvcnRhbnQ7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhM2U2MzUgIWltcG9ydGFudDsgXFxufVxcblxcbi8qIGNvbW1lbmNlLWF0dGFjayAtIExldHMgdGhlIHBsYXllciBrbm93IHRoYXQgdGhleSBjYW4gYmVnaW4gYXR0YWNraW5nIHRoZSBjb21wdXRlciBnYW1lYm9hcmQgc2hpcHMuICovXFxuLmNvbW1lbmNlLWF0dGFja3tcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZm9udC1mYW1pbHk6IGNvbWZvcnRhYSwgc3lzdGVtLXVpLCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiO1xcbiAgICBjb2xvcjogd2hpdGU7IFxcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyogfEdhbWVib2FyZCBFdmVudHMgU2VjdGlvbnwgKi9cXG4vKiBwbGF5ZXItZ2FtZWJvYXJkLWV2ZW50cyAtIEFsbCB0aGUgcGxheWVyIGdhbWVib2FyZCBldmVudHMuICovXFxuI3BsYXllci1nYW1lYm9hcmQtZXZlbnRze1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBvcmFuZ2U7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC1mYW1pbHk6IGNvbWZvcnRhYSwgc3lzdGVtLXVpLCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiO1xcbiAgICBjb2xvcjogd2hpdGU7IFxcbn1cXG4jcGxheWVyLWdhbWVib2FyZC1ldmVudHMgPiBwe1xcbiAgICBkaXNwbGF5OiBpbmxpbmU7IFxcbn1cXG5cXG4vKiBjb21wdXRlci1nYW1lYm9hcmQtZXZlbnRzIC0gQWxsIHRoZSBjb21wdXRlciBnYW1lYm9hcmQgZXZlbnRzLiAqL1xcbiNjb21wdXRlci1nYW1lYm9hcmQtZXZlbnRze1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGJsdWU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXFxuICAgIGZvbnQtc2l6ZTogMjBweDsgXFxuICAgIGZvbnQtZmFtaWx5OiBjb21mb3J0YWEsIHN5c3RlbS11aSwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4jY29tcHV0ZXItZ2FtZWJvYXJkLWV2ZW50cyA+IHB7XFxuICAgIGRpc3BsYXk6IGlubGluZTsgIFxcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyogfEFwcGxpY2F0aW9uIFRpdGxlfCAqL1xcbiNhcHBsaWNhdGlvbi10aXRsZXtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmVlbjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogcGxheS1wcmV0ZW5kLCBzeXN0ZW0tdWksIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcXG4gICAgY29sb3I6ICNlMmU4ZjA7XFxufVxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKiB8TW9iaWxlIFNlY3Rpb258ICovXFxuLyogbWVkaWEtMCAtIFdpbGwgZGlzcGxheSB0aGF0IG1vYmlsZSBhbmQgbWluaW1pemF0aW9uIGRvZXNuJ3QgZXhpc3QuKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweClcXG57XFxuICAgICNhcHBsaWNhdGlvbi10aXRsZXtcXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAjbW9iaWxlLWF2YWlsYWJpbGl0eXtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBjb21mb3J0YWEsIHN5c3RlbS11aSwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgfVxcblxcbiAgICAjY29udGVudHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgI2NvbXB1dGVyLWdhbWVib2FyZC1ldmVudHN7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgICNwbGF5ZXItZ2FtZWJvYXJkLWV2ZW50c3tcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi91dGlscy9TaGlwXCI7XG5cbmltcG9ydCB7IEluaXRpYWxpemVET00gfSBmcm9tIFwiLi9tb2R1bGVzL0RvbUNvbnRlbnRcIjtcblxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuaW1wb3J0IHRlc3RTb3VuZCBmcm9tICcuL3NvdW5kcy9taXhraXQtcmV0cm8tZ2FtZS1ub3RpZmljYXRpb24tMjEyLndhdic7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIE5vdGVzOlxuLy8gMSkgSSBvbmx5IGhhdmUgdG8gdGVzdCB0aGUgc2hpcCBvYmplY3RzIHB1YmxpYyBpbnRlcmZhY2UuIE9ubHkgJ21ldGhvZHMgb3IgcHJvcGVydGllcycgdGhhdCBhcmUgdXNlZCBvdXRzaWRlIG9mIHlvdXIgc2hpcCBvYmplY3QgXG4vLyBuZWVkIHVuaXQgdGVzdHMuIFxuLy8gXG4vLyAyKSBOb3RlIHRoYXQgd2UgaGF2ZSBub3QgeWV0IGNyZWF0ZWQgYW55IFVzZXIgSW50ZXJmYWNlLiBXZSBzaG91bGQga25vd1xuLy8gb3VyIGNvZGUgaXMgY29taW5nIHRvZ2V0aGVyIGJ5IHJ1bm5pbmcgdGhlIHRlc3RzLiBZb3Ugc2hvdWxkbid0IGJlXG4vLyByZWx5aW5nIG9uICdjb25zb2xlLmxvZycgb3IgJ0RPTSBtZXRob2RzJyB0byBtYWtlIHN1cmUgeW91ciBjb2RlIGlzXG4vLyBkb2luZyB3aGF0IHlvdSBleHBlY3QgaXQgdG8uXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gfFRlc3RpbmcgQXJlYXxcbmNvbnNvbGUubG9nKCd8VGVzdGluZyBBcmVhfCcpO1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5jb25zb2xlLmxvZyhjb250ZW50KTsgLy8gVGVzdGluZyBcblxuY29uc3QgYnV0dG9uT25lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBidXR0b25PbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTsgXG5idXR0b25PbmUudGV4dENvbnRlbnQgPSAnQ2xpY2sgTWUhJztcblxuY29uc3QgbmV3U291bmQgPSBuZXcgQXVkaW8odGVzdFNvdW5kKTtcblxuLy8gYnV0dG9uT25lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKCdZb3UgY2xpY2tlZCB0aGUgYnV0dG9uIScpOyAvLyBUZXN0aW5nXG4vLyAgICAgbmV3U291bmQucGxheSgpO1xuLy8gfSk7IFxuXG4vLyBidXR0b25PbmVDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uT25lKTtcbi8vIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnV0dG9uT25lQ29udGFpbmVyKTtcbi8vIGNvbnNvbGUubG9nKCdcXG4nKTsgLy8gVGVzdGluZyBcblxuLyoqIHxTcHJlYWQgU3ludGF4KC4uLil8XG4gKiBUaGUgc3ByZWFkKC4uLikgc3ludGF4IGFsbG93IGFuIGl0ZXJhYmxlLCBzdWNoIGFzIGFuIGFycmF5IG9yIHN0cmluZywgdG8gYmUgZXhwYW5kZWQgaW4gcGxhY2VzIFxuICogd2hlcmUgemVybyBvciBtb3JlIGFyZ3VtZW50cyAoZm9yIGZ1bmN0aW9uIGNhbGxzKSBvciBlbGVtZW50cyAoZm9yIGFycmF5IGxpdGVyYWxzKSBhcmUgZXhwZWN0ZWQuXG4gKiBJbiBhbiBvYmplY3QgbGl0ZXJhbCwgdGhlIHNwcmVhZCBzeW50YXggZW51bWVyYXRlcyB0aGUgcHJvcGVydGllcyBvZiBhbiBvYmplY3QgYW5kIGFkZHMgdGhlIGtleS12YWx1ZSBwYWlyc1xuICogdG8gdGhlIG9iamVjdCBiZWluZyBjcmVhdGVkLiBcbiAqIFxuICogU3ByZWFkIHN5bnRheCBsb29rcyBleGFjdGx5IGxpa2UgcmVzdCBzeW50YXguIEluIGEgd2F5LCBzcHJlYWQgc3ludGF4IGlzIHRoZSBvcHBvc2l0ZSBvZiByZXN0IHN5bnRheC5cbiAqIFNwcmVhZCBzeW50YXggXCJleHBhbmRzXCIgYW4gYXJyYXkgaW50byBpdHMgZWxlbWVudHMsIHdoaWxlIHJlc3Qgc3ludGF4IGNvbGxlY3RzIG11bHRpcGxlIGVsZW1lbnRzIGFuZFxuICogXCJjb25kZW5zZXNcIiB0aGVtIGludG8gYSBzaW5nbGUgZWxlbWVudC4gXG4gKiBcbiAqIE5vdGU6IFVzaW5nIHRoZSBcIm1hcCBhcnJheSBtZXRob2RcIiB3aWxsIGNyZWF0ZSBhIG5ldyBhcnJheSBmcm9tIHRoZSBjYWxsaW5nIFsuLi5hcnJheSg4KV0gdGhhdCBpc1xuICogc3ByZWFkaW5nIDggZWxlbWVudHMgaW50byBpdC4gRWFjaCBlbGVtZW50IHdpbGwgYmUgYW4gQXJyYXkgb2YgOCBlbGVtZW50cyB0aGF0IGlzIGZpbGxlZCB3aXRoIChcIlwiKTtcbiAqL1xuY29uc3QgYXJyVGVzdCA9IFsuLi5BcnJheSg4KV0ubWFwKCgpID0+IEFycmF5KDgpLmZpbGwoXCJcIikpOyBcbmNvbnNvbGUubG9nKCdUaGUgQXJyYXk6ICcsIGFyclRlc3QpOyAvLyBUZXN0aW5nXG5jb25zb2xlLmxvZygnXFxuJyk7IC8vIFRlc3Rpbmdcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbkluaXRpYWxpemVET00oKTtcbiJdLCJuYW1lcyI6WyJHYW1lYm9hcmQiLCJOZXdHYW1lU2VsZWN0ZWQiLCJTaGlwRGF0YSIsIkF4aXNDaGFuZ2UiLCJBY3RpdmF0ZUdhbWUiLCJEaXNhYmxlUGxhY2VtZW50IiwiUGxhY2VkU2hpcHMiLCJDb21wdXRlclBsYWNlZFNoaXBzIiwid2F0ZXJFeHBsb3Npb24iLCJleHBsb3Npb25JbWFnZSIsIkluaXRpYWxpemVET00iLCJjb25zb2xlIiwibG9nIiwiR2FtZWJvYXJkRE9NIiwiSW50ZXJmYWNlRE9NIiwiUGxheWVyT25lRE9NIiwiQ29tcHV0ZXJET00iLCJEaXNwbGF5UGxheWVyT25lR2FtZWJvYXJkRXZlbnRzIiwiRGlzcGxheUNvbXB1dGVyR2FtZWJvYXJkRXZlbnRzIiwiYm9hcmRTdGF0dXMiLCJjb29yZHMiLCJzdW5rU3RhdHVzIiwic2hpcFN1bmtNc3NnIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidGV4dENvbnRlbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbmNhdCIsImRhdGFzZXQiLCJ4IiwieSIsImFwcGVuZENoaWxkIiwic2hpcE51bSIsIk51bWJlck9mU2hpcHNQbGFjZWQiLCJudW1iZXJPZlNoaXBzUGxhY2VkIiwicXVlcnlTZWxlY3RvciIsImxlbmd0aEluZGV4Iiwic2hpcHNQbGFjZWQiLCJhY3RpdmF0ZUdhbWUiLCJjb250ZW50IiwiZ2FtZWJvYXJkQ29udGFpbmVyIiwiY2xhc3NMaXN0IiwiYWRkIiwicGxheWVyT25lQm9hcmQiLCJwbGF5ZXJPbmUiLCJpIiwiZ2FtZWJvYXJkIiwibGVuZ3RoIiwicm93IiwiaiIsImNlbGwiLCJjb21wdXRlciIsImNvbXB1dGVyQm9hcmQiLCJjb21wdXRlclJvdyIsImNvbXB1dGVyQ2VsbCIsIlBsYWNlU2hpcHMiLCJlIiwiY2VsbHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwieENvb3JkIiwieUNvb3JkIiwiY29tbWVuY2VBdHRhY2siLCJheGlzQ2hhbmdlIiwiYXhpc1dhc0NoYW5nZWQiLCJib2FyZCIsInNoaXAiLCJTaGlwIiwic2hpcExlbmd0aCIsImRlZmF1bHRMZW5ndGhzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkVudGVyWCIsIkxlYXZlWCIsIkVudGVyWSIsIkxlYXZlWSIsIlBsYWNlT25YIiwiUGxhY2VPblkiLCJyZW1vdmUiLCJDaGFuZ2VUb1hBeGlzIiwiQ2hhbmdlVG9ZQXhpcyIsIkdhbWVJbml0aWF0ZWQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29tcHV0ZXJDZWxscyIsInRvdGFsQ29tcHV0ZXJTaGlwc1N1bmsiLCJ0b3RhbFBsYXllclNoaXBzU3VuayIsImtleSIsInN1bmsiLCJhY3RpdmF0ZVBsYXllck9uZVR1cm4iLCJuZXdHYW1lU2VsZWN0ZWQiLCJmb3JFYWNoIiwiUGxheWVyT25lVHVybiIsIkNvbXB1dGVyVHVybiIsInRhcmdldCIsImV4cGxvc2lvbiIsIkF1ZGlvIiwiY29tcHV0ZXJTaGlwSW5kZXgiLCJzaGlwTnVtYmVyU3VuayIsInNoaXBTdW5rIiwidW5kZWZpbmVkIiwiY29udGFpbnMiLCJjb29yZCIsImNvb3JkaW5hdGVzIiwicGFyc2VJbnQiLCJoaXRzIiwiZXhwbG9zaW9uSW1nIiwic3JjIiwicGxheSIsImhhc0F0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInJlY2VpdmVBdHRhY2siLCJDb21wdXRlclBsYWNlU2hpcHMiLCJjb21wdXRlclJvd3MiLCJjb21wdXRlclNoaXBzIiwiaW5kZXgiLCJjb21wdXRlclNoaXBQbGFjZWQiLCJ4Q29vcmRSYW5kb20iLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ5Q29vcmRSYW5kb20iLCJheGlzUmFuZG9tIiwieExlbmd0aE9uZSIsInhMZW5ndGhUd28iLCJ4TGVuZ3RoVGhyZWUiLCJ5TGVuZ3RoT25lIiwieUxlbmd0aFR3byIsInlMZW5ndGhUaHJlZSIsIl9sb29wIiwiY29vcmRpbmF0ZUluZGV4IiwiY29vcmRpbmF0ZXNOb3RPdmVybGFwcGluZyIsImNvbXB1dGVyQ2VsbE9uZSIsIl9sb29wMiIsImNvbXB1dGVyQ2VsbFR3byIsIl9sb29wMyIsImNvbXB1dGVyQ2VsbFRocmVlIiwicGxheWVySW50ZXJmYWNlIiwibmV3R2FtZSIsImNvb3JkaW5hdGVDb250YWluZXIiLCJOZXdHYW1lIiwiZGlzYWJsZVBsYWNlbWVudCIsInJlbW92ZUF0dHJpYnV0ZSIsInJlcGxhY2VDaGlsZHJlbiIsIm5leHRDZWxsT25lIiwibmV4dENlbGxUd28iLCJuZXh0Q2VsbFRocmVlIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiQXJyYXkiLCJtYXAiLCJmaWxsIiwic2hpcHNPbkJvYXJkIiwicGxheWVyT25lQ2VsbCIsImhpdCIsImlzU3VuayIsImNvbXB1dGVySGl0TWlzc2VkIiwiaXNIaXQiLCJ0ZXN0U291bmQiLCJidXR0b25PbmVDb250YWluZXIiLCJidXR0b25PbmUiLCJuZXdTb3VuZCIsImFyclRlc3QiXSwic291cmNlUm9vdCI6IiJ9