/**
 * ARRAY PATTERNS - QUICK REFERENCE GUIDE
 *
 * Learn which pattern to use for different array problems
 */

// ============================================
// PATTERN 1: TWO-POINTER
// ============================================

/**
 * When to Use:
 * ✓ Remove duplicates from sorted array
 * ✓ Reverse array
 * ✓ Move specific elements (zeros, negatives) to end
 * ✓ Find two elements that satisfy condition
 * ✓ Container/trapping problems
 * ✓ Merge two sorted arrays
 *
 * Key Idea: Use two pointers moving towards each other or both forward
 * Time: Usually O(n)
 * Space: O(1) - no extra space needed
 */

/**
 * EXAMPLE 1: Remove Duplicates from Sorted Array
 * Array: [1, 1, 2, 2, 3, 4, 4, 5]
 * Result: [1, 2, 3, 4, 5]
 *
 * ┌─ writeIndex (where to place next unique)
 * │
 * [1, 1, 2, 2, 3, 4, 4, 5]
 *     ────────────────────
 *     └─ readIndex (checking for uniqueness)
 */

/**
 * EXAMPLE 2: Move Zeros to End
 * Array: [0, 1, 0, 3, 12]
 * Result: [1, 3, 12, 0, 0]
 *
 * Step 1: writeIndex fills with non-zeros
 * [1, 3, 12, |original tail|]
 *          ↑
 *        writeIndex
 *
 * Step 2: Fill rest with zeros
 * [1, 3, 12, 0, 0]
 */

/**
 * EXAMPLE 3: Container with Most Water
 * Array: [1, 8, 6, 2, 5, 4, 8, 3, 7]
 *
 * left=0, right=8 (start at both ends)
 *  ↓                        ↓
 * [1, 8, 6, 2, 5, 4, 8, 3, 7]
 *
 * Area = min(1, 7) * 8 = 8
 * Next: move left pointer (shorter height)
 *
 * left=1, right=8
 *     ↓                     ↓
 * [1, 8, 6, 2, 5, 4, 8, 3, 7]
 *
 * Area = min(8, 7) * 7 = 49  ← Maximum!
 * Continue until pointers meet
 */

// ============================================
// PATTERN 2: SLIDING WINDOW
// ============================================

/**
 * When to Use:
 * ✓ Maximum/minimum sum of subarray of size k
 * ✓ Longest substring without repeating characters
 * ✓ Find longest/smallest window with condition
 * ✓ Average of subarrays
 * ✓ Number of subarrays with condition
 *
 * Key Idea: Maintain a "window" that slides across array
 *           Remove left element, add right element as window moves
 * Time: O(n) - visit each element once or twice
 * Space: O(1) or O(k) depending on tracking
 */

/**
 * EXAMPLE 1: Maximum Sum of Subarray of Size k
 * Array: [2, 1, 5, 1, 3, 2], k=3
 *
 * [▓▓▓ 1, 3, 2]  sum = 8
 *     [▓▓▓ 3, 2]  sum = 7  (remove 2, add 1)
 *        [▓▓▓ 2]  sum = 9  (remove 1, add 3)  ← MAX
 *           [▓▓▓] sum = 6  (remove 5, add 2)
 *
 * Result: 9
 */

/**
 * EXAMPLE 2: Longest Substring Without Repeating
 * String: "abcabcbb"
 *
 * windowStart=0, windowEnd=0: "a"       length=1
 * windowStart=0, windowEnd=1: "ab"      length=2
 * windowStart=0, windowEnd=2: "abc"     length=3  ← MAX
 * windowStart=1, windowEnd=3: "bca"     length=3
 * (second 'a' found at index 3, move start to 1)
 *
 * Result: 3
 *
 * Track: last index of each character
 * When duplicate found: move start past previous occurrence
 */

// ============================================
// PATTERN 3: PREFIX SUM
// ============================================

/**
 * When to Use:
 * ✓ Range sum queries (multiple queries on same array)
 * ✓ Find subarray with given sum
 * ✓ Maximum/minimum subarray sum
 * ✓ Subarray problems with prefix/suffix
 * ✓ Count subarrays with property
 *
 * Key Idea: Pre-compute cumulative sums once
 *           Then each range query is O(1)
 * Time: O(n) preprocessing + O(1) per query
 * Space: O(n) for prefix array
 */

/**
 * EXAMPLE 1: Build and Query Range Sums
 * Array:  [1, 2, 3, 4, 5]
 * Prefix: [0, 1, 3, 6, 10, 15]
 *          ↑  ↑  ↑  ↑  ↑   ↑
 *          |  |  |  |  |   sum of all
 *          |  |  |  |  sum[0:3] = 10
 *          |  |  |  sum[0:2] = 6
 *          |  |  sum[0:1] = 3
 *          |  sum[0:0] = 1
 *          base = 0
 *
 * Query: Sum from index 1 to 3 (elements 2, 3, 4)
 * Answer = prefix[4] - prefix[1] = 10 - 1 = 9
 */

/**
 * EXAMPLE 2: Find Subarray with Given Sum
 * Array: [1, 2, 3, 4, 5], target=9
 *
 * Build cumulative sums:
 * i=0: sum=1,   seen={1:0}
 * i=1: sum=3,   seen={1:0, 3:1}
 * i=2: sum=6,   seen={1:0, 3:1, 6:2}
 * i=3: sum=10,  need 10-9=1, found at index 0!
 *              subarray from index 1 to 3 = [2,3,4] = 9
 *
 * Result: [1, 3] (indices of subarray)
 */

// ============================================
// PATTERN 4: MATRIX TRAVERSAL
// ============================================

/**
 * When to Use:
 * ✓ Spiral traversal (clockwise from outside)
 * ✓ Layer-by-layer traversal
 * ✓ Find element in sorted 2D matrix
 * ✓ Rotate matrix
 * ✓ Transpose matrix
 *
 * Key Idea: Track boundaries (top, bottom, left, right)
 *           Traverse one direction at a time
 *           Shrink boundaries after each direction
 * Time: O(m*n) - visit each cell once
 * Space: O(1) excluding output
 */

/**
 * EXAMPLE 1: Spiral Traversal
 * Matrix:
 * 1  2  3
 * 4  5  6
 * 7  8  9
 *
 * Boundaries: top=0, bottom=2, left=0, right=2
 *
 * Step 1: Go RIGHT along top row
 * [1, 2, 3]
 * top++  → top=1
 *
 * Step 2: Go DOWN along right column
 * [6]
 * [9]
 * right--  → right=1
 *
 * Step 3: Go LEFT along bottom row
 * [8, 7]
 * bottom--  → bottom=1
 *
 * Step 4: Go UP along left column
 * [4]
 * left++  → left=1
 *
 * Step 5: Middle element (if exists)
 * [5]
 *
 * Result: [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

/**
 * EXAMPLE 2: Find in Sorted 2D Matrix
 * Matrix (rows & columns sorted):
 * 1  4  7
 * 2  5  8
 * 3  6  9
 *
 * Start at top-right: (0, 2) = 7
 * Target: 5
 *
 * 7 > 5: move LEFT
 * (0, 1) = 4
 *
 * 4 < 5: move DOWN
 * (1, 1) = 5 ← FOUND!
 *
 * Time: O(m + n) - at most m rows down + n columns left
 */

// ============================================
// PATTERN 5: SORTING & SEARCHING
// ============================================

/**
 * When to Use:
 * ✓ Sort array for easier processing
 * ✓ Binary search on sorted array
 * ✓ Three-way partitioning (colors, etc.)
 * ✓ Merge sorted arrays
 *
 * Key Idea: Sort first to enable O(log n) searches
 *           or optimize multi-pointer operations
 * Time: O(n log n) for sorting, O(log n) for binary search
 * Space: Depends on sorting algorithm
 */

/**
 * EXAMPLE: Sort then Two-Pointer
 * Problem: Find two numbers that sum to target
 * Array: [3, 2, 4, 1, 5], target=7
 *
 * Step 1: Sort
 * [1, 2, 3, 4, 5]
 *
 * Step 2: Two-pointer
 * left=0, right=4: 1+5=6 (too small, move left++)
 * left=1, right=4: 2+5=7 ← FOUND!
 *
 * Result: indices of 2 and 5 in original array
 */

// ============================================
// PATTERN 6: HASH MAP / FREQUENCY
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

/**
 * EXAMPLE 1: Two Sum with Hash Map
 * Array: [2, 7, 11, 15], target=9
 *
 * i=0: num=2, need=9-2=7, seen={}, add 2
 * i=1: num=7, need=9-7=2, found 2 in seen!
 *      Result: indices [0, 1]
 *
 * Time: O(n) instead of O(n²) brute force!
 */

/**
 * EXAMPLE 2: Longest Substring Without Repeating
 * String: "abcabcbb"
 *
 * charIndex = {a: 0, b: 1, c: 2}
 *
 * At index 3: char='a', already in map at 0
 * Move windowStart to 0+1=1
 * charIndex = {a: 3, b: 1, c: 2}
 *
 * Result: longest window length = 3
 */

// ============================================
// DECISION TREE: WHICH PATTERN?
// ============================================

/**
 * START: What's the problem?
 * │
 * ├─ Need to track pairs/opposing elements?
 * │  └─→ TWO-POINTER
 * │
 * ├─ Need to maintain a continuous window?
 * │  └─→ SLIDING WINDOW
 * │
 * ├─ Need to query ranges repeatedly?
 * │  └─→ PREFIX SUM
 * │
 * ├─ Working with 2D array/matrix?
 * │  └─→ MATRIX TRAVERSAL
 * │
 * ├─ Need exact matches or frequency?
 * │  └─→ HASH MAP
 * │
 * └─ Need to look up elements fast?
 *    └─→ SORTING + BINARY SEARCH
 */

// ============================================
// CHEAT SHEET: Problem Examples
// ============================================

/**
 * Problem: Remove Duplicates
 * Pattern: TWO-POINTER
 *
 * Problem: Maximum Sum Subarray of Size k
 * Pattern: SLIDING WINDOW
 *
 * Problem: Range Sum Query
 * Pattern: PREFIX SUM
 *
 * Problem: Spiral Matrix Traversal
 * Pattern: MATRIX TRAVERSAL
 *
 * Problem: Two Sum
 * Pattern: HASH MAP or SORTING + TWO-POINTER
 *
 * Problem: Container with Most Water
 * Pattern: TWO-POINTER
 *
 * Problem: Longest Substring Without Repeating
 * Pattern: SLIDING WINDOW + HASH MAP
 *
 * Problem: Subarray Sum Equals K
 * Pattern: PREFIX SUM + HASH MAP
 *
 * Problem: Rotate Matrix
 * Pattern: MATRIX TRAVERSAL
 *
 * Problem: Merge Sorted Arrays
 * Pattern: TWO-POINTER
 *
 * Problem: Trapping Rain Water
 * Pattern: TWO-POINTER or PREFIX SUM
 */

export {};
