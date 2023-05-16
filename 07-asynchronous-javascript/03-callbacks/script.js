console.clear();
console.log('Callbacks');

const logger = (value) => console.log(value);

const sum = (num1, num2, cb) => {
  setTimeout(() => {
    const value = num1 + num2;
    cb(value);
  }, 2000);
};

sum(10, 20, logger);
