/**
 * Applies a reducer function to each element of the provided array, resulting in a single output value.
 *
 * The `reduce` function takes an array of numbers, a reducer function, and an initial value. It iterates
 * over each element in the array, applying the reducer function to accumulate a result. The reducer
 * function receives two arguments: the accumulated value and the current element value. The return
 * value of the reducer function becomes the new accumulated value for the next iteration. The process
 * starts with the initial value and continues through each element of the array, ultimately returning
 * the final accumulated value.
 *
 * @param {number[]} nums - The array of numbers to reduce.
 * @param {Fn} fn - A reducer function that takes the accumulated value and the current element value,
 * and returns a new accumulated value.
 * @param {number} init - The initial value for the accumulation.
 * @returns {number} The final accumulated value after applying the reducer function to each element
 * of the array, starting from the initial value.
 *
 * Example usage:
 * const nums = [1, 2, 3, 4];
 * const sumReducer = (accum, curr) => accum + curr;
 * const total = reduce(nums, sumReducer, 0); // Returns 10
 *
 * const productReducer = (accum, curr) => accum * curr;
 * const product = reduce(nums, productReducer, 1); // Returns 24
 */
type Fn = (accum: number, curr: number, index: number) => number;

export function arrayReduceTransformation(nums: number[], fn: Fn, init: number): number {
  let result = init;

  for (let index = 0; index < nums.length; index++) {
    result = fn(result, nums[index]!, index);
  }

  return result;
}

