const fizzbuzz = require('./index');

describe('fizzbuzz', () => {
  it('should be a function', () => {
    expect(typeof fizzbuzz).toEqual('function');
  });

  it('should return FizzBuzz if divisible by both 3 & 5', () => {
    expect(fizzbuzz(15)).toEqual('FizzBuzz');
  });

  it('should return Fizz if divisible by only 3', () => {
    expect(fizzbuzz(6)).toEqual('Fizz');
  });

  it('should return Buzz if divisible by only 5', () => {
    expect(fizzbuzz(20)).toEqual('Buzz');
    expect(fizzbuzz(35)).toEqual('Buzz');
    expect(fizzbuzz(55)).toEqual('Buzz');
  });

  it('should return number if not divisible by both 3 & 5', () => {
    expect(fizzbuzz(8)).toEqual(8);
    expect(fizzbuzz(17)).toEqual(17);
    expect(fizzbuzz(49)).toEqual(49);
  });
});
