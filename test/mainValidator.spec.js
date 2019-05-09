/*******************************************************************************
 * Main Validator - IE validator specification test file for All states
 * *****************************************************************************
 * technical specification: http://www.sintegra.gov.br/Cad_Estados/.html
 ******************************************************************************/

let assert = require('assert');
let main = require('../src/mainValidator');

/**
 * the ie variable representing a valid I.E. for this state
 * the uf variable representing a valid state for IE informed.
 *It will fail if the state is wrong or the ie number is incompatible with state
 */

let ie = '814.338.646.267';
let uf = 'sp'

describe(`Checking the I.E. number: '${ie}' to state of: '${uf}'`, () => {
    it('main', () => {
        assert.equal(main(ie, uf), ie,
            `Sorry... the I.E. number '${ie}' for the '${uf}' state is not valid! :(`);
    });
});