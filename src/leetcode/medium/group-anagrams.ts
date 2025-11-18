/**
 * Group Anagrams (LeetCode 49)
 * ----------------------------
 * Given an array of strings, group the anagrams together.
 *
 * DUMB ANALOGY: Supermarket barcode for words
 * - Words that are anagrams are like the same product in different boxes.
 * - We need a barcode that ignores order of letters so matching products land on the same shelf.
 * - Two barcodes you can use:
 *   1) Sort the letters: 'eat' → 'aet', 'tea' → 'aet' → same shelf
 *   2) Letter counts as a 26-length code: count of 'a'..'z' acts like a product barcode
 *
 * Time:
 * - Sorted key: O(n * L log L) where L is max word length
 * - Count key:  O(n * (L + 26)) ≈ O(n * L) for lowercase a–z
 * Space: O(n * L) to store groups
 */

// Approach 1: Sorted-key (simple and reliable)
export function groupAnagrams(strs: string[]): string[][] {
  const groups = new Map<string, string[]>();
  for (const s of strs) {
    const key = s.split('').sort().join('');
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(s);
  }
  return Array.from(groups.values());
}

// Approach 2: Frequency-key (faster for long strings, fixed alphabet)
export function groupAnagramsByCount(strs: string[]): string[][] {
  const groups = new Map<string, string[]>();
  const base = 'a'.charCodeAt(0);
  for (const s of strs) {
    const counts = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
      counts[s.charCodeAt(i) - base]++;
    }
    // Build a stable key like '1#0#0#2#...' to avoid ambiguity
    const key = counts.join('#');
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(s);
  }
  return Array.from(groups.values());
}
