console.clear();
console.log("While & Do...While Loop");

// initialisation
// while(condition) {
// statement
// }
let i = 0;
while (i <= 5) {
  console.log(i);
  i++;
}

// nested while loop
let x = 1;
while (x <= 5) {
  console.log(`\nTable of: ${x}`);
  let y = 1;
  while (y <= 10) {
    console.log(`${x} x ${y} = ${x * y}`);
    y++;
  }
  x++;
}

// Do...While loop -> executes at least once even if condition is not met
let a = 10;
do {
  console.log(a);
  a++;
} while (a < 5);
