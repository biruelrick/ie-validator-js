/*******************************************************************************
 * AC - IE validator specification test file for Acre state
 * *****************************************************************************
 * technical specification: http://www.sintegra.gov.br/Cad_Estados/cad_AC.html
 * example: '01.004.823/001-12'
 ******************************************************************************/

let assert = require('assert');
let se = require('../src/se');

/**
 * the ie variable representing a valid I.E. for this state function and will be
 * pass if the function './src/ac.js' is correct as technical specification.
 * It will fail if the functions is wrong or the ie number is incompatible with state
 */
let ie = '57414238-0';

describe(`Checking the I.E. number '${ie}'...`, () => {
    it('se', () => {
        assert.equal(se(ie), ie,
            `Sorry... the I.E. number '${ie}' for the 'SE' state is not valid! :(`);
    });
});