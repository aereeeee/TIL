// https://leetcode.com/problems/spiral-matrix/

function spiralOrder(matrix: number[][]): number[] {
  const result: number[] = [];
  while (matrix.length) {
    result.push(...matrix.shift());

    for (const row of matrix) {
      const last = row.pop();
      if (last) {
        result.push(last);
        row.reverse();
      }
    }
    matrix.reverse();
  }
  return result;
}
