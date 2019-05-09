/*******************************************************************************
 * TO - IE validator specification test file for Tocantins tate
 * *****************************************************************************
 * technical specification: http://www.sintegra.gov.br/Cad_Estados/cad_TO.html
 * example: '9803619620-7'
 ******************************************************************************/

let assert = require('assert');
let to = require('../src/to');

/**
 * the ie variable representing a valid I.E. for this state function and will be
 * pass if the function './src/ac.js' is correct as technical specification.
 * It will fail if the functions is wrong or the ie number is incompatible with state
 */
let ie = '9803619620-7';

describe(`Checking the I.E. number '${ie}'...`, () => {
    it('to', () => {
        assert.equal(to(ie), ie,
            `Sorry... the I.E. number '${ie}' for the 'TO' state is not valid! :(`);
    });
});