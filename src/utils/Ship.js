import { DisplayComputerGameboardEvents } from "../modules/DomContent";

/** Ship */
// Ship(): Ship factory function. 
export const Ship = () => {
    let defaultLengths = [0, 0, 0, 0, 1, 1, 1, 2, 2, 3]; 
    let length = null;
    let hits = 0;
    let sunk = false; 

    // hit(): Will gather the amount of hits the ship will get.
    const hit = (isHit, shipLength) => {

        if (isHit === shipLength)
        {
            return true; 
        }
        else
        {
            return null; 
        }
    }

    // isSunk(): Will determine if the ship has sunk. 
    const isSunk = (shipSunk, shipNum) => {
        DisplayComputerGameboardEvents(null, shipSunk, shipNum); 
        // Note: You need to use the testing file (ship.test.js) 
        // to test this function. 
    }

    return {hit, isSunk, defaultLengths, length, hits, sunk};
}
