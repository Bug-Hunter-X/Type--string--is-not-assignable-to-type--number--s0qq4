# Type 'string' is not assignable to type 'number'

This repository demonstrates a common type error in TypeScript where a string value is assigned to a variable of type number.

## Bug

The bug is in the `add` and `subtract` functions. These functions are expecting numerical inputs but the inputs are of type string which leads to errors.

## Solution

The solution involves type checking and parsing before the functions are called, ensuring only numbers are passed.

## How to run

1. Clone the repository
2. Run `tsc bug.ts` and `tsc bugSolution.ts` to compile the TypeScript code.
3. Run `node bug.js` and `node bugSolution.js` to execute the JavaScript code.