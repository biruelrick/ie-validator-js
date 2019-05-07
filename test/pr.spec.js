/*******************************************************************************
 * PR - IE validator specification test file for Paraná state
 * *****************************************************************************
 * technical specification: http://www.sintegra.gov.br/Cad_Estados/cad_PR.html
 * example: '123.45678-50'
 ******************************************************************************/

let assert = require('assert');
let pr = require('../src/pr');

/**
 * the ie variable representing a valid I.E. for this state function and will be
 * pass if the function './src/pr.js' is correct as technical specification.
 * It will fail if the functions is wrong or the ie number is incompatible with state
 */
let ie = '123.45678-50';

describe(`Checking the I.E. number '${ie}'...`, () => {
    it('pr', () => {
        assert.equal(pr(ie), ie,
            `Sorry... the I.E. number '${ie}' for the 'AM' state is not valid! :(`);
    });
});