/*

Given an integer n, find a sequence that satisfies all of the following:

The integer 1 occurs once in the sequence.
Each integer between 2 and n occurs twice in the sequence.
For every integer i between 2 and n, the distance between the two occurrences of i is exactly i.
The distance between two numbers on the sequence, a[i] and a[j], is the absolute difference of their indices, |j - i|.

Return the lexicographically largest sequence. It is guaranteed that under the given constraints, there is always a solution.

A sequence a is lexicographically larger than a sequence b (of the same length) if in the first position where a and b differ, sequence a has a number greater than the corresponding number in b. For example, [0,1,9,0] is lexicographically larger than [0,1,5,6] because the first position they differ is at the third number, and 9 is greater than 5.

 

Example 1:

Input: n = 3
Output: [3,1,2,3,2]
Explanation: [2,3,2,1,3] is also a valid sequence, but [3,1,2,3,2] is the lexicographically largest valid sequence.

*/

const constructDistancedSequence = (n) => {
  let result = Array(2 * n - 1).fill(0);
  let used = Array(n + 1).fill(false);
  backtrack(result, used, n, 0);
  return result;
};

function backtrack(result, used, n, index) {
  while (index < result.length && result[index] !== 0) {
      index++;
  }
  if (index === result.length) {
      return true;
  }

  for (let i = n; i >= 1; i--) {
      if (used[i]) continue;

      if (i === 1) {
          result[index] = 1;
          used[1] = true;
          if (backtrack(result, used, n, index + 1)) return true;
          result[index] = 0;
          used[1] = false;
      } else if (index + i < result.length && result[index + i] === 0) {
          result[index] = i;
          result[index + i] = i;
          used[i] = true;
          if (backtrack(result, used, n, index + 1)) return true;
          result[index] = 0;
          result[index + i] = 0;
          used[i] = false;
      }
  }
  return false;
}