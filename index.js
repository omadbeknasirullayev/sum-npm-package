/**
 * @param {[number]} array 
 * @returns {number}
 */
function sum(array) {
    return array.reduce((value, item) => {
          return value + item
    }, 0)
  }
  
module.exports = sum