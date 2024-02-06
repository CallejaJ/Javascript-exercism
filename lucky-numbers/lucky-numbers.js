// @ts-check

// Your friend Kojo is a big fan of numbers. 
// He has a small website called 'fun-with-numbers'. 
// Kojo is not that good at programming so he asked you for help.
// You will build two helper functions for new number games on Kojos' website
// and a third one to validate some input the user can enter.

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */

// One of the games on Kojos' website looks like a slot machine 
// that shows two groups of wheels with digits on them. 
// Each group of digits represents a number. For the game mechanics, 
// Kojo needs to know the sum of those two numbers.
// Write a function twoSum that accepts two arrays as parameters. 
// Each array consists of one or more numbers between 0 and 9. 
// The function should interpret each array as a number and return the sum of those two numbers.

// You can use join to combine the digits. 
// It will implicitly convert the numbers to strings as well.
// Revisit the introduction section to find out how to convert a string to a number.
// Sum the numbers after they were converted.

const leftInput = [2, 4];
const rightInput = [1, 5, 7];

function twoSum(array1, array2) {
  console.log(array1.join(""));
  console.log(array2.join(""));
  let sum = Number(array1.join("")) + Number(array2.join(""))
  return sum
}

console.log(twoSum(leftInput, rightInput));

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */

// Another game on the website is a little quiz called "Lucky Numbers".
// A user can enter a number and then sees 
// whether the number belongs to some secret sequence or pattern. 
// The sequence or pattern of the "lucky numbers" changes each month and each user 
// only has a limited number of tries to guess it.
// This months' lucky numbers should be numbers that are palindromes. 
// Palindromic numbers remain the same when the digits are reversed.
// Implement the new luckyNumber function that accepts a number as a parameter. 
// The function should return true if the number is a palindrome and false otherwise. 
// The input number will always be a positive integer.

// This task can be solved by treating the number as a string 
// and checking whether the string equals its reversed version.
// To do this, you first need to convert the number to a string. 
// Revisit the introduction section to find out how to do that.
// To reverse the string, split it into an array, reverse the array and join it back together.
// Finally, you can compare the original string with the reversed string.


const luckyNumber1 = 122134
console.log(typeof (luckyNumber1));

function luckyNumber(value) {
  const chain = String(value)
  let chainInverted = ""
  for (let i = chain.length - 1; i >= 0; i--) {
    chainInverted += chain[i]
  }
  if (chain === chainInverted) {
    return true
  }
  else {
    return false
  }
}


/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */

// In various places on the website, there are input fields where the users can enter numbers
// and click a button to trigger some action. 
// Kojo wants to improve the user experience of his site. 
// He wants to show an error message in case the user clicks 
// the button but the field contains an invalid input value.
// Here is some more information on how the value of an input field is provided.
// If the user types something into a field, the associated value is always a string even if the user only typed in numbers.
// If the user types something but deletes it again, the variable will be an empty string.
// Before the user even started typing, the variable can be undefined or null.
// Write a function errorMessage that accepts the user input as a parameter. 
// If the user did not provide any input, errorMessage should return 'Required field'. 
// If the input does not represent a non-zero number (according to the JavaScript conversion rules), 
// 'Must be a number besides 0' should be returned. 
// In all other cases, you can assume the input is valid, the return value should be an empty string.

errorMessage('123');
// => ''

errorMessage('');
// => 'Required field'

errorMessage('abc');
// => 'Must be a number besides 0'

// You can use if statements to check for the different conditions.
// First, you should cover the case that the value does not contain any characters. 
// When writing the condition for that, make use of implicit conversion to boolean 
// and the fact that null, undefined and empty string are all falsy.
// Next, tackle the case that the input is not a number or 0. 
// Use the explicit conversion to Number you learned about in the introduction. 
// Then, you can once more rely on implicit conversion to boolean and the fact that NaN and 0 are falsy.
// The logical NOT operator ! might be helpful to formulate the conditions.

function errorMessage(input) {
  if (input === "" || input === null || input === undefined) {
    return `Required field`
  }
  else if (isNaN(input) || input == 0) {
    return `Must be a number besides 0`
  }
  else return ""
}

console.log(errorMessage("caca"));
