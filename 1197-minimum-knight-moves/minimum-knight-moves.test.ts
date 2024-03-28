import { minKnightMoves } from './minimum-knight-moves';

describe('minKnightMoves', () => {
  it('returns 0 steps for the origin', () => {
    expect(minKnightMoves(0, 0)).toBe(0);
  });

  it('returns the correct steps for a position one move away', () => {
    expect(minKnightMoves(2, 1)).toBe(1);
    expect(minKnightMoves(1, 2)).toBe(1);
  });

  it('returns the correct steps for positions two moves away', () => {
    expect(minKnightMoves(0, 2)).toBe(2);
    expect(minKnightMoves(2, 0)).toBe(2);
  });

  it('returns the correct steps for a more distant position', () => {
    expect(minKnightMoves(5, 5)).toBe(4);
  });

  it('works with negative coordinates', () => {
    expect(minKnightMoves(-2, -1)).toBe(1);
    expect(minKnightMoves(-5, -5)).toBe(4);
  });

  it('handles large coordinates efficiently', () => {
    expect(minKnightMoves(100, 100)).toBe(68);
  });
});
