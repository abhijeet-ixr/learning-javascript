console.clear();
console.log("Function - Challenge");

// convert fahrenheit to celsius
// ===============================================
const getCelsius = (tempInFahrenheit) =>
  `${(((tempInFahrenheit - 32) * 5) / 9).toFixed()} \xB0C`;
console.log(getCelsius(32));

// return min/max as object from an array
// ===============================================
const arr = [20, 10, 30, -17];

const getMinMax = (arr) => ({
  min: Math.min(...arr),
  max: Math.max(...arr),
});
console.log(getMinMax(arr));

// create an iife that calculates area of rectangle
// ===============================================
((length, breadth) => {
  console.log(
    `Area of ${length} x ${breadth} rectangle is ${length * breadth}`
  );
})(2, 6);
