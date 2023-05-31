const assert = require('assert');
const chunk = require('./index');

describe('Array chunking', () => {
  it('should create chunk of provided size', () => {
    assert.deepEqual(chunk([1, 2, 3, 4], 2), [
      [1, 2],
      [3, 4],
    ]);
    assert.deepEqual(chunk([1, 2, 3, 4], 3), [[1, 2, 3], [4]]);
  });
});
