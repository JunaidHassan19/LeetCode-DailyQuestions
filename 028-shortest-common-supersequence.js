/*

Given two strings str1 and str2, return the shortest string that has both str1 and str2 as subsequences. If there are multiple valid strings, return any of them.

A string s is a subsequence of string t if deleting some number of characters from t (possibly 0) results in the string s.

 

Example 1:

Input: str1 = "abac", str2 = "cab"
Output: "cabac"
Explanation: 
str1 = "abac" is a subsequence of "cabac" because we can delete the first "c".
str2 = "cab" is a subsequence of "cabac" because we can delete the last "ac".
The answer provided is the shortest such string that satisfies these properties.

Example 2:

Input: str1 = "aaaaaaaa", str2 = "aaaaaaaa"
Output: "aaaaaaaa"

*/

const shortestCommonSupersequence = function(str1, str2) {
  // Step 1: Find the longest common subsequence using dynamic programming
  const m = str1.length;
  const n = str2.length;
  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
  
  // Fill the dp table
  for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
          if (str1[i - 1] === str2[j - 1]) {
              dp[i][j] = 1 + dp[i - 1][j - 1];
          } else {
              dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
          }
      }
  }
  
  // Step 2: Construct the shortest common supersequence
  // Start from the bottom right of the dp table
  let i = m, j = n;
  let result = [];
  
  while (i > 0 && j > 0) {
      if (str1[i - 1] === str2[j - 1]) {
          // If the characters are the same, add it once
          result.push(str1[i - 1]);
          i--;
          j--;
      } else if (dp[i - 1][j] > dp[i][j - 1]) {
          // If coming from top has higher value, take character from str1
          result.push(str1[i - 1]);
          i--;
      } else {
          // Otherwise, take character from str2
          result.push(str2[j - 1]);
          j--;
      }
  }
  
  // Add remaining characters from str1 (if any)
  while (i > 0) {
      result.push(str1[i - 1]);
      i--;
  }
  
  // Add remaining characters from str2 (if any)
  while (j > 0) {
      result.push(str2[j - 1]);
      j--;
  }
  
  // Reverse the result to get the final supersequence
  return result.reverse().join('');
};