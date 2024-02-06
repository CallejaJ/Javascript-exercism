/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Creates a new score board with an initial entry.
 *
 * @returns {Record<string, number>} new score board
 */

// Create a function createScoreBoard that creates an object that serves as a high score board
// The keys of this object will be the names of the players, the values will be their scores. 
// For testing purposes, you want to directly include one entry in the object. 
// This initial entry should consist of The Best Ever as player name and 1000000 as score.

function createScoreBoard() {
  const score = {
    "The Best Ever": 1000000,
  }
  return score
}
console.log(createScoreBoard());

/**
 * Adds a player to a score board.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @param {number} score
 * @returns {Record<string, number>} updated score board
 */

// To add a player to the high score board, 
// define the function addPlayer. It accepts 3 parameters:
// The first parameter is an existing score board object.
// The second parameter is the name of a player as a string.
// The third parameter is the score as a number.
// The function returns the same score board object that was passed in after adding the new player.

// HINTS
// Add players to a score board
// Use bracket notation to add a key with a name that is stored in a variable (the argument).
// Use the assignment operator (=) to set a value for the new key.
// Return the score board parameter after you added the player.

const scoreBoard = {
  'Fiorella Ordaz': 2000,
  'Jorge Calleja': 1000,
}

function addPlayer(scoreBoard, player, score) {
  scoreBoard[player] = score;
  console.log(scoreBoard[player]);
  console.log(player);
  return scoreBoard
}
console.log(scoreBoard);
console.log(addPlayer(scoreBoard, 'Jhon Macias', 1337));
addPlayer(scoreBoard, 'Jhon Macias', 1337)

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


function updateScore(scoreBoard, player, points) {
  scoreBoard[player] += points
  console.log(scoreBoard[player]);
  return scoreBoard
}
console.log(updateScore(scoreBoard, 'Jhon Macias', 3000));
console.log(scoreBoard);

/**
 * Applies 100 bonus points to all players on the board.
 *
 * @param {Record<string, number>} scoreBoard
 * @returns {Record<string, number>} updated score board
 */

function applyMondayBonus(scoreBoard) {
  for (let score in scoreBoard) {
    scoreBoard[score] += 100
    console.log(scoreBoard);
  }
  return scoreBoard
}
console.log(applyMondayBonus(scoreBoard));

/**
 * Normalizes a score with the provided normalization function.
 *
 * @param {Params} params the parameters for performing the normalization
 * @returns {number} normalized score
 */

// Normalize a high score
// You can access the normalization function like you would access any other key in the object.
// Then, you can call that function using round brackets and pass in the score as an argument.

// Write a function normalizeScore. 
// To practice your object skills, instead of two parameters this function 
// should accept one object as a parameter. 
// That object contains a key score with the value being a player's score (a number). 
// There is also a second key normalizeFunction that has a function as its value. 
// This function takes a score as an argument and returns the corrected score.
// Your function normalizeScore should return the normalized score that you get after applying
//  the normalization function to the score that was passed in.


// function normalize(score) {
//   return 2 * score + 10;
// }

// const params = { score: 400, normalizeFunction: normalize };
// normalizeScore(params);
// => 810

const params = {
  score: 2000,
  normalizeFunction: normalize
}

function normalize(score) {
  console.log(params.score);
  return 2 * score + 10;
}

function normalizeScore(params) {
  console.log({ params });
  return params.normalizeFunction(params.score)
}

console.log(normalizeScore(params))
