console.clear();
console.log("For...Of, For...in, forEach");

// for...of
// ====================================
const arr = [1, 2, 3, 4];
for (const item of arr) {
  console.log(item);
}

// for...in
// ====================================
const obj = { name: "john", age: 18 };
for (const item in obj) {
  console.log(item, obj[item]);
}

for (const item in arr) {
  console.log(item, arr[item]);
}

// forEach
// ====================================
arr.forEach((item) => console.log(item));
