console.clear();
console.log("Function - Declaration, expression and arrow");

// function decalration
// ===============================================
function add(x, y) {
  return x + y;
}
console.log(add(10, 20));

// function expression
// ===============================================
const sum = function (x, y) {
  return x + y;
};
console.log(sum(10, 10));

// they differ due to how hoisting works
// ===============================================
console.log(func1(10, 20));
function func1(x, y) {
  return x + y;
}

// console.log(fun2(10,10)); // cannot access before initialisation error
const fun2 = function (x, y) {
  return x + y;
};

// arrow function
// ===============================================
const func3 = (x, y) => {
  return x + y;
};
console.log(func3(10, 20));

const func4 = (x, y) => x + y;
console.log(func4(10, 10));

// no () required around single param
const func5 = x => x * 10;
console.log(func5(10));

const func6 = () => ({
  name: "test",
  age: 18,
});
console.log(func6());

// IIFE - immediately invoked functions
// ===============================================
(function (name) {
  console.log(name);
})("Abhijeet");
