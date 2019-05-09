/*******************************************************************************
 * DF - IE validator specification test file for Tocantins tate
 * *****************************************************************************
 * technical specification: http://www.sintegra.gov.br/Cad_Estados/cad_DF.html
 * example: '07617403001-01'
 ******************************************************************************/

let assert = require('assert');
let df = require('../src/df');

/**
 * the ie variable representing a valid I.E. for this state function and will be
 * pass if the function './src/df.js' is correct as technical specification.
 * It will fail if the functions is wrong or the ie number is incompatible with state
 */
let ie = '07617403001-01';

describe(`Checking the I.E. number '${ie}'...`, () => {
    it('df', () => {
        assert.equal(df(ie), ie,
            `Sorry... the I.E. number '${ie}' for the 'DF' state is not valid! :(`);
    });
});