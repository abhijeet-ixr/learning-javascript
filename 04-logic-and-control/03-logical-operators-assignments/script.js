console.clear();
console.log("Logical operator & assignments");

// logical operators
// ====================================
// && - looks for first falsy value and if not found returns the last value
console.log(10 && 20);
console.log(false && 20);
console.log(100 && 0);
console.log(true && false);
console.log(null && undefined);

// || - looks for first truthy value and if not found then returns last value
console.log(10 || 20);
console.log(20 || "");
console.log(false || true);
console.log(0 || false || null || 1);
console.log(false || 0 || null);

// logical assignments
// ====================================
// || -> assigns right value if left expression is falsy
let a = false;
a = a || 10;
console.log(a);

a = "";
a ||= 100;
console.log(a);

// && -> assigns right value if left expression is truthy
let b = 1;
b = b && 10;
console.log(b);

b = "abc";
b &&= 100;
console.log(b);

// ?? -> returns right side value if left is either null or undefined
let c = null;
c = c ?? 10;
console.log(c);

c = undefined;
c ??= 100;
console.log(c);

c = 1;
c ??= 100;
console.log(c);

// ternary operator
// ====================================
let age = 23;
console.log(age > 18 ? 'Can Vote' : 'Cannot Vote');

age = 15;
console.log(age > 18 ? 'Can Vote' : 'Cannot Vote');