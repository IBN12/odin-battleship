// Ship(): Ship factory function. 
export const Ship = () => {
    let defaultLengths = [0, 0, 0, 0, 1, 1, 1, 2, 2, 3]; 
    let length = null;
    let hits = null;
    let sunk = false;

    // hit(): Will gather the amount of hits the ship will get.
    const hit = (isHit) => {
        return hits += isHit;
    }

    // isSunk(): Will determine if the ship has sunk. 
    const isSunk = () => {
        return sunk = true;
    }

    return {hit, isSunk, defaultLengths, length,};
}
