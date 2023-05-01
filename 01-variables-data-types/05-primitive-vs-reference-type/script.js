console.clear();

console.log('Diiference between primitive and reference type');

// primitive -> stored in stack
const name = 'john';
const age= 30;
console.log(name, age);

let newName = name;
console.log(newName);

newName = 'john wick';

console.log(newName);
console.log(name);

// reference -> stored in heap and the variable points to a memory location
const person = {
    name: 'abhi',
    age: 30
}
console.log(person);

const newPerson = person;
console.log(person);

newPerson.name = 'abhijeet';

console.log(newPerson);
console.log(person);

// More on comments can be read at:
// https://www.w3schools.com/js/js_datatypes.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
