import {
  createEmptyArray,
  createArrayWithValues,
  createArrayWithSize,
  createArrayFromString,
  getElement,
  findIndex,
  insertAt,
  deleteAt,
  append,
  removeLast,
  linearSearch,
  sumArray,
  findMax,
  findMin,
  reverseArray,
  rotateRight,
  removeDuplicates,
  isSorted,
  contains,
  isEmpty,
} from '../../src/data-structures/arrays/array-basics';

describe('Array Basics', () => {
  describe('Array Creation', () => {
    it('should create an empty array', () => {
      const arr = createEmptyArray();
      expect(arr.length).toBe(0);
    });

    it('should create array with initial values', () => {
      const arr = createArrayWithValues();
      expect(arr).toEqual([10, 20, 30, 40, 50]);
    });

    it('should create array with size and default value', () => {
      const arr = createArrayWithSize(5, 0);
      expect(arr).toEqual([0, 0, 0, 0, 0]);
      expect(arr.length).toBe(5);
    });

    it('should create array from string', () => {
      const arr = createArrayFromString('hello');
      expect(arr).toEqual(['h', 'e', 'l', 'l', 'o']);
    });
  });

  describe('Access & Search', () => {
    it('should get element at valid index', () => {
      const arr = [10, 20, 30, 40, 50];
      expect(getElement(arr, 0)).toBe(10);
      expect(getElement(arr, 2)).toBe(30);
      expect(getElement(arr, 4)).toBe(50);
    });

    it('should return undefined for invalid index', () => {
      const arr = [10, 20, 30];
      expect(getElement(arr, -1)).toBeUndefined();
      expect(getElement(arr, 10)).toBeUndefined();
    });

    it('should find index of element', () => {
      const arr = [10, 20, 30, 40];
      expect(findIndex(arr, 10)).toBe(0);
      expect(findIndex(arr, 30)).toBe(2);
      expect(findIndex(arr, 50)).toBe(-1);
    });

    it('should perform linear search', () => {
      const arr = [15, 3, 21, 7, 42, 8];
      expect(linearSearch(arr, 21)).toBe(2);
      expect(linearSearch(arr, 99)).toBe(-1);
    });
  });

  describe('Insertion & Deletion', () => {
    it('should insert element at position', () => {
      const arr = [10, 20, 40];
      insertAt(arr, 2, 30);
      expect(arr).toEqual([10, 20, 30, 40]);
    });

    it('should insert at beginning', () => {
      const arr = [20, 30, 40];
      insertAt(arr, 0, 10);
      expect(arr).toEqual([10, 20, 30, 40]);
    });

    it('should throw error for invalid index on insert', () => {
      const arr = [10, 20, 30];
      expect(() => insertAt(arr, -1, 0)).toThrow();
      expect(() => insertAt(arr, 10, 0)).toThrow();
    });

    it('should delete element at position', () => {
      const arr = [10, 20, 30, 40];
      deleteAt(arr, 1);
      expect(arr).toEqual([10, 30, 40]);
    });

    it('should throw error for invalid index on delete', () => {
      const arr = [10, 20, 30];
      expect(() => deleteAt(arr, -1)).toThrow();
      expect(() => deleteAt(arr, 10)).toThrow();
    });

    it('should append element to end', () => {
      const arr = [10, 20, 30];
      append(arr, 40);
      expect(arr).toEqual([10, 20, 30, 40]);
    });

    it('should remove last element', () => {
      const arr = [10, 20, 30];
      const removed = removeLast(arr);
      expect(removed).toBe(30);
      expect(arr).toEqual([10, 20]);
    });

    it('should return undefined when removing from empty array', () => {
      const arr: number[] = [];
      expect(removeLast(arr)).toBeUndefined();
    });
  });

  describe('Array Analysis', () => {
    it('should sum array elements', () => {
      expect(sumArray([1, 2, 3, 4, 5])).toBe(15);
      expect(sumArray([10, 20, 30])).toBe(60);
      expect(sumArray([])).toBe(0);
    });

    it('should find maximum value', () => {
      expect(findMax([3, 1, 4, 1, 5, 9])).toBe(9);
      expect(findMax([42])).toBe(42);
      expect(findMax([-5, -2, -10])).toBe(-2);
    });

    it('should throw error when finding max of empty array', () => {
      expect(() => findMax([])).toThrow();
    });

    it('should find minimum value', () => {
      expect(findMin([3, 1, 4, 1, 5, 9])).toBe(1);
      expect(findMin([42])).toBe(42);
      expect(findMin([-5, -2, -10])).toBe(-10);
    });

    it('should throw error when finding min of empty array', () => {
      expect(() => findMin([])).toThrow();
    });
  });

  describe('Array Transformation', () => {
    it('should reverse array', () => {
      const arr = [1, 2, 3, 4, 5];
      reverseArray(arr);
      expect(arr).toEqual([5, 4, 3, 2, 1]);
    });

    it('should handle single element reverse', () => {
      const arr = [42];
      reverseArray(arr);
      expect(arr).toEqual([42]);
    });

    it('should rotate array right', () => {
      const arr = [1, 2, 3, 4, 5];
      rotateRight(arr, 2);
      expect(arr).toEqual([4, 5, 1, 2, 3]);
    });

    it('should handle rotation greater than array length', () => {
      const arr = [1, 2, 3, 4, 5];
      rotateRight(arr, 7); // 7 % 5 = 2, same as rotate by 2
      expect(arr).toEqual([4, 5, 1, 2, 3]);
    });

    it('should remove duplicates', () => {
      const arr = [1, 2, 2, 3, 3, 3, 4];
      const result = removeDuplicates(arr);
      expect(result).toEqual([1, 2, 3, 4]);
    });
  });

  describe('Utility Functions', () => {
    it('should check if array is sorted', () => {
      expect(isSorted([1, 2, 3, 4, 5])).toBe(true);
      expect(isSorted([1, 3, 2, 4, 5])).toBe(false);
      expect(isSorted([42])).toBe(true);
      expect(isSorted([])).toBe(true);
    });

    it('should check if array contains value', () => {
      const arr = [1, 2, 3, 4, 5];
      expect(contains(arr, 3)).toBe(true);
      expect(contains(arr, 6)).toBe(false);
    });

    it('should check if array is empty', () => {
      expect(isEmpty([])).toBe(true);
      expect(isEmpty([1])).toBe(false);
    });
  });
});
