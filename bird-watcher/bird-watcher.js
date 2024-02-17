
/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */


export function totalBirdCount(birdsPerDay) {
  let totalBirds = 0;
  return birdsPerDay.reduce((totalAcc, bird) => {
    return totalAcc += bird;
  }, 0)
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */


export function birdsInWeek(birdsPerDay, week) {
  let totalBirds = 0;
  const days = 7;
  let lastIteration = days * week
  if (week === 1) {
    for (let i = 0; i < 7; i++) {
      totalBirds += birdsPerDay[i]
    }
    return totalBirds
  }
  else if (week >= 2) {
    for (let i = lastIteration - 7; i < lastIteration; i++) {
      totalBirds += birdsPerDay[i]
    }
    return totalBirds
  }
}


/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */


export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i++) {
    if (i % 2 === 0) {
      birdsPerDay[i] = birdsPerDay[i] + 1
    }
  }
  return birdsPerDay
}
