/*******************************************************************************
 * CE - IE validator specification test file for Ceará state
 * *****************************************************************************
 * technical specification: http://www.sintegra.gov.br/Cad_Estados/cad_CE.html
 * example: '06000001-5'
 ******************************************************************************/

let assert = require('assert');
let ce = require('../src/ce');

/**
 * the ie variable representing a valid I.E. for this state function and will be
 * pass if the function './src/ac.js' is correct as technical specification.
 * It will fail if the functions is wrong or the ie number is incompatible with state
 */
let ie = '06000001-5';

describe(`Checking the I.E. number '${ie}'...`, () => {
  it('ce', () => {
    assert.equal(ce(ie), ie,
        `Sorry... the I.E. number '${ie}' for the 'CE' state is not valid! :(`);
  });
});