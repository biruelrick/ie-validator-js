/*******************************************************************************
 * MS - IE validator specification test file for Mato GRosso do  state
 * *****************************************************************************
 * technical specification: http://www.sintegra.gov.br/Cad_Estados/cad_AC.html
 * example: '01.004.823/001-12'
 ******************************************************************************/

let assert = require('assert');
let ms = require('../src/ms');

/**
 * the ie variable representing a valid I.E. for this state function and will be
 * pass if the function './src/ac.js' is correct as technical specification.
 * It will fail if the functions is wrong or the ie number is incompatible with state
 */
let ie = '28996863-1';

describe(`Checking the I.E. number '${ie}'...`, () => {
    it('ms', () => {
        assert.equal(ms(ie), ie,
            `Sorry... the I.E. number '${ie}' for the 'MS' state is not valid! :(`);
    });
});