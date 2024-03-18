import { createCounter, Counter } from './counter';

describe('createCounter', () => {
  let counter: Counter;

  beforeEach(() => {
    counter = createCounter(10);
  });

  it('initializes with the given initial value', () => {
    expect(counter.reset()).toBe(10);
  });

  describe('increment', () => {
    it('increases the count by 1', () => {
      expect(counter.increment()).toBe(11);
      expect(counter.increment()).toBe(12);
    });
  });

  describe('decrement', () => {
    it('decreases the count by 1', () => {
      expect(counter.decrement()).toBe(9);
      expect(counter.decrement()).toBe(8);
    });
  });

  describe('reset', () => {
    it('resets the count to the initial value', () => {
      counter.increment(); // Counter is now 11
      expect(counter.reset()).toBe(10);
    });
  });

  describe('combined operations', () => {
    it('handles a sequence of operations', () => {
      counter.increment(); // 11
      counter.increment(); // 12
      expect(counter.decrement()).toBe(11); // Back to 11
      expect(counter.reset()).toBe(10); // Reset to 10
      counter.decrement(); // 9
      expect(counter.increment()).toBe(10); // Back to 10
    });
  });
});
