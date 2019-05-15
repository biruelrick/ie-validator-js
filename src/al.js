/************************************************
 * AL - IE validator for Alagoas state
 ************************************************/

let h = require("../util/helper");

/**
 * @name validate
 * @description
 * Check if the ie (inscrição estadual) representing by state is a valid number
 * technical specification: http://www.sintegra.gov.br/Cad_Estados/cad_AL.html
 * example: '01.004.823/001-12'
 *
 * @param {string} ie string representing the brazilian state registration for companies
 *
 * @returns {boolean}
 */
function validate(ie) {
  if (!ie) return false;
  if (typeof ie !== "string") ie = ie.toString();

  ie = h.returnOnlyNumbers(ie);

  if (!ie) return false;
  if (ie.length !== 9) return false;
  if (ie.slice(0, 2) !== "24") return false;

  return weightCalculator(ie);
}

/**
 * @name weightCalculator
 * @description
 * Calculate the weight according the technical specification
 *
 * @param {string|Array} ie number registration
 */
function weightCalculator(ie) {
  let weights = [9, 8, 7, 6, 5, 4, 3, 2];
  let base = 0;
  let block = ie.substring(0, ie.length - 1).split("");

  if (block.length !== weights.length) return false;

  for (let i = 0; i < block.length; i++) {
    base += weights[i] * block[i];
  }

  let a = base * 10;
  let b = a / 11;
  let c = Math.floor(b);
  let d = c * 11;
  let e = a - d;

  let f = block.join().replace(/,/g, "");

  if (e === 10) {
    return f + 0;
  } else {
    return f + e;
  }
}

module.exports = validate;
