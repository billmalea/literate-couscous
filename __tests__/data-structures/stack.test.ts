import { Stack } from '../../src/data-structures/stacks/stack';

describe('Stack', () => {
  let stack: Stack<number>;

  beforeEach(() => {
    stack = new Stack<number>();
  });

  describe('push and pop', () => {
    it('should push and pop elements', () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);

      expect(stack.pop()).toBe(3);
      expect(stack.pop()).toBe(2);
      expect(stack.pop()).toBe(1);
    });
  });

  describe('peek', () => {
    it('should peek at top without removing', () => {
      stack.push(10);
      stack.push(20);

      expect(stack.peek()).toBe(20);
      expect(stack.peek()).toBe(20);
      expect(stack.getSize()).toBe(2);
    });
  });

  describe('isEmpty', () => {
    it('should return true for empty stack', () => {
      expect(stack.isEmpty()).toBe(true);
    });

    it('should return false for non-empty stack', () => {
      stack.push(1);
      expect(stack.isEmpty()).toBe(false);
    });
  });
});
