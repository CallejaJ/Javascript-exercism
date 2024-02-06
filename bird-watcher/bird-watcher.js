// // @ts-check
// //
// // The line above enables type checking for this file. Various IDEs interpret
// // the @ts-check directive. It will give you helpful autocompletion when
// // implementing this exercise.

// // You are an avid bird watcher that keeps track of how many birds have visited your garden. 
// // Usually, you use a tally in a notebook to count the birds but you want to better work with your data. 
// // You already digitalized the bird counts per day for the past weeks that you kept in the notebook.
// // Now you want to determine the total number of birds that you counted, 
// // calculate the bird count for a specific week and correct a counting mistake.

// /**
//  * Calculates the total bird count.
//  *
//  * @param {number[]} birdsPerDay
//  * @returns {number} total bird count
//  */

// // To practice, use a for loop to solve each of the tasks below.
// // 1. Determine the total number of birds that you counted so far
// // Let us start analyzing the data by getting a high-level view. 
// // Find out how many birds you counted in total since you started your logs.
// // Implement a function totalBirdCount that accepts an array that contains the bird count per day. 
// // It should return the total number of birds that you counted.

// // export function totalBirdCount(birdsPerDay) {
// //   let totalBirds = 0;
// //   for (let i = 0; i < birdsPerDay.length; i++) {
// //     totalBirds += birdsPerDay[i]
// //     console.log(totalBirds);
// //   }
// //   return totalBirds
// // }

// function totalBirdCount(birdsPerDay) {
//   let totalBirds = 0;
//   for (const bird of birdsPerDay) {
//     totalBirds += bird
//     console.log(totalBirds);

//   }
//   return totalBirds
// }



// // export function totalBirdCount(birdsPerDay) {
// //   let totalBirds = 0;
// //   birdsPerDay.map((bird => {
// //     totalBirds += bird
// //   }))
// //   return totalBirds
// // }

// // export function totalBirdCount(birdsPerDay){
// //   return birdsPerDay.reduce((totalAcc, bird) => {
// //     return totalAcc + bird;
// //   }, 0)
// // }

// console.log(totalBirdCount([1, 2, 3, 4]))

// /**
//  * Calculates the total number of birds seen in a specific week.
//  *
//  * @param {number[]} birdsPerDay
//  * @param {number} week
//  * @returns {number} birds counted in the given week
//  */

// // Now that you got a general feel for your bird count numbers, 
// // you want to make a more fine-grained analysis.
// // Implement a function birdsInWeek that accepts an array of bird counts per day and a week number. 
// // It returns the total number of birds that you counted in that specific week. 
// // You can assume weeks are always tracked completely.

// function birdsInWeek(birdsPerDay, week) {

//   let totalBirds = 0;
//   const days = 7;
//   let lastIteration = days * week

//   if (week === 1) {
//     for (let i = 0; i < 7; i++) {
//       console.log(i);
//       totalBirds += birdsPerDay[i]
//     }
//     return totalBirds;
//   }
//   else if (week >= 2) {
//     console.log(lastIteration);
//     for (let i = lastIteration - 7; i < lastIteration; i++) {
//       console.log(i);
//       totalBirds += birdsPerDay[i]
//     }
//     return totalBirds;
//   }
// }

// console.log(birdsInWeek([1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4], 4));

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */

// You realized that all the time you were trying to keep track of the birds, 
// there was one hiding in a far corner of the garden. 
// You figured out that this bird always spent every second day in your garden. 
// You do not know exactly where it was in between those days but definitely not in your garden. 
// Your bird watcher intuition also tells you 
// that the bird was in your garden on the first day that you tracked in your list.
// Given this new information, write a function fixBirdCountLog 
// that takes an array of birds counted per day as an argument. 
// It should correct the counting mistake and return the modified array.

// Fix a counting mistake
// Again, you need to set up a for loop to iterate over the whole bird count array.
// This time you only need to visit every second entry in the array.
// Change the step so the counter variable is increased accordingly after each iteration.
// In the body of the for loop you can use the increment operator to change the value of an element in an array in place.

function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i++) {
    if (i % 2 === 0) {
      birdsPerDay[i] = birdsPerDay[i] + 1
      console.log(birdsPerDay[i])
    }
  }
  return birdsPerDay
}

console.log(fixBirdCountLog([1,1,1,1,1,1,1,1,1]))
