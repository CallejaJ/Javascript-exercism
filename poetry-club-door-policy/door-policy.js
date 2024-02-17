// @ts-check
//

/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the front door.
 *
 * @param {string} line
 * @returns {string}
 */

export function frontDoorResponse(line) {
  return line[0]
}

/**
 * Format the password for the front-door, given the response
 * letters.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the front door password
 */

export function frontDoorPassword(word) {
  const splittedWord = word.toLowerCase().split(" ")
  return splittedWord.map(p => p[0].toUpperCase() + p.slice(1)).join(" ")
}

/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the back door.
 *
 * @param {string} line
 * @returns {string}
 */

export function backDoorResponse(line) {
  const sentence = line.replace(/ /g, "").trim() // le quita los 5 espacios en blanco
  return sentence.at(-1);
}

/**
 * Format the password for the back door, given the response
 * letters.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the back door password
 */

export function backDoorPassword(word) {
  const splittedWord = word.toLowerCase().split(" ").map(m => m[0].toUpperCase() + m.slice(1)).join(" ")
  const gentleWord = splittedWord + ", please"
  return gentleWord
}
