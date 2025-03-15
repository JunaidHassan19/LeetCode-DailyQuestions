/*

There are several consecutive houses along a street, each of which has some money inside. There is also a robber, who wants to steal money from the homes, but he refuses to steal from adjacent homes.

The capability of the robber is the maximum amount of money he steals from one house of all the houses he robbed.

You are given an integer array nums representing how much money is stashed in each house. More formally, the ith house from the left has nums[i] dollars.

You are also given an integer k, representing the minimum number of houses the robber will steal from. It is always possible to steal at least k houses.

Return the minimum capability of the robber out of all the possible ways to steal at least k houses.

*/

const minCapability = (nums, k) => {
  const canStealKHouses = (capability) => {
      let count = 0;
      let i = 0;
      while (i < nums.length) {
          if (nums[i] <= capability) {
              count++;
              i += 2;
          } else {
              i++;
          }
      }
      return count >= k;
  };
  
  let left = Math.min(...nums);
  let right = Math.max(...nums);
  
  while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (canStealKHouses(mid)) {
          right = mid;
      } else {
          left = mid + 1;
      }
  }
  
  return left;
};