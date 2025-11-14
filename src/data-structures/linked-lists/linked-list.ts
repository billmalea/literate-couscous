/**
 * Node class for linked list implementations
 * @template T - The type of value stored in the node
 */
export class Node<T> {
  public next: Node<T> | null = null;

  constructor(public value: T) {}
}

/**
 * LinkedList implementation in TypeScript
 * @template T - The type of elements in the list
 */
export class LinkedList<T> {
  private head: Node<T> | null = null;
  private tail: Node<T> | null = null;
  public size: number = 0;

  /**
   * Add element at the end of the list
   * Time Complexity: O(1)
   */
  append(value: T): void {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (this.tail) {
        this.tail.next = newNode;
      }
      this.tail = newNode;
    }

    this.size++;
  }

  /**
   * Convert linked list to string representation
   */
  toString(): string {
    let current = this.head;
    let result = '';

    while (current) {
      result += current.value + (current.next ? ' -> ' : '');
      current = current.next;
    }

    return result;
  }

  /**
   * Get element at index
   * Time Complexity: O(n)
   */
  getAt(index: number): T | null {
    if (index < 0 || index >= this.size) {
      return null;
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current?.next || null;
    }

    return current?.value || null;
  }

  /**
   * Remove element at index
   * Time Complexity: O(n)
   */
  removeAt(index: number): T | null {
    if (index < 0 || index >= this.size || !this.head) {
      return null;
    }

    let current = this.head;

    if (index === 0) {
      this.head = current.next;
      if (this.size === 1) {
        this.tail = null;
      }
    } else {
      let prev: Node<T> | null = null;
      for (let i = 0; i < index; i++) {
        prev = current;
        current = current.next!;
      }

      if (prev) {
        prev.next = current.next;
      }

      if (index === this.size - 1) {
        this.tail = prev;
      }
    }

    this.size--;
    return current.value;
  }
}
