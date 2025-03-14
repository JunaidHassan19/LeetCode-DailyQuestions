/*

You are given an integer array nums of length n and a 2D array queries where queries[i] = [li, ri, vali].

Each queries[i] represents the following action on nums:

Decrement the value at each index in the range [li, ri] in nums by at most vali.
The amount by which each value is decremented can be chosen independently for each index.
A Zero Array is an array with all its elements equal to 0.

Return the minimum possible non-negative value of k, such that after processing the first k queries in sequence, nums becomes a Zero Array. If no such k exists, return -1.

 

Example 1:

Input: nums = [2,0,2], queries = [[0,2,1],[0,2,1],[1,1,3]]

Output: 2

Explanation:

For i = 0 (l = 0, r = 2, val = 1):
Decrement values at indices [0, 1, 2] by [1, 0, 1] respectively.
The array will become [1, 0, 1].
For i = 1 (l = 0, r = 2, val = 1):
Decrement values at indices [0, 1, 2] by [1, 0, 1] respectively.
The array will become [0, 0, 0], which is a Zero Array. Therefore, the minimum value of k is 2.

*/


var minZeroArray = function(nums, queries) {
  let n = nums.length;
  
  const canMakeZeroArray = (k) => {
      let diff = new Array(n + 1).fill(0);
      for (let i = 0; i < k; i++) {
          let [left, right, val] = queries[i];
          diff[left] += val;
          diff[right + 1] -= val;
      }
      let currVal = 0;
      for (let i = 0; i < n; i++) {
          currVal += diff[i];
          if (currVal < nums[i]) return false;
      }
      return true;
  };
  
  if (nums.every(x => x === 0)) return 0;
  let left = 1, right = queries.length;
  if (!canMakeZeroArray(right)) return -1;
  while (left < right) {
      let mid = left + Math.floor((right - left) / 2);
      if (canMakeZeroArray(mid)) right = mid;
      else left = mid + 1;
  }
  return left;
};