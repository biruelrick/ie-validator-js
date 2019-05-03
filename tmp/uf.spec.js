let assert = require('assert');
let ufFn = require('../src/uf');

let ie = '01.004.823/001-12';

describe(`Checking the I.E. number '${ie}'...`, () => {
  it('ac', () => {
    assert.equal(ufFn(ie), ie,
        `Sorry... the I.E. number '${ie}' for the 'UF' state is not valid! :(`);
  });
});
