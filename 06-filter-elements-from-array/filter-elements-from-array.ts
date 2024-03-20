/**
 * Filters elements from an array based on a provided filtering function.
 *
 * Iterates over each element in the input array, applying a filtering function
 * to each element and its index. If the filtering function returns `true` for an element,
 * that element is included in the resulting array. This allows for flexible filtering
 * criteria, including but not limited to the value of the element, its index, or a combination
 * of both.
 *
 * @param {number[]} arr - The array of numbers from which elements are to be filtered.
 * @param {Fn} fn - A filtering function that takes an element of the array and its index as arguments,
 * and returns a boolean indicating whether the element should be included (`true`) or excluded (`false`)
 * in the resulting array.
 * @returns {number[]} A new array containing only the elements for which the filtering function returned `true`.
 *
 * Example usage:
 * const nums = [1, 2, 3, 4, 5];
 * const oddNums = filterElementsFromArray(nums, (n) => n % 2 !== 0);
 * console.log(oddNums); // Outputs: [1, 3, 5]
 *
 * Example with index usage:
 * const numsWithIndexGreaterThan2 = filterElementsFromArray(nums, (n, i) => i > 2);
 * console.log(numsWithIndexGreaterThan2); // Outputs: [4, 5]
 */
type Fn = (n: number, i: number) => any

export function filterElementsFromArray(arr: number[], fn: Fn): number[] {
  const result: number[] = [];

  for (let index = 0; index < arr.length; index++) {
    if (fn(arr[index]!, index)) {
      result.push(arr[index]!)
    }
  }

  return result;
}
