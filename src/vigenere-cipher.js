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
const alphabeth = "abcdefghijklmnopqrstuvwxyz".split("");
class VigenereCipheringMachine {
  constructor(bool = true) {
    this.direction = bool;
  }
  mashine(phrase, key, decrypt = undefined) {
    if (!phrase || !key) {
      throw new Error("Incorrect arguments!");
    }
    const phraseArray = phrase.toLowerCase();
    const compareKeyArray = key
      .repeat(Math.ceil(phrase.length / key.length))
      .toLowerCase();
    const cipheredPhrase = [];
    let keyIndexSwitcher = 0;
    for (let i = 0; i < phraseArray.length; i++) {
      if (!phraseArray[i].match(/[a-z]/i)) {
        cipheredPhrase.push(phraseArray[i]);
        continue;
      }
      const cipherLettNumber = alphabeth.reduce(
        (cipheredLettNumber, lettAlphabeth, indexAlphabeth) => {
          if (phraseArray[i] == lettAlphabeth) {
            cipheredLettNumber += indexAlphabeth;
          }
          if (compareKeyArray[keyIndexSwitcher] == lettAlphabeth) {
            decrypt
              ? (cipheredLettNumber -= indexAlphabeth)
              : (cipheredLettNumber += indexAlphabeth);
          }
          return cipheredLettNumber;
        },
        0
      );
      let cipheredLettIndex =
        cipherLettNumber > 25 ? cipherLettNumber - 26 : cipherLettNumber;
      if (decrypt) {
        cipheredLettIndex =
          cipherLettNumber < 0 ? cipherLettNumber + 26 : cipherLettNumber;
      }
      cipheredPhrase.push(alphabeth[cipheredLettIndex]);
      keyIndexSwitcher += 1;
    }
    if (this.direction) {
      return cipheredPhrase.join("").toLocaleUpperCase();
    } else {
      return cipheredPhrase.reverse().join("").toLocaleUpperCase();
    }
  }
  encrypt(phrase, key) {
    return this.mashine(phrase, key);
  }
  decrypt(phrase, key) {
    return this.mashine(phrase, key, true);
  }
}

module.exports = {
  VigenereCipheringMachine,
};