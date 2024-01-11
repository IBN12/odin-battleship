import { Gameboard } from "../utils/Gameboard";

import { NewGameSelected } from "../utils/NewGame";
import { ShipData } from "../utils/ShipData";
import { AxisChange } from "../utils/AxisChange";
import { ActivateGame } from "../utils/ActivateGame";
import { DisablePlacement } from "../utils/DisablePlacement";
import { PlacedShips, ComputerPlacedShips } from "../utils/ShipPlacementData";

import waterExplosion from "../sounds/water-explosion.wav"; 
import explosionImage from "../images/explosion.png"; 

// InitializingDOM(): Intializing DOM Content for the entire application. 
export function InitializeDOM(){
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
function DisplayPlayerOneGameboardEvents(boardStatus, coords, sunkStatus){
    const shipSunkMssg = document.createElement('p');
    if (boardStatus === 1)
    {
        shipSunkMssg.textContent = "";
        document.getElementById('player-gameboard-events').textContent = `You hit a ship at the coordinates [${coords.dataset.x}, ${coords.dataset.y}]!`;
    }
    else if (boardStatus === 0)
    {
        shipSunkMssg.textContent = ""; 
        document.getElementById('player-gameboard-events').textContent = `Your hit missed at the coordinates [${coords.dataset.x}, ${coords.dataset.y}]!`;
    }
    else if (boardStatus === 2)
    {
        shipSunkMssg.textContent = "";
        document.getElementById('player-gameboard-events').textContent = 'Player One Wins Battleship!'; 
    }
    else if (boardStatus === 3)
    {
        shipSunkMssg.textContent = "";
        document.getElementById('player-gameboard-events').textContent = 'Player One Loses Battleship!'; 
    }

    if (sunkStatus)
    {
        document.getElementById('player-gameboard-events').appendChild(shipSunkMssg);
        shipSunkMssg.textContent = ` You sunk the ship!`;
    }
}

// DisplayComputerGameboardEvents(): Will display all the events that the computer initiates on player one's gameboard. 
export function DisplayComputerGameboardEvents(boardStatus, sunkStatus, shipNum){
    const shipSunkMssg = document.createElement('p');

    if (boardStatus === 1)
    {
        shipSunkMssg.textContent = ""; 
        document.getElementById('computer-gameboard-events').textContent = `The computer hit ship ${shipNum}!`;
    }
    else if (boardStatus === 0)
    {
        shipSunkMssg.textContent = "";
        document.getElementById('computer-gameboard-events').textContent = 'The computer missed!'; 
    }
    else if (boardStatus === 2)
    {
        shipSunkMssg.textContent = "";
        document.getElementById('computer-gameboard-events').textContent = 'The Computer Wins Battleship!'; 
    }
    else if (boardStatus === 3)
    {
        shipSunkMssg.textContent = "";
        document.getElementById('computer-gameboard-events').textContent = 'The Computer Loses Battleship!'; 
    }

    if (sunkStatus)
    {
        document.getElementById('computer-gameboard-events').appendChild(shipSunkMssg);
        shipSunkMssg.textContent = " The computer sunk the ship!";
    }

}

// NumberOfShipsPlaced(): Will keep track of the current ship to be placed on the gameboard.
function NumberOfShipsPlaced(){
    const numberOfShipsPlaced = document.querySelector('.number-of-ships');

    if (!((ShipData.lengthIndex + 1) > 10))
    {
        ShipData.shipsPlaced++;
        numberOfShipsPlaced.textContent = `Ship: ${ShipData.shipsPlaced}`;
    }
}

// GameboardDOM(): The gameboard DOM for the entire application. 
function GameboardDOM(){
    const content = document.querySelector('#content');

    const gameboardContainer = document.createElement('div');
    gameboardContainer.classList.add('gameboard-container');

    content.appendChild(gameboardContainer); 
}

// PlayerOneDOM(): The player one board.
function PlayerOneDOM(){
    const gameboardContainer = document.querySelector('.gameboard-container'); 

    const playerOneBoard = Gameboard(); 

    const playerOne = document.createElement('div'); 
    playerOne.classList.add('player-one-board');

    for (let i = 0; i < playerOneBoard.gameboard.length; i++){
        const row = document.createElement('div'); 

        for (let j = 0; j < playerOneBoard.gameboard[i].length; j++){
            const cell = document.createElement('div'); 
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
function ComputerDOM(){
    const gameboardContainer = document.querySelector('.gameboard-container');
    
    const computer = document.createElement('div'); 
    computer.classList.add('computer-gameboard'); 

    const computerBoard = Gameboard();

    for (let i = 0; i < computerBoard.gameboard.length; i++)
    {
        const computerRow = document.createElement('div'); 

        for (let j = 0; j < computerBoard.gameboard[i].length; j++)
        {
            const computerCell = document.createElement('div'); 
            computerCell.dataset.x = i;
            computerCell.dataset.y = j;
            computerRow.appendChild(computerCell); 
        }
        
        computer.appendChild(computerRow); 
    }

    gameboardContainer.appendChild(computer); 
}

// PlaceShips(): Will place the ships on the gameboard.
function PlaceShips(e){
    const cells = document.querySelectorAll('.player-one-board > div > div'); 
    const xCoord = document.querySelector('.gameboard-container > div:nth-child(1) > div > button:nth-child(1)');
    const yCoord = document.querySelector('.gameboard-container > div:nth-child(1) > div > button:nth-child(2)'); 

 
    console.log('Current Axis: ', AxisChange.axisChange); // Testing  
    console.log('\n'); // Testing 

    if (!AxisChange.axisWasChanged && ShipData.lengthIndex < 10)
    {
        NumberOfShipsPlaced(); 
            
        const board = Gameboard();
        const ship = board.Ship();
    
        ShipData.shipLength = ship.defaultLengths[ShipData.lengthIndex];

        ship.length = ShipData.shipLength + 1; 

        console.log('Ship number to be placed: ', ShipData.lengthIndex + 1); // Testing 
        console.log('The length of the ship to be placed: ', ShipData.shipLength); // Testing 

        PlacedShips[`ship ${ShipData.lengthIndex}`] = ship;
        console.log('Object with placed ships: ', PlacedShips); // Testing 
        console.log('\n'); // Testing
    }


    if (ShipData.lengthIndex > 9) // Will deactivate player ones ship placement. 
    {
        for(let i = 0; i < cells.length; i++)
        {
            cells[i].removeEventListener('mouseenter', EnterX);
            cells[i].removeEventListener('mouseleave', LeaveX); 
            cells[i].removeEventListener('mouseenter', EnterY);
            cells[i].removeEventListener('mouseleave', LeaveY);
            cells[i].removeEventListener('click', PlaceOnX); 
            cells[i].removeEventListener('click', PlaceOnY); 
        }

        xCoord.classList.remove('current-coordinate');
        yCoord.classList.remove('current-coordinate');

        ActivateGame.activateGame = true; 
        console.log("Game Activated: ", ActivateGame.activateGame); // Testing
        GameInitiated(); 
    }
    else
    {
        for (let i = 0; i < cells.length; i++)
        {
            if (AxisChange.axisChange === null)
            {
                cells[i].addEventListener('mouseenter', EnterX);
                cells[i].addEventListener('mouseleave', LeaveX);
            }
            else if (AxisChange.axisChange === 1)
            {
                cells[i].removeEventListener('mouseenter', EnterY);
                cells[i].removeEventListener('mouseleave', LeaveY);
                cells[i].addEventListener('mouseenter', EnterX);
                cells[i].addEventListener('mouseleave', LeaveX);
            }
            else if (AxisChange.axisChange === 2)
            {
                cells[i].removeEventListener('mouseenter', EnterX);
                cells[i].removeEventListener('mouseleave', LeaveX);
                cells[i].addEventListener('mouseenter', EnterY);
                cells[i].addEventListener('mouseleave', LeaveY); 
            }
        }
    }
}

// GameInitiated(): The player and computer will take turns picking coordinates on each others gameboard to sink a ship.
function GameInitiated(){
    const computerCells = document.querySelectorAll(`.computer-gameboard > div > div`);
    let totalComputerShipsSunk = 0; 
    let totalPlayerShipsSunk = 0; 
    
    // Check if all the computer placed ships have been sunk: Player One Wins. 
    // Note: These two test can be in its own function. 
    for (let key in ComputerPlacedShips)
    {
        if (ComputerPlacedShips[key].sunk === true)
        {
            totalComputerShipsSunk++;
        }
    }

    // Check if all the player placed ships have been sunk: Computer wins
    for (let key in PlacedShips)
    {
        if (PlacedShips[key].sunk === true)
        {
            totalPlayerShipsSunk++;   
        }
    }

    // Crown the winner. 
    if (totalComputerShipsSunk === ShipData.shipsPlaced)
    {
        console.log('Player One Wins Battleship!'); // Testing  
        // Notes: End the Click Event for PlayerOneTurn.
        // set ActivateGame.activateGame = false
        // set ActivateGame.activatePlayerOneTurn = true
        ActivateGame.activateGame = false; 
        ActivateGame.activatePlayerOneTurn = true;
        NewGameSelected.newGameSelected = false; 

        computerCells.forEach((cell) => {
            cell.removeEventListener('click', PlayerOneTurn); 
        });

        DisplayPlayerOneGameboardEvents(2, null, false); 
        DisplayComputerGameboardEvents(3, false, null);  
    }
    else if (totalPlayerShipsSunk === ShipData.shipsPlaced)
    {
        console.log('Computer Wins Battleship!'); // Testing
        ActivateGame.activateGame = false;
        ActivateGame.activatePlayerOneTurn = true;
        NewGameSelected.newGameSelected = false; 

        DisplayComputerGameboardEvents(2, false, null);
        DisplayPlayerOneGameboardEvents(3, null, false);
    }

    if (ActivateGame.activateGame)
    {
        computerCells.forEach((cell) => {
            cell.addEventListener('click', PlayerOneTurn);
        });
    }

    if (!ActivateGame.activatePlayerOneTurn)
    {
        // Remove the events for all cells on the computer gameboard.
        computerCells.forEach((cell) => {
            cell.removeEventListener('click', PlayerOneTurn); 
        });

        console.log("Player One Turn Over"); // Testing 
        console.log("\n"); // Testing
        
        ComputerTurn();  
    }
}

// PlayerOneTurn(): Player one will choose a spot on the board. 
function PlayerOneTurn(e){
    const computerCell = document.querySelector(`.computer-gameboard > div > div[data-x="${e.target.dataset.x}"][data-y="${e.target.dataset.y}"]`); 
    const explosion = new Audio(waterExplosion); 
    let computerShipIndex = 0;
    let shipNumberSunk = 0; 
    let shipSunk = false; 
    console.log(e.target); // Testing 
    console.log(computerCell); // Testing 
    console.log("X: ", e.target.dataset.x); // Testing 
    console.log("Y: ", e.target.dataset.y); // Testing

    if (e.target.dataset.x !== undefined && e.target.dataset.y !== undefined)
    {
        if (computerCell.classList.contains('computer-ship-placed'))
        {
            for (let key in ComputerPlacedShips)
            {
                computerShipIndex++; 
                for (let coord in ComputerPlacedShips[key].coordinates)
                {
                    if (ComputerPlacedShips[key].coordinates[coord][0] === parseInt(e.target.dataset.x) && ComputerPlacedShips[key].coordinates[coord][1] === parseInt(e.target.dataset.y))
                    {
                        ComputerPlacedShips[key].hits += 1;
                        console.log(ComputerPlacedShips[key]); 
                        
                        if (ComputerPlacedShips[key].hits === ComputerPlacedShips[key].length)
                        {
                            console.log(`You sunk computer ship ${computerShipIndex}`); // Testing 
                            ComputerPlacedShips[key].sunk = true;
                            shipSunk = ComputerPlacedShips[key].sunk;
                            shipNumberSunk = computerShipIndex;
                        }
                    }
                }
            }

            const explosionImg = document.createElement('img'); 
            explosionImg.src = explosionImage; 
            computerCell.appendChild(explosionImg); 
            computerCell.classList.add('computer-ship-hit'); 
    
            explosion.play(); 

            DisplayPlayerOneGameboardEvents(1, computerCell, shipSunk, shipNumberSunk); 
        }
        else if (!computerCell.hasAttribute('style'))
        {
            computerCell.setAttribute('style', 'background-color:#bef264;');
            DisplayPlayerOneGameboardEvents(0, computerCell, shipSunk, null); 
        }
    }

    ActivateGame.activatePlayerOneTurn = false;
    GameInitiated(); 
}

// ComputerTurn(): Computer will choose a spont on player one's board.
function ComputerTurn(){
    const gameboard = Gameboard(); 
    gameboard.receiveAttack(PlacedShips);

    ActivateGame.activatePlayerOneTurn = true; 

    GameInitiated(); 
}

// ComputerPlaceShips(): The computer will place ships on their gameboard.
function ComputerPlaceShips(){
    const computerCells = document.querySelectorAll('.computer-gameboard > div > div');
    console.log('Computer Cells: ', computerCells); // Testing

    const computerRows = document.querySelectorAll('.computer-gameboard > div'); 
    console.log('Computer Rows: ', computerRows); // Testing

    const computerBoard = Gameboard();
    const computerShips = computerBoard.Ship();


    computerShips.defaultLengths.forEach((ship, index) => {
        let computerShipPlaced = false;
        let xCoordRandom = Math.floor(Math.random() * (computerRows.length)); // Returns a random number from 0 to 9.
        let yCoordRandom = Math.floor(Math.random() * 10); 
        let axisRandom = Math.floor(Math.random() * 2);
        let xLengthOne = 0, xLengthTwo = 0, xLengthThree = 0;
        let yLengthOne = 0, yLengthTwo = 0, yLengthThree = 0; 

        if (axisRandom === 1) // x-axis
        {
            xLengthOne = 0; 
            yLengthOne = 1; 

            xLengthTwo = 0;
            yLengthTwo = 2;

            xLengthThree = 0;
            yLengthThree = 3;
        }
        else if (axisRandom === 0) // y-axis
        {
            xLengthOne = 1;
            yLengthOne = 0;

            xLengthTwo = 2;
            yLengthTwo = 0;

            xLengthThree = 3;
            yLengthThree = 0; 
        }


        if (ship === 0)
        {
            console.log(`|Ship ${ship}|`); // Testing
            while(!computerShipPlaced)
            {
                if (document.querySelector(`.computer-gameboard > div > div[data-x="${xCoordRandom}"][data-y="${yCoordRandom}"]`).classList.contains('computer-ship-placed'))
                {
                    xCoordRandom = Math.floor(Math.random() * computerRows.length);
                    yCoordRandom = Math.floor(Math.random() * 10);
                }
    
                if ((xCoordRandom + 1) >= 10 || (yCoordRandom + 1) >= 10)
                {
                    console.log('Coordinates are off the board'); // Testing
                    console.log('X: ', xCoordRandom + 1); // Testing
                    console.log('Y: ', yCoordRandom + 1); // Testing
                    console.log('\n'); // Testing  
    
                    xCoordRandom = Math.floor(Math.random() * computerRows.length);
                    yCoordRandom = Math.floor(Math.random() * 10);
                }
                else
                {
                    computerShipPlaced = true;
                }
            }
    
            const computerCell = document.querySelector(`.computer-gameboard > div > div[data-x="${xCoordRandom}"][data-y="${yCoordRandom}"]`);
            computerCell.classList.add('computer-ship-placed'); 
            computerCell.setAttribute('style', 'background-color: purple;');
            ComputerPlacedShips[`ship ${index}`] = {coordinates: {0: [xCoordRandom, yCoordRandom]}, length: ship + 1, hits: 0, sunk: false};
            console.log("Computer Placed Ships: ", ComputerPlacedShips); // Testing 
        }
        else if (ship === 1)
        {
            console.log(`|Ship ${ship}|`); // Testing
            while (!computerShipPlaced)
            {
                let coordinates = {};
                let coordinateIndex = 0;
                computerCells.forEach((cell) => {
                    if (cell.classList.contains('computer-ship-placed'))
                    {
                        console.log('X Cell: ', cell.dataset.x); // Testing
                        console.log('Y Cell: ', cell.dataset.y); // Testing 
                        console.log('X Random: ', xCoordRandom); // Testing
                        console.log('Y Random: ', yCoordRandom); // Testing 
                        coordinates[coordinateIndex++] = [parseInt(cell.dataset.x), parseInt(cell.dataset.y)];
                        console.log('\n'); // Testing 
                    }
                });
                console.log('Coordinates with ship placements: ', coordinates); // Testing 
            
                for (let key in coordinates)
                {
                    let coordinatesNotOverlapping = false; 
                    console.log(coordinates[key]); // Testing
                    while (!coordinatesNotOverlapping)
                    {
                        if (((coordinates[key][0] === xCoordRandom && coordinates[key][1] === yCoordRandom) || (coordinates[key][0] === (xCoordRandom + xLengthOne) && coordinates[key][1] === (yCoordRandom + yLengthOne)))
                        || ((coordinates[key][0] === xCoordRandom && coordinates[key][1] === yCoordRandom) && (coordinates[key][0] === (xCoordRandom + xLengthOne ) && coordinates[key][1] === (yCoordRandom + yLengthOne))))
                        {
                            xCoordRandom = Math.floor(Math.random() * computerRows.length); 
                            yCoordRandom = Math.floor(Math.random() * 10); 
                            console.log('found'); // Testing 
    
                            // TODO: Need to test one more time to find out if it still overlaps with any of the cells. 
                        }
                        else
                        {
                            coordinatesNotOverlapping = true; 
                        }
                    
                        if ((xCoordRandom + 1) >= 10 || (yCoordRandom + 1) >= 10)
                        {
                            xCoordRandom = Math.floor(Math.random() * computerRows.length);
                            yCoordRandom = Math.floor(Math.random() * 10); 
                        }
                    }
                }

                const computerCell = document.querySelector(`.computer-gameboard > div > div[data-x="${xCoordRandom}"][data-y="${yCoordRandom}"]`);
                const computerCellOne = document.querySelector(`.computer-gameboard > div > div[data-x="${xCoordRandom + xLengthOne}"][data-y="${yCoordRandom + yLengthOne}"]`);
                console.log(computerCell);
                console.log(computerCellOne); 
                
                if ((xCoordRandom + 1) >= 10 || (yCoordRandom + 1) >= 10)
                {
                    console.log('Coordinates are off the board.'); // Testing
                    console.log('X: ', xCoordRandom + 1); // Testing
                    console.log('Y: ', yCoordRandom + 1); // Testing 
                    console.log('\n'); // Testing 

                    xCoordRandom = Math.floor(Math.random() * computerRows.length);
                    yCoordRandom = Math.floor(Math.random() * 10); 
                }
                else if (computerCell.classList.contains('computer-ship-placed') || computerCellOne.classList.contains('computer-ship-placed'))
                {
                    console.log('There is an overlap'); // Testing
                    xCoordRandom = Math.floor(Math.random() * computerRows.length);
                    yCoordRandom = Math.floor(Math.random() * 10); 
                }
                else 
                {
                    console.log('Leave Loop...');
                    console.log('\n'); // Testing  
                    computerShipPlaced = true; 
                }
                console.log('-----------------------------'); // Testing
            }

            const computerCell = document.querySelector(`.computer-gameboard > div > div[data-x="${xCoordRandom}"][data-y="${yCoordRandom}"]`);
            computerCell.classList.add('computer-ship-placed');
            computerCell.setAttribute('style', 'background-color: red;'); // Testing

            const computerCellOne = document.querySelector(`.computer-gameboard > div > div[data-x="${xCoordRandom + xLengthOne}"][data-y="${yCoordRandom + yLengthOne}"]`);
            computerCellOne.classList.add('computer-ship-placed'); 
            computerCellOne.setAttribute('style', 'background-color: red;'); // Testing 

            ComputerPlacedShips[`ship ${index}`] = {coordinates: {0: [xCoordRandom, yCoordRandom], 1: [xCoordRandom + xLengthOne, yCoordRandom + yLengthOne]},
                                                    length: ship + 1,
                                                    hits: 0,
                                                    sunk: false};
            console.log('Computer Placed Ships: ', ComputerPlacedShips); // Testing 
        }
        else if (ship === 2)
        {
            console.log(`|Ship ${ship}|`); // Testing
            while (!computerShipPlaced)
            {
                let coordinates = {};
                let coordinateIndex = 0; 
                
                // Find which coordinates already have ship placements (Find 'computer-ship-placed'): 
                computerCells.forEach((cell) => {
                    if (cell.classList.contains('computer-ship-placed'))
                    {
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
                for (let key in coordinates)
                {
                    // Test if ship length 2 is overlapping the other ships on the board. 
                    let coordinatesNotOverlapping = false; 
                    console.log(coordinates[key]); // Testing 
                    while(!coordinatesNotOverlapping)
                    {
                        if (((coordinates[key][0] === xCoordRandom && coordinates[key][1] === yCoordRandom) || 
                        (coordinates[key][0] === (xCoordRandom + xLengthOne) && coordinates[key][1] === (yCoordRandom + yLengthOne)) || 
                        (coordinates[key][0] === (xCoordRandom + xLengthTwo)) && (coordinates[key][1] === (yCoordRandom + yLengthTwo)))
                        || ((coordinates[key][0] === xCoordRandom && coordinates[key][1] === yCoordRandom) && 
                        (coordinates[key][0] === (xCoordRandom + xLengthOne) && coordinates[key][1] === (yCoordRandom + yLengthOne)) && 
                        (coordinates[key][0] === (xCoordRandom + xLengthTwo) && coordinates[key][1] === (yCoordRandom + yLengthTwo))))
                        {
                            xCoordRandom = Math.floor(Math.random() * computerRows.length);
                            yCoordRandom = Math.floor(Math.random() * 10); 
                            console.log("found"); // Testing
                        }
                        else
                        {
                            coordinatesNotOverlapping = true;
                        }

                        // Stop the coordinates from leaving the board if they are changed. 
                        if ((xCoordRandom + 2) >= 10 || (yCoordRandom + 2) >= 10)
                        {
                            xCoordRandom = Math.floor(Math.random() * computerRows.length);
                            yCoordRandom = Math.floor(Math.random() * 10); 
                        }
                    }
                }

                const computerCell = document.querySelector(`.computer-gameboard > div > div[data-x="${xCoordRandom}"][data-y="${yCoordRandom}"]`); // Testing
                const computerCellOne = document.querySelector(`.computer-gameboard > div > div[data-x="${xCoordRandom + xLengthOne}"][data-y="${yCoordRandom + yLengthOne}"]`); // Testing
                const computerCellTwo = document.querySelector(`.computer-gameboard > div > div[data-x="${xCoordRandom + xLengthTwo}"][data-y="${yCoordRandom + yLengthTwo}"]`); // Testing
                console.log(computerCell); // Testing 
                console.log(computerCellOne); // Testing 
                console.log(computerCellTwo); // Testing 

                if ((xCoordRandom + 2) >= 10 || (yCoordRandom + 2) >= 10)
                {
                    console.log("Coordinates are off the board."); // Testing
                    console.log("X: ", xCoordRandom + 2); // Testing 
                    console.log("Y: ", yCoordRandom + 2); // Testing
                    console.log('\n'); // Testing 

                    xCoordRandom = Math.floor(Math.random() * computerRows.length);
                    yCoordRandom = Math.floor(Math.random() * 10); 
                }
                else if (computerCell.classList.contains('computer-ship-placed') || computerCellOne.classList.contains('computer-ship-placed') || computerCellTwo.classList.contains('computer-ship-placed'))
                {
                    console.log('There is an overlap.'); // Testing
                    xCoordRandom = Math.floor(Math.random() * computerRows.length);
                    yCoordRandom = Math.floor(Math.random() * 10);
                }
                else
                {
                    console.log("Leaving..."); // Testing 
                    console.log('\n'); // Testing 
                    computerShipPlaced = true; // Testing 
                }
                console.log("-----------------------------"); // Testing 
            } 

            const computerCell = document.querySelector(`.computer-gameboard > div > div[data-x="${xCoordRandom}"][data-y="${yCoordRandom}"]`);
            computerCell.classList.add('computer-ship-placed');
            computerCell.setAttribute('style', 'background-color: green;'); 

            const computerCellOne = document.querySelector(`.computer-gameboard > div > div[data-x="${xCoordRandom + xLengthOne}"][data-y="${yCoordRandom + yLengthOne}"]`);
            computerCellOne.classList.add('computer-ship-placed');
            computerCellOne.setAttribute('style', 'background-color: green;');

            const computerCellTwo = document.querySelector(`.computer-gameboard > div > div[data-x="${xCoordRandom + xLengthTwo}"][data-y="${yCoordRandom + yLengthTwo}"]`);
            computerCellTwo.classList.add('computer-ship-placed'); 
            computerCellTwo.setAttribute('style', 'background-color: green;'); 
            ComputerPlacedShips[`ship ${index}`] = {coordinates: {0: [xCoordRandom, yCoordRandom], 1: [xCoordRandom + xLengthOne, yCoordRandom + yLengthOne],
                                                                  2: [xCoordRandom + xLengthTwo, yCoordRandom + yLengthTwo]},
                                                    length: ship + 1,
                                                    hits: 0, 
                                                    sunk: false};
            console.log('Computer Placed Ships: ', ComputerPlacedShips); // Testing 
        }
        else if (ship === 3)
        {
            console.log(`|Ship ${ship}|`);   
            while(!computerShipPlaced)
            {
                let coordinates = {};
                let coordinateIndex = 0; 

                // Find which coordinates already have ship placements (Find 'computer-ship-placed'): 
                computerCells.forEach((cell) => {
                    if (cell.classList.contains('computer-ship-placed'))
                    {
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
                for (let key in coordinates)
                {
                    // Test if ship length 2 is overlapping the other ships on the board. 
                    let coordinatesNotOverlapping = false;
                    console.log(coordinates[key]); // Testing 
                    while(!coordinatesNotOverlapping)
                    {
                        if (((coordinates[key][0] === xCoordRandom && coordinates[key][1] === yCoordRandom) ||
                         (coordinates[key][0] === (xCoordRandom + xLengthOne) && coordinates[key][1] === (yCoordRandom + yLengthOne)) ||
                         (coordinates[key][0] === (xCoordRandom + xLengthTwo) && coordinates[key][1] === (yCoordRandom + yLengthTwo)) ||
                         (coordinates[key][0] === (xCoordRandom + xLengthThree) && coordinates[key][1] === (yCoordRandom + yLengthThree)))
                         || ((coordinates[key][0] === xCoordRandom && coordinates[key][1] === yCoordRandom) && 
                         (coordinates[key][0] === (xCoordRandom + xLengthOne) && coordinates[key][1] === (yCoordRandom + yLengthOne)) &&
                         (coordinates[key][0] === (xCoordRandom + xLengthTwo) && coordinates[key][1] === (yCoordRandom + yLengthTwo)) && 
                         (coordinates[key][0] === (xCoordRandom + xLengthThree) && coordinates[key][1] === (yCoordRandom + yLengthThree))))
                        {
                            xCoordRandom = Math.floor(Math.random() * computerRows.length);
                            yCoordRandom = Math.floor(Math.random() * 10); 
                            console.log("found"); // Testing
                        }
                        else 
                        {
                            coordinatesNotOverlapping = true;
                        }

                        // Stop the coordinates from leaving the board if they are changed. 
                        if ((xCoordRandom + 3) >= 10 || (yCoordRandom + 3) >= 10)
                        {
                            xCoordRandom = Math.floor(Math.random() * computerRows.length);
                            yCoordRandom = Math.floor(Math.random() * 10); 
                        }
                    }
                }

                const computerCell = document.querySelector(`.computer-gameboard > div > div[data-x="${xCoordRandom}"][data-y="${yCoordRandom}"]`); // Testing
                const computerCellOne = document.querySelector(`.computer-gameboard > div > div[data-x="${xCoordRandom + xLengthOne}"][data-y="${yCoordRandom + yLengthOne}"]`); // Testing
                const computerCellTwo = document.querySelector(`.computer-gameboard > div > div[data-x="${xCoordRandom + xLengthTwo}"][data-y="${yCoordRandom + yLengthTwo}"]`); // Testing
                const computerCellThree = document.querySelector(`.computer-gameboard > div > div[data-x="${xCoordRandom + xLengthThree}"][data-y="${yCoordRandom + yLengthThree}"]`); // Testing
                console.log(computerCell); // Testing
                console.log(computerCellOne); // Testing
                console.log(computerCellTwo); // Testing
                console.log(computerCellThree); // Testing

                if ((xCoordRandom + 3) >= 10 || (yCoordRandom + 3) >= 10)
                {
                    console.log("Coordinates are off the board."); // Testing
                    console.log("X: ", xCoordRandom + 3); // Testing
                    console.log("Y: ", yCoordRandom + 3); // Testing
                    console.log('\n'); // Testing  

                    xCoordRandom = Math.floor(Math.random() * computerRows.length); 
                    yCoordRandom = Math.floor(Math.random() * 10); 
                }
                else if (computerCell.classList.contains('computer-ship-placed') || computerCellOne.classList.contains('computer-ship-placed') || 
                        computerCellTwo.classList.contains('computer-ship-placed') || computerCellThree.classList.contains('computer-ship-placed'))
                {
                    console.log("There is an overlap."); // Testing
                    xCoordRandom = Math.floor(Math.random() * computerRows.length); 
                    yCoordRandom = Math.floor(Math.random() * 10); 
                }
                else
                {
                    console.log("Leaving..."); // Testing
                    console.log("\n"); // Testing
                    computerShipPlaced = true;
                }
                console.log("-----------------------------"); // Testing 
            }

            const computerCell = document.querySelector(`.computer-gameboard > div > div[data-x="${xCoordRandom}"][data-y="${yCoordRandom}"]`); 
            computerCell.classList.add('computer-ship-placed');
            computerCell.setAttribute('style', 'background-color: orange;');

            const computerCellOne = document.querySelector(`.computer-gameboard > div > div[data-x="${xCoordRandom + xLengthOne}"][data-y="${yCoordRandom + yLengthOne}"]`);
            computerCellOne.classList.add('computer-ship-placed');
            computerCellOne.setAttribute('style', 'background-color: orange;');

            const computerCellTwo = document.querySelector(`.computer-gameboard > div > div[data-x="${xCoordRandom + xLengthTwo}"][data-y="${yCoordRandom + yLengthTwo}"]`);
            computerCellTwo.classList.add('computer-ship-placed'); 
            computerCellTwo.setAttribute('style', 'background-color: orange;');

            const computerCellThree = document.querySelector(`.computer-gameboard > div > div[data-x="${xCoordRandom + xLengthThree}"][data-y="${yCoordRandom + yLengthThree}"]`);
            computerCellThree.classList.add('computer-ship-placed');
            computerCellThree.setAttribute('style', 'background-color: orange;'); 
            ComputerPlacedShips[`ship ${index}`] = {coordinates: {0: [xCoordRandom, yCoordRandom], 1: [xCoordRandom + xLengthOne, yCoordRandom + yLengthOne],
                                                                  2: [xCoordRandom + xLengthTwo, yCoordRandom + yLengthTwo],
                                                                  3: [xCoordRandom + xLengthThree, yCoordRandom + yLengthThree]},
                                                    length: ship + 1,
                                                    hits: 0,
                                                    sunk: false};
            console.log('Computer Placed Ships: ', ComputerPlacedShips); // Testing 
        }
    });
}

// IntefaceDOM(): Interface section for the user. 
function InterfaceDOM(){
    const gameboardContainer = document.querySelector('.gameboard-container');

    const playerInterface = document.createElement('div');
    playerInterface.classList.add('interface');

    const newGame = document.createElement('button');
    newGame.textContent = 'New Game';

    const coordinateContainer = document.createElement('div');
    const xCoord = document.createElement('button');
    xCoord.textContent = 'x';
    const yCoord = document.createElement('button');
    yCoord.textContent = 'y'; 
    coordinateContainer.appendChild(xCoord);
    coordinateContainer.appendChild(yCoord); 

    const numberOfShipsPlaced = document.createElement('div');
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
function ChangeToXAxis(e){
    const xCoord = document.querySelector('.interface > div > button:nth-child(1)');
    console.log(xCoord); 
    const yCoord = document.querySelector('.interface > div > button:nth-child(2)'); 
    if (NewGameSelected.newGameSelected)
    {
        AxisChange.axisWasChanged = true;
        AxisChange.axisChange = 1;
        yCoord.classList.remove('current-coordinate');
        xCoord.classList.add('current-coordinate');
        PlaceShips(e);
    }
}

// ChangeToYAxis(): Will allow the player to place ships along the y-axis. 
function ChangeToYAxis(e){
    const xCoord = document.querySelector('.interface > div > button:nth-child(1)');
    const yCoord = document.querySelector('.interface > div > button:nth-child(2)'); 
    if (NewGameSelected.newGameSelected)
    {
        AxisChange.axisWasChanged = true;
        AxisChange.axisChange = 2;
        xCoord.classList.remove('current-coordinate');
        yCoord.classList.add('current-coordinate'); 
        PlaceShips(e);
    }
}

// NewGame(): Will begin a new game for the player. 
function NewGame(){
    const cells = document.querySelectorAll('.player-one-board > div > div'); 
    const computerCells = document.querySelectorAll('.computer-gameboard > div > div'); 
    const xCoord = document.querySelector('.interface > div > button:nth-child(1)');
    const yCoord = document.querySelector('.interface > div > button:nth-child(2)'); 

    console.log('Player begins a new game.'); // Testing 
    console.log('\n'); // Testing 

    // TODO: Reset all the game attributes in this function when the
    // user wants to start a new game. 

    // TODO: Reset all the cells on each gameboard. 

    NewGameSelected.newGameSelected = true; 

    ActivateGame.activateGame = false;
    ActivateGame.activatePlayerOneTurn = true; 

    DisablePlacement.disablePlacement = false; 

    ShipData.lengthIndex = 0;
    ShipData.shipLength = 0;
    ShipData.shipsPlaced = 0; 

    AxisChange.axisChange = null;
    AxisChange.axisWasChanged = false; 

    Object.assign(PlacedShips, {}); // assign empty objects to both of the placement objects. 
    Object.assign(ComputerPlacedShips, {}); 
    
    // Clean the computer gameboard. 
    computerCells.forEach((computerCell) => {
        computerCell.classList.remove('computer-ship-placed'); 
        computerCell.classList.remove('computer-ship-hit');
        computerCell.removeAttribute('style'); // Testing  
        computerCell.replaceChildren(); 
    }); 
    
    // Clean the player gameboard. 
    cells.forEach((cell) => {
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
function EnterX(e){
    console.log(e); // Testing 
    console.log(e.target); // Testing 
    console.log(e.target.dataset.x); // Testing 
    console.log(e.target.dataset.y); // Testing
    console.log('\n'); // Testing
 
    const cell = document.querySelector(`[data-x="${e.target.dataset.x}"][data-y="${e.target.dataset.y}"]`);
    const nextCellOne = document.querySelector(`[data-x="${e.target.dataset.x}"][data-y="${parseInt(e.target.dataset.y) + 1}"]`);
    const nextCellTwo = document.querySelector(`[data-x="${e.target.dataset.x}"][data-y="${parseInt(e.target.dataset.y) + 2}"]`);
    const nextCellThree = document.querySelector(`[data-x="${e.target.dataset.x}"][data-y="${parseInt(e.target.dataset.y) + 3}"]`);

    if (ShipData.shipLength === 0)
    {
        cell.classList.add('hover-test'); 
    }
    else if (ShipData.shipLength === 1) // The ship length to be placed on the board.
    {
        if (!(parseInt(e.target.dataset.y) === 9)) // Keeps all ship placements on the gameboard. 
        {
            cell.classList.add('hover-test');
            nextCellOne.classList.add('hover-test'); 
            DisablePlacement.disablePlacement = false; 
        }
        else
        {
            DisablePlacement.disablePlacement = true;
        }
    }
    else if (ShipData.shipLength === 2)
    {
        if (!((parseInt(e.target.dataset.y) + 2) === 10) && !((parseInt(e.target.dataset.y) + 1) === 9) && !(parseInt(e.target.dataset.y) === 9))
        {
            cell.classList.add('hover-test');
            nextCellOne.classList.add('hover-test'); 
            nextCellTwo.classList.add('hover-test');
            DisablePlacement.disablePlacement = false; 
        }
        else 
        {
            DisablePlacement.disablePlacement = true; 
        }
    }
    else if (ShipData.shipLength === 3)
    {
        if (!((parseInt(e.target.dataset.y) + 3) === 10) && !((parseInt(e.target.dataset.y) + 2) === 9) && !((parseInt(e.target.dataset.y) + 1) === 9) && !(parseInt(e.target.dataset.y) === 9))
        {
            cell.classList.add('hover-test');
            nextCellOne.classList.add('hover-test');
            nextCellTwo.classList.add('hover-test');
            nextCellThree.classList.add('hover-test');
            DisablePlacement.disablePlacement = false;
        }
        else 
        {
            DisablePlacement.disablePlacement = true; 
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
function PlaceOnX(e){
    const cells = document.querySelectorAll('.player-one-board > div > div');
    cells.forEach((cell) => {
        cell.classList.remove('hover-test'); 
    }); 

    if (!DisablePlacement.disablePlacement)
    {
        console.log('X: ', e.target.dataset.x); 
        console.log('Y: ', e.target.dataset.y); 
    
        const cell = document.querySelector(`[data-x="${e.target.dataset.x}"][data-y="${e.target.dataset.y}"]`);
        const nextCellOne = document.querySelector(`[data-x="${e.target.dataset.x}"][data-y="${parseInt(e.target.dataset.y) + 1}"]`);
        const nextCellTwo = document.querySelector(`[data-x="${e.target.dataset.x}"][data-y="${parseInt(e.target.dataset.y) + 2}"]`);
        const nextCellThree = document.querySelector(`[data-x="${e.target.dataset.x}"][data-y="${parseInt(e.target.dataset.y) + 3}"]`);
    
        if (ShipData.shipLength === 0 && ShipData.lengthIndex < 10) 
        {
            if (cell.classList.contains('ship-placed')) // Cant place the ship on this cell when there is one already on the cell. 
            {
                // console.log('Cell already contains a ship'); // Testing
                return;
            }
            else
            {
                cell.classList.add('ship-placed'); 
                PlacedShips[`ship ${ShipData.lengthIndex}`].coordinates = {0: [parseInt(cell.dataset.x), parseInt(cell.dataset.y)]};
                ShipData.lengthIndex++; 
                AxisChange.axisWasChanged = false;
                PlaceShips(); 
            }       
        }
        else if (ShipData.shipLength === 1 && ShipData.lengthIndex < 10)
        {
            if ((cell.classList.contains('ship-placed') && nextCellOne.classList.contains('ship-placed')) 
            || (cell.classList.contains('ship-placed') || nextCellOne.classList.contains('ship-placed')))
            {
                // console.log('Cell already contains a ship'); // Testing
                return; 
            }
            else
            {
                cell.classList.add('ship-placed');
                nextCellOne.classList.add('ship-placed');
                PlacedShips[`ship ${ShipData.lengthIndex}`].coordinates = {0: [parseInt(cell.dataset.x), parseInt(cell.dataset.y)], 
                                                                           1: [parseInt(nextCellOne.dataset.x), parseInt(nextCellOne.dataset.y)]};
                ShipData.lengthIndex++;
                AxisChange.axisWasChanged = false;
                PlaceShips(); 
            }
        }
        else if (ShipData.shipLength === 2 && ShipData.lengthIndex < 10)
        {
            if ((cell.classList.contains('ship-placed') && nextCellOne.classList.contains('ship-placed') && nextCellTwo.classList.contains('ship-placed')) 
            || (cell.classList.contains('ship-placed') || nextCellOne.classList.contains('ship-placed') || nextCellTwo.classList.contains('ship-placed')))
            {
                // console.log('Cell already contains a ship'); // Testing
                return;
            }
            else
            {
                cell.classList.add('ship-placed');
                nextCellOne.classList.add('ship-placed');
                nextCellTwo.classList.add('ship-placed');
                PlacedShips[`ship ${ShipData.lengthIndex}`].coordinates = {0: [parseInt(cell.dataset.x), parseInt(cell.dataset.y)],
                                                                           1: [parseInt(nextCellOne.dataset.x), parseInt(nextCellOne.dataset.y)],
                                                                           2: [parseInt(nextCellTwo.dataset.x), parseInt(nextCellTwo.dataset.y)]};
                ShipData.lengthIndex++;
                AxisChange.axisWasChanged = false;
                PlaceShips(); 
            }
        }
        else if (ShipData.shipLength === 3 && ShipData.lengthIndex < 10)
        {
            if ((cell.classList.contains('ship-placed') && nextCellOne.classList.contains('ship-placed') && nextCellTwo.classList.contains('ship-placed') && nextCellThree.classList.contains('ship-placed'))
            || (cell.classList.contains('ship-placed') || nextCellOne.classList.contains('ship-placed') || nextCellTwo.classList.contains('ship-placed') || nextCellThree.classList.contains('ship-placed')))
            {
                // console.log('Cell already contains a ship'); // Testing
                return; 
            }
            else
            {
                cell.classList.add('ship-placed');
                nextCellOne.classList.add('ship-placed');
                nextCellTwo.classList.add('ship-placed');
                nextCellThree.classList.add('ship-placed');
                PlacedShips[`ship ${ShipData.lengthIndex}`].coordinates = {0: [parseInt(cell.dataset.x), parseInt(cell.dataset.y)],
                                                                           1: [parseInt(nextCellOne.dataset.x), parseInt(nextCellOne.dataset.y)],
                                                                           2: [parseInt(nextCellTwo.dataset.x), parseInt(nextCellTwo.dataset.y)],
                                                                           3: [parseInt(nextCellThree.dataset.x), parseInt(nextCellThree.dataset.y)]};
                ShipData.lengthIndex++; 
                AxisChange.axisWasChanged = false; 
                PlaceShips(); 
            }
        }
    }
} 

// LeaveX(): Will leave each cell from the x-axis selection. 
function LeaveX(e){
    const cell = document.querySelector(`[data-x="${e.target.dataset.x}"][data-y="${e.target.dataset.y}"]`);
    const nextCellOne = document.querySelector(`[data-x="${e.target.dataset.x}"][data-y="${parseInt(e.target.dataset.y) + 1}"]`);
    const nextCellTwo = document.querySelector(`[data-x="${e.target.dataset.x}"][data-y="${parseInt(e.target.dataset.y) + 2}"]`);
    const nextCellThree = document.querySelector(`[data-x="${e.target.dataset.x}"][data-y="${parseInt(e.target.dataset.y) + 3}"]`);

    if (e.target.classList.contains('hover-test'))
    {
        if (ShipData.shipLength === 0)
        {
            cell.classList.remove('hover-test');
        }
        else if (ShipData.shipLength === 1)
        {
            cell.classList.remove('hover-test');
            nextCellOne.classList.remove('hover-test');
        }
        else if (ShipData.shipLength === 2)
        {
            cell.classList.remove('hover-test');
            nextCellOne.classList.remove('hover-test');
            nextCellTwo.classList.remove('hover-test'); 
        }
        else if (ShipData.shipLength === 3)
        {
            cell.classList.remove('hover-test');
            nextCellOne.classList.remove('hover-test');
            nextCellTwo.classList.remove('hover-test');
            nextCellThree.classList.remove('hover-test'); 
        }
    }
}

// EnterY(): Will enter each cell on the y-axis selection.
function EnterY(e){
    console.log(e); // Testing 
    console.log(e.target); // Testing
    console.log(e.target.dataset.x); // Testing
    console.log(e.target.dataset.y); // Testing 
    console.log('\n'); // Testing

    const cell = document.querySelector(`[data-x="${e.target.dataset.x}"][data-y="${e.target.dataset.y}"]`);
    const nextCellOne = document.querySelector(`[data-x="${parseInt(e.target.dataset.x) + 1}"][data-y="${e.target.dataset.y}"]`);
    const nextCellTwo = document.querySelector(`[data-x="${parseInt(e.target.dataset.x) + 2}"][data-y="${e.target.dataset.y}"]`);
    const nextCellThree = document.querySelector(`[data-x="${parseInt(e.target.dataset.x) + 3}"][data-y="${e.target.dataset.y}"]`);

    if (ShipData.shipLength === 0)
    {
        cell.classList.add('hover-test');
    }
    else if (ShipData.shipLength === 1)
    {
        if (!(parseInt(e.target.dataset.x) === 9))
        {
            cell.classList.add('hover-test');
            nextCellOne.classList.add('hover-test');
            DisablePlacement.disablePlacement = false;
        }
        else 
        {
            DisablePlacement.disablePlacement = true; 
        }
    }
    else if (ShipData.shipLength === 2)
    {
        if (!((parseInt(e.target.dataset.x) + 2) === 10) && !((parseInt(e.target.dataset.x) + 1) === 9) && !(parseInt(e.target.dataset.x) === 9))
        {
            cell.classList.add('hover-test');
            nextCellOne.classList.add('hover-test');
            nextCellTwo.classList.add('hover-test');
            DisablePlacement.disablePlacement = false; 
        }
        else 
        {
            DisablePlacement.disablePlacement = true;
        }
    }
    else if (ShipData.shipLength === 3)
    {
        if (!((parseInt(e.target.dataset.x) + 3) === 10) && !((parseInt(e.target.dataset.x) + 2) === 9) && !((parseInt(e.target.dataset.x) + 1) === 9) && !(parseInt(e.target.dataset.x) === 9))
        {
            cell.classList.add('hover-test');
            nextCellOne.classList.add('hover-test');
            nextCellTwo.classList.add('hover-test');
            nextCellThree.classList.add('hover-test');
            DisablePlacement.disablePlacement = false;
        }
        else
        {
            DisablePlacement.disablePlacement = true;
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
function PlaceOnY(e){
    const cells = document.querySelectorAll('.player-one-board > div > div');
    cells.forEach((cell) => {
        cell.classList.remove('hover-test'); 
    });

    if (!DisablePlacement.disablePlacement)
    {
        console.log("X: ", e.target.dataset.x); // Testing 
        console.log("Y: ", e.target.dataset.y); // Testing   

        const cell = document.querySelector(`[data-x="${e.target.dataset.x}"][data-y="${e.target.dataset.y}"]`);
        const nextCellOne = document.querySelector(`[data-x="${parseInt(e.target.dataset.x) + 1}"][data-y="${e.target.dataset.y}"]`); 
        const nextCellTwo = document.querySelector(`[data-x="${parseInt(e.target.dataset.x) + 2}"][data-y="${e.target.dataset.y}"]`);
        const nextCellThree = document.querySelector(`[data-x="${parseInt(e.target.dataset.x) + 3}"][data-y="${e.target.dataset.y}"]`);

        if (ShipData.shipLength === 0 && ShipData.lengthIndex < 10)
        {
            if (cell.classList.contains('ship-placed'))
            {
                console.log("Cell already contains a ship."); // Testing 
                return;
            }
            else
            {
                cell.classList.add('ship-placed'); 
                PlacedShips[`ship ${ShipData.lengthIndex}`].coordinates = {0: [parseInt(cell.dataset.x), parseInt(cell.dataset.y)]};
                ShipData.lengthIndex++; 
                AxisChange.axisWasChanged = false;
                PlaceShips(); 
            }
        }
        else if (ShipData.shipLength === 1 && ShipData.lengthIndex < 10)
        {
            if ((cell.classList.contains('ship-placed') && nextCellOne.classList.contains('ship-placed')) 
            || (cell.classList.contains('ship-placed') || nextCellOne.classList.contains('ship-placed')))
            {
                console.log("Cell already contains a ship."); // Testing 
                return;
            }
            else
            {
                cell.classList.add('ship-placed');
                nextCellOne.classList.add('ship-placed'); 
                PlacedShips[`ship ${ShipData.lengthIndex}`].coordinates = {0: [parseInt(cell.dataset.x), parseInt(cell.dataset.y)],
                                                                           1: [parseInt(nextCellOne.dataset.x), parseInt(nextCellOne.dataset.y)]};
                ShipData.lengthIndex++;
                AxisChange.axisWasChanged = false;
                PlaceShips(); 
            }
        }
        else if (ShipData.shipLength === 2 && ShipData.lengthIndex < 10)
        {
            if ((cell.classList.contains('ship-placed') && nextCellOne.classList.contains('ship-placed') && nextCellTwo.classList.contains('ship-placed')) 
            || (cell.classList.contains('ship-placed') || nextCellOne.classList.contains('ship-placed') || nextCellTwo.classList.contains('ship-placed')))
            {
                console.log("Cell already contains a ship"); // Testing 
                return;
            }
            else
            {
                cell.classList.add('ship-placed'); 
                nextCellOne.classList.add('ship-placed');
                nextCellTwo.classList.add('ship-placed');
                PlacedShips[`ship ${ShipData.lengthIndex}`].coordinates = {0: [parseInt(cell.dataset.x), parseInt(cell.dataset.y)],
                                                                           1: [parseInt(nextCellOne.dataset.x), parseInt(nextCellOne.dataset.y)],
                                                                           2: [parseInt(nextCellTwo.dataset.x), parseInt(nextCellTwo.dataset.y)]};
                ShipData.lengthIndex++;
                AxisChange.axisWasChanged = false; 
                PlaceShips();
            }
        }
        else if (ShipData.shipLength === 3 && ShipData.lengthIndex < 10)
        {
            if ((cell.classList.contains('ship-placed') && nextCellOne.classList.contains('ship-placed') && nextCellTwo.classList.contains('ship-placed') && nextCellThree.classList.contains('ship-placed'))
            || (cell.classList.contains('ship-placed') || nextCellOne.classList.contains('ship-placed') || nextCellThree.classList.contains('ship-placed') && nextCellThree.classList.contains('ship-placed')))
            {
                console.log("Cell already contains a ship"); // Testing 
                return; 
            }
            else 
            {
                cell.classList.add('ship-placed'); 
                nextCellOne.classList.add('ship-placed');
                nextCellTwo.classList.add('ship-placed');
                nextCellThree.classList.add('ship-placed');
                PlacedShips[`ship ${ShipData.lengthIndex}`].coordinates = {0: [parseInt(cell.dataset.x), parseInt(cell.dataset.y)],
                                                                           1: [parseInt(nextCellOne.dataset.x), parseInt(nextCellOne.dataset.y)],
                                                                           2: [parseInt(nextCellTwo.dataset.x), parseInt(nextCellTwo.dataset.y)],
                                                                           3: [parseInt(nextCellThree.dataset.x), parseInt(nextCellThree.dataset.y)]};
                ShipData.lengthIndex++;
                AxisChange.axisWasChanged = false;
                PlaceShips(); 
            }
        }
    }
}

// LeaveY(): Will leave each cell from the y-axis selection.
function LeaveY(e){
    const cell = document.querySelector(`[data-x="${e.target.dataset.x}"][data-y="${e.target.dataset.y}"]`);
    const nextCellOne = document.querySelector(`[data-x="${parseInt(e.target.dataset.x) + 1}"][data-y="${e.target.dataset.y}"]`);
    const nextCellTwo = document.querySelector(`[data-x="${parseInt(e.target.dataset.x) + 2}"][data-y="${e.target.dataset.y}"]`);
    const nextCellThree = document.querySelector(`[data-x="${parseInt(e.target.dataset.x) + 3}"][data-y="${e.target.dataset.y}"]`);

    if (e.target.classList.contains('hover-test'))
    {
        if (ShipData.shipLength ===  0)
        {
            cell.classList.remove('hover-test');
        }
        else if (ShipData.shipLength === 1)
        {
            cell.classList.remove('hover-test');
            nextCellOne.classList.remove('hover-test'); 
        }
        else if (ShipData.shipLength === 2)
        {
            cell.classList.remove('hover-test');
            nextCellOne.classList.remove('hover-test');
            nextCellTwo.classList.remove('hover-test'); 
        }
        else if (ShipData.shipLength === 3)
        {
            cell.classList.remove('hover-test');
            nextCellOne.classList.remove('hover-test');
            nextCellTwo.classList.remove('hover-test');
            nextCellThree.classList.remove('hover-test'); 
        }
    }
}
