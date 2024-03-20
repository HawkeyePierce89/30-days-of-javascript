/**
 * Transforms each element in an array based on a provided transformation function.
 *
 * This function iterates over each element in the input array, applies a transformation
 * function to each element, and pushes the result of this transformation into a new array.
 * The transformation function receives the current element and its index as arguments.
 * The transformed array is then returned.
 *
 * @param {number[]} arr - The array of numbers to be transformed.
 * @param {(n: number, i: number) => number} fn - A transformation function that takes
 * an element of the array and its index as arguments, and returns a new number.
 * @returns {number[]} A new array containing the transformed elements.
 *
 * Example usage:
 * const nums = [1, 2, 3, 4];
 * const squaredNums = arrayTransformOverEachElementInArray(nums, (n) => n * n);
 * console.log(squaredNums); // Outputs: [1, 4, 9, 16]
 *
 * Example with index usage:
 * const numsWithIndex = arrayTransformOverEachElementInArray(nums, (n, i) => n + i);
 * console.log(numsWithIndex); // Outputs: [1, 3, 5, 7]
 */
export function arrayTransformOverEachElementInArray(arr: number[], fn: (n: number, i: number) => number): number[] {
  const result: number[] = [];

  for (let index = 0; index < arr.length; index++) {
    result.push(fn(arr[index]!, index));
  }

  return result;
}
