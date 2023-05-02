console.clear();

console.log("Capitalize first char");

const text = "developer";

console.log(`${text.charAt(0).toUpperCase()}${text.substring(1)}`);
console.log(`${text[0].toUpperCase()}${text.substring(1)}`);
console.log(`${text[0].toUpperCase()}${text.slice(1)}`);