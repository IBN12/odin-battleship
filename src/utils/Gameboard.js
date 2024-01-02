import { Ship } from "./Ship";
import waterExplosion from "../sounds/water-explosion.wav"; 
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
        const explosion = new Audio(waterExplosion); 
        let xCoordRandom = Math.floor(Math.random() * 10);
        let yCoordRandom = Math.floor(Math.random() * 10);
        let playerOneCell = document.querySelector(`[data-x="${xCoordRandom}"][data-y="${yCoordRandom}"]`);
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
                for (let coord in PlacedShips[key].coordinates)
                {
                    if (PlacedShips[key].coordinates[coord][0] === xCoordRandom && PlacedShips[key].coordinates[coord][1] === yCoordRandom)
                    {
                        console.log('The computer got a hit: ', [xCoordRandom, yCoordRandom]); // Testing
                        console.log(`${key} was hit.`); // Testing 
                        PlacedShips[key].hits += 1; 
                        let shipSunk = PlacedShips[key].hit(PlacedShips[key].hits, PlacedShips[key].length); 
                        PlacedShips[key].sunk(shipSunk, key);

                        const explosionImg = document.createElement('img');
                        explosionImg.src = explosionImage;
                        playerOneCell.appendChild(explosionImg);
                        playerOneCell.classList.add('player-one-ship-hit');

                        explosion.play(); // Testing 
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
        }

    }


    return {gameboard, shipsOnBoard, receiveAttack, Ship};
}