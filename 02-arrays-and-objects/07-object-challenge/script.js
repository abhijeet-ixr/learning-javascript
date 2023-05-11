console.clear();
console.log("Object - Challenge");

// create an array of objects for library
const library = [
  {
    title: "test 1",
    author: "author 1",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "test 2",
    author: "author 2",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "test 3",
    author: "author 3",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

// update all to read to true
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

console.log(library);

// destructure first book title key, rename the key and log it
const { title: firstBookTitle } = library[0];
console.log(firstBookTitle);

// convert libarary to string
console.log(JSON.stringify(library));
