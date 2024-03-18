/**
 * Creates a counter object with methods to increment, decrement, and reset the counter.
 * The counter's initial value is set to the `init` parameter provided upon creation.
 * Each method of the returned counter object modifies the counter's state and returns the updated value.
 *
 * @param {number} init - The initial value of the counter.
 * @returns {Counter} An object representing the counter, with the following methods:
 *   - `increment`: Increments the counter by one and returns the new value.
 *   - `decrement`: Decrements the counter by one and returns the new value.
 *   - `reset`: Resets the counter to its initial value and returns the reset value.
 *
 * Example usage:
 * const myCounter = createCounter(10);
 * console.log(myCounter.increment()); // Outputs: 11
 * console.log(myCounter.decrement()); // Outputs: 10 (back to the initial value after incrementing)
 * console.log(myCounter.reset()); // Outputs: 10 (resets to the initial value)
 */
export type Counter = {
  increment: () => number,
  decrement: () => number,
  reset: () => number,
}

export function createCounter(init: number): Counter {
  let i = init;

  return {
    increment: () => ++i,
    decrement: () => --i,
    reset: () => {
      i = init;
      return i;
    },
  }
}
