// Problem
// Given a string, determine if it is a palindrome,
// meaning it reads the same forwards and backwards,
// including spaces and punctuation.
// Return true if it is, false if it is not.

// Examples:
// palindrome("abba") === true
// palindrome("abcdefg") === false

export const palindrome = (str) => {
  return str.toLowerCase() === str.toLowerCase().split("").reverse("").join("");
};
let word1 = "Fish hsif";
let word2 = "abba";
let word3 = "greetings";
console.log(palindrome(word1));
console.log(palindrome(word2));
console.log(palindrome(word3));
