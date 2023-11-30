import { Ship } from "./utils/Ship";

import "./style.css";

import testSound from './sounds/mixkit-retro-game-notification-212.wav';

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// |Testing Area|
console.log('|Testing Area|');
const content = document.getElementById('content');
console.log(content); // Testing 

const buttonOneContainer = document.createElement('div');
const buttonOne = document.createElement('button'); 
buttonOne.textContent = 'Click Me!';

const newSound = new Audio(testSound);

buttonOne.addEventListener('click', () => {
    console.log('You clicked the button!'); // Testing
    newSound.play();
}); 

buttonOneContainer.appendChild(buttonOne);
content.appendChild(buttonOneContainer);
console.log('\n'); // Testing 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

