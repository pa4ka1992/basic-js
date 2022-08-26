const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
 function getSeason(date) {
  const seasons = {
    'winter': [0, 1, 11],
    'spring': [2, 3, 4],
    'summer': [5, 6, 7],
    'autumn': [8, 9, 10],
  };
  if (date instanceof Date && !date.hasOwnProperty('toString')) {
    const month = date.getMonth()
    let seasonTime                 
    for (const key in seasons) {
      seasons[key].forEach(element => {
        if (element === month) {
          seasonTime = key
        }
      });
    }
    return seasonTime
  } else if (date == undefined) {
    return "Unable to determine the time of year!";
  } else {
    throw new Error("Invalid date!");
  }
}
module.exports = {
  getSeason,
};