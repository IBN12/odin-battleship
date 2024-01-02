import { Ship } from "./Ship";

// ShipOne: length = 1
const shipOne = Ship();
shipOne.length = 1;
shipOne.hits = 1; 

// ShipTwo: length = 2
const shipTwo = Ship(); 
shipTwo.length = 2;
shipTwo.hits = 1; 
shipTwo.hits += 1;

// ShipThree: length = 3
const shipThree = Ship();
shipThree.length = 3;
shipThree.hits = 1;
shipThree.hits += 1;
shipThree.hits += 1; 

// shipFour: length = 4
const shipFour = Ship();
shipFour.length = 4;
shipFour.hits = 1;
shipFour.hits += 1;
shipFour.hits += 1;
shipFour.hits += 1; 

// Testing if the 'hits' property in the 'Ship' Factory Function will
// increment correctly when the 'hit' function is called. 
test('Test hit function', () =>{
    expect(shipOne.hit(shipOne.hits, shipOne.length)).toBeTruthy(); 
    expect(shipTwo.hit(shipTwo.hits, shipTwo.length)).toBeTruthy(); 
    expect(shipThree.hit(shipThree.hits, shipThree.length)).toBeTruthy();  
    expect(shipFour.hit(shipFour.hits, shipFour.length)).toBeTruthy(); 
});
