console.clear();
console.log("Hello from Numbers");

const num = 100.123;
console.log(num.toString());
console.log(num.toLocaleString());
console.log(num.toFixed(2));
console.log(typeof num.toFixed());
console.log(num.toPrecision(4));

const num1 = new Number(100);
console.log(num1, typeof num1);
console.log(num1.valueOf(), typeof num1.valueOf());

// integers are precise upto 15 digits
console.log(999999999999999);
console.log(9999999999999999);

// interpreter reads left to right
console.log("Value is : " + 10 + 20);
console.log("10 + 20");
console.log("10" + "20");
console.log(10 + 20 + "30");

// NaN
console.log(100/'a');
console.log(typeof NaN);

// Infinity
console.log(2/0);
console.log(typeof Infinity);

// Max and Min
console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_VALUE);
console.log(Number.MIN_SAFE_INTEGER);

// More readings:
// https://www.w3schools.com/js/js_numbers.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
