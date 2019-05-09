/*******************************************************************************
 * AM - IE validator specification test file for Amazonas state
 * *****************************************************************************
 * technical specification: http://www.sintegra.gov.br/Cad_Estados/cad_AM.html
 * example: '01.004.823/001-12'
 ******************************************************************************/

let assert = require('assert');
let go = require('../src/go');

/**
 * the ie variable representing a valid I.E. for this state function and will be
 * pass if the function './src/go.js' is correct as technical specification.
 * It will fail if the functions is wrong or the ie number is incompatible with state
 */
let ie = '10.954.808-6';

describe(`Checking the I.E. number '${ie}'...`, () => {
    it('go', () => {
        assert.equal(go(ie), ie,
            `Sorry... the I.E. number '${ie}' for the 'AM' state is not valid! :(`);
    });
});