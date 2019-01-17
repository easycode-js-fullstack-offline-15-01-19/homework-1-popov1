// -------------------------- Home work --------------------------
// -------------------------- Попов Евгений --------------------------

// Lesson 1 - String
// Task 1
// Get first and last char in string

let string = 'Some test string to check skills';

let firstChar = string.slice(0, 1);  // result -  S
let lastChar  = string.slice(-1);    // result -  s

// Task 2
// Make first and last char in upper case
let firstCharUpper = firstChar.toUpperCase();   // result -  S
let lastCharUpper  = lastChar.toUpperCase();    // result -  S

// Task 3
// Find the position of the word ‘string’ in the string
let stringPosition = string.indexOf('string');  // result -  10

// Task 4
// Find the position of the second space (manually count nothing)
let secondSpaceIndex = string.indexOf(' ', string.indexOf(' ') + 1); //result - 9

// Task5
// Get the string from the 5th character 4 letters long
let strSubstring = string.substr(4, 4); //result ' tes'

// Task6
// Get the string from the 5th character till 9th char
let strSubstring2 = string.slice(4, 9); //result ' test'

// Task 7
// Get new string from old one without last 6 letters
let newString = string.slice(0, string.length - 6); // resilt - 'Some test string to check '

// Task 8
// Get contact string
let a = 20;
let b = 16;
let c = `${a}` + `${b}`; // result - 2016


// Lesson 1 - Numbers
// Task 1
// Get the number pi from Math and round it up to 2 characters after the point
let fixedLenghtPi = Math.PI.toFixed(2);

// Task 2
// Using Math, find the maximum and minimum numbers from the presented series 15, 11, 16, 12, 51, 12, 13, 51
let aa = 15,
    ab = 11,
    ac = 16,
    ad = 12,
    ae = 51,
    af = 12,
    ag = 13,
    ah = 51;

let maxValue = Math.max(aa, ab, ac, ad, ae, af, ag, ah); // result - 51
let minValue = Math.min(aa, ab, ac, ad, ae, af, ag, ah); // result - 11

// Task 3
// Work with Math.random

// a
// Get a random number and round it to two digits after the decimal point
let randomValue = Math.round(Math.random() * 100) / 100; //result random number in format 0.**

// b
// Get a random integer number fromт 0 to X. X - random number
let randomValue2 = Math.floor(Math.random() * 100); //result random integer number from 0 to 99

// Task 4
// Check the result of the calculation 0.6 + 0.7 - how to bring to normal form (1.3)?
let ba = 0.6;
let bb = 0.7;

let result = ba + bb; //result = 1.2999999999999998

let parsResult   = parseFloat(ba) + parseFloat(bb);     // result = 1.2999999999999998
let normalResult = Math.round(parsResult * 100) / 100;  // result = 1.3

// Task 5
// Get the number from the string ‘100 $’
let stringWithNumber    = '100$';
let stringWithoutNumber = parseInt(stringWithNumber); // result - 100


// Lesson 2 - Objects, Arrays
/**
 *  1. Create an object with a product field of ‘iphone’
 *  2. Add a price field equal to 1000 and a currency field equal to ‘dollar’ to the object
 *  3. Add details field, which will contain an object with model and color fields
 * 
 *  Add all fields one by one, do not immediately create a finished object with all fields.
 */

let goods        = {};

let fieldName    = 'product';
goods[fieldName] = 'iphone';
fieldName        = 'price';
goods[fieldName] = 1000;
fieldName        = 'currency';
goods[fieldName] = 'dollar';

let details         = {};
fieldName           = 'model';
details[fieldName]  = '6S';
fieldName           = 'color';
details[fieldName]  = 'black';

fieldName        = 'details';
goods[fieldName] = details;