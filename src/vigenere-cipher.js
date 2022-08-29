const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
 const alphabeth = "0abcdefghijklmnopqrstuvwxyz".split("")
class VigenereCipheringMachine {
  constructor(bool) {
    this.direction = bool;
  }
  encrypt(phrase, key) {
    if (!phrase && !key) {
      throw new Error("Incorrect arguments!");
    }
    const phraseArray = phrase.split("");
    const compareKeyArray = key
      .repeat(Math.ceil(phrase.length / key.length))
      .split("");
    const cipheredPhrase = [];
    for (let i = 0; i < phraseArray.length; i++) {
      if (!phraseArray[i].match(/[a-z]/i)) {
        cipheredPhrase.push(phraseArray[i])
        continue
      }
      const cipherLettNumber = alphabeth.reduce(
        (cipheredLettNumber, lettAlphabeth, indexAlphabeth) => {
          if (phraseArray[i] == lettAlphabeth) {
            return (cipheredLettNumber += indexAlphabeth);
          }
          if (compareKeyArray[i] == lettAlphabeth) {
            return (cipheredLettNumber += indexAlphabeth);
          }
          return cipheredLettNumber;
        },
        0
      );
      cipheredPhrase.push(
        alphabeth[
          cipherLettNumber > 26 ? cipherLettNumber - 26 : cipherLettNumber
        ]
      );
    }
    return cipheredPhrase.join('').toLocaleUpperCase()
  }
  decrypt(passw, key) {
    if (!passw && !key) {
      throw new Error("Incorrect arguments!");
    }

  }
}

module.exports = {
  VigenereCipheringMachine,
};
const directMachine = new VigenereCipheringMachine(true)
directMachine.encrypt('attack at dawn!', 'alphonse')
