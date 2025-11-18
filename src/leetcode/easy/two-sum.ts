/**
 * LeetCode #1: Two Sum (Easy)
 * 
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
 * ============================================
 * 🎯 DUMB ANALOGY: THE SHOPPING PARTNER PROBLEM
 * ============================================
 * 
 * Imagine you're at a supermarket with a $9 budget. You need to buy exactly TWO items
 * that together cost exactly $9. The items have price tags:
 * 
 * Item 0: $2   Item 1: $7   Item 2: $11   Item 3: $15
 * 
 * DUMB APPROACH (Brute Force):
 * Walk through the store with your friend:
 * - Pick item 0 ($2), check with item 1 ($7): $2+$7 = $9 ✓ FOUND!
 * 
 * But if items were expensive, you'd check EVERY pair:
 * - Item 0 with Item 1, Item 0 with Item 2, Item 0 with Item 3
 * - Item 1 with Item 2, Item 1 with Item 3
 * - Item 2 with Item 3
 * This takes FOREVER! (O(n²) time)
 * 
 * SMART APPROACH (Hash Map):
 * As you walk through the store, you write down each price on a notepad
 * along with its location (aisle number). For each item you see:
 * 
 * 1. Calculate: "What price would complete my $9 budget?"
 *    - See $2: Need $7 to complete $9
 *    - Check notepad: Is $7 written down? NO
 *    - Write down: "$2 is at location 0"
 * 
 * 2. Move to next item:
 *    - See $7: Need $2 to complete $9
 *    - Check notepad: Is $2 written down? YES! At location 0
 *    - FOUND! Return [location of $2, current location] = [0, 1]
 * 
 * You only walked through the store ONCE! (O(n) time)
 * Your notepad is the "Hash Map"!
 */

/**
 * ============================================
 * SOLUTION 1: HASH MAP (OPTIMAL)
 * ============================================
 * Time Complexity: O(n) - Walk through array once
 * Space Complexity: O(n) - Store up to n items in map
 * 
 * Pattern Used: HASH MAP for tracking seen values
 */
export function twoSum(nums: number[], target: number): number[] {
  // Create our "notepad" (hash map) to remember what we've seen
  // Key: the number we saw
  // Value: the index (location) where we saw it
  const map = new Map<number, number>();

  // Walk through each item in the array (each item in the store)
  for (let i = 0; i < nums.length; i++) {
    // STEP 1: Calculate what number would complete the pair
    // If current number is 2 and target is 9, we need 7
    // complement = target - current = 9 - 2 = 7
    const complement = target - nums[i];

    // STEP 2: Check our notepad - have we seen the complement before?
    if (map.has(complement)) {
      // YES! We found our pair!
      // Return [index where we saw complement, current index]
      return [map.get(complement)!, i];
    }

    // STEP 3: Write current number and its location in our notepad
    // "I saw the number nums[i] at index i"
    map.set(nums[i], i);
  }

  // If we get here, no solution found (shouldn't happen per problem constraints)
  return [];
}

/**
 * EXAMPLE WALKTHROUGH:
 * nums = [2, 7, 11, 15], target = 9
 * 
 * i=0, nums[0]=2:
 *   complement = 9 - 2 = 7
 *   map.has(7)? NO
 *   map.set(2, 0) → map = {2: 0}
 * 
 * i=1, nums[1]=7:
 *   complement = 9 - 7 = 2
 *   map.has(2)? YES! (at index 0)
 *   return [0, 1] ← ANSWER!
 * 
 * We only looped twice, found answer immediately!
 */

/**
 * ============================================
 * SOLUTION 2: BRUTE FORCE (FOR LEARNING)
 * ============================================
 * Time Complexity: O(n²) - Check every pair
 * Space Complexity: O(1) - No extra space needed
 * 
 * This is the "try every combination" approach
 */
export function twoSumBruteForce(nums: number[], target: number): number[] {
  // OUTER LOOP: Pick first item
  for (let i = 0; i < nums.length; i++) {
    // INNER LOOP: Try pairing it with every other item after it
    for (let j = i + 1; j < nums.length; j++) {
      // Check if this pair adds up to target
      if (nums[i] + nums[j] === target) {
        // Found it! Return the indices
        return [i, j];
      }
    }
  }

  // No solution found
  return [];
}

/**
 * BRUTE FORCE WALKTHROUGH:
 * nums = [2, 7, 11, 15], target = 9
 * 
 * i=0, nums[0]=2:
 *   j=1, nums[1]=7: 2+7=9 ✓ return [0, 1]
 * 
 * WORST CASE (if answer was last pair):
 * nums = [11, 15, 2, 7], target = 9
 * 
 * i=0, nums[0]=11:
 *   j=1: 11+15=26 ✗
 *   j=2: 11+2=13 ✗
 *   j=3: 11+7=18 ✗
 * 
 * i=1, nums[1]=15:
 *   j=2: 15+2=17 ✗
 *   j=3: 15+7=22 ✗
 * 
 * i=2, nums[2]=2:
 *   j=3: 2+7=9 ✓ return [2, 3]
 * 
 * We checked 6 pairs! Much slower than hash map!
 */

/**
 * ============================================
 * WHY HASH MAP IS BETTER
 * ============================================
 * 
 * Brute Force:
 * - Array size 100: ~4,950 comparisons
 * - Array size 1,000: ~499,500 comparisons
 * - Array size 10,000: ~49,995,000 comparisons (TOO SLOW!)
 * 
 * Hash Map:
 * - Array size 100: 100 lookups (50x faster)
 * - Array size 1,000: 1,000 lookups (500x faster)
 * - Array size 10,000: 10,000 lookups (5000x faster!)
 * 
 * The difference becomes MASSIVE with larger arrays!
 */

/**
 * ============================================
 * KEY INSIGHTS
 * ============================================
 * 
 * 1. Trade Space for Time
 *    - Brute Force: No extra space (O(1)), but slow (O(n²))
 *    - Hash Map: Some extra space (O(n)), but fast (O(n))
 * 
 * 2. Hash Map Pattern
 *    - Use when you need to remember what you've seen
 *    - Perfect for "find pair" problems
 *    - Check if complement exists in O(1) time
 * 
 * 3. Real-World Usage
 *    - This pattern appears in many interview problems
 *    - Similar to: finding duplicates, finding complement
 *    - Basis for more complex problems (3Sum, 4Sum)
 */
