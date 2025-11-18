/**
 * SLIDING WINDOW PATTERN
 * 
 * The sliding window technique maintains a "window" of elements and slides it
 * across the data structure (usually an array or string). As the window moves,
 * elements are added on one side and removed from the other.
 * 
 * WHEN TO USE:
 * ✓ Finding subarrays/substrings with specific properties
 * ✓ Maximum/minimum of all subarrays of size k
 * ✓ Longest/shortest substring with condition
 * ✓ Problems involving contiguous sequences
 * ✓ Optimization: O(n²) → O(n)
 * 
 * TIME COMPLEXITY: Usually O(n)
 * SPACE COMPLEXITY: Usually O(1) or O(k)
 */

// ============================================
// PATTERN 1: FIXED WINDOW SIZE
// ============================================

/**
 * Window size is constant, slide one element at a time
 * Use when: Given a specific window size k
 */

/**
 * PROBLEM 1: Maximum Sum Subarray of Size K
 * Find maximum sum of any contiguous subarray of size k
 * 
 * Example:
 * Input: arr = [2, 1, 5, 1, 3, 2], k = 3
 * Output: 9 (subarray [5, 1, 3])
 */
export function maxSumSubarray(arr: number[], k: number): number {
  if (arr.length < k || k <= 0) return 0;

  // Calculate sum of first window
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  let maxSum = windowSum;

  // Slide window: remove left element, add right element
  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

/**
 * PROBLEM 2: Average of All Subarrays of Size K
 * Find average of each contiguous subarray of size k
 * 
 * Example:
 * Input: arr = [1, 3, 2, 6, -1, 4, 1, 8, 2], k = 5
 * Output: [2.2, 2.8, 2.4, 3.6, 2.8]
 */
export function averageOfSubarrays(arr: number[], k: number): number[] {
  const result: number[] = [];
  let windowSum = 0;

  for (let i = 0; i < arr.length; i++) {
    windowSum += arr[i];

    if (i >= k - 1) {
      result.push(windowSum / k);
      windowSum -= arr[i - k + 1];
    }
  }

  return result;
}

/**
 * PROBLEM 3: Maximum of All Subarrays of Size K
 * Find maximum element in each window of size k
 * 
 * Example:
 * Input: arr = [1, 3, -1, -3, 5, 3, 6, 7], k = 3
 * Output: [3, 3, 5, 5, 6, 7]
 */
export function maxSlidingWindow(arr: number[], k: number): number[] {
  if (arr.length === 0 || k === 0) return [];

  const result: number[] = [];
  const deque: number[] = []; // Stores indices

  for (let i = 0; i < arr.length; i++) {
    // Remove elements outside current window
    while (deque.length > 0 && deque[0] <= i - k) {
      deque.shift();
    }

    // Remove smaller elements (they won't be max)
    while (deque.length > 0 && arr[deque[deque.length - 1]] < arr[i]) {
      deque.pop();
    }

    deque.push(i);

    // Add to result when window is complete
    if (i >= k - 1) {
      result.push(arr[deque[0]]);
    }
  }

  return result;
}

// ============================================
// PATTERN 2: VARIABLE WINDOW SIZE
// ============================================

/**
 * Window size changes based on conditions
 * Use when: Finding longest/shortest substring with property
 */

/**
 * PROBLEM 4: Longest Substring Without Repeating Characters
 * Find length of longest substring without repeating characters
 * 
 * Example:
 * Input: s = "abcabcbb"
 * Output: 3 (substring "abc")
 */
export function lengthOfLongestSubstring(s: string): number {
  const charIndex = new Map<string, number>();
  let maxLength = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    const char = s[windowEnd];

    // If char seen before and within window, shrink from left
    if (charIndex.has(char) && charIndex.get(char)! >= windowStart) {
      windowStart = charIndex.get(char)! + 1;
    }

    charIndex.set(char, windowEnd);
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
}

/**
 * PROBLEM 5: Longest Substring with K Distinct Characters
 * Find length of longest substring with at most k distinct characters
 * 
 * Example:
 * Input: s = "araaci", k = 2
 * Output: 4 (substring "araa")
 */
export function longestSubstringKDistinct(s: string, k: number): number {
  const charFreq = new Map<string, number>();
  let maxLength = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    const char = s[windowEnd];
    charFreq.set(char, (charFreq.get(char) || 0) + 1);

    // Shrink window until we have k distinct characters
    while (charFreq.size > k) {
      const leftChar = s[windowStart];
      charFreq.set(leftChar, charFreq.get(leftChar)! - 1);
      if (charFreq.get(leftChar) === 0) {
        charFreq.delete(leftChar);
      }
      windowStart++;
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
}

/**
 * PROBLEM 6: Minimum Window Substring
 * Find minimum window in s that contains all characters of t
 * 
 * Example:
 * Input: s = "ADOBECODEBANC", t = "ABC"
 * Output: "BANC"
 */
export function minWindow(s: string, t: string): string {
  if (s.length === 0 || t.length === 0) return '';

  // Count characters in t
  const targetFreq = new Map<string, number>();
  for (const char of t) {
    targetFreq.set(char, (targetFreq.get(char) || 0) + 1);
  }

  let required = targetFreq.size;
  let formed = 0;
  const windowCounts = new Map<string, number>();

  let left = 0;
  let minLen = Infinity;
  let minLeft = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    windowCounts.set(char, (windowCounts.get(char) || 0) + 1);

    if (targetFreq.has(char) && windowCounts.get(char) === targetFreq.get(char)) {
      formed++;
    }

    // Shrink window while valid
    while (formed === required && left <= right) {
      // Update result
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        minLeft = left;
      }

      // Remove left character
      const leftChar = s[left];
      windowCounts.set(leftChar, windowCounts.get(leftChar)! - 1);
      if (targetFreq.has(leftChar) && windowCounts.get(leftChar)! < targetFreq.get(leftChar)!) {
        formed--;
      }
      left++;
    }
  }

  return minLen === Infinity ? '' : s.substring(minLeft, minLeft + minLen);
}

/**
 * PROBLEM 7: Fruits Into Baskets (Longest Subarray with 2 Types)
 * Pick maximum number of fruits with at most 2 types
 * 
 * Example:
 * Input: fruits = [1, 2, 1, 2, 3]
 * Output: 4 (fruits [1, 2, 1, 2])
 */
export function totalFruit(fruits: number[]): number {
  const fruitCount = new Map<number, number>();
  let maxFruits = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
    const fruit = fruits[windowEnd];
    fruitCount.set(fruit, (fruitCount.get(fruit) || 0) + 1);

    // Shrink window if more than 2 types
    while (fruitCount.size > 2) {
      const leftFruit = fruits[windowStart];
      fruitCount.set(leftFruit, fruitCount.get(leftFruit)! - 1);
      if (fruitCount.get(leftFruit) === 0) {
        fruitCount.delete(leftFruit);
      }
      windowStart++;
    }

    maxFruits = Math.max(maxFruits, windowEnd - windowStart + 1);
  }

  return maxFruits;
}

// ============================================
// PATTERN 3: SUBSTRING MATCHING
// ============================================

/**
 * Find all occurrences of pattern in string
 * Use when: Anagrams, permutations, pattern matching
 */

/**
 * PROBLEM 8: Find All Anagrams in String
 * Find all start indices of anagrams of p in s
 * 
 * Example:
 * Input: s = "cbaebabacd", p = "abc"
 * Output: [0, 6] (anagrams "cba" and "bac")
 */
export function findAnagrams(s: string, p: string): number[] {
  const result: number[] = [];
  if (s.length < p.length) return result;

  // Count characters in p
  const pCount = new Map<string, number>();
  for (const char of p) {
    pCount.set(char, (pCount.get(char) || 0) + 1);
  }

  const windowCount = new Map<string, number>();
  const windowSize = p.length;

  for (let i = 0; i < s.length; i++) {
    // Add right character
    const char = s[i];
    windowCount.set(char, (windowCount.get(char) || 0) + 1);

    // Remove left character if window too large
    if (i >= windowSize) {
      const leftChar = s[i - windowSize];
      windowCount.set(leftChar, windowCount.get(leftChar)! - 1);
      if (windowCount.get(leftChar) === 0) {
        windowCount.delete(leftChar);
      }
    }

    // Check if current window is anagram
    if (i >= windowSize - 1 && mapsEqual(pCount, windowCount)) {
      result.push(i - windowSize + 1);
    }
  }

  return result;
}

function mapsEqual(map1: Map<string, number>, map2: Map<string, number>): boolean {
  if (map1.size !== map2.size) return false;
  for (const [key, val] of map1) {
    if (map2.get(key) !== val) return false;
  }
  return true;
}

/**
 * PROBLEM 9: Permutation in String
 * Check if s2 contains permutation of s1
 * 
 * Example:
 * Input: s1 = "ab", s2 = "eidbaooo"
 * Output: true (s2 contains "ba")
 */
export function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) return false;

  const s1Count = new Array(26).fill(0);
  const s2Count = new Array(26).fill(0);
  const aCode = 'a'.charCodeAt(0);

  for (let i = 0; i < s1.length; i++) {
    s1Count[s1.charCodeAt(i) - aCode]++;
    s2Count[s2.charCodeAt(i) - aCode]++;
  }

  for (let i = 0; i < s2.length - s1.length; i++) {
    if (arraysEqual(s1Count, s2Count)) return true;

    // Slide window
    s2Count[s2.charCodeAt(i + s1.length) - aCode]++;
    s2Count[s2.charCodeAt(i) - aCode]--;
  }

  return arraysEqual(s1Count, s2Count);
}

function arraysEqual(arr1: number[], arr2: number[]): boolean {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

// ============================================
// COMPLEXITY ANALYSIS
// ============================================

/**
 * SLIDING WINDOW TIME COMPLEXITY:
 * - Fixed window: O(n) - visit each element once
 * - Variable window: O(n) - each element enters/exits window once
 * - With character counting: O(n) - constant time operations
 * 
 * SLIDING WINDOW SPACE COMPLEXITY:
 * - Fixed window: O(1) - only store window sum/state
 * - Variable window: O(k) - k is alphabet size or distinct elements
 * - With frequency map: O(k) where k ≤ 26 for lowercase letters
 * 
 * WHEN TO USE SLIDING WINDOW:
 * ✓ Finding subarray/substring with property
 * ✓ Maximum/minimum of fixed-size subarrays
 * ✓ Longest/shortest substring meeting criteria
 * ✓ Contiguous sequence problems
 * ✓ Can optimize from O(n²) to O(n)
 * 
 * WINDOW TYPES:
 * 1. Fixed size: Window size constant (max sum of size k)
 * 2. Variable expanding: Grow until condition met
 * 3. Variable shrinking: Shrink when condition violated
 * 4. Pattern matching: Match specific pattern/anagram
 */

/**
 * TIPS & TRICKS:
 * 
 * 1. Use hash map/array to track window state
 * 2. Expand window by moving right pointer
 * 3. Shrink window by moving left pointer
 * 4. Update answer before/after expanding/shrinking
 * 5. For strings, use char frequency or index tracking
 * 6. For anagrams, compare frequency maps
 * 7. Watch for empty inputs and edge cases
 */
