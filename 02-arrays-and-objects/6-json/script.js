console.clear();
console.log("JSON");

// JavaScript Object Notation -> JSON
// syntax very similar to JS objects
// keys must have ""
// cannot have comma on last property -> check the data.json

const blogs = [
  {
    id: 1,
    title: "test blog",
    description: "dummy text",
  },
  {
    id: 2,
    title: "test blog 2",
    description: "dummy text here",
  },
];

// convert JSON to string
const str = JSON.stringify(blogs);
console.log(str);

// convert string back to JSON
console.log(JSON.parse(str));