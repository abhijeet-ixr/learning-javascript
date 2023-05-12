console.clear();
console.log("Fizbuzz Challenge");

// log 1 to 100
// if multiple of 3 then fizz
// if multiple of 5 then buzz
// if multiple of both 3 and 5 the fizbuzz

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`FizzBuzz : ${i}`);
  } else if (i % 3 === 0) {
    console.log(`Fizz : ${i}`);
  } else if (i % 5 === 0) {
    console.log(`Buzz : ${i}`);
  } else {
    console.log(i);
  }
}
