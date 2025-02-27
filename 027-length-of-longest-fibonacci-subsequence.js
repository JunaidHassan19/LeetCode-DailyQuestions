/*

A sequence x1, x2, ..., xn is Fibonacci-like if:

n >= 3
xi + xi+1 == xi+2 for all i + 2 <= n
Given a strictly increasing array arr of positive integers forming a sequence, return the length of the longest Fibonacci-like subsequence of arr. If one does not exist, return 0.

A subsequence is derived from another sequence arr by deleting any number of elements (including none) from arr, without changing the order of the remaining elements. For example, [3, 5, 8] is a subsequence of [3, 4, 5, 6, 7, 8].

*/

function lenLongestFibSubseq(arr) {
  const n = arr.length;
  const index = new Map();
  for (let i = 0; i < n; i++) {
    index.set(arr[i], i);
  }
  
  const dp = Array.from({ length: n }, () => new Array(n).fill(2));
  let maxLen = 0;
  
  for (let j = 0; j < n; j++) {
    for (let i = 0; i < j; i++) {
      const prev = arr[j] - arr[i];
      if (index.has(prev)) {
        const k = index.get(prev);
        if (k < i) {
          dp[i][j] = dp[k][i] + 1;
          maxLen = Math.max(maxLen, dp[i][j]);
        }
      }
    }
  }
  
  return maxLen >= 3 ? maxLen : 0;
}