let h = require('../util/helper');

function validate(ie) {
    if (!ie) return false;
    if (typeof ie != 'string') ie = ie.toString();

    ie = h.returnOnlyNumbers(ie);

    if (ie.length !== 9) return false;
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
    let weights = [9, 8, 7, 6, 5, 4, 3, 2];
    let base = 0;
    let block = ie.substring(0, ie.length - 2).split('');

    if (typeof firstDigit === 'undefined') {
        weights.shift();
    } else {
        block.push(firstDigit);
    }


    if (block.length !== weights.length) return false;
    for (let i = 0; i < block.length; i++) {
        base += weights[i] * block[i]
    }

    maior = Math.floor((base / 11));
    resto = base % 11;

    if (resto == 1 || 0) {
        dig = 0;
    } else {
        dig = 11 - resto;
    }

    if (!firstDigit) return weightCalculator(ie, dig);
    block.push((dig).toString());

    let i = block.join().replace(/,/g, '');
    return h.mask(i, '#######-##');
}

module.exports = validate;