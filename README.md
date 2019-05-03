# ie-validator-js
Registration state validator for Brazilian companies (aka Inscrição Estadual)


## What's it?
Many Brazilian companies require a registration in their state known as the 'State Registration' or in brazilian language 'Inscrição Estadual' with acronym 'I.E.', popularly called of 'Sintegra' (organ responsible for registration). This registry is composed of a combination of numbers under a mathematical calculation by each state.
The rules for these calculations can be found at: [http://www.sintegra.gov.br/insc_est.html](http://www.sintegra.gov.br/insc_est.html).

_P.S.: Each state has its own rule, in some cases the same rule applies to more than one state_

## Project
This project is divided into several functions, each function by state (totaling the 27 states). All 27 functions are storage in `./src` folder and the tests on their functions in the `./test` folder. The `./tmp` folder stores only sample files to be replicated for each state in the initial project.

This project will be applied as a test for new programmer candidates, each candidate will be responsible for the development of one or more functions.

Anyway, this library will be used in a real product.

## Install
To run the code you need the NodeJS (v10 or major) installed and mocha package as global package.

```bash
sudo npm i -g mocha
npm i
```

## Test if the dev tools environment is working

```bash
npm start
```

# Mocha test
## Validate the I.E. by state

```bash
mocha -g '<uf>'
```

# Example
## Validate the I.E. for Acre (ac) state
 * technical specification: [http://www.sintegra.gov.br/Cad_Estados/cad_AC.html](http://www.sintegra.gov.br/Cad_Estados/cad_AC.html)
 * valid I.E. for this state: '01.004.823/001-12' (specified in the `./src/ac.spec.js` file)
 * function file `./src/ac.js`
 * spec file `./src/ac.spec.js`

To run this test
```bash
mocha -g 'ac'
```

_P.S. The folder `./util` has a `helper.js` file with common functions to be shared to files function_
