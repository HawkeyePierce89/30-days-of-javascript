import { sleep } from './sleep';

describe('sleep', () => {
  it('delays execution for the specified time', async () => {
    const delay = 500; // Specify the delay for the sleep function in milliseconds
    const startTime = Date.now();

    await sleep(delay); // Call the sleep function with the specified delay

    const endTime = Date.now();
    const elapsedTime = endTime - startTime;

    expect(elapsedTime).toBeGreaterThanOrEqual(delay);
  });

  it('should not delay for a negative time', async () => {
    const delay = -100; // Negative time
    const startTime = Date.now();

    await sleep(delay); // Attempting to sleep for a negative time

    const endTime = Date.now();
    const elapsedTime = endTime - startTime;

    // The test checks that the sleep function resolves immediately
    // or in a negligible amount of time for negative durations.
    expect(elapsedTime).toBeLessThan(100); // Check for a negligible delay
  });
});
