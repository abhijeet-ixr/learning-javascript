console.clear();
console.log("For Loop");

// for(initilisation; condition; increment) {
//  statement
// }

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// nested loop
for (let i = 1; i <= 5; i++) {
  let str = "";
  for (j = 1; j <= i; j++) {
    str += `${j} `;
  }
  console.log(str);
}

for (let i = 1; i <= 5; i++) {
  console.log(`\nTable of: ${i}`);
  for (j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

// break - short circuits the loop
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);
}

// continue - short circuits just the current iteration
for (let i = 0; i < 10; i++) {
  if (i === 5) continue;
  console.log(i);
}
