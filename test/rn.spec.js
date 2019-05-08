/*******************************************************************************
 * RN - IE validator specification test file for Rio Grande de Norte state
 * *****************************************************************************
 * technical specification: http://www.sintegra.gov.br/Cad_Estados/cad_RN.html
 * example: '20.012.532-0'
 ******************************************************************************/

let assert = require('assert');
let rn = require('../src/rn');

/**
 * the ie variable representing a valid I.E. for this state function and will be
 * pass if the function './src/ac.js' is correct as technical specification.
 * It will fail if the functions is wrong or the ie number is incompatible with state
 */
let ie = '20.012.532-0';

describe(`Checking the I.E. number '${ie}'...`, () => {
    it('rn', () => {
        assert.equal(rn(ie), ie,
            `Sorry... the I.E. number '${ie}' for the 'RN' state is not valid! :(`);
    });
});