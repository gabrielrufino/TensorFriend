'use strict'

/**
 * Generate a random position of an array
 * @param {*[]} array - Array of anything
 */
const getRandomPosition = array => {
  if (!Array.isArray(array)) throw new Error('Argument should be an array')

  return Math.floor(Math.random() * array.length)
}

module.exports = getRandomPosition
