const anagram = require('./index');

describe('Anagram', () => {
  it('should be a function', () => {
    expect(typeof anagram).toEqual('function');
  });

  it('should return a boolean', () => {
    expect(typeof anagram('ram', 'arm')).toEqual('boolean');
  });

  it('should return true if anagram', () => {
    expect(typeof anagram('god', 'dog')).toBeTruthy();
    expect(typeof anagram('ram', 'arm')).toBeTruthy();
    expect(typeof anagram('cinema', 'iceman')).toBeTruthy();
  });

  it('should return false if not an anagram', () => {
    expect(typeof anagram('hello', 'fellow')).toBeTruthy();
    expect(typeof anagram('test', 'jest')).toBeTruthy();
    expect(typeof anagram('see', 'sea')).toBeTruthy();
  });
});
