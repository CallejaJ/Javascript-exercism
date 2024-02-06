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

// Instructions
// Your friend Li Mei runs a juice bar where she sells delicious mixed fruit juices. 
// You are a frequent customer in her shop and realized you could make your friend's life easier. 
// You decide to use your coding skills to help Li Mei with her job.
// 1. Determine how long it takes to mix a juice
// Li Mei likes to tell her customers in advance how long they have to wait 
// for a juice from the menu that they ordered. 
// She has a hard time remembering the exact numbers 
// because the time it takes to mix the juices varies. 
// 'Pure Strawberry Joy' takes 0.5 minutes, 
// 'Energizer' and 'Green Garden' take 1.5 minutes each, 
// 'Tropical Island' takes 3 minutes and 
// 'All or Nothing' takes 5 minutes. 
// For all other drinks (e.g., special offers) 
// you can assume a preparation time of 2.5 minutes.
// To help your friend, write a function timeToMixJuice 
// that takes a juice from the menu as an argument and returns 
// the number of minutes it takes to mix that drink.

function timeToMixJuice(name) {
  let numberOfMinutes;
  switch (name) {
    case 'Pure Strawberry Joy':
      numberOfMinutes = 0.5
      break;
    case 'Energizer':
    case 'Green Garden':
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

console.log(timeToMixJuice("All or Nothing"))

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */

// A lot of Li Mei's creations include lime wedges(gajos de lima), either as an ingredient or as part of the decoration. 
// So when she starts her shift in the morning she needs to make sure the bin of lime wedges is full for the day ahead.
// Implement the function limesToCut which takes the number of lime wedges Li Mei needs to cut 
// and an array representing the supply of whole limes she has at hand. 
// She can get 6 wedges from a 'small' lime, 8 wedges from a 'medium' lime and 10 from a 'large' lime. 
// She always cuts the limes in the order in which they appear in the list, starting with the first item. 
// She keeps going until she reached the number of wedges that she needs or until she runs out of limes.
// Li Mei would like to know in advance how many limes she needs to cut. 
// The limesToCut function should return the number of limes to cut.

// Replenish the lime wedge supply
// Use a while loop to cut one lime after the other.
// Revisit the arrays concept to find a way to remove the limes from the list in the correct order.
// Set up a switch statement to get the number of wedges for a certain size of a lime.
// You need to keep track of two things, how many limes were already cut and how many wedges are still missing.
// You can combine two conditions for the loop using logical operators.

function limesToCut(wedgesNeeded, limes) {
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

console.log(limesToCut(34, ["small", "medium", "large"]));


// Li Mei always works until 3pm. Then her employee Dmitry takes over. 
// There are often drinks that have been ordered but are not prepared yet when Li Mei's shift ends. 
// Dmitry will then prepare the remaining juices.
// To make the hand-over easier, implement a function remainingOrders which takes the number of minutes left
// in Li Mei's shift and an array of juices that have been ordered but not prepared yet. 
// The function should return the orders that Li Mei cannot start preparing before the end of her workday.
// The time left in the shift will always be greater than 0. The array of juices to prepare will never be empty. 
// Furthermore, the orders are prepared in the order in which they appear in the array. 
// If Li Mei starts to mix a certain juice, she will always finish it even if she has to work a bit longer. 
// If there are no remaining orders left that Dmitry needs to take care of, an empty array should be returned.

// Finish up the shift
// Use a do-while loop to handle one order after the other.
// Revisit the arrays concept to find a way to remove the drinks from the list in the correct order.
// You already have a function that determines the time it takes to prepare a drink, 
// use it to reduce the time that is left accordingly.
// You can combine two conditions for the loop using logical operators.

// 

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
function remainingOrders(timeLeft, orders) {
  let timeSpent = 0;
  do {
    const juiceName = orders[0]
    console.log(juiceName);
    timeSpent += timeToMixJuice(juiceName)
    console.log(timeToMixJuice(juiceName));
    console.log(timeSpent);
    orders.shift()
    console.log(orders);
  }
  while (timeSpent < timeLeft)
  return orders
}

console.log(remainingOrders
  (7,
    [
      'Tropical Island',
      'All or Nothing']
  )
)