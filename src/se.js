
/************************************************
 * SE - IE validator for Sergipe state
 ************************************************/

let h = require('../util/helper');

/**
 * @name validate
 * @description
 * Check if the ie (inscrição estadual) representing by state is a valid number
 * technical specification: http://www.sintegra.gov.br/Cad_Estados/cad_SE.html
 * @param {string} ie string representing the brazilian state registration for companies
 * Example : "73750251-7"
 * @returns {boolean}
 */

function validate(ie) {
    if (!ie) return false;
    if (typeof ie !== 'string') ie = ie.toString();
    ie = h.returnOnlyNumbers(ie);

    if (ie.length !== 9) return false;
    return weightCalculator(ie);
}

function weightCalculator(ie) {
    let weights = [9, 8, 7, 6, 5, 4, 3, 2];
    let base = 0;
    let block = ie.substring(0, ie.length - 1).split('');

    if (block.length !== weights.length) return false;
    for (let i = 0; i < block.length; i++) {
        base += weights[i] * block[i];
    }

    let resto = base % 11;
    let dig = 0;

    if (resto == '10' || resto == '11') {
        dig = 0;
    } else {
        dig = 11 - resto;
    }

    block.push(dig).toString();
    let i = block.join().replace(/,/g, '');
    return h.mask(i, '########-#');
}

module.exports = validate;
