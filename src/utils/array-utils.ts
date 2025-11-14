/**
 * Utility function to measure execution time
 */
export function measureTime(fn: () => void): number {
  const start = performance.now();
  fn();
  const end = performance.now();
  return end - start;
}

/**
 * Utility to generate random array
 */
export function generateRandomArray(size: number, max: number = 1000): number[] {
  return Array.from({ length: size }, () => Math.floor(Math.random() * max));
}

/**
 * Deep equality check for arrays
 */
export function arrayEquals<T>(arr1: T[], arr2: T[]): boolean {
  if (arr1.length !== arr2.length) return false;
  return arr1.every((val, idx) => val === arr2[idx]);
}

/**
 * Swap two elements in an array
 */
export function swap<T>(arr: T[], i: number, j: number): void {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
