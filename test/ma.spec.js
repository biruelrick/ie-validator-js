/*******************************************************************************
 * MA - IE validator specification test file for Maranhão state
 * *****************************************************************************
 * technical specification: http://www.sintegra.gov.br/Cad_Estados/cad_MA.html
 * example: '12000038-5'
 ******************************************************************************/

let assert = require('assert');
let ma = require('../src/ma');

/**
 * the ie variable representing a valid I.E. for this state function and will be
 * pass if the function './src/ma.js' is correct as technical specification.
 * It will fail if the functions is wrong or the ie number is incompatible with state
 */
let ie = '12000038-5';

describe(`Checking the I.E. number '${ie}'...`, () => {
    it('ma', () => {
        assert.equal(ma(ie), ie,
            `Sorry... the I.E. number '${ie}' for the 'MA' state is not valid! :(`);
    });
});