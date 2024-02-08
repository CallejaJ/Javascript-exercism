// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */

export function timeToMixJuice(name) {
let numberOfMinutes = 0
  switch (name) {
    case 'Pure Strawberry Joy':
      numberOfMinutes = 0.5;
      break;
    case 'Green Garden':
    case 'Energizer':
      numberOfMinutes = 1.5
      break;
    case 'Tropical Island':
      numberOfMinutes = 3
      break;
    case 'All or Nothing':
      numberOfMinutes = 5
      break;
    default:
      numberOfMinutes = 2.5
  }
  return numberOfMinutes
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
let limesCutted = 0
  let wedges = 0;
  while (limesCutted < limes.length && wedges < wedgesNeeded) {
    const sizeOfLime = limes[limesCutted]
    wedges += getWedgesBySize(sizeOfLime);
    limesCutted++
  }
  
  function getWedgesBySize(lime) {
    switch (lime) {
      case "small":
        return 6
      case "medium":
        return 8
      case "large":
        return 10;
      default:
        return 0
    }
  }
  return limesCutted
  }

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */

export function remainingOrders(timeLeft, orders) {
let timeSpent = 0;
  do {
    const juiceName = orders[0]
    timeSpent += timeToMixJuice(juiceName)
    orders.shift()
  }
  while (timeSpent < timeLeft)
  return orders}
