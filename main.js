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
  shipLength: 0
};
var PlacedShips = {};

// AxisChange Literal Object: 
var AxisChange = {
  axisChange: null,
  axisWasChanged: false
};

// activateGame Literal Object:
var ActivateGame = {
  activateGame: false,
  activatePlayerOneTurn: true,
  activateComputerTurn: false
};

// InitializingDOM(): Intializing DOM Content for the entire application. 
function InitializeDOM() {
  console.log("Initializing DOM Content..."); // Testing 
  console.log('\n'); // Testing 

  GameboardDOM();
  InterfaceDOM();
  PlayerOneDOM();
  ComputerDOM();
  ComputerPlaceShips();
  // GameInitiated();
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
  console.log('Current Axis: ', AxisChange.axisChange); // Testing  
  console.log('\n'); // Testing 

  if (!AxisChange.axisWasChanged && ShipData.lengthIndex < 10) {
    NumberOfShipsPlaced();
    var board = (0,_utils_Gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();
    var ship = board.Ship();
    ShipData.shipLength = ship.defaultLengths[ShipData.lengthIndex];
    ship.length = ShipData.shipLength + 1;
    console.log('Ship number to be placed: ', ShipData.lengthIndex + 1); // Testing 
    console.log('The length of the ship to be placed: ', ShipData.shipLength); // Testing 

    PlacedShips["ship ".concat(ShipData.lengthIndex)] = ship;
    console.log('Object with placed ships: ', PlacedShips); // Testing 
    console.log('\n'); // Testing
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
  if (ShipData.lengthIndex > 9)
    // Will deactivate player ones ship placement. 
    {
      for (var _i = 0; _i < cells.length; _i++) {
        cells[_i].removeEventListener('mouseenter', EnterX);
        cells[_i].removeEventListener('mouseleave', LeaveX);
        cells[_i].removeEventListener('mouseenter', EnterY);
        cells[_i].removeEventListener('mouseleave', LeaveY);
      }

      // TODO: Activate the computer gameboard to begin the game. 
      ActivateGame.activateGame = true;
      console.log("Game Activated: ", ActivateGame.activateGame); // Testing
      GameInitiated();
    }
}

// GameInitiated(): The player and computer will take turns picking coordinates on each others gameboard to sink a ship.
function GameInitiated() {
  var computerCells = document.querySelectorAll(".computer-gameboard > div > div");
  var playerCells = document.querySelectorAll(".player-one-gameboard > div > div");
  if (ActivateGame.activateGame) {
    computerCells.forEach(function (cell) {
      cell.addEventListener('click', PlayerOneTurn);
    });
  }
  if (!ActivateGame.activatePlayerOneTurn) {
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
  console.log(e.target); // Testing 
  console.log(computerCell); // Testing 
  console.log("X: ", e.target.dataset.x); // Testing 
  console.log("Y: ", e.target.dataset.y); // Testing

  ActivateGame.activatePlayerOneTurn = false;
  ActivateGame.activateComputerTurn = true;
  GameInitiated();
}

// ComputerTurn(): Computer will choose a spont on player one's board.
function ComputerTurn() {
  var xCoordRandom = Math.floor(Math.random() * 10);
  var yCoordRandom = Math.floor(Math.random() * 10);
  var playerOneCell = document.querySelector("[data-x=\"".concat(xCoordRandom, "\"][data-y=\"").concat(yCoordRandom, "\"]"));
  console.log('Computer choose: ', playerOneCell); // Testing 
  console.log("\n"); // Testing 

  if (playerOneCell.classList.contains('ship-placed')) {
    for (var key in PlacedShips) {
      for (var coord in PlacedShips[key].coordinates) {
        if (PlacedShips[key].coordinates[coord][0] === xCoordRandom && PlacedShips[key].coordinates[coord][1] === yCoordRandom) {
          console.log('The Computer Got A Hit! ', [xCoordRandom, yCoordRandom]); // Testing 
        }
      }
    }
  }
  ActivateGame.activateComputerTurn = false;
  ActivateGame.activatePlayerOneTurn = true;
  GameInitiated();

  // while(ActivateGame.activateComputerTurn)
  // {
  //     xCoordRandom = Math.floor(Math.random() * 10);
  //     yCoordRandom = Math.floor(Math.random() * 10);
  //     const playerOneCell = document.querySelector(`.player-one-gameboard > div > div[data-x="${xCoordRandom}"][data-y="${yCoordRandom}"]`); 

  //     console.log('Computer choose: ', playerOneCell); // Testing
  //     console.log('\n'); // Testing

  //     ActivateGame.activateComputerTurn = false; 
  //     ActivateGame.activatePlayerOneTurn = true; 
  // }
}

// ComputerPlaceShips(): The computer will place ships on their gameboard.
function ComputerPlaceShips() {
  var computerCells = document.querySelectorAll('.computer-gameboard > div > div');
  console.log('Computer Cells: ', computerCells); // Testing

  var computerRows = document.querySelectorAll('.computer-gameboard > div');
  console.log('Computer Rows: ', computerRows); // Testing

  var computerBoard = (0,_utils_Gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();
  var computerShips = computerBoard.Ship();
  computerShips.defaultLengths.forEach(function (ship) {
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
  newGame.addEventListener('click', NewGame);

  // placeShip.addEventListener('click', e => {
  //     ShipData.placementCommenced = true;  
  //     NumberOfShipsPlaced(); 
  //     PlaceShips(e);
  // });

  xCoord.addEventListener('click', function (e) {
    if (NewGameSelected.newGameSelected) {
      AxisChange.axisWasChanged = true;
      AxisChange.axisChange = 1;
      yCoord.classList.remove('current-coordinate');
      xCoord.classList.add('current-coordinate');
      PlaceShips(e);
    }
  });
  yCoord.addEventListener('click', function (e) {
    if (NewGameSelected.newGameSelected) {
      AxisChange.axisWasChanged = true;
      AxisChange.axisChange = 2;
      xCoord.classList.remove('current-coordinate');
      yCoord.classList.add('current-coordinate');
      PlaceShips(e);
    }
  });

  // xCoord.addEventListener('click', ChangeToXAxis);

  // yCoord.addEventListener('click', ChangeToYAxis);
}

// NewGame(): Will begin a new game for the player. 
function NewGame() {
  console.log('Player begins a new game.'); // Testing 
  console.log('\n'); // Testing 

  // TODO: Reset all the game attributes in this function when the
  // user wants to start a new game. 

  NewGameSelected.newGameSelected = true;
  PlaceShips();
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
  } else if (ShipData.shipLength === 1)
    // The ship length to be placed on the board.
    {
      if (!(parseInt(e.target.dataset.y) === 9))
        // Keeps all ship placements on the gameboard. 
        {
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

    if (ShipData.shipLength === 0) {
      if (cell.classList.contains('ship-placed'))
        // Cant place the ship on this cell when there is one already on the cell. 
        {
          console.log('Cell already contains a ship'); // Testing
        } else {
        cell.classList.add('ship-placed');
        PlacedShips["ship ".concat(ShipData.lengthIndex)].coordinates = {
          0: [parseInt(cell.dataset.x), parseInt(cell.dataset.y)]
        };
        ShipData.lengthIndex++;
        AxisChange.axisWasChanged = false;
        PlaceShips();
      }
    } else if (ShipData.shipLength === 1) {
      if (cell.classList.contains('ship-placed') && nextCellOne.classList.contains('ship-placed') || cell.classList.contains('ship-placed') || nextCellOne.classList.contains('ship-placed')) {
        console.log('Cell already contains a ship'); // Testing
      } else {
        cell.classList.add('ship-placed');
        nextCellOne.classList.add('ship-placed');
        PlacedShips["ship ".concat(ShipData.lengthIndex)].coordinates = {
          0: [parseInt(cell.dataset.x), parseInt(cell.dataset.y)],
          1: [parseInt(nextCellOne.dataset.x), parseInt(nextCellOne.dataset.y)]
        };
        ShipData.lengthIndex++;
        AxisChange.axisWasChanged = false;
        PlaceShips();
      }
    } else if (ShipData.shipLength === 2) {
      if (cell.classList.contains('ship-placed') && nextCellOne.classList.contains('ship-placed') && nextCellTwo.classList.contains('ship-placed') || cell.classList.contains('ship-placed') || nextCellOne.classList.contains('ship-placed') || nextCellTwo.classList.contains('ship-placed')) {
        console.log('Cell already contains a ship'); // Testing
      } else {
        cell.classList.add('ship-placed');
        nextCellOne.classList.add('ship-placed');
        nextCellTwo.classList.add('ship-placed');
        PlacedShips["ship ".concat(ShipData.lengthIndex)].coordinates = {
          0: [parseInt(cell.dataset.x), parseInt(cell.dataset.y)],
          1: [parseInt(nextCellOne.dataset.x), parseInt(nextCellOne.dataset.y)],
          2: [parseInt(nextCellTwo.dataset.x), parseInt(nextCellTwo.dataset.y)]
        };
        ShipData.lengthIndex++;
        AxisChange.axisWasChanged = false;
        PlaceShips();
      }
    } else if (ShipData.shipLength === 3) {
      if (cell.classList.contains('ship-placed') && nextCellOne.classList.contains('ship-placed') && nextCellTwo.classList.contains('ship-placed') && nextCellThree.classList.contains('ship-placed') || cell.classList.contains('ship-placed') || nextCellOne.classList.contains('ship-placed') || nextCellTwo.classList.contains('ship-placed') || nextCellThree.classList.contains('ship-placed')) {
        console.log('Cell already contains a ship'); // Testing
      } else {
        cell.classList.add('ship-placed');
        nextCellOne.classList.add('ship-placed');
        nextCellTwo.classList.add('ship-placed');
        nextCellThree.classList.add('ship-placed');
        PlacedShips["ship ".concat(ShipData.lengthIndex)].coordinates = {
          0: [parseInt(cell.dataset.x), parseInt(cell.dataset.y)],
          1: [parseInt(nextCellOne.dataset.x), parseInt(nextCellOne.dataset.y)],
          2: [parseInt(nextCellTwo.dataset.x), parseInt(nextCellTwo.dataset.y)],
          3: [parseInt(nextCellThree.dataset.x), parseInt(nextCellThree.dataset.y)]
        };
        ShipData.lengthIndex++;
        AxisChange.axisWasChanged = false;
        PlaceShips();
      }
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

    if (ShipData.shipLength === 0) {
      if (cell.classList.contains('ship-placed')) {
        console.log("Cell already contains a ship."); // Testing 
      } else {
        cell.classList.add('ship-placed');
        PlacedShips["ship ".concat(ShipData.lengthIndex)].coordinates = {
          0: [parseInt(cell.dataset.x), parseInt(cell.dataset.y)]
        };
        ShipData.lengthIndex++;
        AxisChange.axisWasChanged = false;
        PlaceShips();
      }
    } else if (ShipData.shipLength === 1) {
      if (cell.classList.contains('ship-placed') && nextCellOne.classList.contains('ship-placed') || cell.classList.contains('ship-placed') || nextCellOne.classList.contains('ship-placed')) {
        console.log("Cell already contains a ship."); // Testing 
      } else {
        cell.classList.add('ship-placed');
        nextCellOne.classList.add('ship-placed');
        PlacedShips["ship ".concat(ShipData.lengthIndex)].coordinates = {
          0: [parseInt(cell.dataset.x), parseInt(cell.dataset.y)],
          1: [parseInt(nextCellOne.dataset.x), parseInt(nextCellOne.dataset.y)]
        };
        ShipData.lengthIndex++;
        AxisChange.axisWasChanged = false;
        PlaceShips();
      }
    } else if (ShipData.shipLength === 2) {
      if (cell.classList.contains('ship-placed') && nextCellOne.classList.contains('ship-placed') && nextCellTwo.classList.contains('ship-placed') || cell.classList.contains('ship-placed') || nextCellOne.classList.contains('ship-placed') || nextCellTwo.classList.contains('ship-placed')) {
        console.log("Cell already contains a ship"); // Testing 
      } else {
        cell.classList.add('ship-placed');
        nextCellOne.classList.add('ship-placed');
        nextCellTwo.classList.add('ship-placed');
        PlacedShips["ship ".concat(ShipData.lengthIndex)].coordinates = {
          0: [parseInt(cell.dataset.x), parseInt(cell.dataset.y)],
          1: [parseInt(nextCellOne.dataset.x), parseInt(nextCellOne.dataset.y)],
          2: [parseInt(nextCellTwo.dataset.x), parseInt(nextCellTwo.dataset.y)]
        };
        ShipData.lengthIndex++;
        AxisChange.axisWasChanged = false;
        PlaceShips();
      }
    } else if (ShipData.shipLength === 3) {
      if (cell.classList.contains('ship-placed') && nextCellOne.classList.contains('ship-placed') && nextCellTwo.classList.contains('ship-placed') && nextCellThree.classList.contains('ship-placed') || cell.classList.contains('ship-placed') || nextCellOne.classList.contains('ship-placed') || nextCellThree.classList.contains('ship-placed') && nextCellThree.classList.contains('ship-placed')) {
        console.log("Cell already contains a ship"); // Testing 
      } else {
        cell.classList.add('ship-placed');
        nextCellOne.classList.add('ship-placed');
        nextCellTwo.classList.add('ship-placed');
        nextCellThree.classList.add('ship-placed');
        PlacedShips["ship ".concat(ShipData.lengthIndex)].coordinates = {
          0: [parseInt(cell.dataset.x), parseInt(cell.dataset.y)],
          1: [parseInt(nextCellOne.dataset.x), parseInt(nextCellOne.dataset.y)],
          2: [parseInt(nextCellTwo.dataset.x), parseInt(nextCellTwo.dataset.y)],
          3: [parseInt(nextCellThree.dataset.x), parseInt(nextCellThree.dataset.y)]
        };
        ShipData.lengthIndex++;
        AxisChange.axisWasChanged = false;
        PlaceShips();
      }
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
 * 
 * -> Gameboards should have a receiveAttack function that takes a pair
 * of coordinates, determines whether or not the attack hit a ship and
 * then sends the 'hit' function to the correct ship, or record the 
 * coordinates of the missed shot. 
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
  var length = null;
  var hits = null;
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
.player-one-board > div{ /* rows */
    display: flex;

    /* border: 1px solid black; */
    /* padding: 5px; */
}
.player-one-board > div > div{ /* cells */
    border: 1px solid lightcoral;
    padding: 5px;
    width: 30px;
    height: 30px;
}

/* Player Two Board */
.computer-gameboard{
    display: flex;
    flex-direction: column;

    border: 1px solid purple;
    padding: 10px;
}
.computer-gameboard > div{
    display: flex;

    /* padding: 10px; */
}
.computer-gameboard > div > div{ /* cells */
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,8CAA8C;AAC9C;IACI,0BAA0B;IAC1B,qBAAqB;IACrB,4BAA4B;IAC5B,4BAA4B;IAC5B,eAAe;AACnB;AACA;IACI,2BAA2B;IAC3B,2BAA2B;AAC/B;;AAEA,4KAA4K;AAC5K,4KAA4K;AAC5K,2BAA2B;AAC3B;IACI,qBAAqB;IACrB,aAAa;AACjB;;AAEA,4KAA4K;AAC5K,4KAA4K;AAC5K,0BAA0B;AAC1B;IACI,aAAa;IACb,SAAS;;IAET,sBAAsB;IACtB,aAAa;IACb,aAAa;IACb,cAAc;AAClB;;AAEA,qBAAqB;AACrB;IACI,aAAa;IACb,sBAAsB;;IAEtB,uBAAuB;IACvB,aAAa;AACjB;AACA,yBAAyB,SAAS;IAC9B,aAAa;;IAEb,6BAA6B;IAC7B,kBAAkB;AACtB;AACA,+BAA+B,UAAU;IACrC,4BAA4B;IAC5B,YAAY;IACZ,WAAW;IACX,YAAY;AAChB;;AAEA,qBAAqB;AACrB;IACI,aAAa;IACb,sBAAsB;;IAEtB,wBAAwB;IACxB,aAAa;AACjB;AACA;IACI,aAAa;;IAEb,mBAAmB;AACvB;AACA,iCAAiC,UAAU;IACvC,4BAA4B;IAC5B,YAAY;IACZ,WAAW;IACX,YAAY;AAChB;;AAEA,eAAe;AACf;IACI,kCAAkC;AACtC;;AAEA,0DAA0D;AAC1D;IACI,kCAAkC;AACtC;;AAEA,uFAAuF;AACvF;IACI,uCAAuC;AAC3C;;;AAGA,4KAA4K;AAC5K,4KAA4K;AAC5K,uBAAuB;AACvB;IACI,aAAa;IACb,sBAAsB;;IAEtB,wBAAwB;IACxB,aAAa;AACjB;;AAEA,qEAAqE;AACrE;IACI,4BAA4B;IAC5B,4BAA4B;AAChC","sourcesContent":["/* |Testing Area Identifiers and Components| */\n#content > div > button{\n    padding: 10px 5px 10px 5px;\n    font-family:monospace;\n    background-color: lightcoral;\n    border: 1px solid lightcoral; \n    cursor: pointer;\n}\n#content > div > button:hover{\n    background-color: lightblue;\n    border: 1px solid lightblue;\n}\n\n/***************************************************************************************************************************************************************************/\n/***************************************************************************************************************************************************************************/\n/* |Main Content Section| */\n#content{\n    border: 1px solid red;\n    padding: 10px; \n}\n\n/***************************************************************************************************************************************************************************/\n/***************************************************************************************************************************************************************************/\n/* |Gameboard Container| */\n.gameboard-container{\n    display: flex;\n    gap: 10px;\n\n    border: 1px solid blue;\n    padding: 10px;\n    width: 1000px;\n    margin: 0 auto;\n}\n\n/* Player One Board */\n.player-one-board{\n    display: flex;\n    flex-direction: column;\n\n    border: 1px solid green;\n    padding: 10px;\n}\n.player-one-board > div{ /* rows */\n    display: flex;\n\n    /* border: 1px solid black; */\n    /* padding: 5px; */\n}\n.player-one-board > div > div{ /* cells */\n    border: 1px solid lightcoral;\n    padding: 5px;\n    width: 30px;\n    height: 30px;\n}\n\n/* Player Two Board */\n.computer-gameboard{\n    display: flex;\n    flex-direction: column;\n\n    border: 1px solid purple;\n    padding: 10px;\n}\n.computer-gameboard > div{\n    display: flex;\n\n    /* padding: 10px; */\n}\n.computer-gameboard > div > div{ /* cells */\n    border: 1px solid lightgreen;\n    padding: 5px;\n    width: 30px; \n    height: 30px;\n}\n\n/* hover-test */\n.hover-test{\n    border: 1px solid black !important;\n}\n\n/* ship-placed - Displays each ship placed on the board. */\n.ship-placed{\n    border: 1px solid black !important;\n}\n\n/* computer-ship-placed - Displays each ship that the computer places on their board. */\n.computer-ship-placed{\n    border: 1px solid lightgreen !important;\n}\n\n\n/***************************************************************************************************************************************************************************/\n/***************************************************************************************************************************************************************************/\n/* |Inteface Section| */\n.interface{\n    display: flex;\n    flex-direction: column;\n    \n    border: 1px solid orange;\n    padding: 10px;\n}\n\n/* current-coordinate - The current coordinate choosen by the user. */\n.current-coordinate{\n    background-color: lightcoral;\n    border: 1px solid lightcoral;\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1ksT0FBTyxDQUFDLENBQUMsQ0FBQzs7QUFFdEIsSUFBTW1HLGtCQUFrQixHQUFHdkcsUUFBUSxDQUFDTSxhQUFhLENBQUMsS0FBSyxDQUFDO0FBQ3hELElBQU1rRyxTQUFTLEdBQUd4RyxRQUFRLENBQUNNLGFBQWEsQ0FBQyxRQUFRLENBQUM7QUFDbERrRyxTQUFTLENBQUN0RyxXQUFXLEdBQUcsV0FBVztBQUVuQyxJQUFNdUcsUUFBUSxHQUFHLElBQUlDLEtBQUssQ0FBQ0wsMkVBQVMsQ0FBQzs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTU0sT0FBTyxHQUFHakIsa0JBQUEsQ0FBSUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFQyxHQUFHLENBQUM7RUFBQSxPQUFNRCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUNFLElBQUksQ0FBQyxFQUFFLENBQUM7QUFBQSxFQUFDO0FBQzFEdEcsT0FBTyxDQUFDQyxHQUFHLENBQUMsYUFBYSxFQUFFbUgsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUNyQ3BILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDbkI7O0FBRUFGLGtFQUFhLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvRG9tQ29udGVudC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvdXRpbHMvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy91dGlscy9TaGlwLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gXCIuLi91dGlscy9HYW1lYm9hcmRcIjtcblxuLy8gQXhpc1NlbGVjdGVkKCk6IFdpbGwgb3BlcmF0ZSB0aGUgYXhpcyB0aGUgY2hhbmdlIGJ5IGJvb2xlYW4uXG5jb25zdCBBeGlzU2VsZWN0ZWQgPSAoKCkgPT4ge1xuICAgIGxldCBheGlzU2VsZWN0ZWQgPSBmYWxzZTtcblxuICAgIHJldHVybiB7YXhpc1NlbGVjdGVkfTtcbn0pKCk7XG5cbi8vIE5ld0dhbWVTZWxlY3RlZCgpOiBUb2dnbGVzIHRydWUgaWYgdGhlIG5ldyBnYW1lIGJ1dHRvbiB3YXMgY2xpY2tlZC5cbmNvbnN0IE5ld0dhbWVTZWxlY3RlZCA9ICgoKSA9PiB7XG4gICAgbGV0IG5ld0dhbWVTZWxlY3RlZCA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHtuZXdHYW1lU2VsZWN0ZWR9OyBcbn0pKCk7XG5cbi8vIFNoaXBEYXRhIExpdGVybCBPYmplY3Q6IFdpbGwgY29udGFpbiBzaGlwIGRhdGEgdG8gY29udHJvbCB0aGUgZmxvdyBvZiBzaGlwcyBvbiB0aGUgZ2FtZWJvYXJkLiBcbmxldCBTaGlwRGF0YSA9IHtcbiAgICBsZW5ndGhJbmRleDogMCxcbiAgICBzaGlwc1BsYWNlZDogMCxcbiAgICBzaGlwTGVuZ3RoOiAwLFxufVxuXG5sZXQgUGxhY2VkU2hpcHMgPSB7XG59XG5cbi8vIEF4aXNDaGFuZ2UgTGl0ZXJhbCBPYmplY3Q6IFxubGV0IEF4aXNDaGFuZ2UgPSB7XG4gICAgYXhpc0NoYW5nZTogbnVsbCwgXG4gICAgYXhpc1dhc0NoYW5nZWQ6IGZhbHNlLFxufVxuXG4vLyBhY3RpdmF0ZUdhbWUgTGl0ZXJhbCBPYmplY3Q6XG5sZXQgQWN0aXZhdGVHYW1lID0ge1xuICAgIGFjdGl2YXRlR2FtZTogZmFsc2UsIFxuICAgIGFjdGl2YXRlUGxheWVyT25lVHVybjogdHJ1ZSxcbiAgICBhY3RpdmF0ZUNvbXB1dGVyVHVybjogZmFsc2UsXG59XG5cbi8vIEluaXRpYWxpemluZ0RPTSgpOiBJbnRpYWxpemluZyBET00gQ29udGVudCBmb3IgdGhlIGVudGlyZSBhcHBsaWNhdGlvbi4gXG5leHBvcnQgZnVuY3Rpb24gSW5pdGlhbGl6ZURPTSgpe1xuICAgIGNvbnNvbGUubG9nKFwiSW5pdGlhbGl6aW5nIERPTSBDb250ZW50Li4uXCIpOyAvLyBUZXN0aW5nIFxuICAgIGNvbnNvbGUubG9nKCdcXG4nKTsgLy8gVGVzdGluZyBcblxuICAgIEdhbWVib2FyZERPTSgpO1xuICAgIEludGVyZmFjZURPTSgpO1xuICAgIFBsYXllck9uZURPTSgpO1xuICAgIENvbXB1dGVyRE9NKCk7XG4gICAgQ29tcHV0ZXJQbGFjZVNoaXBzKCk7XG4gICAgLy8gR2FtZUluaXRpYXRlZCgpO1xuICAgIC8vIEF4aXNET00oKTtcbn1cbi8vIE51bWJlck9mU2hpcHNQbGFjZWQoKTogV2lsbCBrZWVwIHRyYWNrIG9mIHRoZSBjdXJyZW50IHNoaXAgdG8gYmUgcGxhY2VkIG9uIHRoZSBnYW1lYm9hcmQuXG5mdW5jdGlvbiBOdW1iZXJPZlNoaXBzUGxhY2VkKCl7XG4gICAgY29uc3QgbnVtYmVyT2ZTaGlwc1BsYWNlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5udW1iZXItb2Ytc2hpcHMnKTtcblxuICAgIGlmICghKChTaGlwRGF0YS5sZW5ndGhJbmRleCArIDEpID4gMTApKVxuICAgIHtcbiAgICAgICAgU2hpcERhdGEuc2hpcHNQbGFjZWQrKztcbiAgICAgICAgbnVtYmVyT2ZTaGlwc1BsYWNlZC50ZXh0Q29udGVudCA9IGBTaGlwOiAke1NoaXBEYXRhLnNoaXBzUGxhY2VkfWA7XG4gICAgfVxufVxuXG4vLyBHYW1lYm9hcmRET00oKTogVGhlIGdhbWVib2FyZCBET00gZm9yIHRoZSBlbnRpcmUgYXBwbGljYXRpb24uIFxuZnVuY3Rpb24gR2FtZWJvYXJkRE9NKCl7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbiAgICBjb25zdCBnYW1lYm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBnYW1lYm9hcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZ2FtZWJvYXJkLWNvbnRhaW5lcicpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChnYW1lYm9hcmRDb250YWluZXIpOyBcbn1cblxuLy8gUGxheWVyT25lRE9NKCk6IFRoZSBwbGF5ZXIgb25lIGJvYXJkLlxuZnVuY3Rpb24gUGxheWVyT25lRE9NKCl7XG4gICAgY29uc3QgZ2FtZWJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVib2FyZC1jb250YWluZXInKTsgXG5cbiAgICBjb25zdCBwbGF5ZXJPbmVCb2FyZCA9IEdhbWVib2FyZCgpOyBcblxuICAgIGNvbnN0IHBsYXllck9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcbiAgICBwbGF5ZXJPbmUuY2xhc3NMaXN0LmFkZCgncGxheWVyLW9uZS1ib2FyZCcpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJPbmVCb2FyZC5nYW1lYm9hcmQubGVuZ3RoOyBpKyspe1xuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG5cbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBwbGF5ZXJPbmVCb2FyZC5nYW1lYm9hcmRbaV0ubGVuZ3RoOyBqKyspe1xuICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xuICAgICAgICAgICAgY2VsbC5kYXRhc2V0LnggPSBpO1xuICAgICAgICAgICAgY2VsbC5kYXRhc2V0LnkgPSBqO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgcGxheWVyT25lLmFwcGVuZENoaWxkKHJvdyk7IFxuICAgIH1cblxuICAgIGdhbWVib2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJPbmUpOyBcbn1cblxuLy8gQ29tcHV0ZXJET00oKTogVGhlIGNvbXB1dGVyIGdhbWVib2FyZFxuZnVuY3Rpb24gQ29tcHV0ZXJET00oKXtcbiAgICBjb25zdCBnYW1lYm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZWJvYXJkLWNvbnRhaW5lcicpO1xuICAgIFxuICAgIGNvbnN0IGNvbXB1dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuICAgIGNvbXB1dGVyLmNsYXNzTGlzdC5hZGQoJ2NvbXB1dGVyLWdhbWVib2FyZCcpOyBcblxuICAgIGNvbnN0IGNvbXB1dGVyQm9hcmQgPSBHYW1lYm9hcmQoKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29tcHV0ZXJCb2FyZC5nYW1lYm9hcmQubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgICBjb25zdCBjb21wdXRlclJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcblxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbXB1dGVyQm9hcmQuZ2FtZWJvYXJkW2ldLmxlbmd0aDsgaisrKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zdCBjb21wdXRlckNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgICAgICAgICBjb21wdXRlckNlbGwuZGF0YXNldC54ID0gaTtcbiAgICAgICAgICAgIGNvbXB1dGVyQ2VsbC5kYXRhc2V0LnkgPSBqO1xuICAgICAgICAgICAgY29tcHV0ZXJSb3cuYXBwZW5kQ2hpbGQoY29tcHV0ZXJDZWxsKTsgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbXB1dGVyLmFwcGVuZENoaWxkKGNvbXB1dGVyUm93KTsgXG4gICAgfVxuXG4gICAgZ2FtZWJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbXB1dGVyKTsgXG59XG5cbi8vIFBsYWNlU2hpcHMoKTogV2lsbCBwbGFjZSB0aGUgc2hpcHMgb24gdGhlIGdhbWVib2FyZC5cbmZ1bmN0aW9uIFBsYWNlU2hpcHMoZSl7XG4gICAgY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheWVyLW9uZS1ib2FyZCA+IGRpdiA+IGRpdicpOyBcbiAgICBjb25zdCB4Q29vcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZWJvYXJkLWNvbnRhaW5lciA+IGRpdjpudGgtY2hpbGQoMSkgPiBkaXYgPiBidXR0b246bnRoLWNoaWxkKDEpJyk7XG4gICAgY29uc3QgeUNvb3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVib2FyZC1jb250YWluZXIgPiBkaXY6bnRoLWNoaWxkKDEpID4gZGl2ID4gYnV0dG9uOm50aC1jaGlsZCgyKScpOyBcblxuIFxuICAgIGNvbnNvbGUubG9nKCdDdXJyZW50IEF4aXM6ICcsIEF4aXNDaGFuZ2UuYXhpc0NoYW5nZSk7IC8vIFRlc3RpbmcgIFxuICAgIGNvbnNvbGUubG9nKCdcXG4nKTsgLy8gVGVzdGluZyBcblxuICAgIGlmICghQXhpc0NoYW5nZS5heGlzV2FzQ2hhbmdlZCAmJiBTaGlwRGF0YS5sZW5ndGhJbmRleCA8IDEwKVxuICAgIHtcbiAgICAgICAgTnVtYmVyT2ZTaGlwc1BsYWNlZCgpOyBcbiAgICAgICAgICAgIFxuICAgICAgICBjb25zdCBib2FyZCA9IEdhbWVib2FyZCgpO1xuICAgICAgICBjb25zdCBzaGlwID0gYm9hcmQuU2hpcCgpO1xuICAgIFxuICAgICAgICBTaGlwRGF0YS5zaGlwTGVuZ3RoID0gc2hpcC5kZWZhdWx0TGVuZ3Roc1tTaGlwRGF0YS5sZW5ndGhJbmRleF07XG5cbiAgICAgICAgc2hpcC5sZW5ndGggPSBTaGlwRGF0YS5zaGlwTGVuZ3RoICsgMTsgXG5cbiAgICAgICAgY29uc29sZS5sb2coJ1NoaXAgbnVtYmVyIHRvIGJlIHBsYWNlZDogJywgU2hpcERhdGEubGVuZ3RoSW5kZXggKyAxKTsgLy8gVGVzdGluZyBcbiAgICAgICAgY29uc29sZS5sb2coJ1RoZSBsZW5ndGggb2YgdGhlIHNoaXAgdG8gYmUgcGxhY2VkOiAnLCBTaGlwRGF0YS5zaGlwTGVuZ3RoKTsgLy8gVGVzdGluZyBcblxuICAgICAgICBQbGFjZWRTaGlwc1tgc2hpcCAke1NoaXBEYXRhLmxlbmd0aEluZGV4fWBdID0gc2hpcDtcbiAgICAgICAgY29uc29sZS5sb2coJ09iamVjdCB3aXRoIHBsYWNlZCBzaGlwczogJywgUGxhY2VkU2hpcHMpOyAvLyBUZXN0aW5nIFxuICAgICAgICBjb25zb2xlLmxvZygnXFxuJyk7IC8vIFRlc3RpbmdcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNlbGxzLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgICAgaWYgKEF4aXNDaGFuZ2UuYXhpc0NoYW5nZSA9PT0gbnVsbClcbiAgICAgICAge1xuICAgICAgICAgICAgY2VsbHNbaV0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIEVudGVyWCk7XG4gICAgICAgICAgICBjZWxsc1tpXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgTGVhdmVYKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChBeGlzQ2hhbmdlLmF4aXNDaGFuZ2UgPT09IDEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNlbGxzW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBFbnRlclkpO1xuICAgICAgICAgICAgY2VsbHNbaV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIExlYXZlWSk7XG4gICAgICAgICAgICBjZWxsc1tpXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgRW50ZXJYKTtcbiAgICAgICAgICAgIGNlbGxzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBMZWF2ZVgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKEF4aXNDaGFuZ2UuYXhpc0NoYW5nZSA9PT0gMilcbiAgICAgICAge1xuICAgICAgICAgICAgY2VsbHNbaV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIEVudGVyWCk7XG4gICAgICAgICAgICBjZWxsc1tpXS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgTGVhdmVYKTtcbiAgICAgICAgICAgIGNlbGxzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBFbnRlclkpO1xuICAgICAgICAgICAgY2VsbHNbaV0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIExlYXZlWSk7IFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFNoaXBEYXRhLmxlbmd0aEluZGV4ID4gOSkgLy8gV2lsbCBkZWFjdGl2YXRlIHBsYXllciBvbmVzIHNoaXAgcGxhY2VtZW50LiBcbiAgICB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjZWxscy5sZW5ndGg7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgY2VsbHNbaV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIEVudGVyWCk7XG4gICAgICAgICAgICBjZWxsc1tpXS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgTGVhdmVYKTsgXG4gICAgICAgICAgICBjZWxsc1tpXS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgRW50ZXJZKTtcbiAgICAgICAgICAgIGNlbGxzW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBMZWF2ZVkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVE9ETzogQWN0aXZhdGUgdGhlIGNvbXB1dGVyIGdhbWVib2FyZCB0byBiZWdpbiB0aGUgZ2FtZS4gXG4gICAgICAgIEFjdGl2YXRlR2FtZS5hY3RpdmF0ZUdhbWUgPSB0cnVlOyBcbiAgICAgICAgY29uc29sZS5sb2coXCJHYW1lIEFjdGl2YXRlZDogXCIsIEFjdGl2YXRlR2FtZS5hY3RpdmF0ZUdhbWUpOyAvLyBUZXN0aW5nXG4gICAgICAgIEdhbWVJbml0aWF0ZWQoKTsgXG4gICAgfVxufVxuXG4vLyBHYW1lSW5pdGlhdGVkKCk6IFRoZSBwbGF5ZXIgYW5kIGNvbXB1dGVyIHdpbGwgdGFrZSB0dXJucyBwaWNraW5nIGNvb3JkaW5hdGVzIG9uIGVhY2ggb3RoZXJzIGdhbWVib2FyZCB0byBzaW5rIGEgc2hpcC5cbmZ1bmN0aW9uIEdhbWVJbml0aWF0ZWQoKXtcbiAgICBjb25zdCBjb21wdXRlckNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLmNvbXB1dGVyLWdhbWVib2FyZCA+IGRpdiA+IGRpdmApO1xuICAgIGNvbnN0IHBsYXllckNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLnBsYXllci1vbmUtZ2FtZWJvYXJkID4gZGl2ID4gZGl2YCk7IFxuXG4gICAgaWYgKEFjdGl2YXRlR2FtZS5hY3RpdmF0ZUdhbWUpXG4gICAge1xuICAgICAgICBjb21wdXRlckNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBQbGF5ZXJPbmVUdXJuKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCFBY3RpdmF0ZUdhbWUuYWN0aXZhdGVQbGF5ZXJPbmVUdXJuKVxuICAgIHtcbiAgICAgICAgY29tcHV0ZXJDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgUGxheWVyT25lVHVybik7IFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJQbGF5ZXIgT25lIFR1cm4gT3ZlclwiKTsgLy8gVGVzdGluZyBcbiAgICAgICAgY29uc29sZS5sb2coXCJcXG5cIik7IC8vIFRlc3RpbmdcbiAgICAgICAgXG4gICAgICAgIENvbXB1dGVyVHVybigpOyAgXG4gICAgfVxufVxuXG4vLyBQbGF5ZXJPbmVUdXJuKCk6IFBsYXllciBvbmUgd2lsbCBjaG9vc2UgYSBzcG90IG9uIHRoZSBib2FyZC4gXG5mdW5jdGlvbiBQbGF5ZXJPbmVUdXJuKGUpe1xuICAgIGNvbnN0IGNvbXB1dGVyQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXYgPiBkaXZbZGF0YS14PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnh9XCJdW2RhdGEteT1cIiR7ZS50YXJnZXQuZGF0YXNldC55fVwiXWApOyBcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldCk7IC8vIFRlc3RpbmcgXG4gICAgY29uc29sZS5sb2coY29tcHV0ZXJDZWxsKTsgLy8gVGVzdGluZyBcbiAgICBjb25zb2xlLmxvZyhcIlg6IFwiLCBlLnRhcmdldC5kYXRhc2V0LngpOyAvLyBUZXN0aW5nIFxuICAgIGNvbnNvbGUubG9nKFwiWTogXCIsIGUudGFyZ2V0LmRhdGFzZXQueSk7IC8vIFRlc3RpbmdcblxuICAgIEFjdGl2YXRlR2FtZS5hY3RpdmF0ZVBsYXllck9uZVR1cm4gPSBmYWxzZTtcbiAgICBBY3RpdmF0ZUdhbWUuYWN0aXZhdGVDb21wdXRlclR1cm4gPSB0cnVlO1xuXG4gICAgR2FtZUluaXRpYXRlZCgpOyBcbn1cblxuLy8gQ29tcHV0ZXJUdXJuKCk6IENvbXB1dGVyIHdpbGwgY2hvb3NlIGEgc3BvbnQgb24gcGxheWVyIG9uZSdzIGJvYXJkLlxuZnVuY3Rpb24gQ29tcHV0ZXJUdXJuKCl7XG4gICAgY29uc3QgeENvb3JkUmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIGNvbnN0IHlDb29yZFJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTsgXG4gICAgY29uc3QgcGxheWVyT25lQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke3hDb29yZFJhbmRvbX1cIl1bZGF0YS15PVwiJHt5Q29vcmRSYW5kb219XCJdYCk7XG4gICAgY29uc29sZS5sb2coJ0NvbXB1dGVyIGNob29zZTogJywgcGxheWVyT25lQ2VsbCk7IC8vIFRlc3RpbmcgXG4gICAgY29uc29sZS5sb2coXCJcXG5cIik7IC8vIFRlc3RpbmcgXG5cbiAgICBpZiAocGxheWVyT25lQ2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykpXG4gICAge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gUGxhY2VkU2hpcHMpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvciAobGV0IGNvb3JkIGluIFBsYWNlZFNoaXBzW2tleV0uY29vcmRpbmF0ZXMpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKFBsYWNlZFNoaXBzW2tleV0uY29vcmRpbmF0ZXNbY29vcmRdWzBdID09PSB4Q29vcmRSYW5kb20gJiYgUGxhY2VkU2hpcHNba2V5XS5jb29yZGluYXRlc1tjb29yZF1bMV0gPT09IHlDb29yZFJhbmRvbSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaGUgQ29tcHV0ZXIgR290IEEgSGl0ISAnLCBbeENvb3JkUmFuZG9tLCB5Q29vcmRSYW5kb21dKTsgLy8gVGVzdGluZyBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBBY3RpdmF0ZUdhbWUuYWN0aXZhdGVDb21wdXRlclR1cm4gPSBmYWxzZTtcbiAgICBBY3RpdmF0ZUdhbWUuYWN0aXZhdGVQbGF5ZXJPbmVUdXJuID0gdHJ1ZTsgXG4gICAgR2FtZUluaXRpYXRlZCgpOyBcblxuICAgIC8vIHdoaWxlKEFjdGl2YXRlR2FtZS5hY3RpdmF0ZUNvbXB1dGVyVHVybilcbiAgICAvLyB7XG4gICAgLy8gICAgIHhDb29yZFJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAvLyAgICAgeUNvb3JkUmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIC8vICAgICBjb25zdCBwbGF5ZXJPbmVDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBsYXllci1vbmUtZ2FtZWJvYXJkID4gZGl2ID4gZGl2W2RhdGEteD1cIiR7eENvb3JkUmFuZG9tfVwiXVtkYXRhLXk9XCIke3lDb29yZFJhbmRvbX1cIl1gKTsgXG5cbiAgICAvLyAgICAgY29uc29sZS5sb2coJ0NvbXB1dGVyIGNob29zZTogJywgcGxheWVyT25lQ2VsbCk7IC8vIFRlc3RpbmdcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ1xcbicpOyAvLyBUZXN0aW5nXG5cbiAgICAvLyAgICAgQWN0aXZhdGVHYW1lLmFjdGl2YXRlQ29tcHV0ZXJUdXJuID0gZmFsc2U7IFxuICAgIC8vICAgICBBY3RpdmF0ZUdhbWUuYWN0aXZhdGVQbGF5ZXJPbmVUdXJuID0gdHJ1ZTsgXG4gICAgLy8gfVxufVxuXG4vLyBDb21wdXRlclBsYWNlU2hpcHMoKTogVGhlIGNvbXB1dGVyIHdpbGwgcGxhY2Ugc2hpcHMgb24gdGhlaXIgZ2FtZWJvYXJkLlxuZnVuY3Rpb24gQ29tcHV0ZXJQbGFjZVNoaXBzKCl7XG4gICAgY29uc3QgY29tcHV0ZXJDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXYgPiBkaXYnKTtcbiAgICBjb25zb2xlLmxvZygnQ29tcHV0ZXIgQ2VsbHM6ICcsIGNvbXB1dGVyQ2VsbHMpOyAvLyBUZXN0aW5nXG5cbiAgICBjb25zdCBjb21wdXRlclJvd3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tcHV0ZXItZ2FtZWJvYXJkID4gZGl2Jyk7IFxuICAgIGNvbnNvbGUubG9nKCdDb21wdXRlciBSb3dzOiAnLCBjb21wdXRlclJvd3MpOyAvLyBUZXN0aW5nXG5cbiAgICBjb25zdCBjb21wdXRlckJvYXJkID0gR2FtZWJvYXJkKCk7XG4gICAgY29uc3QgY29tcHV0ZXJTaGlwcyA9IGNvbXB1dGVyQm9hcmQuU2hpcCgpO1xuXG4gICAgY29tcHV0ZXJTaGlwcy5kZWZhdWx0TGVuZ3Rocy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgIGxldCBjb21wdXRlclNoaXBQbGFjZWQgPSBmYWxzZTtcbiAgICAgICAgbGV0IHhDb29yZFJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChjb21wdXRlclJvd3MubGVuZ3RoKSk7IC8vIFJldHVybnMgYSByYW5kb20gbnVtYmVyIGZyb20gMCB0byA5LlxuICAgICAgICBsZXQgeUNvb3JkUmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApOyBcbiAgICAgICAgbGV0IGF4aXNSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcbiAgICAgICAgbGV0IHhMZW5ndGhPbmUgPSAwLCB4TGVuZ3RoVHdvID0gMCwgeExlbmd0aFRocmVlID0gMDtcbiAgICAgICAgbGV0IHlMZW5ndGhPbmUgPSAwLCB5TGVuZ3RoVHdvID0gMCwgeUxlbmd0aFRocmVlID0gMDsgXG5cbiAgICAgICAgaWYgKGF4aXNSYW5kb20gPT09IDEpIC8vIHgtYXhpc1xuICAgICAgICB7XG4gICAgICAgICAgICB4TGVuZ3RoT25lID0gMDsgXG4gICAgICAgICAgICB5TGVuZ3RoT25lID0gMTsgXG5cbiAgICAgICAgICAgIHhMZW5ndGhUd28gPSAwO1xuICAgICAgICAgICAgeUxlbmd0aFR3byA9IDI7XG5cbiAgICAgICAgICAgIHhMZW5ndGhUaHJlZSA9IDA7XG4gICAgICAgICAgICB5TGVuZ3RoVGhyZWUgPSAzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGF4aXNSYW5kb20gPT09IDApIC8vIHktYXhpc1xuICAgICAgICB7XG4gICAgICAgICAgICB4TGVuZ3RoT25lID0gMTtcbiAgICAgICAgICAgIHlMZW5ndGhPbmUgPSAwO1xuXG4gICAgICAgICAgICB4TGVuZ3RoVHdvID0gMjtcbiAgICAgICAgICAgIHlMZW5ndGhUd28gPSAwO1xuXG4gICAgICAgICAgICB4TGVuZ3RoVGhyZWUgPSAzO1xuICAgICAgICAgICAgeUxlbmd0aFRocmVlID0gMDsgXG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmIChzaGlwID09PSAwKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgfFNoaXAgJHtzaGlwfXxgKTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgd2hpbGUoIWNvbXB1dGVyU2hpcFBsYWNlZClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNvbXB1dGVyLWdhbWVib2FyZCA+IGRpdiA+IGRpdltkYXRhLXg9XCIke3hDb29yZFJhbmRvbX1cIl1bZGF0YS15PVwiJHt5Q29vcmRSYW5kb219XCJdYCkuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb21wdXRlci1zaGlwLXBsYWNlZCcpKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeENvb3JkUmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29tcHV0ZXJSb3dzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIHlDb29yZFJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgaWYgKCh4Q29vcmRSYW5kb20gKyAxKSA+PSAxMCB8fCAoeUNvb3JkUmFuZG9tICsgMSkgPj0gMTApXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ29vcmRpbmF0ZXMgYXJlIG9mZiB0aGUgYm9hcmQnKTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnWDogJywgeENvb3JkUmFuZG9tICsgMSk7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1k6ICcsIHlDb29yZFJhbmRvbSArIDEpOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdcXG4nKTsgLy8gVGVzdGluZyAgXG4gICAgXG4gICAgICAgICAgICAgICAgICAgIHhDb29yZFJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbXB1dGVyUm93cy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICB5Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXB1dGVyU2hpcFBsYWNlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgY29uc3QgY29tcHV0ZXJDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNvbXB1dGVyLWdhbWVib2FyZCA+IGRpdiA+IGRpdltkYXRhLXg9XCIke3hDb29yZFJhbmRvbX1cIl1bZGF0YS15PVwiJHt5Q29vcmRSYW5kb219XCJdYCk7XG4gICAgICAgICAgICBjb21wdXRlckNlbGwuY2xhc3NMaXN0LmFkZCgnY29tcHV0ZXItc2hpcC1wbGFjZWQnKTsgXG4gICAgICAgICAgICBjb21wdXRlckNlbGwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7Jyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc2hpcCA9PT0gMSlcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYHxTaGlwICR7c2hpcH18YCk7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgIHdoaWxlICghY29tcHV0ZXJTaGlwUGxhY2VkKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxldCBjb29yZGluYXRlcyA9IHt9O1xuICAgICAgICAgICAgICAgIGxldCBjb29yZGluYXRlSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgIGNvbXB1dGVyQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbXB1dGVyLXNoaXAtcGxhY2VkJykpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdYIENlbGw6ICcsIGNlbGwuZGF0YXNldC54KTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1kgQ2VsbDogJywgY2VsbC5kYXRhc2V0LnkpOyAvLyBUZXN0aW5nIFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1ggUmFuZG9tOiAnLCB4Q29vcmRSYW5kb20pOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnWSBSYW5kb206ICcsIHlDb29yZFJhbmRvbSk7IC8vIFRlc3RpbmcgXG4gICAgICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlc1tjb29yZGluYXRlSW5kZXgrK10gPSBbcGFyc2VJbnQoY2VsbC5kYXRhc2V0LngpLCBwYXJzZUludChjZWxsLmRhdGFzZXQueSldO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1xcbicpOyAvLyBUZXN0aW5nIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Nvb3JkaW5hdGVzIHdpdGggc2hpcCBwbGFjZW1lbnRzOiAnLCBjb29yZGluYXRlcyk7IC8vIFRlc3RpbmcgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gY29vcmRpbmF0ZXMpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY29vcmRpbmF0ZXNOb3RPdmVybGFwcGluZyA9IGZhbHNlOyBcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29vcmRpbmF0ZXNba2V5XSk7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKCFjb29yZGluYXRlc05vdE92ZXJsYXBwaW5nKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKChjb29yZGluYXRlc1trZXldWzBdID09PSB4Q29vcmRSYW5kb20gJiYgY29vcmRpbmF0ZXNba2V5XVsxXSA9PT0geUNvb3JkUmFuZG9tKSB8fCAoY29vcmRpbmF0ZXNba2V5XVswXSA9PT0gKHhDb29yZFJhbmRvbSArIHhMZW5ndGhPbmUpICYmIGNvb3JkaW5hdGVzW2tleV1bMV0gPT09ICh5Q29vcmRSYW5kb20gKyB5TGVuZ3RoT25lKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCAoKGNvb3JkaW5hdGVzW2tleV1bMF0gPT09IHhDb29yZFJhbmRvbSAmJiBjb29yZGluYXRlc1trZXldWzFdID09PSB5Q29vcmRSYW5kb20pICYmIChjb29yZGluYXRlc1trZXldWzBdID09PSAoeENvb3JkUmFuZG9tICsgeExlbmd0aE9uZSApICYmIGNvb3JkaW5hdGVzW2tleV1bMV0gPT09ICh5Q29vcmRSYW5kb20gKyB5TGVuZ3RoT25lKSkpKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhDb29yZFJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbXB1dGVyUm93cy5sZW5ndGgpOyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmb3VuZCcpOyAvLyBUZXN0aW5nIFxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IE5lZWQgdG8gdGVzdCBvbmUgbW9yZSB0aW1lIHRvIGZpbmQgb3V0IGlmIGl0IHN0aWxsIG92ZXJsYXBzIHdpdGggYW55IG9mIHRoZSBjZWxscy4gXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXNOb3RPdmVybGFwcGluZyA9IHRydWU7IFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoeENvb3JkUmFuZG9tICsgMSkgPj0gMTAgfHwgKHlDb29yZFJhbmRvbSArIDEpID49IDEwKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhDb29yZFJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbXB1dGVyUm93cy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlDb29yZFJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTsgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjb21wdXRlckNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY29tcHV0ZXItZ2FtZWJvYXJkID4gZGl2ID4gZGl2W2RhdGEteD1cIiR7eENvb3JkUmFuZG9tfVwiXVtkYXRhLXk9XCIke3lDb29yZFJhbmRvbX1cIl1gKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wdXRlckNlbGxPbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY29tcHV0ZXItZ2FtZWJvYXJkID4gZGl2ID4gZGl2W2RhdGEteD1cIiR7eENvb3JkUmFuZG9tICsgeExlbmd0aE9uZX1cIl1bZGF0YS15PVwiJHt5Q29vcmRSYW5kb20gKyB5TGVuZ3RoT25lfVwiXWApO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbXB1dGVyQ2VsbCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29tcHV0ZXJDZWxsT25lKTsgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKCh4Q29vcmRSYW5kb20gKyAxKSA+PSAxMCB8fCAoeUNvb3JkUmFuZG9tICsgMSkgPj0gMTApXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ29vcmRpbmF0ZXMgYXJlIG9mZiB0aGUgYm9hcmQuJyk7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1g6ICcsIHhDb29yZFJhbmRvbSArIDEpOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdZOiAnLCB5Q29vcmRSYW5kb20gKyAxKTsgLy8gVGVzdGluZyBcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1xcbicpOyAvLyBUZXN0aW5nIFxuXG4gICAgICAgICAgICAgICAgICAgIHhDb29yZFJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbXB1dGVyUm93cy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICB5Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjb21wdXRlckNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb21wdXRlci1zaGlwLXBsYWNlZCcpIHx8IGNvbXB1dGVyQ2VsbE9uZS5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbXB1dGVyLXNoaXAtcGxhY2VkJykpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGhlcmUgaXMgYW4gb3ZlcmxhcCcpOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICAgICAgICAgIHhDb29yZFJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbXB1dGVyUm93cy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICB5Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0xlYXZlIExvb3AuLi4nKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1xcbicpOyAvLyBUZXN0aW5nICBcbiAgICAgICAgICAgICAgICAgICAgY29tcHV0ZXJTaGlwUGxhY2VkID0gdHJ1ZTsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVyQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXYgPiBkaXZbZGF0YS14PVwiJHt4Q29vcmRSYW5kb219XCJdW2RhdGEteT1cIiR7eUNvb3JkUmFuZG9tfVwiXWApO1xuICAgICAgICAgICAgY29tcHV0ZXJDZWxsLmNsYXNzTGlzdC5hZGQoJ2NvbXB1dGVyLXNoaXAtcGxhY2VkJyk7XG4gICAgICAgICAgICBjb21wdXRlckNlbGwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7Jyk7IC8vIFRlc3RpbmdcblxuICAgICAgICAgICAgY29uc3QgY29tcHV0ZXJDZWxsT25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNvbXB1dGVyLWdhbWVib2FyZCA+IGRpdiA+IGRpdltkYXRhLXg9XCIke3hDb29yZFJhbmRvbSArIHhMZW5ndGhPbmV9XCJdW2RhdGEteT1cIiR7eUNvb3JkUmFuZG9tICsgeUxlbmd0aE9uZX1cIl1gKTtcbiAgICAgICAgICAgIGNvbXB1dGVyQ2VsbE9uZS5jbGFzc0xpc3QuYWRkKCdjb21wdXRlci1zaGlwLXBsYWNlZCcpOyBcbiAgICAgICAgICAgIGNvbXB1dGVyQ2VsbE9uZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQtY29sb3I6IHJlZDsnKTsgLy8gVGVzdGluZyBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzaGlwID09PSAyKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgfFNoaXAgJHtzaGlwfXxgKTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgd2hpbGUgKCFjb21wdXRlclNoaXBQbGFjZWQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0ge307XG4gICAgICAgICAgICAgICAgbGV0IGNvb3JkaW5hdGVJbmRleCA9IDA7IFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIEZpbmQgd2hpY2ggY29vcmRpbmF0ZXMgYWxyZWFkeSBoYXZlIHNoaXAgcGxhY2VtZW50cyAoRmluZCAnY29tcHV0ZXItc2hpcC1wbGFjZWQnKTogXG4gICAgICAgICAgICAgICAgY29tcHV0ZXJDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjZWxsLmNsYXNzTGlzdC5jb250YWlucygnY29tcHV0ZXItc2hpcC1wbGFjZWQnKSlcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1ggQ2VsbDogJywgY2VsbC5kYXRhc2V0LngpOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnWSBDZWxsOiAnLCBjZWxsLmRhdGFzZXQueSk7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdYIFJhbmRvbTogJywgeENvb3JkUmFuZG9tKTsgLy8gVGVzdGluZyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdZIFJhbmRvbTogJywgeUNvb3JkUmFuZG9tKTsgLy8gVGVzdGluZyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzW2Nvb3JkaW5hdGVJbmRleCsrXSA9IFtwYXJzZUludChjZWxsLmRhdGFzZXQueCksIHBhcnNlSW50KGNlbGwuZGF0YXNldC55KV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnXFxuJyk7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb29yZGluYXRlcyB3aXRoIHNoaXAgcGxhY2VtZW50czogJywgY29vcmRpbmF0ZXMpOyAvLyBUZXN0aW5nXG5cbiAgICAgICAgICAgICAgICAvLyBUZXN0aW5nIGZvciBvdmVybGFwcGluZyBzaGlwIHBsYWNlbWVudHMgYW5kIHNlYXJjaGluZyBmb3Igb3BlbiBjZWxscy4gXG4gICAgICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIGNvb3JkaW5hdGVzKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGVzdCBpZiBzaGlwIGxlbmd0aCAyIGlzIG92ZXJsYXBwaW5nIHRoZSBvdGhlciBzaGlwcyBvbiB0aGUgYm9hcmQuIFxuICAgICAgICAgICAgICAgICAgICBsZXQgY29vcmRpbmF0ZXNOb3RPdmVybGFwcGluZyA9IGZhbHNlOyBcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29vcmRpbmF0ZXNba2V5XSk7IC8vIFRlc3RpbmcgXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlKCFjb29yZGluYXRlc05vdE92ZXJsYXBwaW5nKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKChjb29yZGluYXRlc1trZXldWzBdID09PSB4Q29vcmRSYW5kb20gJiYgY29vcmRpbmF0ZXNba2V5XVsxXSA9PT0geUNvb3JkUmFuZG9tKSB8fCBcbiAgICAgICAgICAgICAgICAgICAgICAgIChjb29yZGluYXRlc1trZXldWzBdID09PSAoeENvb3JkUmFuZG9tICsgeExlbmd0aE9uZSkgJiYgY29vcmRpbmF0ZXNba2V5XVsxXSA9PT0gKHlDb29yZFJhbmRvbSArIHlMZW5ndGhPbmUpKSB8fCBcbiAgICAgICAgICAgICAgICAgICAgICAgIChjb29yZGluYXRlc1trZXldWzBdID09PSAoeENvb3JkUmFuZG9tICsgeExlbmd0aFR3bykpICYmIChjb29yZGluYXRlc1trZXldWzFdID09PSAoeUNvb3JkUmFuZG9tICsgeUxlbmd0aFR3bykpKVxuICAgICAgICAgICAgICAgICAgICAgICAgfHwgKChjb29yZGluYXRlc1trZXldWzBdID09PSB4Q29vcmRSYW5kb20gJiYgY29vcmRpbmF0ZXNba2V5XVsxXSA9PT0geUNvb3JkUmFuZG9tKSAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgIChjb29yZGluYXRlc1trZXldWzBdID09PSAoeENvb3JkUmFuZG9tICsgeExlbmd0aE9uZSkgJiYgY29vcmRpbmF0ZXNba2V5XVsxXSA9PT0gKHlDb29yZFJhbmRvbSArIHlMZW5ndGhPbmUpKSAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgIChjb29yZGluYXRlc1trZXldWzBdID09PSAoeENvb3JkUmFuZG9tICsgeExlbmd0aFR3bykgJiYgY29vcmRpbmF0ZXNba2V5XVsxXSA9PT0gKHlDb29yZFJhbmRvbSArIHlMZW5ndGhUd28pKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeENvb3JkUmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29tcHV0ZXJSb3dzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeUNvb3JkUmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApOyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImZvdW5kXCIpOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXNOb3RPdmVybGFwcGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0b3AgdGhlIGNvb3JkaW5hdGVzIGZyb20gbGVhdmluZyB0aGUgYm9hcmQgaWYgdGhleSBhcmUgY2hhbmdlZC4gXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHhDb29yZFJhbmRvbSArIDIpID49IDEwIHx8ICh5Q29vcmRSYW5kb20gKyAyKSA+PSAxMClcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb21wdXRlclJvd3MubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgY29tcHV0ZXJDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNvbXB1dGVyLWdhbWVib2FyZCA+IGRpdiA+IGRpdltkYXRhLXg9XCIke3hDb29yZFJhbmRvbX1cIl1bZGF0YS15PVwiJHt5Q29vcmRSYW5kb219XCJdYCk7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wdXRlckNlbGxPbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY29tcHV0ZXItZ2FtZWJvYXJkID4gZGl2ID4gZGl2W2RhdGEteD1cIiR7eENvb3JkUmFuZG9tICsgeExlbmd0aE9uZX1cIl1bZGF0YS15PVwiJHt5Q29vcmRSYW5kb20gKyB5TGVuZ3RoT25lfVwiXWApOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICAgICAgY29uc3QgY29tcHV0ZXJDZWxsVHdvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNvbXB1dGVyLWdhbWVib2FyZCA+IGRpdiA+IGRpdltkYXRhLXg9XCIke3hDb29yZFJhbmRvbSArIHhMZW5ndGhUd299XCJdW2RhdGEteT1cIiR7eUNvb3JkUmFuZG9tICsgeUxlbmd0aFR3b31cIl1gKTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbXB1dGVyQ2VsbCk7IC8vIFRlc3RpbmcgXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29tcHV0ZXJDZWxsT25lKTsgLy8gVGVzdGluZyBcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb21wdXRlckNlbGxUd28pOyAvLyBUZXN0aW5nIFxuXG4gICAgICAgICAgICAgICAgaWYgKCh4Q29vcmRSYW5kb20gKyAyKSA+PSAxMCB8fCAoeUNvb3JkUmFuZG9tICsgMikgPj0gMTApXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvb3JkaW5hdGVzIGFyZSBvZmYgdGhlIGJvYXJkLlwiKTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlg6IFwiLCB4Q29vcmRSYW5kb20gKyAyKTsgLy8gVGVzdGluZyBcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJZOiBcIiwgeUNvb3JkUmFuZG9tICsgMik7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1xcbicpOyAvLyBUZXN0aW5nIFxuXG4gICAgICAgICAgICAgICAgICAgIHhDb29yZFJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbXB1dGVyUm93cy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICB5Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjb21wdXRlckNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb21wdXRlci1zaGlwLXBsYWNlZCcpIHx8IGNvbXB1dGVyQ2VsbE9uZS5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbXB1dGVyLXNoaXAtcGxhY2VkJykgfHwgY29tcHV0ZXJDZWxsVHdvLmNsYXNzTGlzdC5jb250YWlucygnY29tcHV0ZXItc2hpcC1wbGFjZWQnKSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaGVyZSBpcyBhbiBvdmVybGFwLicpOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICAgICAgICAgIHhDb29yZFJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbXB1dGVyUm93cy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICB5Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTGVhdmluZy4uLlwiKTsgLy8gVGVzdGluZyBcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1xcbicpOyAvLyBUZXN0aW5nIFxuICAgICAgICAgICAgICAgICAgICBjb21wdXRlclNoaXBQbGFjZWQgPSB0cnVlOyAvLyBUZXN0aW5nIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpOyAvLyBUZXN0aW5nIFxuICAgICAgICAgICAgfSBcblxuICAgICAgICAgICAgY29uc3QgY29tcHV0ZXJDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNvbXB1dGVyLWdhbWVib2FyZCA+IGRpdiA+IGRpdltkYXRhLXg9XCIke3hDb29yZFJhbmRvbX1cIl1bZGF0YS15PVwiJHt5Q29vcmRSYW5kb219XCJdYCk7XG4gICAgICAgICAgICBjb21wdXRlckNlbGwuY2xhc3NMaXN0LmFkZCgnY29tcHV0ZXItc2hpcC1wbGFjZWQnKTtcbiAgICAgICAgICAgIGNvbXB1dGVyQ2VsbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQtY29sb3I6IGdyZWVuOycpOyBcblxuICAgICAgICAgICAgY29uc3QgY29tcHV0ZXJDZWxsT25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNvbXB1dGVyLWdhbWVib2FyZCA+IGRpdiA+IGRpdltkYXRhLXg9XCIke3hDb29yZFJhbmRvbSArIHhMZW5ndGhPbmV9XCJdW2RhdGEteT1cIiR7eUNvb3JkUmFuZG9tICsgeUxlbmd0aE9uZX1cIl1gKTtcbiAgICAgICAgICAgIGNvbXB1dGVyQ2VsbE9uZS5jbGFzc0xpc3QuYWRkKCdjb21wdXRlci1zaGlwLXBsYWNlZCcpO1xuICAgICAgICAgICAgY29tcHV0ZXJDZWxsT25lLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47Jyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVyQ2VsbFR3byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXYgPiBkaXZbZGF0YS14PVwiJHt4Q29vcmRSYW5kb20gKyB4TGVuZ3RoVHdvfVwiXVtkYXRhLXk9XCIke3lDb29yZFJhbmRvbSArIHlMZW5ndGhUd299XCJdYCk7XG4gICAgICAgICAgICBjb21wdXRlckNlbGxUd28uY2xhc3NMaXN0LmFkZCgnY29tcHV0ZXItc2hpcC1wbGFjZWQnKTsgXG4gICAgICAgICAgICBjb21wdXRlckNlbGxUd28uc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjsnKTsgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc2hpcCA9PT0gMylcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYHxTaGlwICR7c2hpcH18YCk7ICAgXG4gICAgICAgICAgICB3aGlsZSghY29tcHV0ZXJTaGlwUGxhY2VkKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxldCBjb29yZGluYXRlcyA9IHt9O1xuICAgICAgICAgICAgICAgIGxldCBjb29yZGluYXRlSW5kZXggPSAwOyBcblxuICAgICAgICAgICAgICAgIC8vIEZpbmQgd2hpY2ggY29vcmRpbmF0ZXMgYWxyZWFkeSBoYXZlIHNoaXAgcGxhY2VtZW50cyAoRmluZCAnY29tcHV0ZXItc2hpcC1wbGFjZWQnKTogXG4gICAgICAgICAgICAgICAgY29tcHV0ZXJDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjZWxsLmNsYXNzTGlzdC5jb250YWlucygnY29tcHV0ZXItc2hpcC1wbGFjZWQnKSlcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJYIENlbGw6IFwiLCBjZWxsLmRhdGFzZXQueCk7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiWSBDZWxsOiBcIiwgY2VsbC5kYXRhc2V0LnkpOyAvLyBUZXN0aW5nIFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJYIFJhbmRvbTogXCIsIHhDb29yZFJhbmRvbSk7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiWSBSYW5kb206IFwiLCB5Q29vcmRSYW5kb20pOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlc1tjb29yZGluYXRlSW5kZXgrK10gPSBbcGFyc2VJbnQoY2VsbC5kYXRhc2V0LngpLCBwYXJzZUludChjZWxsLmRhdGFzZXQueSldO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1xcbicpOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvb3JkaW5hdGVzIHdpdGggc2hpcCBwbGFjZW1lbnRzOiBcIiwgY29vcmRpbmF0ZXMpOyAvLyBUZXN0aW5nIFxuXG4gICAgICAgICAgICAgICAgLy8gVGVzdGluZyBmb3Igb3ZlcmxhcHBpbmcgc2hpcCBwbGFjZW1lbnRzIGFuZCBzZWFyY2hpbmcgZm9yIG9wZW4gY2VsbHMuIFxuICAgICAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBjb29yZGluYXRlcylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRlc3QgaWYgc2hpcCBsZW5ndGggMiBpcyBvdmVybGFwcGluZyB0aGUgb3RoZXIgc2hpcHMgb24gdGhlIGJvYXJkLiBcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvb3JkaW5hdGVzTm90T3ZlcmxhcHBpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29vcmRpbmF0ZXNba2V5XSk7IC8vIFRlc3RpbmcgXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlKCFjb29yZGluYXRlc05vdE92ZXJsYXBwaW5nKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKChjb29yZGluYXRlc1trZXldWzBdID09PSB4Q29vcmRSYW5kb20gJiYgY29vcmRpbmF0ZXNba2V5XVsxXSA9PT0geUNvb3JkUmFuZG9tKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgIChjb29yZGluYXRlc1trZXldWzBdID09PSAoeENvb3JkUmFuZG9tICsgeExlbmd0aE9uZSkgJiYgY29vcmRpbmF0ZXNba2V5XVsxXSA9PT0gKHlDb29yZFJhbmRvbSArIHlMZW5ndGhPbmUpKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgIChjb29yZGluYXRlc1trZXldWzBdID09PSAoeENvb3JkUmFuZG9tICsgeExlbmd0aFR3bykgJiYgY29vcmRpbmF0ZXNba2V5XVsxXSA9PT0gKHlDb29yZFJhbmRvbSArIHlMZW5ndGhUd28pKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgIChjb29yZGluYXRlc1trZXldWzBdID09PSAoeENvb3JkUmFuZG9tICsgeExlbmd0aFRocmVlKSAmJiBjb29yZGluYXRlc1trZXldWzFdID09PSAoeUNvb3JkUmFuZG9tICsgeUxlbmd0aFRocmVlKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgfHwgKChjb29yZGluYXRlc1trZXldWzBdID09PSB4Q29vcmRSYW5kb20gJiYgY29vcmRpbmF0ZXNba2V5XVsxXSA9PT0geUNvb3JkUmFuZG9tKSAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAoY29vcmRpbmF0ZXNba2V5XVswXSA9PT0gKHhDb29yZFJhbmRvbSArIHhMZW5ndGhPbmUpICYmIGNvb3JkaW5hdGVzW2tleV1bMV0gPT09ICh5Q29vcmRSYW5kb20gKyB5TGVuZ3RoT25lKSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAoY29vcmRpbmF0ZXNba2V5XVswXSA9PT0gKHhDb29yZFJhbmRvbSArIHhMZW5ndGhUd28pICYmIGNvb3JkaW5hdGVzW2tleV1bMV0gPT09ICh5Q29vcmRSYW5kb20gKyB5TGVuZ3RoVHdvKSkgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICAgKGNvb3JkaW5hdGVzW2tleV1bMF0gPT09ICh4Q29vcmRSYW5kb20gKyB4TGVuZ3RoVGhyZWUpICYmIGNvb3JkaW5hdGVzW2tleV1bMV0gPT09ICh5Q29vcmRSYW5kb20gKyB5TGVuZ3RoVGhyZWUpKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeENvb3JkUmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29tcHV0ZXJSb3dzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeUNvb3JkUmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApOyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImZvdW5kXCIpOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzTm90T3ZlcmxhcHBpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTdG9wIHRoZSBjb29yZGluYXRlcyBmcm9tIGxlYXZpbmcgdGhlIGJvYXJkIGlmIHRoZXkgYXJlIGNoYW5nZWQuIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCh4Q29vcmRSYW5kb20gKyAzKSA+PSAxMCB8fCAoeUNvb3JkUmFuZG9tICsgMykgPj0gMTApXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeENvb3JkUmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29tcHV0ZXJSb3dzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeUNvb3JkUmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVyQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXYgPiBkaXZbZGF0YS14PVwiJHt4Q29vcmRSYW5kb219XCJdW2RhdGEteT1cIiR7eUNvb3JkUmFuZG9tfVwiXWApOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICAgICAgY29uc3QgY29tcHV0ZXJDZWxsT25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNvbXB1dGVyLWdhbWVib2FyZCA+IGRpdiA+IGRpdltkYXRhLXg9XCIke3hDb29yZFJhbmRvbSArIHhMZW5ndGhPbmV9XCJdW2RhdGEteT1cIiR7eUNvb3JkUmFuZG9tICsgeUxlbmd0aE9uZX1cIl1gKTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVyQ2VsbFR3byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXYgPiBkaXZbZGF0YS14PVwiJHt4Q29vcmRSYW5kb20gKyB4TGVuZ3RoVHdvfVwiXVtkYXRhLXk9XCIke3lDb29yZFJhbmRvbSArIHlMZW5ndGhUd299XCJdYCk7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wdXRlckNlbGxUaHJlZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXYgPiBkaXZbZGF0YS14PVwiJHt4Q29vcmRSYW5kb20gKyB4TGVuZ3RoVGhyZWV9XCJdW2RhdGEteT1cIiR7eUNvb3JkUmFuZG9tICsgeUxlbmd0aFRocmVlfVwiXWApOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29tcHV0ZXJDZWxsKTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbXB1dGVyQ2VsbE9uZSk7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb21wdXRlckNlbGxUd28pOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29tcHV0ZXJDZWxsVGhyZWUpOyAvLyBUZXN0aW5nXG5cbiAgICAgICAgICAgICAgICBpZiAoKHhDb29yZFJhbmRvbSArIDMpID49IDEwIHx8ICh5Q29vcmRSYW5kb20gKyAzKSA+PSAxMClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29vcmRpbmF0ZXMgYXJlIG9mZiB0aGUgYm9hcmQuXCIpOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiWDogXCIsIHhDb29yZFJhbmRvbSArIDMpOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiWTogXCIsIHlDb29yZFJhbmRvbSArIDMpOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdcXG4nKTsgLy8gVGVzdGluZyAgXG5cbiAgICAgICAgICAgICAgICAgICAgeENvb3JkUmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29tcHV0ZXJSb3dzLmxlbmd0aCk7IFxuICAgICAgICAgICAgICAgICAgICB5Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjb21wdXRlckNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb21wdXRlci1zaGlwLXBsYWNlZCcpIHx8IGNvbXB1dGVyQ2VsbE9uZS5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbXB1dGVyLXNoaXAtcGxhY2VkJykgfHwgXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wdXRlckNlbGxUd28uY2xhc3NMaXN0LmNvbnRhaW5zKCdjb21wdXRlci1zaGlwLXBsYWNlZCcpIHx8IGNvbXB1dGVyQ2VsbFRocmVlLmNsYXNzTGlzdC5jb250YWlucygnY29tcHV0ZXItc2hpcC1wbGFjZWQnKSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhlcmUgaXMgYW4gb3ZlcmxhcC5cIik7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgeENvb3JkUmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29tcHV0ZXJSb3dzLmxlbmd0aCk7IFxuICAgICAgICAgICAgICAgICAgICB5Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxlYXZpbmcuLi5cIik7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJcXG5cIik7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgY29tcHV0ZXJTaGlwUGxhY2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKTsgLy8gVGVzdGluZyBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgY29tcHV0ZXJDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNvbXB1dGVyLWdhbWVib2FyZCA+IGRpdiA+IGRpdltkYXRhLXg9XCIke3hDb29yZFJhbmRvbX1cIl1bZGF0YS15PVwiJHt5Q29vcmRSYW5kb219XCJdYCk7IFxuICAgICAgICAgICAgY29tcHV0ZXJDZWxsLmNsYXNzTGlzdC5hZGQoJ2NvbXB1dGVyLXNoaXAtcGxhY2VkJyk7XG4gICAgICAgICAgICBjb21wdXRlckNlbGwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7Jyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVyQ2VsbE9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXYgPiBkaXZbZGF0YS14PVwiJHt4Q29vcmRSYW5kb20gKyB4TGVuZ3RoT25lfVwiXVtkYXRhLXk9XCIke3lDb29yZFJhbmRvbSArIHlMZW5ndGhPbmV9XCJdYCk7XG4gICAgICAgICAgICBjb21wdXRlckNlbGxPbmUuY2xhc3NMaXN0LmFkZCgnY29tcHV0ZXItc2hpcC1wbGFjZWQnKTtcbiAgICAgICAgICAgIGNvbXB1dGVyQ2VsbE9uZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQtY29sb3I6IG9yYW5nZTsnKTtcblxuICAgICAgICAgICAgY29uc3QgY29tcHV0ZXJDZWxsVHdvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNvbXB1dGVyLWdhbWVib2FyZCA+IGRpdiA+IGRpdltkYXRhLXg9XCIke3hDb29yZFJhbmRvbSArIHhMZW5ndGhUd299XCJdW2RhdGEteT1cIiR7eUNvb3JkUmFuZG9tICsgeUxlbmd0aFR3b31cIl1gKTtcbiAgICAgICAgICAgIGNvbXB1dGVyQ2VsbFR3by5jbGFzc0xpc3QuYWRkKCdjb21wdXRlci1zaGlwLXBsYWNlZCcpOyBcbiAgICAgICAgICAgIGNvbXB1dGVyQ2VsbFR3by5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQtY29sb3I6IG9yYW5nZTsnKTtcblxuICAgICAgICAgICAgY29uc3QgY29tcHV0ZXJDZWxsVGhyZWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY29tcHV0ZXItZ2FtZWJvYXJkID4gZGl2ID4gZGl2W2RhdGEteD1cIiR7eENvb3JkUmFuZG9tICsgeExlbmd0aFRocmVlfVwiXVtkYXRhLXk9XCIke3lDb29yZFJhbmRvbSArIHlMZW5ndGhUaHJlZX1cIl1gKTtcbiAgICAgICAgICAgIGNvbXB1dGVyQ2VsbFRocmVlLmNsYXNzTGlzdC5hZGQoJ2NvbXB1dGVyLXNoaXAtcGxhY2VkJyk7XG4gICAgICAgICAgICBjb21wdXRlckNlbGxUaHJlZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQtY29sb3I6IG9yYW5nZTsnKTsgXG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuLy8gSW50ZWZhY2VET00oKTogSW50ZXJmYWNlIHNlY3Rpb24gZm9yIHRoZSB1c2VyLiBcbmZ1bmN0aW9uIEludGVyZmFjZURPTSgpe1xuICAgIGNvbnN0IGdhbWVib2FyZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lYm9hcmQtY29udGFpbmVyJyk7XG4gICAgY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheWVyLW9uZS1ib2FyZCA+IGRpdiA+IGRpdicpO1xuXG4gICAgY29uc3QgcGxheWVySW50ZXJmYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGxheWVySW50ZXJmYWNlLmNsYXNzTGlzdC5hZGQoJ2ludGVyZmFjZScpO1xuXG4gICAgY29uc3QgbmV3R2FtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG5ld0dhbWUudGV4dENvbnRlbnQgPSAnTmV3IEdhbWUnO1xuXG4gICAgY29uc3QgcGxhY2VTaGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7IFxuICAgIHBsYWNlU2hpcC50ZXh0Q29udGVudCA9IGBQbGFjZSBTaGlwYDtcblxuICAgIGNvbnN0IGNvb3JkaW5hdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB4Q29vcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB4Q29vcmQudGV4dENvbnRlbnQgPSAneCc7XG4gICAgY29uc3QgeUNvb3JkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgeUNvb3JkLnRleHRDb250ZW50ID0gJ3knOyBcbiAgICBjb29yZGluYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKHhDb29yZCk7XG4gICAgY29vcmRpbmF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh5Q29vcmQpOyBcblxuICAgIGNvbnN0IG51bWJlck9mU2hpcHNQbGFjZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBudW1iZXJPZlNoaXBzUGxhY2VkLmNsYXNzTGlzdC5hZGQoJ251bWJlci1vZi1zaGlwcycpOyBcblxuICAgIHBsYXllckludGVyZmFjZS5hcHBlbmRDaGlsZChuZXdHYW1lKTtcbiAgICBwbGF5ZXJJbnRlcmZhY2UuYXBwZW5kQ2hpbGQocGxhY2VTaGlwKTtcbiAgICBwbGF5ZXJJbnRlcmZhY2UuYXBwZW5kQ2hpbGQoY29vcmRpbmF0ZUNvbnRhaW5lcik7IFxuICAgIHBsYXllckludGVyZmFjZS5hcHBlbmRDaGlsZChudW1iZXJPZlNoaXBzUGxhY2VkKTsgXG4gICAgZ2FtZWJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllckludGVyZmFjZSk7XG5cbiAgICBuZXdHYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgTmV3R2FtZSk7XG5cbiAgICAvLyBwbGFjZVNoaXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAvLyAgICAgU2hpcERhdGEucGxhY2VtZW50Q29tbWVuY2VkID0gdHJ1ZTsgIFxuICAgIC8vICAgICBOdW1iZXJPZlNoaXBzUGxhY2VkKCk7IFxuICAgIC8vICAgICBQbGFjZVNoaXBzKGUpO1xuICAgIC8vIH0pO1xuXG4gICAgeENvb3JkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKE5ld0dhbWVTZWxlY3RlZC5uZXdHYW1lU2VsZWN0ZWQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIEF4aXNDaGFuZ2UuYXhpc1dhc0NoYW5nZWQgPSB0cnVlOyBcbiAgICAgICAgICAgIEF4aXNDaGFuZ2UuYXhpc0NoYW5nZSA9IDE7IFxuICAgICAgICAgICAgeUNvb3JkLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQtY29vcmRpbmF0ZScpOyBcbiAgICAgICAgICAgIHhDb29yZC5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LWNvb3JkaW5hdGUnKTsgXG4gICAgICAgICAgICBQbGFjZVNoaXBzKGUpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB5Q29vcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAoTmV3R2FtZVNlbGVjdGVkLm5ld0dhbWVTZWxlY3RlZClcbiAgICAgICAge1xuICAgICAgICAgICAgQXhpc0NoYW5nZS5heGlzV2FzQ2hhbmdlZCA9IHRydWU7IFxuICAgICAgICAgICAgQXhpc0NoYW5nZS5heGlzQ2hhbmdlID0gMjsgXG4gICAgICAgICAgICB4Q29vcmQuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudC1jb29yZGluYXRlJyk7XG4gICAgICAgICAgICB5Q29vcmQuY2xhc3NMaXN0LmFkZCgnY3VycmVudC1jb29yZGluYXRlJyk7XG4gICAgICAgICAgICBQbGFjZVNoaXBzKGUpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyB4Q29vcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBDaGFuZ2VUb1hBeGlzKTtcblxuICAgIC8vIHlDb29yZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIENoYW5nZVRvWUF4aXMpO1xufVxuXG4vLyBOZXdHYW1lKCk6IFdpbGwgYmVnaW4gYSBuZXcgZ2FtZSBmb3IgdGhlIHBsYXllci4gXG5mdW5jdGlvbiBOZXdHYW1lKCl7XG4gICAgY29uc29sZS5sb2coJ1BsYXllciBiZWdpbnMgYSBuZXcgZ2FtZS4nKTsgLy8gVGVzdGluZyBcbiAgICBjb25zb2xlLmxvZygnXFxuJyk7IC8vIFRlc3RpbmcgXG5cbiAgICAvLyBUT0RPOiBSZXNldCBhbGwgdGhlIGdhbWUgYXR0cmlidXRlcyBpbiB0aGlzIGZ1bmN0aW9uIHdoZW4gdGhlXG4gICAgLy8gdXNlciB3YW50cyB0byBzdGFydCBhIG5ldyBnYW1lLiBcblxuICAgIE5ld0dhbWVTZWxlY3RlZC5uZXdHYW1lU2VsZWN0ZWQgPSB0cnVlOyBcbiAgICBQbGFjZVNoaXBzKCk7IFxufVxuXG4vLyBIb3ZlclRlc3RET00oKTogVGhlIGhvdmVyIHRlc3Qgb24gdGhlIGJvYXJkLlxuZnVuY3Rpb24gQXhpc0RPTShlKXtcbiAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllci1vbmUtYm9hcmQgPiBkaXYgPiBkaXYnKTtcbiAgICBjb25zb2xlLmxvZygnQ2VsbHM6ICcsIGNlbGwpOyAvLyBUZXN0aW5nXG5cbiAgICAvLyBjb25zdCB4Q29vcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZWJvYXJkLWNvbnRhaW5lciA+IGRpdjpudGgtY2hpbGQoMSkgPiBkaXYgPiBidXR0b246bnRoLWNoaWxkKDEpJyk7XG4gICAgLy8gY29uc29sZS5sb2coeENvb3JkKTsgLy8gVGVzdGluZyBcbiAgICAvLyBjb25zdCB5Q29vcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZWJvYXJkLWNvbnRhaW5lciA+IGRpdjpudGgtY2hpbGQoMSkgPiBkaXYgPiBidXR0b246bnRoLWNoaWxkKDIpJyk7IFxuICAgIC8vIGNvbnNvbGUubG9nKHlDb29yZCk7IC8vIFRlc3RpbmdcblxuICAgIC8vIFRlc3RpbmcgZm9yIHlDb29yZDpcbiAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IGNlbGwubGVuZ3RoOyBpKyspXG4gICAgLy8ge1xuICAgIC8vICAgICBjZWxsW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XG4gICAgLy8gICAgICAgICBpZiAoIShwYXJzZUludChjZWxsW2ldLmRhdGFzZXQueCkgPT09IDkpKVxuICAgIC8vICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgIGNlbGxbaV0uY2xhc3NMaXN0LmFkZCgnaG92ZXItdGVzdCcpO1xuICAgIC8vICAgICAgICAgICAgIGNlbGxbaSArIDEwXS5jbGFzc0xpc3QuYWRkKCdob3Zlci10ZXN0Jyk7IFxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9KTtcbiAgICAvLyB9XG5cbiAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IGNlbGwubGVuZ3RoOyBpKyspXG4gICAgLy8ge1xuICAgIC8vICAgICBjZWxsW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgLy8gICAgICAgICBpZiAoY2VsbFtpXS5jbGFzc0xpc3QuY29udGFpbnMoJ2hvdmVyLXRlc3QnKSlcbiAgICAvLyAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICBjZWxsW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTtcbiAgICAvLyAgICAgICAgICAgICBjZWxsW2kgKyAxMF0uY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItdGVzdCcpO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9KTtcbiAgICAvLyB9XG5cbiAgICAvLyBUZXN0aW5nIGZvciB4Q29vcmQ6XG4gICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBjZWxsLmxlbmd0aDsgaSsrKVxuICAgIC8vIHtcbiAgICAvLyAgICAgaWYgKCFBeGlzQ2hhbmdlLnlBeGlzQ2hhbmdlKVxuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgICBjZWxsW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgaWYgKCEocGFyc2VJbnQoY2VsbFtpXS5kYXRhc2V0LnggPT09IDkpKSAmJiAhKHBhcnNlSW50KGNlbGxbaV0uZGF0YXNldC55KSA9PT0gOSkpXG4gICAgLy8gICAgICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgICAgICBjZWxsW2ldLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXRlc3QnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgY2VsbFtpICsgMV0uY2xhc3NMaXN0LmFkZCgnaG92ZXItdGVzdCcpO1xuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH0pO1xuICAgIFxuICAgIC8vICAgICAgICAgY2VsbFtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZygnWDogJywgY2VsbFtpXS5kYXRhc2V0LngpOyAvLyBUZXN0aW5nXG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coJ1k6ICcsIGNlbGxbaV0uZGF0YXNldC55KTsgLy8gVGVzdGluZ1xuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdYMjogJywgY2VsbFtpICsgMV0uZGF0YXNldC54KTsgLy8gVGVzdGluZ1xuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdYMzogJywgY2VsbFtpICsgMV0uZGF0YXNldC55KTsgLy8gVGVzdGluZyBcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZygnXFxuJyk7IC8vIFRlc3RpbmdcbiAgICAvLyAgICAgICAgIH0pO1xuXG4gICAgLy8gICAgICAgICBjZWxsW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgaWYgKGNlbGxbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdob3Zlci10ZXN0JykpXG4gICAgLy8gICAgICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgICAgICBjZWxsW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgY2VsbFtpICsgMV0uY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItdGVzdCcpOyAgICBcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICB9KTtcbiAgICAvLyAgICAgfVxuXG4gICAgLy8gfVxuXG4gICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBjZWxsLmxlbmd0aDsgaSsrKVxuICAgIC8vIHtcbiAgICAvLyAgICAgY2VsbFtpXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgIC8vICAgICAgICAgaWYgKGNlbGxbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdob3Zlci10ZXN0JykpXG4gICAgLy8gICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgY2VsbFtpXS5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci10ZXN0Jyk7XG4gICAgLy8gICAgICAgICAgICAgY2VsbFtpICsgMV0uY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItdGVzdCcpOyAgICBcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfVxufVxuXG4vLyBDaGFuZ2VUb1hBeGlzKCk6IFdpbGwgY2hhbmdlIHRoZSBheGlzIHNlbGVjdGlvbiBvZiB0aGUgZ2FtZWJvYXJkIHRvIHRoZSB4LWF4aXMuXG5mdW5jdGlvbiBDaGFuZ2VUb1hBeGlzKCl7XG4gICAgY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheWVyLW9uZS1ib2FyZCA+IGRpdiA+IGRpdicpO1xuICAgIGNvbnN0IHlDb29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lYm9hcmQtY29udGFpbmVyID4gZGl2Om50aC1jaGlsZCgxKSA+IGRpdiA+IGJ1dHRvbjpudGgtY2hpbGQoMiknKTtcblxuICAgIEF4aXNTZWxlY3RlZC5heGlzU2VsZWN0ZWQgPSB0cnVlOyBcbiAgICBjb25zb2xlLmxvZygnWCBvciBZIEF4aXMgaGFzIGJlZW4gc2VsZWN0ZWQ6ICcsIEF4aXNTZWxlY3RlZC5heGlzU2VsZWN0ZWQpOyAvLyBUZXN0aW5nXG5cbiAgICAvLyBSZW1vdmUgRW50ZXJZIGFuZCBMZWF2ZVkgRXZlbnQgTGlzdGVuZXJzIFxuICAgIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgRW50ZXJZKTtcbiAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgTGVhdmVZKTtcbiAgICB9KTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2VsbHMubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgICBjZWxsc1tpXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgRW50ZXJYKTtcblxuICAgICAgICBjZWxsc1tpXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgTGVhdmVYKTtcbiAgICB9XG59XG5cbi8vIEVudGVyWCgpOiBXaWxsIGVudGVyIGVhY2ggY2VsbCBvbiB0aGUgeC1heGlzIHNlbGVjdGlvbi4gXG5mdW5jdGlvbiBFbnRlclgoZSl7XG4gICAgY29uc29sZS5sb2coZSk7IC8vIFRlc3RpbmcgXG4gICAgY29uc29sZS5sb2coZS50YXJnZXQpOyAvLyBUZXN0aW5nIFxuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmRhdGFzZXQueCk7IC8vIFRlc3RpbmcgXG4gICAgY29uc29sZS5sb2coZS50YXJnZXQuZGF0YXNldC55KTsgLy8gVGVzdGluZ1xuICAgIGNvbnNvbGUubG9nKCdcXG4nKTsgLy8gVGVzdGluZ1xuIFxuICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnh9XCJdW2RhdGEteT1cIiR7ZS50YXJnZXQuZGF0YXNldC55fVwiXWApO1xuICAgIGNvbnN0IG5leHRDZWxsT25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7ZS50YXJnZXQuZGF0YXNldC54fVwiXVtkYXRhLXk9XCIke3BhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueSkgKyAxfVwiXWApO1xuICAgIGNvbnN0IG5leHRDZWxsVHdvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7ZS50YXJnZXQuZGF0YXNldC54fVwiXVtkYXRhLXk9XCIke3BhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueSkgKyAyfVwiXWApO1xuICAgIGNvbnN0IG5leHRDZWxsVGhyZWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnh9XCJdW2RhdGEteT1cIiR7cGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC55KSArIDN9XCJdYCk7XG5cbiAgICBpZiAoU2hpcERhdGEuc2hpcExlbmd0aCA9PT0gMClcbiAgICB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaG92ZXItdGVzdCcpOyBcbiAgICB9XG4gICAgZWxzZSBpZiAoU2hpcERhdGEuc2hpcExlbmd0aCA9PT0gMSkgLy8gVGhlIHNoaXAgbGVuZ3RoIHRvIGJlIHBsYWNlZCBvbiB0aGUgYm9hcmQuXG4gICAge1xuICAgICAgICBpZiAoIShwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnkpID09PSA5KSkgLy8gS2VlcHMgYWxsIHNoaXAgcGxhY2VtZW50cyBvbiB0aGUgZ2FtZWJvYXJkLiBcbiAgICAgICAge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdob3Zlci10ZXN0Jyk7XG5cbiAgICAgICAgICAgIGNvbnN0IG5leHRDZWxsT25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7ZS50YXJnZXQuZGF0YXNldC54fVwiXVtkYXRhLXk9XCIke3BhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueSkgKyAxfVwiXWApO1xuICAgICAgICAgICAgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmFkZCgnaG92ZXItdGVzdCcpOyBcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAyKVxuICAgIHtcbiAgICAgICAgaWYgKCEoKHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueSkgKyAyKSA9PT0gMTApICYmICEoKHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueSkgKyAxKSA9PT0gOSkgJiYgIShwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnkpID09PSA5KSlcbiAgICAgICAge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgICAgICBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuYWRkKCdob3Zlci10ZXN0Jyk7IFxuICAgICAgICAgICAgbmV4dENlbGxUd28uY2xhc3NMaXN0LmFkZCgnaG92ZXItdGVzdCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKFNoaXBEYXRhLnNoaXBMZW5ndGggPT09IDMpXG4gICAge1xuICAgICAgICBpZiAoISgocGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC55KSArIDMpID09PSAxMCkgJiYgISgocGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC55KSArIDIpID09PSA5KSAmJiAhKChwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnkpICsgMSkgPT09IDkpICYmICEocGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC55KSA9PT0gOSkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaG92ZXItdGVzdCcpO1xuICAgICAgICAgICAgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmFkZCgnaG92ZXItdGVzdCcpO1xuICAgICAgICAgICAgbmV4dENlbGxUd28uY2xhc3NMaXN0LmFkZCgnaG92ZXItdGVzdCcpO1xuICAgICAgICAgICAgbmV4dENlbGxUaHJlZS5jbGFzc0xpc3QuYWRkKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBOb3RlOiBJIGNvdWxkIHB1dCB0aGlzIGluIGl0cyBvd24gZnVuY3Rpb24sIGJ1dCBmb3Igbm93IEkgd2lsbCB1c2UgdGhlIEVudGVyWCBmdW5jdGlvbiB0byB0ZXN0XG4gICAgLy8gdGhpcyBhbG9nb3JpdGhtIG91dC4gXG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ1g6ICcsIGNlbGwuZGF0YXNldC54KTsgXG4gICAgICAgIGNvbnNvbGUubG9nKCdZOiAnLCBjZWxsLmRhdGFzZXQueSk7IFxuICAgICAgICAvLyBUT0RPOiBTaGlwIHBsYWNlbWVudCBvbiB0aGUgYm9hcmQgY2FuIGJlIGRvbmUgaW5zaWRlIHRoaXMgZnVuY3Rpb24uIFxuXG4gICAgICAgIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAwKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykpIC8vIENhbnQgcGxhY2UgdGhlIHNoaXAgb24gdGhpcyBjZWxsIHdoZW4gdGhlcmUgaXMgb25lIGFscmVhZHkgb24gdGhlIGNlbGwuIFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDZWxsIGFscmVhZHkgY29udGFpbnMgYSBzaGlwJyk7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VkJyk7IFxuICAgICAgICAgICAgICAgIFBsYWNlZFNoaXBzW2BzaGlwICR7U2hpcERhdGEubGVuZ3RoSW5kZXh9YF0uY29vcmRpbmF0ZXMgPSB7MDogW3BhcnNlSW50KGNlbGwuZGF0YXNldC54KSwgcGFyc2VJbnQoY2VsbC5kYXRhc2V0LnkpXX07XG4gICAgICAgICAgICAgICAgU2hpcERhdGEubGVuZ3RoSW5kZXgrKzsgXG4gICAgICAgICAgICAgICAgQXhpc0NoYW5nZS5heGlzV2FzQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIFBsYWNlU2hpcHMoKTsgXG4gICAgICAgICAgICB9ICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKFNoaXBEYXRhLnNoaXBMZW5ndGggPT09IDEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICgoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgJiYgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpKSBcbiAgICAgICAgICAgIHx8IChjZWxsLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSB8fCBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDZWxsIGFscmVhZHkgY29udGFpbnMgYSBzaGlwJyk7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VkJyk7XG4gICAgICAgICAgICAgICAgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmFkZCgnc2hpcC1wbGFjZWQnKTtcbiAgICAgICAgICAgICAgICBQbGFjZWRTaGlwc1tgc2hpcCAke1NoaXBEYXRhLmxlbmd0aEluZGV4fWBdLmNvb3JkaW5hdGVzID0gezA6IFtwYXJzZUludChjZWxsLmRhdGFzZXQueCksIHBhcnNlSW50KGNlbGwuZGF0YXNldC55KV0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTogW3BhcnNlSW50KG5leHRDZWxsT25lLmRhdGFzZXQueCksIHBhcnNlSW50KG5leHRDZWxsT25lLmRhdGFzZXQueSldfTtcbiAgICAgICAgICAgICAgICBTaGlwRGF0YS5sZW5ndGhJbmRleCsrO1xuICAgICAgICAgICAgICAgIEF4aXNDaGFuZ2UuYXhpc1dhc0NoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBQbGFjZVNoaXBzKCk7IFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKFNoaXBEYXRhLnNoaXBMZW5ndGggPT09IDIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICgoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgJiYgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpICYmIG5leHRDZWxsVHdvLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSkgXG4gICAgICAgICAgICB8fCAoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgfHwgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpIHx8IG5leHRDZWxsVHdvLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NlbGwgYWxyZWFkeSBjb250YWlucyBhIHNoaXAnKTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcC1wbGFjZWQnKTtcbiAgICAgICAgICAgICAgICBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlZCcpO1xuICAgICAgICAgICAgICAgIG5leHRDZWxsVHdvLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VkJyk7XG4gICAgICAgICAgICAgICAgUGxhY2VkU2hpcHNbYHNoaXAgJHtTaGlwRGF0YS5sZW5ndGhJbmRleH1gXS5jb29yZGluYXRlcyA9IHswOiBbcGFyc2VJbnQoY2VsbC5kYXRhc2V0LngpLCBwYXJzZUludChjZWxsLmRhdGFzZXQueSldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTogW3BhcnNlSW50KG5leHRDZWxsT25lLmRhdGFzZXQueCksIHBhcnNlSW50KG5leHRDZWxsT25lLmRhdGFzZXQueSldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMjogW3BhcnNlSW50KG5leHRDZWxsVHdvLmRhdGFzZXQueCksIHBhcnNlSW50KG5leHRDZWxsVHdvLmRhdGFzZXQueSldfTtcbiAgICAgICAgICAgICAgICBTaGlwRGF0YS5sZW5ndGhJbmRleCsrO1xuICAgICAgICAgICAgICAgIEF4aXNDaGFuZ2UuYXhpc1dhc0NoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBQbGFjZVNoaXBzKCk7IFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKFNoaXBEYXRhLnNoaXBMZW5ndGggPT09IDMpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICgoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgJiYgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpICYmIG5leHRDZWxsVHdvLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSAmJiBuZXh0Q2VsbFRocmVlLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSlcbiAgICAgICAgICAgIHx8IChjZWxsLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSB8fCBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgfHwgbmV4dENlbGxUd28uY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpIHx8IG5leHRDZWxsVGhyZWUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ2VsbCBhbHJlYWR5IGNvbnRhaW5zIGEgc2hpcCcpOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlZCcpO1xuICAgICAgICAgICAgICAgIG5leHRDZWxsT25lLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VkJyk7XG4gICAgICAgICAgICAgICAgbmV4dENlbGxUd28uY2xhc3NMaXN0LmFkZCgnc2hpcC1wbGFjZWQnKTtcbiAgICAgICAgICAgICAgICBuZXh0Q2VsbFRocmVlLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VkJyk7XG4gICAgICAgICAgICAgICAgUGxhY2VkU2hpcHNbYHNoaXAgJHtTaGlwRGF0YS5sZW5ndGhJbmRleH1gXS5jb29yZGluYXRlcyA9IHswOiBbcGFyc2VJbnQoY2VsbC5kYXRhc2V0LngpLCBwYXJzZUludChjZWxsLmRhdGFzZXQueSldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTogW3BhcnNlSW50KG5leHRDZWxsT25lLmRhdGFzZXQueCksIHBhcnNlSW50KG5leHRDZWxsT25lLmRhdGFzZXQueSldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMjogW3BhcnNlSW50KG5leHRDZWxsVHdvLmRhdGFzZXQueCksIHBhcnNlSW50KG5leHRDZWxsVHdvLmRhdGFzZXQueSldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMzogW3BhcnNlSW50KG5leHRDZWxsVGhyZWUuZGF0YXNldC54KSwgcGFyc2VJbnQobmV4dENlbGxUaHJlZS5kYXRhc2V0LnkpXX07XG4gICAgICAgICAgICAgICAgU2hpcERhdGEubGVuZ3RoSW5kZXgrKzsgXG4gICAgICAgICAgICAgICAgQXhpc0NoYW5nZS5heGlzV2FzQ2hhbmdlZCA9IGZhbHNlOyBcbiAgICAgICAgICAgICAgICBQbGFjZVNoaXBzKCk7IFxuICAgICAgICAgICAgfVxuICAgICAgICB9ICBcbiAgICB9KTtcbn1cblxuLy8gTGVhdmVYKCk6IFdpbGwgbGVhdmUgZWFjaCBjZWxsIGZyb20gdGhlIHgtYXhpcyBzZWxlY3Rpb24uIFxuZnVuY3Rpb24gTGVhdmVYKGUpe1xuICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnh9XCJdW2RhdGEteT1cIiR7ZS50YXJnZXQuZGF0YXNldC55fVwiXWApO1xuICAgIGNvbnN0IG5leHRDZWxsT25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7ZS50YXJnZXQuZGF0YXNldC54fVwiXVtkYXRhLXk9XCIke3BhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueSkgKyAxfVwiXWApO1xuICAgIGNvbnN0IG5leHRDZWxsVHdvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7ZS50YXJnZXQuZGF0YXNldC54fVwiXVtkYXRhLXk9XCIke3BhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueSkgKyAyfVwiXWApO1xuICAgIGNvbnN0IG5leHRDZWxsVGhyZWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnh9XCJdW2RhdGEteT1cIiR7cGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC55KSArIDN9XCJdYCk7XG5cbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdob3Zlci10ZXN0JykpXG4gICAge1xuICAgICAgICBpZiAoU2hpcERhdGEuc2hpcExlbmd0aCA9PT0gMClcbiAgICAgICAge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoU2hpcERhdGEuc2hpcExlbmd0aCA9PT0gMSlcbiAgICAgICAge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgICAgICBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoU2hpcERhdGEuc2hpcExlbmd0aCA9PT0gMilcbiAgICAgICAge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgICAgICBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgICAgICBuZXh0Q2VsbFR3by5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci10ZXN0Jyk7IFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKFNoaXBEYXRhLnNoaXBMZW5ndGggPT09IDMpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItdGVzdCcpO1xuICAgICAgICAgICAgbmV4dENlbGxPbmUuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItdGVzdCcpO1xuICAgICAgICAgICAgbmV4dENlbGxUd28uY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItdGVzdCcpO1xuICAgICAgICAgICAgbmV4dENlbGxUaHJlZS5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci10ZXN0Jyk7IFxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBDaGFuZ2VUb1lBeGlzKCk6IFdpbGwgY2hhbmdlIHRoZSBheGlzIHNlbGVjdGlvbiBvbiB0aGUgZ2FtZWJvYXJkIHRvIHRoZSB5LWF4aXMuIFxuZnVuY3Rpb24gQ2hhbmdlVG9ZQXhpcygpe1xuICAgIGNvbnN0IGNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllci1vbmUtYm9hcmQgPiBkaXYgPiBkaXYnKTsgXG4gICAgY29uc3QgeENvb3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVib2FyZC1jb250YWluZXIgPiBkaXY6bnRoLWNoaWxkKDEpID4gZGl2ID4gYnV0dG9uOm50aC1jaGlsZCgxKScpO1xuXG4gICAgQXhpc1NlbGVjdGVkLmF4aXNTZWxlY3RlZCA9IHRydWU7XG4gICAgY29uc29sZS5sb2coJ1ggb3IgWSBheGlzIGhhcyBiZWVuIHNlbGVjdGVkOiAnLCBBeGlzU2VsZWN0ZWQuYXhpc1NlbGVjdGVkKTsgLy8gVGVzdGluZyBcbiAgICBcbiAgICAvLyBSZW1vdmUgRW50ZXJYIGFuZCBMZWF2ZVggRXZlbnQgTGlzdGVuZXJzLlxuICAgIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgRW50ZXJYKTsgXG4gICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIExlYXZlWCk7IFxuICAgIH0pOyBcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2VsbHMubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgICBjZWxsc1tpXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgRW50ZXJZKTtcblxuICAgICAgICBjZWxsc1tpXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgTGVhdmVZKTtcbiAgICB9XG59XG5cbi8vIEVudGVyWSgpOiBXaWxsIGVudGVyIGVhY2ggY2VsbCBvbiB0aGUgeS1heGlzIHNlbGVjdGlvbi5cbmZ1bmN0aW9uIEVudGVyWShlKXtcbiAgICBjb25zb2xlLmxvZyhlKTsgLy8gVGVzdGluZyBcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldCk7IC8vIFRlc3RpbmdcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5kYXRhc2V0LngpOyAvLyBUZXN0aW5nXG4gICAgY29uc29sZS5sb2coZS50YXJnZXQuZGF0YXNldC55KTsgLy8gVGVzdGluZyBcbiAgICBjb25zb2xlLmxvZygnXFxuJyk7IC8vIFRlc3RpbmdcblxuICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnh9XCJdW2RhdGEteT1cIiR7ZS50YXJnZXQuZGF0YXNldC55fVwiXWApO1xuICAgIGNvbnN0IG5leHRDZWxsT25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7cGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC54KSArIDF9XCJdW2RhdGEteT1cIiR7ZS50YXJnZXQuZGF0YXNldC55fVwiXWApO1xuICAgIGNvbnN0IG5leHRDZWxsVHdvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7cGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC54KSArIDJ9XCJdW2RhdGEteT1cIiR7ZS50YXJnZXQuZGF0YXNldC55fVwiXWApO1xuICAgIGNvbnN0IG5leHRDZWxsVGhyZWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LngpICsgM31cIl1bZGF0YS15PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnl9XCJdYCk7XG5cbiAgICBpZiAoU2hpcERhdGEuc2hpcExlbmd0aCA9PT0gMClcbiAgICB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaG92ZXItdGVzdCcpO1xuICAgIH1cbiAgICBlbHNlIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAxKVxuICAgIHtcbiAgICAgICAgaWYgKCEocGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC54KSA9PT0gOSkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaG92ZXItdGVzdCcpO1xuICAgICAgICAgICAgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmFkZCgnaG92ZXItdGVzdCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKFNoaXBEYXRhLnNoaXBMZW5ndGggPT09IDIpXG4gICAge1xuICAgICAgICBpZiAoISgocGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC54KSArIDIpID09PSAxMCkgJiYgISgocGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC54KSArIDEpID09PSA5KSAmJiAhKHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueCkgPT09IDkpKVxuICAgICAgICB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgICAgIG5leHRDZWxsT25lLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgICAgIG5leHRDZWxsVHdvLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAzKVxuICAgIHtcbiAgICAgICAgaWYgKCEoKHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueCkgKyAzKSA9PT0gMTApICYmICEoKHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueCkgKyAyKSA9PT0gOSkgJiYgISgocGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC54KSArIDEpID09PSA5KSAmJiAhKHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueCkgPT09IDkpKVxuICAgICAgICB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgICAgIG5leHRDZWxsT25lLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgICAgIG5leHRDZWxsVHdvLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgICAgIG5leHRDZWxsVGhyZWUuY2xhc3NMaXN0LmFkZCgnaG92ZXItdGVzdCcpO1xuICAgICAgICB9XG4gICAgfSAgIFxuXG4gICAgLy8gUGxhY2VzIHRoZSBzaGlwcyBvbiB0aGUgYm9hcmQgY2VsbHM6XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJYOiBcIiwgY2VsbC5kYXRhc2V0LngpOyAvLyBUZXN0aW5nIFxuICAgICAgICBjb25zb2xlLmxvZyhcIlk6IFwiLCBjZWxsLmRhdGFzZXQueSk7IC8vIFRlc3RpbmcgXG5cbiAgICAgICAgaWYgKFNoaXBEYXRhLnNoaXBMZW5ndGggPT09IDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmIChjZWxsLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNlbGwgYWxyZWFkeSBjb250YWlucyBhIHNoaXAuXCIpOyAvLyBUZXN0aW5nIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcC1wbGFjZWQnKTsgXG4gICAgICAgICAgICAgICAgUGxhY2VkU2hpcHNbYHNoaXAgJHtTaGlwRGF0YS5sZW5ndGhJbmRleH1gXS5jb29yZGluYXRlcyA9IHswOiBbcGFyc2VJbnQoY2VsbC5kYXRhc2V0LngpLCBwYXJzZUludChjZWxsLmRhdGFzZXQueSldfTtcbiAgICAgICAgICAgICAgICBTaGlwRGF0YS5sZW5ndGhJbmRleCsrOyBcbiAgICAgICAgICAgICAgICBBeGlzQ2hhbmdlLmF4aXNXYXNDaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgUGxhY2VTaGlwcygpOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAxKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoKGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpICYmIG5leHRDZWxsT25lLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSkgXG4gICAgICAgICAgICB8fCAoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgfHwgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNlbGwgYWxyZWFkeSBjb250YWlucyBhIHNoaXAuXCIpOyAvLyBUZXN0aW5nIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcC1wbGFjZWQnKTtcbiAgICAgICAgICAgICAgICBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlZCcpOyBcbiAgICAgICAgICAgICAgICBQbGFjZWRTaGlwc1tgc2hpcCAke1NoaXBEYXRhLmxlbmd0aEluZGV4fWBdLmNvb3JkaW5hdGVzID0gezA6IFtwYXJzZUludChjZWxsLmRhdGFzZXQueCksIHBhcnNlSW50KGNlbGwuZGF0YXNldC55KV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxOiBbcGFyc2VJbnQobmV4dENlbGxPbmUuZGF0YXNldC54KSwgcGFyc2VJbnQobmV4dENlbGxPbmUuZGF0YXNldC55KV19O1xuICAgICAgICAgICAgICAgIFNoaXBEYXRhLmxlbmd0aEluZGV4Kys7XG4gICAgICAgICAgICAgICAgQXhpc0NoYW5nZS5heGlzV2FzQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIFBsYWNlU2hpcHMoKTsgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoU2hpcERhdGEuc2hpcExlbmd0aCA9PT0gMilcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKChjZWxsLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSAmJiBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgJiYgbmV4dENlbGxUd28uY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpKSBcbiAgICAgICAgICAgIHx8IChjZWxsLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSB8fCBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgfHwgbmV4dENlbGxUd28uY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNlbGwgYWxyZWFkeSBjb250YWlucyBhIHNoaXBcIik7IC8vIFRlc3RpbmcgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlZCcpOyBcbiAgICAgICAgICAgICAgICBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlZCcpO1xuICAgICAgICAgICAgICAgIG5leHRDZWxsVHdvLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VkJyk7XG4gICAgICAgICAgICAgICAgUGxhY2VkU2hpcHNbYHNoaXAgJHtTaGlwRGF0YS5sZW5ndGhJbmRleH1gXS5jb29yZGluYXRlcyA9IHswOiBbcGFyc2VJbnQoY2VsbC5kYXRhc2V0LngpLCBwYXJzZUludChjZWxsLmRhdGFzZXQueSldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTogW3BhcnNlSW50KG5leHRDZWxsT25lLmRhdGFzZXQueCksIHBhcnNlSW50KG5leHRDZWxsT25lLmRhdGFzZXQueSldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMjogW3BhcnNlSW50KG5leHRDZWxsVHdvLmRhdGFzZXQueCksIHBhcnNlSW50KG5leHRDZWxsVHdvLmRhdGFzZXQueSldfTtcbiAgICAgICAgICAgICAgICBTaGlwRGF0YS5sZW5ndGhJbmRleCsrO1xuICAgICAgICAgICAgICAgIEF4aXNDaGFuZ2UuYXhpc1dhc0NoYW5nZWQgPSBmYWxzZTsgXG4gICAgICAgICAgICAgICAgUGxhY2VTaGlwcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKFNoaXBEYXRhLnNoaXBMZW5ndGggPT09IDMpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICgoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgJiYgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpICYmIG5leHRDZWxsVHdvLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSAmJiBuZXh0Q2VsbFRocmVlLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSlcbiAgICAgICAgICAgIHx8IChjZWxsLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSB8fCBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgfHwgbmV4dENlbGxUaHJlZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgJiYgbmV4dENlbGxUaHJlZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2VsbCBhbHJlYWR5IGNvbnRhaW5zIGEgc2hpcFwiKTsgLy8gVGVzdGluZyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlZCcpOyBcbiAgICAgICAgICAgICAgICBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlZCcpO1xuICAgICAgICAgICAgICAgIG5leHRDZWxsVHdvLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VkJyk7XG4gICAgICAgICAgICAgICAgbmV4dENlbGxUaHJlZS5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlZCcpO1xuICAgICAgICAgICAgICAgIFBsYWNlZFNoaXBzW2BzaGlwICR7U2hpcERhdGEubGVuZ3RoSW5kZXh9YF0uY29vcmRpbmF0ZXMgPSB7MDogW3BhcnNlSW50KGNlbGwuZGF0YXNldC54KSwgcGFyc2VJbnQoY2VsbC5kYXRhc2V0LnkpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDE6IFtwYXJzZUludChuZXh0Q2VsbE9uZS5kYXRhc2V0LngpLCBwYXJzZUludChuZXh0Q2VsbE9uZS5kYXRhc2V0LnkpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDI6IFtwYXJzZUludChuZXh0Q2VsbFR3by5kYXRhc2V0LngpLCBwYXJzZUludChuZXh0Q2VsbFR3by5kYXRhc2V0LnkpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDM6IFtwYXJzZUludChuZXh0Q2VsbFRocmVlLmRhdGFzZXQueCksIHBhcnNlSW50KG5leHRDZWxsVGhyZWUuZGF0YXNldC55KV19O1xuICAgICAgICAgICAgICAgIFNoaXBEYXRhLmxlbmd0aEluZGV4Kys7XG4gICAgICAgICAgICAgICAgQXhpc0NoYW5nZS5heGlzV2FzQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIFBsYWNlU2hpcHMoKTsgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuLy8gTGVhdmVZKCk6IFdpbGwgbGVhdmUgZWFjaCBjZWxsIGZyb20gdGhlIHktYXhpcyBzZWxlY3Rpb24uXG5mdW5jdGlvbiBMZWF2ZVkoZSl7XG4gICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke2UudGFyZ2V0LmRhdGFzZXQueH1cIl1bZGF0YS15PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnl9XCJdYCk7XG4gICAgY29uc3QgbmV4dENlbGxPbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LngpICsgMX1cIl1bZGF0YS15PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnl9XCJdYCk7XG4gICAgY29uc3QgbmV4dENlbGxUd28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LngpICsgMn1cIl1bZGF0YS15PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnl9XCJdYCk7XG4gICAgY29uc3QgbmV4dENlbGxUaHJlZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke3BhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueCkgKyAzfVwiXVtkYXRhLXk9XCIke2UudGFyZ2V0LmRhdGFzZXQueX1cIl1gKTtcblxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2hvdmVyLXRlc3QnKSlcbiAgICB7XG4gICAgICAgIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAgMClcbiAgICAgICAge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoU2hpcERhdGEuc2hpcExlbmd0aCA9PT0gMSlcbiAgICAgICAge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgICAgICBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci10ZXN0Jyk7IFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKFNoaXBEYXRhLnNoaXBMZW5ndGggPT09IDIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItdGVzdCcpO1xuICAgICAgICAgICAgbmV4dENlbGxPbmUuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItdGVzdCcpO1xuICAgICAgICAgICAgbmV4dENlbGxUd28uY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItdGVzdCcpOyBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAzKVxuICAgICAgICB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgICAgIG5leHRDZWxsT25lLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgICAgIG5leHRDZWxsVHdvLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgICAgIG5leHRDZWxsVGhyZWUuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItdGVzdCcpOyBcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9TaGlwXCI7XG4vKiogR2FtZWJvYXJkXG4gKiAtPiBHYW1lYm9hcmRzIHNob3VsZCBiZSBhYmxlIHRvIHBsYWNlIHNoaXBzIGF0IHNwZWNpZmljIGNvb3JkaW5hdGVzIGJ5IFxuICogY2FsbGluZyB0aGUgJ3NoaXAgZmFjdG9yeSBmdW5jdGlvbicuIFxuICogXG4gKiAtPiBHYW1lYm9hcmRzIHNob3VsZCBoYXZlIGEgcmVjZWl2ZUF0dGFjayBmdW5jdGlvbiB0aGF0IHRha2VzIGEgcGFpclxuICogb2YgY29vcmRpbmF0ZXMsIGRldGVybWluZXMgd2hldGhlciBvciBub3QgdGhlIGF0dGFjayBoaXQgYSBzaGlwIGFuZFxuICogdGhlbiBzZW5kcyB0aGUgJ2hpdCcgZnVuY3Rpb24gdG8gdGhlIGNvcnJlY3Qgc2hpcCwgb3IgcmVjb3JkIHRoZSBcbiAqIGNvb3JkaW5hdGVzIG9mIHRoZSBtaXNzZWQgc2hvdC4gXG4gKi9cblxuLy8gR2FtZWJvYXJkKCk6IEdhbWVib2FyZCBmYWN0b3J5IGZ1bmN0aW9uLlxuZXhwb3J0IGNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCBnYW1lYm9hcmQgPSBbLi4uQXJyYXkoMTApXS5tYXAoKCkgPT4gQXJyYXkoMTApLmZpbGwoXCJcIikpOyBcbiAgICBsZXQgc2hpcHNPbkJvYXJkID0gMDsgXG5cbiAgICBjb25zdCByZWNlaXZlQXR0YWNrID0gKCkgPT4ge1xuICAgICAgICAvLyBXaWxsIHRha2UgYSBwYWlyIG9mIGNvb3JkaW5hdGVzLCBkZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRoZSBhdHRhY2sgaGl0IGEgc2hpcCBhbmRcbiAgICAgICAgLy8gdGhlbiBzZW5kcyB0aGUgJ2hpdCcgZnVuY3Rpb24gdG8gdGhlIGNvcnJlY3Qgc2hpcCwgb3IgcmVjb3JkcyB0aGUgY29vcmRpbmF0ZXMgb2YgdGhlXG4gICAgICAgIC8vIG1pc3NlZCBzaG90LiBcbiAgICB9XG5cblxuICAgIHJldHVybiB7Z2FtZWJvYXJkLCBzaGlwc09uQm9hcmQsIHJlY2VpdmVBdHRhY2ssIFNoaXB9O1xufSIsIi8vIFNoaXAoKTogU2hpcCBmYWN0b3J5IGZ1bmN0aW9uLiBcbmV4cG9ydCBjb25zdCBTaGlwID0gKCkgPT4ge1xuICAgIGxldCBkZWZhdWx0TGVuZ3RocyA9IFswLCAwLCAwLCAwLCAxLCAxLCAxLCAyLCAyLCAzXTsgXG4gICAgbGV0IGxlbmd0aCA9IG51bGw7XG4gICAgbGV0IGhpdHMgPSBudWxsO1xuICAgIGxldCBzdW5rID0gZmFsc2U7XG5cbiAgICAvLyBoaXQoKTogV2lsbCBnYXRoZXIgdGhlIGFtb3VudCBvZiBoaXRzIHRoZSBzaGlwIHdpbGwgZ2V0LlxuICAgIGNvbnN0IGhpdCA9IChpc0hpdCkgPT4ge1xuICAgICAgICByZXR1cm4gaGl0cyArPSBpc0hpdDtcbiAgICB9XG5cbiAgICAvLyBpc1N1bmsoKTogV2lsbCBkZXRlcm1pbmUgaWYgdGhlIHNoaXAgaGFzIHN1bmsuIFxuICAgIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHN1bmsgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB7aGl0LCBpc1N1bmssIGRlZmF1bHRMZW5ndGhzLCBsZW5ndGgsfTtcbn1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiB8VGVzdGluZyBBcmVhIElkZW50aWZpZXJzIGFuZCBDb21wb25lbnRzfCAqL1xuI2NvbnRlbnQgPiBkaXYgPiBidXR0b257XG4gICAgcGFkZGluZzogMTBweCA1cHggMTBweCA1cHg7XG4gICAgZm9udC1mYW1pbHk6bW9ub3NwYWNlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRjb3JhbDsgXG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuI2NvbnRlbnQgPiBkaXYgPiBidXR0b246aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Ymx1ZTtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiB8TWFpbiBDb250ZW50IFNlY3Rpb258ICovXG4jY29udGVudHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgcGFkZGluZzogMTBweDsgXG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyogfEdhbWVib2FyZCBDb250YWluZXJ8ICovXG4uZ2FtZWJvYXJkLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTBweDtcblxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB3aWR0aDogMTAwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4vKiBQbGF5ZXIgT25lIEJvYXJkICovXG4ucGxheWVyLW9uZS1ib2FyZHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuLnBsYXllci1vbmUtYm9hcmQgPiBkaXZ7IC8qIHJvd3MgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICovXG4gICAgLyogcGFkZGluZzogNXB4OyAqL1xufVxuLnBsYXllci1vbmUtYm9hcmQgPiBkaXYgPiBkaXZ7IC8qIGNlbGxzICovXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRjb3JhbDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xufVxuXG4vKiBQbGF5ZXIgVHdvIEJvYXJkICovXG4uY29tcHV0ZXItZ2FtZWJvYXJke1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHB1cnBsZTtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuLmNvbXB1dGVyLWdhbWVib2FyZCA+IGRpdntcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgLyogcGFkZGluZzogMTBweDsgKi9cbn1cbi5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXYgPiBkaXZ7IC8qIGNlbGxzICovXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmVlbjtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgd2lkdGg6IDMwcHg7IFxuICAgIGhlaWdodDogMzBweDtcbn1cblxuLyogaG92ZXItdGVzdCAqL1xuLmhvdmVyLXRlc3R7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2sgIWltcG9ydGFudDtcbn1cblxuLyogc2hpcC1wbGFjZWQgLSBEaXNwbGF5cyBlYWNoIHNoaXAgcGxhY2VkIG9uIHRoZSBib2FyZC4gKi9cbi5zaGlwLXBsYWNlZHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjayAhaW1wb3J0YW50O1xufVxuXG4vKiBjb21wdXRlci1zaGlwLXBsYWNlZCAtIERpc3BsYXlzIGVhY2ggc2hpcCB0aGF0IHRoZSBjb21wdXRlciBwbGFjZXMgb24gdGhlaXIgYm9hcmQuICovXG4uY29tcHV0ZXItc2hpcC1wbGFjZWR7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmVlbiAhaW1wb3J0YW50O1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyogfEludGVmYWNlIFNlY3Rpb258ICovXG4uaW50ZXJmYWNle1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBcbiAgICBib3JkZXI6IDFweCBzb2xpZCBvcmFuZ2U7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLyogY3VycmVudC1jb29yZGluYXRlIC0gVGhlIGN1cnJlbnQgY29vcmRpbmF0ZSBjaG9vc2VuIGJ5IHRoZSB1c2VyLiAqL1xuLmN1cnJlbnQtY29vcmRpbmF0ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Y29yYWw7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDhDQUE4QztBQUM5QztJQUNJLDBCQUEwQjtJQUMxQixxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1QixlQUFlO0FBQ25CO0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0IsMkJBQTJCO0FBQy9COztBQUVBLDRLQUE0SztBQUM1Syw0S0FBNEs7QUFDNUssMkJBQTJCO0FBQzNCO0lBQ0kscUJBQXFCO0lBQ3JCLGFBQWE7QUFDakI7O0FBRUEsNEtBQTRLO0FBQzVLLDRLQUE0SztBQUM1SywwQkFBMEI7QUFDMUI7SUFDSSxhQUFhO0lBQ2IsU0FBUzs7SUFFVCxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGFBQWE7SUFDYixjQUFjO0FBQ2xCOztBQUVBLHFCQUFxQjtBQUNyQjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7O0lBRXRCLHVCQUF1QjtJQUN2QixhQUFhO0FBQ2pCO0FBQ0EseUJBQXlCLFNBQVM7SUFDOUIsYUFBYTs7SUFFYiw2QkFBNkI7SUFDN0Isa0JBQWtCO0FBQ3RCO0FBQ0EsK0JBQStCLFVBQVU7SUFDckMsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQSxxQkFBcUI7QUFDckI7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCOztJQUV0Qix3QkFBd0I7SUFDeEIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTs7SUFFYixtQkFBbUI7QUFDdkI7QUFDQSxpQ0FBaUMsVUFBVTtJQUN2Qyw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBLGVBQWU7QUFDZjtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQSwwREFBMEQ7QUFDMUQ7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUEsdUZBQXVGO0FBQ3ZGO0lBQ0ksdUNBQXVDO0FBQzNDOzs7QUFHQSw0S0FBNEs7QUFDNUssNEtBQTRLO0FBQzVLLHVCQUF1QjtBQUN2QjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7O0lBRXRCLHdCQUF3QjtJQUN4QixhQUFhO0FBQ2pCOztBQUVBLHFFQUFxRTtBQUNyRTtJQUNJLDRCQUE0QjtJQUM1Qiw0QkFBNEI7QUFDaENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogfFRlc3RpbmcgQXJlYSBJZGVudGlmaWVycyBhbmQgQ29tcG9uZW50c3wgKi9cXG4jY29udGVudCA+IGRpdiA+IGJ1dHRvbntcXG4gICAgcGFkZGluZzogMTBweCA1cHggMTBweCA1cHg7XFxuICAgIGZvbnQtZmFtaWx5Om1vbm9zcGFjZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRjb3JhbDsgXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI2NvbnRlbnQgPiBkaXYgPiBidXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRibHVlO1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyogfE1haW4gQ29udGVudCBTZWN0aW9ufCAqL1xcbiNjb250ZW50e1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxuICAgIHBhZGRpbmc6IDEwcHg7IFxcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyogfEdhbWVib2FyZCBDb250YWluZXJ8ICovXFxuLmdhbWVib2FyZC1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG5cXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgd2lkdGg6IDEwMDBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi8qIFBsYXllciBPbmUgQm9hcmQgKi9cXG4ucGxheWVyLW9uZS1ib2FyZHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcbi5wbGF5ZXItb25lLWJvYXJkID4gZGl2eyAvKiByb3dzICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xcbiAgICAvKiBwYWRkaW5nOiA1cHg7ICovXFxufVxcbi5wbGF5ZXItb25lLWJvYXJkID4gZGl2ID4gZGl2eyAvKiBjZWxscyAqL1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGNvcmFsO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbi8qIFBsYXllciBUd28gQm9hcmQgKi9cXG4uY29tcHV0ZXItZ2FtZWJvYXJke1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBwdXJwbGU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcbi5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxuICAgIC8qIHBhZGRpbmc6IDEwcHg7ICovXFxufVxcbi5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXYgPiBkaXZ7IC8qIGNlbGxzICovXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JlZW47XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgd2lkdGg6IDMwcHg7IFxcbiAgICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbi8qIGhvdmVyLXRlc3QgKi9cXG4uaG92ZXItdGVzdHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2sgIWltcG9ydGFudDtcXG59XFxuXFxuLyogc2hpcC1wbGFjZWQgLSBEaXNwbGF5cyBlYWNoIHNoaXAgcGxhY2VkIG9uIHRoZSBib2FyZC4gKi9cXG4uc2hpcC1wbGFjZWR7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIGNvbXB1dGVyLXNoaXAtcGxhY2VkIC0gRGlzcGxheXMgZWFjaCBzaGlwIHRoYXQgdGhlIGNvbXB1dGVyIHBsYWNlcyBvbiB0aGVpciBib2FyZC4gKi9cXG4uY29tcHV0ZXItc2hpcC1wbGFjZWR7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JlZW4gIWltcG9ydGFudDtcXG59XFxuXFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qIHxJbnRlZmFjZSBTZWN0aW9ufCAqL1xcbi5pbnRlcmZhY2V7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIFxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBvcmFuZ2U7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi8qIGN1cnJlbnQtY29vcmRpbmF0ZSAtIFRoZSBjdXJyZW50IGNvb3JkaW5hdGUgY2hvb3NlbiBieSB0aGUgdXNlci4gKi9cXG4uY3VycmVudC1jb29yZGluYXRle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGNvcmFsO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vdXRpbHMvU2hpcFwiO1xuXG5pbXBvcnQgeyBJbml0aWFsaXplRE9NIH0gZnJvbSBcIi4vbW9kdWxlcy9Eb21Db250ZW50XCI7XG5cbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmltcG9ydCB0ZXN0U291bmQgZnJvbSAnLi9zb3VuZHMvbWl4a2l0LXJldHJvLWdhbWUtbm90aWZpY2F0aW9uLTIxMi53YXYnO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBOb3Rlczpcbi8vIDEpIEkgb25seSBoYXZlIHRvIHRlc3QgdGhlIHNoaXAgb2JqZWN0cyBwdWJsaWMgaW50ZXJmYWNlLiBPbmx5ICdtZXRob2RzIG9yIHByb3BlcnRpZXMnIHRoYXQgYXJlIHVzZWQgb3V0c2lkZSBvZiB5b3VyIHNoaXAgb2JqZWN0IFxuLy8gbmVlZCB1bml0IHRlc3RzLiBcbi8vIFxuLy8gMikgTm90ZSB0aGF0IHdlIGhhdmUgbm90IHlldCBjcmVhdGVkIGFueSBVc2VyIEludGVyZmFjZS4gV2Ugc2hvdWxkIGtub3dcbi8vIG91ciBjb2RlIGlzIGNvbWluZyB0b2dldGhlciBieSBydW5uaW5nIHRoZSB0ZXN0cy4gWW91IHNob3VsZG4ndCBiZVxuLy8gcmVseWluZyBvbiAnY29uc29sZS5sb2cnIG9yICdET00gbWV0aG9kcycgdG8gbWFrZSBzdXJlIHlvdXIgY29kZSBpc1xuLy8gZG9pbmcgd2hhdCB5b3UgZXhwZWN0IGl0IHRvLlxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIHxUZXN0aW5nIEFyZWF8XG5jb25zb2xlLmxvZygnfFRlc3RpbmcgQXJlYXwnKTtcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuY29uc29sZS5sb2coY29udGVudCk7IC8vIFRlc3RpbmcgXG5cbmNvbnN0IGJ1dHRvbk9uZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgYnV0dG9uT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7IFxuYnV0dG9uT25lLnRleHRDb250ZW50ID0gJ0NsaWNrIE1lISc7XG5cbmNvbnN0IG5ld1NvdW5kID0gbmV3IEF1ZGlvKHRlc3RTb3VuZCk7XG5cbi8vIGJ1dHRvbk9uZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbi8vICAgICBjb25zb2xlLmxvZygnWW91IGNsaWNrZWQgdGhlIGJ1dHRvbiEnKTsgLy8gVGVzdGluZ1xuLy8gICAgIG5ld1NvdW5kLnBsYXkoKTtcbi8vIH0pOyBcblxuLy8gYnV0dG9uT25lQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbk9uZSk7XG4vLyBjb250ZW50LmFwcGVuZENoaWxkKGJ1dHRvbk9uZUNvbnRhaW5lcik7XG4vLyBjb25zb2xlLmxvZygnXFxuJyk7IC8vIFRlc3RpbmcgXG5cbi8qKiB8U3ByZWFkIFN5bnRheCguLi4pfFxuICogVGhlIHNwcmVhZCguLi4pIHN5bnRheCBhbGxvdyBhbiBpdGVyYWJsZSwgc3VjaCBhcyBhbiBhcnJheSBvciBzdHJpbmcsIHRvIGJlIGV4cGFuZGVkIGluIHBsYWNlcyBcbiAqIHdoZXJlIHplcm8gb3IgbW9yZSBhcmd1bWVudHMgKGZvciBmdW5jdGlvbiBjYWxscykgb3IgZWxlbWVudHMgKGZvciBhcnJheSBsaXRlcmFscykgYXJlIGV4cGVjdGVkLlxuICogSW4gYW4gb2JqZWN0IGxpdGVyYWwsIHRoZSBzcHJlYWQgc3ludGF4IGVudW1lcmF0ZXMgdGhlIHByb3BlcnRpZXMgb2YgYW4gb2JqZWN0IGFuZCBhZGRzIHRoZSBrZXktdmFsdWUgcGFpcnNcbiAqIHRvIHRoZSBvYmplY3QgYmVpbmcgY3JlYXRlZC4gXG4gKiBcbiAqIFNwcmVhZCBzeW50YXggbG9va3MgZXhhY3RseSBsaWtlIHJlc3Qgc3ludGF4LiBJbiBhIHdheSwgc3ByZWFkIHN5bnRheCBpcyB0aGUgb3Bwb3NpdGUgb2YgcmVzdCBzeW50YXguXG4gKiBTcHJlYWQgc3ludGF4IFwiZXhwYW5kc1wiIGFuIGFycmF5IGludG8gaXRzIGVsZW1lbnRzLCB3aGlsZSByZXN0IHN5bnRheCBjb2xsZWN0cyBtdWx0aXBsZSBlbGVtZW50cyBhbmRcbiAqIFwiY29uZGVuc2VzXCIgdGhlbSBpbnRvIGEgc2luZ2xlIGVsZW1lbnQuIFxuICogXG4gKiBOb3RlOiBVc2luZyB0aGUgXCJtYXAgYXJyYXkgbWV0aG9kXCIgd2lsbCBjcmVhdGUgYSBuZXcgYXJyYXkgZnJvbSB0aGUgY2FsbGluZyBbLi4uYXJyYXkoOCldIHRoYXQgaXNcbiAqIHNwcmVhZGluZyA4IGVsZW1lbnRzIGludG8gaXQuIEVhY2ggZWxlbWVudCB3aWxsIGJlIGFuIEFycmF5IG9mIDggZWxlbWVudHMgdGhhdCBpcyBmaWxsZWQgd2l0aCAoXCJcIik7XG4gKi9cbmNvbnN0IGFyclRlc3QgPSBbLi4uQXJyYXkoOCldLm1hcCgoKSA9PiBBcnJheSg4KS5maWxsKFwiXCIpKTsgXG5jb25zb2xlLmxvZygnVGhlIEFycmF5OiAnLCBhcnJUZXN0KTsgLy8gVGVzdGluZ1xuY29uc29sZS5sb2coJ1xcbicpOyAvLyBUZXN0aW5nXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5Jbml0aWFsaXplRE9NKCk7Il0sIm5hbWVzIjpbIkdhbWVib2FyZCIsIkF4aXNTZWxlY3RlZCIsImF4aXNTZWxlY3RlZCIsIk5ld0dhbWVTZWxlY3RlZCIsIm5ld0dhbWVTZWxlY3RlZCIsIlNoaXBEYXRhIiwibGVuZ3RoSW5kZXgiLCJzaGlwc1BsYWNlZCIsInNoaXBMZW5ndGgiLCJQbGFjZWRTaGlwcyIsIkF4aXNDaGFuZ2UiLCJheGlzQ2hhbmdlIiwiYXhpc1dhc0NoYW5nZWQiLCJBY3RpdmF0ZUdhbWUiLCJhY3RpdmF0ZUdhbWUiLCJhY3RpdmF0ZVBsYXllck9uZVR1cm4iLCJhY3RpdmF0ZUNvbXB1dGVyVHVybiIsIkluaXRpYWxpemVET00iLCJjb25zb2xlIiwibG9nIiwiR2FtZWJvYXJkRE9NIiwiSW50ZXJmYWNlRE9NIiwiUGxheWVyT25lRE9NIiwiQ29tcHV0ZXJET00iLCJDb21wdXRlclBsYWNlU2hpcHMiLCJOdW1iZXJPZlNoaXBzUGxhY2VkIiwibnVtYmVyT2ZTaGlwc1BsYWNlZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwiY29uY2F0IiwiY29udGVudCIsImdhbWVib2FyZENvbnRhaW5lciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmRDaGlsZCIsInBsYXllck9uZUJvYXJkIiwicGxheWVyT25lIiwiaSIsImdhbWVib2FyZCIsImxlbmd0aCIsInJvdyIsImoiLCJjZWxsIiwiZGF0YXNldCIsIngiLCJ5IiwiY29tcHV0ZXIiLCJjb21wdXRlckJvYXJkIiwiY29tcHV0ZXJSb3ciLCJjb21wdXRlckNlbGwiLCJQbGFjZVNoaXBzIiwiZSIsImNlbGxzIiwicXVlcnlTZWxlY3RvckFsbCIsInhDb29yZCIsInlDb29yZCIsImJvYXJkIiwic2hpcCIsIlNoaXAiLCJkZWZhdWx0TGVuZ3RocyIsImFkZEV2ZW50TGlzdGVuZXIiLCJFbnRlclgiLCJMZWF2ZVgiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiRW50ZXJZIiwiTGVhdmVZIiwiR2FtZUluaXRpYXRlZCIsImNvbXB1dGVyQ2VsbHMiLCJwbGF5ZXJDZWxscyIsImZvckVhY2giLCJQbGF5ZXJPbmVUdXJuIiwiQ29tcHV0ZXJUdXJuIiwidGFyZ2V0IiwieENvb3JkUmFuZG9tIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwieUNvb3JkUmFuZG9tIiwicGxheWVyT25lQ2VsbCIsImNvbnRhaW5zIiwia2V5IiwiY29vcmQiLCJjb29yZGluYXRlcyIsImNvbXB1dGVyUm93cyIsImNvbXB1dGVyU2hpcHMiLCJjb21wdXRlclNoaXBQbGFjZWQiLCJheGlzUmFuZG9tIiwieExlbmd0aE9uZSIsInhMZW5ndGhUd28iLCJ4TGVuZ3RoVGhyZWUiLCJ5TGVuZ3RoT25lIiwieUxlbmd0aFR3byIsInlMZW5ndGhUaHJlZSIsInNldEF0dHJpYnV0ZSIsIl9sb29wIiwiY29vcmRpbmF0ZUluZGV4IiwicGFyc2VJbnQiLCJjb29yZGluYXRlc05vdE92ZXJsYXBwaW5nIiwiY29tcHV0ZXJDZWxsT25lIiwiX2xvb3AyIiwiY29tcHV0ZXJDZWxsVHdvIiwiX2xvb3AzIiwiY29tcHV0ZXJDZWxsVGhyZWUiLCJwbGF5ZXJJbnRlcmZhY2UiLCJuZXdHYW1lIiwicGxhY2VTaGlwIiwiY29vcmRpbmF0ZUNvbnRhaW5lciIsIk5ld0dhbWUiLCJyZW1vdmUiLCJBeGlzRE9NIiwiQ2hhbmdlVG9YQXhpcyIsIm5leHRDZWxsT25lIiwibmV4dENlbGxUd28iLCJuZXh0Q2VsbFRocmVlIiwiQ2hhbmdlVG9ZQXhpcyIsIl90b0NvbnN1bWFibGVBcnJheSIsIkFycmF5IiwibWFwIiwiZmlsbCIsInNoaXBzT25Cb2FyZCIsInJlY2VpdmVBdHRhY2siLCJoaXRzIiwic3VuayIsImhpdCIsImlzSGl0IiwiaXNTdW5rIiwidGVzdFNvdW5kIiwiZ2V0RWxlbWVudEJ5SWQiLCJidXR0b25PbmVDb250YWluZXIiLCJidXR0b25PbmUiLCJuZXdTb3VuZCIsIkF1ZGlvIiwiYXJyVGVzdCJdLCJzb3VyY2VSb290IjoiIn0=