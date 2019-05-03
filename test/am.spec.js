/*******************************************************************************
 * AM - IE validator specification test file for Amazonas state
 * *****************************************************************************
 * technical specification: http://www.sintegra.gov.br/Cad_Estados/cad_AM.html
 * example: '01.004.823/001-12'
 ******************************************************************************/

let assert = require('assert');
let am = require('../src/am');

/**
 * the ie variable representing a valid I.E. for this state function and will be
 * pass if the function './src/am.js' is correct as technical specification.
 * It will fail if the functions is wrong or the ie number is incompatible with state
 */
let ie = '94.873.340-3';

describe(`Checking the I.E. number '${ie}'...`, () => {
  it('am', () => {
    assert.equal(am(ie), ie,
        `Sorry... the I.E. number '${ie}' for the 'AM' state is not valid! :(`);
  });
});