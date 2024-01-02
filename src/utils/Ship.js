/** Ship */
// Ship(): Ship factory function. 
export const Ship = () => {
    let defaultLengths = [0, 0, 0, 0, 1, 1, 1, 2, 2, 3]; 
    let length = null;
    let hits = 0;

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
    const sunk = (isSunk, ship) => {
        if (isSunk)
        {
            console.log(`${ship} has sunk.`); // Testing
            // Note: You need to use the testing file (ship.test.js) 
            // to test this function. 
        }
    }

    return {hit, sunk, defaultLengths, length, hits};
}
