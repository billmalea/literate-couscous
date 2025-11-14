/**
 * QuickSort algorithm implementation
 * Divide and conquer approach
 * Average Time Complexity: O(n log n)
 * Worst Case: O(n²)
 * Space Complexity: O(log n) due to recursion
 */
export function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = arr.slice(1).filter((x) => x <= pivot);
  const right = arr.slice(1).filter((x) => x > pivot);

  return [...quickSort(left), pivot, ...quickSort(right)];
}

/**
 * In-place QuickSort with custom comparator
 */
export function quickSortInPlace<T>(
  arr: T[],
  compare: (a: T, b: T) => number = (a, b) => (a < b ? -1 : a > b ? 1 : 0),
  start: number = 0,
  end: number = arr.length - 1
): T[] {
  if (start < end) {
    const pivotIndex = partition(arr, compare, start, end);
    quickSortInPlace(arr, compare, start, pivotIndex - 1);
    quickSortInPlace(arr, compare, pivotIndex + 1, end);
  }
  return arr;
}

function partition<T>(
  arr: T[],
  compare: (a: T, b: T) => number,
  start: number,
  end: number
): number {
  const pivot = arr[end];
  let i = start - 1;

  for (let j = start; j < end; j++) {
    if (compare(arr[j], pivot) < 0) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[i + 1], arr[end]] = [arr[end], arr[i + 1]];
  return i + 1;
}
