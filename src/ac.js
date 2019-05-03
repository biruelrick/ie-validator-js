/************************************************
 * AC - IE validator for Acre state
 ************************************************/

let h = require('../util/helper');

/**
 * @name validate
 * @description
 * Check if the ie (inscrição estadual) representing by state is a valid number
 * technical specification: http://www.sintegra.gov.br/Cad_Estados/cad_AC.html
 * example: '01.004.823/001-12'
 *
 * @param {string} ie string representing the brazilian state registration for companies
 *
 * @returns {boolean}
 */
function validate(ie) {
  if (!ie) return false;
  if (typeof ie !== 'string') ie = ie.toString();

  ie = h.returnOnlyNumbers(ie);

  if (!ie) return false;
  if (ie.length !== 13) return false;
  if (ie.slice(0, 2) !== '01') return false;

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
function weightCalculator(ie, firstDigit) {
  let weights = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  let base = 0;
  let block = ie.substring(0, ie.length - 2).split('');

  if (typeof firstDigit === 'undefined') {
    weights.shift();

  } else {
    block.push(firstDigit);
  }

  if (block.length !== weights.length) return false;
  for (let i = 0; i < block.length; i++) base += weights[i] * block[i];

  let a = base / 11;
  let b = Math.floor(a);
  let c = a - b;
  let d = c.toFixed(2);
  let e = d.toString().slice(-2);
  let f = e / 10;
  let g = Math.ceil(f).toString().charAt(0);

  if (!firstDigit) return weightCalculator(ie, g);

  block.push((11 - g).toString());

  let i = block.join().replace(/,/g, '');

  return h.mask(i, '##.###.###/###-##');
}

module.exports = validate;