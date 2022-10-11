const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  obj = {};
  domains.forEach((domain) => {
    let revesedDom = domain.split(".").reverse();
    let string = "";
    revesedDom.forEach((part) => {
      string += `.${part}`
      obj[string] ? (obj[string] += 1) : (obj[string] = 1);
    });
  });
  return obj;
}

module.exports = {
  getDNSStats,
};
