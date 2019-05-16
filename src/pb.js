/************************************************
 * PB - IE validator for Paraíba state
 ************************************************/

let h = require("../util/helper");

/**
 * @name validate
 * @description
 * Check if the ie (inscrição estadual) representing by state is a valid number
 * technical specification: http://www.sintegra.gov.br/Cad_Estados/cad_PB.html
 * example: '86946982-7'
 *
 * @param {string} ie string representing the brazilian state registration for companies
 *
 * @returns {boolean}
 */
function validate(ie) {
  if (!ie) return false;
  if (typeof ie !== "string") ie = ie.toString();

  if (!ie) return false;
  if (ie.length !== 10) return false;

  return weightCalculator(ie);
}

/**
 * @name weightCalculator
 * @description
 * Calculate the weight according the technical specification
 *
 * @param {string|Array} ie number registration
 * @param {string|number} [firstDigit] from base (first weightCalculation)
 */
function weightCalculator(ie) {
  let weights = [9, 8, 7, 6, 5, 4, 3, 2];
  let base = 0;
  let block = ie
    .toString()
    .split("-")[0]
    .split("");
  let digito = ie.split("-")[1];

  if (block.length !== weights.length) {
    return false;
  }
  for (let i = 0; i < block.length; i++) {
    base += weights[i] * block[i];
  }
  if (base % 11 !== 6) {
    return false;
  }

  block.push(digito);

  let i = block.join().replace(/,/g, "");
  return h.mask(i, "########-#");
}

module.exports = validate;
