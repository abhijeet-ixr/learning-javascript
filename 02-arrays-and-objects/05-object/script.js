console.clear();
console.log("Object");

// object holds data as key-value
const user = {
  firstName: "Abhijeet",
  lastName: "Jaiswal",
  website: "abhijeetjaiswal.in",
  canVote: true,
  age: 30,
  greet: function () {
    return `My Name is: ${this.firstName} ${this.lastName}`;
  },
  address: {
    lat: 12.34,
    long: -21.23,
    city: "dummy",
  },
};

console.log(user.firstName);
console.log(user["website"]);
console.log(user.greet());

user.firstName = "Advik";
console.log(user.greet());

delete user.canVote;
console.log(user);

// not recommended but handy in edge cases
user["can vote"] = false;
console.log(user["can vote"]);

const a = { a: 1, b: 2 },
  b = { c: 3, d: 4 };

// spread operator
console.log({ ...a, ...b });

// Assign
console.log(Object.assign({}, a, b));

// extract keys as array
console.log(Object.keys(a));

// extract values as array
console.log(Object.values(a));

// both key-value as array
console.log(Object.entries(a));

// check if a property exists ih object
console.log(a.hasOwnProperty("c"));
console.log(Object.hasOwn(a, "b"));

// object shorthand
const firstName = "John",
  lastName = "Doe";
const obj = { firstName, lastName };
console.log(obj);

// Object Destructuring
const { website, age } = user;
console.log(website, age);

const {
  firstName: name,
  greet,
  address: { lat, long },
} = user;
console.log(name, greet.call(user), lat, long);

// array Destructuring
const num = [100, 200, 300, 400, 500];
const [first, second] = num;
console.log(first, second);

// rest operator
const [one, ...rest] = num;
console.log(one, rest);

// More on console can be read at:
// https://www.w3schools.com/js/js_objects.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
