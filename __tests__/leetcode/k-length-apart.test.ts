import { kLengthApartIndex, kLengthApartGap } from '../../src/leetcode/easy/k-length-apart';

describe('Are all 1s at least k apart?', () => {
  const cases: { nums: number[]; k: number; expected: boolean }[] = [
    { nums: [1,0,0,0,1,0,0,1], k: 2, expected: true },
    { nums: [1,0,0,1,0,1], k: 2, expected: false },
    { nums: [1,0,0,0], k: 2, expected: true },
    { nums: [0,0,0,0], k: 2, expected: true },
    { nums: [1,1,1,1], k: 2, expected: false },
    { nums: [1,0,1,0,1], k: 0, expected: true },
    { nums: [1,0,0,1], k: 2, expected: true }, // exactly k zeros between ones
  ];

  for (const { nums, k, expected } of cases) {
    it(`index: nums=${JSON.stringify(nums)}, k=${k}`, () => {
      expect(kLengthApartIndex(nums, k)).toBe(expected);
    });
    it(`gap:   nums=${JSON.stringify(nums)}, k=${k}`, () => {
      expect(kLengthApartGap(nums, k)).toBe(expected);
    });
  }
});
