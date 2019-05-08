/*******************************************************************************
 * RO - IE validator specification test file for Roraima state
 * *****************************************************************************
 * technical specification: http://www.sintegra.gov.br/Cad_Estados/cad_RO.html
 * example: '5833583880755-9'
 ******************************************************************************/

let assert = require('assert');
let ro = require('../src/ro');

/**
 * the ie variable representing a valid I.E. for this state function and will be
 * pass if the function './src/ro.js' is correct as technical specification.
 * It will fail if the functions is wrong or the ie number is incompatible with state
 */
let ie = '5833583880755-9';

describe(`Checking the I.E. number '${ie}'...`, () => {
    it('ro', () => {
        assert.equal(ro(ie), ie,
            `Sorry... the I.E. number '${ie}' for the 'RO' state is not valid! :(`);
    });
});