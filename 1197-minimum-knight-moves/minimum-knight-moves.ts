/**
 * Calculates the minimum number of steps required for a knight to move to the target square on an infinite chessboard.
 *
 * The function employs a breadth-first search strategy, starting from the knight's initial position at [0, 0]. It considers
 * all possible knight moves, iteratively expanding to reach the target coordinates [x, y]. This implementation might not
 * be fully optimized for performance or correctness due to the approach taken in tracking possible moves and lacks
 * a queue-based mechanism typically used in breadth-first search to efficiently explore each level of possible moves.
 *
 * @param {number} x - The x-coordinate of the target square to which the knight should move.
 * @param {number} y - The y-coordinate of the target square to which the knight should move.
 * @returns {number} The minimum number of steps required for the knight to reach the target square.
 */
export function minKnightMoves(x: number, y: number): number {
  if (x === 0 && y === 0) {
    return 0;
  }

  const steps: [number, number][] = [
    [-2, 1],
    [-1, 2],
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2],
    [-2, -1],
  ]

  let counter = 0;
  let result = 1;

  const possibleCells = new Set(steps.map(step => step.join(':')));
  let sizePossibleCells = possibleCells.size;

  for (let possibleCell of possibleCells) {
    if (possibleCell === `${x}:${y}`) {
      return result;
    }

    for (let step of steps) {
      const [cellX, cellY] = possibleCell.split(':')
      possibleCells.add([Number(cellX) + step[0], Number(cellY) + step[1]].join(':'))
    }

    counter++;

    if (counter === sizePossibleCells) {
      result++;
      sizePossibleCells = possibleCells.size;
    }
  }

  return result;
}
