const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(
  str,
  {
    addition = '',
    additionRepeatTimes = 1,
    repeatTimes = 1,
    separator = "+",
    additionSeparator = '|',
  }
) {
  const add = []
  const main = []
  for (let i = 1; i <= additionRepeatTimes; ++i) {
    add.push(`${addition}`)
    add.push(`${additionSeparator}`)      
  }
  for (let i = 1; i <= repeatTimes; ++i) {
  main.push(`${str}${add.slice(0,-1).join('')}`)
  main.push(`${separator}`)    
  }
  return main.slice(0,-1).join('')
}

module.exports = {
  repeater,
};
