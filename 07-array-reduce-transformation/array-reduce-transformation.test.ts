import { arrayReduceTransformation } from './array-reduce-transformation';

describe('arrayReduceTransformation', () => {
  it('sums up an array of numbers starting from the initial value', () => {
    const nums = [1, 2, 3, 4];
    const sumReducer = (accum: number, curr: number) => accum + curr;
    const initialValue = 0;

    const result = arrayReduceTransformation(nums, sumReducer, initialValue);

    expect(result).toBe(10); // 0 + 1 + 2 + 3 + 4 = 10
  });

  it('multiplies all elements in an array starting from the initial value', () => {
    const nums = [1, 2, 3, 4];
    const productReducer = (accum: number, curr: number) => accum * curr;
    const initialValue = 1;

    const result = arrayReduceTransformation(nums, productReducer, initialValue);

    expect(result).toBe(24); // 1 * 1 * 2 * 3 * 4 = 24
  });

  it('correctly uses the initial value as the starting point', () => {
    const nums = [2, 3, 4];
    const sumReducer = (accum: number, curr: number) => accum + curr;
    const initialValue = 5;

    const result = arrayReduceTransformation(nums, sumReducer, initialValue);

    expect(result).toBe(14); // 5 + 2 + 3 + 4 = 14
  });

  it('returns the initial value for an empty array', () => {
    const nums: number[] = [];
    const sumReducer = (accum: number, curr: number) => accum + curr;
    const initialValue = 10;

    const result = arrayReduceTransformation(nums, sumReducer, initialValue);

    expect(result).toBe(initialValue); // Returns the initial value when the array is empty
  });

  it('can handle complex reduction logic', () => {
    const nums = [1, 2, 3, 4];
    const complexReducer = (accum: number, curr: number, index: number) =>
      index % 2 === 0 ? accum + curr : accum - curr;
    const initialValue = 0;

    const result = arrayReduceTransformation(nums, complexReducer, initialValue);

    expect(result).toBe(-2); // 0 + 1 - 2 + 3 - 4 = -2
  });
});
