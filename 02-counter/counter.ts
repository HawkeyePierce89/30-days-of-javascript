/**
 * Creates a counter function that starts counting from a specified number.
 *
 * This function initializes a counter with the given start value `n` and
 * returns a closure function. Each time the returned function is called,
 * it increments the counter by one and returns the current count before the increment.
 * This makes use of closures to keep the `count` variable private and persistent
 * across multiple calls.
 *
 * @param {number} n - The starting number for the counter.
 * @returns {Function} A function that, when called, returns the current count
 *                     before incrementing the counter by one.
 * @example
 * const myCounter = createCounter(5);
 * console.log(myCounter()); // Outputs: 5
 * console.log(myCounter()); // Outputs: 6
 */
export function createCounter(n: number): () => number {
  let count = n;

  return function() {
    return count++;
  }
}
