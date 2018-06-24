const assert = require('assert');
const calcStylePoints = require('./calculateStylePoints');

describe('calcStylePoints', () => {
  it('should return 49.5', () => {
    const actual = calcStylePoints(16, 17, 16.5, 16, 18);
    const expected = 49.5;

    assert.equal(actual, expected);
  });

  it('should return 54.5', () => {
    const actual = calcStylePoints(16, 17, 17.5, 20, 20);
    const expected = 54.5;

    assert.equal(actual, expected);
  });

  it('should return 44.5', () => {
    const actual = calcStylePoints(0, 10, 16.5, 20, 18);
    const expected = 44.5;

    assert.equal(actual, expected);
  });
})
