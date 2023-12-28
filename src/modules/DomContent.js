import { Gameboard } from "../utils/Gameboard";

// AxisSelected(): Will operate the axis the change by boolean.
const AxisSelected = (() => {
    let axisSelected = false;

    return {axisSelected};
})();

// NewGameSelected(): Toggles true if the new game button was clicked.
const NewGameSelected = (() => {
    let newGameSelected = false;

    return {newGameSelected}; 
})();

// ShipData Literl Object: Will contain ship data to control the flow of ships on the gameboard. 
let ShipData = {
    lengthIndex: 0,
    shipsPlaced: 0,
    shipLength: 0,
}

let PlacedShips = {
}

// AxisChange Literal Object: 
let AxisChange = {
    axisChange: null, 
    axisWasChanged: false,
}

// activateGame Literal Object:
let ActivateGame = {
    activateGame: false, 
    activatePlayerOneTurn: true,
    activateComputerTurn: false,
}

// InitializingDOM(): Intializing DOM Content for the entire application. 
export function InitializeDOM(){
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

    if (ShipData.lengthIndex > 9) // Will deactivate player ones ship placement. 
    {
        for(let i = 0; i < cells.length; i++)
        {
            cells[i].removeEventListener('mouseenter', EnterX);
            cells[i].removeEventListener('mouseleave', LeaveX); 
            cells[i].removeEventListener('mouseenter', EnterY);
            cells[i].removeEventListener('mouseleave', LeaveY);
        }

        // TODO: Activate the computer gameboard to begin the game. 
        ActivateGame.activateGame = true; 
        console.log("Game Activated: ", ActivateGame.activateGame); // Testing
        GameInitiated(); 
    }
}

// GameInitiated(): The player and computer will take turns picking coordinates on each others gameboard to sink a ship.
function GameInitiated(){
    const computerCells = document.querySelectorAll(`.computer-gameboard > div > div`);
    const playerCells = document.querySelectorAll(`.player-one-gameboard > div > div`); 

    if (ActivateGame.activateGame)
    {
        computerCells.forEach((cell) => {
            cell.addEventListener('click', PlayerOneTurn);
        });
    }

    if (!ActivateGame.activatePlayerOneTurn)
    {
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
    console.log(e.target); // Testing 
    console.log(computerCell); // Testing 
    console.log("X: ", e.target.dataset.x); // Testing 
    console.log("Y: ", e.target.dataset.y); // Testing

    ActivateGame.activatePlayerOneTurn = false;
    ActivateGame.activateComputerTurn = true;

    GameInitiated(); 
}

// ComputerTurn(): Computer will choose a spont on player one's board.
function ComputerTurn(){
    const xCoordRandom = Math.floor(Math.random() * 10);
    const yCoordRandom = Math.floor(Math.random() * 10); 
    const playerOneCell = document.querySelector(`[data-x="${xCoordRandom}"][data-y="${yCoordRandom}"]`);
    console.log('Computer choose: ', playerOneCell); // Testing 
    console.log("\n"); // Testing 

    if (playerOneCell.classList.contains('ship-placed'))
    {
        for (let key in PlacedShips)
        {
            for (let coord in PlacedShips[key].coordinates)
            {
                if (PlacedShips[key].coordinates[coord][0] === xCoordRandom && PlacedShips[key].coordinates[coord][1] === yCoordRandom)
                {
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
function ComputerPlaceShips(){
    const computerCells = document.querySelectorAll('.computer-gameboard > div > div');
    console.log('Computer Cells: ', computerCells); // Testing

    const computerRows = document.querySelectorAll('.computer-gameboard > div'); 
    console.log('Computer Rows: ', computerRows); // Testing

    const computerBoard = Gameboard();
    const computerShips = computerBoard.Ship();

    computerShips.defaultLengths.forEach((ship) => {
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
        }
    });
}

// IntefaceDOM(): Interface section for the user. 
function InterfaceDOM(){
    const gameboardContainer = document.querySelector('.gameboard-container');
    const cells = document.querySelectorAll('.player-one-board > div > div');

    const playerInterface = document.createElement('div');
    playerInterface.classList.add('interface');

    const newGame = document.createElement('button');
    newGame.textContent = 'New Game';

    const placeShip = document.createElement('button'); 
    placeShip.textContent = `Place Ship`;

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

    xCoord.addEventListener('click', (e) => {
        if (NewGameSelected.newGameSelected)
        {
            AxisChange.axisWasChanged = true; 
            AxisChange.axisChange = 1; 
            yCoord.classList.remove('current-coordinate'); 
            xCoord.classList.add('current-coordinate'); 
            PlaceShips(e);
        }
    });

    yCoord.addEventListener('click', (e) => {
        if (NewGameSelected.newGameSelected)
        {
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
function NewGame(){
    console.log('Player begins a new game.'); // Testing 
    console.log('\n'); // Testing 

    // TODO: Reset all the game attributes in this function when the
    // user wants to start a new game. 

    NewGameSelected.newGameSelected = true; 
    PlaceShips(); 
}

// HoverTestDOM(): The hover test on the board.
function AxisDOM(e){
    const cell = document.querySelectorAll('.player-one-board > div > div');
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
function ChangeToXAxis(){
    const cells = document.querySelectorAll('.player-one-board > div > div');
    const yCoord = document.querySelector('.gameboard-container > div:nth-child(1) > div > button:nth-child(2)');

    AxisSelected.axisSelected = true; 
    console.log('X or Y Axis has been selected: ', AxisSelected.axisSelected); // Testing

    // Remove EnterY and LeaveY Event Listeners 
    cells.forEach((cell) => {
        cell.removeEventListener('mouseenter', EnterY);
        cell.removeEventListener('mouseleave', LeaveY);
    });

    for (let i = 0; i < cells.length; i++)
    {
        cells[i].addEventListener('mouseenter', EnterX);

        cells[i].addEventListener('mouseleave', LeaveX);
    }
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

            const nextCellOne = document.querySelector(`[data-x="${e.target.dataset.x}"][data-y="${parseInt(e.target.dataset.y) + 1}"]`);
            nextCellOne.classList.add('hover-test'); 
        }
    }
    else if (ShipData.shipLength === 2)
    {
        if (!((parseInt(e.target.dataset.y) + 2) === 10) && !((parseInt(e.target.dataset.y) + 1) === 9) && !(parseInt(e.target.dataset.y) === 9))
        {
            cell.classList.add('hover-test');
            nextCellOne.classList.add('hover-test'); 
            nextCellTwo.classList.add('hover-test');
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
        }
    }

    // Note: I could put this in its own function, but for now I will use the EnterX function to test
    // this alogorithm out. 
    cell.addEventListener('click', () => {
        console.log('X: ', cell.dataset.x); 
        console.log('Y: ', cell.dataset.y); 
        // TODO: Ship placement on the board can be done inside this function. 

        if (ShipData.shipLength === 0)
        {
            if (cell.classList.contains('ship-placed')) // Cant place the ship on this cell when there is one already on the cell. 
            {
                console.log('Cell already contains a ship'); // Testing
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
        else if (ShipData.shipLength === 1)
        {
            if ((cell.classList.contains('ship-placed') && nextCellOne.classList.contains('ship-placed')) 
            || (cell.classList.contains('ship-placed') || nextCellOne.classList.contains('ship-placed')))
            {
                console.log('Cell already contains a ship'); // Testing
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
        else if (ShipData.shipLength === 2)
        {
            if ((cell.classList.contains('ship-placed') && nextCellOne.classList.contains('ship-placed') && nextCellTwo.classList.contains('ship-placed')) 
            || (cell.classList.contains('ship-placed') || nextCellOne.classList.contains('ship-placed') || nextCellTwo.classList.contains('ship-placed')))
            {
                console.log('Cell already contains a ship'); // Testing
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
        else if (ShipData.shipLength === 3)
        {
            if ((cell.classList.contains('ship-placed') && nextCellOne.classList.contains('ship-placed') && nextCellTwo.classList.contains('ship-placed') && nextCellThree.classList.contains('ship-placed'))
            || (cell.classList.contains('ship-placed') || nextCellOne.classList.contains('ship-placed') || nextCellTwo.classList.contains('ship-placed') || nextCellThree.classList.contains('ship-placed')))
            {
                console.log('Cell already contains a ship'); // Testing
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
    });
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

// ChangeToYAxis(): Will change the axis selection on the gameboard to the y-axis. 
function ChangeToYAxis(){
    const cells = document.querySelectorAll('.player-one-board > div > div'); 
    const xCoord = document.querySelector('.gameboard-container > div:nth-child(1) > div > button:nth-child(1)');

    AxisSelected.axisSelected = true;
    console.log('X or Y axis has been selected: ', AxisSelected.axisSelected); // Testing 
    
    // Remove EnterX and LeaveX Event Listeners.
    cells.forEach((cell) => {
        cell.removeEventListener('mouseenter', EnterX); 
        cell.removeEventListener('mouseleave', LeaveX); 
    }); 

    for (let i = 0; i < cells.length; i++)
    {
        cells[i].addEventListener('mouseenter', EnterY);

        cells[i].addEventListener('mouseleave', LeaveY);
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
        }
    }
    else if (ShipData.shipLength === 2)
    {
        if (!((parseInt(e.target.dataset.x) + 2) === 10) && !((parseInt(e.target.dataset.x) + 1) === 9) && !(parseInt(e.target.dataset.x) === 9))
        {
            cell.classList.add('hover-test');
            nextCellOne.classList.add('hover-test');
            nextCellTwo.classList.add('hover-test');
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
        }
    }   

    // Places the ships on the board cells:
    cell.addEventListener('click', () => {
        console.log("X: ", cell.dataset.x); // Testing 
        console.log("Y: ", cell.dataset.y); // Testing 

        if (ShipData.shipLength === 0)
        {
            if (cell.classList.contains('ship-placed'))
            {
                console.log("Cell already contains a ship."); // Testing 
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
        else if (ShipData.shipLength === 1)
        {
            if ((cell.classList.contains('ship-placed') && nextCellOne.classList.contains('ship-placed')) 
            || (cell.classList.contains('ship-placed') || nextCellOne.classList.contains('ship-placed')))
            {
                console.log("Cell already contains a ship."); // Testing 
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
        else if (ShipData.shipLength === 2)
        {
            if ((cell.classList.contains('ship-placed') && nextCellOne.classList.contains('ship-placed') && nextCellTwo.classList.contains('ship-placed')) 
            || (cell.classList.contains('ship-placed') || nextCellOne.classList.contains('ship-placed') || nextCellTwo.classList.contains('ship-placed')))
            {
                console.log("Cell already contains a ship"); // Testing 
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
        else if (ShipData.shipLength === 3)
        {
            if ((cell.classList.contains('ship-placed') && nextCellOne.classList.contains('ship-placed') && nextCellTwo.classList.contains('ship-placed') && nextCellThree.classList.contains('ship-placed'))
            || (cell.classList.contains('ship-placed') || nextCellOne.classList.contains('ship-placed') || nextCellThree.classList.contains('ship-placed') && nextCellThree.classList.contains('ship-placed')))
            {
                console.log("Cell already contains a ship"); // Testing 
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
    });
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
