import { Ship } from "./Ship";
import { DisplayComputerGameboardEvents } from "../modules/DomContent";
import { ShipData } from "./ShipData";
import explosionImage from "../images/explosion.png";

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
export const Gameboard = () => {
    const gameboard = [...Array(10)].map(() => Array(10).fill("")); 
    let shipsOnBoard = 0; 

    const receiveAttack = (PlacedShips) => {
        let xCoordRandom = Math.floor(Math.random() * 10);
        let yCoordRandom = Math.floor(Math.random() * 10);
        let playerOneCell = document.querySelector(`[data-x="${xCoordRandom}"][data-y="${yCoordRandom}"]`);
        let shipNum = 0; 
        console.log("Computer choose: ", playerOneCell); // Testing
        console.log("\n"); // Testing

        // Test if the computer has already choosen these coordinates. 
        while(playerOneCell.classList.contains('player-one-ship-hit') || playerOneCell.classList.contains('computer-hit-missed'))
        {
            xCoordRandom = Math.floor(Math.random() * 10);
            yCoordRandom = Math.floor(Math.random() * 10); 

            playerOneCell = document.querySelector(`[data-x="${xCoordRandom}"][data-y="${yCoordRandom}"]`); 
        }

        // Test if the coordinates contain an enemy ship. 
        if (playerOneCell.classList.contains('ship-placed'))
        {
            for (let key in PlacedShips)
            {
                shipNum++; 

                for (let coord in PlacedShips[key].coordinates)
                {
                    if (PlacedShips[key].coordinates[coord][0] === xCoordRandom && PlacedShips[key].coordinates[coord][1] === yCoordRandom)
                    {
                        console.log('The computer got a hit: ', [xCoordRandom, yCoordRandom]); // Testing
                        console.log(`${key} was hit.`); // Testing 
                        PlacedShips[key].hits += 1; 
                        let shipSunk = PlacedShips[key].hit(PlacedShips[key].hits, PlacedShips[key].length); // adds a hit to the ship. 

                        DisplayComputerGameboardEvents(1, false, shipNum); 
                        PlacedShips[key].isSunk(shipSunk, shipNum); // Checks if the ship has sunk.
                        
                        // If true change the sunk status to true.  
                        if (shipSunk)
                        {
                            PlacedShips[key].sunk = shipSunk; 
                            ShipData.shipsPlaced--; 
                            console.log('Sunk status should be true: ', PlacedShips[key]); // Testing 
                        }

                        const explosionImg = document.createElement('img');
                        explosionImg.src = explosionImage;
                        playerOneCell.appendChild(explosionImg);
                        playerOneCell.classList.add('player-one-ship-hit');
                    }
                }
            }
        }
        else
        {
            const computerHitMissed = document.createElement('div');
            computerHitMissed.textContent = "M"; 
            playerOneCell.classList.add('computer-hit-missed');
            playerOneCell.appendChild(computerHitMissed); 
            DisplayComputerGameboardEvents(0); 
        }
    }

    return {gameboard, shipsOnBoard, receiveAttack, Ship};
}