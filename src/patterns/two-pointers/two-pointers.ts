/**
 * TWO-POINTER PATTERN
 * 
 * The two-pointer technique uses two pointers to iterate through an array or list,
 * typically starting from different positions and moving towards each other or
 * both moving in the same direction.
 * 
 * WHEN TO USE:
 * ✓ Sorted arrays or lists
 * ✓ Finding pairs that satisfy a condition
 * ✓ Removing duplicates
 * ✓ Moving specific elements to end
 * ✓ Reverse operations
 * ✓ Container/trapping problems
 * 
 * TIME COMPLEXITY: Usually O(n)
 * SPACE COMPLEXITY: Usually O(1)
 */

// ============================================
// PATTERN 1: OPPOSITE DIRECTION (Converging)
// ============================================

/**
 * Two pointers start from opposite ends and move towards each other
 * Use when: Finding pairs, palindrome check, container problems
 */

/**
 * PROBLEM 1: Two Sum II - Input array is sorted
 * Find two numbers that add up to target
 * 
 * Example:
 * Input: nums = [2, 7, 11, 15], target = 9
 * Output: [0, 1]
 */
export function twoSumSorted(nums: number[], target: number): [number, number] | null {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];

    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++; // Need larger sum
    } else {
      right--; // Need smaller sum
    }
  }

  return null;
}

/**
 * PROBLEM 2: Valid Palindrome
 * Check if string is palindrome (ignoring non-alphanumeric, case-insensitive)
 * 
 * Example:
 * Input: "A man, a plan, a canal: Panama"
 * Output: true
 */
export function isPalindrome(s: string): boolean {
  const clean = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  let left = 0;
  let right = clean.length - 1;

  while (left < right) {
    if (clean[left] !== clean[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

/**
 * PROBLEM 3: Container With Most Water
 * Find two lines that together with x-axis contain the most water
 * 
 * Example:
 * Input: height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
 * Output: 49
 */
export function maxArea(heights: number[]): number {
  let left = 0;
  let right = heights.length - 1;
  let maxWater = 0;

  while (left < right) {
    const width = right - left;
    const height = Math.min(heights[left], heights[right]);
    const area = width * height;

    maxWater = Math.max(maxWater, area);

    // Move pointer pointing to shorter line
    if (heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
}

/**
 * PROBLEM 4: Three Sum
 * Find all unique triplets that sum to zero
 * 
 * Example:
 * Input: nums = [-1, 0, 1, 2, -1, -4]
 * Output: [[-1, -1, 2], [-1, 0, 1]]
 */
export function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const result: number[][] = [];

  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicates for first number
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        // Skip duplicates for second and third numbers
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

// ============================================
// PATTERN 2: SAME DIRECTION (Fast & Slow)
// ============================================

/**
 * Two pointers move in same direction at different speeds
 * Use when: Removing elements, modifying array in-place
 */

/**
 * PROBLEM 5: Remove Duplicates from Sorted Array
 * Remove duplicates in-place and return new length
 * 
 * Example:
 * Input: nums = [1, 1, 2, 2, 3]
 * Output: 3 (nums = [1, 2, 3, _, _])
 */
export function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0;

  let writeIndex = 0;

  for (let readIndex = 1; readIndex < nums.length; readIndex++) {
    if (nums[readIndex] !== nums[writeIndex]) {
      writeIndex++;
      nums[writeIndex] = nums[readIndex];
    }
  }

  return writeIndex + 1;
}

/**
 * PROBLEM 6: Move Zeroes
 * Move all zeros to end while maintaining order of non-zeros
 * 
 * Example:
 * Input: nums = [0, 1, 0, 3, 12]
 * Output: [1, 3, 12, 0, 0]
 */
export function moveZeroes(nums: number[]): void {
  let writeIndex = 0;

  // Move all non-zeros to front
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[writeIndex] = nums[i];
      writeIndex++;
    }
  }

  // Fill rest with zeros
  while (writeIndex < nums.length) {
    nums[writeIndex] = 0;
    writeIndex++;
  }
}

/**
 * PROBLEM 7: Remove Element
 * Remove all instances of value in-place
 * 
 * Example:
 * Input: nums = [3, 2, 2, 3], val = 3
 * Output: 2 (nums = [2, 2, _, _])
 */
export function removeElement(nums: number[], val: number): number {
  let writeIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[writeIndex] = nums[i];
      writeIndex++;
    }
  }

  return writeIndex;
}

/**
 * PROBLEM 8: Squares of Sorted Array
 * Return sorted array of squares (input is sorted)
 * 
 * Example:
 * Input: nums = [-4, -1, 0, 3, 10]
 * Output: [0, 1, 9, 16, 100]
 */
export function sortedSquares(nums: number[]): number[] {
  const result = new Array(nums.length);
  let left = 0;
  let right = nums.length - 1;
  let writeIndex = nums.length - 1;

  while (left <= right) {
    const leftSquare = nums[left] * nums[left];
    const rightSquare = nums[right] * nums[right];

    if (leftSquare > rightSquare) {
      result[writeIndex] = leftSquare;
      left++;
    } else {
      result[writeIndex] = rightSquare;
      right--;
    }
    writeIndex--;
  }

  return result;
}

// ============================================
// PATTERN 3: PARTITION (Dutch National Flag)
// ============================================

/**
 * Multiple pointers partition array into regions
 * Use when: Sorting by categories, 3-way partitioning
 */

/**
 * PROBLEM 9: Sort Colors (Dutch National Flag)
 * Sort array with 0s, 1s, and 2s
 * 
 * Example:
 * Input: nums = [2, 0, 2, 1, 1, 0]
 * Output: [0, 0, 1, 1, 2, 2]
 */
export function sortColors(nums: number[]): void {
  let low = 0; // boundary for 0s
  let mid = 0; // current element
  let high = nums.length - 1; // boundary for 2s

  while (mid <= high) {
    if (nums[mid] === 0) {
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else {
      // nums[mid] === 2
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }
}

// ============================================
// COMPLEXITY ANALYSIS
// ============================================

/**
 * TWO-POINTER TIME COMPLEXITY:
 * - Opposite direction: O(n) - each pointer moves at most n steps
 * - Same direction: O(n) - visit each element once
 * - With sorting: O(n log n) due to initial sort
 * 
 * TWO-POINTER SPACE COMPLEXITY:
 * - Usually O(1) - only using pointers, no extra space
 * - With sorting: O(log n) or O(n) depending on sort algorithm
 * 
 * WHEN TO USE TWO-POINTER:
 * ✓ Array/string is sorted or can be sorted
 * ✓ Need to find pairs/triplets
 * ✓ Need to partition or rearrange elements
 * ✓ Comparing elements from opposite ends
 * ✓ In-place modification required (space O(1))
 * 
 * COMMON VARIATIONS:
 * 1. Opposite ends converging (Two Sum, Palindrome)
 * 2. Same direction different speeds (Remove Duplicates)
 * 3. Multiple pointers for partitioning (Dutch Flag)
 * 4. Fixed distance apart (Not covered here, see sliding window)
 */

/**
 * TIPS & TRICKS:
 * 
 * 1. Sort first if not sorted (enables two-pointer)
 * 2. Skip duplicates to avoid redundant work
 * 3. Move pointer with smaller/larger value strategically
 * 4. Use while loop for converging pointers
 * 5. Use for + pointer for same direction
 * 6. Watch for off-by-one errors (< vs <=)
 */
