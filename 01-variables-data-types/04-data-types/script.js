console.clear();

console.log('Hello from Data Types');

// string
const firtName = 'abhi';
console.log(firtName, typeof(firtName));

const empty = ' ';
console.log(empty, typeof(empty));

// number
const age = 30;
console.log(age, typeof(age));

// boolean
const canVote = true;
console.log(canVote, typeof(canVote));

// null
const isMarried = null;
console.log(isMarried, typeof(isMarried));

// udefined
let canDrive;
console.log(canDrive, typeof(canDrive));

// symbol
const id = Symbol('id');
console.log(id, typeof(id));

// BigInt -> added in ES2020
const bigNumber = BigInt(Number.MAX_VALUE);
console.log(bigNumber, typeof(bigNumber));

// Refrennce type
const arr = [1, 2, 3];
console.log(arr, typeof(arr));

const user = {name: 'jack', age: 18};
console.log(user, typeof(user));

function sayHi() {
    console.log('hi from function');
}
console.log(typeof(sayHi));

const date = new Date();
console.log(date, typeof(date));

// More on comments can be read at:
// https://www.w3schools.com/js/js_datatypes.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
