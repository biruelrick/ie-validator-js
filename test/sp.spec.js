/*******************************************************************************
 * SP - IE validator specification test file for São Paulo state
 * *****************************************************************************
 * technical specification: http://www.sintegra.gov.br/Cad_Estados/cad_SP.html
 * example: '4273951-0'
 ******************************************************************************/

let assert = require('assert');
let sp = require('../src/sp');

/**
 * the ie variable representing a valid I.E. for this state function and will be
 * pass if the function './src/ac.js' is correct as technical specification.
 * It will fail if the functions is wrong or the ie number is incompatible with state
 */
//let ie = '110.042.490.114';
//let pd = false;
 let ie = 'P-01100424.3/002';
 let pd = true;


describe(`Checking the I.E. number '${ie}'...`, () => {
  it('sp', () => {
    assert.equal(sp(ie,pd), ie,
        `Sorry... the I.E. number '${ie}' for the 'SP' state is not valid! :(`);
  });
});