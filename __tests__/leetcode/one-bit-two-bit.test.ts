import {
  isOneBitCharacter,
  isOneBitCharacterByTrailingOnes,
} from '../../src/leetcode/easy/one-bit-two-bit';

describe('isOneBitCharacter (LeetCode 717)', () => {
  it('example 1: [1,0,0] -> true', () => {
    const bits = [1, 0, 0];
    expect(isOneBitCharacter(bits)).toBe(true);
    expect(isOneBitCharacterByTrailingOnes(bits)).toBe(true);
  });

  it('example 2: [1,1,1,0] -> false', () => {
    const bits = [1, 1, 1, 0];
    expect(isOneBitCharacter(bits)).toBe(false);
    expect(isOneBitCharacterByTrailingOnes(bits)).toBe(false);
  });

  it('single zero -> true', () => {
    const bits = [0];
    expect(isOneBitCharacter(bits)).toBe(true);
    expect(isOneBitCharacterByTrailingOnes(bits)).toBe(true);
  });

  it('two-bit then one-bit -> true', () => {
    const bits = [1, 0, 0];
    expect(isOneBitCharacter(bits)).toBe(true);
    expect(isOneBitCharacterByTrailingOnes(bits)).toBe(true);
  });

  it('two-bit then one-bit (11,0) -> true', () => {
    const bits = [1, 1, 0];
    expect(isOneBitCharacter(bits)).toBe(true); // (11)(0) last is one-bit
    expect(isOneBitCharacterByTrailingOnes(bits)).toBe(true);
  });

  it('mixed pattern ending correctly -> true', () => {
    const a = [0, 0];
    const b = [0, 1, 0, 0];
    expect(isOneBitCharacter(a)).toBe(true);
    expect(isOneBitCharacterByTrailingOnes(a)).toBe(true);
    expect(isOneBitCharacter(b)).toBe(true);
    expect(isOneBitCharacterByTrailingOnes(b)).toBe(true);
  });

  it('long valid sequence -> true', () => {
    const bits = [1, 0, 1, 0, 0];
    expect(isOneBitCharacter(bits)).toBe(true);
    expect(isOneBitCharacterByTrailingOnes(bits)).toBe(true);
  });

  it('sequence ending with standalone zero -> true', () => {
    const bits = [1, 0, 1, 1, 0];
    expect(isOneBitCharacter(bits)).toBe(true); // (10)(11)(0)
    expect(isOneBitCharacterByTrailingOnes(bits)).toBe(true);
  });
});
