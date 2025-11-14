//Given an integer x, return true if x is a palindrome, and false otherwise.

// LeetCode Easy: Palindrome Number
//dumb explanation: check if number reads same forwards and backwards
//dumb senario: 121 is palindrome, -121 is not (reads 121- backwards), 10 is not (01 backwards), 12321 is palindrome
export function isPalindrome(x: number): boolean {
  // Negative numbers are not palindromes
  if (x < 0) return false;
  // Convert number to string
  const str = x.toString();
  // Initialize two pointers
  let left = 0;
  let right = str.length - 1;
  // Check characters from both ends
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

//

// ============================================
// PATTERN 1: TWO POINTERS
// ============================================
/**
 * When to Use:
 * ✓ Search pairs in sorted array
 * ✓ Reverse array/string
 * ✓ Check for palindromes
 * ✓ Move specific elements (zeros, negatives) to end
 * ✓ Container/trapping problems
 * Key Idea: Use two pointers moving towards each other or both forward
 * Time: Usually O(n)
 * Space: O(1) - no extra space needed
 */

/**
 * EXAMPLE: Check if Number is Palindrome
 * Number: 121
 * Result: true
 * */

/** * Steps:
 * 1. Negative numbers are not palindromes
 * 2. Convert number to string
 * 3. Initialize two pointers
 * 4. Check characters from both ends
 * 5. Return true if all characters match
 */
