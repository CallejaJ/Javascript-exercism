
/**
 * The fast attack is available when the knight is sleeping
 *
 * @param {boolean} knightIsAwake
 *
 * @return {boolean} Whether or not you can execute a fast attack.
 */

export function canExecuteFastAttack(knightIsAwake) {
  if (knightIsAwake) {
    return false
  }
  else {
    return true
  }
}

/**
 * A useful spy captures information, which they can't do if everyone's asleep.
 *
 * @param {boolean} knightIsAwake
 * @param {boolean} archerIsAwake
 * @param {boolean} prisonerIsAwake
 *
 * @returns {boolean} Whether or not you can spy on someone.
 */

export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  //caso 1: cuando está despierto el prisionero
  if (!knightIsAwake && !archerIsAwake && prisonerIsAwake) {
    return true
  }
  // caso 2: cuando está despierto el arquero
  else if (!knightIsAwake && archerIsAwake && !prisonerIsAwake) {
    return true
  }
  // caso 3: cuando está despierto el caballero
  else if (knightIsAwake && !archerIsAwake && !prisonerIsAwake) {
    return true
  }
  // caso 4: cuando todos están despiertos
  else if (knightIsAwake && archerIsAwake && prisonerIsAwake) {
    return true
  }
  // caso 5: cuando solo el caballero está dormido
  else if (!knightIsAwake && archerIsAwake && prisonerIsAwake) {
    return true
  }
  // caso 6: cuando solo el arquero está dormido
  else if (knightIsAwake && !archerIsAwake && prisonerIsAwake) {
    return true
  }
  else return false
}

/**
 * You'll get caught by the archer if you signal while they're awake.
 *
 * @param {boolean} archerIsAwake
 * @param {boolean} prisonerIsAwake
 *
 * @returns {boolean} Whether or not you can send a signal to the prisoner.
 */

export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  if (!archerIsAwake && prisonerIsAwake) {
    return true
  }
  else if (!archerIsAwake && !prisonerIsAwake) {
    return false
  }
  else if (archerIsAwake && !prisonerIsAwake) {
    return false
  }
  else return false
}


/**
 * The final stage in the plan: freeing Annalyn's best friend.
 *
 * @param {boolean} knightIsAwake
 * @param {boolean} archerIsAwake
 * @param {boolean} prisonerIsAwake
 * @param {boolean} petDogIsPresent
 *
 * @returns {boolean} Whether or not you can free Annalyn's friend.
 */

export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent,
) {
  // when everyone is asleep and pet dog is not present
  if (!knightIsAwake && !archerIsAwake && !prisonerIsAwake && !petDogIsPresent) {
    return false
  }
  // when everyone is asleep and pet dog is present
  else if (!knightIsAwake && !archerIsAwake && !prisonerIsAwake && petDogIsPresent) {
    return true
  }
  // when only the prisoner is awake and pet dog is present
  // when only the prisoner is awake and pet dog is not present
  else if (!knightIsAwake && !archerIsAwake && prisonerIsAwake && (!petDogIsPresent || petDogIsPresent)) {
    return true
  }
  // when only the archer is awake and pet dog is not present
  // when only the archer is awake and pet dog is present
  else if (!knightIsAwake && archerIsAwake && !prisonerIsAwake && (petDogIsPresent || !petDogIsPresent)) {
    return false
  }
  // when only the knight is asleep and pet dog is not present
  else if (!knightIsAwake && archerIsAwake && prisonerIsAwake && (petDogIsPresent || !petDogIsPresent)) {
    return false
  }
  // when only the knight is awake and pet dog is not present
  else if (knightIsAwake && !archerIsAwake && !prisonerIsAwake && !petDogIsPresent) {
    return false
  }
  // when only the knight is awake and pet dog is present
  else if (knightIsAwake && !archerIsAwake && !prisonerIsAwake && petDogIsPresent) {
    return true
  }
  //when only the archer is asleep and pet dog is not present
  else if (knightIsAwake && !archerIsAwake && prisonerIsAwake && !petDogIsPresent) {
    return false
  }
  //when only the archer is asleep and pet dog is present
  else if (knightIsAwake && !archerIsAwake && prisonerIsAwake && petDogIsPresent) {
    return true
  }
  // when only the prisoner is asleep and pet dog is not present
  // when only the prisoner is asleep and pet dog is present
  else if (knightIsAwake && archerIsAwake && !prisonerIsAwake && (petDogIsPresent || !petDogIsPresent)) {
    return false
  }
  // when everyone is awake and pet dog is present
  // when everyone is awake and pet dog is not present
  else if (knightIsAwake && archerIsAwake && prisonerIsAwake && (petDogIsPresent || !petDogIsPresent)) {
    return false
  }
  else return false
}
