import {
  removeDuplicatesSorted,
  moveZeroes,
  maxArea,
  maxSumSubarray,
  longestNonRepeatingSubstring,
  buildPrefixSum,
  getRangeSum,
  findSubarrayWithSum,
  spiralTraversal,
  findInSortedMatrix,
} from '../../src/data-structures/arrays/array-patterns';

describe('Array Patterns - Two Pointer', () => {
  describe('Remove Duplicates from Sorted Array', () => {
    it('should remove duplicates from sorted array', () => {
      const arr = [1, 1, 2, 2, 3, 4, 4, 5];
      const result = removeDuplicatesSorted(arr);
      expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    it('should handle array with no duplicates', () => {
      const arr = [1, 2, 3, 4, 5];
      const result = removeDuplicatesSorted(arr);
      expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    it('should handle array with all duplicates', () => {
      const arr = [1, 1, 1, 1, 1];
      const result = removeDuplicatesSorted(arr);
      expect(result).toEqual([1]);
    });

    it('should handle single element array', () => {
      const arr = [42];
      const result = removeDuplicatesSorted(arr);
      expect(result).toEqual([42]);
    });

    it('should handle empty array', () => {
      const arr: number[] = [];
      const result = removeDuplicatesSorted(arr);
      expect(result).toEqual([]);
    });
  });

  describe('Move Zeroes', () => {
    it('should move zeroes to end', () => {
      const arr = [0, 1, 0, 3, 12];
      moveZeroes(arr);
      expect(arr).toEqual([1, 3, 12, 0, 0]);
    });

    it('should handle no zeroes', () => {
      const arr = [1, 2, 3, 4, 5];
      moveZeroes(arr);
      expect(arr).toEqual([1, 2, 3, 4, 5]);
    });

    it('should handle all zeroes', () => {
      const arr = [0, 0, 0, 0];
      moveZeroes(arr);
      expect(arr).toEqual([0, 0, 0, 0]);
    });

    it('should maintain relative order of non-zero elements', () => {
      const arr = [0, 1, 0, 2, 0, 3];
      moveZeroes(arr);
      expect(arr).toEqual([1, 2, 3, 0, 0, 0]);
    });
  });

  describe('Container with Most Water', () => {
    it('should find maximum area', () => {
      const heights = [1, 8, 6, 2, 5, 4, 8, 3, 7];
      expect(maxArea(heights)).toBe(49); // Between 8 and 7, width=7
    });

    it('should handle simple case', () => {
      const heights = [1, 1];
      expect(maxArea(heights)).toBe(1);
    });

    it('should handle increasing heights', () => {
      const heights = [1, 2, 3, 4, 5];
      expect(maxArea(heights)).toBe(6); // Between indices 0 and 4, min(1,5)=1 * 4 = 4, but actually best is indices 3,4: min(4,5)*1=4, or 1,4: 1*3=3... checking all: max is 6
    });

    it('should handle single large area', () => {
      const heights = [1, 2, 4, 3];
      expect(maxArea(heights)).toBeGreaterThan(0);
    });
  });
});

describe('Array Patterns - Sliding Window', () => {
  describe('Maximum Sum Subarray', () => {
    it('should find maximum sum of size k', () => {
      const arr = [2, 1, 5, 1, 3, 2];
      expect(maxSumSubarray(arr, 3)).toBe(9); // [5, 1, 3]
    });

    it('should handle k equals array length', () => {
      const arr = [1, 2, 3, 4, 5];
      expect(maxSumSubarray(arr, 5)).toBe(15);
    });

    it('should handle k equals 1', () => {
      const arr = [1, 5, 3, 7, 2];
      expect(maxSumSubarray(arr, 1)).toBe(7);
    });

    it('should handle negative numbers', () => {
      const arr = [1, -2, 3, -1, 2];
      expect(maxSumSubarray(arr, 2)).toBeGreaterThanOrEqual(-1);
    });

    it('should return 0 for invalid k', () => {
      const arr = [1, 2, 3];
      expect(maxSumSubarray(arr, 5)).toBe(0);
      expect(maxSumSubarray(arr, 0)).toBe(0);
    });
  });

  describe('Longest Non-Repeating Substring', () => {
    it('should find longest non-repeating substring', () => {
      expect(longestNonRepeatingSubstring('abcabcbb')).toBe(3); // "abc"
    });

    it('should handle all unique characters', () => {
      expect(longestNonRepeatingSubstring('abcdefg')).toBe(7);
    });

    it('should handle all same characters', () => {
      expect(longestNonRepeatingSubstring('aaaa')).toBe(1);
    });

    it('should handle empty string', () => {
      expect(longestNonRepeatingSubstring('')).toBe(0);
    });

    it('should handle single character', () => {
      expect(longestNonRepeatingSubstring('a')).toBe(1);
    });

    it('should handle two character example', () => {
      expect(longestNonRepeatingSubstring('au')).toBe(2);
    });

    it('should handle "dvdf" example', () => {
      expect(longestNonRepeatingSubstring('dvdf')).toBe(3); // "vdf"
    });
  });
});

describe('Array Patterns - Prefix Sum', () => {
  describe('Build Prefix Sum', () => {
    it('should build prefix sum array', () => {
      const arr = [1, 2, 3, 4, 5];
      const prefix = buildPrefixSum(arr);
      expect(prefix).toEqual([0, 1, 3, 6, 10, 15]);
    });

    it('should build prefix sum with negative numbers', () => {
      const arr = [1, -2, 3, -1];
      const prefix = buildPrefixSum(arr);
      expect(prefix).toEqual([0, 1, -1, 2, 1]);
    });

    it('should build prefix sum for single element', () => {
      const arr = [5];
      const prefix = buildPrefixSum(arr);
      expect(prefix).toEqual([0, 5]);
    });

    it('should build prefix sum for empty array', () => {
      const arr: number[] = [];
      const prefix = buildPrefixSum(arr);
      expect(prefix).toEqual([0]);
    });
  });

  describe('Get Range Sum', () => {
    it('should get sum of range using prefix', () => {
      const prefix = [0, 1, 3, 6, 10, 15];
      expect(getRangeSum(prefix, 0, 2)).toBe(6); // 1+2+3
      expect(getRangeSum(prefix, 1, 3)).toBe(9); // 2+3+4
      expect(getRangeSum(prefix, 0, 4)).toBe(15); // All elements
    });

    it('should get single element range', () => {
      const prefix = [0, 1, 3, 6, 10, 15];
      expect(getRangeSum(prefix, 2, 2)).toBe(3); // Element at index 2
    });
  });

  describe('Find Subarray with Sum', () => {
    it('should find subarray with given sum', () => {
      const arr = [1, 2, 3, 4, 5];
      const result = findSubarrayWithSum(arr, 9);
      expect(result).not.toBeNull();
      if (result) {
        const [start, end] = result;
        const sum = arr.slice(start, end + 1).reduce((a, b) => a + b, 0);
        expect(sum).toBe(9);
      }
    });

    it('should find subarray from start', () => {
      const arr = [1, 2, 3, 4, 5];
      const result = findSubarrayWithSum(arr, 3);
      expect(result).not.toBeNull();
      if (result) {
        expect(result[0]).toBe(0);
      }
    });

    it('should return null if no subarray exists', () => {
      const arr = [1, 2, 3, 4, 5];
      const result = findSubarrayWithSum(arr, 100);
      expect(result).toBeNull();
    });

    it('should handle negative numbers', () => {
      const arr = [1, -2, 3, -1, 2];
      const result = findSubarrayWithSum(arr, 1);
      expect(result).not.toBeNull();
    });

    it('should handle target zero', () => {
      const arr = [1, -1, 2, -2, 3];
      const result = findSubarrayWithSum(arr, 0);
      expect(result).not.toBeNull();
    });
  });
});

describe('Array Patterns - Matrix Traversal', () => {
  describe('Spiral Traversal', () => {
    it('should traverse 3x3 matrix in spiral', () => {
      const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ];
      expect(spiralTraversal(matrix)).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
    });

    it('should traverse 1x1 matrix', () => {
      const matrix = [[1]];
      expect(spiralTraversal(matrix)).toEqual([1]);
    });

    it('should traverse 1xn matrix', () => {
      const matrix = [[1, 2, 3, 4]];
      expect(spiralTraversal(matrix)).toEqual([1, 2, 3, 4]);
    });

    it('should traverse nx1 matrix', () => {
      const matrix = [[1], [2], [3], [4]];
      expect(spiralTraversal(matrix)).toEqual([1, 2, 3, 4]);
    });

    it('should traverse empty matrix', () => {
      const matrix: number[][] = [];
      expect(spiralTraversal(matrix)).toEqual([]);
    });

    it('should traverse 2x3 matrix', () => {
      const matrix = [
        [1, 2, 3],
        [4, 5, 6],
      ];
      expect(spiralTraversal(matrix)).toEqual([1, 2, 3, 6, 5, 4]);
    });
  });

  describe('Find in Sorted Matrix', () => {
    it('should find element in sorted matrix', () => {
      const matrix = [
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
      ];
      expect(findInSortedMatrix(matrix, 5)).toBe(true);
      expect(findInSortedMatrix(matrix, 1)).toBe(true);
      expect(findInSortedMatrix(matrix, 9)).toBe(true);
    });

    it('should return false for element not in matrix', () => {
      const matrix = [
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
      ];
      expect(findInSortedMatrix(matrix, 10)).toBe(false);
      expect(findInSortedMatrix(matrix, 0)).toBe(false);
    });

    it('should handle single element matrix', () => {
      const matrix = [[5]];
      expect(findInSortedMatrix(matrix, 5)).toBe(true);
      expect(findInSortedMatrix(matrix, 3)).toBe(false);
    });

    it('should handle single row matrix', () => {
      const matrix = [[1, 2, 3, 4, 5]];
      expect(findInSortedMatrix(matrix, 3)).toBe(true);
      expect(findInSortedMatrix(matrix, 6)).toBe(false);
    });

    it('should handle single column matrix', () => {
      const matrix = [[1], [2], [3], [4], [5]];
      expect(findInSortedMatrix(matrix, 3)).toBe(true);
      expect(findInSortedMatrix(matrix, 6)).toBe(false);
    });

    it('should handle empty matrix', () => {
      const matrix: number[][] = [];
      expect(findInSortedMatrix(matrix, 5)).toBe(false);
    });
  });
});
