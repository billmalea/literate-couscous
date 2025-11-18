import { groupAnagrams, groupAnagramsByCount } from '../../src/leetcode/medium/group-anagrams';

function normalize(groups: string[][]): string[][] {
  return groups.map(g => g.slice().sort()).sort((a, b) => a[0].localeCompare(b[0]));
}

describe('Group Anagrams (LeetCode 49)', () => {
  const cases: string[][] = [
    ['eat','tea','tan','ate','nat','bat'],
    [''],
    ['a'],
    ['ab', 'ba', 'abc', 'cab', 'bca', 'zzz', 'zz', 'z'],
    ['ddddddddddg','dgggggggggg'],
  ];

  for (const strs of cases) {
    it(`sorted-key groups correctly for ${JSON.stringify(strs)}`, () => {
      const a = normalize(groupAnagrams(strs));
      const b = normalize(groupAnagramsByCount(strs));
      expect(a).toEqual(b);
    });
  }

  it('matches expected grouping on canonical example', () => {
    const input = ['eat','tea','tan','ate','nat','bat'];
    const result = normalize(groupAnagrams(input));
    const expected = normalize([
      ['eat','tea','ate'],
      ['tan','nat'],
      ['bat'],
    ]);
    expect(result).toEqual(expected);
  });
});
