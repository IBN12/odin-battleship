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
/* harmony import */ var _sounds_water_explosion_wav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sounds/water-explosion.wav */ "./src/sounds/water-explosion.wav");
/* harmony import */ var _images_explosion_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/explosion.png */ "./src/images/explosion.png");




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

  // for (let i = 0; i < cells.length; i++)
  // {
  //     if (AxisChange.axisChange === null)
  //     {
  //         cells[i].addEventListener('mouseenter', EnterX);
  //         cells[i].addEventListener('mouseleave', LeaveX);
  //     }
  //     else if (AxisChange.axisChange === 1)
  //     {
  //         cells[i].removeEventListener('mouseenter', EnterY);
  //         cells[i].removeEventListener('mouseleave', LeaveY);
  //         cells[i].addEventListener('mouseenter', EnterX);
  //         cells[i].addEventListener('mouseleave', LeaveX);
  //     }
  //     else if (AxisChange.axisChange === 2)
  //     {
  //         cells[i].removeEventListener('mouseenter', EnterX);
  //         cells[i].removeEventListener('mouseleave', LeaveX);
  //         cells[i].addEventListener('mouseenter', EnterY);
  //         cells[i].addEventListener('mouseleave', LeaveY); 
  //     }
  // }

  if (ShipData.lengthIndex > 9)
    // Will deactivate player ones ship placement. 
    {
      for (var i = 0; i < cells.length; i++) {
        cells[i].removeEventListener('mouseenter', EnterX);
        cells[i].removeEventListener('mouseleave', LeaveX);
        cells[i].removeEventListener('mouseenter', EnterY);
        cells[i].removeEventListener('mouseleave', LeaveY);
      }

      // TODO: Activate the computer gameboard to begin the game. 
      ActivateGame.activateGame = true;
      console.log("Game Activated: ", ActivateGame.activateGame); // Testing
      GameInitiated();
    } else {
    for (var _i = 0; _i < cells.length; _i++) {
      if (AxisChange.axisChange === null) {
        cells[_i].addEventListener('mouseenter', EnterX);
        cells[_i].addEventListener('mouseleave', LeaveX);
      } else if (AxisChange.axisChange === 1) {
        cells[_i].removeEventListener('mouseenter', EnterY);
        cells[_i].removeEventListener('mouseleave', LeaveY);
        cells[_i].addEventListener('mouseenter', EnterX);
        cells[_i].addEventListener('mouseleave', LeaveX);
      } else if (AxisChange.axisChange === 2) {
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
  // const explosion = new Audio(waterExplosion); // Testing 
  // let xCoordRandom = Math.floor(Math.random() * 10);
  // let yCoordRandom = Math.floor(Math.random() * 10); 
  // let playerOneCell = document.querySelector(`[data-x="${xCoordRandom}"][data-y="${yCoordRandom}"]`);
  // console.log('Computer choose: ', playerOneCell); // Testing 
  // console.log("\n"); // Testing 

  var gameboard = (0,_utils_Gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();
  gameboard.receiveAttack(PlacedShips);

  // Test if the computer has already choosen these coordinates. 
  // while(playerOneCell.classList.contains('player-one-ship-hit') || playerOneCell.classList.contains('computer-hit-missed'))
  // {
  //     xCoordRandom = Math.floor(Math.random() * 10);
  //     yCoordRandom = Math.floor(Math.random() * 10);
  //     playerOneCell = document.querySelector(`[data-x="${xCoordRandom}"][data-y="${yCoordRandom}"]`); 
  // }

  // Test if the coordinates contains an enemy ship. 
  // if (playerOneCell.classList.contains('ship-placed'))
  // {
  //     for (let key in PlacedShips)
  //     {
  //         for (let coord in PlacedShips[key].coordinates)
  //         {
  //             if (PlacedShips[key].coordinates[coord][0] === xCoordRandom && PlacedShips[key].coordinates[coord][1] === yCoordRandom)
  //             {
  //                 console.log('The Computer Got A Hit! ', [xCoordRandom, yCoordRandom]); // Testing s
  //                 console.log(`${key} was hit`); // Testing 
  //                 const explosionImg = document.createElement('img');
  //                 explosionImg.src = explosionImage;
  //                 document.querySelector(`[data-x="${xCoordRandom}"][data-y="${yCoordRandom}"]`).appendChild(explosionImg);
  //                 document.querySelector(`[data-x="${xCoordRandom}"][data-y="${yCoordRandom}"]`).classList.add('player-one-ship-hit'); 

  //                 explosion.play(); // Testing 
  //             }
  //         }
  //     }
  // }
  // else
  // {
  //     const computerHitMissed = document.createElement('div');
  //     computerHitMissed.textContent = "M"; 
  //     playerOneCell.classList.add('computer-hit-missed'); 
  //     playerOneCell.appendChild(computerHitMissed); 
  // }

  ActivateGame.activateComputerTurn = false;
  ActivateGame.activatePlayerOneTurn = true;
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
  // this alogorithm out. It would be a lot more effecient to place this in another function
  // so you can remove click event. You should put them in the PlaceOnX() and PlaceOnY() functions. But
  // for now you can use the ShipData.lengthIndex property in the if statement condition. 
  cell.addEventListener('click', function () {
    console.log('X: ', cell.dataset.x);
    console.log('Y: ', cell.dataset.y);
    // TODO: Ship placement on the board can be done inside this function. 

    if (ShipData.shipLength === 0 && ShipData.lengthIndex < 10) {
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
    } else if (ShipData.shipLength === 1 && ShipData.lengthIndex < 10) {
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
    } else if (ShipData.shipLength === 2 && ShipData.lengthIndex < 10) {
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
    } else if (ShipData.shipLength === 3 && ShipData.lengthIndex < 10) {
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

// PlaceOnX(): Will place a ship on the gameboards x-axis.
function PlaceOnX() {
  // Statements...
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

    if (ShipData.shipLength === 0 && ShipData.lengthIndex < 10) {
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
    } else if (ShipData.shipLength === 1 && ShipData.lengthIndex < 10) {
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
    } else if (ShipData.shipLength === 2 && ShipData.lengthIndex < 10) {
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
    } else if (ShipData.shipLength === 3 && ShipData.lengthIndex < 10) {
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

// PlaceOnY(): Will place a ship on the gameboards y-axis. 
function PlaceOnY() {
  // Statements...
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
/* harmony import */ var _sounds_water_explosion_wav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sounds/water-explosion.wav */ "./src/sounds/water-explosion.wav");
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
    var explosion = new Audio(_sounds_water_explosion_wav__WEBPACK_IMPORTED_MODULE_1__);
    var xCoordRandom = Math.floor(Math.random() * 10);
    var yCoordRandom = Math.floor(Math.random() * 10);
    var playerOneCell = document.querySelector("[data-x=\"".concat(xCoordRandom, "\"][data-y=\"").concat(yCoordRandom, "\"]"));
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
        for (var coord in PlacedShips[key].coordinates) {
          if (PlacedShips[key].coordinates[coord][0] === xCoordRandom && PlacedShips[key].coordinates[coord][1] === yCoordRandom) {
            console.log('The computer got a hit: ', [xCoordRandom, yCoordRandom]); // Testing
            console.log("".concat(key, " was hit.")); // Testing 
            PlacedShips[key].hits += 1;
            var shipSunk = PlacedShips[key].hit(PlacedShips[key].hits, PlacedShips[key].length);
            PlacedShips[key].sunk(shipSunk, key);
            var explosionImg = document.createElement('img');
            explosionImg.src = _images_explosion_png__WEBPACK_IMPORTED_MODULE_2__;
            playerOneCell.appendChild(explosionImg);
            playerOneCell.classList.add('player-one-ship-hit');
            explosion.play(); // Testing 
          }
        }
      }
    } else {
      var computerHitMissed = document.createElement('div');
      computerHitMissed.textContent = "M";
      playerOneCell.classList.add('computer-hit-missed');
      playerOneCell.appendChild(computerHitMissed);
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

/***/ "./src/utils/Ship.js":
/*!***************************!*\
  !*** ./src/utils/Ship.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
/** Ship */
// Ship(): Ship factory function. 
var Ship = function Ship() {
  var defaultLengths = [0, 0, 0, 0, 1, 1, 1, 2, 2, 3];
  var length = null;
  var hits = 0;

  // hit(): Will gather the amount of hits the ship will get.
  var hit = function hit(isHit, shipLength) {
    if (isHit === shipLength) {
      return true;
    } else {
      return null;
    }
  };

  // isSunk(): Will determine if the ship has sunk. 
  var sunk = function sunk(isSunk, ship) {
    if (isSunk) {
      console.log("".concat(ship, " has sunk.")); // Testing
      // Note: You need to use the testing file (ship.test.js) 
      // to test this function. 
    }
  };
  return {
    hit: hit,
    sunk: sunk,
    defaultLengths: defaultLengths,
    length: length,
    hits: hits
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,8CAA8C;AAC9C;IACI,0BAA0B;IAC1B,qBAAqB;IACrB,4BAA4B;IAC5B,4BAA4B;IAC5B,eAAe;AACnB;AACA;IACI,2BAA2B;IAC3B,2BAA2B;AAC/B;;AAEA,4KAA4K;AAC5K,4KAA4K;AAC5K,2BAA2B;AAC3B;IACI,qBAAqB;IACrB,aAAa;AACjB;;AAEA,4KAA4K;AAC5K,4KAA4K;AAC5K,0BAA0B;AAC1B;IACI,aAAa;IACb,SAAS;;IAET,sBAAsB;IACtB,aAAa;IACb,aAAa;IACb,cAAc;AAClB;;AAEA,qBAAqB;AACrB;IACI,aAAa;IACb,sBAAsB;;IAEtB,uBAAuB;IACvB,aAAa;AACjB;AACA,yBAAyB,SAAS;IAC9B,aAAa;;IAEb,6BAA6B;IAC7B,kBAAkB;AACtB;AACA,+BAA+B,UAAU;IACrC,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;IAEnB,4BAA4B;IAC5B,YAAY;IACZ,WAAW;IACX,YAAY;AAChB;AACA,qCAAqC,yBAAyB;IAC1D,6BAA6B;IAC7B,YAAY;IACZ,eAAe;IACf,cAAc;AAClB;;AAEA,uBAAuB;AACvB;IACI,aAAa;IACb,sBAAsB;;IAEtB,wBAAwB;IACxB,aAAa;AACjB;AACA,2BAA2B,SAAS;IAChC,aAAa;;IAEb,mBAAmB;AACvB;AACA,iCAAiC,UAAU;IACvC,4BAA4B;IAC5B,YAAY;IACZ,WAAW;IACX,YAAY;AAChB;;AAEA,eAAe;AACf;IACI,kCAAkC;AACtC;;AAEA,0DAA0D;AAC1D;IACI,kCAAkC;AACtC;;AAEA,uFAAuF;AACvF;IACI,uCAAuC;AAC3C;;AAEA,2EAA2E;AAC3E;IACI,WAAW;IACX,YAAY;AAChB;;;AAGA,4KAA4K;AAC5K,4KAA4K;AAC5K,uBAAuB;AACvB;IACI,aAAa;IACb,sBAAsB;;IAEtB,wBAAwB;IACxB,aAAa;AACjB;;AAEA,qEAAqE;AACrE;IACI,4BAA4B;IAC5B,4BAA4B;AAChC","sourcesContent":["/* |Testing Area Identifiers and Components| */\n#content > div > button{\n    padding: 10px 5px 10px 5px;\n    font-family:monospace;\n    background-color: lightcoral;\n    border: 1px solid lightcoral; \n    cursor: pointer;\n}\n#content > div > button:hover{\n    background-color: lightblue;\n    border: 1px solid lightblue;\n}\n\n/***************************************************************************************************************************************************************************/\n/***************************************************************************************************************************************************************************/\n/* |Main Content Section| */\n#content{\n    border: 1px solid red;\n    padding: 10px; \n}\n\n/***************************************************************************************************************************************************************************/\n/***************************************************************************************************************************************************************************/\n/* |Gameboard Container| */\n.gameboard-container{\n    display: flex;\n    gap: 10px;\n\n    border: 1px solid blue;\n    padding: 10px;\n    width: 1000px;\n    margin: 0 auto;\n}\n\n/* Player One Board */\n.player-one-board{\n    display: flex;\n    flex-direction: column;\n\n    border: 1px solid green;\n    padding: 10px;\n}\n.player-one-board > div{ /* rows */\n    display: flex;\n\n    /* border: 1px solid black; */\n    /* padding: 5px; */\n}\n.player-one-board > div > div{ /* cells */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    border: 1px solid lightcoral;\n    padding: 5px;\n    width: 30px;\n    height: 30px;\n}\n.player-one-board > div > div > div{ /* Missed Hit Container */\n    /* border: 1px solid black; */\n    height: 20px;\n    font-size: 20px;\n    color: #d946ef;\n}\n\n/* Computer Gameboard */\n.computer-gameboard{\n    display: flex;\n    flex-direction: column;\n\n    border: 1px solid purple;\n    padding: 10px;\n}\n.computer-gameboard > div{ /* Rows */\n    display: flex;\n\n    /* padding: 10px; */\n}\n.computer-gameboard > div > div{ /* cells */\n    border: 1px solid lightgreen;\n    padding: 5px;\n    width: 30px; \n    height: 30px;\n}\n\n/* hover-test */\n.hover-test{\n    border: 1px solid black !important;\n}\n\n/* ship-placed - Displays each ship placed on the board. */\n.ship-placed{\n    border: 1px solid black !important;\n}\n\n/* computer-ship-placed - Displays each ship that the computer places on their board. */\n.computer-ship-placed{\n    border: 1px solid lightgreen !important;\n}\n\n/* player-one-ship-hit - Indicates that the player one ship has been hit. */\n.player-one-ship-hit > img[src]{\n    width: 100%;\n    height: 100%;\n}\n\n\n/***************************************************************************************************************************************************************************/\n/***************************************************************************************************************************************************************************/\n/* |Inteface Section| */\n.interface{\n    display: flex;\n    flex-direction: column;\n    \n    border: 1px solid orange;\n    padding: 10px;\n}\n\n/* current-coordinate - The current coordinate choosen by the user. */\n.current-coordinate{\n    background-color: lightcoral;\n    border: 1px solid lightcoral;\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNSyxPQUFPLEdBQUd4QixrQkFBQSxDQUFJQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUVDLEdBQUcsQ0FBQztFQUFBLE9BQU1ELEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUFBLEVBQUM7QUFDMUR2RyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxhQUFhLEVBQUUySCxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQ3JDNUgsT0FBTyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUNuQjs7QUFFQUYsa0VBQWEsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9Eb21Db250ZW50LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy91dGlscy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3V0aWxzL1NoaXAuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4uL3V0aWxzL0dhbWVib2FyZFwiO1xuaW1wb3J0IHdhdGVyRXhwbG9zaW9uIGZyb20gXCIuLi9zb3VuZHMvd2F0ZXItZXhwbG9zaW9uLndhdlwiOyBcbmltcG9ydCBleHBsb3Npb25JbWFnZSBmcm9tIFwiLi4vaW1hZ2VzL2V4cGxvc2lvbi5wbmdcIjsgXG5cbi8vIEF4aXNTZWxlY3RlZCgpOiBXaWxsIG9wZXJhdGUgdGhlIGF4aXMgdGhlIGNoYW5nZSBieSBib29sZWFuLlxuY29uc3QgQXhpc1NlbGVjdGVkID0gKCgpID0+IHtcbiAgICBsZXQgYXhpc1NlbGVjdGVkID0gZmFsc2U7XG5cbiAgICByZXR1cm4ge2F4aXNTZWxlY3RlZH07XG59KSgpO1xuXG4vLyBOZXdHYW1lU2VsZWN0ZWQoKTogVG9nZ2xlcyB0cnVlIGlmIHRoZSBuZXcgZ2FtZSBidXR0b24gd2FzIGNsaWNrZWQuXG5jb25zdCBOZXdHYW1lU2VsZWN0ZWQgPSAoKCkgPT4ge1xuICAgIGxldCBuZXdHYW1lU2VsZWN0ZWQgPSBmYWxzZTtcblxuICAgIHJldHVybiB7bmV3R2FtZVNlbGVjdGVkfTsgXG59KSgpO1xuXG4vLyBTaGlwRGF0YSBMaXRlcmwgT2JqZWN0OiBXaWxsIGNvbnRhaW4gc2hpcCBkYXRhIHRvIGNvbnRyb2wgdGhlIGZsb3cgb2Ygc2hpcHMgb24gdGhlIGdhbWVib2FyZC4gXG5sZXQgU2hpcERhdGEgPSB7XG4gICAgbGVuZ3RoSW5kZXg6IDAsXG4gICAgc2hpcHNQbGFjZWQ6IDAsXG4gICAgc2hpcExlbmd0aDogMCxcbn1cblxubGV0IFBsYWNlZFNoaXBzID0ge1xufVxuXG4vLyBBeGlzQ2hhbmdlIExpdGVyYWwgT2JqZWN0OiBcbmxldCBBeGlzQ2hhbmdlID0ge1xuICAgIGF4aXNDaGFuZ2U6IG51bGwsIFxuICAgIGF4aXNXYXNDaGFuZ2VkOiBmYWxzZSxcbn1cblxuLy8gYWN0aXZhdGVHYW1lIExpdGVyYWwgT2JqZWN0OlxubGV0IEFjdGl2YXRlR2FtZSA9IHtcbiAgICBhY3RpdmF0ZUdhbWU6IGZhbHNlLCBcbiAgICBhY3RpdmF0ZVBsYXllck9uZVR1cm46IHRydWUsXG4gICAgYWN0aXZhdGVDb21wdXRlclR1cm46IGZhbHNlLFxufVxuXG4vLyBJbml0aWFsaXppbmdET00oKTogSW50aWFsaXppbmcgRE9NIENvbnRlbnQgZm9yIHRoZSBlbnRpcmUgYXBwbGljYXRpb24uIFxuZXhwb3J0IGZ1bmN0aW9uIEluaXRpYWxpemVET00oKXtcbiAgICBjb25zb2xlLmxvZyhcIkluaXRpYWxpemluZyBET00gQ29udGVudC4uLlwiKTsgLy8gVGVzdGluZyBcbiAgICBjb25zb2xlLmxvZygnXFxuJyk7IC8vIFRlc3RpbmcgXG5cbiAgICBHYW1lYm9hcmRET00oKTtcbiAgICBJbnRlcmZhY2VET00oKTtcbiAgICBQbGF5ZXJPbmVET00oKTtcbiAgICBDb21wdXRlckRPTSgpO1xuICAgIENvbXB1dGVyUGxhY2VTaGlwcygpO1xuICAgIC8vIEdhbWVJbml0aWF0ZWQoKTtcbiAgICAvLyBBeGlzRE9NKCk7XG59XG4vLyBOdW1iZXJPZlNoaXBzUGxhY2VkKCk6IFdpbGwga2VlcCB0cmFjayBvZiB0aGUgY3VycmVudCBzaGlwIHRvIGJlIHBsYWNlZCBvbiB0aGUgZ2FtZWJvYXJkLlxuZnVuY3Rpb24gTnVtYmVyT2ZTaGlwc1BsYWNlZCgpe1xuICAgIGNvbnN0IG51bWJlck9mU2hpcHNQbGFjZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubnVtYmVyLW9mLXNoaXBzJyk7XG5cbiAgICBpZiAoISgoU2hpcERhdGEubGVuZ3RoSW5kZXggKyAxKSA+IDEwKSlcbiAgICB7XG4gICAgICAgIFNoaXBEYXRhLnNoaXBzUGxhY2VkKys7XG4gICAgICAgIG51bWJlck9mU2hpcHNQbGFjZWQudGV4dENvbnRlbnQgPSBgU2hpcDogJHtTaGlwRGF0YS5zaGlwc1BsYWNlZH1gO1xuICAgIH1cbn1cblxuLy8gR2FtZWJvYXJkRE9NKCk6IFRoZSBnYW1lYm9hcmQgRE9NIGZvciB0aGUgZW50aXJlIGFwcGxpY2F0aW9uLiBcbmZ1bmN0aW9uIEdhbWVib2FyZERPTSgpe1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG4gICAgY29uc3QgZ2FtZWJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ2FtZWJvYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2dhbWVib2FyZC1jb250YWluZXInKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZ2FtZWJvYXJkQ29udGFpbmVyKTsgXG59XG5cbi8vIFBsYXllck9uZURPTSgpOiBUaGUgcGxheWVyIG9uZSBib2FyZC5cbmZ1bmN0aW9uIFBsYXllck9uZURPTSgpe1xuICAgIGNvbnN0IGdhbWVib2FyZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lYm9hcmQtY29udGFpbmVyJyk7IFxuXG4gICAgY29uc3QgcGxheWVyT25lQm9hcmQgPSBHYW1lYm9hcmQoKTsgXG5cbiAgICBjb25zdCBwbGF5ZXJPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgcGxheWVyT25lLmNsYXNzTGlzdC5hZGQoJ3BsYXllci1vbmUtYm9hcmQnKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyT25lQm9hcmQuZ2FtZWJvYXJkLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcGxheWVyT25lQm9hcmQuZ2FtZWJvYXJkW2ldLmxlbmd0aDsgaisrKXtcbiAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcbiAgICAgICAgICAgIGNlbGwuZGF0YXNldC54ID0gaTtcbiAgICAgICAgICAgIGNlbGwuZGF0YXNldC55ID0gajtcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBsYXllck9uZS5hcHBlbmRDaGlsZChyb3cpOyBcbiAgICB9XG5cbiAgICBnYW1lYm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyT25lKTsgXG59XG5cbi8vIENvbXB1dGVyRE9NKCk6IFRoZSBjb21wdXRlciBnYW1lYm9hcmRcbmZ1bmN0aW9uIENvbXB1dGVyRE9NKCl7XG4gICAgY29uc3QgZ2FtZWJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVib2FyZC1jb250YWluZXInKTtcbiAgICBcbiAgICBjb25zdCBjb21wdXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcbiAgICBjb21wdXRlci5jbGFzc0xpc3QuYWRkKCdjb21wdXRlci1nYW1lYm9hcmQnKTsgXG5cbiAgICBjb25zdCBjb21wdXRlckJvYXJkID0gR2FtZWJvYXJkKCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbXB1dGVyQm9hcmQuZ2FtZWJvYXJkLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgICAgY29uc3QgY29tcHV0ZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG5cbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb21wdXRlckJvYXJkLmdhbWVib2FyZFtpXS5sZW5ndGg7IGorKylcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc3QgY29tcHV0ZXJDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuICAgICAgICAgICAgY29tcHV0ZXJDZWxsLmRhdGFzZXQueCA9IGk7XG4gICAgICAgICAgICBjb21wdXRlckNlbGwuZGF0YXNldC55ID0gajtcbiAgICAgICAgICAgIGNvbXB1dGVyUm93LmFwcGVuZENoaWxkKGNvbXB1dGVyQ2VsbCk7IFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb21wdXRlci5hcHBlbmRDaGlsZChjb21wdXRlclJvdyk7IFxuICAgIH1cblxuICAgIGdhbWVib2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChjb21wdXRlcik7IFxufVxuXG4vLyBQbGFjZVNoaXBzKCk6IFdpbGwgcGxhY2UgdGhlIHNoaXBzIG9uIHRoZSBnYW1lYm9hcmQuXG5mdW5jdGlvbiBQbGFjZVNoaXBzKGUpe1xuICAgIGNvbnN0IGNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllci1vbmUtYm9hcmQgPiBkaXYgPiBkaXYnKTsgXG4gICAgY29uc3QgeENvb3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVib2FyZC1jb250YWluZXIgPiBkaXY6bnRoLWNoaWxkKDEpID4gZGl2ID4gYnV0dG9uOm50aC1jaGlsZCgxKScpO1xuICAgIGNvbnN0IHlDb29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lYm9hcmQtY29udGFpbmVyID4gZGl2Om50aC1jaGlsZCgxKSA+IGRpdiA+IGJ1dHRvbjpudGgtY2hpbGQoMiknKTsgXG5cbiBcbiAgICBjb25zb2xlLmxvZygnQ3VycmVudCBBeGlzOiAnLCBBeGlzQ2hhbmdlLmF4aXNDaGFuZ2UpOyAvLyBUZXN0aW5nICBcbiAgICBjb25zb2xlLmxvZygnXFxuJyk7IC8vIFRlc3RpbmcgXG5cbiAgICBpZiAoIUF4aXNDaGFuZ2UuYXhpc1dhc0NoYW5nZWQgJiYgU2hpcERhdGEubGVuZ3RoSW5kZXggPCAxMClcbiAgICB7XG4gICAgICAgIE51bWJlck9mU2hpcHNQbGFjZWQoKTsgXG4gICAgICAgICAgICBcbiAgICAgICAgY29uc3QgYm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgICAgICAgY29uc3Qgc2hpcCA9IGJvYXJkLlNoaXAoKTtcbiAgICBcbiAgICAgICAgU2hpcERhdGEuc2hpcExlbmd0aCA9IHNoaXAuZGVmYXVsdExlbmd0aHNbU2hpcERhdGEubGVuZ3RoSW5kZXhdO1xuXG4gICAgICAgIHNoaXAubGVuZ3RoID0gU2hpcERhdGEuc2hpcExlbmd0aCArIDE7IFxuXG4gICAgICAgIGNvbnNvbGUubG9nKCdTaGlwIG51bWJlciB0byBiZSBwbGFjZWQ6ICcsIFNoaXBEYXRhLmxlbmd0aEluZGV4ICsgMSk7IC8vIFRlc3RpbmcgXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaGUgbGVuZ3RoIG9mIHRoZSBzaGlwIHRvIGJlIHBsYWNlZDogJywgU2hpcERhdGEuc2hpcExlbmd0aCk7IC8vIFRlc3RpbmcgXG5cbiAgICAgICAgUGxhY2VkU2hpcHNbYHNoaXAgJHtTaGlwRGF0YS5sZW5ndGhJbmRleH1gXSA9IHNoaXA7XG4gICAgICAgIGNvbnNvbGUubG9nKCdPYmplY3Qgd2l0aCBwbGFjZWQgc2hpcHM6ICcsIFBsYWNlZFNoaXBzKTsgLy8gVGVzdGluZyBcbiAgICAgICAgY29uc29sZS5sb2coJ1xcbicpOyAvLyBUZXN0aW5nXG4gICAgfVxuXG4gICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBjZWxscy5sZW5ndGg7IGkrKylcbiAgICAvLyB7XG4gICAgLy8gICAgIGlmIChBeGlzQ2hhbmdlLmF4aXNDaGFuZ2UgPT09IG51bGwpXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICAgIGNlbGxzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBFbnRlclgpO1xuICAgIC8vICAgICAgICAgY2VsbHNbaV0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIExlYXZlWCk7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgZWxzZSBpZiAoQXhpc0NoYW5nZS5heGlzQ2hhbmdlID09PSAxKVxuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgICBjZWxsc1tpXS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgRW50ZXJZKTtcbiAgICAvLyAgICAgICAgIGNlbGxzW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBMZWF2ZVkpO1xuICAgIC8vICAgICAgICAgY2VsbHNbaV0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIEVudGVyWCk7XG4gICAgLy8gICAgICAgICBjZWxsc1tpXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgTGVhdmVYKTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBlbHNlIGlmIChBeGlzQ2hhbmdlLmF4aXNDaGFuZ2UgPT09IDIpXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICAgIGNlbGxzW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBFbnRlclgpO1xuICAgIC8vICAgICAgICAgY2VsbHNbaV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIExlYXZlWCk7XG4gICAgLy8gICAgICAgICBjZWxsc1tpXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgRW50ZXJZKTtcbiAgICAvLyAgICAgICAgIGNlbGxzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBMZWF2ZVkpOyBcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxuICAgIGlmIChTaGlwRGF0YS5sZW5ndGhJbmRleCA+IDkpIC8vIFdpbGwgZGVhY3RpdmF0ZSBwbGF5ZXIgb25lcyBzaGlwIHBsYWNlbWVudC4gXG4gICAge1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2VsbHMubGVuZ3RoOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNlbGxzW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBFbnRlclgpO1xuICAgICAgICAgICAgY2VsbHNbaV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIExlYXZlWCk7IFxuICAgICAgICAgICAgY2VsbHNbaV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIEVudGVyWSk7XG4gICAgICAgICAgICBjZWxsc1tpXS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgTGVhdmVZKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRPRE86IEFjdGl2YXRlIHRoZSBjb21wdXRlciBnYW1lYm9hcmQgdG8gYmVnaW4gdGhlIGdhbWUuIFxuICAgICAgICBBY3RpdmF0ZUdhbWUuYWN0aXZhdGVHYW1lID0gdHJ1ZTsgXG4gICAgICAgIGNvbnNvbGUubG9nKFwiR2FtZSBBY3RpdmF0ZWQ6IFwiLCBBY3RpdmF0ZUdhbWUuYWN0aXZhdGVHYW1lKTsgLy8gVGVzdGluZ1xuICAgICAgICBHYW1lSW5pdGlhdGVkKCk7IFxuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNlbGxzLmxlbmd0aDsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoQXhpc0NoYW5nZS5heGlzQ2hhbmdlID09PSBudWxsKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNlbGxzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBFbnRlclgpO1xuICAgICAgICAgICAgICAgIGNlbGxzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBMZWF2ZVgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoQXhpc0NoYW5nZS5heGlzQ2hhbmdlID09PSAxKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNlbGxzW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBFbnRlclkpO1xuICAgICAgICAgICAgICAgIGNlbGxzW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBMZWF2ZVkpO1xuICAgICAgICAgICAgICAgIGNlbGxzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBFbnRlclgpO1xuICAgICAgICAgICAgICAgIGNlbGxzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBMZWF2ZVgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoQXhpc0NoYW5nZS5heGlzQ2hhbmdlID09PSAyKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNlbGxzW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBFbnRlclgpO1xuICAgICAgICAgICAgICAgIGNlbGxzW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBMZWF2ZVgpO1xuICAgICAgICAgICAgICAgIGNlbGxzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBFbnRlclkpO1xuICAgICAgICAgICAgICAgIGNlbGxzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBMZWF2ZVkpOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gR2FtZUluaXRpYXRlZCgpOiBUaGUgcGxheWVyIGFuZCBjb21wdXRlciB3aWxsIHRha2UgdHVybnMgcGlja2luZyBjb29yZGluYXRlcyBvbiBlYWNoIG90aGVycyBnYW1lYm9hcmQgdG8gc2luayBhIHNoaXAuXG5mdW5jdGlvbiBHYW1lSW5pdGlhdGVkKCl7XG4gICAgY29uc3QgY29tcHV0ZXJDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXYgPiBkaXZgKTtcbiAgICBjb25zdCBwbGF5ZXJDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5wbGF5ZXItb25lLWdhbWVib2FyZCA+IGRpdiA+IGRpdmApOyBcblxuICAgIGlmIChBY3RpdmF0ZUdhbWUuYWN0aXZhdGVHYW1lKVxuICAgIHtcbiAgICAgICAgY29tcHV0ZXJDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgUGxheWVyT25lVHVybik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICghQWN0aXZhdGVHYW1lLmFjdGl2YXRlUGxheWVyT25lVHVybilcbiAgICB7XG4gICAgICAgIGNvbXB1dGVyQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIFBsYXllck9uZVR1cm4pOyBcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUGxheWVyIE9uZSBUdXJuIE92ZXJcIik7IC8vIFRlc3RpbmcgXG4gICAgICAgIGNvbnNvbGUubG9nKFwiXFxuXCIpOyAvLyBUZXN0aW5nXG4gICAgICAgIFxuICAgICAgICBDb21wdXRlclR1cm4oKTsgIFxuICAgIH1cbn1cblxuLy8gUGxheWVyT25lVHVybigpOiBQbGF5ZXIgb25lIHdpbGwgY2hvb3NlIGEgc3BvdCBvbiB0aGUgYm9hcmQuIFxuZnVuY3Rpb24gUGxheWVyT25lVHVybihlKXtcbiAgICBjb25zdCBjb21wdXRlckNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY29tcHV0ZXItZ2FtZWJvYXJkID4gZGl2ID4gZGl2W2RhdGEteD1cIiR7ZS50YXJnZXQuZGF0YXNldC54fVwiXVtkYXRhLXk9XCIke2UudGFyZ2V0LmRhdGFzZXQueX1cIl1gKTsgXG4gICAgY29uc29sZS5sb2coZS50YXJnZXQpOyAvLyBUZXN0aW5nIFxuICAgIGNvbnNvbGUubG9nKGNvbXB1dGVyQ2VsbCk7IC8vIFRlc3RpbmcgXG4gICAgY29uc29sZS5sb2coXCJYOiBcIiwgZS50YXJnZXQuZGF0YXNldC54KTsgLy8gVGVzdGluZyBcbiAgICBjb25zb2xlLmxvZyhcIlk6IFwiLCBlLnRhcmdldC5kYXRhc2V0LnkpOyAvLyBUZXN0aW5nXG5cbiAgICBBY3RpdmF0ZUdhbWUuYWN0aXZhdGVQbGF5ZXJPbmVUdXJuID0gZmFsc2U7XG4gICAgQWN0aXZhdGVHYW1lLmFjdGl2YXRlQ29tcHV0ZXJUdXJuID0gdHJ1ZTtcblxuICAgIEdhbWVJbml0aWF0ZWQoKTsgXG59XG5cbi8vIENvbXB1dGVyVHVybigpOiBDb21wdXRlciB3aWxsIGNob29zZSBhIHNwb250IG9uIHBsYXllciBvbmUncyBib2FyZC5cbmZ1bmN0aW9uIENvbXB1dGVyVHVybigpe1xuICAgIC8vIGNvbnN0IGV4cGxvc2lvbiA9IG5ldyBBdWRpbyh3YXRlckV4cGxvc2lvbik7IC8vIFRlc3RpbmcgXG4gICAgLy8gbGV0IHhDb29yZFJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAvLyBsZXQgeUNvb3JkUmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApOyBcbiAgICAvLyBsZXQgcGxheWVyT25lQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke3hDb29yZFJhbmRvbX1cIl1bZGF0YS15PVwiJHt5Q29vcmRSYW5kb219XCJdYCk7XG4gICAgLy8gY29uc29sZS5sb2coJ0NvbXB1dGVyIGNob29zZTogJywgcGxheWVyT25lQ2VsbCk7IC8vIFRlc3RpbmcgXG4gICAgLy8gY29uc29sZS5sb2coXCJcXG5cIik7IC8vIFRlc3RpbmcgXG5cbiAgICBjb25zdCBnYW1lYm9hcmQgPSBHYW1lYm9hcmQoKTsgXG4gICAgZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soUGxhY2VkU2hpcHMpO1xuXG4gICAgLy8gVGVzdCBpZiB0aGUgY29tcHV0ZXIgaGFzIGFscmVhZHkgY2hvb3NlbiB0aGVzZSBjb29yZGluYXRlcy4gXG4gICAgLy8gd2hpbGUocGxheWVyT25lQ2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3BsYXllci1vbmUtc2hpcC1oaXQnKSB8fCBwbGF5ZXJPbmVDZWxsLmNsYXNzTGlzdC5jb250YWlucygnY29tcHV0ZXItaGl0LW1pc3NlZCcpKVxuICAgIC8vIHtcbiAgICAvLyAgICAgeENvb3JkUmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIC8vICAgICB5Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgLy8gICAgIHBsYXllck9uZUNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHt4Q29vcmRSYW5kb219XCJdW2RhdGEteT1cIiR7eUNvb3JkUmFuZG9tfVwiXWApOyBcbiAgICAvLyB9XG5cbiAgICAvLyBUZXN0IGlmIHRoZSBjb29yZGluYXRlcyBjb250YWlucyBhbiBlbmVteSBzaGlwLiBcbiAgICAvLyBpZiAocGxheWVyT25lQ2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykpXG4gICAgLy8ge1xuICAgIC8vICAgICBmb3IgKGxldCBrZXkgaW4gUGxhY2VkU2hpcHMpXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICAgIGZvciAobGV0IGNvb3JkIGluIFBsYWNlZFNoaXBzW2tleV0uY29vcmRpbmF0ZXMpXG4gICAgLy8gICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgaWYgKFBsYWNlZFNoaXBzW2tleV0uY29vcmRpbmF0ZXNbY29vcmRdWzBdID09PSB4Q29vcmRSYW5kb20gJiYgUGxhY2VkU2hpcHNba2V5XS5jb29yZGluYXRlc1tjb29yZF1bMV0gPT09IHlDb29yZFJhbmRvbSlcbiAgICAvLyAgICAgICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaGUgQ29tcHV0ZXIgR290IEEgSGl0ISAnLCBbeENvb3JkUmFuZG9tLCB5Q29vcmRSYW5kb21dKTsgLy8gVGVzdGluZyBzXG4gICAgLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke2tleX0gd2FzIGhpdGApOyAvLyBUZXN0aW5nIFxuICAgIC8vICAgICAgICAgICAgICAgICBjb25zdCBleHBsb3Npb25JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgZXhwbG9zaW9uSW1nLnNyYyA9IGV4cGxvc2lvbkltYWdlO1xuICAgIC8vICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHt4Q29vcmRSYW5kb219XCJdW2RhdGEteT1cIiR7eUNvb3JkUmFuZG9tfVwiXWApLmFwcGVuZENoaWxkKGV4cGxvc2lvbkltZyk7XG4gICAgLy8gICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke3hDb29yZFJhbmRvbX1cIl1bZGF0YS15PVwiJHt5Q29vcmRSYW5kb219XCJdYCkuY2xhc3NMaXN0LmFkZCgncGxheWVyLW9uZS1zaGlwLWhpdCcpOyBcblxuICAgIC8vICAgICAgICAgICAgICAgICBleHBsb3Npb24ucGxheSgpOyAvLyBUZXN0aW5nIFxuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfVxuICAgIC8vIH1cbiAgICAvLyBlbHNlXG4gICAgLy8ge1xuICAgIC8vICAgICBjb25zdCBjb21wdXRlckhpdE1pc3NlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8vICAgICBjb21wdXRlckhpdE1pc3NlZC50ZXh0Q29udGVudCA9IFwiTVwiOyBcbiAgICAvLyAgICAgcGxheWVyT25lQ2VsbC5jbGFzc0xpc3QuYWRkKCdjb21wdXRlci1oaXQtbWlzc2VkJyk7IFxuICAgIC8vICAgICBwbGF5ZXJPbmVDZWxsLmFwcGVuZENoaWxkKGNvbXB1dGVySGl0TWlzc2VkKTsgXG4gICAgLy8gfVxuXG4gICAgQWN0aXZhdGVHYW1lLmFjdGl2YXRlQ29tcHV0ZXJUdXJuID0gZmFsc2U7XG4gICAgQWN0aXZhdGVHYW1lLmFjdGl2YXRlUGxheWVyT25lVHVybiA9IHRydWU7IFxuICAgIEdhbWVJbml0aWF0ZWQoKTsgXG59XG5cbi8vIENvbXB1dGVyUGxhY2VTaGlwcygpOiBUaGUgY29tcHV0ZXIgd2lsbCBwbGFjZSBzaGlwcyBvbiB0aGVpciBnYW1lYm9hcmQuXG5mdW5jdGlvbiBDb21wdXRlclBsYWNlU2hpcHMoKXtcbiAgICBjb25zdCBjb21wdXRlckNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbXB1dGVyLWdhbWVib2FyZCA+IGRpdiA+IGRpdicpO1xuICAgIGNvbnNvbGUubG9nKCdDb21wdXRlciBDZWxsczogJywgY29tcHV0ZXJDZWxscyk7IC8vIFRlc3RpbmdcblxuICAgIGNvbnN0IGNvbXB1dGVyUm93cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXYnKTsgXG4gICAgY29uc29sZS5sb2coJ0NvbXB1dGVyIFJvd3M6ICcsIGNvbXB1dGVyUm93cyk7IC8vIFRlc3RpbmdcblxuICAgIGNvbnN0IGNvbXB1dGVyQm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgICBjb25zdCBjb21wdXRlclNoaXBzID0gY29tcHV0ZXJCb2FyZC5TaGlwKCk7XG5cbiAgICBjb21wdXRlclNoaXBzLmRlZmF1bHRMZW5ndGhzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgbGV0IGNvbXB1dGVyU2hpcFBsYWNlZCA9IGZhbHNlO1xuICAgICAgICBsZXQgeENvb3JkUmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGNvbXB1dGVyUm93cy5sZW5ndGgpKTsgLy8gUmV0dXJucyBhIHJhbmRvbSBudW1iZXIgZnJvbSAwIHRvIDkuXG4gICAgICAgIGxldCB5Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7IFxuICAgICAgICBsZXQgYXhpc1JhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuICAgICAgICBsZXQgeExlbmd0aE9uZSA9IDAsIHhMZW5ndGhUd28gPSAwLCB4TGVuZ3RoVGhyZWUgPSAwO1xuICAgICAgICBsZXQgeUxlbmd0aE9uZSA9IDAsIHlMZW5ndGhUd28gPSAwLCB5TGVuZ3RoVGhyZWUgPSAwOyBcblxuICAgICAgICBpZiAoYXhpc1JhbmRvbSA9PT0gMSkgLy8geC1heGlzXG4gICAgICAgIHtcbiAgICAgICAgICAgIHhMZW5ndGhPbmUgPSAwOyBcbiAgICAgICAgICAgIHlMZW5ndGhPbmUgPSAxOyBcblxuICAgICAgICAgICAgeExlbmd0aFR3byA9IDA7XG4gICAgICAgICAgICB5TGVuZ3RoVHdvID0gMjtcblxuICAgICAgICAgICAgeExlbmd0aFRocmVlID0gMDtcbiAgICAgICAgICAgIHlMZW5ndGhUaHJlZSA9IDM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYXhpc1JhbmRvbSA9PT0gMCkgLy8geS1heGlzXG4gICAgICAgIHtcbiAgICAgICAgICAgIHhMZW5ndGhPbmUgPSAxO1xuICAgICAgICAgICAgeUxlbmd0aE9uZSA9IDA7XG5cbiAgICAgICAgICAgIHhMZW5ndGhUd28gPSAyO1xuICAgICAgICAgICAgeUxlbmd0aFR3byA9IDA7XG5cbiAgICAgICAgICAgIHhMZW5ndGhUaHJlZSA9IDM7XG4gICAgICAgICAgICB5TGVuZ3RoVGhyZWUgPSAwOyBcbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKHNoaXAgPT09IDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGB8U2hpcCAke3NoaXB9fGApOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICB3aGlsZSghY29tcHV0ZXJTaGlwUGxhY2VkKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY29tcHV0ZXItZ2FtZWJvYXJkID4gZGl2ID4gZGl2W2RhdGEteD1cIiR7eENvb3JkUmFuZG9tfVwiXVtkYXRhLXk9XCIke3lDb29yZFJhbmRvbX1cIl1gKS5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbXB1dGVyLXNoaXAtcGxhY2VkJykpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb21wdXRlclJvd3MubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgeUNvb3JkUmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICBpZiAoKHhDb29yZFJhbmRvbSArIDEpID49IDEwIHx8ICh5Q29vcmRSYW5kb20gKyAxKSA+PSAxMClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb29yZGluYXRlcyBhcmUgb2ZmIHRoZSBib2FyZCcpOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdYOiAnLCB4Q29vcmRSYW5kb20gKyAxKTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnWTogJywgeUNvb3JkUmFuZG9tICsgMSk7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1xcbicpOyAvLyBUZXN0aW5nICBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgeENvb3JkUmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29tcHV0ZXJSb3dzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIHlDb29yZFJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcHV0ZXJTaGlwUGxhY2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICBjb25zdCBjb21wdXRlckNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY29tcHV0ZXItZ2FtZWJvYXJkID4gZGl2ID4gZGl2W2RhdGEteD1cIiR7eENvb3JkUmFuZG9tfVwiXVtkYXRhLXk9XCIke3lDb29yZFJhbmRvbX1cIl1gKTtcbiAgICAgICAgICAgIGNvbXB1dGVyQ2VsbC5jbGFzc0xpc3QuYWRkKCdjb21wdXRlci1zaGlwLXBsYWNlZCcpOyBcbiAgICAgICAgICAgIGNvbXB1dGVyQ2VsbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQtY29sb3I6IHB1cnBsZTsnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzaGlwID09PSAxKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgfFNoaXAgJHtzaGlwfXxgKTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgd2hpbGUgKCFjb21wdXRlclNoaXBQbGFjZWQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0ge307XG4gICAgICAgICAgICAgICAgbGV0IGNvb3JkaW5hdGVJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgY29tcHV0ZXJDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjZWxsLmNsYXNzTGlzdC5jb250YWlucygnY29tcHV0ZXItc2hpcC1wbGFjZWQnKSlcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1ggQ2VsbDogJywgY2VsbC5kYXRhc2V0LngpOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnWSBDZWxsOiAnLCBjZWxsLmRhdGFzZXQueSk7IC8vIFRlc3RpbmcgXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnWCBSYW5kb206ICcsIHhDb29yZFJhbmRvbSk7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdZIFJhbmRvbTogJywgeUNvb3JkUmFuZG9tKTsgLy8gVGVzdGluZyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzW2Nvb3JkaW5hdGVJbmRleCsrXSA9IFtwYXJzZUludChjZWxsLmRhdGFzZXQueCksIHBhcnNlSW50KGNlbGwuZGF0YXNldC55KV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnXFxuJyk7IC8vIFRlc3RpbmcgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ29vcmRpbmF0ZXMgd2l0aCBzaGlwIHBsYWNlbWVudHM6ICcsIGNvb3JkaW5hdGVzKTsgLy8gVGVzdGluZyBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBjb29yZGluYXRlcylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjb29yZGluYXRlc05vdE92ZXJsYXBwaW5nID0gZmFsc2U7IFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb29yZGluYXRlc1trZXldKTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoIWNvb3JkaW5hdGVzTm90T3ZlcmxhcHBpbmcpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoKGNvb3JkaW5hdGVzW2tleV1bMF0gPT09IHhDb29yZFJhbmRvbSAmJiBjb29yZGluYXRlc1trZXldWzFdID09PSB5Q29vcmRSYW5kb20pIHx8IChjb29yZGluYXRlc1trZXldWzBdID09PSAoeENvb3JkUmFuZG9tICsgeExlbmd0aE9uZSkgJiYgY29vcmRpbmF0ZXNba2V5XVsxXSA9PT0gKHlDb29yZFJhbmRvbSArIHlMZW5ndGhPbmUpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHx8ICgoY29vcmRpbmF0ZXNba2V5XVswXSA9PT0geENvb3JkUmFuZG9tICYmIGNvb3JkaW5hdGVzW2tleV1bMV0gPT09IHlDb29yZFJhbmRvbSkgJiYgKGNvb3JkaW5hdGVzW2tleV1bMF0gPT09ICh4Q29vcmRSYW5kb20gKyB4TGVuZ3RoT25lICkgJiYgY29vcmRpbmF0ZXNba2V5XVsxXSA9PT0gKHlDb29yZFJhbmRvbSArIHlMZW5ndGhPbmUpKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeENvb3JkUmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29tcHV0ZXJSb3dzLmxlbmd0aCk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlDb29yZFJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2ZvdW5kJyk7IC8vIFRlc3RpbmcgXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogTmVlZCB0byB0ZXN0IG9uZSBtb3JlIHRpbWUgdG8gZmluZCBvdXQgaWYgaXQgc3RpbGwgb3ZlcmxhcHMgd2l0aCBhbnkgb2YgdGhlIGNlbGxzLiBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlc05vdE92ZXJsYXBwaW5nID0gdHJ1ZTsgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCh4Q29vcmRSYW5kb20gKyAxKSA+PSAxMCB8fCAoeUNvb3JkUmFuZG9tICsgMSkgPj0gMTApXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeENvb3JkUmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29tcHV0ZXJSb3dzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeUNvb3JkUmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVyQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXYgPiBkaXZbZGF0YS14PVwiJHt4Q29vcmRSYW5kb219XCJdW2RhdGEteT1cIiR7eUNvb3JkUmFuZG9tfVwiXWApO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVyQ2VsbE9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXYgPiBkaXZbZGF0YS14PVwiJHt4Q29vcmRSYW5kb20gKyB4TGVuZ3RoT25lfVwiXVtkYXRhLXk9XCIke3lDb29yZFJhbmRvbSArIHlMZW5ndGhPbmV9XCJdYCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29tcHV0ZXJDZWxsKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb21wdXRlckNlbGxPbmUpOyBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoKHhDb29yZFJhbmRvbSArIDEpID49IDEwIHx8ICh5Q29vcmRSYW5kb20gKyAxKSA+PSAxMClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb29yZGluYXRlcyBhcmUgb2ZmIHRoZSBib2FyZC4nKTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnWDogJywgeENvb3JkUmFuZG9tICsgMSk7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1k6ICcsIHlDb29yZFJhbmRvbSArIDEpOyAvLyBUZXN0aW5nIFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnXFxuJyk7IC8vIFRlc3RpbmcgXG5cbiAgICAgICAgICAgICAgICAgICAgeENvb3JkUmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29tcHV0ZXJSb3dzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIHlDb29yZFJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNvbXB1dGVyQ2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbXB1dGVyLXNoaXAtcGxhY2VkJykgfHwgY29tcHV0ZXJDZWxsT25lLmNsYXNzTGlzdC5jb250YWlucygnY29tcHV0ZXItc2hpcC1wbGFjZWQnKSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaGVyZSBpcyBhbiBvdmVybGFwJyk7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgeENvb3JkUmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29tcHV0ZXJSb3dzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIHlDb29yZFJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTGVhdmUgTG9vcC4uLicpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnXFxuJyk7IC8vIFRlc3RpbmcgIFxuICAgICAgICAgICAgICAgICAgICBjb21wdXRlclNoaXBQbGFjZWQgPSB0cnVlOyBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgY29tcHV0ZXJDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNvbXB1dGVyLWdhbWVib2FyZCA+IGRpdiA+IGRpdltkYXRhLXg9XCIke3hDb29yZFJhbmRvbX1cIl1bZGF0YS15PVwiJHt5Q29vcmRSYW5kb219XCJdYCk7XG4gICAgICAgICAgICBjb21wdXRlckNlbGwuY2xhc3NMaXN0LmFkZCgnY29tcHV0ZXItc2hpcC1wbGFjZWQnKTtcbiAgICAgICAgICAgIGNvbXB1dGVyQ2VsbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQtY29sb3I6IHJlZDsnKTsgLy8gVGVzdGluZ1xuXG4gICAgICAgICAgICBjb25zdCBjb21wdXRlckNlbGxPbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY29tcHV0ZXItZ2FtZWJvYXJkID4gZGl2ID4gZGl2W2RhdGEteD1cIiR7eENvb3JkUmFuZG9tICsgeExlbmd0aE9uZX1cIl1bZGF0YS15PVwiJHt5Q29vcmRSYW5kb20gKyB5TGVuZ3RoT25lfVwiXWApO1xuICAgICAgICAgICAgY29tcHV0ZXJDZWxsT25lLmNsYXNzTGlzdC5hZGQoJ2NvbXB1dGVyLXNoaXAtcGxhY2VkJyk7IFxuICAgICAgICAgICAgY29tcHV0ZXJDZWxsT25lLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZC1jb2xvcjogcmVkOycpOyAvLyBUZXN0aW5nIFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNoaXAgPT09IDIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGB8U2hpcCAke3NoaXB9fGApOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICB3aGlsZSAoIWNvbXB1dGVyU2hpcFBsYWNlZClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsZXQgY29vcmRpbmF0ZXMgPSB7fTtcbiAgICAgICAgICAgICAgICBsZXQgY29vcmRpbmF0ZUluZGV4ID0gMDsgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gRmluZCB3aGljaCBjb29yZGluYXRlcyBhbHJlYWR5IGhhdmUgc2hpcCBwbGFjZW1lbnRzIChGaW5kICdjb21wdXRlci1zaGlwLXBsYWNlZCcpOiBcbiAgICAgICAgICAgICAgICBjb21wdXRlckNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb21wdXRlci1zaGlwLXBsYWNlZCcpKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnWCBDZWxsOiAnLCBjZWxsLmRhdGFzZXQueCk7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdZIENlbGw6ICcsIGNlbGwuZGF0YXNldC55KTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1ggUmFuZG9tOiAnLCB4Q29vcmRSYW5kb20pOyAvLyBUZXN0aW5nIFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1kgUmFuZG9tOiAnLCB5Q29vcmRSYW5kb20pOyAvLyBUZXN0aW5nIFxuICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXNbY29vcmRpbmF0ZUluZGV4KytdID0gW3BhcnNlSW50KGNlbGwuZGF0YXNldC54KSwgcGFyc2VJbnQoY2VsbC5kYXRhc2V0LnkpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdcXG4nKTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Nvb3JkaW5hdGVzIHdpdGggc2hpcCBwbGFjZW1lbnRzOiAnLCBjb29yZGluYXRlcyk7IC8vIFRlc3RpbmdcblxuICAgICAgICAgICAgICAgIC8vIFRlc3RpbmcgZm9yIG92ZXJsYXBwaW5nIHNoaXAgcGxhY2VtZW50cyBhbmQgc2VhcmNoaW5nIGZvciBvcGVuIGNlbGxzLiBcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gY29vcmRpbmF0ZXMpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvLyBUZXN0IGlmIHNoaXAgbGVuZ3RoIDIgaXMgb3ZlcmxhcHBpbmcgdGhlIG90aGVyIHNoaXBzIG9uIHRoZSBib2FyZC4gXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb29yZGluYXRlc05vdE92ZXJsYXBwaW5nID0gZmFsc2U7IFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb29yZGluYXRlc1trZXldKTsgLy8gVGVzdGluZyBcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUoIWNvb3JkaW5hdGVzTm90T3ZlcmxhcHBpbmcpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoKGNvb3JkaW5hdGVzW2tleV1bMF0gPT09IHhDb29yZFJhbmRvbSAmJiBjb29yZGluYXRlc1trZXldWzFdID09PSB5Q29vcmRSYW5kb20pIHx8IFxuICAgICAgICAgICAgICAgICAgICAgICAgKGNvb3JkaW5hdGVzW2tleV1bMF0gPT09ICh4Q29vcmRSYW5kb20gKyB4TGVuZ3RoT25lKSAmJiBjb29yZGluYXRlc1trZXldWzFdID09PSAoeUNvb3JkUmFuZG9tICsgeUxlbmd0aE9uZSkpIHx8IFxuICAgICAgICAgICAgICAgICAgICAgICAgKGNvb3JkaW5hdGVzW2tleV1bMF0gPT09ICh4Q29vcmRSYW5kb20gKyB4TGVuZ3RoVHdvKSkgJiYgKGNvb3JkaW5hdGVzW2tleV1bMV0gPT09ICh5Q29vcmRSYW5kb20gKyB5TGVuZ3RoVHdvKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCAoKGNvb3JkaW5hdGVzW2tleV1bMF0gPT09IHhDb29yZFJhbmRvbSAmJiBjb29yZGluYXRlc1trZXldWzFdID09PSB5Q29vcmRSYW5kb20pICYmIFxuICAgICAgICAgICAgICAgICAgICAgICAgKGNvb3JkaW5hdGVzW2tleV1bMF0gPT09ICh4Q29vcmRSYW5kb20gKyB4TGVuZ3RoT25lKSAmJiBjb29yZGluYXRlc1trZXldWzFdID09PSAoeUNvb3JkUmFuZG9tICsgeUxlbmd0aE9uZSkpICYmIFxuICAgICAgICAgICAgICAgICAgICAgICAgKGNvb3JkaW5hdGVzW2tleV1bMF0gPT09ICh4Q29vcmRSYW5kb20gKyB4TGVuZ3RoVHdvKSAmJiBjb29yZGluYXRlc1trZXldWzFdID09PSAoeUNvb3JkUmFuZG9tICsgeUxlbmd0aFR3bykpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb21wdXRlclJvd3MubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZm91bmRcIik7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlc05vdE92ZXJsYXBwaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RvcCB0aGUgY29vcmRpbmF0ZXMgZnJvbSBsZWF2aW5nIHRoZSBib2FyZCBpZiB0aGV5IGFyZSBjaGFuZ2VkLiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoeENvb3JkUmFuZG9tICsgMikgPj0gMTAgfHwgKHlDb29yZFJhbmRvbSArIDIpID49IDEwKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhDb29yZFJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbXB1dGVyUm93cy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlDb29yZFJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTsgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjb21wdXRlckNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY29tcHV0ZXItZ2FtZWJvYXJkID4gZGl2ID4gZGl2W2RhdGEteD1cIiR7eENvb3JkUmFuZG9tfVwiXVtkYXRhLXk9XCIke3lDb29yZFJhbmRvbX1cIl1gKTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVyQ2VsbE9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXYgPiBkaXZbZGF0YS14PVwiJHt4Q29vcmRSYW5kb20gKyB4TGVuZ3RoT25lfVwiXVtkYXRhLXk9XCIke3lDb29yZFJhbmRvbSArIHlMZW5ndGhPbmV9XCJdYCk7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wdXRlckNlbGxUd28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY29tcHV0ZXItZ2FtZWJvYXJkID4gZGl2ID4gZGl2W2RhdGEteD1cIiR7eENvb3JkUmFuZG9tICsgeExlbmd0aFR3b31cIl1bZGF0YS15PVwiJHt5Q29vcmRSYW5kb20gKyB5TGVuZ3RoVHdvfVwiXWApOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29tcHV0ZXJDZWxsKTsgLy8gVGVzdGluZyBcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb21wdXRlckNlbGxPbmUpOyAvLyBUZXN0aW5nIFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbXB1dGVyQ2VsbFR3byk7IC8vIFRlc3RpbmcgXG5cbiAgICAgICAgICAgICAgICBpZiAoKHhDb29yZFJhbmRvbSArIDIpID49IDEwIHx8ICh5Q29vcmRSYW5kb20gKyAyKSA+PSAxMClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29vcmRpbmF0ZXMgYXJlIG9mZiB0aGUgYm9hcmQuXCIpOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiWDogXCIsIHhDb29yZFJhbmRvbSArIDIpOyAvLyBUZXN0aW5nIFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlk6IFwiLCB5Q29vcmRSYW5kb20gKyAyKTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnXFxuJyk7IC8vIFRlc3RpbmcgXG5cbiAgICAgICAgICAgICAgICAgICAgeENvb3JkUmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29tcHV0ZXJSb3dzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIHlDb29yZFJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNvbXB1dGVyQ2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbXB1dGVyLXNoaXAtcGxhY2VkJykgfHwgY29tcHV0ZXJDZWxsT25lLmNsYXNzTGlzdC5jb250YWlucygnY29tcHV0ZXItc2hpcC1wbGFjZWQnKSB8fCBjb21wdXRlckNlbGxUd28uY2xhc3NMaXN0LmNvbnRhaW5zKCdjb21wdXRlci1zaGlwLXBsYWNlZCcpKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RoZXJlIGlzIGFuIG92ZXJsYXAuJyk7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgeENvb3JkUmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29tcHV0ZXJSb3dzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIHlDb29yZFJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJMZWF2aW5nLi4uXCIpOyAvLyBUZXN0aW5nIFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnXFxuJyk7IC8vIFRlc3RpbmcgXG4gICAgICAgICAgICAgICAgICAgIGNvbXB1dGVyU2hpcFBsYWNlZCA9IHRydWU7IC8vIFRlc3RpbmcgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIik7IC8vIFRlc3RpbmcgXG4gICAgICAgICAgICB9IFxuXG4gICAgICAgICAgICBjb25zdCBjb21wdXRlckNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY29tcHV0ZXItZ2FtZWJvYXJkID4gZGl2ID4gZGl2W2RhdGEteD1cIiR7eENvb3JkUmFuZG9tfVwiXVtkYXRhLXk9XCIke3lDb29yZFJhbmRvbX1cIl1gKTtcbiAgICAgICAgICAgIGNvbXB1dGVyQ2VsbC5jbGFzc0xpc3QuYWRkKCdjb21wdXRlci1zaGlwLXBsYWNlZCcpO1xuICAgICAgICAgICAgY29tcHV0ZXJDZWxsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47Jyk7IFxuXG4gICAgICAgICAgICBjb25zdCBjb21wdXRlckNlbGxPbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY29tcHV0ZXItZ2FtZWJvYXJkID4gZGl2ID4gZGl2W2RhdGEteD1cIiR7eENvb3JkUmFuZG9tICsgeExlbmd0aE9uZX1cIl1bZGF0YS15PVwiJHt5Q29vcmRSYW5kb20gKyB5TGVuZ3RoT25lfVwiXWApO1xuICAgICAgICAgICAgY29tcHV0ZXJDZWxsT25lLmNsYXNzTGlzdC5hZGQoJ2NvbXB1dGVyLXNoaXAtcGxhY2VkJyk7XG4gICAgICAgICAgICBjb21wdXRlckNlbGxPbmUuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjsnKTtcblxuICAgICAgICAgICAgY29uc3QgY29tcHV0ZXJDZWxsVHdvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNvbXB1dGVyLWdhbWVib2FyZCA+IGRpdiA+IGRpdltkYXRhLXg9XCIke3hDb29yZFJhbmRvbSArIHhMZW5ndGhUd299XCJdW2RhdGEteT1cIiR7eUNvb3JkUmFuZG9tICsgeUxlbmd0aFR3b31cIl1gKTtcbiAgICAgICAgICAgIGNvbXB1dGVyQ2VsbFR3by5jbGFzc0xpc3QuYWRkKCdjb21wdXRlci1zaGlwLXBsYWNlZCcpOyBcbiAgICAgICAgICAgIGNvbXB1dGVyQ2VsbFR3by5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQtY29sb3I6IGdyZWVuOycpOyBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzaGlwID09PSAzKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgfFNoaXAgJHtzaGlwfXxgKTsgICBcbiAgICAgICAgICAgIHdoaWxlKCFjb21wdXRlclNoaXBQbGFjZWQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0ge307XG4gICAgICAgICAgICAgICAgbGV0IGNvb3JkaW5hdGVJbmRleCA9IDA7IFxuXG4gICAgICAgICAgICAgICAgLy8gRmluZCB3aGljaCBjb29yZGluYXRlcyBhbHJlYWR5IGhhdmUgc2hpcCBwbGFjZW1lbnRzIChGaW5kICdjb21wdXRlci1zaGlwLXBsYWNlZCcpOiBcbiAgICAgICAgICAgICAgICBjb21wdXRlckNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb21wdXRlci1zaGlwLXBsYWNlZCcpKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlggQ2VsbDogXCIsIGNlbGwuZGF0YXNldC54KTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJZIENlbGw6IFwiLCBjZWxsLmRhdGFzZXQueSk7IC8vIFRlc3RpbmcgXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlggUmFuZG9tOiBcIiwgeENvb3JkUmFuZG9tKTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJZIFJhbmRvbTogXCIsIHlDb29yZFJhbmRvbSk7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzW2Nvb3JkaW5hdGVJbmRleCsrXSA9IFtwYXJzZUludChjZWxsLmRhdGFzZXQueCksIHBhcnNlSW50KGNlbGwuZGF0YXNldC55KV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnXFxuJyk7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29vcmRpbmF0ZXMgd2l0aCBzaGlwIHBsYWNlbWVudHM6IFwiLCBjb29yZGluYXRlcyk7IC8vIFRlc3RpbmcgXG5cbiAgICAgICAgICAgICAgICAvLyBUZXN0aW5nIGZvciBvdmVybGFwcGluZyBzaGlwIHBsYWNlbWVudHMgYW5kIHNlYXJjaGluZyBmb3Igb3BlbiBjZWxscy4gXG4gICAgICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIGNvb3JkaW5hdGVzKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGVzdCBpZiBzaGlwIGxlbmd0aCAyIGlzIG92ZXJsYXBwaW5nIHRoZSBvdGhlciBzaGlwcyBvbiB0aGUgYm9hcmQuIFxuICAgICAgICAgICAgICAgICAgICBsZXQgY29vcmRpbmF0ZXNOb3RPdmVybGFwcGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb29yZGluYXRlc1trZXldKTsgLy8gVGVzdGluZyBcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUoIWNvb3JkaW5hdGVzTm90T3ZlcmxhcHBpbmcpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoKGNvb3JkaW5hdGVzW2tleV1bMF0gPT09IHhDb29yZFJhbmRvbSAmJiBjb29yZGluYXRlc1trZXldWzFdID09PSB5Q29vcmRSYW5kb20pIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKGNvb3JkaW5hdGVzW2tleV1bMF0gPT09ICh4Q29vcmRSYW5kb20gKyB4TGVuZ3RoT25lKSAmJiBjb29yZGluYXRlc1trZXldWzFdID09PSAoeUNvb3JkUmFuZG9tICsgeUxlbmd0aE9uZSkpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKGNvb3JkaW5hdGVzW2tleV1bMF0gPT09ICh4Q29vcmRSYW5kb20gKyB4TGVuZ3RoVHdvKSAmJiBjb29yZGluYXRlc1trZXldWzFdID09PSAoeUNvb3JkUmFuZG9tICsgeUxlbmd0aFR3bykpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKGNvb3JkaW5hdGVzW2tleV1bMF0gPT09ICh4Q29vcmRSYW5kb20gKyB4TGVuZ3RoVGhyZWUpICYmIGNvb3JkaW5hdGVzW2tleV1bMV0gPT09ICh5Q29vcmRSYW5kb20gKyB5TGVuZ3RoVGhyZWUpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICB8fCAoKGNvb3JkaW5hdGVzW2tleV1bMF0gPT09IHhDb29yZFJhbmRvbSAmJiBjb29yZGluYXRlc1trZXldWzFdID09PSB5Q29vcmRSYW5kb20pICYmIFxuICAgICAgICAgICAgICAgICAgICAgICAgIChjb29yZGluYXRlc1trZXldWzBdID09PSAoeENvb3JkUmFuZG9tICsgeExlbmd0aE9uZSkgJiYgY29vcmRpbmF0ZXNba2V5XVsxXSA9PT0gKHlDb29yZFJhbmRvbSArIHlMZW5ndGhPbmUpKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgIChjb29yZGluYXRlc1trZXldWzBdID09PSAoeENvb3JkUmFuZG9tICsgeExlbmd0aFR3bykgJiYgY29vcmRpbmF0ZXNba2V5XVsxXSA9PT0gKHlDb29yZFJhbmRvbSArIHlMZW5ndGhUd28pKSAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAoY29vcmRpbmF0ZXNba2V5XVswXSA9PT0gKHhDb29yZFJhbmRvbSArIHhMZW5ndGhUaHJlZSkgJiYgY29vcmRpbmF0ZXNba2V5XVsxXSA9PT0gKHlDb29yZFJhbmRvbSArIHlMZW5ndGhUaHJlZSkpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb21wdXRlclJvd3MubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZm91bmRcIik7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXNOb3RPdmVybGFwcGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0b3AgdGhlIGNvb3JkaW5hdGVzIGZyb20gbGVhdmluZyB0aGUgYm9hcmQgaWYgdGhleSBhcmUgY2hhbmdlZC4gXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHhDb29yZFJhbmRvbSArIDMpID49IDEwIHx8ICh5Q29vcmRSYW5kb20gKyAzKSA+PSAxMClcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb21wdXRlclJvd3MubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgY29tcHV0ZXJDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNvbXB1dGVyLWdhbWVib2FyZCA+IGRpdiA+IGRpdltkYXRhLXg9XCIke3hDb29yZFJhbmRvbX1cIl1bZGF0YS15PVwiJHt5Q29vcmRSYW5kb219XCJdYCk7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wdXRlckNlbGxPbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY29tcHV0ZXItZ2FtZWJvYXJkID4gZGl2ID4gZGl2W2RhdGEteD1cIiR7eENvb3JkUmFuZG9tICsgeExlbmd0aE9uZX1cIl1bZGF0YS15PVwiJHt5Q29vcmRSYW5kb20gKyB5TGVuZ3RoT25lfVwiXWApOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICAgICAgY29uc3QgY29tcHV0ZXJDZWxsVHdvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNvbXB1dGVyLWdhbWVib2FyZCA+IGRpdiA+IGRpdltkYXRhLXg9XCIke3hDb29yZFJhbmRvbSArIHhMZW5ndGhUd299XCJdW2RhdGEteT1cIiR7eUNvb3JkUmFuZG9tICsgeUxlbmd0aFR3b31cIl1gKTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVyQ2VsbFRocmVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNvbXB1dGVyLWdhbWVib2FyZCA+IGRpdiA+IGRpdltkYXRhLXg9XCIke3hDb29yZFJhbmRvbSArIHhMZW5ndGhUaHJlZX1cIl1bZGF0YS15PVwiJHt5Q29vcmRSYW5kb20gKyB5TGVuZ3RoVGhyZWV9XCJdYCk7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb21wdXRlckNlbGwpOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29tcHV0ZXJDZWxsT25lKTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbXB1dGVyQ2VsbFR3byk7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb21wdXRlckNlbGxUaHJlZSk7IC8vIFRlc3RpbmdcblxuICAgICAgICAgICAgICAgIGlmICgoeENvb3JkUmFuZG9tICsgMykgPj0gMTAgfHwgKHlDb29yZFJhbmRvbSArIDMpID49IDEwKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb29yZGluYXRlcyBhcmUgb2ZmIHRoZSBib2FyZC5cIik7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJYOiBcIiwgeENvb3JkUmFuZG9tICsgMyk7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJZOiBcIiwgeUNvb3JkUmFuZG9tICsgMyk7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1xcbicpOyAvLyBUZXN0aW5nICBcblxuICAgICAgICAgICAgICAgICAgICB4Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb21wdXRlclJvd3MubGVuZ3RoKTsgXG4gICAgICAgICAgICAgICAgICAgIHlDb29yZFJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNvbXB1dGVyQ2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbXB1dGVyLXNoaXAtcGxhY2VkJykgfHwgY29tcHV0ZXJDZWxsT25lLmNsYXNzTGlzdC5jb250YWlucygnY29tcHV0ZXItc2hpcC1wbGFjZWQnKSB8fCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXB1dGVyQ2VsbFR3by5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbXB1dGVyLXNoaXAtcGxhY2VkJykgfHwgY29tcHV0ZXJDZWxsVGhyZWUuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb21wdXRlci1zaGlwLXBsYWNlZCcpKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaGVyZSBpcyBhbiBvdmVybGFwLlwiKTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgICAgICAgICB4Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb21wdXRlclJvd3MubGVuZ3RoKTsgXG4gICAgICAgICAgICAgICAgICAgIHlDb29yZFJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTGVhdmluZy4uLlwiKTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlxcblwiKTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgICAgICAgICBjb21wdXRlclNoaXBQbGFjZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpOyAvLyBUZXN0aW5nIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBjb21wdXRlckNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY29tcHV0ZXItZ2FtZWJvYXJkID4gZGl2ID4gZGl2W2RhdGEteD1cIiR7eENvb3JkUmFuZG9tfVwiXVtkYXRhLXk9XCIke3lDb29yZFJhbmRvbX1cIl1gKTsgXG4gICAgICAgICAgICBjb21wdXRlckNlbGwuY2xhc3NMaXN0LmFkZCgnY29tcHV0ZXItc2hpcC1wbGFjZWQnKTtcbiAgICAgICAgICAgIGNvbXB1dGVyQ2VsbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQtY29sb3I6IG9yYW5nZTsnKTtcblxuICAgICAgICAgICAgY29uc3QgY29tcHV0ZXJDZWxsT25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNvbXB1dGVyLWdhbWVib2FyZCA+IGRpdiA+IGRpdltkYXRhLXg9XCIke3hDb29yZFJhbmRvbSArIHhMZW5ndGhPbmV9XCJdW2RhdGEteT1cIiR7eUNvb3JkUmFuZG9tICsgeUxlbmd0aE9uZX1cIl1gKTtcbiAgICAgICAgICAgIGNvbXB1dGVyQ2VsbE9uZS5jbGFzc0xpc3QuYWRkKCdjb21wdXRlci1zaGlwLXBsYWNlZCcpO1xuICAgICAgICAgICAgY29tcHV0ZXJDZWxsT25lLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlOycpO1xuXG4gICAgICAgICAgICBjb25zdCBjb21wdXRlckNlbGxUd28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY29tcHV0ZXItZ2FtZWJvYXJkID4gZGl2ID4gZGl2W2RhdGEteD1cIiR7eENvb3JkUmFuZG9tICsgeExlbmd0aFR3b31cIl1bZGF0YS15PVwiJHt5Q29vcmRSYW5kb20gKyB5TGVuZ3RoVHdvfVwiXWApO1xuICAgICAgICAgICAgY29tcHV0ZXJDZWxsVHdvLmNsYXNzTGlzdC5hZGQoJ2NvbXB1dGVyLXNoaXAtcGxhY2VkJyk7IFxuICAgICAgICAgICAgY29tcHV0ZXJDZWxsVHdvLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlOycpO1xuXG4gICAgICAgICAgICBjb25zdCBjb21wdXRlckNlbGxUaHJlZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXYgPiBkaXZbZGF0YS14PVwiJHt4Q29vcmRSYW5kb20gKyB4TGVuZ3RoVGhyZWV9XCJdW2RhdGEteT1cIiR7eUNvb3JkUmFuZG9tICsgeUxlbmd0aFRocmVlfVwiXWApO1xuICAgICAgICAgICAgY29tcHV0ZXJDZWxsVGhyZWUuY2xhc3NMaXN0LmFkZCgnY29tcHV0ZXItc2hpcC1wbGFjZWQnKTtcbiAgICAgICAgICAgIGNvbXB1dGVyQ2VsbFRocmVlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlOycpOyBcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG4vLyBJbnRlZmFjZURPTSgpOiBJbnRlcmZhY2Ugc2VjdGlvbiBmb3IgdGhlIHVzZXIuIFxuZnVuY3Rpb24gSW50ZXJmYWNlRE9NKCl7XG4gICAgY29uc3QgZ2FtZWJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVib2FyZC1jb250YWluZXInKTtcbiAgICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5ZXItb25lLWJvYXJkID4gZGl2ID4gZGl2Jyk7XG5cbiAgICBjb25zdCBwbGF5ZXJJbnRlcmZhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwbGF5ZXJJbnRlcmZhY2UuY2xhc3NMaXN0LmFkZCgnaW50ZXJmYWNlJyk7XG5cbiAgICBjb25zdCBuZXdHYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbmV3R2FtZS50ZXh0Q29udGVudCA9ICdOZXcgR2FtZSc7XG5cbiAgICBjb25zdCBwbGFjZVNoaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTsgXG4gICAgcGxhY2VTaGlwLnRleHRDb250ZW50ID0gYFBsYWNlIFNoaXBgO1xuXG4gICAgY29uc3QgY29vcmRpbmF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHhDb29yZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHhDb29yZC50ZXh0Q29udGVudCA9ICd4JztcbiAgICBjb25zdCB5Q29vcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB5Q29vcmQudGV4dENvbnRlbnQgPSAneSc7IFxuICAgIGNvb3JkaW5hdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoeENvb3JkKTtcbiAgICBjb29yZGluYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKHlDb29yZCk7IFxuXG4gICAgY29uc3QgbnVtYmVyT2ZTaGlwc1BsYWNlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG51bWJlck9mU2hpcHNQbGFjZWQuY2xhc3NMaXN0LmFkZCgnbnVtYmVyLW9mLXNoaXBzJyk7IFxuXG4gICAgcGxheWVySW50ZXJmYWNlLmFwcGVuZENoaWxkKG5ld0dhbWUpO1xuICAgIHBsYXllckludGVyZmFjZS5hcHBlbmRDaGlsZChwbGFjZVNoaXApO1xuICAgIHBsYXllckludGVyZmFjZS5hcHBlbmRDaGlsZChjb29yZGluYXRlQ29udGFpbmVyKTsgXG4gICAgcGxheWVySW50ZXJmYWNlLmFwcGVuZENoaWxkKG51bWJlck9mU2hpcHNQbGFjZWQpOyBcbiAgICBnYW1lYm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVySW50ZXJmYWNlKTtcblxuICAgIG5ld0dhbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBOZXdHYW1lKTtcblxuICAgIC8vIHBsYWNlU2hpcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgIC8vICAgICBTaGlwRGF0YS5wbGFjZW1lbnRDb21tZW5jZWQgPSB0cnVlOyAgXG4gICAgLy8gICAgIE51bWJlck9mU2hpcHNQbGFjZWQoKTsgXG4gICAgLy8gICAgIFBsYWNlU2hpcHMoZSk7XG4gICAgLy8gfSk7XG5cbiAgICB4Q29vcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAoTmV3R2FtZVNlbGVjdGVkLm5ld0dhbWVTZWxlY3RlZClcbiAgICAgICAge1xuICAgICAgICAgICAgQXhpc0NoYW5nZS5heGlzV2FzQ2hhbmdlZCA9IHRydWU7IFxuICAgICAgICAgICAgQXhpc0NoYW5nZS5heGlzQ2hhbmdlID0gMTsgXG4gICAgICAgICAgICB5Q29vcmQuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudC1jb29yZGluYXRlJyk7IFxuICAgICAgICAgICAgeENvb3JkLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQtY29vcmRpbmF0ZScpOyBcbiAgICAgICAgICAgIFBsYWNlU2hpcHMoZSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHlDb29yZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmIChOZXdHYW1lU2VsZWN0ZWQubmV3R2FtZVNlbGVjdGVkKVxuICAgICAgICB7XG4gICAgICAgICAgICBBeGlzQ2hhbmdlLmF4aXNXYXNDaGFuZ2VkID0gdHJ1ZTsgXG4gICAgICAgICAgICBBeGlzQ2hhbmdlLmF4aXNDaGFuZ2UgPSAyOyBcbiAgICAgICAgICAgIHhDb29yZC5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50LWNvb3JkaW5hdGUnKTtcbiAgICAgICAgICAgIHlDb29yZC5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LWNvb3JkaW5hdGUnKTtcbiAgICAgICAgICAgIFBsYWNlU2hpcHMoZSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIHhDb29yZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIENoYW5nZVRvWEF4aXMpO1xuXG4gICAgLy8geUNvb3JkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgQ2hhbmdlVG9ZQXhpcyk7XG59XG5cbi8vIE5ld0dhbWUoKTogV2lsbCBiZWdpbiBhIG5ldyBnYW1lIGZvciB0aGUgcGxheWVyLiBcbmZ1bmN0aW9uIE5ld0dhbWUoKXtcbiAgICBjb25zb2xlLmxvZygnUGxheWVyIGJlZ2lucyBhIG5ldyBnYW1lLicpOyAvLyBUZXN0aW5nIFxuICAgIGNvbnNvbGUubG9nKCdcXG4nKTsgLy8gVGVzdGluZyBcblxuICAgIC8vIFRPRE86IFJlc2V0IGFsbCB0aGUgZ2FtZSBhdHRyaWJ1dGVzIGluIHRoaXMgZnVuY3Rpb24gd2hlbiB0aGVcbiAgICAvLyB1c2VyIHdhbnRzIHRvIHN0YXJ0IGEgbmV3IGdhbWUuIFxuXG4gICAgTmV3R2FtZVNlbGVjdGVkLm5ld0dhbWVTZWxlY3RlZCA9IHRydWU7IFxuICAgIFBsYWNlU2hpcHMoKTsgXG59XG5cbi8vIEhvdmVyVGVzdERPTSgpOiBUaGUgaG92ZXIgdGVzdCBvbiB0aGUgYm9hcmQuXG5mdW5jdGlvbiBBeGlzRE9NKGUpe1xuICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheWVyLW9uZS1ib2FyZCA+IGRpdiA+IGRpdicpO1xuICAgIGNvbnNvbGUubG9nKCdDZWxsczogJywgY2VsbCk7IC8vIFRlc3RpbmdcblxuICAgIC8vIGNvbnN0IHhDb29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lYm9hcmQtY29udGFpbmVyID4gZGl2Om50aC1jaGlsZCgxKSA+IGRpdiA+IGJ1dHRvbjpudGgtY2hpbGQoMSknKTtcbiAgICAvLyBjb25zb2xlLmxvZyh4Q29vcmQpOyAvLyBUZXN0aW5nIFxuICAgIC8vIGNvbnN0IHlDb29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lYm9hcmQtY29udGFpbmVyID4gZGl2Om50aC1jaGlsZCgxKSA+IGRpdiA+IGJ1dHRvbjpudGgtY2hpbGQoMiknKTsgXG4gICAgLy8gY29uc29sZS5sb2coeUNvb3JkKTsgLy8gVGVzdGluZ1xuXG4gICAgLy8gVGVzdGluZyBmb3IgeUNvb3JkOlxuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgY2VsbC5sZW5ndGg7IGkrKylcbiAgICAvLyB7XG4gICAgLy8gICAgIGNlbGxbaV0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcbiAgICAvLyAgICAgICAgIGlmICghKHBhcnNlSW50KGNlbGxbaV0uZGF0YXNldC54KSA9PT0gOSkpXG4gICAgLy8gICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgY2VsbFtpXS5jbGFzc0xpc3QuYWRkKCdob3Zlci10ZXN0Jyk7XG4gICAgLy8gICAgICAgICAgICAgY2VsbFtpICsgMTBdLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXRlc3QnKTsgXG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH1cblxuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgY2VsbC5sZW5ndGg7IGkrKylcbiAgICAvLyB7XG4gICAgLy8gICAgIGNlbGxbaV0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAvLyAgICAgICAgIGlmIChjZWxsW2ldLmNsYXNzTGlzdC5jb250YWlucygnaG92ZXItdGVzdCcpKVxuICAgIC8vICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgIGNlbGxbaV0uY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItdGVzdCcpO1xuICAgIC8vICAgICAgICAgICAgIGNlbGxbaSArIDEwXS5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci10ZXN0Jyk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH1cblxuICAgIC8vIFRlc3RpbmcgZm9yIHhDb29yZDpcbiAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IGNlbGwubGVuZ3RoOyBpKyspXG4gICAgLy8ge1xuICAgIC8vICAgICBpZiAoIUF4aXNDaGFuZ2UueUF4aXNDaGFuZ2UpXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICAgIGNlbGxbaV0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcbiAgICAvLyAgICAgICAgICAgICBpZiAoIShwYXJzZUludChjZWxsW2ldLmRhdGFzZXQueCA9PT0gOSkpICYmICEocGFyc2VJbnQoY2VsbFtpXS5kYXRhc2V0LnkpID09PSA5KSlcbiAgICAvLyAgICAgICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGNlbGxbaV0uY2xhc3NMaXN0LmFkZCgnaG92ZXItdGVzdCcpO1xuICAgIC8vICAgICAgICAgICAgICAgICBjZWxsW2kgKyAxXS5jbGFzc0xpc3QuYWRkKCdob3Zlci10ZXN0Jyk7XG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgfSk7XG4gICAgXG4gICAgLy8gICAgICAgICBjZWxsW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdYOiAnLCBjZWxsW2ldLmRhdGFzZXQueCk7IC8vIFRlc3RpbmdcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZygnWTogJywgY2VsbFtpXS5kYXRhc2V0LnkpOyAvLyBUZXN0aW5nXG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coJ1gyOiAnLCBjZWxsW2kgKyAxXS5kYXRhc2V0LngpOyAvLyBUZXN0aW5nXG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coJ1gzOiAnLCBjZWxsW2kgKyAxXS5kYXRhc2V0LnkpOyAvLyBUZXN0aW5nIFxuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdcXG4nKTsgLy8gVGVzdGluZ1xuICAgIC8vICAgICAgICAgfSk7XG5cbiAgICAvLyAgICAgICAgIGNlbGxbaV0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAvLyAgICAgICAgICAgICBpZiAoY2VsbFtpXS5jbGFzc0xpc3QuY29udGFpbnMoJ2hvdmVyLXRlc3QnKSlcbiAgICAvLyAgICAgICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGNlbGxbaV0uY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItdGVzdCcpO1xuICAgIC8vICAgICAgICAgICAgICAgICBjZWxsW2kgKyAxXS5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci10ZXN0Jyk7ICAgIFxuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH0pO1xuICAgIC8vICAgICB9XG5cbiAgICAvLyB9XG5cbiAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IGNlbGwubGVuZ3RoOyBpKyspXG4gICAgLy8ge1xuICAgIC8vICAgICBjZWxsW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgLy8gICAgICAgICBpZiAoY2VsbFtpXS5jbGFzc0xpc3QuY29udGFpbnMoJ2hvdmVyLXRlc3QnKSlcbiAgICAvLyAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICBjZWxsW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTtcbiAgICAvLyAgICAgICAgICAgICBjZWxsW2kgKyAxXS5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci10ZXN0Jyk7ICAgIFxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9KTtcbiAgICAvLyB9XG59XG5cbi8vIENoYW5nZVRvWEF4aXMoKTogV2lsbCBjaGFuZ2UgdGhlIGF4aXMgc2VsZWN0aW9uIG9mIHRoZSBnYW1lYm9hcmQgdG8gdGhlIHgtYXhpcy5cbmZ1bmN0aW9uIENoYW5nZVRvWEF4aXMoKXtcbiAgICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5ZXItb25lLWJvYXJkID4gZGl2ID4gZGl2Jyk7XG4gICAgY29uc3QgeUNvb3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVib2FyZC1jb250YWluZXIgPiBkaXY6bnRoLWNoaWxkKDEpID4gZGl2ID4gYnV0dG9uOm50aC1jaGlsZCgyKScpO1xuXG4gICAgQXhpc1NlbGVjdGVkLmF4aXNTZWxlY3RlZCA9IHRydWU7IFxuICAgIGNvbnNvbGUubG9nKCdYIG9yIFkgQXhpcyBoYXMgYmVlbiBzZWxlY3RlZDogJywgQXhpc1NlbGVjdGVkLmF4aXNTZWxlY3RlZCk7IC8vIFRlc3RpbmdcblxuICAgIC8vIFJlbW92ZSBFbnRlclkgYW5kIExlYXZlWSBFdmVudCBMaXN0ZW5lcnMgXG4gICAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBFbnRlclkpO1xuICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBMZWF2ZVkpO1xuICAgIH0pO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjZWxscy5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICAgIGNlbGxzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBFbnRlclgpO1xuXG4gICAgICAgIGNlbGxzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBMZWF2ZVgpO1xuICAgIH1cbn1cblxuLy8gRW50ZXJYKCk6IFdpbGwgZW50ZXIgZWFjaCBjZWxsIG9uIHRoZSB4LWF4aXMgc2VsZWN0aW9uLiBcbmZ1bmN0aW9uIEVudGVyWChlKXtcbiAgICBjb25zb2xlLmxvZyhlKTsgLy8gVGVzdGluZyBcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldCk7IC8vIFRlc3RpbmcgXG4gICAgY29uc29sZS5sb2coZS50YXJnZXQuZGF0YXNldC54KTsgLy8gVGVzdGluZyBcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5kYXRhc2V0LnkpOyAvLyBUZXN0aW5nXG4gICAgY29uc29sZS5sb2coJ1xcbicpOyAvLyBUZXN0aW5nXG4gXG4gICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke2UudGFyZ2V0LmRhdGFzZXQueH1cIl1bZGF0YS15PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnl9XCJdYCk7XG4gICAgY29uc3QgbmV4dENlbGxPbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnh9XCJdW2RhdGEteT1cIiR7cGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC55KSArIDF9XCJdYCk7XG4gICAgY29uc3QgbmV4dENlbGxUd28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnh9XCJdW2RhdGEteT1cIiR7cGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC55KSArIDJ9XCJdYCk7XG4gICAgY29uc3QgbmV4dENlbGxUaHJlZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke2UudGFyZ2V0LmRhdGFzZXQueH1cIl1bZGF0YS15PVwiJHtwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnkpICsgM31cIl1gKTtcblxuICAgIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAwKVxuICAgIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdob3Zlci10ZXN0Jyk7IFxuICAgIH1cbiAgICBlbHNlIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAxKSAvLyBUaGUgc2hpcCBsZW5ndGggdG8gYmUgcGxhY2VkIG9uIHRoZSBib2FyZC5cbiAgICB7XG4gICAgICAgIGlmICghKHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueSkgPT09IDkpKSAvLyBLZWVwcyBhbGwgc2hpcCBwbGFjZW1lbnRzIG9uIHRoZSBnYW1lYm9hcmQuIFxuICAgICAgICB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXRlc3QnKTtcblxuICAgICAgICAgICAgY29uc3QgbmV4dENlbGxPbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnh9XCJdW2RhdGEteT1cIiR7cGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC55KSArIDF9XCJdYCk7XG4gICAgICAgICAgICBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuYWRkKCdob3Zlci10ZXN0Jyk7IFxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKFNoaXBEYXRhLnNoaXBMZW5ndGggPT09IDIpXG4gICAge1xuICAgICAgICBpZiAoISgocGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC55KSArIDIpID09PSAxMCkgJiYgISgocGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC55KSArIDEpID09PSA5KSAmJiAhKHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueSkgPT09IDkpKVxuICAgICAgICB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgICAgIG5leHRDZWxsT25lLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXRlc3QnKTsgXG4gICAgICAgICAgICBuZXh0Q2VsbFR3by5jbGFzc0xpc3QuYWRkKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoU2hpcERhdGEuc2hpcExlbmd0aCA9PT0gMylcbiAgICB7XG4gICAgICAgIGlmICghKChwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnkpICsgMykgPT09IDEwKSAmJiAhKChwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnkpICsgMikgPT09IDkpICYmICEoKHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueSkgKyAxKSA9PT0gOSkgJiYgIShwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnkpID09PSA5KSlcbiAgICAgICAge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgICAgICBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuYWRkKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgICAgICBuZXh0Q2VsbFR3by5jbGFzc0xpc3QuYWRkKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgICAgICBuZXh0Q2VsbFRocmVlLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIE5vdGU6IEkgY291bGQgcHV0IHRoaXMgaW4gaXRzIG93biBmdW5jdGlvbiwgYnV0IGZvciBub3cgSSB3aWxsIHVzZSB0aGUgRW50ZXJYIGZ1bmN0aW9uIHRvIHRlc3RcbiAgICAvLyB0aGlzIGFsb2dvcml0aG0gb3V0LiBJdCB3b3VsZCBiZSBhIGxvdCBtb3JlIGVmZmVjaWVudCB0byBwbGFjZSB0aGlzIGluIGFub3RoZXIgZnVuY3Rpb25cbiAgICAvLyBzbyB5b3UgY2FuIHJlbW92ZSBjbGljayBldmVudC4gWW91IHNob3VsZCBwdXQgdGhlbSBpbiB0aGUgUGxhY2VPblgoKSBhbmQgUGxhY2VPblkoKSBmdW5jdGlvbnMuIEJ1dFxuICAgIC8vIGZvciBub3cgeW91IGNhbiB1c2UgdGhlIFNoaXBEYXRhLmxlbmd0aEluZGV4IHByb3BlcnR5IGluIHRoZSBpZiBzdGF0ZW1lbnQgY29uZGl0aW9uLiBcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnWDogJywgY2VsbC5kYXRhc2V0LngpOyBcbiAgICAgICAgY29uc29sZS5sb2coJ1k6ICcsIGNlbGwuZGF0YXNldC55KTsgXG4gICAgICAgIC8vIFRPRE86IFNoaXAgcGxhY2VtZW50IG9uIHRoZSBib2FyZCBjYW4gYmUgZG9uZSBpbnNpZGUgdGhpcyBmdW5jdGlvbi4gXG5cbiAgICAgICAgaWYgKFNoaXBEYXRhLnNoaXBMZW5ndGggPT09IDAgJiYgU2hpcERhdGEubGVuZ3RoSW5kZXggPCAxMCkgXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmIChjZWxsLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSkgLy8gQ2FudCBwbGFjZSB0aGUgc2hpcCBvbiB0aGlzIGNlbGwgd2hlbiB0aGVyZSBpcyBvbmUgYWxyZWFkeSBvbiB0aGUgY2VsbC4gXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NlbGwgYWxyZWFkeSBjb250YWlucyBhIHNoaXAnKTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcC1wbGFjZWQnKTsgXG4gICAgICAgICAgICAgICAgUGxhY2VkU2hpcHNbYHNoaXAgJHtTaGlwRGF0YS5sZW5ndGhJbmRleH1gXS5jb29yZGluYXRlcyA9IHswOiBbcGFyc2VJbnQoY2VsbC5kYXRhc2V0LngpLCBwYXJzZUludChjZWxsLmRhdGFzZXQueSldfTtcbiAgICAgICAgICAgICAgICBTaGlwRGF0YS5sZW5ndGhJbmRleCsrOyBcbiAgICAgICAgICAgICAgICBBeGlzQ2hhbmdlLmF4aXNXYXNDaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgUGxhY2VTaGlwcygpOyBcbiAgICAgICAgICAgIH0gICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoU2hpcERhdGEuc2hpcExlbmd0aCA9PT0gMSAmJiBTaGlwRGF0YS5sZW5ndGhJbmRleCA8IDEwKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoKGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpICYmIG5leHRDZWxsT25lLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSkgXG4gICAgICAgICAgICB8fCAoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgfHwgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ2VsbCBhbHJlYWR5IGNvbnRhaW5zIGEgc2hpcCcpOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlZCcpO1xuICAgICAgICAgICAgICAgIG5leHRDZWxsT25lLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VkJyk7XG4gICAgICAgICAgICAgICAgUGxhY2VkU2hpcHNbYHNoaXAgJHtTaGlwRGF0YS5sZW5ndGhJbmRleH1gXS5jb29yZGluYXRlcyA9IHswOiBbcGFyc2VJbnQoY2VsbC5kYXRhc2V0LngpLCBwYXJzZUludChjZWxsLmRhdGFzZXQueSldLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDE6IFtwYXJzZUludChuZXh0Q2VsbE9uZS5kYXRhc2V0LngpLCBwYXJzZUludChuZXh0Q2VsbE9uZS5kYXRhc2V0LnkpXX07XG4gICAgICAgICAgICAgICAgU2hpcERhdGEubGVuZ3RoSW5kZXgrKztcbiAgICAgICAgICAgICAgICBBeGlzQ2hhbmdlLmF4aXNXYXNDaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgUGxhY2VTaGlwcygpOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAyICYmIFNoaXBEYXRhLmxlbmd0aEluZGV4IDwgMTApXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICgoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgJiYgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpICYmIG5leHRDZWxsVHdvLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSkgXG4gICAgICAgICAgICB8fCAoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgfHwgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpIHx8IG5leHRDZWxsVHdvLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NlbGwgYWxyZWFkeSBjb250YWlucyBhIHNoaXAnKTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcC1wbGFjZWQnKTtcbiAgICAgICAgICAgICAgICBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlZCcpO1xuICAgICAgICAgICAgICAgIG5leHRDZWxsVHdvLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VkJyk7XG4gICAgICAgICAgICAgICAgUGxhY2VkU2hpcHNbYHNoaXAgJHtTaGlwRGF0YS5sZW5ndGhJbmRleH1gXS5jb29yZGluYXRlcyA9IHswOiBbcGFyc2VJbnQoY2VsbC5kYXRhc2V0LngpLCBwYXJzZUludChjZWxsLmRhdGFzZXQueSldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTogW3BhcnNlSW50KG5leHRDZWxsT25lLmRhdGFzZXQueCksIHBhcnNlSW50KG5leHRDZWxsT25lLmRhdGFzZXQueSldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMjogW3BhcnNlSW50KG5leHRDZWxsVHdvLmRhdGFzZXQueCksIHBhcnNlSW50KG5leHRDZWxsVHdvLmRhdGFzZXQueSldfTtcbiAgICAgICAgICAgICAgICBTaGlwRGF0YS5sZW5ndGhJbmRleCsrO1xuICAgICAgICAgICAgICAgIEF4aXNDaGFuZ2UuYXhpc1dhc0NoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBQbGFjZVNoaXBzKCk7IFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKFNoaXBEYXRhLnNoaXBMZW5ndGggPT09IDMgJiYgU2hpcERhdGEubGVuZ3RoSW5kZXggPCAxMClcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKChjZWxsLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSAmJiBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgJiYgbmV4dENlbGxUd28uY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpICYmIG5leHRDZWxsVGhyZWUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpKVxuICAgICAgICAgICAgfHwgKGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpIHx8IG5leHRDZWxsT25lLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSB8fCBuZXh0Q2VsbFR3by5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgfHwgbmV4dENlbGxUaHJlZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDZWxsIGFscmVhZHkgY29udGFpbnMgYSBzaGlwJyk7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VkJyk7XG4gICAgICAgICAgICAgICAgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmFkZCgnc2hpcC1wbGFjZWQnKTtcbiAgICAgICAgICAgICAgICBuZXh0Q2VsbFR3by5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlZCcpO1xuICAgICAgICAgICAgICAgIG5leHRDZWxsVGhyZWUuY2xhc3NMaXN0LmFkZCgnc2hpcC1wbGFjZWQnKTtcbiAgICAgICAgICAgICAgICBQbGFjZWRTaGlwc1tgc2hpcCAke1NoaXBEYXRhLmxlbmd0aEluZGV4fWBdLmNvb3JkaW5hdGVzID0gezA6IFtwYXJzZUludChjZWxsLmRhdGFzZXQueCksIHBhcnNlSW50KGNlbGwuZGF0YXNldC55KV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxOiBbcGFyc2VJbnQobmV4dENlbGxPbmUuZGF0YXNldC54KSwgcGFyc2VJbnQobmV4dENlbGxPbmUuZGF0YXNldC55KV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyOiBbcGFyc2VJbnQobmV4dENlbGxUd28uZGF0YXNldC54KSwgcGFyc2VJbnQobmV4dENlbGxUd28uZGF0YXNldC55KV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzOiBbcGFyc2VJbnQobmV4dENlbGxUaHJlZS5kYXRhc2V0LngpLCBwYXJzZUludChuZXh0Q2VsbFRocmVlLmRhdGFzZXQueSldfTtcbiAgICAgICAgICAgICAgICBTaGlwRGF0YS5sZW5ndGhJbmRleCsrOyBcbiAgICAgICAgICAgICAgICBBeGlzQ2hhbmdlLmF4aXNXYXNDaGFuZ2VkID0gZmFsc2U7IFxuICAgICAgICAgICAgICAgIFBsYWNlU2hpcHMoKTsgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gIFxuICAgIH0pO1xufVxuXG4vLyBQbGFjZU9uWCgpOiBXaWxsIHBsYWNlIGEgc2hpcCBvbiB0aGUgZ2FtZWJvYXJkcyB4LWF4aXMuXG5mdW5jdGlvbiBQbGFjZU9uWCgpe1xuICAgIC8vIFN0YXRlbWVudHMuLi5cbn0gXG5cbi8vIExlYXZlWCgpOiBXaWxsIGxlYXZlIGVhY2ggY2VsbCBmcm9tIHRoZSB4LWF4aXMgc2VsZWN0aW9uLiBcbmZ1bmN0aW9uIExlYXZlWChlKXtcbiAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7ZS50YXJnZXQuZGF0YXNldC54fVwiXVtkYXRhLXk9XCIke2UudGFyZ2V0LmRhdGFzZXQueX1cIl1gKTtcbiAgICBjb25zdCBuZXh0Q2VsbE9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke2UudGFyZ2V0LmRhdGFzZXQueH1cIl1bZGF0YS15PVwiJHtwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnkpICsgMX1cIl1gKTtcbiAgICBjb25zdCBuZXh0Q2VsbFR3byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke2UudGFyZ2V0LmRhdGFzZXQueH1cIl1bZGF0YS15PVwiJHtwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnkpICsgMn1cIl1gKTtcbiAgICBjb25zdCBuZXh0Q2VsbFRocmVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7ZS50YXJnZXQuZGF0YXNldC54fVwiXVtkYXRhLXk9XCIke3BhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueSkgKyAzfVwiXWApO1xuXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaG92ZXItdGVzdCcpKVxuICAgIHtcbiAgICAgICAgaWYgKFNoaXBEYXRhLnNoaXBMZW5ndGggPT09IDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItdGVzdCcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKFNoaXBEYXRhLnNoaXBMZW5ndGggPT09IDEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItdGVzdCcpO1xuICAgICAgICAgICAgbmV4dENlbGxPbmUuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItdGVzdCcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKFNoaXBEYXRhLnNoaXBMZW5ndGggPT09IDIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItdGVzdCcpO1xuICAgICAgICAgICAgbmV4dENlbGxPbmUuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItdGVzdCcpO1xuICAgICAgICAgICAgbmV4dENlbGxUd28uY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItdGVzdCcpOyBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAzKVxuICAgICAgICB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgICAgIG5leHRDZWxsT25lLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgICAgIG5leHRDZWxsVHdvLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgICAgIG5leHRDZWxsVGhyZWUuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItdGVzdCcpOyBcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gQ2hhbmdlVG9ZQXhpcygpOiBXaWxsIGNoYW5nZSB0aGUgYXhpcyBzZWxlY3Rpb24gb24gdGhlIGdhbWVib2FyZCB0byB0aGUgeS1heGlzLiBcbmZ1bmN0aW9uIENoYW5nZVRvWUF4aXMoKXtcbiAgICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5ZXItb25lLWJvYXJkID4gZGl2ID4gZGl2Jyk7IFxuICAgIGNvbnN0IHhDb29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lYm9hcmQtY29udGFpbmVyID4gZGl2Om50aC1jaGlsZCgxKSA+IGRpdiA+IGJ1dHRvbjpudGgtY2hpbGQoMSknKTtcblxuICAgIEF4aXNTZWxlY3RlZC5heGlzU2VsZWN0ZWQgPSB0cnVlO1xuICAgIGNvbnNvbGUubG9nKCdYIG9yIFkgYXhpcyBoYXMgYmVlbiBzZWxlY3RlZDogJywgQXhpc1NlbGVjdGVkLmF4aXNTZWxlY3RlZCk7IC8vIFRlc3RpbmcgXG4gICAgXG4gICAgLy8gUmVtb3ZlIEVudGVyWCBhbmQgTGVhdmVYIEV2ZW50IExpc3RlbmVycy5cbiAgICBjZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIEVudGVyWCk7IFxuICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBMZWF2ZVgpOyBcbiAgICB9KTsgXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNlbGxzLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgICAgY2VsbHNbaV0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIEVudGVyWSk7XG5cbiAgICAgICAgY2VsbHNbaV0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIExlYXZlWSk7XG4gICAgfVxufVxuXG4vLyBFbnRlclkoKTogV2lsbCBlbnRlciBlYWNoIGNlbGwgb24gdGhlIHktYXhpcyBzZWxlY3Rpb24uXG5mdW5jdGlvbiBFbnRlclkoZSl7XG4gICAgY29uc29sZS5sb2coZSk7IC8vIFRlc3RpbmcgXG4gICAgY29uc29sZS5sb2coZS50YXJnZXQpOyAvLyBUZXN0aW5nXG4gICAgY29uc29sZS5sb2coZS50YXJnZXQuZGF0YXNldC54KTsgLy8gVGVzdGluZ1xuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmRhdGFzZXQueSk7IC8vIFRlc3RpbmcgXG4gICAgY29uc29sZS5sb2coJ1xcbicpOyAvLyBUZXN0aW5nXG5cbiAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7ZS50YXJnZXQuZGF0YXNldC54fVwiXVtkYXRhLXk9XCIke2UudGFyZ2V0LmRhdGFzZXQueX1cIl1gKTtcbiAgICBjb25zdCBuZXh0Q2VsbE9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke3BhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueCkgKyAxfVwiXVtkYXRhLXk9XCIke2UudGFyZ2V0LmRhdGFzZXQueX1cIl1gKTtcbiAgICBjb25zdCBuZXh0Q2VsbFR3byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke3BhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueCkgKyAyfVwiXVtkYXRhLXk9XCIke2UudGFyZ2V0LmRhdGFzZXQueX1cIl1gKTtcbiAgICBjb25zdCBuZXh0Q2VsbFRocmVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7cGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC54KSArIDN9XCJdW2RhdGEteT1cIiR7ZS50YXJnZXQuZGF0YXNldC55fVwiXWApO1xuXG4gICAgaWYgKFNoaXBEYXRhLnNoaXBMZW5ndGggPT09IDApXG4gICAge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXRlc3QnKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoU2hpcERhdGEuc2hpcExlbmd0aCA9PT0gMSlcbiAgICB7XG4gICAgICAgIGlmICghKHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueCkgPT09IDkpKVxuICAgICAgICB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgICAgIG5leHRDZWxsT25lLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAyKVxuICAgIHtcbiAgICAgICAgaWYgKCEoKHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueCkgKyAyKSA9PT0gMTApICYmICEoKHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueCkgKyAxKSA9PT0gOSkgJiYgIShwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LngpID09PSA5KSlcbiAgICAgICAge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgICAgICBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuYWRkKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgICAgICBuZXh0Q2VsbFR3by5jbGFzc0xpc3QuYWRkKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoU2hpcERhdGEuc2hpcExlbmd0aCA9PT0gMylcbiAgICB7XG4gICAgICAgIGlmICghKChwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LngpICsgMykgPT09IDEwKSAmJiAhKChwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LngpICsgMikgPT09IDkpICYmICEoKHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueCkgKyAxKSA9PT0gOSkgJiYgIShwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LngpID09PSA5KSlcbiAgICAgICAge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgICAgICBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuYWRkKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgICAgICBuZXh0Q2VsbFR3by5jbGFzc0xpc3QuYWRkKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgICAgICBuZXh0Q2VsbFRocmVlLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgfVxuICAgIH0gICBcblxuICAgIC8vIFBsYWNlcyB0aGUgc2hpcHMgb24gdGhlIGJvYXJkIGNlbGxzOlxuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiWDogXCIsIGNlbGwuZGF0YXNldC54KTsgLy8gVGVzdGluZyBcbiAgICAgICAgY29uc29sZS5sb2coXCJZOiBcIiwgY2VsbC5kYXRhc2V0LnkpOyAvLyBUZXN0aW5nIFxuXG4gICAgICAgIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAwICYmIFNoaXBEYXRhLmxlbmd0aEluZGV4IDwgMTApXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmIChjZWxsLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNlbGwgYWxyZWFkeSBjb250YWlucyBhIHNoaXAuXCIpOyAvLyBUZXN0aW5nIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcC1wbGFjZWQnKTsgXG4gICAgICAgICAgICAgICAgUGxhY2VkU2hpcHNbYHNoaXAgJHtTaGlwRGF0YS5sZW5ndGhJbmRleH1gXS5jb29yZGluYXRlcyA9IHswOiBbcGFyc2VJbnQoY2VsbC5kYXRhc2V0LngpLCBwYXJzZUludChjZWxsLmRhdGFzZXQueSldfTtcbiAgICAgICAgICAgICAgICBTaGlwRGF0YS5sZW5ndGhJbmRleCsrOyBcbiAgICAgICAgICAgICAgICBBeGlzQ2hhbmdlLmF4aXNXYXNDaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgUGxhY2VTaGlwcygpOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAxICYmIFNoaXBEYXRhLmxlbmd0aEluZGV4IDwgMTApXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICgoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgJiYgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpKSBcbiAgICAgICAgICAgIHx8IChjZWxsLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSB8fCBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2VsbCBhbHJlYWR5IGNvbnRhaW5zIGEgc2hpcC5cIik7IC8vIFRlc3RpbmcgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlZCcpO1xuICAgICAgICAgICAgICAgIG5leHRDZWxsT25lLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VkJyk7IFxuICAgICAgICAgICAgICAgIFBsYWNlZFNoaXBzW2BzaGlwICR7U2hpcERhdGEubGVuZ3RoSW5kZXh9YF0uY29vcmRpbmF0ZXMgPSB7MDogW3BhcnNlSW50KGNlbGwuZGF0YXNldC54KSwgcGFyc2VJbnQoY2VsbC5kYXRhc2V0LnkpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDE6IFtwYXJzZUludChuZXh0Q2VsbE9uZS5kYXRhc2V0LngpLCBwYXJzZUludChuZXh0Q2VsbE9uZS5kYXRhc2V0LnkpXX07XG4gICAgICAgICAgICAgICAgU2hpcERhdGEubGVuZ3RoSW5kZXgrKztcbiAgICAgICAgICAgICAgICBBeGlzQ2hhbmdlLmF4aXNXYXNDaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgUGxhY2VTaGlwcygpOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAyICYmIFNoaXBEYXRhLmxlbmd0aEluZGV4IDwgMTApXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICgoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgJiYgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpICYmIG5leHRDZWxsVHdvLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSkgXG4gICAgICAgICAgICB8fCAoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgfHwgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpIHx8IG5leHRDZWxsVHdvLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDZWxsIGFscmVhZHkgY29udGFpbnMgYSBzaGlwXCIpOyAvLyBUZXN0aW5nIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcC1wbGFjZWQnKTsgXG4gICAgICAgICAgICAgICAgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmFkZCgnc2hpcC1wbGFjZWQnKTtcbiAgICAgICAgICAgICAgICBuZXh0Q2VsbFR3by5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlZCcpO1xuICAgICAgICAgICAgICAgIFBsYWNlZFNoaXBzW2BzaGlwICR7U2hpcERhdGEubGVuZ3RoSW5kZXh9YF0uY29vcmRpbmF0ZXMgPSB7MDogW3BhcnNlSW50KGNlbGwuZGF0YXNldC54KSwgcGFyc2VJbnQoY2VsbC5kYXRhc2V0LnkpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDE6IFtwYXJzZUludChuZXh0Q2VsbE9uZS5kYXRhc2V0LngpLCBwYXJzZUludChuZXh0Q2VsbE9uZS5kYXRhc2V0LnkpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDI6IFtwYXJzZUludChuZXh0Q2VsbFR3by5kYXRhc2V0LngpLCBwYXJzZUludChuZXh0Q2VsbFR3by5kYXRhc2V0LnkpXX07XG4gICAgICAgICAgICAgICAgU2hpcERhdGEubGVuZ3RoSW5kZXgrKztcbiAgICAgICAgICAgICAgICBBeGlzQ2hhbmdlLmF4aXNXYXNDaGFuZ2VkID0gZmFsc2U7IFxuICAgICAgICAgICAgICAgIFBsYWNlU2hpcHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAzICYmIFNoaXBEYXRhLmxlbmd0aEluZGV4IDwgMTApXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICgoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgJiYgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpICYmIG5leHRDZWxsVHdvLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSAmJiBuZXh0Q2VsbFRocmVlLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSlcbiAgICAgICAgICAgIHx8IChjZWxsLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSB8fCBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgfHwgbmV4dENlbGxUaHJlZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgJiYgbmV4dENlbGxUaHJlZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2VsbCBhbHJlYWR5IGNvbnRhaW5zIGEgc2hpcFwiKTsgLy8gVGVzdGluZyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlZCcpOyBcbiAgICAgICAgICAgICAgICBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlZCcpO1xuICAgICAgICAgICAgICAgIG5leHRDZWxsVHdvLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VkJyk7XG4gICAgICAgICAgICAgICAgbmV4dENlbGxUaHJlZS5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlZCcpO1xuICAgICAgICAgICAgICAgIFBsYWNlZFNoaXBzW2BzaGlwICR7U2hpcERhdGEubGVuZ3RoSW5kZXh9YF0uY29vcmRpbmF0ZXMgPSB7MDogW3BhcnNlSW50KGNlbGwuZGF0YXNldC54KSwgcGFyc2VJbnQoY2VsbC5kYXRhc2V0LnkpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDE6IFtwYXJzZUludChuZXh0Q2VsbE9uZS5kYXRhc2V0LngpLCBwYXJzZUludChuZXh0Q2VsbE9uZS5kYXRhc2V0LnkpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDI6IFtwYXJzZUludChuZXh0Q2VsbFR3by5kYXRhc2V0LngpLCBwYXJzZUludChuZXh0Q2VsbFR3by5kYXRhc2V0LnkpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDM6IFtwYXJzZUludChuZXh0Q2VsbFRocmVlLmRhdGFzZXQueCksIHBhcnNlSW50KG5leHRDZWxsVGhyZWUuZGF0YXNldC55KV19O1xuICAgICAgICAgICAgICAgIFNoaXBEYXRhLmxlbmd0aEluZGV4Kys7XG4gICAgICAgICAgICAgICAgQXhpc0NoYW5nZS5heGlzV2FzQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIFBsYWNlU2hpcHMoKTsgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuLy8gUGxhY2VPblkoKTogV2lsbCBwbGFjZSBhIHNoaXAgb24gdGhlIGdhbWVib2FyZHMgeS1heGlzLiBcbmZ1bmN0aW9uIFBsYWNlT25ZKCl7XG4gICAgLy8gU3RhdGVtZW50cy4uLlxufVxuXG4vLyBMZWF2ZVkoKTogV2lsbCBsZWF2ZSBlYWNoIGNlbGwgZnJvbSB0aGUgeS1heGlzIHNlbGVjdGlvbi5cbmZ1bmN0aW9uIExlYXZlWShlKXtcbiAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7ZS50YXJnZXQuZGF0YXNldC54fVwiXVtkYXRhLXk9XCIke2UudGFyZ2V0LmRhdGFzZXQueX1cIl1gKTtcbiAgICBjb25zdCBuZXh0Q2VsbE9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke3BhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueCkgKyAxfVwiXVtkYXRhLXk9XCIke2UudGFyZ2V0LmRhdGFzZXQueX1cIl1gKTtcbiAgICBjb25zdCBuZXh0Q2VsbFR3byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke3BhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueCkgKyAyfVwiXVtkYXRhLXk9XCIke2UudGFyZ2V0LmRhdGFzZXQueX1cIl1gKTtcbiAgICBjb25zdCBuZXh0Q2VsbFRocmVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7cGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC54KSArIDN9XCJdW2RhdGEteT1cIiR7ZS50YXJnZXQuZGF0YXNldC55fVwiXWApO1xuXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaG92ZXItdGVzdCcpKVxuICAgIHtcbiAgICAgICAgaWYgKFNoaXBEYXRhLnNoaXBMZW5ndGggPT09ICAwKVxuICAgICAgICB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAxKVxuICAgICAgICB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgICAgIG5leHRDZWxsT25lLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTsgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoU2hpcERhdGEuc2hpcExlbmd0aCA9PT0gMilcbiAgICAgICAge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgICAgICBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgICAgICBuZXh0Q2VsbFR3by5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci10ZXN0Jyk7IFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKFNoaXBEYXRhLnNoaXBMZW5ndGggPT09IDMpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItdGVzdCcpO1xuICAgICAgICAgICAgbmV4dENlbGxPbmUuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItdGVzdCcpO1xuICAgICAgICAgICAgbmV4dENlbGxUd28uY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItdGVzdCcpO1xuICAgICAgICAgICAgbmV4dENlbGxUaHJlZS5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci10ZXN0Jyk7IFxuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL1NoaXBcIjtcbmltcG9ydCB3YXRlckV4cGxvc2lvbiBmcm9tIFwiLi4vc291bmRzL3dhdGVyLWV4cGxvc2lvbi53YXZcIjsgXG5pbXBvcnQgZXhwbG9zaW9uSW1hZ2UgZnJvbSBcIi4uL2ltYWdlcy9leHBsb3Npb24ucG5nXCI7XG5cbi8qKiBHYW1lYm9hcmRcbiAqIC0+IEdhbWVib2FyZHMgc2hvdWxkIGJlIGFibGUgdG8gcGxhY2Ugc2hpcHMgYXQgc3BlY2lmaWMgY29vcmRpbmF0ZXMgYnkgXG4gKiBjYWxsaW5nIHRoZSAnc2hpcCBmYWN0b3J5IGZ1bmN0aW9uJy4gXG4gKiBcbiAqIC0+IEdhbWVib2FyZHMgc2hvdWxkIGhhdmUgYSByZWNlaXZlQXR0YWNrIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYSBwYWlyXG4gKiBvZiBjb29yZGluYXRlcywgZGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG5vdCB0aGUgYXR0YWNrIGhpdCBhIHNoaXAgYW5kXG4gKiB0aGVuIHNlbmRzIHRoZSAnaGl0JyBmdW5jdGlvbiB0byB0aGUgY29ycmVjdCBzaGlwLCBvciByZWNvcmQgdGhlIFxuICogY29vcmRpbmF0ZXMgb2YgdGhlIG1pc3NlZCBzaG90LiBcbiAqIFxuICogLT4gR2FtZWJvYXJkcyBzaG91bGQga2VlcCB0cmFjayBvZiBtaXNzZWQgYXR0YWNrcyBzbyB0aGV5IGNhbiBkaXNwbGF5IHRoZW1cbiAqIHByb3Blcmx5LlxuICogXG4gKiAtPiBHYW1lYm9hcmRzIHNob3VsZCBiZSBhYmxlIHRvIHJlcG9ydCB3aGV0aGVyIG9yIG5vdCBhbGwgb2YgdGhlaXIgc2hpcHNcbiAqIGhhdmUgYmVlbiBzdW5rLiBcbiAqL1xuXG4vLyBHYW1lYm9hcmQoKTogR2FtZWJvYXJkIGZhY3RvcnkgZnVuY3Rpb24uXG5leHBvcnQgY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IGdhbWVib2FyZCA9IFsuLi5BcnJheSgxMCldLm1hcCgoKSA9PiBBcnJheSgxMCkuZmlsbChcIlwiKSk7IFxuICAgIGxldCBzaGlwc09uQm9hcmQgPSAwOyBcblxuICAgIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoUGxhY2VkU2hpcHMpID0+IHtcbiAgICAgICAgY29uc3QgZXhwbG9zaW9uID0gbmV3IEF1ZGlvKHdhdGVyRXhwbG9zaW9uKTsgXG4gICAgICAgIGxldCB4Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIGxldCB5Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIGxldCBwbGF5ZXJPbmVDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7eENvb3JkUmFuZG9tfVwiXVtkYXRhLXk9XCIke3lDb29yZFJhbmRvbX1cIl1gKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJDb21wdXRlciBjaG9vc2U6IFwiLCBwbGF5ZXJPbmVDZWxsKTsgLy8gVGVzdGluZ1xuICAgICAgICBjb25zb2xlLmxvZyhcIlxcblwiKTsgLy8gVGVzdGluZ1xuXG4gICAgICAgIC8vIFRlc3QgaWYgdGhlIGNvbXB1dGVyIGhhcyBhbHJlYWR5IGNob29zZW4gdGhlc2UgY29vcmRpbmF0ZXMuIFxuICAgICAgICB3aGlsZShwbGF5ZXJPbmVDZWxsLmNsYXNzTGlzdC5jb250YWlucygncGxheWVyLW9uZS1zaGlwLWhpdCcpIHx8IHBsYXllck9uZUNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb21wdXRlci1oaXQtbWlzc2VkJykpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHhDb29yZFJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICAgIHlDb29yZFJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTsgXG5cbiAgICAgICAgICAgIHBsYXllck9uZUNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHt4Q29vcmRSYW5kb219XCJdW2RhdGEteT1cIiR7eUNvb3JkUmFuZG9tfVwiXWApOyBcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRlc3QgaWYgdGhlIGNvb3JkaW5hdGVzIGNvbnRhaW4gYW4gZW5lbXkgc2hpcC4gXG4gICAgICAgIGlmIChwbGF5ZXJPbmVDZWxsLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSlcbiAgICAgICAge1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIFBsYWNlZFNoaXBzKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGNvb3JkIGluIFBsYWNlZFNoaXBzW2tleV0uY29vcmRpbmF0ZXMpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZiAoUGxhY2VkU2hpcHNba2V5XS5jb29yZGluYXRlc1tjb29yZF1bMF0gPT09IHhDb29yZFJhbmRvbSAmJiBQbGFjZWRTaGlwc1trZXldLmNvb3JkaW5hdGVzW2Nvb3JkXVsxXSA9PT0geUNvb3JkUmFuZG9tKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGhlIGNvbXB1dGVyIGdvdCBhIGhpdDogJywgW3hDb29yZFJhbmRvbSwgeUNvb3JkUmFuZG9tXSk7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke2tleX0gd2FzIGhpdC5gKTsgLy8gVGVzdGluZyBcbiAgICAgICAgICAgICAgICAgICAgICAgIFBsYWNlZFNoaXBzW2tleV0uaGl0cyArPSAxOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzaGlwU3VuayA9IFBsYWNlZFNoaXBzW2tleV0uaGl0KFBsYWNlZFNoaXBzW2tleV0uaGl0cywgUGxhY2VkU2hpcHNba2V5XS5sZW5ndGgpOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIFBsYWNlZFNoaXBzW2tleV0uc3VuayhzaGlwU3Vuaywga2V5KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXhwbG9zaW9uSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBleHBsb3Npb25JbWcuc3JjID0gZXhwbG9zaW9uSW1hZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJPbmVDZWxsLmFwcGVuZENoaWxkKGV4cGxvc2lvbkltZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJPbmVDZWxsLmNsYXNzTGlzdC5hZGQoJ3BsYXllci1vbmUtc2hpcC1oaXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwbG9zaW9uLnBsYXkoKTsgLy8gVGVzdGluZyBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVySGl0TWlzc2VkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb21wdXRlckhpdE1pc3NlZC50ZXh0Q29udGVudCA9IFwiTVwiOyBcbiAgICAgICAgICAgIHBsYXllck9uZUNlbGwuY2xhc3NMaXN0LmFkZCgnY29tcHV0ZXItaGl0LW1pc3NlZCcpO1xuICAgICAgICAgICAgcGxheWVyT25lQ2VsbC5hcHBlbmRDaGlsZChjb21wdXRlckhpdE1pc3NlZCk7IFxuICAgICAgICB9XG5cbiAgICB9XG5cblxuICAgIHJldHVybiB7Z2FtZWJvYXJkLCBzaGlwc09uQm9hcmQsIHJlY2VpdmVBdHRhY2ssIFNoaXB9O1xufSIsIi8qKiBTaGlwICovXG4vLyBTaGlwKCk6IFNoaXAgZmFjdG9yeSBmdW5jdGlvbi4gXG5leHBvcnQgY29uc3QgU2hpcCA9ICgpID0+IHtcbiAgICBsZXQgZGVmYXVsdExlbmd0aHMgPSBbMCwgMCwgMCwgMCwgMSwgMSwgMSwgMiwgMiwgM107IFxuICAgIGxldCBsZW5ndGggPSBudWxsO1xuICAgIGxldCBoaXRzID0gMDtcblxuICAgIC8vIGhpdCgpOiBXaWxsIGdhdGhlciB0aGUgYW1vdW50IG9mIGhpdHMgdGhlIHNoaXAgd2lsbCBnZXQuXG4gICAgY29uc3QgaGl0ID0gKGlzSGl0LCBzaGlwTGVuZ3RoKSA9PiB7XG5cbiAgICAgICAgaWYgKGlzSGl0ID09PSBzaGlwTGVuZ3RoKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTsgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDsgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpc1N1bmsoKTogV2lsbCBkZXRlcm1pbmUgaWYgdGhlIHNoaXAgaGFzIHN1bmsuIFxuICAgIGNvbnN0IHN1bmsgPSAoaXNTdW5rLCBzaGlwKSA9PiB7XG4gICAgICAgIGlmIChpc1N1bmspXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3NoaXB9IGhhcyBzdW5rLmApOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICAvLyBOb3RlOiBZb3UgbmVlZCB0byB1c2UgdGhlIHRlc3RpbmcgZmlsZSAoc2hpcC50ZXN0LmpzKSBcbiAgICAgICAgICAgIC8vIHRvIHRlc3QgdGhpcyBmdW5jdGlvbi4gXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge2hpdCwgc3VuaywgZGVmYXVsdExlbmd0aHMsIGxlbmd0aCwgaGl0c307XG59XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogfFRlc3RpbmcgQXJlYSBJZGVudGlmaWVycyBhbmQgQ29tcG9uZW50c3wgKi9cbiNjb250ZW50ID4gZGl2ID4gYnV0dG9ue1xuICAgIHBhZGRpbmc6IDEwcHggNXB4IDEwcHggNXB4O1xuICAgIGZvbnQtZmFtaWx5Om1vbm9zcGFjZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Y29yYWw7IFxuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNjb250ZW50ID4gZGl2ID4gYnV0dG9uOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGJsdWU7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyogfE1haW4gQ29udGVudCBTZWN0aW9ufCAqL1xuI2NvbnRlbnR7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAgIHBhZGRpbmc6IDEwcHg7IFxufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIHxHYW1lYm9hcmQgQ29udGFpbmVyfCAqL1xuLmdhbWVib2FyZC1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEwcHg7XG5cbiAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgd2lkdGg6IDEwMDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuLyogUGxheWVyIE9uZSBCb2FyZCAqL1xuLnBsYXllci1vbmUtYm9hcmR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XG4gICAgcGFkZGluZzogMTBweDtcbn1cbi5wbGF5ZXItb25lLWJvYXJkID4gZGl2eyAvKiByb3dzICovXG4gICAgZGlzcGxheTogZmxleDtcblxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xuICAgIC8qIHBhZGRpbmc6IDVweDsgKi9cbn1cbi5wbGF5ZXItb25lLWJvYXJkID4gZGl2ID4gZGl2eyAvKiBjZWxscyAqL1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Y29yYWw7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbn1cbi5wbGF5ZXItb25lLWJvYXJkID4gZGl2ID4gZGl2ID4gZGl2eyAvKiBNaXNzZWQgSGl0IENvbnRhaW5lciAqL1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xuICAgIGhlaWdodDogMjBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6ICNkOTQ2ZWY7XG59XG5cbi8qIENvbXB1dGVyIEdhbWVib2FyZCAqL1xuLmNvbXB1dGVyLWdhbWVib2FyZHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICBib3JkZXI6IDFweCBzb2xpZCBwdXJwbGU7XG4gICAgcGFkZGluZzogMTBweDtcbn1cbi5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXZ7IC8qIFJvd3MgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgLyogcGFkZGluZzogMTBweDsgKi9cbn1cbi5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXYgPiBkaXZ7IC8qIGNlbGxzICovXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmVlbjtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgd2lkdGg6IDMwcHg7IFxuICAgIGhlaWdodDogMzBweDtcbn1cblxuLyogaG92ZXItdGVzdCAqL1xuLmhvdmVyLXRlc3R7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2sgIWltcG9ydGFudDtcbn1cblxuLyogc2hpcC1wbGFjZWQgLSBEaXNwbGF5cyBlYWNoIHNoaXAgcGxhY2VkIG9uIHRoZSBib2FyZC4gKi9cbi5zaGlwLXBsYWNlZHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjayAhaW1wb3J0YW50O1xufVxuXG4vKiBjb21wdXRlci1zaGlwLXBsYWNlZCAtIERpc3BsYXlzIGVhY2ggc2hpcCB0aGF0IHRoZSBjb21wdXRlciBwbGFjZXMgb24gdGhlaXIgYm9hcmQuICovXG4uY29tcHV0ZXItc2hpcC1wbGFjZWR7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmVlbiAhaW1wb3J0YW50O1xufVxuXG4vKiBwbGF5ZXItb25lLXNoaXAtaGl0IC0gSW5kaWNhdGVzIHRoYXQgdGhlIHBsYXllciBvbmUgc2hpcCBoYXMgYmVlbiBoaXQuICovXG4ucGxheWVyLW9uZS1zaGlwLWhpdCA+IGltZ1tzcmNde1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIHxJbnRlZmFjZSBTZWN0aW9ufCAqL1xuLmludGVyZmFjZXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgXG4gICAgYm9yZGVyOiAxcHggc29saWQgb3JhbmdlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi8qIGN1cnJlbnQtY29vcmRpbmF0ZSAtIFRoZSBjdXJyZW50IGNvb3JkaW5hdGUgY2hvb3NlbiBieSB0aGUgdXNlci4gKi9cbi5jdXJyZW50LWNvb3JkaW5hdGV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGNvcmFsO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSw4Q0FBOEM7QUFDOUM7SUFDSSwwQkFBMEI7SUFDMUIscUJBQXFCO0lBQ3JCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLDJCQUEyQjtBQUMvQjs7QUFFQSw0S0FBNEs7QUFDNUssNEtBQTRLO0FBQzVLLDJCQUEyQjtBQUMzQjtJQUNJLHFCQUFxQjtJQUNyQixhQUFhO0FBQ2pCOztBQUVBLDRLQUE0SztBQUM1Syw0S0FBNEs7QUFDNUssMEJBQTBCO0FBQzFCO0lBQ0ksYUFBYTtJQUNiLFNBQVM7O0lBRVQsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixhQUFhO0lBQ2IsY0FBYztBQUNsQjs7QUFFQSxxQkFBcUI7QUFDckI7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCOztJQUV0Qix1QkFBdUI7SUFDdkIsYUFBYTtBQUNqQjtBQUNBLHlCQUF5QixTQUFTO0lBQzlCLGFBQWE7O0lBRWIsNkJBQTZCO0lBQzdCLGtCQUFrQjtBQUN0QjtBQUNBLCtCQUErQixVQUFVO0lBQ3JDLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1COztJQUVuQiw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0EscUNBQXFDLHlCQUF5QjtJQUMxRCw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBLHVCQUF1QjtBQUN2QjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7O0lBRXRCLHdCQUF3QjtJQUN4QixhQUFhO0FBQ2pCO0FBQ0EsMkJBQTJCLFNBQVM7SUFDaEMsYUFBYTs7SUFFYixtQkFBbUI7QUFDdkI7QUFDQSxpQ0FBaUMsVUFBVTtJQUN2Qyw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBLGVBQWU7QUFDZjtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQSwwREFBMEQ7QUFDMUQ7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUEsdUZBQXVGO0FBQ3ZGO0lBQ0ksdUNBQXVDO0FBQzNDOztBQUVBLDJFQUEyRTtBQUMzRTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOzs7QUFHQSw0S0FBNEs7QUFDNUssNEtBQTRLO0FBQzVLLHVCQUF1QjtBQUN2QjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7O0lBRXRCLHdCQUF3QjtJQUN4QixhQUFhO0FBQ2pCOztBQUVBLHFFQUFxRTtBQUNyRTtJQUNJLDRCQUE0QjtJQUM1Qiw0QkFBNEI7QUFDaENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogfFRlc3RpbmcgQXJlYSBJZGVudGlmaWVycyBhbmQgQ29tcG9uZW50c3wgKi9cXG4jY29udGVudCA+IGRpdiA+IGJ1dHRvbntcXG4gICAgcGFkZGluZzogMTBweCA1cHggMTBweCA1cHg7XFxuICAgIGZvbnQtZmFtaWx5Om1vbm9zcGFjZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRjb3JhbDsgXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI2NvbnRlbnQgPiBkaXYgPiBidXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRibHVlO1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyogfE1haW4gQ29udGVudCBTZWN0aW9ufCAqL1xcbiNjb250ZW50e1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxuICAgIHBhZGRpbmc6IDEwcHg7IFxcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyogfEdhbWVib2FyZCBDb250YWluZXJ8ICovXFxuLmdhbWVib2FyZC1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG5cXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgd2lkdGg6IDEwMDBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi8qIFBsYXllciBPbmUgQm9hcmQgKi9cXG4ucGxheWVyLW9uZS1ib2FyZHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcbi5wbGF5ZXItb25lLWJvYXJkID4gZGl2eyAvKiByb3dzICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xcbiAgICAvKiBwYWRkaW5nOiA1cHg7ICovXFxufVxcbi5wbGF5ZXItb25lLWJvYXJkID4gZGl2ID4gZGl2eyAvKiBjZWxscyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRjb3JhbDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbn1cXG4ucGxheWVyLW9uZS1ib2FyZCA+IGRpdiA+IGRpdiA+IGRpdnsgLyogTWlzc2VkIEhpdCBDb250YWluZXIgKi9cXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICovXFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBjb2xvcjogI2Q5NDZlZjtcXG59XFxuXFxuLyogQ29tcHV0ZXIgR2FtZWJvYXJkICovXFxuLmNvbXB1dGVyLWdhbWVib2FyZHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICAgYm9yZGVyOiAxcHggc29saWQgcHVycGxlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG4uY29tcHV0ZXItZ2FtZWJvYXJkID4gZGl2eyAvKiBSb3dzICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxuICAgIC8qIHBhZGRpbmc6IDEwcHg7ICovXFxufVxcbi5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXYgPiBkaXZ7IC8qIGNlbGxzICovXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JlZW47XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgd2lkdGg6IDMwcHg7IFxcbiAgICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbi8qIGhvdmVyLXRlc3QgKi9cXG4uaG92ZXItdGVzdHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2sgIWltcG9ydGFudDtcXG59XFxuXFxuLyogc2hpcC1wbGFjZWQgLSBEaXNwbGF5cyBlYWNoIHNoaXAgcGxhY2VkIG9uIHRoZSBib2FyZC4gKi9cXG4uc2hpcC1wbGFjZWR7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIGNvbXB1dGVyLXNoaXAtcGxhY2VkIC0gRGlzcGxheXMgZWFjaCBzaGlwIHRoYXQgdGhlIGNvbXB1dGVyIHBsYWNlcyBvbiB0aGVpciBib2FyZC4gKi9cXG4uY29tcHV0ZXItc2hpcC1wbGFjZWR7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JlZW4gIWltcG9ydGFudDtcXG59XFxuXFxuLyogcGxheWVyLW9uZS1zaGlwLWhpdCAtIEluZGljYXRlcyB0aGF0IHRoZSBwbGF5ZXIgb25lIHNoaXAgaGFzIGJlZW4gaGl0LiAqL1xcbi5wbGF5ZXItb25lLXNoaXAtaGl0ID4gaW1nW3NyY117XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKiB8SW50ZWZhY2UgU2VjdGlvbnwgKi9cXG4uaW50ZXJmYWNle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBcXG4gICAgYm9yZGVyOiAxcHggc29saWQgb3JhbmdlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4vKiBjdXJyZW50LWNvb3JkaW5hdGUgLSBUaGUgY3VycmVudCBjb29yZGluYXRlIGNob29zZW4gYnkgdGhlIHVzZXIuICovXFxuLmN1cnJlbnQtY29vcmRpbmF0ZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRjb3JhbDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL3V0aWxzL1NoaXBcIjtcblxuaW1wb3J0IHsgSW5pdGlhbGl6ZURPTSB9IGZyb20gXCIuL21vZHVsZXMvRG9tQ29udGVudFwiO1xuXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5pbXBvcnQgdGVzdFNvdW5kIGZyb20gJy4vc291bmRzL21peGtpdC1yZXRyby1nYW1lLW5vdGlmaWNhdGlvbi0yMTIud2F2JztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gTm90ZXM6XG4vLyAxKSBJIG9ubHkgaGF2ZSB0byB0ZXN0IHRoZSBzaGlwIG9iamVjdHMgcHVibGljIGludGVyZmFjZS4gT25seSAnbWV0aG9kcyBvciBwcm9wZXJ0aWVzJyB0aGF0IGFyZSB1c2VkIG91dHNpZGUgb2YgeW91ciBzaGlwIG9iamVjdCBcbi8vIG5lZWQgdW5pdCB0ZXN0cy4gXG4vLyBcbi8vIDIpIE5vdGUgdGhhdCB3ZSBoYXZlIG5vdCB5ZXQgY3JlYXRlZCBhbnkgVXNlciBJbnRlcmZhY2UuIFdlIHNob3VsZCBrbm93XG4vLyBvdXIgY29kZSBpcyBjb21pbmcgdG9nZXRoZXIgYnkgcnVubmluZyB0aGUgdGVzdHMuIFlvdSBzaG91bGRuJ3QgYmVcbi8vIHJlbHlpbmcgb24gJ2NvbnNvbGUubG9nJyBvciAnRE9NIG1ldGhvZHMnIHRvIG1ha2Ugc3VyZSB5b3VyIGNvZGUgaXNcbi8vIGRvaW5nIHdoYXQgeW91IGV4cGVjdCBpdCB0by5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyB8VGVzdGluZyBBcmVhfFxuY29uc29sZS5sb2coJ3xUZXN0aW5nIEFyZWF8Jyk7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbmNvbnNvbGUubG9nKGNvbnRlbnQpOyAvLyBUZXN0aW5nIFxuXG5jb25zdCBidXR0b25PbmVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IGJ1dHRvbk9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpOyBcbmJ1dHRvbk9uZS50ZXh0Q29udGVudCA9ICdDbGljayBNZSEnO1xuXG5jb25zdCBuZXdTb3VuZCA9IG5ldyBBdWRpbyh0ZXN0U291bmQpO1xuXG4vLyBidXR0b25PbmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4vLyAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7IC8vIFRlc3Rpbmdcbi8vICAgICBuZXdTb3VuZC5wbGF5KCk7XG4vLyB9KTsgXG5cbi8vIGJ1dHRvbk9uZUNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25PbmUpO1xuLy8gY29udGVudC5hcHBlbmRDaGlsZChidXR0b25PbmVDb250YWluZXIpO1xuLy8gY29uc29sZS5sb2coJ1xcbicpOyAvLyBUZXN0aW5nIFxuXG4vKiogfFNwcmVhZCBTeW50YXgoLi4uKXxcbiAqIFRoZSBzcHJlYWQoLi4uKSBzeW50YXggYWxsb3cgYW4gaXRlcmFibGUsIHN1Y2ggYXMgYW4gYXJyYXkgb3Igc3RyaW5nLCB0byBiZSBleHBhbmRlZCBpbiBwbGFjZXMgXG4gKiB3aGVyZSB6ZXJvIG9yIG1vcmUgYXJndW1lbnRzIChmb3IgZnVuY3Rpb24gY2FsbHMpIG9yIGVsZW1lbnRzIChmb3IgYXJyYXkgbGl0ZXJhbHMpIGFyZSBleHBlY3RlZC5cbiAqIEluIGFuIG9iamVjdCBsaXRlcmFsLCB0aGUgc3ByZWFkIHN5bnRheCBlbnVtZXJhdGVzIHRoZSBwcm9wZXJ0aWVzIG9mIGFuIG9iamVjdCBhbmQgYWRkcyB0aGUga2V5LXZhbHVlIHBhaXJzXG4gKiB0byB0aGUgb2JqZWN0IGJlaW5nIGNyZWF0ZWQuIFxuICogXG4gKiBTcHJlYWQgc3ludGF4IGxvb2tzIGV4YWN0bHkgbGlrZSByZXN0IHN5bnRheC4gSW4gYSB3YXksIHNwcmVhZCBzeW50YXggaXMgdGhlIG9wcG9zaXRlIG9mIHJlc3Qgc3ludGF4LlxuICogU3ByZWFkIHN5bnRheCBcImV4cGFuZHNcIiBhbiBhcnJheSBpbnRvIGl0cyBlbGVtZW50cywgd2hpbGUgcmVzdCBzeW50YXggY29sbGVjdHMgbXVsdGlwbGUgZWxlbWVudHMgYW5kXG4gKiBcImNvbmRlbnNlc1wiIHRoZW0gaW50byBhIHNpbmdsZSBlbGVtZW50LiBcbiAqIFxuICogTm90ZTogVXNpbmcgdGhlIFwibWFwIGFycmF5IG1ldGhvZFwiIHdpbGwgY3JlYXRlIGEgbmV3IGFycmF5IGZyb20gdGhlIGNhbGxpbmcgWy4uLmFycmF5KDgpXSB0aGF0IGlzXG4gKiBzcHJlYWRpbmcgOCBlbGVtZW50cyBpbnRvIGl0LiBFYWNoIGVsZW1lbnQgd2lsbCBiZSBhbiBBcnJheSBvZiA4IGVsZW1lbnRzIHRoYXQgaXMgZmlsbGVkIHdpdGggKFwiXCIpO1xuICovXG5jb25zdCBhcnJUZXN0ID0gWy4uLkFycmF5KDgpXS5tYXAoKCkgPT4gQXJyYXkoOCkuZmlsbChcIlwiKSk7IFxuY29uc29sZS5sb2coJ1RoZSBBcnJheTogJywgYXJyVGVzdCk7IC8vIFRlc3RpbmdcbmNvbnNvbGUubG9nKCdcXG4nKTsgLy8gVGVzdGluZ1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuSW5pdGlhbGl6ZURPTSgpOyJdLCJuYW1lcyI6WyJHYW1lYm9hcmQiLCJ3YXRlckV4cGxvc2lvbiIsImV4cGxvc2lvbkltYWdlIiwiQXhpc1NlbGVjdGVkIiwiYXhpc1NlbGVjdGVkIiwiTmV3R2FtZVNlbGVjdGVkIiwibmV3R2FtZVNlbGVjdGVkIiwiU2hpcERhdGEiLCJsZW5ndGhJbmRleCIsInNoaXBzUGxhY2VkIiwic2hpcExlbmd0aCIsIlBsYWNlZFNoaXBzIiwiQXhpc0NoYW5nZSIsImF4aXNDaGFuZ2UiLCJheGlzV2FzQ2hhbmdlZCIsIkFjdGl2YXRlR2FtZSIsImFjdGl2YXRlR2FtZSIsImFjdGl2YXRlUGxheWVyT25lVHVybiIsImFjdGl2YXRlQ29tcHV0ZXJUdXJuIiwiSW5pdGlhbGl6ZURPTSIsImNvbnNvbGUiLCJsb2ciLCJHYW1lYm9hcmRET00iLCJJbnRlcmZhY2VET00iLCJQbGF5ZXJPbmVET00iLCJDb21wdXRlckRPTSIsIkNvbXB1dGVyUGxhY2VTaGlwcyIsIk51bWJlck9mU2hpcHNQbGFjZWQiLCJudW1iZXJPZlNoaXBzUGxhY2VkIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJjb25jYXQiLCJjb250ZW50IiwiZ2FtZWJvYXJkQ29udGFpbmVyIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwicGxheWVyT25lQm9hcmQiLCJwbGF5ZXJPbmUiLCJpIiwiZ2FtZWJvYXJkIiwibGVuZ3RoIiwicm93IiwiaiIsImNlbGwiLCJkYXRhc2V0IiwieCIsInkiLCJjb21wdXRlciIsImNvbXB1dGVyQm9hcmQiLCJjb21wdXRlclJvdyIsImNvbXB1dGVyQ2VsbCIsIlBsYWNlU2hpcHMiLCJlIiwiY2VsbHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwieENvb3JkIiwieUNvb3JkIiwiYm9hcmQiLCJzaGlwIiwiU2hpcCIsImRlZmF1bHRMZW5ndGhzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkVudGVyWCIsIkxlYXZlWCIsIkVudGVyWSIsIkxlYXZlWSIsIkdhbWVJbml0aWF0ZWQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29tcHV0ZXJDZWxscyIsInBsYXllckNlbGxzIiwiZm9yRWFjaCIsIlBsYXllck9uZVR1cm4iLCJDb21wdXRlclR1cm4iLCJ0YXJnZXQiLCJyZWNlaXZlQXR0YWNrIiwiY29tcHV0ZXJSb3dzIiwiY29tcHV0ZXJTaGlwcyIsImNvbXB1dGVyU2hpcFBsYWNlZCIsInhDb29yZFJhbmRvbSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInlDb29yZFJhbmRvbSIsImF4aXNSYW5kb20iLCJ4TGVuZ3RoT25lIiwieExlbmd0aFR3byIsInhMZW5ndGhUaHJlZSIsInlMZW5ndGhPbmUiLCJ5TGVuZ3RoVHdvIiwieUxlbmd0aFRocmVlIiwiY29udGFpbnMiLCJzZXRBdHRyaWJ1dGUiLCJfbG9vcCIsImNvb3JkaW5hdGVzIiwiY29vcmRpbmF0ZUluZGV4IiwicGFyc2VJbnQiLCJrZXkiLCJjb29yZGluYXRlc05vdE92ZXJsYXBwaW5nIiwiY29tcHV0ZXJDZWxsT25lIiwiX2xvb3AyIiwiY29tcHV0ZXJDZWxsVHdvIiwiX2xvb3AzIiwiY29tcHV0ZXJDZWxsVGhyZWUiLCJwbGF5ZXJJbnRlcmZhY2UiLCJuZXdHYW1lIiwicGxhY2VTaGlwIiwiY29vcmRpbmF0ZUNvbnRhaW5lciIsIk5ld0dhbWUiLCJyZW1vdmUiLCJBeGlzRE9NIiwiQ2hhbmdlVG9YQXhpcyIsIm5leHRDZWxsT25lIiwibmV4dENlbGxUd28iLCJuZXh0Q2VsbFRocmVlIiwiUGxhY2VPblgiLCJDaGFuZ2VUb1lBeGlzIiwiUGxhY2VPblkiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJBcnJheSIsIm1hcCIsImZpbGwiLCJzaGlwc09uQm9hcmQiLCJleHBsb3Npb24iLCJBdWRpbyIsInBsYXllck9uZUNlbGwiLCJjb29yZCIsImhpdHMiLCJzaGlwU3VuayIsImhpdCIsInN1bmsiLCJleHBsb3Npb25JbWciLCJzcmMiLCJwbGF5IiwiY29tcHV0ZXJIaXRNaXNzZWQiLCJpc0hpdCIsImlzU3VuayIsInRlc3RTb3VuZCIsImdldEVsZW1lbnRCeUlkIiwiYnV0dG9uT25lQ29udGFpbmVyIiwiYnV0dG9uT25lIiwibmV3U291bmQiLCJhcnJUZXN0Il0sInNvdXJjZVJvb3QiOiIifQ==