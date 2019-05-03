/**
 * @name returnOnlyNumbers
 * @description
 * Return only number from a string
 *
 * @param {string} value to be treated
 *
 * @return {string}
 */
function returnOnlyNumbers(value) {
  return value.replace(/\D/g, '');
}

/**
 * @name mask
 * @description
 * Format number or string with mask definition by sharp (#) character
 * ex: '19982320000', '(##) #####-####' = (19) 98232-0000
 *
 * @param {string} value with string or number to format
 * @param {string} mask definition using the # character
 * @param {function} [callback]
 */
function mask(value, mask, callback) {
  if (typeof value === 'undefined' || value === 'null' ||
      typeof mask === 'undefined' || mask === 'null') return value;

  if (mask.length === 0) return;

  let s = '';
  let char = 0;
  for (let i = 0; i < mask.length; i++) {

    if (mask.substr(i, 1) === '#') {
      s += value.substr(i - char, 1);
    } else {
      s += mask.substr(i, 1);
      char++;
    }
  }

  if ((mask.length - char) < value.length) {
    s += value.substr(mask.length - char, mask.length - char);
  }

  if (!callback) {
    return s;

  } else {
    callback(s);
  }
}

module.exports = {
  returnOnlyNumbers: returnOnlyNumbers,
  mask: mask,
};