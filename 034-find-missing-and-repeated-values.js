/*

You are given a 0-indexed 2D integer matrix grid of size n * n with values in the range [1, n2]. Each integer appears exactly once except a which appears twice and b which is missing. The task is to find the repeating and missing numbers a and b.

Return a 0-indexed integer array ans of size 2 where ans[0] equals to a and ans[1] equals to b.

 

Example 1:

Input: grid = [[1,3],[2,2]]
Output: [2,4]
Explanation: Number 2 is repeated and number 4 is missing so the answer is [2,4].

*/

const findMissingAndRepeatedValues = function(grid) {
  let n = grid.length;
  let size = n * n;
  let count = new Array(size + 1).fill(0);

  for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
          count[grid[i][j]]++;
      }
  }

  let a = -1, b = -1;

  for (let num = 1; num <= size; num++) {
      if (count[num] === 2) {
          a = num;
      } else if (count[num] === 0) {
          b = num;
      }
  }

  return [a, b];
};