/*******************************************************************************
 * MT - IE validator specification test file for Mato GRosso do  state
 * *****************************************************************************
 * technical specification: http://www.sintegra.gov.br/Cad_Estados/cad_AT.html
 * example: '8318259656-0'
 ******************************************************************************/

let assert = require('assert');
let mt = require('../src/mt');

/**
 * the ie variable representing a valid I.E. for this state function and will be
 * pass if the function './src/mt.js' is correct as technical specification.
 * It will fail if the functions is wrong or the ie number is incompatible with state
 */
let ie = '8318259656-0';

describe(`Checking the I.E. number '${ie}'...`, () => {
    it('mt', () => {
        assert.equal(mt(ie), ie,
            `Sorry... the I.E. number '${ie}' for the 'MT' state is not valid! :(`);
    });
});