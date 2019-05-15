/************************************************
 * AC - IE validator for Piauí state
 ************************************************/

let h = require("../util/helper");

/**
 * @name validate
 * @description
 * Check if the ie (inscrição estadual) representing by state is a valid number
 * technical specification: http://www.sintegra.gov.br/Cad_Estados/cad_PI.html
 * example: '93300509-1'
 *
 * @param {string} ie string representing the brazilian state registration for companies
 *
 * @returns {boolean}
 */
function validate(ie) {
  if (!ie) return false;
  if (typeof ie !== "string") ie = ie.toString();

  let temp = ie.replace(/\./g, "");

  temp = temp.replace("-", "");

  if (temp.length !== 9) return false;

  return weightCalculator(temp);
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
    .substring(0, ie.length - 1)
    .split("");
  let digito = ie.substring(ie.length - 1);

  if (block.length !== weights.length) {
    return false;
  }
  for (let i = 0; i < block.length; i++) {
    base += weights[i] * block[i];
  }
  if (digito == 0) {
    if (
      11 - (base % 11) == 11 ||
      base % 11 == 10 ||
      11 - (base % 11) == digito
    ) {
      block.push(digito);
      let i = block.join().replace(/,/g, "");
      return h.mask(i, "#########");
    }
  }
  if (11 - (base % 11) != digito) return false;
  block.push(digito);
  let i = block.join().replace(/,/g, "");
  return h.mask(i, "#########");
}

module.exports = validate;
