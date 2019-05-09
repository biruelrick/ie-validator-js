/************************************************
 * TO - IE validator for Tocantins state
 ************************************************/

let h = require('../util/helper');

/**
 * @name validate
 * @description
 * Check if the ie (inscrição estadual) representing by state is a valid number
 * technical specification: http://www.sintegra.gov.br/Cad_Estados/cad_TO.html
 * example: '9803619620-7'
 *
 * @param {string} ie string representing the brazilian state registration for companies
 *
 * @returns {boolean}
 */

function validate(ie) {
    if (!ie) return false;
    if (typeof ie !== 'string') ie = ie.toString();

    ie = h.returnOnlyNumbers(ie);
    if (ie.length !== 11) return false;
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
    let weights = [9, 8, 7, 6, 5, 4, 3, 2];
    let base = 0;
    let temp = ie.substring(2, 4).split('');
    let block1 = ie.substring(0, 2).split();
    let block2 = ie.substring(4, ie.length - 1).split();
    let block = (block1 + block2).substring().split('');

    for (let i = 0; i < weights.length; i++) {
        base += weights[i] * block[i];
    }
    let resto = base % 11;

    if (resto < 2) {
        dig = 0;
    } else {
        dig = 11 - resto;
    }
    block.push((dig).toString());
    block = (block1 + temp + block2 + dig).substring().split();


    let i = block.join().replace(/,/g, '');
    return h.mask(i, '##########-#');

}

module.exports = validate;