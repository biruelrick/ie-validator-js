let h = require('../util/helper');


/*****************************************************
 * Main validator, which calls the other functions.
 *****************************************************/
function validateMain(ie, uf) {
    switch (uf) {
        case 'ac':
            return validateAC(ie, uf);
        case 'al':
            return validateAL(ie, uf);
        case 'ap':
            return validateAP(ie, uf);
        case 'am':
            return validateAM(ie, uf);
        case 'ba':
            return validateBA(ie, uf);
        case 'ce':
            return validateCE(ie, uf);
        case 'df':
            return validateDF(ie, uf);
        case 'es':
            return validateES(ie, uf);
        case 'go':
            return validateGO(ie, uf);
        case 'ma':
            return validateMA(ie, uf);
        case 'mt':
            return validateMT(ie, uf);
        case 'ms':
            return validateMS(ie, uf);
        case 'mg':
            return validateMG(ie, uf);
        case 'pa':
            return validatePA(ie, uf);
        case 'pb':
            return validatePB(ie, uf);
        case 'pr':
            return validatePR(ie, uf);
        case 'pe':
            return validatePE(ie, uf);
        case 'pi':
            return validatePI(ie, uf);
        case 'rj':
            return validateRJ(ie, uf);
        case 'rn':
            return validateRN(ie, uf);
        case 'rs':
            return validateRS(ie, uf);
        case 'ro':
            return validateRO(ie, uf);
        case 'rr':
            return validateRR(ie, uf);
        case 'sc':
            return validateSC(ie, uf);
        case 'se':
            return validateSE(ie, uf);
        case 'to':
            return validateTO(ie, uf);
        case 'sp':
            return validateSP(ie, uf);
        default:
            console.log('Estado inválido');
            return false;
    }
}

/*****************************************************
 * Acre IE Validator
 *****************************************************/
function validateAC(ie, uf) {
    if (!uf) return false;
    if (typeof ie !== 'string') ie = ie.toString();
    ie = h.returnOnlyNumbers(ie);

    if (!ie) return false;
    if (ie.length !== 13) return false;
    if (ie.slice(0, 2) !== '01') return false;

    return weightCalculatorAC(ie);
}

function weightCalculatorAC(ie, firstDigit) {
    let weights = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    let base = 0;
    let block = ie.substring(0, ie.length - 2).split('');

    if (typeof firstDigit === 'undefined') {
        weights.shift();
    } else {
        block.push(firstDigit);
    }

    if (block.length !== weights.length) return false;
    for (let i = 0; i < block.length; i++) base += weights[i] * block[i];

    let resto = base % 11;
    let dig = 11 - resto;

    if (dig == 10 || dig == 11) dig = 0;
    if (typeof firstDigit === 'undefined') return weightCalculatorAC(ie, dig);

    block.push((dig).toString());
    let i = block.join().replace(/,/g, '');
    return h.mask(i, '##.###.###/###-##');
}

/*****************************************************
 * Alagoas IE Validator
 *****************************************************/
function validateAL(ie, uf) {
    if (!uf) return false;
    if (typeof ie !== 'string') ie = ie.toString();
    ie = h.returnOnlyNumbers(ie);

    if (!ie) return false;
    if (ie.length !== 9) return false;
    if (ie.slice(0, 2) !== '24') return false;

    return weightCalculatorAL(ie);
}

function weightCalculatorAL(ie) {
    let weights = [9, 8, 7, 6, 5, 4, 3, 2];
    let base = 0;
    let block = ie.substring(0, ie.length - 1).split('');

    if (block.length !== weights.length) return false;

    for (let i = 0; i < block.length; i++) {
        base += weights[i] * block[i];
    }

    let a = base * 10;
    let b = a / 11;
    let c = Math.floor(b);
    let d = c * 11;
    let e = a - d;

    let f = block.join().replace(/,/g, '');

    if (e === 10) {
        return f + 0;
    } else {
        return f + e;
    }
}

/*****************************************************
 * Amapá IE Validator
 *****************************************************/
function validateAP(ie, uf) {
    if (!uf) return false;
    if (typeof ie !== 'string') ie = ie.toString();
    ie = h.returnOnlyNumbers(ie);

    if (!ie) return false;
    if (ie.length !== 9) return false;
    if (ie.slice(0, 2) !== '03') return false;

    return weightCalculatorAP(ie)
}

function weightCalculatorAP(ie) {
    let weights = [9, 8, 7, 6, 5, 4, 3, 2];
    let base = 0;
    let block = ie.substring(0, ie.length - 1).split('');
    let part1 = ie.substring(0, ie.length - 1)
    if (block.length !== weights.length) return false;

    let parameters = check_IE(part1)

    for (let i = 0; i < block.length; i++) {
        base += weights[i] * block[i];
    }

    let a = base + parameters.p
    let b = a / 11;
    let c = b.toFixed(2);
    let d = c.toString().slice(-2);
    let e = d / 10;
    let f = Math.ceil(e).toString().charAt(0);;
    let g = 11 - f
    let j = block.join().replace(/,/g, '');

    if (g === 10) {
        return j + 0
    } else if (g === 11) {
        return j + part1.d
    } else {
        return j + g
    }


}

function check_IE(ie) {
    let p;
    let d;
    ie = Number(ie)

    if (ie >= 3000001 && ie <= 3017000) {
        p = 5;
        d = 0;

    } else if (ie >= 3017001 && ie <= 3019022) {
        p = 9;
        d = 1;

    } else {
        p = 0;
        d = 0;
    }
    return {
        p: p,
        d: d
    }
}

/*****************************************************
 * Amazonas IE Validator
 *****************************************************/
function validateAM(ie, uf) {
    if (!uf) return false;
    if (uf !== 'am') return false;
    if (!ie) return false;
    if (typeof ie !== 'string') ie = ie.toString();

    ie = h.returnOnlyNumbers(ie);
    if (!ie) return false;
    if (ie.length !== 9) return false;
    return weightCalculatorAM(ie);
}

function weightCalculatorAM(ie) {
    let weights = [9, 8, 7, 6, 5, 4, 3, 2];
    let base = 0;
    let block = ie.substring(0, ie.length - 1).split('');

    //if(block.lenght !== weights.length) return false;
    for (let i = 0; i < block.length; i++) {
        base += weights[i] * block[i];
    }
    if (base < 11) {
        let dig = 11 - base;
    } else {
        let quo = base % 11;

        if (quo <= 1) {
            dig = 0;
        } else {
            dig = 11 - quo;

        }
    }

    block.push((dig).toString());
    let i = block.join().replace(/,/g, '');
    return h.mask(i, '##.###.###-#')
}

/*****************************************************
 * Bahia IE Validator
 *****************************************************/
function validateBA(ie, uf) {
    if (!uf) return false;
    if (uf !== 'ba') return false;
    if (typeof ie !== 'string') ie = ie.toString();

    let temp = ie.replace('-', '');
    if (!temp) return false;

    if ((temp.length !== 9) && (temp.length !== 8)) return false;


    return weightCalculatorBA(temp);
}


function weightCalculatorBA(ie) {
    let tamanho = (ie.length == 9)
    let charinicial = ie.startsWith('6') || ie.startsWith('7') || ie.startsWith('9')
    let weights = []
    let weights2 = []
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

    let block = (ie.toString().substring(0, ie.length - 2)).split('');
    let block2 = ((ie.toString().substring(0, ie.length - 2)) + ie.substring(ie.length - 1)).split('');

    let digito1 = ie.substring(ie.length - 2, ie.length - 1);
    let digito2 = ie.substring(ie.length - 1);
    let i = null
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
                block.push(digito2)
                i = block.join().replace(/,/g, '');
                if (tamanho) return h.mask(i, '#######-##');
                else return h.mask(i, '######-##');
            case 1:
                block.push(digito1);
                block.push(digito2)
                i = block.join().replace(/,/g, '');
                if (tamanho) return h.mask(i, '#######-##');
                else return h.mask(i, '######-##');
        }
    }
    if (modulo - (base % modulo) != digito2) return false;

    base = 0
    for (let i = 0; i < block2.length; i++) {
        base += weights2[i] * block2[i];
    }

    if (digito1 == 0 && tamanho) {
        switch (base % modulo) {
            case 0:
                block.push(digito1);
                block.push(digito2)
                i = block.join().replace(/,/g, '');
                if (tamanho) return h.mask(i, '#######-##');
                else return h.mask(i, '######-##');
            case 1:
                block.push(digito1);
                block.push(digito2)
                i = block.join().replace(/,/g, '');
                if (tamanho) return h.mask(i, '#######-##');
                else return h.mask(i, '######-##');
        }
    }

    if (modulo - (base % modulo) != digito1) return false;

    block.push(digito1);
    block.push(digito2)
    i = block.join().replace(/,/g, '');
    if (tamanho) return h.mask(i, '#######-##');
    else return h.mask(i, '######-##');

}

/*****************************************************
 * Ceará IE Validator
 *****************************************************/
function validateCE(ie, uf) {
    if (!uf) return false;
    if (uf !== 'ce') return false;
    if (!ie) return false;
    if (typeof ie !== 'string') ie = ie.toString();
    ie = h.returnOnlyNumbers(ie);
    if (ie.length !== 9) return false;
    return weightCalculatorCE(ie);
}

function weightCalculatorCE(ie) {
    let weights = [9, 8, 7, 6, 5, 4, 3, 2];
    let base = 0;
    let block = ie.substring(0, ie.length - 1).split('');

    for (let i = 0; i < block.length; i++) {
        base += weights[i] * block[i];
    }

    let resto = base % 11;
    dig = 11 - resto;
    if (dig == 10 || dig == 11) dig = 0;

    block.push((dig).toString());
    let i = block.join().replace(/,/g, '');
    return h.mask(i, '########-#');
}

/*****************************************************
 * Distrito Federal IE Validator
 *****************************************************/
function validateDF(ie, uf) {
    if (!uf) return false;
    if (uf !== 'df') return false;
    if (typeof ie !== 'string') ie = ie.toString();

    ie = h.returnOnlyNumbers(ie);

    if (!ie) return false;
    if (ie.length !== 13) return false;
    if (ie.slice(0, 2) !== '07') return false;

    return weightCalculatorDF(ie);
}

function weightCalculatorDF(ie, firstDigit) {
    let weights = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    let base = 0;
    let block = ie.substring(0, ie.length - 2).split('');

    if (typeof firstDigit === 'undefined') {
        weights.shift();
    } else {
        block.push(firstDigit);
    }

    if (block.length !== weights.length) return false;
    for (let i = 0; i < block.length; i++) base += weights[i] * block[i];

    let resto = base % 11;
    let dig = 0;
    dig = 11 - resto;

    if (dig == 10 || dig == 11) dig = 0;
    if (typeof firstDigit === 'undefined') return weightCalculatorDF(ie, dig);

    block.push((dig).toString());
    let i = block.join().replace(/,/g, '');
    return h.mask(i, '###########-##');
}

/*****************************************************
 * Espírito Santo IE Validator
 *****************************************************/
function validateES(ie, uf) {
    if (!uf) return false;
    if (uf !== 'es') return false;
    if (typeof ie !== "string") ie = ie.toString();
    ie = h.returnOnlyNumbers(ie);
    if (!ie) return false;
    if (ie.length !== 9) return false;

    return weightCalculatorES(ie);
}

function weightCalculatorES(ie) {
    let weights = [9, 8, 7, 6, 5, 4, 3, 2];
    let base = 0;
    let block = ie.substring(0, ie.length - 1).split('');
    let digito = 0;

    if (block.length !== weights.length) {
        return false;
    }

    for (let i = 0; i < block.length; i++) {
        base += weights[i] * block[i];
    }

    let resto = base % 11;
    let dig = 0;
    if (resto < 2) {
        dig = 0;
    } else {
        dig = 11 - resto;
    }

    block.push((dig).toString());

    let i = block.join().replace(/,/g, '');
    return h.mask(i, "########-#");
}

/*****************************************************
 * Goiás IE Validator
 *****************************************************/
function validateGO(ie, uf) {
    if (!uf) return false;
    if (uf !== 'go') return false;
    if (!ie) return false;
    if (typeof ie !== 'string') ie = ie.toString();

    ie = h.returnOnlyNumbers(ie);
    if (ie.length !== 9) return false;
    if ((ie.slice(0, 2) !== '10') && (ie.slice(0, 2) !== '11') && (ie.slice(0, 2) !== '15')) return false;

    return weightCalculatorGO(ie);
}

function weightCalculatorGO(ie) {
    let weights = [9, 8, 7, 6, 5, 4, 3, 2];
    let base = 0;
    let block = ie.substring(0, ie.length - 1).split('');
    for (let i = 0; i < block.length; i++) {
        base += weights[i] * block[i];
    }

    let maiorDiv = base / 11;
    let maior = Math.floor(maiorDiv);
    let resto = base % 11;

    let dig = null;

    if ((block == 11094402) && (resto == 0)) dig = 0;
    if ((block == 11094402) && (resto == 1)) dig = 1;
    if (resto == 0) dig = 0;
    if ((resto == 1) && (block >= 10103105) && (block <= 10119997)) dig = 1;
    if ((resto == 1) && (10103105 > block) && (block > 10119997)) dig = 1;
    if ((resto != 1) && (resto != 0)) dig = 11 - resto;

    block.push((dig).toString());

    let i = block.join().replace(/,/g, '');
    return h.mask(i, '##.###.###-#');
}

/*****************************************************
 * Maranhão IE Validator
 *****************************************************/
function validateMA(ie, uf) {
    if (!uf) return false;
    if (uf !== 'ma') return false;
    if (!ie) return false;
    if (typeof ie !== 'string') ie = ie.toString();
    ie = h.returnOnlyNumbers(ie);

    if (ie.length !== 9) return false;
    if (ie.slice(0, 2) !== '12') return false;

    return weightCalculatorMA(ie);
}

function weightCalculatorMA(ie) {
    let weights = [9, 8, 7, 6, 5, 4, 3, 2];
    let base = 0;
    let block = ie.substring(0, ie.length - 1).split('');

    if (block.length !== weights.length) return false;
    for (let i = 0; i < block.length; i++) {
        base += weights[i] * block[i];
    }

    let maior = Math.floor(base / 11);
    let resto = base % 11;

    if ((resto == 1) || (resto == 0)) {
        dig = 0;
    } else {
        dig = 11 - resto;
    }

    block.push((dig).toString());
    let i = block.join().replace(/,/g, '');
    return h.mask(i, '########-#');
}

/*****************************************************
 * Mato Grosso IE Validator
 *****************************************************/
function validateMT(ie, uf) {
    if (!uf) return false;
    if (uf !== 'mt') return false;
    if (!ie) return false;
    if (typeof ie !== 'string') ie = ie.toString();

    ie = h.returnOnlyNumbers(ie);
    if (ie.length !== 11) return false;

    return weightCalculatorMT(ie);
}

function weightCalculatorMT(ie) {
    let weights = [3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    let base = 0;
    let block = ie.substring(0, ie.length - 1).split('');

    if (block.length !== weights.length) return false;
    for (let i = 0; i < block.length; i++) {
        base += weights[i] * block[i];
    }

    let resto = base % 11;
    let dig = 0

    if (resto == 0 || resto == 1) {
        dig = 0;
    } else {
        dig = 11 - resto;
    }

    block.push((dig).toString());
    let i = block.join().replace(/,/g, '');
    return h.mask(i, '##########-#');
}

/*****************************************************
 * Mato Grosso do Sul IE Validator
 *****************************************************/
function validateMS(ie, uf) {
    if (!uf) return false;
    if (uf !== 'ms') return false;
    if (!ie) return false;
    if (typeof ie !== 'string') ie = ie.toString();

    ie = h.returnOnlyNumbers(ie);
    if (ie.length !== 9) return false;
    if (ie.slice(0, 2) !== '28') return false;

    return weightCalculator(ie);
}

function weightCalculator(ie) {
    let weights = [9, 8, 7, 6, 5, 4, 3, 2];
    let base = 0;
    let block = ie.substring(0, ie.length - 1).split('');

    if (block.length !== weights.length) return false;
    for (let i = 0; i < block.length; i++) {
        base += weights[i] * block[i];
    }

    let resto = base % 11;
    let dig = 0;
    let t = 0;

    if (resto == 0) dig = 0;

    if (resto > 0) t = 11 - resto;
    if (t > 9) dig = 0;
    if (t < 10) dig = t;

    block.push((dig).toString());
    let i = block.join().replace(/,/g, '');
    return h.mask(i, '########-#');
}

/*****************************************************
 * Minas Gerais IE Validator
 *****************************************************/
function validateMG(ie, uf) {
    if (!uf) return false;
    if (uf !== 'mg') return false;
    if (typeof ie !== "string") ie = ie.toString();

    if (!ie) return false;
    let temp = h.returnOnlyNumbers(ie);

    if (temp.length !== 13) return false;

    return weightCalculatorMG(temp);
}

function weightCalculatorMG(ie) {
    let weights = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2];
    let weights2 = [3, 2, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
    let base = "";
    let base2 = 0;
    let soma = 0;
    let block = ie
        .toString()
        .substring(0, ie.length - 2)
        .split("");
    block.splice(3, 0, "0");

    let digito1 = ie.substring(ie.length - 2, ie.length - 1);
    let digito2 = ie.substring(ie.length - 1);

    if (block.length !== weights.length) {
        return false;
    }

    for (let i = 0; i < block.length; i++) {
        base += (weights[i] * block[i]).toString();
    }
    for (let char of base) {
        soma += parseInt(char);
    }

    if (Math.ceil(soma / 10) * 10 - soma != digito1) return false;

    block.splice(3, 1);

    block.push(digito1);

    for (let i = 0; i < block.length; i++) {
        base2 += weights2[i] * block[i];
    }
    if (digito2 == 0) {
        if (base2 % 11 == 0 || base2 % 11 == 1) {
            block.push(digito2);
            let i = block.join().replace(/,/g, "");
            return h.mask(i, "###.###.###/####");
        } else {
            return false;
        }
    }


    if (11 - (base2 % 11) != digito2) return false;
    block.push(digito2);
    let i = block.join().replace(/,/g, "");
    return h.mask(i, "###.###.###/####");
}

/*****************************************************
 * Pará IE Validator
 *****************************************************/
function validatePA(ie, uf) {
    if (!uf) return false;
    if (uf !== 'pa') return false;
    if (!ie) return false;
    if (typeof ie !== 'string') ie = ie.toString();
    ie = h.returnOnlyNumbers(ie);
    if (ie.length !== 9) return false;
    if (ie.slice(0, 2) !== '15') return false;

    return weightCalculatorPA(ie);
}

function weightCalculatorPA(ie) {
    let weight = [9, 8, 7, 6, 5, 4, 3, 2];
    let base = 0;
    let block = ie.substring(0, ie.length - 1).split('');

    if (block.length !== weight.length) return false;
    for (let i = 0; i < block.length; i++) {
        base += weight[i] * block[i];
    }

    let resto = base % 11;

    if (resto <= 1) {
        dig = 0;
    } else {
        dig = 11 - resto;
    }

    block.push((dig).toString());
    let i = block.join().replace(/,/g, '');
    return h.mask(i, '##-######-##');
}

/*****************************************************
 * Paraíba IE Validator
 *****************************************************/
function validatePB(ie, uf) {
    if (!uf) return false;
    if (uf !== 'pb') return false;
    if (!ie) return false;
    if (typeof ie !== 'string') ie = ie.toString();
    ie = h.returnOnlyNumbers(ie);
    if (ie.length !== 9) return false;
    return weightCalculatorPB(ie);
}

function weightCalculatorPB(ie) {
    let weights = [9, 8, 7, 6, 5, 4, 3, 2];
    let base = 0;
    let block = (ie.substring(0, ie.length - 1).split(''));
    let digito = 0;

    if (block.length !== weights.length) {
        return false;
    }

    for (let i = 0; i < block.length; i++) {
        base += weights[i] * block[i];
    }
    let resto = base % 11;
    if (resto == 10 || resto == 11) {
        digito = 0;
    } else {
        digito = 11 - resto;
    }

    block.push((digito).toString());

    let i = block.join().replace(/,/g, '');
    return h.mask(i, '########-#');
}

/*****************************************************
 * Paraná IE Validator
 *****************************************************/
function validatePR(ie, uf) {
    if (!uf) return false;
    if (uf !== 'pr') return false;
    if (!ie) return false;
    if (typeof ie !== 'string') ie = ie.toString();

    ie = h.returnOnlyNumbers(ie);

    if (!ie) return false;
    if (ie.length !== 10) return false;

    return weightCalculatorPR(ie);
}

function weightCalculatorPR(ie, firstDigit) {
    let weights = [4, 3, 2, 7, 6, 5, 4, 3, 2];
    let base = 0;
    let block = ie.substring(0, ie.length - 2).split('');

    if (typeof firstDigit === 'undefined') {
        weights.shift();
    } else {
        block.push(firstDigit);
    }

    if (block.length !== weights.length) return false;
    for (let i = 0; i < block.length; i++) {
        base += block[i] * weights[i];
    }

    let div = base / 11; //12.54
    let maior = Math.floor(div); //12
    let resto = base % 11; //6
    let dig = undefined;

    if (resto <= 1) {
        dig = 0;
    } else {
        dig = 11 - resto;
    }

    if (typeof firstDigit === 'undefined') return weightCalculatorPR(ie, dig);

    block.push((dig).toString());

    let i = block.join().replace(/,/g, '');
    return h.mask(i, '###.#####-##');
}

/*****************************************************
 * Pernambuco IE Validator
 *****************************************************/
function validatePE(ie, uf) {
    if (!uf) return false;
    if (uf !== 'pe');
    if (!ie) return false;
    if (typeof ie != 'string') ie = ie.toString();

    ie = h.returnOnlyNumbers(ie);

    if (ie.length !== 9) return false;
    return weightCalculatorPE(ie);
}

function weightCalculatorPE(ie, firstDigit) {
    let weights = [9, 8, 7, 6, 5, 4, 3, 2];
    let base = 0;
    let block = ie.substring(0, ie.length - 2).split('');

    if (typeof firstDigit === 'undefined') {
        weights.shift();
    } else {
        block.push(firstDigit);
    }


    if (block.length !== weights.length) return false;
    for (let i = 0; i < block.length; i++) {
        base += weights[i] * block[i]
    }

    maior = Math.floor((base / 11));
    resto = base % 11;

    if ((resto == 1) || (resto == 0)) {
        dig = 0;
    } else {
        dig = 11 - resto;
    }

    if (!firstDigit) return weightCalculatorPE(ie, dig);

    block.push((dig).toString());

    let i = block.join().replace(/,/g, '');
    return h.mask(i, '#######-##');
}

/*****************************************************
 * Piauí IE Validator
 *****************************************************/
function validatePI(ie, uf) {
    if (!uf) return false;
    if (uf !== 'pi') return false;
    if (!ie) return false;
    if (typeof ie !== "string") ie = ie.toString();
    ie = h.returnOnlyNumbers(ie);

    if (ie.length !== 9) return false;

    return weightCalculatorPI(ie);
}

function weightCalculatorPI(ie) {
    let weights = [9, 8, 7, 6, 5, 4, 3, 2];
    let base = 0;
    let block = ie.substring(0, ie.length - 1).split('');
    let digito = 0;

    if (block.length !== weights.length) {
        return false;
    }

    for (let i = 0; i < block.length; i++) {
        base += weights[i] * block[i];
    }

    let resto = base % 11;
    if ((11 - resto) == 10 || (11 - resto) == 11) {
        digito = 0;
    } else {
        digito = 11 - resto;
    }

    block.push((digito).toString());
    let i = block.join().replace(/,/g, '');
    return h.mask(i, "########-#");
}

/*****************************************************
 * Rio de Janeiro IE Validator
 *****************************************************/
function validateRJ(ie, uf) {
    if (!uf) return false;
    if (uf !== 'rj') return false;
    if (!ie) return false;
    ie = h.returnOnlyNumbers(ie);
    if (typeof ie !== 'string') ie = ie.toString();
    if (ie.length !== 8) return false;
    return weightCalculatorRJ(ie);
}

function weightCalculatorRJ(ie) {
    let weights = [2, 7, 6, 5, 4, 3, 2];
    let base = 0;
    let block = ie.substring(0, ie.length - 1).split('');
    let digito = 0;

    if (block.length !== weights.length) {
        return false;
    }

    for (let i = 0; i < block.length; i++) {
        base += weights[i] * block[i];
    }

    let resto = base % 11;
    if (resto <= 1) {
        digito = 0
    } else {
        digito = 11 - resto;
    }

    block.push((digito).toString());

    let i = block.join().replace(/,/g, '');
    return h.mask(i, '##.###.##-#');
}

/*****************************************************
 * Rio Grande do Norte IE Validator
 *****************************************************/
function validateRN(ie, uf) {
    if (!uf) return false;
    if (uf !== 'rn') return false;
    if (!ie) return false;
    if (typeof ie !== "string") ie = ie.toString();
    ie = h.returnOnlyNumbers(ie);

    if (ie.length !== 9 && ie.length !== 10) return false;

    if (ie.slice(0, 2) !== "20") return false;

    return weightCalculatorRN(ie);
}

function weightCalculatorRN(ie) {
    let weights = [10, 9, 8, 7, 6, 5, 4, 3, 2];
    let base = 0;
    let block = ie.substring(0, ie.length - 1).split('');

    if (ie.length === 9) weights.shift();
    if (block.length !== weights.length) return false;

    for (let i = 0; i < block.length; i++) {
        base += weights[i] * block[i];
    }

    let dig = 0;
    base = base * 10;
    let resto = base % 11;
    dig = resto;

    if (resto == 10) dig = 0;

    block.push(dig.toString());

    let i = block.join().replace(/,/g, "");

    if (ie.length === 9) {
        return h.mask(i, "##.###.###-#");
    } else {
        if (ie.length === 10) return h.mask(i, "##.#.###.###-#");
    }
}

/*****************************************************
 * Rio Grande do Sul IE Validator
 *****************************************************/
function validateRS(ie, uf) {
    if (!uf) return false;
    if (uf !== 'rs') return false;
    if (typeof ie !== "string") ie = ie.toString();
    if (!ie) return false;
    if (ie.length !== 11) return false;
    return weightCalculatorRS(ie);
}

function weightCalculatorRS(ie) {
    let weights = [2, 9, 8, 7, 6, 5, 4, 3, 2];
    let base = 0;
    let block = ie
        .toString()
        .replace("/", "")
        .substring(0, ie.length - 2)
        .split("");

    let digito = ie.substring(ie.length - 1);

    if (block.length !== weights.length) {
        return false;
    }

    for (let i = 0; i < block.length; i++) {
        base += weights[i] * block[i];
    }

    if (11 - (base % 11) != digito) {
        return false;
    }

    block.push(digito);

    let i = block.join().replace(/,/g, "");

    return h.mask(i, "###/#######");
}

/*****************************************************
 * Rondônia IE Validator
 *****************************************************/
function validateRO(ie, uf) {
    if (!uf) return false;
    if (uf !== 'ro') return false;
    if (!ie) return false;
    if (typeof ie !== 'string') ie = ie.toString();
    ie = h.returnOnlyNumbers(ie);
    if (ie.length !== 14) return false;
    return weightCalculatorRO(ie);
}

function weightCalculatorRO(ie) {
    let weights = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    let base = 0;
    let block = ie.substring(0, ie.length - 1).split('');

    if (block.length !== weights.length) return false;
    for (let i = 0; i < block.length; i++) base += weights[i] * block[i];

    resto = base % 11;
    dig = 11 - resto;

    if (dig == 10 || dig == 11) {
        dig -= 10;
    }

    block.push((dig).toString());
    let i = block.join().replace(/,/g, '');

    return h.mask(i, '#############-#');
}

/*****************************************************
 * Roraima IE Validator
 *****************************************************/
function validateRR(ie, uf) {
    if (!uf) return false;
    if (uf !== 'rr') return false;
    if (!ie) return false;
    if (typeof ie !== 'string') ie = ie.toString();
    ie = h.returnOnlyNumbers(ie);
    if (ie.length !== 9) return false;
    if (ie.slice(0, 2) !== '24') return false;

    return weightCalculatorRR(ie);
}

function weightCalculatorRR(ie) {
    let weights = [1, 2, 3, 4, 5, 6, 7, 8];
    let base = 0;
    let block = ie.substring(0, ie.length - 1).split('');

    if (block.length !== weights.length) return false;
    for (let i = 0; i < weights.length; i++) {
        base += weights[i] * block[i];
    }

    let dig = (resto = base % 9);

    block.push((dig).toString());
    let i = block.join().replace(/,/g, '');
    return h.mask(i, '########-#');
}

/*****************************************************
 * Santa Catarina IE Validator
 *****************************************************/
function validateSC(ie, uf) {
    if (!uf) return false;
    if (uf !== 'sc') return false;
    if (!ie) return false;
    if (ie !== "string") ie = ie.toString();
    ie = h.returnOnlyNumbers(ie);
    if (ie.length !== 9) return false;

    return weightCalculatorSC(ie);
}

function weightCalculatorSC(ie) {
    let weights = [9, 8, 7, 6, 5, 4, 3, 2];
    let base = 0;
    let block = ie.substring(0, ie.length - 1).split('');
    let digito = 0;

    if (block.length !== weights.length) {
        return false;
    }
    for (let i = 0; i < block.length; i++) {
        base += weights[i] * block[i];
    }

    let resto = base % 11;

    if (resto == 0 || resto == 1) {
        digito = 0
    } else {
        digito = 11 - resto;
    }


    block.push((digito).toString());
    let i = block.join().replace(/,/g, '');
    return h.mask(i, "###.###.###");
}

/*****************************************************
 * Sergie IE Validator
 *****************************************************/
function validateSE(ie, uf) {
    if (!uf) return false;
    if (uf !== 'se') return false;
    if (!ie) return false;
    if (typeof ie !== 'string') ie = ie.toString();
    ie = h.returnOnlyNumbers(ie);

    if (ie.length !== 9) return false;
    return weightCalculatorSE(ie);
}

function weightCalculatorSE(ie) {
    let weights = [9, 8, 7, 6, 5, 4, 3, 2];
    let base = 0;
    let block = ie.substring(0, ie.length - 1).split('');

    if (block.length !== weights.length) return false;
    for (let i = 0; i < block.length; i++) {
        base += weights[i] * block[i];
    }

    let resto = base % 11;
    let dig = 0;

    if (resto == '10' || resto == '11') {
        dig = 0;
    } else {
        dig = 11 - resto;
    }

    block.push(dig).toString();
    let i = block.join().replace(/,/g, '');
    return h.mask(i, '########-#');
}

/*****************************************************
 * Tocantins IE Validator
 *****************************************************/
function validateTO(ie, uf) {
    if (!uf) return false;
    if (uf !== 'to') return false;
    if (!ie) return false;
    if (typeof ie !== 'string') ie = ie.toString();

    ie = h.returnOnlyNumbers(ie);
    if (ie.length !== 11) return false;
    return weightCalculatorTO(ie);
}

function weightCalculatorTO(ie) {
    let weights = [9, 8, 7, 6, 5, 4, 3, 2];
    let base = 0;
    let temp = ie.substring(2, 4).split('');
    let block1 = ie.substring(0, 2).split();
    let block2 = ie.substring(4, ie.length - 1).split();
    let block = (block1 + block2).substring().split('');

    for (let i = 0; i < weights.length; i++) {
        base += weights[i] * block[i];
    }
    let resto = base % 11;

    if (resto < 2) {
        dig = 0;
    } else {
        dig = 11 - resto;
    }
    block.push((dig).toString());
    block = (block1 + temp + block2 + dig).substring().split();

    let i = block.join().replace(/,/g, '');
    return h.mask(i, '##########-#');
}

/************************************************
 * SP - IE validator for São Paulo state
 ************************************************/

function validateSP(ie, uf) {
    if (!uf) return false;
    if (uf !== 'sp') return false;
    if (!ie) return false;
    if (typeof ie !== "string") ie = ie.toString();
    ie = h.returnOnlyNumbers(ie);
    if (ie.length !== 12) return false;
    return weightCalculatorSP(ie);
}

function weightCalculatorSP(ie) {
    let weights1 = [1, 3, 4, 5, 6, 7, 8, 10];
    let weights2 = [3, 2, 10, 9, 8, 7, 6, 5, 4, 3, 2];
    let ietemp = ie.substring(9, 10).split('');
    let ietemp2 = ie.substring(10, 11).split('');
    let base = 0;
    let block = ie.substring(0, ie.length - 4).split('');
    for (let i = 0; i < block.length; i++) {
        base += weights1[i] * block[i];
    }

    let resto = base % 11;
    resto = resto.toString().slice(-1);
    block.push((resto).toString());
    block.push((ietemp).toString());
    block.push((ietemp2).toString());
    base = 0;
    for (let i = 0; i < block.length; i++) {
        base += weights2[i] * block[i];
    }
    let resto2 = base % 11;
    resto = resto.toString().slice(-1);
    block.push((resto2).toString());

    let i = block.join().replace(/,/g, '');
    return h.mask(i, '###.###.###.###')
}

module.exports = validateMain;