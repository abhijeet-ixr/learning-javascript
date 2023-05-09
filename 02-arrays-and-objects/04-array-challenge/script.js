console.clear();
console.log("Array - Challenge");

// convert the original array to below using array methods
const arr = [1, 2, 3, 4, 5];
// expected -> [6, 5, 4, 3, 2, 1, 0];

arr.push(6);
arr.unshift(0);
console.log(arr.reverse());

// remove the extra 5 after merging both arrays
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

// expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(arr1.concat(arr2.slice(1)));

// More on console can be read at:
// https://www.w3schools.com/js/js_arrays.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
