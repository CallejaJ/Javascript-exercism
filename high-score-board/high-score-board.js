export function createScoreBoard() {
  const score = {
    "The Best Ever": 1000000,
  }
  return score
}

/**
 * Adds a player to a score board.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @param {number} score
 * @returns {Record<string, number>} updated score board
 */


const scoreBoard = {
  'Fiorella Ordaz': 2000,
  'Jorge Calleja': 1000,
}

export function addPlayer(scoreBoard, player, score) {
  scoreBoard[player] = score;
  console.log(scoreBoard[player]);
  console.log(player);
  return scoreBoard
}
// console.log(scoreBoard);
// console.log(addPlayer(scoreBoard, 'Jhon Macias', 1337));
// addPlayer(scoreBoard, 'Jhon Macias', 1337)

/**
 * Removes a player from a score board.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @returns {Record<string, number>} updated score board
 */

// Remove players from a score board
// Use the delete operator.
// Reference the key like you have done in the task before (bracket notation).

// function removePlayer(scoreBoard, player) {
//   delete scoreBoard[player]
//   return scoreBoard
// }

// console.log(removePlayer(scoreBoard, 'Jesse Johnson'));

/**
 * Increases a player's score by the given amount.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @param {number} points
 * @returns {Record<string, number>} updated score board
 */


export function updateScore(scoreBoard, player, points) {
  scoreBoard[player] += points
  console.log(scoreBoard[player]);
  return scoreBoard
}

// console.log(updateScore(scoreBoard, 'Jhon Macias', 3000));
// console.log(scoreBoard);

/**
 * Applies 100 bonus points to all players on the board.
 *
 * @param {Record<string, number>} scoreBoard
 * @returns {Record<string, number>} updated score board
 */

export function applyMondayBonus(scoreBoard) {
  for (let score in scoreBoard) {
    scoreBoard[score] += 100
    console.log(scoreBoard);
  }
  return scoreBoard
}
// console.log(applyMondayBonus(scoreBoard));

/**
 * Normalizes a score with the provided normalization function.
 *
 * @param {Params} params the parameters for performing the normalization
 * @returns {number} normalized score
 */


// const params = {
//   score: 2000,
//   normalizeFunction: normalize
// }

// function normalize(score) {
//   console.log(params.score);
//   return 2 * score + 10;
// }

function normalizeScore(params) {
  console.log({ params });
  return params.normalizeFunction(params.score)
}

