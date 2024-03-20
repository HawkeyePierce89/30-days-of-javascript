import { filterElementsFromArray } from './filter-elements-from-array';

describe('filterElementsFromArray', () => {
  it('filters elements based on the provided function', () => {
    const inputArray = [1, 2, 3, 4, 5];
    const filterFn = (n: number) => n % 2 === 0; // Filter even numbers
    const expected = [2, 4];

    const result = filterElementsFromArray(inputArray, filterFn);

    expect(result).toEqual(expected);
  });

  it('includes elements where the filtering function returns true', () => {
    const inputArray = [5, 7, 8, 10, 13];
    const filterFn = (n: number) => n > 7; // Filter numbers greater than 7
    const expected = [8, 10, 13];

    const result = filterElementsFromArray(inputArray, filterFn);

    expect(result).toEqual(expected);
  });

  it('passes element index as the second parameter to the filtering function', () => {
    const inputArray = [10, 20, 30, 40, 50];
    const filterFn = (_n: number, i: number) => i % 2 === 0; // Filter elements with even indexes
    const expected = [10, 30, 50];

    const result = filterElementsFromArray(inputArray, filterFn);

    expect(result).toEqual(expected);
  });

  it('returns an empty array if no elements match the filtering criteria', () => {
    const inputArray = [1, 2, 3, 4];
    const filterFn = (n: number) => n > 10; // No number is greater than 10
    const expected: number[] = [];

    const result = filterElementsFromArray(inputArray, filterFn);

    expect(result).toEqual(expected);
  });

  it('returns an empty array when input is an empty array', () => {
    const inputArray: number[] = [];
    const filterFn = (n: number) => n % 2 === 0;

    const result = filterElementsFromArray(inputArray, filterFn);

    expect(result).toEqual([]);
  });
});
