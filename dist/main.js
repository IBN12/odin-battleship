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

// AxisChange Literal Object: 
var AxisChange = {
  axisChange: null,
  axisWasChanged: false
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
    console.log('Ship number to be placed: ', ShipData.lengthIndex + 1); // Testing 
    console.log('The length of the ship to be placed: ', ShipData.shipLength); // Testing 
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
    }
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
    var xLength = 0;
    var yLength = 0;
    if (axisRandom === 1)
      // x-axis
      {
        xLength = 0;
        yLength = ship;
      } else if (axisRandom === 0)
      // y-axis
      {
        xLength = ship;
        yLength = 0;
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
            if (coordinates[key][0] === xCoordRandom && coordinates[key][1] === yCoordRandom || coordinates[key][0] === xCoordRandom + xLength && coordinates[key][1] === yCoordRandom + yLength || coordinates[key][0] === xCoordRandom && coordinates[key][1] === yCoordRandom && coordinates[key][0] === xCoordRandom + xLength && coordinates[key][1] === yCoordRandom + yLength) {
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
        var computerCellOne = document.querySelector(".computer-gameboard > div > div[data-x=\"".concat(xCoordRandom + xLength, "\"][data-y=\"").concat(yCoordRandom + yLength, "\"]"));
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

      var computerCellOne = document.querySelector(".computer-gameboard > div > div[data-x=\"".concat(xCoordRandom + xLength, "\"][data-y=\"").concat(yCoordRandom + yLength, "\"]"));
      computerCellOne.classList.add('computer-ship-placed');
      computerCellOne.setAttribute('style', 'background-color: red;'); // Testing 
    }

    // while (!computerShipPlaced)
    // {
    //     if ((document.querySelector(`.computer-gameboard > div > div[data-x="${xCoordRandom}"][data-y="${yCoordRandom}"]`).classList.contains('computer-ship-placed')))
    //     {
    //         xCoordRandom = Math.floor(Math.random() * (computerRows.length));
    //         yCoordRandom = Math.floor(Math.random() * 10);
    //     }

    //     if ((xCoordRandom + 1) >= 10 || (yCoordRandom + 1) >= 10)
    //     {
    //         console.log('X and Y are greater than 10'); // Testing 
    //         console.log('X: ', xCoordRandom + 1); // Testing 
    //         console.log('Y: ', yCoordRandom + 1); // Testing
    //         console.log('\n'); // Testing
    //         xCoordRandom = Math.floor(Math.random() * (computerRows.length));
    //         yCoordRandom = Math.floor(Math.random() * 10); 
    //     }
    //     else
    //     {
    //         computerShipPlaced = true; 
    //     }
    // }

    // if (ship === 0)
    // {
    //     const computerCell = document.querySelector(`.computer-gameboard > div > div[data-x="${xCoordRandom}"][data-y="${yCoordRandom}"]`);
    //     computerCell.classList.add('computer-ship-placed'); 
    // }
    // else if (ship === 1)
    // {
    //     if (axisRandom === 1) // x-axis
    //     {
    //         const computerCell = document.querySelector(`.computer-gameboard > div > div[data-x="${xCoordRandom}"][data-y="${yCoordRandom}"]`); 
    //         computerCell.classList.add('computer-ship-placed'); 
    //         computerCell.setAttribute('style', 'background-color: red;'); // Testing

    //         const computerCellOne = document.querySelector(`.computer-gameboard > div > div[data-x="${xCoordRandom}"][data-y="${yCoordRandom + 1}"]`);
    //         computerCellOne.classList.add('computer-ship-placed'); 
    //         computerCellOne.setAttribute('style', 'background-color: red;'); // Testing 
    //     }
    //     else if (axisRandom === 0) // y-axis
    //     {
    //         const computerCell = document.querySelector(`.computer-gameboard > div > div[data-x="${xCoordRandom}"][data-y="${yCoordRandom}"]`); 
    //         computerCell.classList.add('computer-ship-placed'); 
    //         computerCell.setAttribute('style', 'background-color: red;'); // Testing

    //         const computerCellOne = document.querySelector(`.computer-gameboard > div > div[data-x="${xCoordRandom + 1}"][data-y="${yCoordRandom}"]`);
    //         computerCellOne.classList.add('computer-ship-placed'); 
    //         computerCellOne.setAttribute('style', 'background-color: red;'); // Testing 
    //     }
    // }
    // else if (ship === 2)
    // {
    //     if (axisRandom === 1)
    //     {
    //         const computerCell = document.querySelector(`.computer-gameboard > div > div[data-x="${xCoordRandom}"][data-y="${yCoordRandom}"]`); 
    //         computerCell.classList.add('computer-ship-placed');
    //         computerCell.setAttribute('style', 'background-color: green;');

    //         const computerCellOne = document.querySelector(`.computer-gameboard > div > div[data-x="${xCoordRandom}"][data-y="${yCoordRandom + 1}"]`);
    //         computerCellOne.classList.add('computer-ship-placed');
    //         computerCellOne.setAttribute('style', 'background-color: green;'); // Testing    

    //         const computerCellTwo = document.querySelector(`.computer-gameboard > div > div[data-x="${xCoordRandom}"][data-y="${yCoordRandom + 2}"]`);
    //         computerCellTwo.classList.add('computer-ship-placed'); 
    //         computerCellTwo.setAttribute('style', 'background-color: green;'); // Testing 
    //     }
    //     else if(axisRandom === 0)
    //     {
    //         const computerCell = document.querySelector(`.computer-gameboard > div > div[data-x="${xCoordRandom}"][data-y="${yCoordRandom}"]`);
    //         computerCell.classList.add('computer-ship-placed');
    //         computerCell.setAttribute('style', 'background-color: green;'); // Testing 

    //         const computerCellOne = document.querySelector(`.computer-gameboard > div > div[data-x="${xCoordRandom + 1}"][data-y="${yCoordRandom}"]`); 
    //         computerCellOne.classList.add('computer-ship-placed'); 
    //         computerCellOne.setAttribute('style', 'background-color: green;'); // Testing 

    //         const computerCellTwo = document.querySelector(`.computer-gameboard > div > div[data-x="${xCoordRandom + 2}"][data-y="${yCoordRandom}"]`); 
    //         computerCellTwo.classList.add('computer-ship-placed'); 
    //         computerCellTwo.setAttribute('style', 'background-color: green;');  // Testing 
    //     }
    // }
    // else if (ship === 3)
    // {
    //     if (axisRandom === 1)
    //     {
    //         const computerCell = document.querySelector(`.computer-gameboard > div > div[data-x="${xCoordRandom}"][data-y="${yCoordRandom}"]`); 
    //         computerCell.classList.add('computer-ship-placed');
    //         computerCell.setAttribute('style', 'background-color: green;');

    //         const computerCellOne = document.querySelector(`.computer-gameboard > div > div[data-x="${xCoordRandom}"][data-y="${yCoordRandom + 1}"]`);
    //         computerCellOne.classList.add('computer-ship-placed');
    //         computerCellOne.setAttribute('style', 'background-color: green;'); // Testing    

    //         const computerCellTwo = document.querySelector(`.computer-gameboard > div > div[data-x="${xCoordRandom}"][data-y="${yCoordRandom + 2}"]`);
    //         computerCellTwo.classList.add('computer-ship-placed'); 
    //         computerCellTwo.setAttribute('style', 'background-color: green;'); // Testing 

    //         const computerCellThree = document.querySelector(`.computer-gameboard > div > div[data-x="${xCoordRandom}"][data-y="${yCoordRandom + 3}"]`);
    //         computerCellThree.classList.add('computer-ship-placed'); 
    //         computerCellThree.setAttribute('style', 'background-color: green;'); // Testing
    //     }
    //     else if (axisRandom === 0)
    //     {
    //         const computerCell = document.querySelector(`.computer-gameboard > div > div[data-x="${xCoordRandom}"][data-y="${yCoordRandom}"]`); 
    //         computerCell.classList.add('computer-ship-placed');
    //         computerCell.setAttribute('style', 'background-color: green;');

    //         const computerCellOne = document.querySelector(`.computer-gameboard > div > div[data-x="${xCoordRandom + 1}"][data-y="${yCoordRandom}"]`);
    //         computerCellOne.classList.add('computer-ship-placed');
    //         computerCellOne.setAttribute('style', 'background-color: green;'); // Testing    

    //         const computerCellTwo = document.querySelector(`.computer-gameboard > div > div[data-x="${xCoordRandom + 2}"][data-y="${yCoordRandom}"]`);
    //         computerCellTwo.classList.add('computer-ship-placed'); 
    //         computerCellTwo.setAttribute('style', 'background-color: green;'); // Testing 

    //         const computerCellThree = document.querySelector(`.computer-gameboard > div > div[data-x="${xCoordRandom + 3}"][data-y="${yCoordRandom}"]`);
    //         computerCellThree.classList.add('computer-ship-placed'); 
    //         computerCellThree.setAttribute('style', 'background-color: green;'); // Testing
    //     }
    // }
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
        ShipData.lengthIndex++;
        AxisChange.axisWasChanged = false;
        PlaceShips();
      }
    } else if (ShipData.shipLength === 1) {
      if (cell.classList.contains('ship-placed') && nextCellOne.classList.contains('ship-placed') || cell.classList.contains('ship-placed') || nextCellOne.classList.contains('ship-placed')) {
        console.log('Cell already contians a ship'); // Testing
      } else {
        cell.classList.add('ship-placed');
        nextCellOne.classList.add('ship-placed');
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,8CAA8C;AAC9C;IACI,0BAA0B;IAC1B,qBAAqB;IACrB,4BAA4B;IAC5B,4BAA4B;IAC5B,eAAe;AACnB;AACA;IACI,2BAA2B;IAC3B,2BAA2B;AAC/B;;AAEA,4KAA4K;AAC5K,4KAA4K;AAC5K,2BAA2B;AAC3B;IACI,qBAAqB;IACrB,aAAa;AACjB;;AAEA,4KAA4K;AAC5K,4KAA4K;AAC5K,0BAA0B;AAC1B;IACI,aAAa;IACb,SAAS;;IAET,sBAAsB;IACtB,aAAa;IACb,aAAa;IACb,cAAc;AAClB;;AAEA,qBAAqB;AACrB;IACI,aAAa;IACb,sBAAsB;;IAEtB,uBAAuB;IACvB,aAAa;AACjB;AACA,yBAAyB,SAAS;IAC9B,aAAa;;IAEb,6BAA6B;IAC7B,kBAAkB;AACtB;AACA,+BAA+B,UAAU;IACrC,4BAA4B;IAC5B,YAAY;IACZ,WAAW;IACX,YAAY;AAChB;;AAEA,qBAAqB;AACrB;IACI,aAAa;IACb,sBAAsB;;IAEtB,wBAAwB;IACxB,aAAa;AACjB;AACA;IACI,aAAa;;IAEb,mBAAmB;AACvB;AACA,iCAAiC,UAAU;IACvC,4BAA4B;IAC5B,YAAY;IACZ,WAAW;IACX,YAAY;AAChB;;AAEA,eAAe;AACf;IACI,kCAAkC;AACtC;;AAEA,0DAA0D;AAC1D;IACI,kCAAkC;AACtC;;AAEA,uFAAuF;AACvF;IACI,kCAAkC;AACtC;;;AAGA,4KAA4K;AAC5K,4KAA4K;AAC5K,uBAAuB;AACvB;IACI,aAAa;IACb,sBAAsB;;IAEtB,wBAAwB;IACxB,aAAa;AACjB;;AAEA,qEAAqE;AACrE;IACI,4BAA4B;IAC5B,4BAA4B;AAChC","sourcesContent":["/* |Testing Area Identifiers and Components| */\n#content > div > button{\n    padding: 10px 5px 10px 5px;\n    font-family:monospace;\n    background-color: lightcoral;\n    border: 1px solid lightcoral; \n    cursor: pointer;\n}\n#content > div > button:hover{\n    background-color: lightblue;\n    border: 1px solid lightblue;\n}\n\n/***************************************************************************************************************************************************************************/\n/***************************************************************************************************************************************************************************/\n/* |Main Content Section| */\n#content{\n    border: 1px solid red;\n    padding: 10px; \n}\n\n/***************************************************************************************************************************************************************************/\n/***************************************************************************************************************************************************************************/\n/* |Gameboard Container| */\n.gameboard-container{\n    display: flex;\n    gap: 10px;\n\n    border: 1px solid blue;\n    padding: 10px;\n    width: 1000px;\n    margin: 0 auto;\n}\n\n/* Player One Board */\n.player-one-board{\n    display: flex;\n    flex-direction: column;\n\n    border: 1px solid green;\n    padding: 10px;\n}\n.player-one-board > div{ /* rows */\n    display: flex;\n\n    /* border: 1px solid black; */\n    /* padding: 5px; */\n}\n.player-one-board > div > div{ /* cells */\n    border: 1px solid lightcoral;\n    padding: 5px;\n    width: 30px;\n    height: 30px;\n}\n\n/* Player Two Board */\n.computer-gameboard{\n    display: flex;\n    flex-direction: column;\n\n    border: 1px solid purple;\n    padding: 10px;\n}\n.computer-gameboard > div{\n    display: flex;\n\n    /* padding: 10px; */\n}\n.computer-gameboard > div > div{ /* cells */\n    border: 1px solid lightgreen;\n    padding: 5px;\n    width: 30px; \n    height: 30px;\n}\n\n/* hover-test */\n.hover-test{\n    border: 1px solid black !important;\n}\n\n/* ship-placed - Displays each ship placed on the board. */\n.ship-placed{\n    border: 1px solid black !important;\n}\n\n/* computer-ship-placed - Displays each ship that the computer places on their board. */\n.computer-ship-placed{\n    border: 1px solid black !important;\n}\n\n\n/***************************************************************************************************************************************************************************/\n/***************************************************************************************************************************************************************************/\n/* |Inteface Section| */\n.interface{\n    display: flex;\n    flex-direction: column;\n    \n    border: 1px solid orange;\n    padding: 10px;\n}\n\n/* current-coordinate - The current coordinate choosen by the user. */\n.current-coordinate{\n    background-color: lightcoral;\n    border: 1px solid lightcoral;\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1NLE9BQU8sR0FBR2pCLGtCQUFBLENBQUlDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRUMsR0FBRyxDQUFDO0VBQUEsT0FBTUQsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDO0FBQUEsRUFBQztBQUMxRHhGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsRUFBRXFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDckN0RyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ25COztBQUVBRixrRUFBYSxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL0RvbUNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3V0aWxzL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvdXRpbHMvU2hpcC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi4vdXRpbHMvR2FtZWJvYXJkXCI7XG5cbi8vIEF4aXNTZWxlY3RlZCgpOiBXaWxsIG9wZXJhdGUgdGhlIGF4aXMgdGhlIGNoYW5nZSBieSBib29sZWFuLlxuY29uc3QgQXhpc1NlbGVjdGVkID0gKCgpID0+IHtcbiAgICBsZXQgYXhpc1NlbGVjdGVkID0gZmFsc2U7XG5cbiAgICByZXR1cm4ge2F4aXNTZWxlY3RlZH07XG59KSgpO1xuXG4vLyBOZXdHYW1lU2VsZWN0ZWQoKTogVG9nZ2xlcyB0cnVlIGlmIHRoZSBuZXcgZ2FtZSBidXR0b24gd2FzIGNsaWNrZWQuXG5jb25zdCBOZXdHYW1lU2VsZWN0ZWQgPSAoKCkgPT4ge1xuICAgIGxldCBuZXdHYW1lU2VsZWN0ZWQgPSBmYWxzZTtcblxuICAgIHJldHVybiB7bmV3R2FtZVNlbGVjdGVkfTsgXG59KSgpO1xuXG4vLyBTaGlwRGF0YSBMaXRlcmwgT2JqZWN0OiBXaWxsIGNvbnRhaW4gc2hpcCBkYXRhIHRvIGNvbnRyb2wgdGhlIGZsb3cgb2Ygc2hpcHMgb24gdGhlIGdhbWVib2FyZC4gXG5sZXQgU2hpcERhdGEgPSB7XG4gICAgbGVuZ3RoSW5kZXg6IDAsXG4gICAgc2hpcHNQbGFjZWQ6IDAsXG4gICAgc2hpcExlbmd0aDogMCxcbn1cblxuLy8gQXhpc0NoYW5nZSBMaXRlcmFsIE9iamVjdDogXG5sZXQgQXhpc0NoYW5nZSA9IHtcbiAgICBheGlzQ2hhbmdlOiBudWxsLCBcbiAgICBheGlzV2FzQ2hhbmdlZDogZmFsc2UsXG59XG5cbi8vIEluaXRpYWxpemluZ0RPTSgpOiBJbnRpYWxpemluZyBET00gQ29udGVudCBmb3IgdGhlIGVudGlyZSBhcHBsaWNhdGlvbi4gXG5leHBvcnQgZnVuY3Rpb24gSW5pdGlhbGl6ZURPTSgpe1xuICAgIGNvbnNvbGUubG9nKFwiSW5pdGlhbGl6aW5nIERPTSBDb250ZW50Li4uXCIpOyAvLyBUZXN0aW5nIFxuICAgIGNvbnNvbGUubG9nKCdcXG4nKTsgLy8gVGVzdGluZyBcblxuICAgIEdhbWVib2FyZERPTSgpO1xuICAgIEludGVyZmFjZURPTSgpO1xuICAgIFBsYXllck9uZURPTSgpO1xuICAgIENvbXB1dGVyRE9NKCk7XG4gICAgQ29tcHV0ZXJQbGFjZVNoaXBzKCk7XG4gICAgLy8gQXhpc0RPTSgpO1xufVxuLy8gTnVtYmVyT2ZTaGlwc1BsYWNlZCgpOiBXaWxsIGtlZXAgdHJhY2sgb2YgdGhlIGN1cnJlbnQgc2hpcCB0byBiZSBwbGFjZWQgb24gdGhlIGdhbWVib2FyZC5cbmZ1bmN0aW9uIE51bWJlck9mU2hpcHNQbGFjZWQoKXtcbiAgICBjb25zdCBudW1iZXJPZlNoaXBzUGxhY2VkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm51bWJlci1vZi1zaGlwcycpO1xuXG4gICAgaWYgKCEoKFNoaXBEYXRhLmxlbmd0aEluZGV4ICsgMSkgPiAxMCkpXG4gICAge1xuICAgICAgICBTaGlwRGF0YS5zaGlwc1BsYWNlZCsrO1xuICAgICAgICBudW1iZXJPZlNoaXBzUGxhY2VkLnRleHRDb250ZW50ID0gYFNoaXA6ICR7U2hpcERhdGEuc2hpcHNQbGFjZWR9YDtcbiAgICB9XG59XG5cbi8vIEdhbWVib2FyZERPTSgpOiBUaGUgZ2FtZWJvYXJkIERPTSBmb3IgdGhlIGVudGlyZSBhcHBsaWNhdGlvbi4gXG5mdW5jdGlvbiBHYW1lYm9hcmRET00oKXtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IGdhbWVib2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdhbWVib2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdnYW1lYm9hcmQtY29udGFpbmVyJyk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGdhbWVib2FyZENvbnRhaW5lcik7IFxufVxuXG4vLyBQbGF5ZXJPbmVET00oKTogVGhlIHBsYXllciBvbmUgYm9hcmQuXG5mdW5jdGlvbiBQbGF5ZXJPbmVET00oKXtcbiAgICBjb25zdCBnYW1lYm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZWJvYXJkLWNvbnRhaW5lcicpOyBcblxuICAgIGNvbnN0IHBsYXllck9uZUJvYXJkID0gR2FtZWJvYXJkKCk7IFxuXG4gICAgY29uc3QgcGxheWVyT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuICAgIHBsYXllck9uZS5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItb25lLWJvYXJkJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllck9uZUJvYXJkLmdhbWVib2FyZC5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcblxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHBsYXllck9uZUJvYXJkLmdhbWVib2FyZFtpXS5sZW5ndGg7IGorKyl7XG4gICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgICAgICAgICBjZWxsLmRhdGFzZXQueCA9IGk7XG4gICAgICAgICAgICBjZWxsLmRhdGFzZXQueSA9IGo7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICAgIH1cblxuICAgICAgICBwbGF5ZXJPbmUuYXBwZW5kQ2hpbGQocm93KTsgXG4gICAgfVxuXG4gICAgZ2FtZWJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllck9uZSk7IFxufVxuXG4vLyBDb21wdXRlckRPTSgpOiBUaGUgY29tcHV0ZXIgZ2FtZWJvYXJkXG5mdW5jdGlvbiBDb21wdXRlckRPTSgpe1xuICAgIGNvbnN0IGdhbWVib2FyZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lYm9hcmQtY29udGFpbmVyJyk7XG4gICAgXG4gICAgY29uc3QgY29tcHV0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgY29tcHV0ZXIuY2xhc3NMaXN0LmFkZCgnY29tcHV0ZXItZ2FtZWJvYXJkJyk7IFxuXG4gICAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IEdhbWVib2FyZCgpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21wdXRlckJvYXJkLmdhbWVib2FyZC5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICAgIGNvbnN0IGNvbXB1dGVyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29tcHV0ZXJCb2FyZC5nYW1lYm9hcmRbaV0ubGVuZ3RoOyBqKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVyQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcbiAgICAgICAgICAgIGNvbXB1dGVyQ2VsbC5kYXRhc2V0LnggPSBpO1xuICAgICAgICAgICAgY29tcHV0ZXJDZWxsLmRhdGFzZXQueSA9IGo7XG4gICAgICAgICAgICBjb21wdXRlclJvdy5hcHBlbmRDaGlsZChjb21wdXRlckNlbGwpOyBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29tcHV0ZXIuYXBwZW5kQ2hpbGQoY29tcHV0ZXJSb3cpOyBcbiAgICB9XG5cbiAgICBnYW1lYm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoY29tcHV0ZXIpOyBcbn1cblxuLy8gUGxhY2VTaGlwcygpOiBXaWxsIHBsYWNlIHRoZSBzaGlwcyBvbiB0aGUgZ2FtZWJvYXJkLlxuZnVuY3Rpb24gUGxhY2VTaGlwcyhlKXtcbiAgICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5ZXItb25lLWJvYXJkID4gZGl2ID4gZGl2Jyk7IFxuICAgIGNvbnN0IHhDb29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lYm9hcmQtY29udGFpbmVyID4gZGl2Om50aC1jaGlsZCgxKSA+IGRpdiA+IGJ1dHRvbjpudGgtY2hpbGQoMSknKTtcbiAgICBjb25zdCB5Q29vcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZWJvYXJkLWNvbnRhaW5lciA+IGRpdjpudGgtY2hpbGQoMSkgPiBkaXYgPiBidXR0b246bnRoLWNoaWxkKDIpJyk7IFxuXG4gXG4gICAgY29uc29sZS5sb2coJ0N1cnJlbnQgQXhpczogJywgQXhpc0NoYW5nZS5heGlzQ2hhbmdlKTsgLy8gVGVzdGluZyAgXG4gICAgY29uc29sZS5sb2coJ1xcbicpOyAvLyBUZXN0aW5nIFxuXG4gICAgaWYgKCFBeGlzQ2hhbmdlLmF4aXNXYXNDaGFuZ2VkICYmIFNoaXBEYXRhLmxlbmd0aEluZGV4IDwgMTApXG4gICAge1xuICAgICAgICBOdW1iZXJPZlNoaXBzUGxhY2VkKCk7IFxuICAgICAgICAgICAgXG4gICAgICAgIGNvbnN0IGJvYXJkID0gR2FtZWJvYXJkKCk7XG4gICAgICAgIGNvbnN0IHNoaXAgPSBib2FyZC5TaGlwKCk7XG4gICAgXG4gICAgICAgIFNoaXBEYXRhLnNoaXBMZW5ndGggPSBzaGlwLmRlZmF1bHRMZW5ndGhzW1NoaXBEYXRhLmxlbmd0aEluZGV4XTtcbiAgICBcbiAgICAgICAgY29uc29sZS5sb2coJ1NoaXAgbnVtYmVyIHRvIGJlIHBsYWNlZDogJywgU2hpcERhdGEubGVuZ3RoSW5kZXggKyAxKTsgLy8gVGVzdGluZyBcbiAgICAgICAgY29uc29sZS5sb2coJ1RoZSBsZW5ndGggb2YgdGhlIHNoaXAgdG8gYmUgcGxhY2VkOiAnLCBTaGlwRGF0YS5zaGlwTGVuZ3RoKTsgLy8gVGVzdGluZyBcbiAgICAgICAgY29uc29sZS5sb2coJ1xcbicpOyAvLyBUZXN0aW5nXG4gICAgfVxuXG5cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2VsbHMubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgICBpZiAoQXhpc0NoYW5nZS5heGlzQ2hhbmdlID09PSBudWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICBjZWxsc1tpXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgRW50ZXJYKTtcbiAgICAgICAgICAgIGNlbGxzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBMZWF2ZVgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKEF4aXNDaGFuZ2UuYXhpc0NoYW5nZSA9PT0gMSlcbiAgICAgICAge1xuICAgICAgICAgICAgY2VsbHNbaV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIEVudGVyWSk7XG4gICAgICAgICAgICBjZWxsc1tpXS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgTGVhdmVZKTtcbiAgICAgICAgICAgIGNlbGxzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBFbnRlclgpO1xuICAgICAgICAgICAgY2VsbHNbaV0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIExlYXZlWCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoQXhpc0NoYW5nZS5heGlzQ2hhbmdlID09PSAyKVxuICAgICAgICB7XG4gICAgICAgICAgICBjZWxsc1tpXS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgRW50ZXJYKTtcbiAgICAgICAgICAgIGNlbGxzW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBMZWF2ZVgpO1xuICAgICAgICAgICAgY2VsbHNbaV0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIEVudGVyWSk7XG4gICAgICAgICAgICBjZWxsc1tpXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgTGVhdmVZKTsgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoU2hpcERhdGEubGVuZ3RoSW5kZXggPiA5KSAvLyBXaWxsIGRlYWN0aXZhdGUgcGxheWVyIG9uZXMgc2hpcCBwbGFjZW1lbnQuIFxuICAgIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNlbGxzLmxlbmd0aDsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBjZWxsc1tpXS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgRW50ZXJYKTtcbiAgICAgICAgICAgIGNlbGxzW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBMZWF2ZVgpOyBcbiAgICAgICAgICAgIGNlbGxzW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBFbnRlclkpO1xuICAgICAgICAgICAgY2VsbHNbaV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIExlYXZlWSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUT0RPOiBBY3RpdmF0ZSB0aGUgY29tcHV0ZXIgZ2FtZWJvYXJkIHRvIGJlZ2luIHRoZSBnYW1lLiBcbiAgICB9XG59XG5cbi8vIENvbXB1dGVyUGxhY2VTaGlwcygpOiBUaGUgY29tcHV0ZXIgd2lsbCBwbGFjZSBzaGlwcyBvbiB0aGVpciBnYW1lYm9hcmQuXG5mdW5jdGlvbiBDb21wdXRlclBsYWNlU2hpcHMoKXtcbiAgICBjb25zdCBjb21wdXRlckNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbXB1dGVyLWdhbWVib2FyZCA+IGRpdiA+IGRpdicpO1xuICAgIGNvbnNvbGUubG9nKCdDb21wdXRlciBDZWxsczogJywgY29tcHV0ZXJDZWxscyk7IC8vIFRlc3RpbmdcblxuICAgIGNvbnN0IGNvbXB1dGVyUm93cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXYnKTsgXG4gICAgY29uc29sZS5sb2coJ0NvbXB1dGVyIFJvd3M6ICcsIGNvbXB1dGVyUm93cyk7IC8vIFRlc3RpbmdcblxuICAgIGNvbnN0IGNvbXB1dGVyQm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgICBjb25zdCBjb21wdXRlclNoaXBzID0gY29tcHV0ZXJCb2FyZC5TaGlwKCk7XG4gICAgY29tcHV0ZXJTaGlwcy5kZWZhdWx0TGVuZ3Rocy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgIGxldCBjb21wdXRlclNoaXBQbGFjZWQgPSBmYWxzZTtcbiAgICAgICAgbGV0IHhDb29yZFJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChjb21wdXRlclJvd3MubGVuZ3RoKSk7IC8vIFJldHVybnMgYSByYW5kb20gbnVtYmVyIGZyb20gMCB0byA5LlxuICAgICAgICBsZXQgeUNvb3JkUmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApOyBcbiAgICAgICAgbGV0IGF4aXNSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcbiAgICAgICAgbGV0IHhMZW5ndGggPSAwO1xuICAgICAgICBsZXQgeUxlbmd0aCA9IDA7IFxuXG4gICAgICAgIGlmIChheGlzUmFuZG9tID09PSAxKSAvLyB4LWF4aXNcbiAgICAgICAge1xuICAgICAgICAgICAgeExlbmd0aCA9IDA7IFxuICAgICAgICAgICAgeUxlbmd0aCA9IHNoaXA7IFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGF4aXNSYW5kb20gPT09IDApIC8vIHktYXhpc1xuICAgICAgICB7XG4gICAgICAgICAgICB4TGVuZ3RoID0gc2hpcDtcbiAgICAgICAgICAgIHlMZW5ndGggPSAwO1xuICAgICAgICB9XG5cblxuICAgICAgICBpZiAoc2hpcCA9PT0gMClcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYHxTaGlwICR7c2hpcH18YCk7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgIHdoaWxlKCFjb21wdXRlclNoaXBQbGFjZWQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXYgPiBkaXZbZGF0YS14PVwiJHt4Q29vcmRSYW5kb219XCJdW2RhdGEteT1cIiR7eUNvb3JkUmFuZG9tfVwiXWApLmNsYXNzTGlzdC5jb250YWlucygnY29tcHV0ZXItc2hpcC1wbGFjZWQnKSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHhDb29yZFJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbXB1dGVyUm93cy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICB5Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIGlmICgoeENvb3JkUmFuZG9tICsgMSkgPj0gMTAgfHwgKHlDb29yZFJhbmRvbSArIDEpID49IDEwKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Nvb3JkaW5hdGVzIGFyZSBvZmYgdGhlIGJvYXJkJyk7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1g6ICcsIHhDb29yZFJhbmRvbSArIDEpOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdZOiAnLCB5Q29vcmRSYW5kb20gKyAxKTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnXFxuJyk7IC8vIFRlc3RpbmcgIFxuICAgIFxuICAgICAgICAgICAgICAgICAgICB4Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb21wdXRlclJvd3MubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgeUNvb3JkUmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb21wdXRlclNoaXBQbGFjZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVyQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXYgPiBkaXZbZGF0YS14PVwiJHt4Q29vcmRSYW5kb219XCJdW2RhdGEteT1cIiR7eUNvb3JkUmFuZG9tfVwiXWApO1xuICAgICAgICAgICAgY29tcHV0ZXJDZWxsLmNsYXNzTGlzdC5hZGQoJ2NvbXB1dGVyLXNoaXAtcGxhY2VkJyk7IFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNoaXAgPT09IDEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGB8U2hpcCAke3NoaXB9fGApOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICB3aGlsZSAoIWNvbXB1dGVyU2hpcFBsYWNlZClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsZXQgY29vcmRpbmF0ZXMgPSB7fTtcbiAgICAgICAgICAgICAgICBsZXQgY29vcmRpbmF0ZUluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICBjb21wdXRlckNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb21wdXRlci1zaGlwLXBsYWNlZCcpKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnWCBDZWxsOiAnLCBjZWxsLmRhdGFzZXQueCk7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdZIENlbGw6ICcsIGNlbGwuZGF0YXNldC55KTsgLy8gVGVzdGluZyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdYIFJhbmRvbTogJywgeENvb3JkUmFuZG9tKTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1kgUmFuZG9tOiAnLCB5Q29vcmRSYW5kb20pOyAvLyBUZXN0aW5nIFxuICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXNbY29vcmRpbmF0ZUluZGV4KytdID0gW3BhcnNlSW50KGNlbGwuZGF0YXNldC54KSwgcGFyc2VJbnQoY2VsbC5kYXRhc2V0LnkpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdcXG4nKTsgLy8gVGVzdGluZyBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb29yZGluYXRlcyB3aXRoIHNoaXAgcGxhY2VtZW50czogJywgY29vcmRpbmF0ZXMpOyAvLyBUZXN0aW5nIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIGNvb3JkaW5hdGVzKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvb3JkaW5hdGVzTm90T3ZlcmxhcHBpbmcgPSBmYWxzZTsgXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvb3JkaW5hdGVzW2tleV0pOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICghY29vcmRpbmF0ZXNOb3RPdmVybGFwcGluZylcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCgoY29vcmRpbmF0ZXNba2V5XVswXSA9PT0geENvb3JkUmFuZG9tICYmIGNvb3JkaW5hdGVzW2tleV1bMV0gPT09IHlDb29yZFJhbmRvbSkgfHwgKGNvb3JkaW5hdGVzW2tleV1bMF0gPT09ICh4Q29vcmRSYW5kb20gKyB4TGVuZ3RoKSAmJiBjb29yZGluYXRlc1trZXldWzFdID09PSAoeUNvb3JkUmFuZG9tICsgeUxlbmd0aCkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgfHwgKChjb29yZGluYXRlc1trZXldWzBdID09PSB4Q29vcmRSYW5kb20gJiYgY29vcmRpbmF0ZXNba2V5XVsxXSA9PT0geUNvb3JkUmFuZG9tKSAmJiAoY29vcmRpbmF0ZXNba2V5XVswXSA9PT0gKHhDb29yZFJhbmRvbSArIHhMZW5ndGggKSAmJiBjb29yZGluYXRlc1trZXldWzFdID09PSAoeUNvb3JkUmFuZG9tICsgeUxlbmd0aCkpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb21wdXRlclJvd3MubGVuZ3RoKTsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeUNvb3JkUmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApOyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZm91bmQnKTsgLy8gVGVzdGluZyBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBOZWVkIHRvIHRlc3Qgb25lIG1vcmUgdGltZSB0byBmaW5kIG91dCBpZiBpdCBzdGlsbCBvdmVybGFwcyB3aXRoIGFueSBvZiB0aGUgY2VsbHMuIFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzTm90T3ZlcmxhcHBpbmcgPSB0cnVlOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHhDb29yZFJhbmRvbSArIDEpID49IDEwIHx8ICh5Q29vcmRSYW5kb20gKyAxKSA+PSAxMClcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb21wdXRlclJvd3MubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgY29tcHV0ZXJDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNvbXB1dGVyLWdhbWVib2FyZCA+IGRpdiA+IGRpdltkYXRhLXg9XCIke3hDb29yZFJhbmRvbX1cIl1bZGF0YS15PVwiJHt5Q29vcmRSYW5kb219XCJdYCk7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcHV0ZXJDZWxsT25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNvbXB1dGVyLWdhbWVib2FyZCA+IGRpdiA+IGRpdltkYXRhLXg9XCIke3hDb29yZFJhbmRvbSArIHhMZW5ndGh9XCJdW2RhdGEteT1cIiR7eUNvb3JkUmFuZG9tICsgeUxlbmd0aH1cIl1gKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb21wdXRlckNlbGwpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbXB1dGVyQ2VsbE9uZSk7IFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICgoeENvb3JkUmFuZG9tICsgMSkgPj0gMTAgfHwgKHlDb29yZFJhbmRvbSArIDEpID49IDEwKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Nvb3JkaW5hdGVzIGFyZSBvZmYgdGhlIGJvYXJkLicpOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdYOiAnLCB4Q29vcmRSYW5kb20gKyAxKTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnWTogJywgeUNvb3JkUmFuZG9tICsgMSk7IC8vIFRlc3RpbmcgXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdcXG4nKTsgLy8gVGVzdGluZyBcblxuICAgICAgICAgICAgICAgICAgICB4Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb21wdXRlclJvd3MubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgeUNvb3JkUmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApOyBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY29tcHV0ZXJDZWxsLmNsYXNzTGlzdC5jb250YWlucygnY29tcHV0ZXItc2hpcC1wbGFjZWQnKSB8fCBjb21wdXRlckNlbGxPbmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb21wdXRlci1zaGlwLXBsYWNlZCcpKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RoZXJlIGlzIGFuIG92ZXJsYXAnKTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgICAgICAgICB4Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb21wdXRlclJvd3MubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgeUNvb3JkUmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApOyBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdMZWF2ZSBMb29wLi4uJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdcXG4nKTsgLy8gVGVzdGluZyAgXG4gICAgICAgICAgICAgICAgICAgIGNvbXB1dGVyU2hpcFBsYWNlZCA9IHRydWU7IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTsgLy8gVGVzdGluZ1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBjb21wdXRlckNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY29tcHV0ZXItZ2FtZWJvYXJkID4gZGl2ID4gZGl2W2RhdGEteD1cIiR7eENvb3JkUmFuZG9tfVwiXVtkYXRhLXk9XCIke3lDb29yZFJhbmRvbX1cIl1gKTtcbiAgICAgICAgICAgIGNvbXB1dGVyQ2VsbC5jbGFzc0xpc3QuYWRkKCdjb21wdXRlci1zaGlwLXBsYWNlZCcpO1xuICAgICAgICAgICAgY29tcHV0ZXJDZWxsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZC1jb2xvcjogcmVkOycpOyAvLyBUZXN0aW5nXG5cbiAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVyQ2VsbE9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXYgPiBkaXZbZGF0YS14PVwiJHt4Q29vcmRSYW5kb20gKyB4TGVuZ3RofVwiXVtkYXRhLXk9XCIke3lDb29yZFJhbmRvbSArIHlMZW5ndGh9XCJdYCk7XG4gICAgICAgICAgICBjb21wdXRlckNlbGxPbmUuY2xhc3NMaXN0LmFkZCgnY29tcHV0ZXItc2hpcC1wbGFjZWQnKTsgXG4gICAgICAgICAgICBjb21wdXRlckNlbGxPbmUuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7Jyk7IC8vIFRlc3RpbmcgXG4gICAgICAgIH1cblxuXG4gICAgICAgIC8vIHdoaWxlICghY29tcHV0ZXJTaGlwUGxhY2VkKVxuICAgICAgICAvLyB7XG4gICAgICAgIC8vICAgICBpZiAoKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXYgPiBkaXZbZGF0YS14PVwiJHt4Q29vcmRSYW5kb219XCJdW2RhdGEteT1cIiR7eUNvb3JkUmFuZG9tfVwiXWApLmNsYXNzTGlzdC5jb250YWlucygnY29tcHV0ZXItc2hpcC1wbGFjZWQnKSkpXG4gICAgICAgIC8vICAgICB7XG4gICAgICAgIC8vICAgICAgICAgeENvb3JkUmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGNvbXB1dGVyUm93cy5sZW5ndGgpKTtcbiAgICAgICAgLy8gICAgICAgICB5Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIC8vICAgICB9XG5cbiAgICAgICAgLy8gICAgIGlmICgoeENvb3JkUmFuZG9tICsgMSkgPj0gMTAgfHwgKHlDb29yZFJhbmRvbSArIDEpID49IDEwKVxuICAgICAgICAvLyAgICAge1xuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdYIGFuZCBZIGFyZSBncmVhdGVyIHRoYW4gMTAnKTsgLy8gVGVzdGluZyBcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZygnWDogJywgeENvb3JkUmFuZG9tICsgMSk7IC8vIFRlc3RpbmcgXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ1k6ICcsIHlDb29yZFJhbmRvbSArIDEpOyAvLyBUZXN0aW5nXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ1xcbicpOyAvLyBUZXN0aW5nXG4gICAgICAgIC8vICAgICAgICAgeENvb3JkUmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGNvbXB1dGVyUm93cy5sZW5ndGgpKTtcbiAgICAgICAgLy8gICAgICAgICB5Q29vcmRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7IFxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgICAgZWxzZVxuICAgICAgICAvLyAgICAge1xuICAgICAgICAvLyAgICAgICAgIGNvbXB1dGVyU2hpcFBsYWNlZCA9IHRydWU7IFxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gaWYgKHNoaXAgPT09IDApXG4gICAgICAgIC8vIHtcbiAgICAgICAgLy8gICAgIGNvbnN0IGNvbXB1dGVyQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXYgPiBkaXZbZGF0YS14PVwiJHt4Q29vcmRSYW5kb219XCJdW2RhdGEteT1cIiR7eUNvb3JkUmFuZG9tfVwiXWApO1xuICAgICAgICAvLyAgICAgY29tcHV0ZXJDZWxsLmNsYXNzTGlzdC5hZGQoJ2NvbXB1dGVyLXNoaXAtcGxhY2VkJyk7IFxuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGVsc2UgaWYgKHNoaXAgPT09IDEpXG4gICAgICAgIC8vIHtcbiAgICAgICAgLy8gICAgIGlmIChheGlzUmFuZG9tID09PSAxKSAvLyB4LWF4aXNcbiAgICAgICAgLy8gICAgIHtcbiAgICAgICAgLy8gICAgICAgICBjb25zdCBjb21wdXRlckNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY29tcHV0ZXItZ2FtZWJvYXJkID4gZGl2ID4gZGl2W2RhdGEteD1cIiR7eENvb3JkUmFuZG9tfVwiXVtkYXRhLXk9XCIke3lDb29yZFJhbmRvbX1cIl1gKTsgXG4gICAgICAgIC8vICAgICAgICAgY29tcHV0ZXJDZWxsLmNsYXNzTGlzdC5hZGQoJ2NvbXB1dGVyLXNoaXAtcGxhY2VkJyk7IFxuICAgICAgICAvLyAgICAgICAgIGNvbXB1dGVyQ2VsbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQtY29sb3I6IHJlZDsnKTsgLy8gVGVzdGluZ1xuXG4gICAgICAgIC8vICAgICAgICAgY29uc3QgY29tcHV0ZXJDZWxsT25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNvbXB1dGVyLWdhbWVib2FyZCA+IGRpdiA+IGRpdltkYXRhLXg9XCIke3hDb29yZFJhbmRvbX1cIl1bZGF0YS15PVwiJHt5Q29vcmRSYW5kb20gKyAxfVwiXWApO1xuICAgICAgICAvLyAgICAgICAgIGNvbXB1dGVyQ2VsbE9uZS5jbGFzc0xpc3QuYWRkKCdjb21wdXRlci1zaGlwLXBsYWNlZCcpOyBcbiAgICAgICAgLy8gICAgICAgICBjb21wdXRlckNlbGxPbmUuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7Jyk7IC8vIFRlc3RpbmcgXG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICBlbHNlIGlmIChheGlzUmFuZG9tID09PSAwKSAvLyB5LWF4aXNcbiAgICAgICAgLy8gICAgIHtcbiAgICAgICAgLy8gICAgICAgICBjb25zdCBjb21wdXRlckNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY29tcHV0ZXItZ2FtZWJvYXJkID4gZGl2ID4gZGl2W2RhdGEteD1cIiR7eENvb3JkUmFuZG9tfVwiXVtkYXRhLXk9XCIke3lDb29yZFJhbmRvbX1cIl1gKTsgXG4gICAgICAgIC8vICAgICAgICAgY29tcHV0ZXJDZWxsLmNsYXNzTGlzdC5hZGQoJ2NvbXB1dGVyLXNoaXAtcGxhY2VkJyk7IFxuICAgICAgICAvLyAgICAgICAgIGNvbXB1dGVyQ2VsbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQtY29sb3I6IHJlZDsnKTsgLy8gVGVzdGluZ1xuXG4gICAgICAgIC8vICAgICAgICAgY29uc3QgY29tcHV0ZXJDZWxsT25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNvbXB1dGVyLWdhbWVib2FyZCA+IGRpdiA+IGRpdltkYXRhLXg9XCIke3hDb29yZFJhbmRvbSArIDF9XCJdW2RhdGEteT1cIiR7eUNvb3JkUmFuZG9tfVwiXWApO1xuICAgICAgICAvLyAgICAgICAgIGNvbXB1dGVyQ2VsbE9uZS5jbGFzc0xpc3QuYWRkKCdjb21wdXRlci1zaGlwLXBsYWNlZCcpOyBcbiAgICAgICAgLy8gICAgICAgICBjb21wdXRlckNlbGxPbmUuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7Jyk7IC8vIFRlc3RpbmcgXG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gZWxzZSBpZiAoc2hpcCA9PT0gMilcbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgICAgaWYgKGF4aXNSYW5kb20gPT09IDEpXG4gICAgICAgIC8vICAgICB7XG4gICAgICAgIC8vICAgICAgICAgY29uc3QgY29tcHV0ZXJDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNvbXB1dGVyLWdhbWVib2FyZCA+IGRpdiA+IGRpdltkYXRhLXg9XCIke3hDb29yZFJhbmRvbX1cIl1bZGF0YS15PVwiJHt5Q29vcmRSYW5kb219XCJdYCk7IFxuICAgICAgICAvLyAgICAgICAgIGNvbXB1dGVyQ2VsbC5jbGFzc0xpc3QuYWRkKCdjb21wdXRlci1zaGlwLXBsYWNlZCcpO1xuICAgICAgICAvLyAgICAgICAgIGNvbXB1dGVyQ2VsbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQtY29sb3I6IGdyZWVuOycpO1xuXG4gICAgICAgIC8vICAgICAgICAgY29uc3QgY29tcHV0ZXJDZWxsT25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNvbXB1dGVyLWdhbWVib2FyZCA+IGRpdiA+IGRpdltkYXRhLXg9XCIke3hDb29yZFJhbmRvbX1cIl1bZGF0YS15PVwiJHt5Q29vcmRSYW5kb20gKyAxfVwiXWApO1xuICAgICAgICAvLyAgICAgICAgIGNvbXB1dGVyQ2VsbE9uZS5jbGFzc0xpc3QuYWRkKCdjb21wdXRlci1zaGlwLXBsYWNlZCcpO1xuICAgICAgICAvLyAgICAgICAgIGNvbXB1dGVyQ2VsbE9uZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQtY29sb3I6IGdyZWVuOycpOyAvLyBUZXN0aW5nICAgIFxuXG4gICAgICAgIC8vICAgICAgICAgY29uc3QgY29tcHV0ZXJDZWxsVHdvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNvbXB1dGVyLWdhbWVib2FyZCA+IGRpdiA+IGRpdltkYXRhLXg9XCIke3hDb29yZFJhbmRvbX1cIl1bZGF0YS15PVwiJHt5Q29vcmRSYW5kb20gKyAyfVwiXWApO1xuICAgICAgICAvLyAgICAgICAgIGNvbXB1dGVyQ2VsbFR3by5jbGFzc0xpc3QuYWRkKCdjb21wdXRlci1zaGlwLXBsYWNlZCcpOyBcbiAgICAgICAgLy8gICAgICAgICBjb21wdXRlckNlbGxUd28uc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjsnKTsgLy8gVGVzdGluZyBcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICAgIGVsc2UgaWYoYXhpc1JhbmRvbSA9PT0gMClcbiAgICAgICAgLy8gICAgIHtcbiAgICAgICAgLy8gICAgICAgICBjb25zdCBjb21wdXRlckNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY29tcHV0ZXItZ2FtZWJvYXJkID4gZGl2ID4gZGl2W2RhdGEteD1cIiR7eENvb3JkUmFuZG9tfVwiXVtkYXRhLXk9XCIke3lDb29yZFJhbmRvbX1cIl1gKTtcbiAgICAgICAgLy8gICAgICAgICBjb21wdXRlckNlbGwuY2xhc3NMaXN0LmFkZCgnY29tcHV0ZXItc2hpcC1wbGFjZWQnKTtcbiAgICAgICAgLy8gICAgICAgICBjb21wdXRlckNlbGwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjsnKTsgLy8gVGVzdGluZyBcblxuICAgICAgICAvLyAgICAgICAgIGNvbnN0IGNvbXB1dGVyQ2VsbE9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXYgPiBkaXZbZGF0YS14PVwiJHt4Q29vcmRSYW5kb20gKyAxfVwiXVtkYXRhLXk9XCIke3lDb29yZFJhbmRvbX1cIl1gKTsgXG4gICAgICAgIC8vICAgICAgICAgY29tcHV0ZXJDZWxsT25lLmNsYXNzTGlzdC5hZGQoJ2NvbXB1dGVyLXNoaXAtcGxhY2VkJyk7IFxuICAgICAgICAvLyAgICAgICAgIGNvbXB1dGVyQ2VsbE9uZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQtY29sb3I6IGdyZWVuOycpOyAvLyBUZXN0aW5nIFxuXG4gICAgICAgIC8vICAgICAgICAgY29uc3QgY29tcHV0ZXJDZWxsVHdvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNvbXB1dGVyLWdhbWVib2FyZCA+IGRpdiA+IGRpdltkYXRhLXg9XCIke3hDb29yZFJhbmRvbSArIDJ9XCJdW2RhdGEteT1cIiR7eUNvb3JkUmFuZG9tfVwiXWApOyBcbiAgICAgICAgLy8gICAgICAgICBjb21wdXRlckNlbGxUd28uY2xhc3NMaXN0LmFkZCgnY29tcHV0ZXItc2hpcC1wbGFjZWQnKTsgXG4gICAgICAgIC8vICAgICAgICAgY29tcHV0ZXJDZWxsVHdvLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47Jyk7ICAvLyBUZXN0aW5nIFxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGVsc2UgaWYgKHNoaXAgPT09IDMpXG4gICAgICAgIC8vIHtcbiAgICAgICAgLy8gICAgIGlmIChheGlzUmFuZG9tID09PSAxKVxuICAgICAgICAvLyAgICAge1xuICAgICAgICAvLyAgICAgICAgIGNvbnN0IGNvbXB1dGVyQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXYgPiBkaXZbZGF0YS14PVwiJHt4Q29vcmRSYW5kb219XCJdW2RhdGEteT1cIiR7eUNvb3JkUmFuZG9tfVwiXWApOyBcbiAgICAgICAgLy8gICAgICAgICBjb21wdXRlckNlbGwuY2xhc3NMaXN0LmFkZCgnY29tcHV0ZXItc2hpcC1wbGFjZWQnKTtcbiAgICAgICAgLy8gICAgICAgICBjb21wdXRlckNlbGwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjsnKTtcblxuICAgICAgICAvLyAgICAgICAgIGNvbnN0IGNvbXB1dGVyQ2VsbE9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXYgPiBkaXZbZGF0YS14PVwiJHt4Q29vcmRSYW5kb219XCJdW2RhdGEteT1cIiR7eUNvb3JkUmFuZG9tICsgMX1cIl1gKTtcbiAgICAgICAgLy8gICAgICAgICBjb21wdXRlckNlbGxPbmUuY2xhc3NMaXN0LmFkZCgnY29tcHV0ZXItc2hpcC1wbGFjZWQnKTtcbiAgICAgICAgLy8gICAgICAgICBjb21wdXRlckNlbGxPbmUuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjsnKTsgLy8gVGVzdGluZyAgICBcblxuICAgICAgICAvLyAgICAgICAgIGNvbnN0IGNvbXB1dGVyQ2VsbFR3byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXYgPiBkaXZbZGF0YS14PVwiJHt4Q29vcmRSYW5kb219XCJdW2RhdGEteT1cIiR7eUNvb3JkUmFuZG9tICsgMn1cIl1gKTtcbiAgICAgICAgLy8gICAgICAgICBjb21wdXRlckNlbGxUd28uY2xhc3NMaXN0LmFkZCgnY29tcHV0ZXItc2hpcC1wbGFjZWQnKTsgXG4gICAgICAgIC8vICAgICAgICAgY29tcHV0ZXJDZWxsVHdvLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47Jyk7IC8vIFRlc3RpbmcgXG5cbiAgICAgICAgLy8gICAgICAgICBjb25zdCBjb21wdXRlckNlbGxUaHJlZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXYgPiBkaXZbZGF0YS14PVwiJHt4Q29vcmRSYW5kb219XCJdW2RhdGEteT1cIiR7eUNvb3JkUmFuZG9tICsgM31cIl1gKTtcbiAgICAgICAgLy8gICAgICAgICBjb21wdXRlckNlbGxUaHJlZS5jbGFzc0xpc3QuYWRkKCdjb21wdXRlci1zaGlwLXBsYWNlZCcpOyBcbiAgICAgICAgLy8gICAgICAgICBjb21wdXRlckNlbGxUaHJlZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQtY29sb3I6IGdyZWVuOycpOyAvLyBUZXN0aW5nXG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICBlbHNlIGlmIChheGlzUmFuZG9tID09PSAwKVxuICAgICAgICAvLyAgICAge1xuICAgICAgICAvLyAgICAgICAgIGNvbnN0IGNvbXB1dGVyQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXYgPiBkaXZbZGF0YS14PVwiJHt4Q29vcmRSYW5kb219XCJdW2RhdGEteT1cIiR7eUNvb3JkUmFuZG9tfVwiXWApOyBcbiAgICAgICAgLy8gICAgICAgICBjb21wdXRlckNlbGwuY2xhc3NMaXN0LmFkZCgnY29tcHV0ZXItc2hpcC1wbGFjZWQnKTtcbiAgICAgICAgLy8gICAgICAgICBjb21wdXRlckNlbGwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjsnKTtcblxuICAgICAgICAvLyAgICAgICAgIGNvbnN0IGNvbXB1dGVyQ2VsbE9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXYgPiBkaXZbZGF0YS14PVwiJHt4Q29vcmRSYW5kb20gKyAxfVwiXVtkYXRhLXk9XCIke3lDb29yZFJhbmRvbX1cIl1gKTtcbiAgICAgICAgLy8gICAgICAgICBjb21wdXRlckNlbGxPbmUuY2xhc3NMaXN0LmFkZCgnY29tcHV0ZXItc2hpcC1wbGFjZWQnKTtcbiAgICAgICAgLy8gICAgICAgICBjb21wdXRlckNlbGxPbmUuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjsnKTsgLy8gVGVzdGluZyAgICBcblxuICAgICAgICAvLyAgICAgICAgIGNvbnN0IGNvbXB1dGVyQ2VsbFR3byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXYgPiBkaXZbZGF0YS14PVwiJHt4Q29vcmRSYW5kb20gKyAyfVwiXVtkYXRhLXk9XCIke3lDb29yZFJhbmRvbX1cIl1gKTtcbiAgICAgICAgLy8gICAgICAgICBjb21wdXRlckNlbGxUd28uY2xhc3NMaXN0LmFkZCgnY29tcHV0ZXItc2hpcC1wbGFjZWQnKTsgXG4gICAgICAgIC8vICAgICAgICAgY29tcHV0ZXJDZWxsVHdvLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47Jyk7IC8vIFRlc3RpbmcgXG5cbiAgICAgICAgLy8gICAgICAgICBjb25zdCBjb21wdXRlckNlbGxUaHJlZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXYgPiBkaXZbZGF0YS14PVwiJHt4Q29vcmRSYW5kb20gKyAzfVwiXVtkYXRhLXk9XCIke3lDb29yZFJhbmRvbX1cIl1gKTtcbiAgICAgICAgLy8gICAgICAgICBjb21wdXRlckNlbGxUaHJlZS5jbGFzc0xpc3QuYWRkKCdjb21wdXRlci1zaGlwLXBsYWNlZCcpOyBcbiAgICAgICAgLy8gICAgICAgICBjb21wdXRlckNlbGxUaHJlZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQtY29sb3I6IGdyZWVuOycpOyAvLyBUZXN0aW5nXG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiAgICB9KTtcbn1cblxuLy8gSW50ZWZhY2VET00oKTogSW50ZXJmYWNlIHNlY3Rpb24gZm9yIHRoZSB1c2VyLiBcbmZ1bmN0aW9uIEludGVyZmFjZURPTSgpe1xuICAgIGNvbnN0IGdhbWVib2FyZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lYm9hcmQtY29udGFpbmVyJyk7XG4gICAgY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheWVyLW9uZS1ib2FyZCA+IGRpdiA+IGRpdicpO1xuXG4gICAgY29uc3QgcGxheWVySW50ZXJmYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGxheWVySW50ZXJmYWNlLmNsYXNzTGlzdC5hZGQoJ2ludGVyZmFjZScpO1xuXG4gICAgY29uc3QgbmV3R2FtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG5ld0dhbWUudGV4dENvbnRlbnQgPSAnTmV3IEdhbWUnO1xuXG4gICAgY29uc3QgcGxhY2VTaGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7IFxuICAgIHBsYWNlU2hpcC50ZXh0Q29udGVudCA9IGBQbGFjZSBTaGlwYDtcblxuICAgIGNvbnN0IGNvb3JkaW5hdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB4Q29vcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB4Q29vcmQudGV4dENvbnRlbnQgPSAneCc7XG4gICAgY29uc3QgeUNvb3JkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgeUNvb3JkLnRleHRDb250ZW50ID0gJ3knOyBcbiAgICBjb29yZGluYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKHhDb29yZCk7XG4gICAgY29vcmRpbmF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh5Q29vcmQpOyBcblxuICAgIGNvbnN0IG51bWJlck9mU2hpcHNQbGFjZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBudW1iZXJPZlNoaXBzUGxhY2VkLmNsYXNzTGlzdC5hZGQoJ251bWJlci1vZi1zaGlwcycpOyBcblxuICAgIHBsYXllckludGVyZmFjZS5hcHBlbmRDaGlsZChuZXdHYW1lKTtcbiAgICBwbGF5ZXJJbnRlcmZhY2UuYXBwZW5kQ2hpbGQocGxhY2VTaGlwKTtcbiAgICBwbGF5ZXJJbnRlcmZhY2UuYXBwZW5kQ2hpbGQoY29vcmRpbmF0ZUNvbnRhaW5lcik7IFxuICAgIHBsYXllckludGVyZmFjZS5hcHBlbmRDaGlsZChudW1iZXJPZlNoaXBzUGxhY2VkKTsgXG4gICAgZ2FtZWJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllckludGVyZmFjZSk7XG5cbiAgICBuZXdHYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgTmV3R2FtZSk7XG5cbiAgICAvLyBwbGFjZVNoaXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAvLyAgICAgU2hpcERhdGEucGxhY2VtZW50Q29tbWVuY2VkID0gdHJ1ZTsgIFxuICAgIC8vICAgICBOdW1iZXJPZlNoaXBzUGxhY2VkKCk7IFxuICAgIC8vICAgICBQbGFjZVNoaXBzKGUpO1xuICAgIC8vIH0pO1xuXG4gICAgeENvb3JkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKE5ld0dhbWVTZWxlY3RlZC5uZXdHYW1lU2VsZWN0ZWQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIEF4aXNDaGFuZ2UuYXhpc1dhc0NoYW5nZWQgPSB0cnVlOyBcbiAgICAgICAgICAgIEF4aXNDaGFuZ2UuYXhpc0NoYW5nZSA9IDE7IFxuICAgICAgICAgICAgeUNvb3JkLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQtY29vcmRpbmF0ZScpOyBcbiAgICAgICAgICAgIHhDb29yZC5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LWNvb3JkaW5hdGUnKTsgXG4gICAgICAgICAgICBQbGFjZVNoaXBzKGUpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB5Q29vcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAoTmV3R2FtZVNlbGVjdGVkLm5ld0dhbWVTZWxlY3RlZClcbiAgICAgICAge1xuICAgICAgICAgICAgQXhpc0NoYW5nZS5heGlzV2FzQ2hhbmdlZCA9IHRydWU7IFxuICAgICAgICAgICAgQXhpc0NoYW5nZS5heGlzQ2hhbmdlID0gMjsgXG4gICAgICAgICAgICB4Q29vcmQuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudC1jb29yZGluYXRlJyk7XG4gICAgICAgICAgICB5Q29vcmQuY2xhc3NMaXN0LmFkZCgnY3VycmVudC1jb29yZGluYXRlJyk7XG4gICAgICAgICAgICBQbGFjZVNoaXBzKGUpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyB4Q29vcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBDaGFuZ2VUb1hBeGlzKTtcblxuICAgIC8vIHlDb29yZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIENoYW5nZVRvWUF4aXMpO1xufVxuXG4vLyBOZXdHYW1lKCk6IFdpbGwgYmVnaW4gYSBuZXcgZ2FtZSBmb3IgdGhlIHBsYXllci4gXG5mdW5jdGlvbiBOZXdHYW1lKCl7XG4gICAgY29uc29sZS5sb2coJ1BsYXllciBiZWdpbnMgYSBuZXcgZ2FtZS4nKTsgLy8gVGVzdGluZyBcbiAgICBjb25zb2xlLmxvZygnXFxuJyk7IC8vIFRlc3RpbmcgXG5cbiAgICAvLyBUT0RPOiBSZXNldCBhbGwgdGhlIGdhbWUgYXR0cmlidXRlcyBpbiB0aGlzIGZ1bmN0aW9uIHdoZW4gdGhlXG4gICAgLy8gdXNlciB3YW50cyB0byBzdGFydCBhIG5ldyBnYW1lLiBcblxuICAgIE5ld0dhbWVTZWxlY3RlZC5uZXdHYW1lU2VsZWN0ZWQgPSB0cnVlOyBcbiAgICBQbGFjZVNoaXBzKCk7IFxufVxuXG4vLyBIb3ZlclRlc3RET00oKTogVGhlIGhvdmVyIHRlc3Qgb24gdGhlIGJvYXJkLlxuZnVuY3Rpb24gQXhpc0RPTShlKXtcbiAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllci1vbmUtYm9hcmQgPiBkaXYgPiBkaXYnKTtcbiAgICBjb25zb2xlLmxvZygnQ2VsbHM6ICcsIGNlbGwpOyAvLyBUZXN0aW5nXG5cbiAgICAvLyBjb25zdCB4Q29vcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZWJvYXJkLWNvbnRhaW5lciA+IGRpdjpudGgtY2hpbGQoMSkgPiBkaXYgPiBidXR0b246bnRoLWNoaWxkKDEpJyk7XG4gICAgLy8gY29uc29sZS5sb2coeENvb3JkKTsgLy8gVGVzdGluZyBcbiAgICAvLyBjb25zdCB5Q29vcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZWJvYXJkLWNvbnRhaW5lciA+IGRpdjpudGgtY2hpbGQoMSkgPiBkaXYgPiBidXR0b246bnRoLWNoaWxkKDIpJyk7IFxuICAgIC8vIGNvbnNvbGUubG9nKHlDb29yZCk7IC8vIFRlc3RpbmdcblxuICAgIC8vIFRlc3RpbmcgZm9yIHlDb29yZDpcbiAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IGNlbGwubGVuZ3RoOyBpKyspXG4gICAgLy8ge1xuICAgIC8vICAgICBjZWxsW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XG4gICAgLy8gICAgICAgICBpZiAoIShwYXJzZUludChjZWxsW2ldLmRhdGFzZXQueCkgPT09IDkpKVxuICAgIC8vICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgIGNlbGxbaV0uY2xhc3NMaXN0LmFkZCgnaG92ZXItdGVzdCcpO1xuICAgIC8vICAgICAgICAgICAgIGNlbGxbaSArIDEwXS5jbGFzc0xpc3QuYWRkKCdob3Zlci10ZXN0Jyk7IFxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9KTtcbiAgICAvLyB9XG5cbiAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IGNlbGwubGVuZ3RoOyBpKyspXG4gICAgLy8ge1xuICAgIC8vICAgICBjZWxsW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgLy8gICAgICAgICBpZiAoY2VsbFtpXS5jbGFzc0xpc3QuY29udGFpbnMoJ2hvdmVyLXRlc3QnKSlcbiAgICAvLyAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICBjZWxsW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTtcbiAgICAvLyAgICAgICAgICAgICBjZWxsW2kgKyAxMF0uY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItdGVzdCcpO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9KTtcbiAgICAvLyB9XG5cbiAgICAvLyBUZXN0aW5nIGZvciB4Q29vcmQ6XG4gICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBjZWxsLmxlbmd0aDsgaSsrKVxuICAgIC8vIHtcbiAgICAvLyAgICAgaWYgKCFBeGlzQ2hhbmdlLnlBeGlzQ2hhbmdlKVxuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgICBjZWxsW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgaWYgKCEocGFyc2VJbnQoY2VsbFtpXS5kYXRhc2V0LnggPT09IDkpKSAmJiAhKHBhcnNlSW50KGNlbGxbaV0uZGF0YXNldC55KSA9PT0gOSkpXG4gICAgLy8gICAgICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgICAgICBjZWxsW2ldLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXRlc3QnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgY2VsbFtpICsgMV0uY2xhc3NMaXN0LmFkZCgnaG92ZXItdGVzdCcpO1xuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH0pO1xuICAgIFxuICAgIC8vICAgICAgICAgY2VsbFtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZygnWDogJywgY2VsbFtpXS5kYXRhc2V0LngpOyAvLyBUZXN0aW5nXG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coJ1k6ICcsIGNlbGxbaV0uZGF0YXNldC55KTsgLy8gVGVzdGluZ1xuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdYMjogJywgY2VsbFtpICsgMV0uZGF0YXNldC54KTsgLy8gVGVzdGluZ1xuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdYMzogJywgY2VsbFtpICsgMV0uZGF0YXNldC55KTsgLy8gVGVzdGluZyBcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZygnXFxuJyk7IC8vIFRlc3RpbmdcbiAgICAvLyAgICAgICAgIH0pO1xuXG4gICAgLy8gICAgICAgICBjZWxsW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgaWYgKGNlbGxbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdob3Zlci10ZXN0JykpXG4gICAgLy8gICAgICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgICAgICBjZWxsW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgY2VsbFtpICsgMV0uY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItdGVzdCcpOyAgICBcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICB9KTtcbiAgICAvLyAgICAgfVxuXG4gICAgLy8gfVxuXG4gICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBjZWxsLmxlbmd0aDsgaSsrKVxuICAgIC8vIHtcbiAgICAvLyAgICAgY2VsbFtpXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgIC8vICAgICAgICAgaWYgKGNlbGxbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdob3Zlci10ZXN0JykpXG4gICAgLy8gICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgY2VsbFtpXS5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci10ZXN0Jyk7XG4gICAgLy8gICAgICAgICAgICAgY2VsbFtpICsgMV0uY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItdGVzdCcpOyAgICBcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfVxufVxuXG4vLyBDaGFuZ2VUb1hBeGlzKCk6IFdpbGwgY2hhbmdlIHRoZSBheGlzIHNlbGVjdGlvbiBvZiB0aGUgZ2FtZWJvYXJkIHRvIHRoZSB4LWF4aXMuXG5mdW5jdGlvbiBDaGFuZ2VUb1hBeGlzKCl7XG4gICAgY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheWVyLW9uZS1ib2FyZCA+IGRpdiA+IGRpdicpO1xuICAgIGNvbnN0IHlDb29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lYm9hcmQtY29udGFpbmVyID4gZGl2Om50aC1jaGlsZCgxKSA+IGRpdiA+IGJ1dHRvbjpudGgtY2hpbGQoMiknKTtcblxuICAgIEF4aXNTZWxlY3RlZC5heGlzU2VsZWN0ZWQgPSB0cnVlOyBcbiAgICBjb25zb2xlLmxvZygnWCBvciBZIEF4aXMgaGFzIGJlZW4gc2VsZWN0ZWQ6ICcsIEF4aXNTZWxlY3RlZC5heGlzU2VsZWN0ZWQpOyAvLyBUZXN0aW5nXG5cbiAgICAvLyBSZW1vdmUgRW50ZXJZIGFuZCBMZWF2ZVkgRXZlbnQgTGlzdGVuZXJzIFxuICAgIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgRW50ZXJZKTtcbiAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgTGVhdmVZKTtcbiAgICB9KTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2VsbHMubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgICBjZWxsc1tpXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgRW50ZXJYKTtcblxuICAgICAgICBjZWxsc1tpXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgTGVhdmVYKTtcbiAgICB9XG59XG5cbi8vIEVudGVyWCgpOiBXaWxsIGVudGVyIGVhY2ggY2VsbCBvbiB0aGUgeC1heGlzIHNlbGVjdGlvbi4gXG5mdW5jdGlvbiBFbnRlclgoZSl7XG4gICAgY29uc29sZS5sb2coZSk7IC8vIFRlc3RpbmcgXG4gICAgY29uc29sZS5sb2coZS50YXJnZXQpOyAvLyBUZXN0aW5nIFxuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmRhdGFzZXQueCk7IC8vIFRlc3RpbmcgXG4gICAgY29uc29sZS5sb2coZS50YXJnZXQuZGF0YXNldC55KTsgLy8gVGVzdGluZ1xuICAgIGNvbnNvbGUubG9nKCdcXG4nKTsgLy8gVGVzdGluZ1xuIFxuICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnh9XCJdW2RhdGEteT1cIiR7ZS50YXJnZXQuZGF0YXNldC55fVwiXWApO1xuICAgIGNvbnN0IG5leHRDZWxsT25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7ZS50YXJnZXQuZGF0YXNldC54fVwiXVtkYXRhLXk9XCIke3BhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueSkgKyAxfVwiXWApO1xuICAgIGNvbnN0IG5leHRDZWxsVHdvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7ZS50YXJnZXQuZGF0YXNldC54fVwiXVtkYXRhLXk9XCIke3BhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueSkgKyAyfVwiXWApO1xuICAgIGNvbnN0IG5leHRDZWxsVGhyZWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnh9XCJdW2RhdGEteT1cIiR7cGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC55KSArIDN9XCJdYCk7XG5cbiAgICBpZiAoU2hpcERhdGEuc2hpcExlbmd0aCA9PT0gMClcbiAgICB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaG92ZXItdGVzdCcpOyBcbiAgICB9XG4gICAgZWxzZSBpZiAoU2hpcERhdGEuc2hpcExlbmd0aCA9PT0gMSkgLy8gVGhlIHNoaXAgbGVuZ3RoIHRvIGJlIHBsYWNlZCBvbiB0aGUgYm9hcmQuXG4gICAge1xuICAgICAgICBpZiAoIShwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnkpID09PSA5KSkgLy8gS2VlcHMgYWxsIHNoaXAgcGxhY2VtZW50cyBvbiB0aGUgZ2FtZWJvYXJkLiBcbiAgICAgICAge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdob3Zlci10ZXN0Jyk7XG5cbiAgICAgICAgICAgIGNvbnN0IG5leHRDZWxsT25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7ZS50YXJnZXQuZGF0YXNldC54fVwiXVtkYXRhLXk9XCIke3BhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueSkgKyAxfVwiXWApO1xuICAgICAgICAgICAgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmFkZCgnaG92ZXItdGVzdCcpOyBcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAyKVxuICAgIHtcbiAgICAgICAgaWYgKCEoKHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueSkgKyAyKSA9PT0gMTApICYmICEoKHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueSkgKyAxKSA9PT0gOSkgJiYgIShwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnkpID09PSA5KSlcbiAgICAgICAge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgICAgICBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuYWRkKCdob3Zlci10ZXN0Jyk7IFxuICAgICAgICAgICAgbmV4dENlbGxUd28uY2xhc3NMaXN0LmFkZCgnaG92ZXItdGVzdCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKFNoaXBEYXRhLnNoaXBMZW5ndGggPT09IDMpXG4gICAge1xuICAgICAgICBpZiAoISgocGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC55KSArIDMpID09PSAxMCkgJiYgISgocGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC55KSArIDIpID09PSA5KSAmJiAhKChwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnkpICsgMSkgPT09IDkpICYmICEocGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC55KSA9PT0gOSkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaG92ZXItdGVzdCcpO1xuICAgICAgICAgICAgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmFkZCgnaG92ZXItdGVzdCcpO1xuICAgICAgICAgICAgbmV4dENlbGxUd28uY2xhc3NMaXN0LmFkZCgnaG92ZXItdGVzdCcpO1xuICAgICAgICAgICAgbmV4dENlbGxUaHJlZS5jbGFzc0xpc3QuYWRkKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBOb3RlOiBJIGNvdWxkIHB1dCB0aGlzIGluIGl0cyBvd24gZnVuY3Rpb24sIGJ1dCBmb3Igbm93IEkgd2lsbCB1c2UgdGhlIEVudGVyWCBmdW5jdGlvbiB0byB0ZXN0XG4gICAgLy8gdGhpcyBhbG9nb3JpdGhtIG91dC4gXG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ1g6ICcsIGNlbGwuZGF0YXNldC54KTsgXG4gICAgICAgIGNvbnNvbGUubG9nKCdZOiAnLCBjZWxsLmRhdGFzZXQueSk7IFxuICAgICAgICAvLyBUT0RPOiBTaGlwIHBsYWNlbWVudCBvbiB0aGUgYm9hcmQgY2FuIGJlIGRvbmUgaW5zaWRlIHRoaXMgZnVuY3Rpb24uIFxuXG4gICAgICAgIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAwKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykpIC8vIENhbnQgcGxhY2UgdGhlIHNoaXAgb24gdGhpcyBjZWxsIHdoZW4gdGhlcmUgaXMgb25lIGFscmVhZHkgb24gdGhlIGNlbGwuIFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDZWxsIGFscmVhZHkgY29udGFpbnMgYSBzaGlwJyk7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VkJyk7IFxuICAgICAgICAgICAgICAgIFNoaXBEYXRhLmxlbmd0aEluZGV4Kys7IFxuICAgICAgICAgICAgICAgIEF4aXNDaGFuZ2UuYXhpc1dhc0NoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBQbGFjZVNoaXBzKCk7IFxuICAgICAgICAgICAgfSAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAxKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoKGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpICYmIG5leHRDZWxsT25lLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSkgXG4gICAgICAgICAgICB8fCAoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgfHwgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ2VsbCBhbHJlYWR5IGNvbnRpYW5zIGEgc2hpcCcpOyAvLyBUZXN0aW5nXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlZCcpO1xuICAgICAgICAgICAgICAgIG5leHRDZWxsT25lLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VkJyk7XG4gICAgICAgICAgICAgICAgU2hpcERhdGEubGVuZ3RoSW5kZXgrKztcbiAgICAgICAgICAgICAgICBBeGlzQ2hhbmdlLmF4aXNXYXNDaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgUGxhY2VTaGlwcygpOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAyKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoKGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpICYmIG5leHRDZWxsT25lLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSAmJiBuZXh0Q2VsbFR3by5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykpIFxuICAgICAgICAgICAgfHwgKGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpIHx8IG5leHRDZWxsT25lLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSB8fCBuZXh0Q2VsbFR3by5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDZWxsIGFscmVhZHkgY29udGFpbnMgYSBzaGlwJyk7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VkJyk7XG4gICAgICAgICAgICAgICAgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmFkZCgnc2hpcC1wbGFjZWQnKTtcbiAgICAgICAgICAgICAgICBuZXh0Q2VsbFR3by5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlZCcpO1xuICAgICAgICAgICAgICAgIFNoaXBEYXRhLmxlbmd0aEluZGV4Kys7XG4gICAgICAgICAgICAgICAgQXhpc0NoYW5nZS5heGlzV2FzQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIFBsYWNlU2hpcHMoKTsgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoU2hpcERhdGEuc2hpcExlbmd0aCA9PT0gMylcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKChjZWxsLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSAmJiBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgJiYgbmV4dENlbGxUd28uY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpICYmIG5leHRDZWxsVGhyZWUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpKVxuICAgICAgICAgICAgfHwgKGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpIHx8IG5leHRDZWxsT25lLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSB8fCBuZXh0Q2VsbFR3by5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgfHwgbmV4dENlbGxUaHJlZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDZWxsIGFscmVhZHkgY29udGFpbnMgYSBzaGlwJyk7IC8vIFRlc3RpbmdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VkJyk7XG4gICAgICAgICAgICAgICAgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmFkZCgnc2hpcC1wbGFjZWQnKTtcbiAgICAgICAgICAgICAgICBuZXh0Q2VsbFR3by5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlZCcpO1xuICAgICAgICAgICAgICAgIG5leHRDZWxsVGhyZWUuY2xhc3NMaXN0LmFkZCgnc2hpcC1wbGFjZWQnKTtcbiAgICAgICAgICAgICAgICBTaGlwRGF0YS5sZW5ndGhJbmRleCsrOyBcbiAgICAgICAgICAgICAgICBBeGlzQ2hhbmdlLmF4aXNXYXNDaGFuZ2VkID0gZmFsc2U7IFxuICAgICAgICAgICAgICAgIFBsYWNlU2hpcHMoKTsgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gIFxuICAgIH0pO1xufVxuXG4vLyBMZWF2ZVgoKTogV2lsbCBsZWF2ZSBlYWNoIGNlbGwgZnJvbSB0aGUgeC1heGlzIHNlbGVjdGlvbi4gXG5mdW5jdGlvbiBMZWF2ZVgoZSl7XG4gICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke2UudGFyZ2V0LmRhdGFzZXQueH1cIl1bZGF0YS15PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnl9XCJdYCk7XG4gICAgY29uc3QgbmV4dENlbGxPbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnh9XCJdW2RhdGEteT1cIiR7cGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC55KSArIDF9XCJdYCk7XG4gICAgY29uc3QgbmV4dENlbGxUd28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnh9XCJdW2RhdGEteT1cIiR7cGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC55KSArIDJ9XCJdYCk7XG4gICAgY29uc3QgbmV4dENlbGxUaHJlZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke2UudGFyZ2V0LmRhdGFzZXQueH1cIl1bZGF0YS15PVwiJHtwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LnkpICsgM31cIl1gKTtcblxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2hvdmVyLXRlc3QnKSlcbiAgICB7XG4gICAgICAgIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAwKVxuICAgICAgICB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAxKVxuICAgICAgICB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgICAgIG5leHRDZWxsT25lLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAyKVxuICAgICAgICB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgICAgIG5leHRDZWxsT25lLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgICAgIG5leHRDZWxsVHdvLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTsgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoU2hpcERhdGEuc2hpcExlbmd0aCA9PT0gMylcbiAgICAgICAge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgICAgICBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgICAgICBuZXh0Q2VsbFR3by5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgICAgICBuZXh0Q2VsbFRocmVlLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTsgXG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIENoYW5nZVRvWUF4aXMoKTogV2lsbCBjaGFuZ2UgdGhlIGF4aXMgc2VsZWN0aW9uIG9uIHRoZSBnYW1lYm9hcmQgdG8gdGhlIHktYXhpcy4gXG5mdW5jdGlvbiBDaGFuZ2VUb1lBeGlzKCl7XG4gICAgY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheWVyLW9uZS1ib2FyZCA+IGRpdiA+IGRpdicpOyBcbiAgICBjb25zdCB4Q29vcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZWJvYXJkLWNvbnRhaW5lciA+IGRpdjpudGgtY2hpbGQoMSkgPiBkaXYgPiBidXR0b246bnRoLWNoaWxkKDEpJyk7XG5cbiAgICBBeGlzU2VsZWN0ZWQuYXhpc1NlbGVjdGVkID0gdHJ1ZTtcbiAgICBjb25zb2xlLmxvZygnWCBvciBZIGF4aXMgaGFzIGJlZW4gc2VsZWN0ZWQ6ICcsIEF4aXNTZWxlY3RlZC5heGlzU2VsZWN0ZWQpOyAvLyBUZXN0aW5nIFxuICAgIFxuICAgIC8vIFJlbW92ZSBFbnRlclggYW5kIExlYXZlWCBFdmVudCBMaXN0ZW5lcnMuXG4gICAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBFbnRlclgpOyBcbiAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgTGVhdmVYKTsgXG4gICAgfSk7IFxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjZWxscy5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICAgIGNlbGxzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBFbnRlclkpO1xuXG4gICAgICAgIGNlbGxzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBMZWF2ZVkpO1xuICAgIH1cbn1cblxuLy8gRW50ZXJZKCk6IFdpbGwgZW50ZXIgZWFjaCBjZWxsIG9uIHRoZSB5LWF4aXMgc2VsZWN0aW9uLlxuZnVuY3Rpb24gRW50ZXJZKGUpe1xuICAgIGNvbnNvbGUubG9nKGUpOyAvLyBUZXN0aW5nIFxuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KTsgLy8gVGVzdGluZ1xuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmRhdGFzZXQueCk7IC8vIFRlc3RpbmdcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5kYXRhc2V0LnkpOyAvLyBUZXN0aW5nIFxuICAgIGNvbnNvbGUubG9nKCdcXG4nKTsgLy8gVGVzdGluZ1xuXG4gICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke2UudGFyZ2V0LmRhdGFzZXQueH1cIl1bZGF0YS15PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnl9XCJdYCk7XG4gICAgY29uc3QgbmV4dENlbGxPbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LngpICsgMX1cIl1bZGF0YS15PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnl9XCJdYCk7XG4gICAgY29uc3QgbmV4dENlbGxUd28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LngpICsgMn1cIl1bZGF0YS15PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnl9XCJdYCk7XG4gICAgY29uc3QgbmV4dENlbGxUaHJlZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke3BhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueCkgKyAzfVwiXVtkYXRhLXk9XCIke2UudGFyZ2V0LmRhdGFzZXQueX1cIl1gKTtcblxuICAgIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAwKVxuICAgIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdob3Zlci10ZXN0Jyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKFNoaXBEYXRhLnNoaXBMZW5ndGggPT09IDEpXG4gICAge1xuICAgICAgICBpZiAoIShwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LngpID09PSA5KSlcbiAgICAgICAge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgICAgICBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuYWRkKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoU2hpcERhdGEuc2hpcExlbmd0aCA9PT0gMilcbiAgICB7XG4gICAgICAgIGlmICghKChwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LngpICsgMikgPT09IDEwKSAmJiAhKChwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LngpICsgMSkgPT09IDkpICYmICEocGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC54KSA9PT0gOSkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaG92ZXItdGVzdCcpO1xuICAgICAgICAgICAgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmFkZCgnaG92ZXItdGVzdCcpO1xuICAgICAgICAgICAgbmV4dENlbGxUd28uY2xhc3NMaXN0LmFkZCgnaG92ZXItdGVzdCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKFNoaXBEYXRhLnNoaXBMZW5ndGggPT09IDMpXG4gICAge1xuICAgICAgICBpZiAoISgocGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC54KSArIDMpID09PSAxMCkgJiYgISgocGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC54KSArIDIpID09PSA5KSAmJiAhKChwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LngpICsgMSkgPT09IDkpICYmICEocGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC54KSA9PT0gOSkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaG92ZXItdGVzdCcpO1xuICAgICAgICAgICAgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmFkZCgnaG92ZXItdGVzdCcpO1xuICAgICAgICAgICAgbmV4dENlbGxUd28uY2xhc3NMaXN0LmFkZCgnaG92ZXItdGVzdCcpO1xuICAgICAgICAgICAgbmV4dENlbGxUaHJlZS5jbGFzc0xpc3QuYWRkKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgIH1cbiAgICB9ICAgXG5cbiAgICAvLyBQbGFjZXMgdGhlIHNoaXBzIG9uIHRoZSBib2FyZCBjZWxsczpcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlg6IFwiLCBjZWxsLmRhdGFzZXQueCk7IC8vIFRlc3RpbmcgXG4gICAgICAgIGNvbnNvbGUubG9nKFwiWTogXCIsIGNlbGwuZGF0YXNldC55KTsgLy8gVGVzdGluZyBcblxuICAgICAgICBpZiAoU2hpcERhdGEuc2hpcExlbmd0aCA9PT0gMClcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2VsbCBhbHJlYWR5IGNvbnRhaW5zIGEgc2hpcC5cIik7IC8vIFRlc3RpbmcgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlZCcpOyBcbiAgICAgICAgICAgICAgICBTaGlwRGF0YS5sZW5ndGhJbmRleCsrOyBcbiAgICAgICAgICAgICAgICBBeGlzQ2hhbmdlLmF4aXNXYXNDaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgUGxhY2VTaGlwcygpOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAxKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoKGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpICYmIG5leHRDZWxsT25lLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSkgXG4gICAgICAgICAgICB8fCAoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgfHwgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNlbGwgYWxyZWFkeSBjb250YWlucyBhIHNoaXAuXCIpOyAvLyBUZXN0aW5nIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcC1wbGFjZWQnKTtcbiAgICAgICAgICAgICAgICBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlZCcpOyBcbiAgICAgICAgICAgICAgICBTaGlwRGF0YS5sZW5ndGhJbmRleCsrO1xuICAgICAgICAgICAgICAgIEF4aXNDaGFuZ2UuYXhpc1dhc0NoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBQbGFjZVNoaXBzKCk7IFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKFNoaXBEYXRhLnNoaXBMZW5ndGggPT09IDIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICgoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgJiYgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpICYmIG5leHRDZWxsVHdvLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSkgXG4gICAgICAgICAgICB8fCAoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgfHwgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpIHx8IG5leHRDZWxsVHdvLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDZWxsIGFscmVhZHkgY29udGFpbnMgYSBzaGlwXCIpOyAvLyBUZXN0aW5nIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcC1wbGFjZWQnKTsgXG4gICAgICAgICAgICAgICAgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmFkZCgnc2hpcC1wbGFjZWQnKTtcbiAgICAgICAgICAgICAgICBuZXh0Q2VsbFR3by5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlZCcpOyBcbiAgICAgICAgICAgICAgICBTaGlwRGF0YS5sZW5ndGhJbmRleCsrO1xuICAgICAgICAgICAgICAgIEF4aXNDaGFuZ2UuYXhpc1dhc0NoYW5nZWQgPSBmYWxzZTsgXG4gICAgICAgICAgICAgICAgUGxhY2VTaGlwcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKFNoaXBEYXRhLnNoaXBMZW5ndGggPT09IDMpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICgoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgJiYgbmV4dENlbGxPbmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwLXBsYWNlZCcpICYmIG5leHRDZWxsVHdvLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSAmJiBuZXh0Q2VsbFRocmVlLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSlcbiAgICAgICAgICAgIHx8IChjZWxsLmNsYXNzTGlzdC5jb250YWlucygnc2hpcC1wbGFjZWQnKSB8fCBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgfHwgbmV4dENlbGxUaHJlZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykgJiYgbmV4dENlbGxUaHJlZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAtcGxhY2VkJykpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2VsbCBhbHJlYWR5IGNvbnRhaW5zIGEgc2hpcFwiKTsgLy8gVGVzdGluZyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlZCcpOyBcbiAgICAgICAgICAgICAgICBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlZCcpO1xuICAgICAgICAgICAgICAgIG5leHRDZWxsVHdvLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VkJyk7XG4gICAgICAgICAgICAgICAgbmV4dENlbGxUaHJlZS5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlZCcpO1xuICAgICAgICAgICAgICAgIFNoaXBEYXRhLmxlbmd0aEluZGV4Kys7XG4gICAgICAgICAgICAgICAgQXhpc0NoYW5nZS5heGlzV2FzQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIFBsYWNlU2hpcHMoKTsgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuLy8gTGVhdmVZKCk6IFdpbGwgbGVhdmUgZWFjaCBjZWxsIGZyb20gdGhlIHktYXhpcyBzZWxlY3Rpb24uXG5mdW5jdGlvbiBMZWF2ZVkoZSl7XG4gICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke2UudGFyZ2V0LmRhdGFzZXQueH1cIl1bZGF0YS15PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnl9XCJdYCk7XG4gICAgY29uc3QgbmV4dENlbGxPbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LngpICsgMX1cIl1bZGF0YS15PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnl9XCJdYCk7XG4gICAgY29uc3QgbmV4dENlbGxUd28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14PVwiJHtwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LngpICsgMn1cIl1bZGF0YS15PVwiJHtlLnRhcmdldC5kYXRhc2V0Lnl9XCJdYCk7XG4gICAgY29uc3QgbmV4dENlbGxUaHJlZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke3BhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQueCkgKyAzfVwiXVtkYXRhLXk9XCIke2UudGFyZ2V0LmRhdGFzZXQueX1cIl1gKTtcblxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2hvdmVyLXRlc3QnKSlcbiAgICB7XG4gICAgICAgIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAgMClcbiAgICAgICAge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoU2hpcERhdGEuc2hpcExlbmd0aCA9PT0gMSlcbiAgICAgICAge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci10ZXN0Jyk7XG4gICAgICAgICAgICBuZXh0Q2VsbE9uZS5jbGFzc0xpc3QucmVtb3ZlKCdob3Zlci10ZXN0Jyk7IFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKFNoaXBEYXRhLnNoaXBMZW5ndGggPT09IDIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItdGVzdCcpO1xuICAgICAgICAgICAgbmV4dENlbGxPbmUuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItdGVzdCcpO1xuICAgICAgICAgICAgbmV4dENlbGxUd28uY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItdGVzdCcpOyBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChTaGlwRGF0YS5zaGlwTGVuZ3RoID09PSAzKVxuICAgICAgICB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgICAgIG5leHRDZWxsT25lLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgICAgIG5leHRDZWxsVHdvLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyLXRlc3QnKTtcbiAgICAgICAgICAgIG5leHRDZWxsVGhyZWUuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItdGVzdCcpOyBcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9TaGlwXCI7XG4vKiogR2FtZWJvYXJkXG4gKiAtPiBHYW1lYm9hcmRzIHNob3VsZCBiZSBhYmxlIHRvIHBsYWNlIHNoaXBzIGF0IHNwZWNpZmljIGNvb3JkaW5hdGVzIGJ5IFxuICogY2FsbGluZyB0aGUgJ3NoaXAgZmFjdG9yeSBmdW5jdGlvbicuIFxuICovXG5cbi8vIEdhbWVib2FyZCgpOiBHYW1lYm9hcmQgZmFjdG9yeSBmdW5jdGlvbi5cbmV4cG9ydCBjb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XG4gICAgY29uc3QgZ2FtZWJvYXJkID0gWy4uLkFycmF5KDEwKV0ubWFwKCgpID0+IEFycmF5KDEwKS5maWxsKFwiXCIpKTsgXG4gICAgbGV0IHNoaXBzT25Cb2FyZCA9IDA7IFxuXG4gICAgY29uc3QgcmVjZWl2ZUF0dGFjayA9ICgpID0+IHtcbiAgICAgICAgLy8gV2lsbCB0YWtlIGEgcGFpciBvZiBjb29yZGluYXRlcywgZGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG5vdCB0aGUgYXR0YWNrIGhpdCBhIHNoaXAgYW5kXG4gICAgICAgIC8vIHRoZW4gc2VuZHMgdGhlICdoaXQnIGZ1bmN0aW9uIHRvIHRoZSBjb3JyZWN0IHNoaXAsIG9yIHJlY29yZHMgdGhlIGNvb3JkaW5hdGVzIG9mIHRoZVxuICAgICAgICAvLyBtaXNzZWQgc2hvdC4gXG4gICAgfVxuXG5cbiAgICByZXR1cm4ge2dhbWVib2FyZCwgc2hpcHNPbkJvYXJkLCByZWNlaXZlQXR0YWNrLCBTaGlwfTtcbn0iLCIvLyBTaGlwKCk6IFNoaXAgZmFjdG9yeSBmdW5jdGlvbi4gXG5leHBvcnQgY29uc3QgU2hpcCA9ICgpID0+IHtcbiAgICBsZXQgZGVmYXVsdExlbmd0aHMgPSBbMCwgMCwgMCwgMCwgMSwgMSwgMSwgMiwgMiwgM107IFxuICAgIGxldCBsZW5ndGggPSAwO1xuICAgIGxldCBoaXRzID0gMDtcbiAgICBsZXQgc3VuayA9IGZhbHNlO1xuXG4gICAgLy8gaGl0KCk6IFdpbGwgZ2F0aGVyIHRoZSBhbW91bnQgb2YgaGl0cyB0aGUgc2hpcCB3aWxsIGdldC5cbiAgICBjb25zdCBoaXQgPSAoaXNIaXQpID0+IHtcbiAgICAgICAgcmV0dXJuIGhpdHMgKz0gaXNIaXQ7XG4gICAgfVxuXG4gICAgLy8gaXNTdW5rKCk6IFdpbGwgZGV0ZXJtaW5lIGlmIHRoZSBzaGlwIGhhcyBzdW5rLiBcbiAgICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBzdW5rID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4ge2hpdCwgaXNTdW5rLCBkZWZhdWx0TGVuZ3RocywgbGVuZ3RofTtcbn1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiB8VGVzdGluZyBBcmVhIElkZW50aWZpZXJzIGFuZCBDb21wb25lbnRzfCAqL1xuI2NvbnRlbnQgPiBkaXYgPiBidXR0b257XG4gICAgcGFkZGluZzogMTBweCA1cHggMTBweCA1cHg7XG4gICAgZm9udC1mYW1pbHk6bW9ub3NwYWNlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRjb3JhbDsgXG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuI2NvbnRlbnQgPiBkaXYgPiBidXR0b246aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Ymx1ZTtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiB8TWFpbiBDb250ZW50IFNlY3Rpb258ICovXG4jY29udGVudHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgcGFkZGluZzogMTBweDsgXG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyogfEdhbWVib2FyZCBDb250YWluZXJ8ICovXG4uZ2FtZWJvYXJkLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTBweDtcblxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB3aWR0aDogMTAwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4vKiBQbGF5ZXIgT25lIEJvYXJkICovXG4ucGxheWVyLW9uZS1ib2FyZHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuLnBsYXllci1vbmUtYm9hcmQgPiBkaXZ7IC8qIHJvd3MgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICovXG4gICAgLyogcGFkZGluZzogNXB4OyAqL1xufVxuLnBsYXllci1vbmUtYm9hcmQgPiBkaXYgPiBkaXZ7IC8qIGNlbGxzICovXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRjb3JhbDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xufVxuXG4vKiBQbGF5ZXIgVHdvIEJvYXJkICovXG4uY29tcHV0ZXItZ2FtZWJvYXJke1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHB1cnBsZTtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuLmNvbXB1dGVyLWdhbWVib2FyZCA+IGRpdntcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgLyogcGFkZGluZzogMTBweDsgKi9cbn1cbi5jb21wdXRlci1nYW1lYm9hcmQgPiBkaXYgPiBkaXZ7IC8qIGNlbGxzICovXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmVlbjtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgd2lkdGg6IDMwcHg7IFxuICAgIGhlaWdodDogMzBweDtcbn1cblxuLyogaG92ZXItdGVzdCAqL1xuLmhvdmVyLXRlc3R7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2sgIWltcG9ydGFudDtcbn1cblxuLyogc2hpcC1wbGFjZWQgLSBEaXNwbGF5cyBlYWNoIHNoaXAgcGxhY2VkIG9uIHRoZSBib2FyZC4gKi9cbi5zaGlwLXBsYWNlZHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjayAhaW1wb3J0YW50O1xufVxuXG4vKiBjb21wdXRlci1zaGlwLXBsYWNlZCAtIERpc3BsYXlzIGVhY2ggc2hpcCB0aGF0IHRoZSBjb21wdXRlciBwbGFjZXMgb24gdGhlaXIgYm9hcmQuICovXG4uY29tcHV0ZXItc2hpcC1wbGFjZWR7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2sgIWltcG9ydGFudDtcbn1cblxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIHxJbnRlZmFjZSBTZWN0aW9ufCAqL1xuLmludGVyZmFjZXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgXG4gICAgYm9yZGVyOiAxcHggc29saWQgb3JhbmdlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi8qIGN1cnJlbnQtY29vcmRpbmF0ZSAtIFRoZSBjdXJyZW50IGNvb3JkaW5hdGUgY2hvb3NlbiBieSB0aGUgdXNlci4gKi9cbi5jdXJyZW50LWNvb3JkaW5hdGV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGNvcmFsO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSw4Q0FBOEM7QUFDOUM7SUFDSSwwQkFBMEI7SUFDMUIscUJBQXFCO0lBQ3JCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLDJCQUEyQjtBQUMvQjs7QUFFQSw0S0FBNEs7QUFDNUssNEtBQTRLO0FBQzVLLDJCQUEyQjtBQUMzQjtJQUNJLHFCQUFxQjtJQUNyQixhQUFhO0FBQ2pCOztBQUVBLDRLQUE0SztBQUM1Syw0S0FBNEs7QUFDNUssMEJBQTBCO0FBQzFCO0lBQ0ksYUFBYTtJQUNiLFNBQVM7O0lBRVQsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixhQUFhO0lBQ2IsY0FBYztBQUNsQjs7QUFFQSxxQkFBcUI7QUFDckI7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCOztJQUV0Qix1QkFBdUI7SUFDdkIsYUFBYTtBQUNqQjtBQUNBLHlCQUF5QixTQUFTO0lBQzlCLGFBQWE7O0lBRWIsNkJBQTZCO0lBQzdCLGtCQUFrQjtBQUN0QjtBQUNBLCtCQUErQixVQUFVO0lBQ3JDLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUEscUJBQXFCO0FBQ3JCO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjs7SUFFdEIsd0JBQXdCO0lBQ3hCLGFBQWE7QUFDakI7QUFDQTtJQUNJLGFBQWE7O0lBRWIsbUJBQW1CO0FBQ3ZCO0FBQ0EsaUNBQWlDLFVBQVU7SUFDdkMsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQSxlQUFlO0FBQ2Y7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUEsMERBQTBEO0FBQzFEO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBLHVGQUF1RjtBQUN2RjtJQUNJLGtDQUFrQztBQUN0Qzs7O0FBR0EsNEtBQTRLO0FBQzVLLDRLQUE0SztBQUM1Syx1QkFBdUI7QUFDdkI7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCOztJQUV0Qix3QkFBd0I7SUFDeEIsYUFBYTtBQUNqQjs7QUFFQSxxRUFBcUU7QUFDckU7SUFDSSw0QkFBNEI7SUFDNUIsNEJBQTRCO0FBQ2hDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIHxUZXN0aW5nIEFyZWEgSWRlbnRpZmllcnMgYW5kIENvbXBvbmVudHN8ICovXFxuI2NvbnRlbnQgPiBkaXYgPiBidXR0b257XFxuICAgIHBhZGRpbmc6IDEwcHggNXB4IDEwcHggNXB4O1xcbiAgICBmb250LWZhbWlseTptb25vc3BhY2U7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Y29yYWw7IFxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiNjb250ZW50ID4gZGl2ID4gYnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Ymx1ZTtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qIHxNYWluIENvbnRlbnQgU2VjdGlvbnwgKi9cXG4jY29udGVudHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgICBwYWRkaW5nOiAxMHB4OyBcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qIHxHYW1lYm9hcmQgQ29udGFpbmVyfCAqL1xcbi5nYW1lYm9hcmQtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHdpZHRoOiAxMDAwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4vKiBQbGF5ZXIgT25lIEJvYXJkICovXFxuLnBsYXllci1vbmUtYm9hcmR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG4ucGxheWVyLW9uZS1ib2FyZCA+IGRpdnsgLyogcm93cyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgKi9cXG4gICAgLyogcGFkZGluZzogNXB4OyAqL1xcbn1cXG4ucGxheWVyLW9uZS1ib2FyZCA+IGRpdiA+IGRpdnsgLyogY2VsbHMgKi9cXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRjb3JhbDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4vKiBQbGF5ZXIgVHdvIEJvYXJkICovXFxuLmNvbXB1dGVyLWdhbWVib2FyZHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICAgYm9yZGVyOiAxcHggc29saWQgcHVycGxlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG4uY29tcHV0ZXItZ2FtZWJvYXJkID4gZGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgICAvKiBwYWRkaW5nOiAxMHB4OyAqL1xcbn1cXG4uY29tcHV0ZXItZ2FtZWJvYXJkID4gZGl2ID4gZGl2eyAvKiBjZWxscyAqL1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZWVuO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHdpZHRoOiAzMHB4OyBcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4vKiBob3Zlci10ZXN0ICovXFxuLmhvdmVyLXRlc3R7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIHNoaXAtcGxhY2VkIC0gRGlzcGxheXMgZWFjaCBzaGlwIHBsYWNlZCBvbiB0aGUgYm9hcmQuICovXFxuLnNoaXAtcGxhY2Vke1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjayAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKiBjb21wdXRlci1zaGlwLXBsYWNlZCAtIERpc3BsYXlzIGVhY2ggc2hpcCB0aGF0IHRoZSBjb21wdXRlciBwbGFjZXMgb24gdGhlaXIgYm9hcmQuICovXFxuLmNvbXB1dGVyLXNoaXAtcGxhY2Vke1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjayAhaW1wb3J0YW50O1xcbn1cXG5cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyogfEludGVmYWNlIFNlY3Rpb258ICovXFxuLmludGVyZmFjZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIG9yYW5nZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLyogY3VycmVudC1jb29yZGluYXRlIC0gVGhlIGN1cnJlbnQgY29vcmRpbmF0ZSBjaG9vc2VuIGJ5IHRoZSB1c2VyLiAqL1xcbi5jdXJyZW50LWNvb3JkaW5hdGV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Y29yYWw7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi91dGlscy9TaGlwXCI7XG5cbmltcG9ydCB7IEluaXRpYWxpemVET00gfSBmcm9tIFwiLi9tb2R1bGVzL0RvbUNvbnRlbnRcIjtcblxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuaW1wb3J0IHRlc3RTb3VuZCBmcm9tICcuL3NvdW5kcy9taXhraXQtcmV0cm8tZ2FtZS1ub3RpZmljYXRpb24tMjEyLndhdic7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIE5vdGVzOlxuLy8gMSkgSSBvbmx5IGhhdmUgdG8gdGVzdCB0aGUgc2hpcCBvYmplY3RzIHB1YmxpYyBpbnRlcmZhY2UuIE9ubHkgJ21ldGhvZHMgb3IgcHJvcGVydGllcycgdGhhdCBhcmUgdXNlZCBvdXRzaWRlIG9mIHlvdXIgc2hpcCBvYmplY3QgXG4vLyBuZWVkIHVuaXQgdGVzdHMuIFxuLy8gXG4vLyAyKSBOb3RlIHRoYXQgd2UgaGF2ZSBub3QgeWV0IGNyZWF0ZWQgYW55IFVzZXIgSW50ZXJmYWNlLiBXZSBzaG91bGQga25vd1xuLy8gb3VyIGNvZGUgaXMgY29taW5nIHRvZ2V0aGVyIGJ5IHJ1bm5pbmcgdGhlIHRlc3RzLiBZb3Ugc2hvdWxkbid0IGJlXG4vLyByZWx5aW5nIG9uICdjb25zb2xlLmxvZycgb3IgJ0RPTSBtZXRob2RzJyB0byBtYWtlIHN1cmUgeW91ciBjb2RlIGlzXG4vLyBkb2luZyB3aGF0IHlvdSBleHBlY3QgaXQgdG8uXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gfFRlc3RpbmcgQXJlYXxcbmNvbnNvbGUubG9nKCd8VGVzdGluZyBBcmVhfCcpO1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5jb25zb2xlLmxvZyhjb250ZW50KTsgLy8gVGVzdGluZyBcblxuY29uc3QgYnV0dG9uT25lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBidXR0b25PbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTsgXG5idXR0b25PbmUudGV4dENvbnRlbnQgPSAnQ2xpY2sgTWUhJztcblxuY29uc3QgbmV3U291bmQgPSBuZXcgQXVkaW8odGVzdFNvdW5kKTtcblxuLy8gYnV0dG9uT25lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKCdZb3UgY2xpY2tlZCB0aGUgYnV0dG9uIScpOyAvLyBUZXN0aW5nXG4vLyAgICAgbmV3U291bmQucGxheSgpO1xuLy8gfSk7IFxuXG4vLyBidXR0b25PbmVDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uT25lKTtcbi8vIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnV0dG9uT25lQ29udGFpbmVyKTtcbi8vIGNvbnNvbGUubG9nKCdcXG4nKTsgLy8gVGVzdGluZyBcblxuLyoqIHxTcHJlYWQgU3ludGF4KC4uLil8XG4gKiBUaGUgc3ByZWFkKC4uLikgc3ludGF4IGFsbG93IGFuIGl0ZXJhYmxlLCBzdWNoIGFzIGFuIGFycmF5IG9yIHN0cmluZywgdG8gYmUgZXhwYW5kZWQgaW4gcGxhY2VzIFxuICogd2hlcmUgemVybyBvciBtb3JlIGFyZ3VtZW50cyAoZm9yIGZ1bmN0aW9uIGNhbGxzKSBvciBlbGVtZW50cyAoZm9yIGFycmF5IGxpdGVyYWxzKSBhcmUgZXhwZWN0ZWQuXG4gKiBJbiBhbiBvYmplY3QgbGl0ZXJhbCwgdGhlIHNwcmVhZCBzeW50YXggZW51bWVyYXRlcyB0aGUgcHJvcGVydGllcyBvZiBhbiBvYmplY3QgYW5kIGFkZHMgdGhlIGtleS12YWx1ZSBwYWlyc1xuICogdG8gdGhlIG9iamVjdCBiZWluZyBjcmVhdGVkLiBcbiAqIFxuICogU3ByZWFkIHN5bnRheCBsb29rcyBleGFjdGx5IGxpa2UgcmVzdCBzeW50YXguIEluIGEgd2F5LCBzcHJlYWQgc3ludGF4IGlzIHRoZSBvcHBvc2l0ZSBvZiByZXN0IHN5bnRheC5cbiAqIFNwcmVhZCBzeW50YXggXCJleHBhbmRzXCIgYW4gYXJyYXkgaW50byBpdHMgZWxlbWVudHMsIHdoaWxlIHJlc3Qgc3ludGF4IGNvbGxlY3RzIG11bHRpcGxlIGVsZW1lbnRzIGFuZFxuICogXCJjb25kZW5zZXNcIiB0aGVtIGludG8gYSBzaW5nbGUgZWxlbWVudC4gXG4gKiBcbiAqIE5vdGU6IFVzaW5nIHRoZSBcIm1hcCBhcnJheSBtZXRob2RcIiB3aWxsIGNyZWF0ZSBhIG5ldyBhcnJheSBmcm9tIHRoZSBjYWxsaW5nIFsuLi5hcnJheSg4KV0gdGhhdCBpc1xuICogc3ByZWFkaW5nIDggZWxlbWVudHMgaW50byBpdC4gRWFjaCBlbGVtZW50IHdpbGwgYmUgYW4gQXJyYXkgb2YgOCBlbGVtZW50cyB0aGF0IGlzIGZpbGxlZCB3aXRoIChcIlwiKTtcbiAqL1xuY29uc3QgYXJyVGVzdCA9IFsuLi5BcnJheSg4KV0ubWFwKCgpID0+IEFycmF5KDgpLmZpbGwoXCJcIikpOyBcbmNvbnNvbGUubG9nKCdUaGUgQXJyYXk6ICcsIGFyclRlc3QpOyAvLyBUZXN0aW5nXG5jb25zb2xlLmxvZygnXFxuJyk7IC8vIFRlc3Rpbmdcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbkluaXRpYWxpemVET00oKTsiXSwibmFtZXMiOlsiR2FtZWJvYXJkIiwiQXhpc1NlbGVjdGVkIiwiYXhpc1NlbGVjdGVkIiwiTmV3R2FtZVNlbGVjdGVkIiwibmV3R2FtZVNlbGVjdGVkIiwiU2hpcERhdGEiLCJsZW5ndGhJbmRleCIsInNoaXBzUGxhY2VkIiwic2hpcExlbmd0aCIsIkF4aXNDaGFuZ2UiLCJheGlzQ2hhbmdlIiwiYXhpc1dhc0NoYW5nZWQiLCJJbml0aWFsaXplRE9NIiwiY29uc29sZSIsImxvZyIsIkdhbWVib2FyZERPTSIsIkludGVyZmFjZURPTSIsIlBsYXllck9uZURPTSIsIkNvbXB1dGVyRE9NIiwiQ29tcHV0ZXJQbGFjZVNoaXBzIiwiTnVtYmVyT2ZTaGlwc1BsYWNlZCIsIm51bWJlck9mU2hpcHNQbGFjZWQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0Q29udGVudCIsImNvbmNhdCIsImNvbnRlbnQiLCJnYW1lYm9hcmRDb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kQ2hpbGQiLCJwbGF5ZXJPbmVCb2FyZCIsInBsYXllck9uZSIsImkiLCJnYW1lYm9hcmQiLCJsZW5ndGgiLCJyb3ciLCJqIiwiY2VsbCIsImRhdGFzZXQiLCJ4IiwieSIsImNvbXB1dGVyIiwiY29tcHV0ZXJCb2FyZCIsImNvbXB1dGVyUm93IiwiY29tcHV0ZXJDZWxsIiwiUGxhY2VTaGlwcyIsImUiLCJjZWxscyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ4Q29vcmQiLCJ5Q29vcmQiLCJib2FyZCIsInNoaXAiLCJTaGlwIiwiZGVmYXVsdExlbmd0aHMiLCJhZGRFdmVudExpc3RlbmVyIiwiRW50ZXJYIiwiTGVhdmVYIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkVudGVyWSIsIkxlYXZlWSIsImNvbXB1dGVyQ2VsbHMiLCJjb21wdXRlclJvd3MiLCJjb21wdXRlclNoaXBzIiwiZm9yRWFjaCIsImNvbXB1dGVyU2hpcFBsYWNlZCIsInhDb29yZFJhbmRvbSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInlDb29yZFJhbmRvbSIsImF4aXNSYW5kb20iLCJ4TGVuZ3RoIiwieUxlbmd0aCIsImNvbnRhaW5zIiwiX2xvb3AiLCJjb29yZGluYXRlcyIsImNvb3JkaW5hdGVJbmRleCIsInBhcnNlSW50Iiwia2V5IiwiY29vcmRpbmF0ZXNOb3RPdmVybGFwcGluZyIsImNvbXB1dGVyQ2VsbE9uZSIsInNldEF0dHJpYnV0ZSIsInBsYXllckludGVyZmFjZSIsIm5ld0dhbWUiLCJwbGFjZVNoaXAiLCJjb29yZGluYXRlQ29udGFpbmVyIiwiTmV3R2FtZSIsInJlbW92ZSIsIkF4aXNET00iLCJDaGFuZ2VUb1hBeGlzIiwidGFyZ2V0IiwibmV4dENlbGxPbmUiLCJuZXh0Q2VsbFR3byIsIm5leHRDZWxsVGhyZWUiLCJDaGFuZ2VUb1lBeGlzIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiQXJyYXkiLCJtYXAiLCJmaWxsIiwic2hpcHNPbkJvYXJkIiwicmVjZWl2ZUF0dGFjayIsImhpdHMiLCJzdW5rIiwiaGl0IiwiaXNIaXQiLCJpc1N1bmsiLCJ0ZXN0U291bmQiLCJnZXRFbGVtZW50QnlJZCIsImJ1dHRvbk9uZUNvbnRhaW5lciIsImJ1dHRvbk9uZSIsIm5ld1NvdW5kIiwiQXVkaW8iLCJhcnJUZXN0Il0sInNvdXJjZVJvb3QiOiIifQ==