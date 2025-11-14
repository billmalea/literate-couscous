import { twoSum } from '../../src/leetcode/easy/two-sum';

describe('LeetCode - Two Sum', () => {
  it('should find two numbers that add up to target', () => {
    const result = twoSum([2, 7, 11, 15], 9);
    expect(result).toEqual([0, 1]);
  });

  it('should handle negative numbers', () => {
    const result = twoSum([3, 2, 4], 6);
    expect(result).toEqual([1, 2]);
  });

  it('should work with large numbers', () => {
    const result = twoSum([1000000007, -1000000006, 1], 1);
    expect(result.length).toBe(2);
  });
});
