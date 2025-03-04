/*

Given an integer n, return true if it is possible to represent n as the sum of distinct powers of three. Otherwise, return false.

An integer y is a power of three if there exists an integer x such that y == 3x.

*/

function checkPowersOfThree(n) {
  while (n > 0) {
    if (n % 3 === 2) {
      return false;
    }
    n = Math.floor(n / 3);
  }
  return true;
}