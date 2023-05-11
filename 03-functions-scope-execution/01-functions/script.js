console.clear();
console.log("Hello from Functions");

// group of code that runs together

function sayHello() {
  console.log("Hello from JS Functions");
}
sayHello();

function add(num1, num2) {
  return num1 + num2;
}
const result = add(10, 20);
console.log(result);
console.log(add(40, 20));

// default param
function sum(num1 = 0, num2 = 0) {
  // before ES6 if/else block was used to handle undefined params
  return num1 + num2;
}
console.log(sum(50));
console.log(sum());

// More can be read at:
// https://www.w3schools.com/js/js_functions.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
