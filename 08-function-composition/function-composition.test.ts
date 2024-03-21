import { functionComposition } from './function-composition';

describe('functionComposition', () => {
  it('composes multiple functions correctly', () => {
    const double = (x: number) => x * 2;
    const addTen = (x: number) => x + 10;
    const subtractFive = (x: number) => x - 5;

    const composed = functionComposition([double, addTen, subtractFive]);

    // Expected order of execution: ((x - 5) + 10) * 2
    expect(composed(5)).toBe(20); // Should be ((5 - 5) + 10) * 2 = 20
  });

  it('handles single function composition', () => {
    const double = (x: number) => x * 2;

    const composed = functionComposition([double]);

    expect(composed(5)).toBe(10); // Should be 5 * 2 = 10
  });

  it('returns the input if no functions are composed', () => {
    const composed = functionComposition([]);

    expect(composed(5)).toBe(5); // Should return the input unchanged
  });

  it('handles complex operations', () => {
    const square = (x: number) => x * x;
    const invert = (x: number) => -x;
    const addOne = (x: number) => x + 1;

    const composed = functionComposition([square, invert, addOne]);

    // Expected order of execution: (((x + 1) * -1) ^ 2)
    expect(composed(2)).toBe(9); // Should be (((2 + 1) * -1) ^ 2) = 9
  });
});
