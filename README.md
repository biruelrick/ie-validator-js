# ie-validator-js
Registration state validator for Brazilian companies (aka Inscrição Estadual)


## What's it?
Many Brazilian companies require a registration in their state known as the 'State Registration' or in brazilian language 'Inscrição Estadual' with acronym 'I.E.', popularly called of 'Sintegra' (organ responsible for registration). This registry is composed of a combination of numbers under a mathematical calculation by each state.
The rules for these calculations can be found at: `http://www.sintegra.gov.br/insc_est.html`.

_P.S.: Each state has its own rule, in some cases the same rule applies to more than one state_

## Project
This project is divided into several functions, each function by state (totaling the 27 states). All 27 functions are storage in `./src` folder and the tests on their functions in the `./test` folder. The `./tmp` folder stores only sample files to be replicated for each state in the initial project.

This project will be applied as a test for new programmer candidates, each candidate will be responsible for the development of one or more functions.

Anyway, this library will be used in a real product.

## Install

```bash
sudo npm i -g mocha
npm i
```

## Test if the environment is working

```bash
npm start
```

# Mocha test
## Validate the I.E. by state

```bash
mocha -g '<uf>'
```
