import { Ship } from "./Ship";

const shipOne = Ship();

test('Test hit function', () =>{
    expect(shipOne.hit(1)).toBe(1);
});

test('Test isSunk function', () => {
    expect(shipOne.isSunk).toBeTruthy();
});