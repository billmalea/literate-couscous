import { LinkedList } from '../../src/data-structures/linked-lists/linked-list';

describe('LinkedList', () => {
  let list: LinkedList<number>;

  beforeEach(() => {
    list = new LinkedList<number>();
  });

  describe('append', () => {
    it('should add elements to the list', () => {
      list.append(1);
      list.append(2);
      list.append(3);

      expect(list.toString()).toBe('1 -> 2 -> 3');
    });

    it('should increase size when appending', () => {
      expect(list.size).toBe(0);
      list.append(1);
      expect(list.size).toBe(1);
      list.append(2);
      expect(list.size).toBe(2);
    });
  });

  describe('getAt', () => {
    beforeEach(() => {
      list.append(10);
      list.append(20);
      list.append(30);
    });

    it('should get element at valid index', () => {
      expect(list.getAt(0)).toBe(10);
      expect(list.getAt(1)).toBe(20);
      expect(list.getAt(2)).toBe(30);
    });

    it('should return null for invalid indices', () => {
      expect(list.getAt(-1)).toBeNull();
      expect(list.getAt(3)).toBeNull();
    });
  });

  describe('removeAt', () => {
    beforeEach(() => {
      list.append(1);
      list.append(2);
      list.append(3);
    });

    it('should remove element at index', () => {
      const removed = list.removeAt(1);
      expect(removed).toBe(2);
      expect(list.size).toBe(2);
      expect(list.toString()).toBe('1 -> 3');
    });

    it('should return null for invalid indices', () => {
      expect(list.removeAt(-1)).toBeNull();
      expect(list.removeAt(5)).toBeNull();
    });
  });
});
