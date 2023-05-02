console.clear();

console.log("Hello from Strings");

const text = 'hello';
// concat
console.log('This is to say: ' + text);
// template literal
console.log(`This is to say: ${text}`)

// JS behind the scenes wraps primitive types with respective constructors to allow properties and functions

let s = new String('Hello World');

console.log(s.__proto__);
console.log(s.length);
console.log(s[0]);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.charAt(0));
console.log(s.substring(0,5));
console.log(s.substring(6));
console.log(s.slice(-11, -6));

s = ' Hello World   ';
console.log(s.trim());
console.log(s.replace('World', 'Tom'));
console.log(s.includes('Hell'));
console.log(s.split(''));

const x = 'Apple';
const y = new String('Apple');
console.log(x == y);
console.log(x === y);
// type mismatch causes the false result

// we can string compare
// best is to have them in same case
console.log( 'a' > 'b');

// type differnce
const a = String(5);
const b = new String(5);
const c = '5';

console.log(typeof(a), typeof(b), typeof(c));

// More readings:
// https://www.w3schools.com/js/js_strings.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String