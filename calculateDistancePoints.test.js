const assert = require('assert');
const calcDistancePoints = require('./calculateDistancePoints');

describe('calcDistancePoints', () => {
  describe('normal takeoff', () => {
    it('should return 63', () => {
      const actual = calcDistancePoints(99.5, 'normal', 98);
      const expected = 63;

      assert.equal(actual, expected);
    });

    it('should return 47', () => {
      const actual = calcDistancePoints(91.5, 'normal', 98);
      const expected = 47;

      assert.equal(actual, expected);
    });

    it('should return 40', () => {
      const actual = calcDistancePoints(88, 'normal', 98);
      const expected = 40;

      assert.equal(actual, expected);
    });
  });

  describe('big takeoff', () => {
    it('should return 85.2', () => {
      const actual = calcDistancePoints(134, 'big', 120);
      const expected = 85.2;

      assert.equal(actual, expected);
    });

    it('should return 50.1', () => {
      const actual = calcDistancePoints(114.5, 'big', 120);
      const expected = 50.1;

      assert.equal(actual, expected);
    });

    it('should return 61.8', () => {
      const actual = calcDistancePoints(121, 'big', 120);
      const expected = 61.8;

      assert.equal(actual, expected);
    });
  });

  describe('mammoth takeoff', () => {
    it('should return 153', () => {
      const actual = calcDistancePoints(227.5, 'mammoth', 200);
      const expected = 153;

      assert.equal(actual, expected);
    });

    it('should return 115.8', () => {
      const actual = calcDistancePoints(196.5, 'mammoth', 200);
      const expected = 115.8;

      assert.equal(actual, expected);
    });

    it('should return 123', () => {
      const actual = calcDistancePoints(202.5, 'mammoth', 200);
      const expected = 123;

      assert.equal(actual, expected);
    });
  });
});
