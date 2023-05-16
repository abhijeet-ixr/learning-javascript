console.clear();
console.log('Promise');

const promise = Promise.resolve('Resolve');
promise
  .then((a) => {
    console.log(a);
    return '1';
  })
  .then((val) => {
    console.log(val);
    return '2';
  })
  .then((val) => {
    console.log(val);
    throw new Error('Error from Promise');
  })
  .catch((err) => {
    console.log(err.message);
    return '3';
  })
  .then((val) => {
    console.log(val);
  })
  .finally(() => {
    console.log('4');
  });

// promise chain short-circuits to nearest catch block on error/reject
// and continues as usual after catch
const promise1 = Promise.reject('Reject');
promise1
  .then((a) => {
    console.log(b);
    return 'a';
  })
  .then((val) => {
    console.log(val);
    return 'b';
  })
  .then((val) => {
    console.log(val);
    throw new Error('Error from Promise');
  })
  .catch((errMessage) => {
    console.log(errMessage);
    return 'c';
  })
  .then((val) => {
    console.log(val);
  });

const promise2 = Promise.resolve('Typo Error');
promise2
  .then((a) => {
    console.log(b);
    return 'error 1';
  })
  .then((val) => {
    console.log(val);
    return 'error 2';
  })
  .catch((err) => {
    console.log(err.message);
    return 'error 3';
  })
  .then((val) => {
    console.log(val);
  });

// all should fulfill - either resolve or reject
Promise.allSettled([promise, promise1, promise1]).then((values) =>
  console.log('Promise allSettled: ' + JSON.stringify(values))
);

// all should resolve and if one throws error it halts execution
Promise.all([promise, promise1, promise1]).then((values) =>
  console.log('Promise all: ' + values)
);
