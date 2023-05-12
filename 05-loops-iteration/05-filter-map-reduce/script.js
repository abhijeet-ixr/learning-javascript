console.clear();
console.log("Filter, map and reduce");

const arr = [2, 5, 7, 90, 72, 55, 19];

// Filter
// ====================================
const filtered = arr.filter((item) => item % 2 === 0);
console.log(filtered);

// Map
// ====================================
const mapped = arr.map((item) => item * 2);
console.log(mapped);

// Reduce
// ====================================
const reduced = arr.reduce((prev, curr) => prev + curr, 0);
console.log(reduced);