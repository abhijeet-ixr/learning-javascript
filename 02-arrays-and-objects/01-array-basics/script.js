console.clear();
console.log("Hello from Arrays");

// array literal
const arr = [1, 2, 3, 4, 5];
console.log(arr);

// array constructor
const nums = new Array(1, 2, 3);
console.log(nums);

console.log(`First value is: ${nums[0]}`);

// length
console.log(`Number of items: ${arr.length}`);

// arrays are mutable
arr[0] = 'Apple';
console.log(arr);

// More on console can be read at:
// https://www.w3schools.com/js/js_arrays.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
