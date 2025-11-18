# Two-Pointer Pattern

## Overview

The **two-pointer technique** uses two pointers to iterate through a data structure, typically an array or string. The pointers can move towards each other, in the same direction, or maintain a fixed distance apart.

## When to Use

✅ **Use two-pointer when:**
- Array/string is sorted or can be sorted
- Finding pairs/triplets that satisfy a condition
- Need to remove/modify elements in-place
- Comparing elements from different positions
- Optimizing from O(n²) to O(n)

❌ **Don't use when:**
- Need to check all pairs (use nested loops or hash map)
- Order cannot be changed and array is unsorted
- Need to track more than positions

## Three Variations

### 1. Opposite Direction (Converging)
Pointers start from opposite ends and move towards each other.

```typescript
let left = 0;
let right = arr.length - 1;

while (left < right) {
  // Process arr[left] and arr[right]
  if (condition) {
    left++;
  } else {
    right--;
  }
}
```

**Use for:** Two Sum, Palindrome, Container problems

### 2. Same Direction (Fast & Slow)
Both pointers move forward, one faster than the other.

```typescript
let slow = 0;
for (let fast = 0; fast < arr.length; fast++) {
  if (condition) {
    arr[slow] = arr[fast];
    slow++;
  }
}
```

**Use for:** Remove duplicates, Move zeros, In-place modifications

### 3. Partitioning (Multiple Pointers)
Multiple pointers divide array into regions.

```typescript
let low = 0, mid = 0, high = arr.length - 1;

while (mid <= high) {
  if (arr[mid] === 0) {
    swap(arr, low++, mid++);
  } else if (arr[mid] === 1) {
    mid++;
  } else {
    swap(arr, mid, high--);
  }
}
```

**Use for:** Dutch National Flag, Partition problems

## Common Problems

| Problem | Pattern | Difficulty | Time | Space |
|---------|---------|------------|------|-------|
| Two Sum II | Opposite | Easy | O(n) | O(1) |
| Valid Palindrome | Opposite | Easy | O(n) | O(1) |
| Container With Most Water | Opposite | Medium | O(n) | O(1) |
| Three Sum | Opposite | Medium | O(n²) | O(1) |
| Remove Duplicates | Same Direction | Easy | O(n) | O(1) |
| Move Zeroes | Same Direction | Easy | O(n) | O(1) |
| Sort Colors | Partitioning | Medium | O(n) | O(1) |
| Squares of Sorted Array | Opposite | Easy | O(n) | O(n) |

## Time & Space Complexity

**Time Complexity:**
- Single pass: O(n)
- With sorting: O(n log n)
- Nested (like Three Sum): O(n²)

**Space Complexity:**
- Usually O(1) - only pointers
- O(n) if creating new array

## Implementation Tips

1. **Sort first** if array is unsorted and order doesn't matter
2. **Skip duplicates** to avoid redundant processing
3. **Choose which pointer to move** based on comparison
4. **Watch boundaries** - use `<` vs `<=` carefully
5. **Swap in-place** for O(1) space
6. **Track multiple boundaries** for partitioning

## Example Walkthrough

### Problem: Container With Most Water

```typescript
heights = [1, 8, 6, 2, 5, 4, 8, 3, 7]

left=0, right=8
 ↓                        ↓
[1, 8, 6, 2, 5, 4, 8, 3, 7]
 
Area = min(1, 7) × 8 = 8
Move left (shorter line)

left=1, right=8
    ↓                     ↓
[1, 8, 6, 2, 5, 4, 8, 3, 7]

Area = min(8, 7) × 7 = 49 ← Maximum!
Move right (shorter line)

Continue until pointers meet
```

## Practice Problems

### Easy
1. ✅ Remove Duplicates from Sorted Array (LeetCode 26)
2. ✅ Move Zeroes (LeetCode 283)
3. ✅ Valid Palindrome (LeetCode 125)
4. ✅ Squares of a Sorted Array (LeetCode 977)

### Medium
5. ✅ Container With Most Water (LeetCode 11)
6. ✅ Three Sum (LeetCode 15)
7. ✅ Sort Colors (LeetCode 75)
8. ⬜ Four Sum (LeetCode 18)

### Hard
9. ⬜ Trapping Rain Water (LeetCode 42)
10. ⬜ Minimum Window Substring (LeetCode 76)

## Visual Examples

### Remove Duplicates
```
[1, 1, 2, 2, 3]
 w  r
 
[1, 1, 2, 2, 3]
 w     r  (r != w, so write)
 
[1, 2, 2, 2, 3]
    w     r  (r == w, skip)
    
[1, 2, 2, 2, 3]
    w        r  (r != w, so write)
    
[1, 2, 3, 2, 3]
       w
       
Result: [1, 2, 3] (length = 3)
```

### Move Zeroes
```
[0, 1, 0, 3, 12]
 w  i

[0, 1, 0, 3, 12]
 w     i  (copy 1)

[1, 1, 0, 3, 12]
    w     i

[1, 1, 0, 3, 12]
    w        i  (copy 3)

[1, 3, 0, 3, 12]
       w        i  (copy 12)

[1, 3, 12, 3, 12]
          w

Fill rest with zeros:
[1, 3, 12, 0, 0]
```

## Related Patterns

- **Sliding Window**: Two pointers maintain fixed distance
- **Fast & Slow Pointers**: Used in linked lists (cycle detection)
- **Binary Search**: Special case with two pointers

## Files in This Module

- `two-pointers.ts` - Complete implementations
- `two-pointers.test.ts` - Test cases
- `README.md` - This file

## Next Steps

After mastering two-pointer:
1. ✅ Practice all easy problems
2. ➡️ Learn **Sliding Window** (similar but maintains window size)
3. ➡️ Learn **Binary Search** (converging pointers with conditions)
4. ➡️ Apply to **Linked List** problems
