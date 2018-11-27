import { maxNumber } from '../index';

describe('maxNumber', () => {
  describe('given on empty array', () => {
    it('return 0', () => {
      expect(maxNumber([])).toEqual(0);
    });
  });

  describe('given an array of numbers', () => {
    it('return the max number', () => {
      expect(maxNumber([1, 2, 3])).toEqual(3);
    });
  });
});
