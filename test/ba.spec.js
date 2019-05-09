/*******************************************************************************
 * BA - IE validator specification test file for Rio de Janeiro state
 * *****************************************************************************
 * technical specification: http://www.sintegra.gov.br/Cad_Estados/BA.html
 * example: '4273951-0'
 ******************************************************************************/

let assert = require('assert');
let ba = require('../src/ba');

/**
 * the ie variable representing a valid I.E. for this state function and will be
 * pass if the function './src/ac.js' is correct as technical specification.
 * It will fail if the functions is wrong or the ie number is incompatible with state
 */
let ie = '1000003-06';

describe(`Checking the I.E. number '${ie}'...`, () => {
  it('ba', () => {
    assert.equal(ba(ie), ie,
        `Sorry... the I.E. number '${ie}' for the 'BA' state is not valid! :(`);
  });
});