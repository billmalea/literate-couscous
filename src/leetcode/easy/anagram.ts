/** Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

/ Example 1:
/* Input: s = "anagram", t = "nagaram"

/ Output: true

/ Example 2:
/* Input: s = "rat", t = "car"  



// ============================================
// PATTERN 2: HASH MAP
// ============================================
/**
 * When to Use:
 * ✓ Count occurrences (duplicates, frequencies)
 * ✓ Two-sum variant problems
 * ✓ Longest substring with conditions
 * ✓ Anagram detection
 * ✓ Character position tracking
 *  
 * Key Idea: Trade space for time
 *           Store frequency/position for O(1) lookup
 * Time: O(n)
 * Space: O(k) where k = number of unique elements
 */

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const charCount: Record<string, number> = {};

  for (const char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  for (const char of t) {
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }
  return true;
}

//in this example we use a single hash map to count characters in s and decrement for t
//if any character count goes below zero or a character in t is not found in s, return false
//if we finish checking t without issues, return true
function example2(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const countS: Map<string, number> = new Map();

  for (let i = 0; i < s.length; i++) {
    const count = countS.get(s[i]) || 0;

    countS.set(s[i], count + 1);
  }
  for (let i = 0; i < t.length; i++) {
    const count = countS.get(t[i]) || 0;
    countS.set(t[i], count - 1);

    if (countS.get(t[i])! < 0) {
      return false;
    }
  }

  return true;
}
