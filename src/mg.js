/************************************************
 * AC - IE validator for Acre state
 ************************************************/

let h = require('../util/helper');

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
  if (typeof ie !== 'string') ie = ie.toString();

  

  if (!ie) return false;
  let temp = h.returnOnlyNumbers(ie)

  if (temp.length !== 13) return false;
  
    
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
  let weights = [1,2,1,2,1,2,1,2,1,2,1,2];
  let weights2 = [3,2,11,10,9,8,7,6,5,4,3,2];
  let base = '';
  let base2 = 0;
  let soma = 0;
  let block = (ie.toString().substring(0, ie.length - 2)).split('');
  block.splice(3,0,'0');

  let digito1 = ie.substring(ie.length - 2, ie.length - 1);
  let digito2 = ie.substring(ie.length - 1);

  if (block.length !== weights.length){
    return false;
  } 
  
  for (let i = 0; i < block.length; i++){
    base += (weights[i] * block[i]).toString();
  } 
  for (let char of base){
    soma += parseInt(char) ;
  } 
  
  if ((Math.ceil(soma/10)*10) - soma != digito1) return false;
  
  block.splice(3,1);

  block.push(digito1)

  for (let i = 0; i < block.length; i++){
    base2 += weights2[i] * block[i];
  }
  if (digito2 == 0){
    if(base2%11 == 0 || base2%11 == 1){
      block.push(digito2)
      let i = block.join().replace(/,/g, '');
      return h.mask(i, '###.###.###/####');
    }
    else{
      return false;
    }
  }

  if((11-(base2%11)) != digito2)   return false;
  
  
  let i = block.join().replace(/,/g, '');
  return h.mask(i, '###.###.###/####');
}

module.exports = validate;