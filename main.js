/**********
 * DATA *
 **********/

let sixes = [];
let doubleSixes = [];
let twelves = [];
let twenties = [];

//=============================================================================

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

//=============================================================================


/*******************
 * YOUR CODE BELOW *
 *******************/



const d6 = document.querySelector('#d6-roll');
const doubleD61 = document.querySelector('#double-d6-roll-1');
const doubleD62 = document.querySelector('#double-d6-roll-2');
const d12 = document.querySelector('#d12-roll');
const d20 = document.querySelector('#d20-roll');
const resetButton = document.querySelector('#reset-button');


const means = {};
const medians = {};
const modes = {};

const diceIds = ['d6', 'double-d6', 'd12', 'd20'];
for (const dice of diceIds) {
  
  
  const meanElement = document.querySelector(`#${dice}-rolls-mean`);
  const medianElement = document.querySelector(`#${dice}-rolls-median`);
  const modeElement = document.querySelector(`#${dice}-rolls-mode`);

  
  means[dice] = meanElement;
  medians[dice] = medianElement;
  modes[dice] = modeElement;
}

//=============================================================================

/*******************
 * EVENT LISTENERS *
*******************/

d6.addEventListener('click', handleD6Click);
doubleD61.addEventListener('click', handleDoubleD6Click);
doubleD62.addEventListener('click', handleDoubleD6Click);
d12.addEventListener('click', handleD12Click);
d20.addEventListener('click', handleD20Click);
resetButton.addEventListener('click', handleResetClick);


//=============================================================================

/******************
 * RESET FUNCTION *
 ******************/

function handleResetClick() {

  
  d6.src = 'images/start/d6.png';
  doubleD61.src = 'images/start/d6.png';
  doubleD62.src = 'images/start/d6.png';
  d12.src = 'images/start/d12.jpeg';
  d20.src = 'images/start/d20.jpg';

  //
  sixes = [];
  doubleSixes = [];
  twelves = [];
  twenties = [];

  //
  for (const dice of diceIds) {
    means[dice].src = 'NA';
    medians[dice].src = 'NA';
    modes[dice].src = 'NA';
  }


  
}

handleResetClick();

//=============================================================================


/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/

function handleD6Click() {

  //
  const roll = getRandomNumber(6);

  //
  const image = `images/d6/${roll}.png`;
  d6.src = image;

  //
  sixes.push(roll);

  //
  calculateStats('d6', sixes);
}

//-------------------------------------------------------

function handleDoubleD6Click() {

  
  const roll1 = getRandomNumber(6);
  const roll2 = getRandomNumber(6);

  
  const image1 = `images/d6/${roll1}.png`;
  const image2 = `images/d6/${roll2}.png`;
  doubleD61.src = image1;
  doubleD62.src = image2;

  
  doubleSixes.push(roll1 + roll2);

  
  calculateStats('double-d6', doubleSixes);
}

//-------------------------------------------------------

function handleD12Click() {

  
  const roll = getRandomNumber(12);

  
  const image = `images/numbers/${roll}.png`;
  d12.src = image;

  
  twelves.push(roll);

  
  calculateStats('d12', twelves);
}

//-------------------------------------------------------

function handleD20Click() {

  // Get a random number 1 - 20
  const roll = getRandomNumber(20);

  // Set the proper image on the dice
  const image = `images/numbers/${roll}.png`;
  d20.src = image;

  // Add roll to global history array
  twenties.push(roll);

  // Calculate the mean, median, and mode
  calculateStats('d20', twenties);
}

//=============================================================================

/****************
 * MATH SECTION *
 ****************/


function calculateMean(array) {
  let sum = 0;
  for (const value of array) {
    sum += value;
  }
  const avg = sum / array.length;
  return avg;
}

//-------------------------------------------------------

function calculateMedian(array) {
  const sorted = sortByNumber(array);
  const isEvenLength = array.length % 2 === 0;
  
  
  if (isEvenLength) {
    const middleNumber1 = sorted[sorted.length / 2];
    const middleNumber2 = sorted[sorted.length / 2 - 1];
    return (middleNumber1 + middleNumber2) / 2;
  }
  
  
  else {
    const index = Math.floor(sorted.length / 2);
    const middleNumber = sorted[index];
    return middleNumber;
  }
}

//-------------------------------------------------------

function calculateMode(array) {
  const sorted = sortByNumber(array);

  let mode = 0;
  let modeFreq = 0;

  let currentNum = 0;
  let currentFreq = 0;
  
  for (const number of sorted) {

    
    if (number === currentNum) {
      currentFreq++;
    } 
    
    
    else {
      currentNum = number;
      currentFreq = 1;
    }

    
    if (currentFreq > modeFreq) {
      mode = currentNum;
      modeFreq = currentFreq;
    }
  }

  return mode;
}

//-------------------------------------------------------

function calculateStats(diceId, rollHistory) {
  means[diceId].innerText = calculateMean(rollHistory);
  medians[diceId].innerText = calculateMedian(rollHistory);
  modes[diceId].innerText = calculateMode(rollHistory);
}