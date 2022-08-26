const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(link) {
    this.chain.push(`( ${link} )`);
    return this;
  },
  removeLink(linkNumber) {
    if (
      typeof linkNumber === "number" &&
      linkNumber > 0 &&
      linkNumber <= this.getLength()
    ) {

      this.chain.splice(linkNumber - 1, 1);
      return this;
    } else {
      this.chain = []
      throw new Error("You can\'t remove incorrect link!");
    }
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    const finalChain = this.chain.reduce((string, link, i) => {
      if (i < this.getLength() - 1) {
        return (string += `${link}~~`);
      } else {
        return (string += `${link}`);
      }
    }, "");
    this.chain = []
    return finalChain
  },
};
module.exports = {
  chainMaker,
};