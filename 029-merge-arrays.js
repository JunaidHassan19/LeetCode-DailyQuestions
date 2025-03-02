/*

You are given two 2D integer arrays nums1 and nums2.

nums1[i] = [idi, vali] indicate that the number with the id idi has a value equal to vali.
nums2[i] = [idi, vali] indicate that the number with the id idi has a value equal to vali.
Each array contains unique ids and is sorted in ascending order by id.

Merge the two arrays into one array that is sorted in ascending order by id, respecting the following conditions:

Only ids that appear in at least one of the two arrays should be included in the resulting array.
Each id should be included only once and its value should be the sum of the values of this id in the two arrays. If the id does not exist in one of the two arrays, then assume its value in that array to be 0.
Return the resulting array. The returned array must be sorted in ascending order by id.

*/

/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
  // Initialize pointers for both arrays
  let i = 0, j = 0;
  const result = [];
  
  // Traverse both arrays with two pointers
  while (i < nums1.length && j < nums2.length) {
      const [id1, val1] = nums1[i];
      const [id2, val2] = nums2[j];
      
      if (id1 < id2) {
          // Id1 is smaller, add it to result
          result.push([id1, val1]);
          i++;
      } else if (id2 < id1) {
          // Id2 is smaller, add it to result
          result.push([id2, val2]);
          j++;
      } else {
          // Ids are equal, sum the values
          result.push([id1, val1 + val2]);
          i++;
          j++;
      }
  }
  
  // Add remaining elements from nums1, if any
  while (i < nums1.length) {
      result.push(nums1[i]);
      i++;
  }
  
  // Add remaining elements from nums2, if any
  while (j < nums2.length) {
      result.push(nums2[j]);
      j++;
  }
  
  return result;
};