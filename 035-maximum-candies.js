/*

You are given a 0-indexed integer array candies. Each element in the array denotes a pile of candies of size candies[i]. You can divide each pile into any number of sub piles, but you cannot merge two piles together.

You are also given an integer k. You should allocate piles of candies to k children such that each child gets the same number of candies. Each child can be allocated candies from only one pile of candies and some piles of candies may go unused.

Return the maximum number of candies each child can get.

 

Example 1:

Input: candies = [5,8,6], k = 3
Output: 5
Explanation: We can divide candies[1] into 2 piles of size 5 and 3, and candies[2] into 2 piles of size 5 and 1. We now have five piles of candies of sizes 5, 5, 3, 5, and 1. We can allocate the 3 piles of size 5 to 3 children. It can be proven that each child cannot receive more than 5 candies.


*/

var maximumCandies = function(candies, k) {
  let left = 1, right = Math.max(...candies);
  let result = 0;

  while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      let childrenCount = candies.reduce((sum, pile) => sum + Math.floor(pile / mid), 0);

      if (childrenCount >= k) {
          result = mid;
          left = mid + 1;
      } else {
          right = mid - 1;
      }
  }

  return result;
};