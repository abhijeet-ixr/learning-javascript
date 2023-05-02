console.clear();

console.log('Type Conversion');

// string to number
let amount = '100';
console.log(amount, typeof(amount));

amount = parseInt(amount);
console.log(amount, typeof(amount));

amount = +amount;
console.log(amount, typeof(amount));

amount = Number(amount);
console.log(amount, typeof(amount));

// number to string
let value = 100;
console.log(value, typeof(value));

value = value.toString();
console.log(value, typeof(value));

value = String(value);
console.log(value, typeof(value));

// working with decimal values
let dValue = '99.5';
console.log(dValue, typeof(dValue));

dValue = parseFloat(dValue);
console.log(dValue, typeof(dValue));

dValue = parseInt(dValue);
console.log(dValue, typeof(dValue));

// boolean

let isValid = 1;
console.log(isValid, typeof(isValid));

isValid = Boolean(isValid);
console.log(isValid, typeof(isValid));

isValid = 0;
isValid = Boolean(isValid);
console.log(isValid, typeof(isValid));

isValid = false;
console.log(parseInt(isValid));

// More on comments can be read at:
// https://www.w3schools.com/js/js_datatypes.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
