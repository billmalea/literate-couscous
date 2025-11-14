/**
 * ARRAYS - ADVANCED MANIPULATION AND PATTERNS
 * 
 * Common patterns and techniques for solving array problems efficiently.
 */

/**
 * TWO-POINTER PATTERN
 * 
 * DUMB EXPLANATION:
 * Imagine you have a sorted list and you're looking for two numbers.
 * Instead of checking every pair (slow!), you use two pointers:
 * - One starts at the beginning (slow pointer)
 * - One starts at the end (fast pointer)
 * - Move them towards each other until they meet
 * This is much faster!
 */

/**
 * TWO-POINTER: Remove duplicates from sorted array
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * 
 * The trick: Use one pointer to write unique values, another to read
 */
export function removeDuplicatesSorted(arr: number[]): number[] {
  if (arr.length === 0) return arr;

  let writeIndex = 0; // Where we write the next unique element

  for (let readIndex = 1; readIndex < arr.length; readIndex++) {
    // If current element is different from last unique element
    if (arr[readIndex] !== arr[writeIndex]) {
      writeIndex++;
      arr[writeIndex] = arr[readIndex];
    }
  }

  // Return only the unique portion
  return arr.slice(0, writeIndex + 1);
}

/**
 * EXAMPLE:
 * removeDuplicatesSorted([1, 1, 2, 2, 3, 4, 4, 5])
 * Returns: [1, 2, 3, 4, 5]
 * 
 * How it works:
 * - writeIndex=0 (pointing to 1), readIndex=1 (pointing to 1)
 *   1 == 1, so skip
 * - readIndex=2 (pointing to 2)
 *   2 != 1, so writeIndex++, arr[1] = 2
 * - readIndex=3 (pointing to 2)
 *   2 == 2, so skip
 * - And so on...
 */

/**
 * TWO-POINTER: Move zeros to end, maintain order of non-zeros
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
export function moveZeroes(arr: number[]): number[] {
  let writeIndex = 0;

  // First pass: move all non-zeros to the front
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[writeIndex] = arr[i];
      writeIndex++;
    }
  }

  // Second pass: fill remaining with zeros
  while (writeIndex < arr.length) {
    arr[writeIndex] = 0;
    writeIndex++;
  }

  return arr;
}

/**
 * EXAMPLE:
 * moveZeroes([0, 1, 0, 3, 12])
 * Returns: [1, 3, 12, 0, 0]
 */

/**
 * TWO-POINTER: Container with most water
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * 
 * PROBLEM: Given array of heights, find two lines that can hold most water.
 * Water area = min(height[left], height[right]) * (right - left)
 */
export function maxArea(heights: number[]): number {
  let left = 0;
  let right = heights.length - 1;
  let maxWater = 0;

  while (left < right) {
    // Calculate area with current pair
    const width = right - left;
    const height = Math.min(heights[left], heights[right]);
    const area = width * height;

    maxWater = Math.max(maxWater, area);

    // Move the pointer pointing to shorter line inward
    // Why? If we move the taller line, area can only decrease
    // Moving shorter line might find a taller line
    if (heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
}

/**
 * EXAMPLE:
 * maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])
 * Returns: 49 (between heights 8 and 7, width = 7, area = 7 * 7 = 49)
 */

// ============================================
// SLIDING WINDOW PATTERN
// ============================================

/**
 * DUMB EXPLANATION:
 * Imagine a window sliding across a train:
 * [1, 2, 3, 4, 5, 6, 7, 8, 9]
 * [▓▓▓]  <- Window of size 3
 *   [▓▓▓]  <- Slide right
 *     [▓▓▓]  <- Slide right again
 * 
 * Instead of recalculating for each window, you:
 * - Remove element leaving from the left
 * - Add element entering from the right
 * - Much faster!
 */

/**
 * SLIDING WINDOW: Maximum sum of subarray of size k
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
export function maxSumSubarray(arr: number[], k: number): number {
  if (arr.length < k || k <= 0) return 0;

  // Calculate sum of first window
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  let maxSum = windowSum;

  // Slide the window
  for (let i = k; i < arr.length; i++) {
    // Remove leftmost element of previous window, add new element on right
    windowSum = windowSum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

/**
 * EXAMPLE:
 * maxSumSubarray([2, 1, 5, 1, 3, 2], 3)
 * Windows: [2,1,5]=8, [1,5,1]=7, [5,1,3]=9, [1,3,2]=6
 * Returns: 9
 */

/**
 * SLIDING WINDOW: Longest substring without repeating characters
 * Time Complexity: O(n)
 * Space Complexity: O(min(n, charset))
 */
export function longestNonRepeatingSubstring(str: string): number {
  const charIndex: Map<string, number> = new Map();
  let maxLength = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const char = str[windowEnd];

    // If character seen before and within current window
    if (charIndex.has(char) && charIndex.get(char)! >= windowStart) {
      // Move window start to right of the previous occurrence
      windowStart = charIndex.get(char)! + 1;
    }

    // Update character's latest position
    charIndex.set(char, windowEnd);

    // Update max length
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
}

/**
 * EXAMPLE:
 * longestNonRepeatingSubstring("abcabcbb")
 * Returns: 3 (substring "abc")
 */

// ============================================
// PREFIX SUM PATTERN
// ============================================

/**
 * DUMB EXPLANATION:
 * Instead of summing every time, calculate cumulative sums once:
 * Original: [1, 2, 3, 4, 5]
 * Prefix:   [1, 3, 6, 10, 15]
 *            ^  ^  ^   ^   ^
 *            |  |  |   |   sum of all
 *            |  |  |   sum of first 4
 *            |  |  sum of first 3
 *            |  sum of first 2
 *            sum of first 1
 * 
 * Now you can answer "sum from index i to j" in O(1)!
 */

/**
 * Build prefix sum array
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
export function buildPrefixSum(arr: number[]): number[] {
  const prefix = [0];

  for (let i = 0; i < arr.length; i++) {
    prefix.push(prefix[prefix.length - 1] + arr[i]);
  }

  return prefix;
}

/**
 * EXAMPLE:
 * buildPrefixSum([1, 2, 3, 4, 5])
 * Returns: [0, 1, 3, 6, 10, 15]
 */

/**
 * Query range sum using prefix sum array
 * Time Complexity: O(1) after preprocessing
 */
export function getRangeSum(
  prefix: number[],
  left: number,
  right: number
): number {
  // Sum from index left to right = prefix[right+1] - prefix[left]
  return prefix[right + 1] - prefix[left];
}

/**
 * EXAMPLE:
 * Given prefix = [0, 1, 3, 6, 10, 15]
 * getRangeSum(prefix, 1, 3) returns 2 + 3 + 4 = 9
 * (prefix[4] - prefix[1] = 10 - 1 = 9)
 */

/**
 * Find contiguous subarray with given sum
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
export function findSubarrayWithSum(
  arr: number[],
  target: number
): [number, number] | null {
  const sumToIndex: Map<number, number> = new Map();
  sumToIndex.set(0, -1); // Base case: sum 0 at index -1

  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    // If we've seen this sum before, elements between are our answer
    if (sumToIndex.has(currentSum - target)) {
      const startIndex = sumToIndex.get(currentSum - target)! + 1;
      return [startIndex, i];
    }

    // Store first occurrence of this sum
    if (!sumToIndex.has(currentSum)) {
      sumToIndex.set(currentSum, i);
    }
  }

  return null; // Not found
}

/**
 * EXAMPLE:
 * findSubarrayWithSum([1, 2, 3, 4, 5], 9)
 * Returns: [1, 3] (subarray [2, 3, 4])
 */

// ============================================
// MATRIX TRAVERSAL PATTERNS
// ============================================

/**
 * Traverse matrix in spiral order (clockwise from outside to inside)
 * Time Complexity: O(m*n) where m=rows, n=cols
 * Space Complexity: O(1) if not counting output
 */
export function spiralTraversal(matrix: number[][]): number[] {
  if (matrix.length === 0) return [];

  const result: number[] = [];
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    // Traverse right along top row
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;

    // Traverse down along right column
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;

    // Traverse left along bottom row (if exists)
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
    }

    // Traverse up along left column (if exists)
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
    }
  }

  return result;
}

/**
 * EXAMPLE:
 * spiralTraversal([[1,2,3],[4,5,6],[7,8,9]])
 * Returns: [1,2,3,6,9,8,7,4,5]
 */

/**
 * Find element in 2D sorted matrix (sorted rows and columns)
 * Time Complexity: O(m + n)
 * Space Complexity: O(1)
 */
export function findInSortedMatrix(
  matrix: number[][],
  target: number
): boolean {
  if (matrix.length === 0) return false;

  // Start from top-right corner (or bottom-left)
  let row = 0;
  let col = matrix[0].length - 1;

  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] === target) {
      return true;
    } else if (matrix[row][col] > target) {
      // Current value too large, move left
      col--;
    } else {
      // Current value too small, move down
      row++;
    }
  }

  return false;
}

/**
 * EXAMPLE:
 * findInSortedMatrix([[1,4,7],[2,5,8],[3,6,9]], 5)
 * Returns: true
 */
