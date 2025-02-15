/*

Given a positive integer n, return the punishment number of n.

The punishment number of n is defined as the sum of the squares of all integers i such that:

1 <= i <= n
The decimal representation of i * i can be partitioned into contiguous substrings such that the sum of the integer values of these substrings equals i.
 

Example 1:

Input: n = 10
Output: 182
Explanation: There are exactly 3 integers i in the range [1, 10] that satisfy the conditions in the statement:
- 1 since 1 * 1 = 1
- 9 since 9 * 9 = 81 and 81 can be partitioned into 8 and 1 with a sum equal to 8 + 1 == 9.
- 10 since 10 * 10 = 100 and 100 can be partitioned into 10 and 0 with a sum equal to 10 + 0 == 10.
Hence, the punishment number of 10 is 1 + 81 + 100 = 182


*/

var punishmentNumber = function(n) {
  let totalPunishment = 0;
  
  // Check every integer i from 1 to n.
  for (let i = 1; i <= n; i++) {
    const squareStr = (i * i).toString();
    // If we can partition the square's string to sum to i, add i*i to our total.
    if (canPartition(squareStr, i, 0, {})) {
      totalPunishment += i * i;
    }
  }
  
  return totalPunishment;
};

// Helper function to check if string s can be partitioned (starting at index)
// so that the sum of the parsed integers equals the target.
// We use memoization to avoid repeated work.
function canPartition(s, target, index, memo) {
  // Base case: if we've reached the end of the string,
  // check if we've exactly reached the target sum.
  if (index === s.length) return target === 0;
  
  // Use a memo key based on the current index and target.
  const key = index + '-' + target;
  if (key in memo) return memo[key];
  
  // Try every possible partition by choosing the next substring.
  for (let j = index; j < s.length; j++) {
    // Extract the substring from index to j.
    const num = parseInt(s.substring(index, j + 1), 10);
    // Recursively check if the rest of the string can make up (target - num).
    if (canPartition(s, target - num, j + 1, memo)) {
      memo[key] = true;
      return true;
    }
  }
  
  memo[key] = false;
  return false;
}