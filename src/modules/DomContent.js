import { Gameboard } from "../utils/Gameboard";

// InitializingDOM(): Intializing DOM Content for the entire application. 
export function InitializeDOM(){
    console.log("Initializing DOM Content..."); // Testing 
    console.log('\n'); // Testing 

    GameboardDOM(); 
    InterfaceDOM();
    PlayerOneDOM();
    PlayerTwoDOM(); 
    HoverTestDOM(); // Testing 
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

    const playerOne = document.createElement('div'); 
    playerOne.classList.add('player-one-board');

    for (let i = 0; i < 10; i++){
        const row = document.createElement('div'); 

        for (let j = 0; j < 10; j++){
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


    playerInterface.appendChild(newGame);
    playerInterface.appendChild(coordinateContainer); 
    gameboardContainer.appendChild(playerInterface);
}

// HoverTestDOM(): The hover test on the board.
function HoverTestDOM(e){
    const cell = document.querySelectorAll('.player-one-board > div > div');
    console.log('Cells: ', cell); // Testing

    const xCoord = document.querySelector('.gameboard-container > div:nth-child(1) > div > button:nth-child(1)');
    console.log(xCoord); // Testing 
    const yCoord = document.querySelector('.gameboard-container > div:nth-child(1) > div > button:nth-child(2)'); 
    console.log(yCoord); // Testing

    // Testing for yCoord:
    for (let i = 0; i < cell.length; i++)
    {
        cell[i].addEventListener('mouseenter', () => {
            if (!(parseInt(cell[i].dataset.x) === 9))
            {
                cell[i].classList.add('hover-test');
                cell[i + 10].classList.add('hover-test'); 
            }
        });
    }

    for (let i = 0; i < cell.length; i++)
    {
        cell[i].addEventListener('mouseleave', () => {
            if (cell[i].classList.contains('hover-test'))
            {
                cell[i].classList.remove('hover-test');
                cell[i + 10].classList.remove('hover-test');
            }
        });
    }


    // Testing for xCoord:
    // for (let i = 0; i < cell.length; i++)
    // {
    //     cell[i].addEventListener('mouseenter', () => {
    //         if (!(parseInt(cell[i].dataset.x === 9)) && !(parseInt(cell[i].dataset.y) === 9))
    //         {
    //             cell[i].classList.add('hover-test');
    //             cell[i + 1].classList.add('hover-test');
    //         }
    //     });

    //     cell[i].addEventListener('click', () => {
    //         console.log('X: ', cell[i].dataset.x); // Testing
    //         console.log('Y: ', cell[i].dataset.y); // Testing
    //         console.log('X2: ', cell[i + 1].dataset.x); // Testing
    //         console.log('X3: ', cell[i + 1].dataset.y); // Testing 
    //         console.log('\n'); // Testing
    //     });
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