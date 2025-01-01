function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let num1:number = parseInt("5");
let num2:number = parseInt("3");
let result1 = add(num1, num2); // result1 is 8

let num3:number = parseInt("10");
let num4:number = parseInt("5");
let result2 = subtract(num3, num4); // result2 is 5

console.log(result1); // Output: 8
console.log(result2); // Output: 5