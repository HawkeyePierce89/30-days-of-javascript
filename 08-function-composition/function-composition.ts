/**
 * Creates a function that is the composition of a list of functions, where each function
 * consumes the return value of the function that follows. In mathematical terms, composing
 * the functions `f()`, `g()`, and `h()` produces `f(g(h()))`.
 *
 * This implementation uses `reduceRight` to start applying the functions from the end of the
 * array towards the beginning, passing the return value of each function to the next.
 *
 * @param {F[]} functions - An array of functions to be composed. Each function must take a single
 * number argument and return a number. The functions are composed in reverse order,
 * with the last function in the array being applied first.
 * @returns {F} A composed function that, when executed, will return the result of sequentially
 * applying the input functions from right to left to its input.
 *
 * Example usage:
 * const double = x => x * 2;
 * const addTen = x => x + 10;
 * const composedFunction = functionComposition([double, addTen]);
 * console.log(composedFunction(5)); // Output will be 30 because (5 + 10) * 2 = 30
 */
type F = (x: number) => number;

export function functionComposition(functions: F[]): F {
  return function(x) {
    return functions.reduceRight((acc, fn) => {
      acc = fn(acc);
      return acc;
    }, x)
  }
}
