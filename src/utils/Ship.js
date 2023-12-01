// Ship(): Ship factory function. 
export const Ship = () => {
    let length = 0;
    let hits = 0;
    let sunk = false;

    // hit(): Will gather the amount of hits the ship will get.
    const hit = (isHit) => {
        return hits += isHit;
    }

    // isSunk(): Will determine if the ship has sunk. 
    const isSunk = () => {
        return sunk = true;
    }

    return {hit, isSunk};
}
