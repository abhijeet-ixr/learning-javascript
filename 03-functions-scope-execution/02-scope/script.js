console.clear();
console.log("Hello from Scope");

// global scope - not inside any function or block
// ===============================================
const x = 10;
console.log(x + ": from global");

function dummy() {
  console.log(x + ": from function");
}
dummy();

if (true) {
  console.log(x + ": from block");
}

// function scope - variables only accessible inside function where declared
// ===============================================
function test() {
  const y = 20;
  console.log(y + ": from function");

  if (true) {
    console.log(y + ": from block");
  }
}
test();

// console.log(y + ": from global");  //-> ref error - not defined
// if (true) {
//   console.log(y + ": from block"); // -> ref error - not defined
// }

// variable shadowing
// ===============================================
const a = 10;
function varShadow() {
  const a = 20; // local scope gets preference
  console.log(a);
}
varShadow();

// block scope - accessible within a block of stetment like loop or if/else
// ===============================================
// const and let are block scoped
// while var is function scoped
// when we create global variable with var -> it gets attached to window object

// example 1
if (true) {
  var b = 10;
  const c = 20;
  let d = 30;

  console.log(b);
  console.log(c);
  console.log(d);
}

console.log(b);
// console.log(c); // -> ref error - not defined
// console.log(d); // -> ref error - not defined

// exmaple 2
function block1() {
  var e = 10;
  console.log(e);
}
block1();
// console.log(e); // -> ref error - not defined

// example 3
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
// console.log(i); // -> ref error - not defined

for (var j = 1; j <= 10; j++) {
  console.log(j);
}
console.log(j);

// nested scope
// ===============================================

// exmaple 1
function outer() {
  const x = 100;
  function inner() {
    const y = 50;
    console.log(x + y);
  }

  inner();
  // console.log(y); // -> ref error - not defined
}
outer();

// example 2
if (true) {
  const x = 100;
  if (x === 100) {
    const y = 50;
    console.log(x + y);
  }
  // console.log(y); // -> ref error - not defined
}

// More can be read at:
// https://www.w3schools.com/js/js_scope.asp
// https://www.programiz.com/javascript/variable-scope
