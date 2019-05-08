/*******************************************************************************
 * RS - IE validator specification test file for Rio Grande do Sul state
 * *****************************************************************************
 * technical specification: http://www.sintegra.gov.br/Cad_Estados/cad_RS.html
 * example: '224/3658792'
 ******************************************************************************/

let assert = require('assert');
let rs = require('../src/rs');

/**
 * the ie variable representing a valid I.E. for this state function and will be
 * pass if the function './src/ac.js' is correct as technical specification.
 * It will fail if the functions is wrong or the ie number is incompatible with state
 */
let ie = '224/3658792';

describe(`Checking the I.E. number '${ie}'...`, () => {
  it('rs', () => {
    assert.equal(rs(ie), ie,
        `Sorry... the I.E. number '${ie}' for the 'RS' state is not valid! :(`);
  });
});