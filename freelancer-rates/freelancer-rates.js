
/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */

export function dayRate(ratePerHour) {
  const dailyRate = ratePerHour * 8;
  if (ratePerHour > 0) {
    return dailyRate
  }
  else {
    throw new Error(`${ratePerHour} must be a number`);
  }
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */

export function daysInBudget(budget, ratePerHour) {
  const numberOfDays = budget / (ratePerHour * 8);
  if (budget > 0 && ratePerHour > 0) {
    return Math.floor(numberOfDays)
  }
  else {
    throw new Error(`${budget} and ${ratePerHour} must be a number`);
  }
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */

export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  let discountedMonthRates = (1 - discount) * (ratePerHour * 8) * (numDays - (numDays % 22));
  let fullDayRates = (ratePerHour * 8) * (numDays % 22)
  const costWithMonthlyDiscount = discountedMonthRates + fullDayRates;
  if (ratePerHour > 0 && numDays > 0 && discount >= 0) {
    return Math.ceil(costWithMonthlyDiscount)
  }
  else {
    throw new Error(`${ratePerHour}, ${numDays} and ${discount} must be a number`);
  }
}
