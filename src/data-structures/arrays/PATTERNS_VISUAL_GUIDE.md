# ARRAYS PATTERNS - COMPLETE VISUAL GUIDE

## 📊 Pattern Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                    ARRAY PROBLEM?                               │
└──────────────────────┬──────────────────────────────────────────┘
                       │
        ┌──────────────┼──────────────┬─────────────┬──────────────┐
        │              │              │             │              │
        ▼              ▼              ▼             ▼              ▼
    TWO-POINTER  SLIDING WINDOW  PREFIX SUM  MATRIX TRAV.  HASH MAP
```

---

## 1️⃣ TWO-POINTER PATTERN

### When to Use

✓ Remove duplicates from sorted array
✓ Move specific elements to end
✓ Reverse array
✓ Find pairs that satisfy condition
✓ Container/trapping problems

### Visual Example: Remove Duplicates

```
Array: [1, 1, 2, 2, 3, 4, 4, 5]
                ↓
writeIdx=0 (place next unique)
readIdx=1 (check for uniqueness)

Process:
[1, 1, 2, 2, 3, 4, 4, 5]
 ↑  ↑
 w  r   → 1==1, skip
 ↑     ↑
 w     r   → 2!=1, write at index 1

Result: [1, 2, 3, 4, 5]
```

### Complexity

- Time: O(n)
- Space: O(1)

---

## 2️⃣ SLIDING WINDOW PATTERN

### When to Use

✓ Maximum/minimum of subarrays
✓ Longest/shortest substring with property
✓ Average of subarrays
✓ Counting subarrays

### Visual Example: Max Sum of Size k

```
Array: [2, 1, 5, 1, 3, 2], k=3

         Window
       ╔══════╗
[2, 1, 5, 1, 3, 2]    sum=8
      ╔══════╗
      1, 5, 1, 3...    sum=7  (remove 2, add 1)
          ╔══════╗
         5, 1, 3, 2    sum=9  ← MAXIMUM
            ╔══════╗
            1, 3, 2     sum=6

Result: 9
```

### Complexity

- Time: O(n)
- Space: O(k) or O(1)

---

## 3️⃣ PREFIX SUM PATTERN

### When to Use

✓ Range sum queries (multiple queries)
✓ Find subarray with given sum
✓ Subarray sum = target
✓ Maximum subarray sum

### Visual Example: Range Queries

```
Array:  [1, 2, 3, 4, 5]
                ↓ build once

Prefix: [0, 1, 3, 6, 10, 15]
         ↑  ↑  ↑  ↑  ↑   ↑
         |  |  |  |  |   sum(0→4) = 15
         |  |  |  |  sum(0→3) = 10
         |  |  |  sum(0→2) = 6
         |  |  sum(0→1) = 3
         |  sum(0→0) = 1
         base = 0

Query: Sum from index 1 to 3
Answer = prefix[4] - prefix[1] = 10 - 1 = 9
```

### Complexity

- Preprocessing: O(n)
- Per Query: O(1)
- Space: O(n)

---

## 4️⃣ MATRIX TRAVERSAL PATTERN

### When to Use

✓ Spiral traversal
✓ Find in sorted 2D matrix
✓ Layer-by-layer traversal
✓ Rotate matrix

### Visual Example: Spiral Traversal

```
Matrix:
┌───┬───┬───┐
│ 1 │ 2 │ 3 │
├───┼───┼───┤
│ 4 │ 5 │ 6 │
├───┼───┼───┤
│ 7 │ 8 │ 9 │
└───┴───┴───┘

Step 1: Go RIGHT  → [1, 2, 3]
Step 2: Go DOWN   → [6, 9]
Step 3: Go LEFT   → [8, 7]
Step 4: Go UP     → [4]
Step 5: Go RIGHT  → [5]

Result: [1, 2, 3, 6, 9, 8, 7, 4, 5]

Boundaries:
top↓
1  2  3
4  5  6        left→ right→
7  8  9
bottom↑
```

### Complexity

- Time: O(m × n)
- Space: O(1)

---

## 5️⃣ HASH MAP PATTERN

### When to Use

✓ Count occurrences/frequencies
✓ Two-sum problems
✓ Track positions/indices
✓ Anagram detection

### Visual Example: Two Sum with Hash Map

```
Array: [2, 7, 11, 15], target=9

seen = {}

i=0, num=2:
  need = 9 - 2 = 7
  7 not in seen
  add: seen = {2: 0}

i=1, num=7:
  need = 9 - 7 = 2
  2 IN seen! ← FOUND
  return [seen[2], 1] = [0, 1]

Result: indices [0, 1]
Time: O(n) vs O(n²) brute force!
```

### Complexity

- Time: O(n)
- Space: O(k) where k = unique elements

---

## 6️⃣ SORTING + BINARY SEARCH

### When to Use

✓ Two-sum after sorting
✓ Searching in sorted array
✓ Multiple queries on same data
✓ Finding ranges

### Visual Example: Two Sum with Sorting

```
Array: [3, 2, 4, 1, 5], target=7

Step 1: Sort
[1, 2, 3, 4, 5]

Step 2: Two-pointer from both ends
left=0, right=4
 ↓              ↓
[1, 2, 3, 4, 5]
 ↑              ↑
 sum = 1+5 = 6 < 7, move left++

left=1, right=4
    ↓           ↓
[1, 2, 3, 4, 5]
    ↑           ↑
    sum = 2+5 = 7 ← FOUND!

Result: [2, 5] or indices in original
Time: O(n log n) for sort
```

### Complexity

- Time: O(n log n)
- Space: depends on sorting algorithm

---

## 🎯 DECISION TREE

```
START: Analyze the problem
│
├─ Is array SORTED?
│  ├─ YES → Consider TWO-POINTER or BINARY SEARCH
│  └─ NO → Consider sorting first or HASH MAP
│
├─ Need to track PAIRS?
│  ├─ YES → TWO-POINTER
│  └─ NO → Continue
│
├─ Need CONTINUOUS WINDOW?
│  ├─ YES → SLIDING WINDOW
│  └─ NO → Continue
│
├─ Multiple RANGE QUERIES?
│  ├─ YES → PREFIX SUM
│  └─ NO → Continue
│
├─ Working with 2D ARRAY?
│  ├─ YES → MATRIX TRAVERSAL
│  └─ NO → Continue
│
└─ Need EXACT MATCHES?
   ├─ YES → HASH MAP
   └─ NO → Loop or search
```

---

## 📋 PATTERN CHEATSHEET

| Pattern          | Problem           | Time                   | Space | Example                     |
| ---------------- | ----------------- | ---------------------- | ----- | --------------------------- |
| Two-Pointer      | Remove Duplicates | O(n)                   | O(1)  | [1,1,2,2,3] → [1,2,3]       |
| Two-Pointer      | Move Zeros        | O(n)                   | O(1)  | [0,1,0,3,12] → [1,3,12,0,0] |
| Two-Pointer      | Container         | O(n)                   | O(1)  | Max water area              |
| Sliding Window   | Max Sum Size k    | O(n)                   | O(1)  | [2,1,5,1,3,2], k=3 → 9      |
| Sliding Window   | Longest Substring | O(n)                   | O(k)  | "abcabcbb" → 3              |
| Prefix Sum       | Range Sum         | O(n) setup, O(1) query | O(n)  | Query sum[i:j]              |
| Prefix Sum       | Subarray Sum=k    | O(n)                   | O(n)  | Find subarray               |
| Matrix Traversal | Spiral            | O(m\*n)                | O(1)  | Clockwise spiral            |
| Matrix Traversal | Find Sorted 2D    | O(m+n)                 | O(1)  | Binary search 2D            |
| Hash Map         | Two Sum           | O(n)                   | O(n)  | Find pair=target            |
| Hash Map         | Longest Substring | O(n)                   | O(k)  | Track duplicates            |
| Sort + Search    | Two Sum           | O(n log n)             | O(1)  | After sort                  |

---

## 🔥 TOP 10 CLASSIC PROBLEMS

```
1. Two Sum
   Pattern: HASH MAP
   LeetCode: #1

2. Remove Duplicates from Sorted Array
   Pattern: TWO-POINTER
   LeetCode: #26

3. Move Zeroes
   Pattern: TWO-POINTER
   LeetCode: #283

4. Container with Most Water
   Pattern: TWO-POINTER
   LeetCode: #11

5. Trapping Rain Water
   Pattern: TWO-POINTER or PREFIX SUM
   LeetCode: #42

6. Maximum Subarray
   Pattern: SLIDING WINDOW / Dynamic Programming
   LeetCode: #53

7. Sliding Window Maximum
   Pattern: SLIDING WINDOW
   LeetCode: #239

8. Longest Substring Without Repeating
   Pattern: SLIDING WINDOW + HASH MAP
   LeetCode: #3

9. Range Sum Query
   Pattern: PREFIX SUM
   LeetCode: #303

10. Spiral Matrix
    Pattern: MATRIX TRAVERSAL
    LeetCode: #54
```

---

## 💡 PRO TIPS

### Tip 1: Sort First?

```
✗ BEFORE sorting: [3, 2, 4, 1, 5]
✓ AFTER sorting:  [1, 2, 3, 4, 5]
→ Two-pointer becomes easy!
```

### Tip 2: Track Boundaries (for matrix)

```
Don't get lost! Always maintain:
- top (row starting point)
- bottom (row ending point)
- left (column starting point)
- right (column ending point)
```

### Tip 3: Hash Map for Duplicates

```
Before: Loop = O(n²)
After:  Hash Map = O(n)
→ Store first occurrence, check next!
```

### Tip 4: Prefix Sum Trick

```
Sum[i:j] = prefix[j+1] - prefix[i]
Remember: +1 on right, direct on left!
```

---

## 🎓 LEARNING PROGRESSION

```
DAY 1: Learn TWO-POINTER
├─ Reverse array
├─ Remove duplicates
└─ Move zeros

DAY 2: Learn SLIDING WINDOW
├─ Max sum of size k
├─ Longest substring (no repeating)
└─ Character frequency tracking

DAY 3: Learn PREFIX SUM
├─ Build prefix array
├─ Range queries
└─ Find subarray with sum

DAY 4: Learn MATRIX
├─ Spiral traversal
├─ Find in sorted 2D
└─ Rotate matrix

DAY 5: Combine Patterns
├─ Two-pointer + sorting
├─ Sliding window + hash map
└─ Prefix sum + hash map

DAY 6-7: LeetCode Practice
├─ Easy problems (6 problems)
├─ Medium problems (10 problems)
└─ Hard problems (5 problems)
```

---

**Master these 6 patterns and you'll solve 80% of array problems! 🚀**
