/**
 * Generic Queue implementation
 * FIFO (First In, First Out) data structure
 * @template T - The type of elements in the queue
 */
export class Queue<T> {
  private items: T[] = [];

  /**
   * Add element to rear of queue
   * Time Complexity: O(1)
   */
  enqueue(value: T): void {
    this.items.push(value);
  }

  /**
   * Remove and return element from front of queue
   * Time Complexity: O(n) - can be optimized with linked list
   */
  dequeue(): T | undefined {
    return this.items.shift();
  }

  /**
   * View front element without removing
   * Time Complexity: O(1)
   */
  peek(): T | undefined {
    return this.items[0];
  }

  /**
   * Check if queue is empty
   */
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  /**
   * Get size of queue
   */
  getSize(): number {
    return this.items.length;
  }

  /**
   * Clear the queue
   */
  clear(): void {
    this.items = [];
  }

  /**
   * Convert queue to array
   */
  toArray(): T[] {
    return [...this.items];
  }
}
