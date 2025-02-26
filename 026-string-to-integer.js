/*

Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.

The algorithm for myAtoi(string s) is as follows:

Whitespace: Ignore any leading whitespace (" ").
Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity if neither present.
Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.
Rounding: If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then round the integer to remain in the range. Specifically, integers less than -231 should be rounded to -231, and integers greater than 231 - 1 should be rounded to 231 - 1.
Return the integer as the final result.

*/

function myAtoi(s) {
  const INT_MAX = 2147483647;
  const INT_MIN = -2147483648;
  
  s = s.trimStart();
  if (s.length === 0) return 0;
  
  let sign = 1, index = 0;
  if (s[index] === '-' || s[index] === '+') {
    sign = s[index] === '-' ? -1 : 1;
    index++;
  }
  
  let num = 0;
  while (index < s.length && s[index] >= '0' && s[index] <= '9') {
    const digit = s[index].charCodeAt(0) - '0'.charCodeAt(0);
    
    if (num > Math.floor((INT_MAX - digit) / 10)) {
      return sign === 1 ? INT_MAX : INT_MIN;
    }
    
    num = num * 10 + digit;
    index++;
  }
  return num * sign;
}