
/**
 * The number of minutes it takes to prepare a single layer.
 */
export const PREPARATION_MINUTES_PER_LAYER = 2;

/**
 * Determines the number of minutes the lasagna still needs to remain in the
 * oven to be properly prepared.
 *
 * @param {number} actualMinutesInOven
 * @returns {number} the number of minutes remaining
 */

export const EXPECTED_MINUTES_IN_OVEN = 40;

export function remainingMinutesInOven(actualMinutesInOven) {
  let minutesremaining = EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
  if (minutesremaining >= 0) return minutesremaining
  else {
    throw new Error('The lasagna is burnt')
  }
}

/**
 * Given a number of layers, determines the total preparation time.
 *
 * @param {number} numberOfLayers
 * @returns {number} the total preparation time
 */

export function preparationTimeInMinutes(numberOfLayers) {
  const PREPARATION_MINUTES_PER_LAYER = 2;
  let preparationTime = numberOfLayers * PREPARATION_MINUTES_PER_LAYER;
  if (preparationTime > 0) return preparationTime
  else {
    throw new Error('Number of layers must be a number')
  }
}

/**
 * Calculates the total working time. That is, the time to prepare all the layers
 * of lasagna, and the time already spent in the oven.
 *
 * @param {number} numberOfLayers
 * @param {number} actualMinutesInOven
 * @returns {number} the total working time
 */

export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  const PREPARATION_MINUTES_PER_LAYER = 2;
  let totalWorkingTime = (numberOfLayers * PREPARATION_MINUTES_PER_LAYER) + actualMinutesInOven;
  if (totalWorkingTime > 0) return totalWorkingTime
  else {
    throw new Error('The lasagna is burnt');
  }
}
