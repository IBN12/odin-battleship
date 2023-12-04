// Gameboard(): Gameboard factory function.
export const Gameboard = () => {
    const gameboard = [...Array(10)].map(() => Array(10).fill("")); 

    const receiveAttack = () => {
        // Will take a pair of coordinates, determines whether or not the attack hit a ship and
        // then sends the 'hit' function to the correct ship, or records the coordinates of the
        // missed shot. 
    }

    return {gameboard, receiveAttack};
}