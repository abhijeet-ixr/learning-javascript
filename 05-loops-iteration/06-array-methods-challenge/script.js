console.clear();
console.log("Array method challenge");

// take people array and create a new array with only name and email
// for the people who are 25 and below in age. The name should have
// the firstName and lastName together

const people = [
  {
    firstName: "first 1",
    lastName: "last 1",
    email: "dummy1@test.com",
    phone: "1234567890",
    age: 30,
  },
  {
    firstName: "first 2",
    lastName: "last 2",
    email: "dummy2@test.com",
    phone: "2234567890",
    age: 20,
  },
  {
    firstName: "first 3",
    lastName: "last 3",
    email: "dummy3@test.com",
    phone: "3234567890",
    age: 18,
  },
  {
    firstName: "first 4",
    lastName: "last 4",
    email: "dummy4@test.com",
    phone: "4234567890",
    age: 28,
  },
];

const youngPeople = people
  .filter((person) => person.age <= 25)
  .map((person) => ({
    name: `${person.firstName} ${person.lastName}`,
    email: person.email,
  }));

console.log(youngPeople);
