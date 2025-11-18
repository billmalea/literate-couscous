import { isOneBitCharacter } from '../../src/leetcode/easy/one-bit-two-bit';

describe('isOneBitCharacter (LeetCode 717)', () => {
  it('example 1: [1,0,0] -> true', () => {
    expect(isOneBitCharacter([1,0,0])).toBe(true);
  });

  it('example 2: [1,1,1,0] -> false', () => {
    expect(isOneBitCharacter([1,1,1,0])).toBe(false);
  });

  it('single zero -> true', () => {
    expect(isOneBitCharacter([0])).toBe(true);
  });

  it('two-bit then one-bit -> true', () => {
    expect(isOneBitCharacter([1,0,0])).toBe(true);
  });

  it('two-bit then one-bit (11,0) -> true', () => {
    expect(isOneBitCharacter([1,1,0])).toBe(true); // (11)(0) last is one-bit
  });

  it('mixed pattern ending correctly -> true', () => {
    expect(isOneBitCharacter([0,0])).toBe(true);
    expect(isOneBitCharacter([0,1,0,0])).toBe(true);
  });

  it('long valid sequence -> true', () => {
    expect(isOneBitCharacter([1,0,1,0,0])).toBe(true);
  });

  it('sequence ending with standalone zero -> true', () => {
    expect(isOneBitCharacter([1,0,1,1,0])).toBe(true); // (10)(11)(0)
  });
});
