/*

You have n  tiles, where each tile has one letter tiles[i] printed on it.

Return the number of possible non-empty sequences of letters you can make using the letters printed on those tiles.


Example 1:

Input: tiles = "AAB"
Output: 8
Explanation: The possible sequences are "A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA".

Example 2:

Input: tiles = "AAABBC"
Output: 188

Example 3:

Input: tiles = "V"
Output: 1

*/


var numTilePossibilities = function(tiles) {
  const freq = {};
  for (let letter of tiles) {
    freq[letter] = (freq[letter] || 0) + 1;
  }
  
  let count = 0;
  
  function backtrack() {
    for (let letter in freq) {
      if (freq[letter] > 0) {
        freq[letter]--;
        count++;
        backtrack();
        freq[letter]++;
      }
    }
  }
  
  backtrack();
  return count;
};
