/*******************************************************************************
 * PI - IE validator specification test file for Piauí state
 * *****************************************************************************
 * technical specification: http://www.sintegra.gov.br/Cad_Estados/cad_PI.html
 * example: '012345679'
 ******************************************************************************/

let assert = require('assert');
let pi = require('../src/pi');

/**
 * the ie variable representing a valid I.E. for this state function and will be
 * pass if the function './src/ac.js' is correct as technical specification.
 * It will fail if the functions is wrong or the ie number is incompatible with state
 */
let ie = '012345460';


describe(`Checking the I.E. number '${ie}'...`, () => {
  it('pi', () => {
    assert.equal(pi(ie), ie,
        `Sorry... the I.E. number '${ie}' for the 'PI' state is not valid! :(`);
  });
});