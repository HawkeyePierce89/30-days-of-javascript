/**
 * Provides a custom expectation utility similar to testing frameworks' expect function.
 * This utility returns an object containing two methods: `toBe` and `notToBe` for
 * asserting equality and inequality, respectively.
 *
 * @param {unknown} val - The value to be tested against the expected values.
 * @returns {ToBeOrNotToBe} An object with two methods:
 *   - `toBe(comparison: any): boolean` - Asserts that `val` is strictly equal to `comparison`.
 *     Throws an error with message 'Not Equal' if the assertion fails.
 *   - `notToBe(comparison: any): boolean` - Asserts that `val` is not strictly equal to `comparison`.
 *     Throws an error with message 'Equal' if the assertion fails.
 *
 * Example usage:
 * const expectResult = customExpect(5);
 * expectResult.toBe(5); // returns true
 * expectResult.notToBe(4); // returns true
 * expectResult.toBe(4); // throws Error 'Not Equal'
 * expectResult.notToBe(5); // throws Error 'Equal'
 *
 * Note: The function uses strict equality (`===`) for comparisons.
 */

type ToBeOrNotToBe = {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => boolean;
};

export function customExpect(val: unknown): ToBeOrNotToBe {
  return {
    toBe: (comparison) => {
      if (val === comparison) {
        return true
      }

      throw new Error('Not Equal')
    },
    notToBe: (comparison) => {
      if (val !== comparison) {
        return true;
      }

      throw new Error('Equal')
    },
  }
}
