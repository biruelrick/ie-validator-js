/*******************************************************************************
 * ES - IE validator specification test file for Espírito Santo state
 * *****************************************************************************
 * technical specification: http://www.sintegra.gov.br/Cad_Estados/cad_ES.html
 * example: '06000001-5'
 ******************************************************************************/

let assert = require('assert');
let es = require('../src/es');

/**
 * the ie variable representing a valid I.E. for this state function and will be
 * pass if the function './src/ac.js' is correct as technical specification.
 * It will fail if the functions is wrong or the ie number is incompatible with state
 */
let ie = '29559964-0';

describe(`Checking the I.E. number '${ie}'...`, () => {
  it('es', () => {
    assert.equal(es(ie), ie,
        `Sorry... the I.E. number '${ie}' for the 'CE' state is not valid! :(`);
  });
});