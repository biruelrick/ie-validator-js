/************************************************
 * AP - IE validator for state
 ************************************************/
let h = require('../util/helper');
/**
 * @name validate
 * @description
 * Check if the ie (inscrição estadual) representing by state is a valid number
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
    if (ie.length !== 9) return false;
    if (ie.slice(0, 2) !== '03') return false;

    return weightCalculator(ie);



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
        let block = ie.substring(0, ie.length - 1).split('');
        let part1 = ie.substring(0, ie.length - 1)
        if (block.length !== weights.length) return false;
        
        let parameters = check_IE(part1)

        for (let i = 0; i < block.length; i++) {
            base += weights[i] * block[i];
        }

        let a = base + parameters.p
        let b = a / 11;
        let c = b.toFixed(2);
        let d = c.toString().slice(-2);
        let e = d / 10;
        let f = Math.ceil(e).toString().charAt(0);;
        let g = 11 - f
        let j = block.join().replace(/,/g, '');

        if (g === 10) {
            return j + 0
        } else if (g === 11) {
            return j + part1.d
        } else {
            return j + g
        }

        console.warn('--->',j)

    }

    function check_IE(ie) {
        let p;
        let d;
        ie = Number(ie) 
    
        if (ie >= 3000001 && ie <= 3017000) {
            p = 5;
            d = 0;

        } else if (ie >= 3017001 && ie <= 3019022) {
            p = 9;
            d = 1;

        } else {
            p = 0;
            d = 0;
        }
        return { p: p, d: d }
    }
}
module.exports = validate;