/*

Given an array of integers arr, return the number of subarrays with an odd sum.

Since the answer can be very large, return it modulo 109 + 7.

 

Example 1:

Input: arr = [1,3,5]
Output: 4
Explanation: All subarrays are [[1],[1,3],[1,3,5],[3],[3,5],[5]]
All sub-arrays sum are [1,4,9,3,8,5].
Odd sums are [1,9,3,5] so the answer is 4.

*/

const numOfSubarrays = function(arr) {
  let oddCount = 0, prefixSum = 0;
  for (let a of arr) {
      prefixSum += a;
      oddCount += prefixSum % 2;
  }
  oddCount += (arr.length - oddCount) * oddCount;
  return oddCount % 1_000_000_007;
};