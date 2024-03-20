import { arrayTransformOverEachElementInArray } from './apply-transform-over-each-element-in-array';

describe('arrayTransformOverEachElementInArray', () => {
  it('applies a transformation function to each element', () => {
    const inputArray = [1, 2, 3, 4];
    const transformFn = (n: number) => n * 2;
    const expected = [2, 4, 6, 8];

    const result = arrayTransformOverEachElementInArray(inputArray, transformFn);

    expect(result).toEqual(expected);
  });

  it('passes element index as the second parameter to the transformation function', () => {
    const inputArray = [10, 20, 30, 40];
    const transformFn = (n: number, i: number) => n + i;
    const expected = [10, 21, 32, 43]; // Adds the index (0, 1, 2, 3) to each element

    const result = arrayTransformOverEachElementInArray(inputArray, transformFn);

    expect(result).toEqual(expected);
  });

  it('returns an empty array when input is an empty array', () => {
    const inputArray: number[] = [];
    const transformFn = (n: number) => n * 2;

    const result = arrayTransformOverEachElementInArray(inputArray, transformFn);

    expect(result).toEqual([]);
  });
});
