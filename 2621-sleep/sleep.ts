/**
 * Delays the execution of subsequent code for a specified amount of time.
 *
 * This function creates a promise that resolves after a given number of milliseconds, effectively
 * pausing the execution in an asynchronous context. It can be used to delay operations within
 * async functions.
 *
 * @param {number} millis - The amount of time to sleep in milliseconds.
 * @returns {Promise<void>} A promise that resolves after the specified delay, with no return value.
 *
 * Example usage:
 * async function delayedGreeting() {
 *   console.log("Hello");
 *   await sleep(2000); // Wait for 2 seconds
 *   console.log("World!");
 * }
 *
 * delayedGreeting(); // Logs "Hello", waits for 2 seconds, then logs "World!"
 */
export async function sleep(millis: number): Promise<void> {
  await new Promise((resolve) => {
    setTimeout(() => { resolve(true) }, millis);
  })
}
