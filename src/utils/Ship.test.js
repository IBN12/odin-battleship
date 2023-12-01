import { Ship } from "./Ship";

const shipOne = Ship();

// Testing the hit() function from the ship factory.
test('Test hit function', () =>{
    expect(shipOne.hit(1)).toBe(1);
});

// Testing the iSunk() function from the ship factory.
test('Test isSunk function', () => {
    expect(shipOne.isSunk).toBeTruthy();
});

