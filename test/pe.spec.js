/*******************************************************************************
 * PE - IE validator specification test file for Pernambuco state
 * *****************************************************************************
 * technical specification: http://www.sintegra.gov.br/Cad_Estados/cad_PE.html
 * example: '0321418-40'
 ******************************************************************************/

let assert = require('assert');
let pe = require('../src/pe');

/**
 * the ie variable representing a valid I.E. for this state function and will be
 * pass if the function './src/ac.js' is correct as technical specification.
 * It will fail if the functions is wrong or the ie number is incompatible with state
 */
let ie = '0321418-40';

describe(`Checking the I.E. number '${ie}'...`, () => {
    it('pe', () => {
        assert.equal(pe(ie), ie,
            `Sorry... the I.E. number '${ie}' for the 'PE' state is not valid! :(`);
    });
});