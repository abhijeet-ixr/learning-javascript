const pallindrome = require('./index');

describe('plaiindrome test', () => {
  it('should be a function', () => {
    expect(typeof pallindrome).toEqual('function');
  });

  it('should return a boolean', () => {
    expect(typeof pallindrome('hello')).toEqual('boolean');
  });

  it('should return true for valid pallindrome', () => {
    expect(pallindrome('wow')).toEqual(true);
    expect(pallindrome('rotator')).toEqual(true);
    expect(pallindrome('kyayk')).toBeTruthy();
  });

   it('should return false for valid pallindrome', () => {
     expect(pallindrome('hello')).toEqual(false);
     expect(pallindrome('world')).toEqual(false);
     expect(pallindrome('nice')).toBeFalsy();
   });

   it('should return false for string with spaces', () => {
     expect(pallindrome('hello ')).toBeFalsy();
     expect(pallindrome(' world')).toBeFalsy();
   });
});
