# Arrays - Complete Learning Guide

## Table of Contents
1. [What is an Array?](#what-is-an-array)
2. [Basic Concepts](#basic-concepts)
3. [Array Operations](#array-operations)
4. [Common Patterns](#common-patterns)
5. [Practice Problems](#practice-problems)
6. [Complexity Analysis](#complexity-analysis)
7. [Tips & Tricks](#tips--tricks)

---

## What is an Array?

### Dumb Explanation (No Prior Knowledge)

Imagine a **row of mailboxes** on a street:
- Each mailbox holds something (mail, packages, etc.)
- Each mailbox has a **number** (0, 1, 2, 3, ...) called an **index**
- You access what's inside by knowing the mailbox **number**
- **Adding** a mailbox at the beginning means moving everything → **Slow!**
- **Adding** a mailbox at the end is easy → **Fast!**
- **Removing** a mailbox from the middle leaves a gap you must fill

**That's basically an array!**

### Formal Definition

An **array** is a data structure that stores a fixed-size sequential collection of elements of the same type. Each element is accessed using a zero-based index.

**Key Characteristics:**
- **Contiguous Memory**: Elements stored next to each other in memory
- **Zero-Indexed**: First element is at index 0
- **Fixed Type**: All elements must be the same type (in TypeScript)
- **Direct Access**: Can access any element in constant time O(1)
- **Dynamic Size** (in TypeScript): Can grow or shrink

### Visual Representation

```
Array: [10, 20, 30, 40, 50]
Index:   0   1   2   3   4
        ^^^^^^^^^^^^^^^^^^^
        Memory is contiguous
```

To access element at index 2: `array[2]` → returns `30`

---

## Basic Concepts

### 1. Array Creation

**Creating an Empty Array:**
```typescript
const arr: number[] = [];
const arr2 = new Array<number>();
const arr3 = Array.of<number>();
```

**Creating with Initial Values:**
```typescript
const arr: number[] = [10, 20, 30, 40, 50];
```

**Creating with Size and Default Value:**
```typescript
const arr = Array(5).fill(0); // [0, 0, 0, 0, 0]
```

**Creating from Another Source:**
```typescript
const str = "hello";
const arr = str.split(''); // ['h', 'e', 'l', 'l', 'o']
```

### 2. Accessing Elements

**Random Access (Direct):**
```typescript
const arr = [10, 20, 30, 40, 50];
console.log(arr[0]);  // 10
console.log(arr[2]);  // 30
console.log(arr[4]);  // 50
// Time Complexity: O(1) ✓ Super fast!
```

**Why is it O(1)?**
- The computer knows exactly where element at index 2 is in memory
- `memory_address = array_start + (index * element_size)`
- No searching needed!

### 3. Modifying Elements

**Changing a Value:**
```typescript
const arr = [10, 20, 30, 40, 50];
arr[2] = 99; // [10, 20, 99, 40, 50]
// Time Complexity: O(1)
```

**Adding to End (Append):**
```typescript
const arr = [10, 20, 30];
arr.push(40); // [10, 20, 30, 40]
// Time Complexity: O(1) amortized
```

**Removing from End:**
```typescript
const arr = [10, 20, 30, 40];
arr.pop(); // Returns 40, array becomes [10, 20, 30]
// Time Complexity: O(1)
```

**Inserting in Middle:**
```typescript
const arr = [10, 20, 40, 50];
arr.splice(2, 0, 30); // [10, 20, 30, 40, 50]
// Must shift elements right: 40→position 3, 50→position 4
// Time Complexity: O(n) ✗ Slower!
```

**Deleting from Middle:**
```typescript
const arr = [10, 20, 30, 40, 50];
arr.splice(2, 1); // [10, 20, 40, 50]
// Must shift elements left: 40→position 2, 50→position 3
// Time Complexity: O(n) ✗ Slower!
```

---

## Array Operations

### Linear Search: O(n)

**When to use:** Find element in unsorted array

```typescript
function linearSearch(arr: number[], target: number): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Found at index i
    }
  }
  return -1; // Not found
}

// Example
linearSearch([3, 1, 4, 1, 5, 9], 5); // Returns 4
```

**Why O(n)?** Might have to check every element

### Reverse: O(n)

**When to use:** Reverse the order of elements

```typescript
// Method 1: Using built-in
const arr = [1, 2, 3, 4, 5];
arr.reverse(); // [5, 4, 3, 2, 1]

// Method 2: Manual with two pointers
function reverseManual(arr: number[]): number[] {
  let left = 0, right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}
```

**Why O(n)?** Need to swap n/2 elements

### Sum: O(n)

**When to use:** Calculate total of all elements

```typescript
function sumArray(arr: number[]): number {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Example
sumArray([1, 2, 3, 4, 5]); // Returns 15
```

**Why O(n)?** Must visit every element

### Find Min/Max: O(n)

**When to use:** Find smallest or largest element

```typescript
function findMax(arr: number[]): number {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

// Example
findMax([3, 1, 4, 1, 5, 9]); // Returns 9
```

**Why O(n)?** Must check all elements (unsorted)

---

## Common Patterns

### Pattern 1: Two-Pointer

**When to use:**
- Remove duplicates from sorted array
- Reverse array
- Move zeros to end
- Find pair with target sum

**Key Idea:**
Use two pointers approaching from opposite ends or both moving forward at different speeds.

**Example 1: Remove Duplicates from Sorted Array**
```typescript
function removeDuplicates(arr: number[]): number[] {
  let writeIndex = 0;
  
  for (let readIndex = 1; readIndex < arr.length; readIndex++) {
    if (arr[readIndex] !== arr[writeIndex]) {
      writeIndex++;
      arr[writeIndex] = arr[readIndex];
    }
  }
  
  return arr.slice(0, writeIndex + 1);
}

// Example
removeDuplicates([1, 1, 2, 2, 3, 4, 4, 5]); 
// Returns: [1, 2, 3, 4, 5]

// Walkthrough:
// [1, 1, 2, 2, 3, 4, 4, 5]
// ^  ^
// writeIndex=0, readIndex=1: arr[1]=1 == arr[0]=1, skip
// 
// writeIndex=0, readIndex=2: arr[2]=2 != arr[0]=1
//    writeIndex becomes 1, arr[1] = 2
// [1, 2, 2, 2, 3, 4, 4, 5]
//    ^
// Continue until end...
```

**Time: O(n) | Space: O(1)**

**Example 2: Move Zeros to End**
```typescript
function moveZeroes(arr: number[]): void {
  let writeIndex = 0;
  
  // First: move all non-zeros to front
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[writeIndex] = arr[i];
      writeIndex++;
    }
  }
  
  // Second: fill rest with zeros
  while (writeIndex < arr.length) {
    arr[writeIndex] = 0;
    writeIndex++;
  }
}

// Example
const arr = [0, 1, 0, 3, 12];
moveZeroes(arr);
// arr becomes [1, 3, 12, 0, 0]
```

**Time: O(n) | Space: O(1)**

### Pattern 2: Sliding Window

**When to use:**
- Maximum sum of subarray of size k
- Longest substring without repeating characters
- Minimum window containing all characters
- Average of subarrays of size k

**Key Idea:**
Maintain a "window" that slides through the array. Remove left element, add right element.

**Example 1: Maximum Sum of Subarray of Size k**
```typescript
function maxSumSubarray(arr: number[], k: number): number {
  let windowSum = 0;
  
  // Calculate sum of first window
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  
  let maxSum = windowSum;
  
  // Slide the window
  for (let i = k; i < arr.length; i++) {
    // Remove leftmost of previous window, add new element
    windowSum = windowSum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum, windowSum);
  }
  
  return maxSum;
}

// Example
maxSumSubarray([2, 1, 5, 1, 3, 2], 3);
// Windows: [2,1,5]=8, [1,5,1]=7, [5,1,3]=9, [1,3,2]=6
// Returns: 9

// Visualization:
// [2, 1, 5, 1, 3, 2]
// [▓▓▓]         sum=8, max=8
//    [▓▓▓]      sum=7, max=8  (8-2+1=7)
//       [▓▓▓]   sum=9, max=9  (7-1+3=9)
//          [▓▓▓] sum=6, max=9 (9-5+2=6)
```

**Time: O(n) | Space: O(1)**

**Example 2: Longest Substring Without Repeating Characters**
```typescript
function longestNonRepeating(str: string): number {
  const charIndex = new Map<string, number>();
  let maxLength = 0;
  let windowStart = 0;
  
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const char = str[windowEnd];
    
    // If character seen before and within current window
    if (charIndex.has(char) && charIndex.get(char)! >= windowStart) {
      windowStart = charIndex.get(char)! + 1;
    }
    
    charIndex.set(char, windowEnd);
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  
  return maxLength;
}

// Example
longestNonRepeating("abcabcbb");
// "abc" is longest, returns 3

// Visualization:
// "abcabcbb"
//  ▓▓▓      length=3
//   ▓▓▓     length=3
//    ▓▓ (stop at second 'a')
//     ▓▓▓   length=3
//      ▓▓ (stop at second 'b')
```

**Time: O(n) | Space: O(min(n, charset))**

### Pattern 3: Prefix Sum

**When to use:**
- Calculate range sum queries
- Find subarrays with given sum
- Subarray problems with prefix/suffix

**Key Idea:**
Pre-compute cumulative sums once, then range queries are O(1).

```typescript
// Build prefix sum array
function buildPrefixSum(arr: number[]): number[] {
  const prefix = [0];
  for (let i = 0; i < arr.length; i++) {
    prefix.push(prefix[prefix.length - 1] + arr[i]);
  }
  return prefix;
}

// Example
const arr = [1, 2, 3, 4, 5];
const prefix = buildPrefixSum(arr);
// prefix = [0, 1, 3, 6, 10, 15]
//           ↑  ↑  ↑  ↑   ↑   ↑
//           |  |  |  |   |   sum of all 5 elements
//           |  |  |  |   sum of first 4 elements
//           |  |  |  sum of first 3 elements
//           |  |  sum of first 2 elements
//           |  sum of first 1 element
//           base case (0)

// Query range sum from index i to j: O(1)
function getRangeSum(prefix: number[], i: number, j: number): number {
  return prefix[j + 1] - prefix[i];
}

// Get sum from index 1 to 3 (elements 2, 3, 4)
getRangeSum(prefix, 1, 3); // prefix[4] - prefix[1] = 10 - 1 = 9
```

**Time: O(n) preprocessing | O(1) per query | Space: O(n)**

### Pattern 4: Matrix Traversal

**Spiral Traversal (Clockwise from Outside to Inside):**
```typescript
function spiralTraversal(matrix: number[][]): number[] {
  const result: number[] = [];
  let top = 0, bottom = matrix.length - 1;
  let left = 0, right = matrix[0].length - 1;
  
  while (top <= bottom && left <= right) {
    // Traverse right
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;
    
    // Traverse down
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;
    
    // Traverse left (if row exists)
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
    }
    
    // Traverse up (if column exists)
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
    }
  }
  
  return result;
}

// Example
spiralTraversal([[1,2,3],[4,5,6],[7,8,9]]);
// Returns: [1,2,3,6,9,8,7,4,5]

// Visualization:
// 1  2  3
// 4  5  6
// 7  8  9
//
// Step 1: Go right  → [1,2,3]
// Step 2: Go down   → [6,9]
// Step 3: Go left   → [8,7]
// Step 4: Go up     → [4]
// Step 5: Go right  → [5]
// Result: [1,2,3,6,9,8,7,4,5]
```

**Time: O(m*n) | Space: O(1) (excluding output)**

---

## Practice Problems

### Easy Level

**Problem 1: Find Element in Array**
```typescript
/**
 * Given an array and a target, return index if found, -1 otherwise
 * Time Limit: 1 minute
 * Hint: Linear search
 */
function findElement(arr: number[], target: number): number {
  // YOUR CODE HERE
}

// Test Cases
console.log(findElement([1, 2, 3, 4, 5], 3)); // 2
console.log(findElement([1, 2, 3, 4, 5], 6)); // -1
```

**Solution:**
```typescript
function findElement(arr: number[], target: number): number {
  return arr.indexOf(target);
}
```

**Problem 2: Sum of Array**
```typescript
/**
 * Return the sum of all elements in array
 * Time Limit: 1 minute
 * Hint: Loop through and add up
 */
function sumArray(arr: number[]): number {
  // YOUR CODE HERE
}

// Test Cases
console.log(sumArray([1, 2, 3, 4, 5])); // 15
console.log(sumArray([10, 20, 30])); // 60
```

**Solution:**
```typescript
function sumArray(arr: number[]): number {
  return arr.reduce((sum, num) => sum + num, 0);
}
```

### Medium Level

**Problem 3: Container with Most Water**
```typescript
/**
 * Given array of heights, find two bars that can hold most water
 * Water = min(height[i], height[j]) * (j - i)
 * Time Limit: 10 minutes
 * Hint: Two-pointer approach from both ends
 */
function maxArea(heights: number[]): number {
  // YOUR CODE HERE
}

// Test Cases
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
```

**Solution:**
See `array-patterns.ts` → `maxArea` function

**Problem 4: Move Zeros to End**
```typescript
/**
 * Move all zeros to the end while maintaining order of non-zeros
 * Don't create new array
 * Time Limit: 5 minutes
 * Hint: Two-pointer technique
 */
function moveZeroes(arr: number[]): void {
  // YOUR CODE HERE
}

// Test Cases
const arr1 = [0, 1, 0, 3, 12];
moveZeroes(arr1);
console.log(arr1); // [1, 3, 12, 0, 0]
```

**Solution:**
See `array-patterns.ts` → `moveZeroes` function

**Problem 5: Longest Substring Without Repeating Characters**
```typescript
/**
 * Find the longest substring without repeating characters
 * Time Limit: 15 minutes
 * Hint: Sliding window with character tracking
 */
function longestNonRepeating(str: string): number {
  // YOUR CODE HERE
}

// Test Cases
console.log(longestNonRepeating("abcabcbb")); // 3 ("abc")
console.log(longestNonRepeating("bbbbb")); // 1 ("b")
console.log(longestNonRepeating("pwwkew")); // 3 ("wke")
```

**Solution:**
See `array-patterns.ts` → `longestNonRepeatingSubstring` function

### Hard Level

**Problem 6: Trapping Rain Water**
```typescript
/**
 * Calculate how much water can be trapped after raining on bars
 * Time Limit: 20 minutes
 * Hint: Use prefix/suffix max or two-pointer
 */
function trap(heights: number[]): number {
  // YOUR CODE HERE
}

// Test Cases
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
```

**Explanation:** Water gets trapped at each position = min(max_left, max_right) - height

---

## Complexity Analysis

### Time Complexity

| Operation | Time | Reason |
|-----------|------|--------|
| Access by index | O(1) | Direct memory calculation |
| Insert at end | O(1) | No shifting needed |
| Insert at start | O(n) | Must shift all elements |
| Insert in middle | O(n) | Must shift n/2 elements on average |
| Delete from end | O(1) | No shifting needed |
| Delete from start | O(n) | Must shift all elements |
| Delete from middle | O(n) | Must shift n/2 elements on average |
| Linear search | O(n) | Check each element |
| Sum all | O(n) | Visit each element |
| Find min/max | O(n) | Compare all elements |
| Reverse | O(n) | Swap n/2 times |

### Space Complexity

| Operation | Space | Reason |
|-----------|-------|--------|
| Access | O(1) | No extra space |
| Modify in-place | O(1) | No extra space |
| Create new array | O(n) | Need space for new array |
| Sorting in-place | O(1) | (depends on algorithm) |
| Sorting with new array | O(n) | Copy all elements |

---

## Tips & Tricks

### 1. Off-by-One Errors

**Common Mistake:**
```typescript
// WRONG
for (let i = 0; i <= arr.length; i++) {
  console.log(arr[i]); // Last iteration: arr[undefined]
}

// CORRECT
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // Safe access
}
```

### 2. Empty Array Checks

```typescript
// Always check if array is empty before accessing
if (arr.length === 0) {
  return 0; // or throw error
}
const first = arr[0];
```

### 3. Creating True Copies

```typescript
const arr = [1, 2, 3];

// WRONG: Just reference, changes original
const copy1 = arr;
copy1[0] = 99; // arr is also changed!

// CORRECT: Create actual copy
const copy2 = arr.slice(); // [1, 2, 3]
const copy3 = [...arr];    // [1, 2, 3]
const copy4 = Array.from(arr); // [1, 2, 3]
```

### 4. Common TypeScript Array Methods

```typescript
// Mutation methods (change original)
arr.push(5);        // Add to end
arr.pop();          // Remove from end
arr.shift();        // Remove from start
arr.unshift(0);     // Add to start
arr.splice(2, 1);   // Remove 1 element at index 2
arr.sort();         // Sort in place
arr.reverse();      // Reverse in place

// Non-mutation methods (return new array)
arr.slice(1, 3);    // Get elements 1-2
arr.concat([4, 5]); // Combine arrays
arr.map(x => x * 2); // Transform
arr.filter(x => x > 2); // Filter
arr.reduce((a, b) => a + b, 0); // Aggregate
```

### 5. Two-Pointer Debugging

When stuck with two-pointer problems:
```typescript
// Print the state of pointers
function debugTwoPointer(arr: number[]) {
  let left = 0, right = arr.length - 1;
  
  while (left < right) {
    console.log(`left=${left} (${arr[left]}), right=${right} (${arr[right]})`);
    
    if (arr[left] < arr[right]) {
      left++;
    } else {
      right--;
    }
  }
}
```

### 6. Sliding Window Debugging

```typescript
// Print current window
function debugWindow(arr: number[], k: number) {
  for (let i = 0; i <= arr.length - k; i++) {
    const window = arr.slice(i, i + k);
    const sum = window.reduce((a, b) => a + b, 0);
    console.log(`Window ${i}: ${window} = ${sum}`);
  }
}
```

### 7. Matrix Navigation

```typescript
// Safe matrix access
function safeGet(matrix: number[][], row: number, col: number): number | undefined {
  if (row < 0 || row >= matrix.length || col < 0 || col >= matrix[0].length) {
    return undefined;
  }
  return matrix[row][col];
}

// All 8 directions from position (r, c)
const directions = [
  [-1, 0], // up
  [1, 0],  // down
  [0, -1], // left
  [0, 1],  // right
  [-1, -1], // up-left
  [-1, 1],  // up-right
  [1, -1],  // down-left
  [1, 1]    // down-right
];
```

---

## Summary

**Key Takeaways:**

✅ **Strengths:** Fast access O(1), cache friendly
❌ **Weaknesses:** Slow insertion/deletion in middle O(n)

**Use Arrays When:**
- Need fast random access
- Working with sequences of data
- Performance is critical

**Avoid Arrays When:**
- Need frequent insertions/deletions at start/middle
- Use Linked Lists instead

**Master the Patterns:**
1. Two-Pointer: Reverse, duplicates, containers
2. Sliding Window: Subarray/substring problems
3. Prefix Sum: Range queries
4. Matrix Traversal: 2D data

---

## Resources

- **File:** `array-basics.ts` - All basic operations
- **File:** `array-patterns.ts` - Advanced patterns
- **Tests:** `array-basics.test.ts` - 30+ test cases
- **Tests:** `array-patterns.test.ts` - 30+ test cases

Run tests: `npm test -- arrays`
