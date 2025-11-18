/**
 * K-Distance Apart (LeetCode-style)
 * ===================================
 * PROBLEM: Check if all 1s in binary array are at least k places apart.
 * 
 * DUMB ANALOGY: Social Distancing at a Concert
 * - VIP guests (1s) must keep k empty seats between them
 * - Regular seats (0s) are just spacing
 * - Check: are all VIPs properly distanced?
 * 
 * Example 1: nums = [1,0,0,0,1,0,0,1], k = 2
 * VIPs at: 0, 4, 7
 * Distance 0→4: 3 seats (✓ >= k=2)
 * Distance 4→7: 2 seats (✓ >= k=2)
 * Result: TRUE
 * 
 * Example 2: nums = [1,0,0,1,0,1], k = 2
 * VIPs at: 0, 3, 5
 * Distance 0→3: 2 seats (✓ >= k=2)
 * Distance 3→5: 1 seat (✗ < k=2)
 * Result: FALSE
 * 
 * PATTERN: Single-pass state tracking
 * - Track last VIP position OR count gaps
 * - When finding new VIP, check distance
 * - Time: O(n), Space: O(1)
 */

// Approach 1: Track last index
export function kLengthApartIndex(nums: number[], k: number): boolean {
  let lastOneIdx = -1; // No 1 seen yet
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      // If not first 1, check distance
      if (lastOneIdx !== -1 && i - lastOneIdx - 1 < k) {
        return false; // Too close!
      }
      lastOneIdx = i; // Update last seen
    }
  }
  return true;
}

// Approach 2: Count gaps (no index math)
export function kLengthApartGap(nums: number[], k: number): boolean {
  let gap = k; // Start valid (first 1 always passes)
  
  for (const n of nums) {
    if (n === 1) {
      if (gap < k) return false; // Not enough distance
      gap = 0; // Reset gap counter
    } else {
      gap++; // Increment gap
    }
  }
  return true;
}
