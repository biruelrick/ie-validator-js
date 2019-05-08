/*******************************************************************************
 * AP - IE validator specification test file for UF state
 * *****************************************************************************
 * technical specification: ??
 * example: '??'
 ******************************************************************************/

let assert = require('assert');
let ap = require('../src/ap');

/**
 * the ie variable representing a valid I.E. for this state function and will be
 * pass if the function './src/uf.js' is correct as technical specification.
 * It will fail if the functions is wrong or the ie number is incompatible with state
 */
let ie = '030123459';

describe(`Checking the I.E. number '${ie}'...`, () => {
  it('ap', () => {
    assert.equal(ap(ie), ie,
        `Sorry... the I.E. number '${ie}' for the 'AP' state is not valid! :(`);
  });
});