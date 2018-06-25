const assert = require('assert');
const calcTotalPoints = require('./calculateTotalPoints');

describe('calcTotalPoints', () => {
  describe('normal takeoff', () => {
    it('should return 131.8', () => {
      const actual = calcTotalPoints(111, 'normal', 98, [19.0, 19.5, 19.0, 19.0, 19.0], 3.2, -14.4);
      const expected = 131.8;

      assert.equal(actual, expected);
    });

    it('should return 125.9', () => {
      const actual = calcTotalPoints(106.5, 'normal', 98, [18.5, 18.5, 18.5, 19.0, 19.0 ], 6.4, -13.5);
      const expected = 125.9;

      assert.equal(actual, expected);
    });

    it('should return 120.3', () => {
      const actual = calcTotalPoints(103.5, 'normal', 98, [18.5, 18.5, 19.0, 18.5, 18.5], 3.2, -9.4);
      const expected = 120.3;

      assert.equal(actual, expected);
    });
  });

  describe('big takeoff', () => {
    it('should return 112.7', () => {
      const actual = calcTotalPoints(122.5, 'big', 120, [17.5, 17.0, 18.0, 18.0, 18.0], 0, -5.3);
      const expected = 112.7;

      assert.equal(actual, expected);
    });

    it('should return 107.4', () => {
      const actual = calcTotalPoints(119, 'big', 120, [17.5, 17.0, 17.0, 17.5, 17.5], 0, -2.8);
      const expected = 107.4;

      assert.equal(actual, expected);
    });

    it('should return 106.6', () => {
      const actual = calcTotalPoints(119.5, 'big', 120, [17.5, 17.0, 17.5, 17.5, 17.5], 0, -5);
      const expected = 106.6;

      assert.equal(actual, expected);
    });
  });

  describe('mammoth takeoff', () => {
    it('should return 171.5', () => {
      const actual = calcTotalPoints(206, 'mammoth', 200, [15.5, 16.5, 15.5, 15.5, 16.0], 0, -2.7);
      const expected = 171.5;

      assert.equal(actual, expected);
    });

    it('should return 171.7', () => {
      const actual = calcTotalPoints(203, 'mammoth', 200, [17.0, 17.0, 17.5, 17.0, 17.0], 0, -2.9);
      const expected = 171.7;

      assert.equal(actual, expected);
    });

    it('should return 206.5', () => {
      const actual = calcTotalPoints(226, 'mammoth', 200, [18.5, 18.5, 18.5, 18.0, 18.5], 8.7, -8.9);
      const expected = 206.5;

      assert.equal(actual, expected);
    });
  });
});
