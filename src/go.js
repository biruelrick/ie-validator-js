/************************************************
 * GO - IE validator for Goiás state
 ************************************************/


let h = require('../util/helper');

/**
 * @name validate
 * @description
 * Check if the ie (inscrição estadual) representing by state is a valid number
 * technical specification: http://www.sintegra.gov.br/Cad_Estados/cad_GO.html
 * example: '10.954.808-6'
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
    if (ie.slice(0, 2) !== '10') return false;

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
    let block = ie.substring(0, ie.length - 1).split('');
    for (let i = 0; i < block.length; i++) {
        base += weights[i] * block[i];
    }

    let maiorDiv = base / 11;
    let maior = Math.floor(maiorDiv);
    let resto = base % 11;

    let dig = null;

    if ((block == 11094402) && (resto == 0)) dig = 0;
    if ((block == 11094402) && (resto == 1)) dig = 1;
    if (resto == 0) dig = 0;
    if ((resto == 1) && (block >= 10103105) && (block <= 10119997)) dig = 1;
    if ((resto == 1) && (10103105 > block) && (block > 10119997)) dig = 1;
    if ((resto != 1) && (resto != 0)) dig = 11 - resto;

    block.push((dig).toString());

    let i = block.join().replace(/,/g, '');
    return h.mask(i, '##.###.###-#');


}
module.exports = validate;