console.clear();
console.log("Calculator Challenge");

// create a calculator function that takes values and operator as params
function calc(num1, num2, operator) {
  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    default:
      result = "Invalid operator";
  }
  return result;
}

console.log(calc(2, 3, "+"));
console.log(calc(20, 3, "-"));
console.log(calc(21, 3, "/"));
console.log(calc(2, 3, "*"));
console.log(calc(2, 3, "%"));
