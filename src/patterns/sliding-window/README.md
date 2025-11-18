# Sliding Window Pattern

## Overview

The **sliding window technique** maintains a contiguous subset (window) of elements and slides it across the data structure. As the window moves, elements are added on one side and removed from the other, allowing efficient processing of subarrays or substrings.

## When to Use

✅ **Use sliding window when:**
- Finding subarrays/substrings with specific properties
- Maximum/minimum values in all subarrays of size k
- Longest/shortest substring meeting criteria
- Problems involve contiguous sequences
- Can optimize from O(n²) to O(n)

❌ **Don't use when:**
- Elements don't need to be contiguous
- Need to compare all pairs
- Window size keeps changing dramatically

## Three Window Types

### 1. Fixed Window Size
Window size is constant, slide one position at a time.

```typescript
let windowSum = 0;

// Initialize first window
for (let i = 0; i < k; i++) {
  windowSum += arr[i];
}

// Slide window
for (let i = k; i < arr.length; i++) {
  windowSum = windowSum - arr[i - k] + arr[i];
  // Process window
}
```

**Use for:** Max sum of size k, Average of subarrays

### 2. Variable Window (Expanding/Shrinking)
Window size changes based on conditions.

```typescript
let windowStart = 0;
let maxLength = 0;

for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
  // Expand window
  addToWindow(arr[windowEnd]);
  
  // Shrink window while condition violated
  while (conditionViolated()) {
    removeFromWindow(arr[windowStart]);
    windowStart++;
  }
  
  maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
}
```

**Use for:** Longest substring with k distinct chars, Min window substring

### 3. Pattern Matching
Find all occurrences of a pattern (like anagrams).

```typescript
const patternFreq = buildFrequencyMap(pattern);
const windowFreq = new Map();

for (let i = 0; i < str.length; i++) {
  // Add character to window
  windowFreq.set(str[i], (windowFreq.get(str[i]) || 0) + 1);
  
  // Remove if window too large
  if (i >= pattern.length) {
    const leftChar = str[i - pattern.length];
    windowFreq.set(leftChar, windowFreq.get(leftChar) - 1);
  }
  
  // Check if window matches pattern
  if (mapsEqual(patternFreq, windowFreq)) {
    // Found match
  }
}
```

**Use for:** Find anagrams, Permutation in string

## Common Problems

| Problem | Type | Difficulty | Time | Space |
|---------|------|------------|------|-------|
| Max Sum of Size K | Fixed | Easy | O(n) | O(1) |
| Average of Subarrays | Fixed | Easy | O(n) | O(1) |
| Sliding Window Maximum | Fixed | Hard | O(n) | O(k) |
| Longest Substring No Repeat | Variable | Medium | O(n) | O(k) |
| Longest K Distinct Chars | Variable | Medium | O(n) | O(k) |
| Min Window Substring | Variable | Hard | O(n) | O(k) |
| Fruits Into Baskets | Variable | Medium | O(n) | O(1) |
| Find All Anagrams | Pattern | Medium | O(n) | O(k) |
| Permutation in String | Pattern | Medium | O(n) | O(k) |

## Time & Space Complexity

**Time Complexity:**
- Fixed window: O(n)
- Variable window: O(n) - each element enters/exits once
- Pattern matching: O(n)

**Space Complexity:**
- Fixed window: O(1)
- Variable window: O(k) where k = distinct elements
- Pattern matching: O(k) where k = alphabet size

## Implementation Tips

1. **Track window state** with sum, frequency map, or condition
2. **Expand right** by incrementing right pointer
3. **Shrink left** when condition violated
4. **Update answer** at right time (after expand or before shrink)
5. **Use hash map** for character frequencies
6. **Watch boundaries** - window size calculation

## Example Walkthrough

### Problem: Longest Substring Without Repeating

```typescript
s = "abcabcbb"

windowStart=0, windowEnd=0: "a"       max=1
charIndex = {a:0}

windowStart=0, windowEnd=1: "ab"      max=2
charIndex = {a:0, b:1}

windowStart=0, windowEnd=2: "abc"     max=3
charIndex = {a:0, b:1, c:2}

windowStart=0, windowEnd=3: "abca"
Found 'a' at index 0 within window
Move windowStart to 0+1=1: "bca"      max=3
charIndex = {a:3, b:1, c:2}

Continue...
Result: 3
```

## Visual Examples

### Fixed Window (Max Sum of Size 3)
```
arr = [2, 1, 5, 1, 3, 2]

[2, 1, 5] 1, 3, 2     sum=8, max=8
   [1, 5, 1] 3, 2     sum=7, max=8
      [5, 1, 3] 2     sum=9, max=9  ← Maximum
         [1, 3, 2]    sum=6, max=9

Result: 9
```

### Variable Window (Longest K Distinct)
```
s = "araaci", k = 2

windowStart=0, windowEnd=0: "a"
freq={a:1}, distinct=1, len=1

windowStart=0, windowEnd=1: "ar"
freq={a:1,r:1}, distinct=2, len=2

windowStart=0, windowEnd=2: "ara"
freq={a:2,r:1}, distinct=2, len=3

windowStart=0, windowEnd=3: "araa"
freq={a:3,r:1}, distinct=2, len=4  ← Maximum

windowStart=0, windowEnd=4: "araac"
freq={a:3,r:1,c:1}, distinct=3 > k
Shrink: remove 'a', windowStart=1
```

## Pattern Decision Tree

```
START: Need contiguous subarray/substring?
│
├─ Fixed size given?
│  └─ YES → FIXED WINDOW
│      Examples: Max sum of k, Average of k
│
├─ Find longest/shortest?
│  └─ YES → VARIABLE WINDOW
│      ├─ Grow until condition
│      └─ Shrink when violated
│
└─ Match specific pattern?
   └─ YES → PATTERN MATCHING
       Examples: Anagrams, Permutations
```

## Practice Problems

### Easy
1. ✅ Maximum Sum Subarray of Size K (Not on LeetCode)
2. ✅ Average of All Subarrays of Size K (Not on LeetCode)
3. ⬜ Contains Duplicate II (LeetCode 219)

### Medium
4. ✅ Longest Substring Without Repeating (LeetCode 3)
5. ✅ Fruits Into Baskets (LeetCode 904)
6. ✅ Find All Anagrams (LeetCode 438)
7. ✅ Permutation in String (LeetCode 567)
8. ⬜ Longest Repeating Character Replacement (LeetCode 424)

### Hard
9. ✅ Sliding Window Maximum (LeetCode 239)
10. ✅ Minimum Window Substring (LeetCode 76)

## Common Pitfalls

1. **Off-by-one errors** in window size calculation
2. **Forgetting to update** frequency map when shrinking
3. **Not checking** if window is fully formed before processing
4. **Comparing maps** incorrectly (check size and all keys)
5. **Edge cases**: Empty input, k > array length

## Optimization Tricks

1. **Use deque** for sliding window maximum
2. **Use array** instead of map for limited character set (a-z)
3. **Track formed count** instead of comparing entire maps
4. **Early termination** when answer found
5. **Prefix sum** for range sum queries in fixed window

## Related Patterns

- **Two-Pointer**: Similar but pointers can move independently
- **Fast & Slow Pointers**: Special case for cycle detection
- **Prefix Sum**: Can combine for range queries

## Files in This Module

- `sliding-window.ts` - Complete implementations
- `sliding-window.test.ts` - Test cases
- `README.md` - This file

## Next Steps

After mastering sliding window:
1. ✅ Practice all medium problems
2. ➡️ Combine with **Two-Pointer** for advanced problems
3. ➡️ Learn **Dynamic Programming** (overlapping subproblems)
4. ➡️ Apply to **String** manipulation problems
