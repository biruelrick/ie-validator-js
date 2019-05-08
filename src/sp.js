/************************************************
 * AC - IE validator for Acre state
 ************************************************/

let h = require("../util/helper");

/**
 * @name validate
 * @description
 * Check if the ie (inscrição estadual) representing by state is a valid number
 * technical specification: http://www.sintegra.gov.br/Cad_Estados/cad_AC.html
 * example: '01.004.823/001-12'
 *
 * @param {string} ie string representing the brazilian state registration for companies
 * @param {string|Boolean} pd if user is a 'Produtor Rural'
 *
 * @returns {boolean}
 */
function validate(ie, pd) {
  if (!ie) return false;
  if (typeof ie !== "string") ie = ie.toString();

  // example
  // pd = true
  // ie = P011004243002
  //
  // pd = false
  // ie = 110042490114

  if (!ie) return false;
  ie = ie.split(".").join("");
  ie = ie.split("/").join("");
  ie = ie.split("-").join("");
  if (pd === false) {
    if (ie.length !== 12) return false;
    return weightCalculator(ie, false);
  } else {
    if (ie.length !== 13) return false;

    return weightCalculator(ie, true);
  }
}

/**
 * @name weightCalculator
 * @description
 * Calculate the weight according the technical specification
 *
 * @param {string|Array} ie number registration
 * @param {string|Boolean} pd if user is a 'Produtor Rural'
 * @param {string|number} [firstDigit] from base (first weightCalculation)
 */
function weightCalculator(ie, pd) {
  // example
  // pd = true
  // ie = P011004243002
  //
  // pd = false
  // ie = 11004249 0 114

  let base = 0;
  if (!pd) {
    let weights = [1, 3, 4, 5, 6, 7, 8, 10];
    let weights2 = [3, 2, 10, 9, 8, 7, 6, 5, 4, 3, 2];
    let block = ie
      .toString()
      .substring(0, 8)
      .split("");
    let block2 = ie
      .toString()
      .substring(0, ie.length - 1)
      .split("");
    let firstDigit = ie.substring(8, 9);
    let secondDigit = ie.substring(ie.length - 1);
    // first digit test
    if (block.length !== weights.length) {
      return false;
    }
    base = null;

    for (let i = 0; i < block.length; i++) {
      base += weights[i] * block[i];
    }
    let result = (base % 11).toString();

    result = result.substring(result.length - 1);

    if (!(firstDigit == result)) {
      return false;
    }

    //second digit test
    if (block2.length !== weights2.length) {
      return false;
    }
    base = null;
    for (let i = 0; i < block2.length; i++) {
      base += weights2[i] * block2[i];
    }
    let result2 = (base % 11).toString();
    result2 = result2.substring(result2.length - 1);
    if (!(secondDigit == result2)) {
      return false;
    }
    return h.mask(ie, "###.###.###.###");
  }
  // example
  // pd = true
  // ie = P011004243002
  //
  // pd = false
  // ie = 11004249 0 114
  else {
    let weights = [1, 3, 4, 5, 6, 7, 8, 10];
    let block = ie
      .toString()
      .substring(1, 9)
      .split("");
    let digit = ie.substring(9, 10);
    let end = ie.substring(ie.length - 3, ie.lenght);

    if (block.length !== weights.length) {
      return false;
    }
    base = null;

    for (let i = 0; i < block.length; i++) {
      base += weights[i] * block[i];
    }
    let result = (base % 11).toString();

    result = result.substring(result.length - 1);

    if (!(digit == result)) {
      return false;
    }
    return h.mask(ie, "#-########.#/###");
  }
}

module.exports = validate;
