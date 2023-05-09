console.clear();
console.log("Array - Nesting, concat and spread");

// array literal
const arr = [1, 2, 3, 4, 5];
const arr1 = ["a", "b", "c", "d"];

// nested array
arr.push(arr1);
console.log(arr);
console.log(arr[5]);

// concat
arr.pop();
console.log(arr.concat(arr1));

// spread
console.log([...arr, ...arr1]);

// flatten
const arr2 = [1, 2, 3, [4, 5], [6, 7], 8];
console.log(arr2.flat());

// Array object Methods
console.log(Array.isArray("abcd"));
console.log(Array.isArray(arr));

console.log(Array.from("abcd"));

const a = 1,
  b = 2,
  c = 3;
console.log(Array.of(a, b, c));

// More on console can be read at:
// https://www.w3schools.com/js/js_arrays.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
