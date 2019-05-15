/************************************************
 * AC - IE validator for Amapá state
 ************************************************/

let h = require("../util/helper");

/**
 * @name validate
 * @description
 * Check if the ie (inscrição estadual) representing by state is a valid number
 * technical specification: http://www.sintegra.gov.br/Cad_Estados/cad_AM.html
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
  return weightCalculator(ie);
}

function weightCalculator(ie) {
  let weights = [9, 8, 7, 6, 5, 4, 3, 2];
  let base = 0;
  let block = ie.substring(0, ie.length - 1).split("");

  //if(block.lenght !== weights.length) return false;
  for (let i = 0; i < block.length; i++) {
    base += weights[i] * block[i];
  }
  if (base < 11) {
    let dig = 11 - base;
  } else {
    let quo = base % 11;

    if (quo <= 1) {
      dig = 0;
    } else {
      dig = 11 - quo;
    }
  }

  block.push(dig.toString());
  let i = block.join().replace(/,/g, "");
  return h.mask(i, "##.###.###-#");
}
module.exports = validate;
