console.log(100);
console.clear();

console.log("Hello from console");

console.log(1, "Two", true);

console.info("Information");
console.warn("Warning");
console.error("Error");

//show data in table format
console.table([
  { label: "One", value: 1 },
  { label: "Two", value: 2 },
]);

// create a collapsible group of logs
console.group("Group logs");
console.log(1);
console.log("Two");
console.log("One Two Three");
console.groupEnd();

// apply css to console
console.log(
  "%cCSS in console",
  "padding: 10px; color: white; background-color: green;"
);

//time taken to complete some action between time and timeEnd
console.time("Test timer");
console.timeEnd("Test timer");

// More on console can be read at:
// https://developer.mozilla.org/en-US/docs/Web/API/console
// https://www.w3schools.com/jsref/obj_console.asp

