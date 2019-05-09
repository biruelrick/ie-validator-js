/************************************************
 * RN - IE validator for Rio Grande do Norte state
 ************************************************/

let h = require('../util/helper');

/**
 * @name validate
 * @description
 * Check if the ie (inscrição estadual) representing by state is a valid number
 * technical specification: http://www.sintegra.gov.br/Cad_Estados/cad_RN.html
 * example: '20.012.532-0'
 *
 * @param {string} ie string representing the brazilian state registration for companies
 *
 * @returns {boolean}
 */
function validate(ie) {
    if (!ie) return false;
    if (typeof ie !== 'string') ie = ie.toString();
    ie = h.returnOnlyNumbers(ie);

    if (ie.length !== 9 && ie.length !== 10) return false;

    if (ie.slice(0, 2) !== '20') return false;

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
    let weights = [10, 9, 8, 7, 6, 5, 4, 3, 2];
    let base = 0;
    let block = ie.substring(0, ie.length - 1).split('');

    if (ie.length === 9) weights.shift();
    if (block.length !== weights.length) return false;

    for (let i = 0; i < block.length; i++) {
        base += weights[i] * block[i];
    }

    let dig = 0;
    base = base * 10;
    let resto = base % 11;
    dig = resto;

    if (resto == 10) dig = 0;

    block.push((dig).toString());

    let i = block.join().replace(/,/g, '');

    if (ie.length === 9) {
        return h.mask(i, '##.###.###-#');
    } else {
        if (ie.length === 10) return h.mask(i, '##.#.###.###-#');
    }
}

module.exports = validate;