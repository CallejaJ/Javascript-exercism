// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */

export function twoSum(array1, array2) {
  let sum = Number(array1.join("")) + Number(array2.join(""))
  return sum
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */


export function luckyNumber(value) {
const chain = String(value)
  let chainInverted = ""
  for (let i = chain.length - 1; i >= 0; i--) {
    chainInverted += chain[i]
  }
  if (chain === chainInverted) {
    return true
  }
  else{
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


export function errorMessage(input) {
 if (input === "" || input === null || input === undefined) {
    return `Required field`
  }
   // @ts-ignore
  else if (isNaN(input) || input == 0) {
    return `Must be a number besides 0`
  }
  else return ""
  }
