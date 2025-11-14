/**
 * LeetCode Easy: Two Sum
 * Problem: Given an array of integers nums and an integer target,
 * return the indices of the two numbers that add up to target.
 * You may assume that each input has exactly one solution,
 * and you cannot use the same element twice.
 *
 * Constraints:
 * - 2 <= nums.length <= 10^4
 * - -10^9 <= nums[i] <= 10^9
 * - -10^9 <= target <= 10^9
 * - Only one valid answer exists.
 *
 * Example:
 * Input: nums = [2, 7, 11, 15], target = 9
 * Output: [0, 1]
 * Explanation: nums[0] + nums[1] == 9, so we return [0, 1].
 */

/**
 * Solution using Hash Map
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
export function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }

    map.set(nums[i], i);
  }

  return [];
}

/**
 * Brute Force Solution (for learning purposes)
 * Time Complexity: O(n²)
 * Space Complexity: O(1)
 */
export function twoSumBruteForce(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}
