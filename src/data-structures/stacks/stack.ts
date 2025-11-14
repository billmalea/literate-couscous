/**
 * Generic Stack implementation
 * LIFO (Last In, First Out) data structure
 * @template T - The type of elements in the stack
 */
export class Stack<T> {
  private items: T[] = [];

  /**
   * Add element to top of stack
   * Time Complexity: O(1)
   */
  push(value: T): void {
    this.items.push(value);
  }

  /**
   * Remove and return element from top of stack
   * Time Complexity: O(1)
   */
  pop(): T | undefined {
    return this.items.pop();
  }

  /**
   * View element at top without removing
   * Time Complexity: O(1)
   */
  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  /**
   * Check if stack is empty
   */
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  /**
   * Get size of stack
   */
  getSize(): number {
    return this.items.length;
  }

  /**
   * Clear the stack
   */
  clear(): void {
    this.items = [];
  }

  /**
   * Convert stack to array
   */
  toArray(): T[] {
    return [...this.items];
  }
}
