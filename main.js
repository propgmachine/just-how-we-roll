/**********
 * DATA *
 **********/

let sixes = [];
let doubleSixes = [];
let twelves = [];
let twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    
    return result;
}

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}

/*******************
 * YOUR CODE BELOW *
 *******************/


// Images
const d6 = document.querySelector('#d6-roll');
const doubleD61 = document.querySelector('#double-d6-roll-1')
const doubleD62 = document.querySelector('#double-d6-roll-2')
const d12 = document.querySelector('#d12-roll');
const d20 = document.querySelector('#d20-roll');
const resetButton = document.querySelector('#reset-button');

// Means, medians and Modes

// Approach #2
const means = {};
const medians = {};
const modes = {};


const diceIds = ['d6', 'double-d6', 'd12', 'd20'];

for (const dice of diceIds) {

  // With dice, add that to '-rolls-mean', etc.
  const meanElement = document.querySelector('#${dice}-rolls-mean');
  const medianElement = document.querySelector('#${dice}-rolls-median');
  const modeElement = document.querySelector('#${dice}-rolls-mode');
  
  // Add each DOM element to our key-value
  means[dice] = meanElement;
  medians[dice] = medianElement;
  modes[dice] = modeElement;
}

console.log('means', means);
console.log('medians', medians);
console.log('modes', modes);


// Approach #1

const d6Mean = document.querySelector('#d6-rolls-mean');
const d6Median = document.querySelector('#d6-rolls-median');
const d6Mode = document.querySelector('#d6-rolls-mode');



/*******************
 * EVENT LISTENERS *
*******************/

d6.addEventListener('click', handleD6Click);
doubleD61.addEventListener('click', handleDoubleD6Click);
doubleD62.addEventListener('click', handleDoubleD6Click);
d12.addEventListener('click', handleD12Click);
d20.addEventListener('click', handleD20Click);
resetButton.addEventListener('click', handleResetClick);


/******************
 * RESET FUNCTION *
 ******************/

function handleResetClick() {

  // Rest the starter images 
  d6.src = 'images/start/d6.png';
  doubleD61.src = 'images/start/d6.png';
  doubleD62.src = 'images/start/d6.png';
  d12.src = 'images/start/d12.jpeg';
  d20.src = 'images/start/d20.jpg';

  //Reset Roll History
  sixes = [];
  doubleSixes = [];
  twelves = [];
  twenties = [];

  // Reset the mean, median, and mode 
  for (const dice of diceIds) {
    means[dice].src = 'NA';
    medians[dice].src = 'NA';
    modes[dice].src = 'NA';
  }


  
}

handleResetClick();

/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/

function handleD6Click() {
  console.log('d6 was clicked');
}

function handleDoubleD6Click() {
  console.log('double d6 was clicked');
}

function handleD12Click() {
  console.log('d12 was clicked');
}

function handleD20Click() {
  console.log('d20 was clicked');
}



/****************
 * MATH SECTION *
 ****************/
