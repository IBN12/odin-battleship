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
    shipLength: 0, 
    shipsOnBoard: 0,
    placementCommenced: false,
}

// AxisChange Literal Object: 
let AxisChange = {
    axisChange: null, 
}

// InitializingDOM(): Intializing DOM Content for the entire application. 
export function InitializeDOM(){
    console.log("Initializing DOM Content..."); // Testing 
    console.log('\n'); // Testing 

    GameboardDOM();
    InterfaceDOM();
    PlayerOneDOM();
    PlayerTwoDOM();
    // AxisDOM();
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

// PlayerTwoDOM(): The player two board.
function PlayerTwoDOM(){
    const gameboardContainer = document.querySelector('.gameboard-container');
    
    const playerTwo = document.createElement('div'); 
    playerTwo.classList.add('player-two-board'); 

    gameboardContainer.appendChild(playerTwo); 
}



// PlaceShips(): Will place the ships on the gameboard.
function PlaceShips(e){
    const cells = document.querySelectorAll('.player-one-board > div > div'); 
    const xCoord = document.querySelector('.gameboard-container > div:nth-child(1) > div > button:nth-child(1)');
    const yCoord = document.querySelector('.gameboard-container > div:nth-child(1) > div > button:nth-child(2)'); 

    if (ShipData.placementCommenced)
    {
        const board = Gameboard();
        const ship = board.Ship();
    
        ShipData.shipLength = ship.defaultLengths[ShipData.lengthIndex];
    
        console.log('Ship number to be placed: ', ShipData.lengthIndex + 1); // Testing 
        console.log('The length of the ship to be placed: ', ShipData.shipLength); // Testing 
        console.log('\n'); // Testing
        
        ShipData.lengthIndex++;
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
    placeShip.textContent = 'Place Ship';

    const coordinateContainer = document.createElement('div');
    const xCoord = document.createElement('button');
    xCoord.textContent = 'x';
    const yCoord = document.createElement('button');
    yCoord.textContent = 'y'; 
    coordinateContainer.appendChild(xCoord);
    coordinateContainer.appendChild(yCoord); 

    playerInterface.appendChild(newGame);
    playerInterface.appendChild(placeShip);
    playerInterface.appendChild(coordinateContainer); 
    gameboardContainer.appendChild(playerInterface);

    // newGame.addEventListener('click', NewGame);

    placeShip.addEventListener('click', e => {
        ShipData.placementCommenced = true; 
        PlaceShips(e);
    });

    xCoord.addEventListener('click', (e) => {
        ShipData.placementCommenced = false;
        AxisChange.axisChange = 1; 
        PlaceShips(e);
    });

    yCoord.addEventListener('click', (e) => {
        ShipData.placementCommenced = false; 
        AxisChange.axisChange = 2; 
        PlaceShips(e);
    });

    // xCoord.addEventListener('click', ChangeToXAxis);

    // yCoord.addEventListener('click', ChangeToYAxis);
}

// NewGame(): Will begin a new game for the player. 
function NewGame(){
    console.log('Player begins a new game.'); // Testing 
    console.log('\n'); // Testing 

    NewGameSelected.newGameSelected = true;
    const board = Gameboard(); 
    const ship = board.Ship();

    ShipData.shipLength = ship.defaultLengths[ShipData.lengthIndex];
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
    const nextCell = document.querySelector(`[data-x="${e.target.dataset.x}"][data-y="${parseInt(e.target.dataset.y) + 1}"]`);

    if (!(parseInt(e.target.dataset.y) === 9))
    {
        cell.classList.add('hover-test');
        nextCell.classList.add('hover-test');
    }
}

// LeaveX(): Will leave each cell from the x-axis selection. 
function LeaveX(e){
    const cell = document.querySelector(`[data-x="${e.target.dataset.x}"][data-y="${e.target.dataset.y}"]`);
    const nextCell = document.querySelector(`[data-x="${e.target.dataset.x}"][data-y="${parseInt(e.target.dataset.y) + 1}"]`);

    if (e.target.classList.contains('hover-test'))
    {
        cell.classList.remove('hover-test');
        nextCell.classList.remove('hover-test'); 
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
    const nextCell = document.querySelector(`[data-x="${parseInt(e.target.dataset.x) + 1}"][data-y="${e.target.dataset.y}"]`);

    if (!(parseInt(e.target.dataset.x) === 9))
    {
        cell.classList.add('hover-test');
        nextCell.classList.add('hover-test'); 
    }    
}

// LeaveY(): Will leave each cell from the y-axis selection.
function LeaveY(e){
    const cell = document.querySelector(`[data-x="${e.target.dataset.x}"][data-y="${e.target.dataset.y}"]`);
    const nextCell = document.querySelector(`[data-x="${parseInt(e.target.dataset.x) + 1}"][data-y="${e.target.dataset.y}"]`);

    if (e.target.classList.contains('hover-test'))
    {
        cell.classList.remove('hover-test');
        nextCell.classList.remove('hover-test'); 
    }
}
