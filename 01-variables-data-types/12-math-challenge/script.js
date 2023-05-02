console.clear();
console.log("Math Challenge");

// generate two random number
// a - between 1 - 100
// b - between 1 - 50
// then print their summ, difference, product, division

const a = Math.floor(Math.random() * 100 + 1);
const b = Math.floor(Math.random() * 50 + 1);

console.log(`a: ${a} , b: ${b}`);

console.log(`Sum: ${a + b}`);
console.log(`Difference: ${a - b}`);
console.log(`Product: ${a * b}`);
console.log(`Quotient: ${a / b}`);
console.log(`Remainder: ${a % b}`);
