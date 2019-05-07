/*******************************************************************************
 * AL - IE validator specification test file for UF state
 * *****************************************************************************
 * technical specification: ??
 * example: '??'
 ******************************************************************************/

let assert = require('assert');
let al = require('../src/al');

/**
 * the ie variable representing a valid I.E. for this state function and will be
 * pass if the function './src/uf.js' is correct as technical specification.
 * It will fail if the functions is wrong or the ie number is incompatible with state
 */
let ie = '240000048';

describe(`Checking the I.E. number '${ie}'...`, () => {
  it('al', () => {
    assert.equal(al(ie), ie,
        `Sorry... the I.E. number '${ie}' for the 'AL' state is not valid! :(`);
  });
});