/************************************************
 * RR - IE validator for Roraima state
 ************************************************/

let h = require('../util/helper');

/**
 * @name validate
 * @description
 * Check if the ie (inscrição estadual) representing by state is a valid number
 * technical specification: http://www.sintegra.gov.br/Cad_Estados/cad_RR.html
 * example: '24006153-6'
 *
 * @param {string} ie string representing the brazilian state registration for companies
 *
 * @returns {boolean}
 */

function validate(ie) {
    if (!ie) return false;
    if (typeof ie !== 'string') ie = ie.toString();
    ie = h.returnOnlyNumbers(ie);
    if (ie.length !== 9) return false;
    if (ie.slice(0, 2) !== '24') return false;

    return weightCalculator(ie);
}

/**
 * @name weightCalculator
 * @description
 * Calculate the weight according the technical specification
 *
 * @param {string|Array} ie number registration
 * @param {string|number} from base (first weightCalculation)
 */

function weightCalculator(ie) {
    let weights = [1, 2, 3, 4, 5, 6, 7, 8];
    let base = 0;
    let block = ie.substring(0, ie.length - 1).split('');

    if (block.length !== weights.length) return false;
    for (let i = 0; i < weights.length; i++) {
        base += weights[i] * block[i];
    }

    let dig = (resto = base % 9);

    block.push((dig).toString());
    let i = block.join().replace(/,/g, '');
    return h.mask(i, '########-#');
}

module.exports = validate;