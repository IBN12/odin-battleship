export const Ship = () => {
    let length = 0;
    let hits = 0;
    let sunk = false;

    const hit = (isHit) => {
        return hits += isHit;
    }

    const isSunk = () => {
        return sunk = true;
    }

    return {hit, isSunk};
}
