/*

You are given an integer array nums. The absolute sum of a subarray [numsl, numsl+1, ..., numsr-1, numsr] is abs(numsl + numsl+1 + ... + numsr-1 + numsr).

Return the maximum absolute sum of any (possibly empty) subarray of nums.

Note that abs(x) is defined as follows:

If x is a negative integer, then abs(x) = -x.
If x is a non-negative integer, then abs(x) = x.
 

*/

function maxAbsoluteSum(nums) {
  let prefix = 0;
  let maxPrefix = 0;
  let minPrefix = 0;
  
  // Calculate prefix sums and track the minimum and maximum prefix sum.
  for (const num of nums) {
    prefix += num;
    maxPrefix = Math.max(maxPrefix, prefix);
    minPrefix = Math.min(minPrefix, prefix);
  }
  
  // The maximum absolute sum is the difference between the maximum and minimum prefix.
  return maxPrefix - minPrefix;
}