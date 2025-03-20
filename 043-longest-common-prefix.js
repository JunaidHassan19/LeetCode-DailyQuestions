/*

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
 

*/

/*

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
 

*/
var longestCommonPrefix = function (strs) {
  // Edge case: empty array
  if (strs.length === 0) return "";

  // Start with the first string as the potential common prefix
  let prefix = strs[0];

  // Iterate through the rest of the strings
  for (let i = 1; i < strs.length; i++) {
    // While the current string doesn't start with the prefix
    // Shorten the prefix by removing the last character
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);

      // If prefix becomes empty, there's no common prefix
      if (prefix === "") return "";
    }
  }

  return prefix;
};
