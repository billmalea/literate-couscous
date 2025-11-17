/**
 * ARRAYS - BASIC CONCEPTS AND OPERATIONS
 *
 * What is an Array?
 * An array is a collection of elements stored in contiguous memory locations.
 * Each element can be accessed using an index (position number).
 *
 * Key Properties:
 * - Fixed or Dynamic size (TypeScript arrays are dynamic)
 * - Zero-indexed (first element is at index 0)
 * - Can store any data type
 * - Fast access by index: O(1)
 * - Slow insertion/deletion in middle: O(n)
 */

/**
 * DUMB EXPLANATION: What is an Array?
 *
 * Imagine a row of mailboxes on a street:
 * - Each mailbox holds something (mail, packages, etc.)
 * - Each mailbox has a number (0, 1, 2, 3...)
 * - You find what you want by knowing the mailbox number
 * - Adding a mailbox at the beginning requires moving everything
 * - Adding a mailbox at the end is easy
 * - Removing a mailbox from the middle leaves a gap you must fill
 *
 * That's basically an array!
 */

// ============================================
// 1. ARRAY CREATION AND INITIALIZATION
// ============================================

/**
 * Creating an empty array
 */
export function createEmptyArray(): number[] {
  // Method 1: Using square brackets
  const arr1: number[] = [];

  // Method 2: Using Array constructor
  const arr2 = new Array<number>();

  // Method 3: Using Array.of()
  const arr3 = Array.of<number>();

  return arr1; // All three are equivalent
}

/**
 * Creating an array with initial values
 */
export function createArrayWithValues(): number[] {
  // Direct assignment
  const arr: number[] = [10, 20, 30, 40, 50];
  return arr;
}

/**
 * Creating an array with initial size and default value
 */
export function createArrayWithSize(size: number, defaultValue: number): number[] {
  // Create array of size 'size' filled with defaultValue
  return Array(size).fill(defaultValue);
}

/**
 * EXAMPLE:
 * createArrayWithSize(5, 0) returns [0, 0, 0, 0, 0]
 */

/**
 * Creating an array from another data structure
 */
export function createArrayFromString(str: string): string[] {
  // Convert string to array of characters
  return str.split('');
}

/**
 * EXAMPLE:
 * createArrayFromString("hello") returns ['h', 'e', 'l', 'l', 'o']
 */

// ============================================
// 2. BASIC ARRAY OPERATIONS
// ============================================

/**
 * ACCESS: Get element at specific index
 * Time Complexity: O(1)
 * Why? Direct memory access - we know exactly where it is
 */
export function getElement(arr: number[], index: number): number | undefined {
  // Check if index is valid
  if (index < 0 || index >= arr.length) {
    return undefined; // or throw an error
  }
  return arr[index];
}

/**
 * DUMB EXPLANATION: Accessing an array element
 * It's like asking "What's in mailbox #3?" - instant answer!
 */

/**
 * SEARCH: Find index of element
 * Time Complexity: O(n) - might have to check every element
 */
export function findIndex(arr: number[], value: number): number {
  // Method 1: Using indexOf (returns -1 if not found)
  return arr.indexOf(value);

  // Method 2: Manual loop (more control)
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] === value) return i;
  // }
  // return -1;
}

/**
 * EXAMPLE:
 * findIndex([10, 20, 30, 40], 30) returns 2
 * findIndex([10, 20, 30, 40], 50) returns -1
 */

/**
 * INSERT: Add element at specific position
 * Time Complexity: O(n) - need to shift elements
 */
export function insertAt(arr: number[], index: number, value: number): number[] {
  if (index < 0 || index > arr.length) {
    throw new Error('Index out of bounds');
  }

  // splice modifies array in place and returns removed elements
  arr.splice(index, 0, value);
  return arr;
}

/**
 * DUMB EXPLANATION: Inserting in an array
 * If you want to insert a mailbox at position 2, you have to:
 * 1. Move mailbox 2 → position 3
 * 2. Move mailbox 3 → position 4
 * 3. Move mailbox 4 → position 5
 * ... and so on
 * This is why it's slow!
 */

/**
 * EXAMPLE:
 * insertAt([10, 20, 40], 2, 30) modifies array to [10, 20, 30, 40]
 */

/**
 * DELETE: Remove element at specific position
 * Time Complexity: O(n) - need to shift elements
 */
export function deleteAt(arr: number[], index: number): number[] {
  if (index < 0 || index >= arr.length) {
    throw new Error('Index out of bounds');
  }

  arr.splice(index, 1);
  return arr;
}

/**
 * EXAMPLE:
 * deleteAt([10, 20, 30, 40], 1) modifies array to [10, 30, 40]
 */

/**
 * APPEND: Add element to end
 * Time Complexity: O(1) amortized
 * Why? No shifting needed, just add to the end
 */
export function append(arr: number[], value: number): number[] {
  arr.push(value);
  return arr;
}

/**
 * EXAMPLE:
 * append([10, 20, 30], 40) modifies array to [10, 20, 30, 40]
 */

/**
 * REMOVE FROM END: Remove last element
 * Time Complexity: O(1)
 */
export function removeLast(arr: number[]): number | undefined {
  return arr.pop();
}

/**
 * EXAMPLE:
 * removeLast([10, 20, 30]) returns 30 and modifies array to [10, 20]
 */

// ============================================
// 3. ARRAY TRAVERSAL
// ============================================

/**
 * LINEAR SEARCH: Find element by iterating through array
 * Time Complexity: O(n)
 * Use when: Array is unsorted, need simple check
 */
export function linearSearch(arr: number[], target: number): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1; // Not found
}

/**
 * SUM ALL ELEMENTS
 * Time Complexity: O(n)
 */
export function sumArray(arr: number[]): number {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;

  // Alternative using reduce:
  // return arr.reduce((acc, val) => acc + val, 0);
}

/**
 * EXAMPLE:
 * sumArray([1, 2, 3, 4, 5]) returns 15
 */

/**
 * FIND MAX VALUE
 * Time Complexity: O(n)
 */
export function findMax(arr: number[]): number {
  if (arr.length === 0) {
    throw new Error('Array is empty');
  }

  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

/**
 * EXAMPLE:
 * findMax([3, 1, 4, 1, 5, 9]) returns 9
 */

/**
 * FIND MIN VALUE
 * Time Complexity: O(n)
 */
export function findMin(arr: number[]): number {
  if (arr.length === 0) {
    throw new Error('Array is empty');
  }

  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

/**
 * EXAMPLE:
 * findMin([3, 1, 4, 1, 5, 9]) returns 1
 */

// ============================================
// 4. ARRAY TRANSFORMATION
// ============================================

/**
 * REVERSE: Reverse array in place
 * Time Complexity: O(n)
 */
export function reverseArray(arr: number[]): number[] {
  arr.reverse();
  return arr;

  // Manual approach:
  // let left = 0, right = arr.length - 1;
  // while (left < right) {
  //   [arr[left], arr[right]] = [arr[right], arr[left]];
  //   left++;
  //   right--;
  // }
  // return arr;
}

/**
 * EXAMPLE:
 * reverseArray([1, 2, 3, 4, 5]) modifies array to [5, 4, 3, 2, 1]
 */

/**
 * ROTATE: Move elements to the right by k positions
 * Time Complexity: O(n)
 * Space Complexity: O(1) if in-place
 */
export function rotateRight(arr: number[], k: number): number[] {
  const n = arr.length;
  if (n === 0) return arr;

  k = k % n; // Handle k > array length
  if (k === 0) return arr;

  // Method: Reverse entire, then reverse parts
  // Example: [1, 2, 3, 4, 5] rotate right by 2 -> [4, 5, 1, 2, 3]
  // Step 1: Reverse all -> [5, 4, 3, 2, 1]
  // Step 2: Reverse first k -> [4, 5, 3, 2, 1]
  // Step 3: Reverse rest -> [4, 5, 1, 2, 3]

  // Helper function to reverse portion of array
  const reverse = (start: number, end: number) => {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  };

  reverse(0, n - 1); // Reverse entire array
  reverse(0, k - 1); // Reverse first k elements
  reverse(k, n - 1); // Reverse remaining elements

  return arr;
}

/**
 * DUMB EXPLANATION: Rotating an array
 * Original: [1, 2, 3, 4, 5]
 * Rotate right by 2: [4, 5, 1, 2, 3]
 *
 * Think of it like a circular list - items shift to the right,
 * and items that fall off the right end wrap around to the left!
 */

/**
 * EXAMPLE:
 * rotateRight([1, 2, 3, 4, 5], 2) modifies array to [4, 5, 1, 2, 3]
 */

/**
 * REMOVE DUPLICATES: Keep only unique elements
 * Time Complexity: O(n)
 * Space Complexity: O(n) for the Set
 */
export function removeDuplicates(arr: number[]): number[] {
  // Using Set (removes duplicates and maintains insertion order)
  return Array.from(new Set(arr));
}

/**
 * EXAMPLE:
 * removeDuplicates([1, 2, 2, 3, 3, 3, 4]) returns [1, 2, 3, 4]
 */

// ============================================
// 5. ARRAY UTILITIES
// ============================================

/**
 * CHECK IF SORTED
 * Time Complexity: O(n)
 */
export function isSorted(arr: number[]): boolean {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

/**
 * EXAMPLE:
 * isSorted([1, 2, 3, 4, 5]) returns true
 * isSorted([1, 3, 2, 4, 5]) returns false
 */

/**
 * CHECK IF ARRAY CONTAINS VALUE
 * Time Complexity: O(n)
 */
export function contains(arr: number[], value: number): boolean {
  return arr.includes(value);
}

/**
 * EXAMPLE:
 * contains([1, 2, 3, 4, 5], 3) returns true
 * contains([1, 2, 3, 4, 5], 6) returns false
 */

/**
 * GET LENGTH
 * Time Complexity: O(1)
 */
export function getLength(arr: number[]): number {
  return arr.length;
}

/**
 * IS EMPTY
 * Time Complexity: O(1)
 */
export function isEmpty(arr: number[]): boolean {
  return arr.length === 0;
}
