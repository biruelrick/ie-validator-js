/*******************************************************************************
 * RR - IE validator specification test file for Roraima  state
 * *****************************************************************************
 * technical specification: http://www.sintegra.gov.br/Cad_Estados/cad_RR.html
 * example: '24006153-6'
 ******************************************************************************/

let assert = require('assert');
let rr = require('../src/rr');

/**
 * the ie variable representing a valid I.E. for this state function and will be
 * pass if the function './src/rr.js' is correct as technical specification.
 * It will fail if the functions is wrong or the ie number is incompatible with state
 */
let ie = '24006153-6';

describe(`Checking the I.E. number '${ie}'...`, () => {
    it('rr', () => {
        assert.equal(rr(ie), ie,
            `Sorry... the I.E. number '${ie}' for the 'RR' state is not valid! :(`);
    });
});