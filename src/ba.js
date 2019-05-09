/************************************************
 * AC - IE validator for Acre state
 ************************************************/

let h = require("../util/helper");

/**
 * @name validate
 * @description
 * Check if the ie (inscrição estadual) representing by state is a valid number
 * technical specification: http://www.sintegra.gov.br/Cad_Estados/cad_AC.html
 * example: '01.004.823/001-12'
 *
 * @param {string} ie string representing the brazilian state registration for companies
 *
 * @returns {boolean}
 */
function validate(ie) {
  if (!ie) return false;
  if (typeof ie !== "string") ie = ie.toString();

  let temp = ie.replace("-", "");
  if (!temp) return false;

  if (temp.length !== 9 && temp.length !== 8) return false;

  return weightCalculator(temp);
}

/**
 * @name weightCalculator
 * @description
 * Calculate the weight according the technical specification
 *
 * @param {string|Array} ie number registration
 * @param {string|number} [firstDigit] from base (first weightCalculation)
 */
function weightCalculator(ie) {
  let tamanho = ie.length == 9;
  let charinicial =
    ie.startsWith("6") || ie.startsWith("7") || ie.startsWith("9");
  let weights = [];
  let weights2 = [];
  let modulo = null;
  if (tamanho) {
    if (charinicial) {
      modulo = 11;
    } else {
      modulo = 10;
    }
    weights = [8, 7, 6, 5, 4, 3, 2];
    weights2 = [9, 8, 7, 6, 5, 4, 3, 2];
  } else {
    if (charinicial) {
      modulo = 11;
    } else {
      modulo = 10;
    }
    weights = [7, 6, 5, 4, 3, 2];
    weights2 = [8, 7, 6, 5, 4, 3, 2];
  }

  let base = 0;

  let block = ie
    .toString()
    .substring(0, ie.length - 2)
    .split("");
  let block2 = (
    ie.toString().substring(0, ie.length - 2) + ie.substring(ie.length - 1)
  ).split("");

  let digito1 = ie.substring(ie.length - 2, ie.length - 1);
  let digito2 = ie.substring(ie.length - 1);
  let i = null;
  if (block.length !== weights.length) {
    return false;
  }

  for (let i = 0; i < block.length; i++) {
    base += weights[i] * block[i];
  }

  if (digito2 == 0) {
    switch (base % modulo) {
      case 0:
        block.push(digito1);
        block.push(digito2);
        i = block.join().replace(/,/g, "");
        if (tamanho) return h.mask(i, "#######-##");
        else return h.mask(i, "######-##");
      case 1:
        block.push(digito1);
        block.push(digito2);
        i = block.join().replace(/,/g, "");
        if (tamanho) return h.mask(i, "#######-##");
        else return h.mask(i, "######-##");
    }
  }
  if (modulo - (base % modulo) != digito2) return false;

  base = 0;
  for (let i = 0; i < block2.length; i++) {
    base += weights2[i] * block2[i];
  }

  if (digito1 == 0 && tamanho) {
    switch (base % modulo) {
      case 0:
        block.push(digito1);
        block.push(digito2);
        i = block.join().replace(/,/g, "");
        if (tamanho) return h.mask(i, "#######-##");
        else return h.mask(i, "######-##");
      case 1:
        block.push(digito1);
        block.push(digito2);
        i = block.join().replace(/,/g, "");
        if (tamanho) return h.mask(i, "#######-##");
        else return h.mask(i, "######-##");
    }
  }

  if (modulo - (base % modulo) != digito1) return false;

  block.push(digito1);
  block.push(digito2);
  i = block.join().replace(/,/g, "");
  if (tamanho) return h.mask(i, "#######-##");
  else return h.mask(i, "######-##");
}

module.exports = validate;
