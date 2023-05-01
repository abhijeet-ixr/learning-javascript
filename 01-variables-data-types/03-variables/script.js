console.clear();

console.log('Hello from Variables');

// var -> original decalaration when JS was created
var a = 10;
console.log(a);

var a; // not looses it's value after re-decalration
console.log(a);

// let , const -> introduced in ES2015
let b = 5;
console.log(b);

b = 10;
console.log(b);

let c;
console.log(c);

// const -> introduced in ES2015
const d = 'see';
console.log(d);

const user = {
    name: 'dummy'
}

console.log(user.name);
user.email = 'test@email.com';
console.log(user);

// undecalred variables
e = 10;
console.log(e);

// More on comments can be read at:
// https://www.w3schools.com/js/js_variables.asp
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables
