console.clear();
console.log('Async/Await');

const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve({ user: 1, valid: true }), 3000);
});

const asynDemo = async () => {
  const value = await promise;
  console.log(value);
};

asynDemo();
