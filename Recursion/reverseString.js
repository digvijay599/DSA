// reverse string 
// https://leetcode.com/problems/reverse-string/
// Write a function that reverses a string. The input string is given as an array of characters char[].
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
// You may assume all the characters consist of printable ascii characters.
// Example 1:
// Input: ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:
// Input: ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]
// Input: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
// Output: ["z","y","x","w","v","u","t","s","r","q","p","o","n","m","l","k","j","i","h","g","f","e","d","c","b","a"]


let s = ["H", "a", "n", "n", "a", "h"];

function reverseString(s) {
    let count = s.length;
    const tempArray = [];

    for (let i = count; i > 0; i--) {           // O(n)
        tempArray.push(s[i - 1]);
    }
    return tempArray;
}                                               // O(n) 

// Time Complexity: O(n)
// Space Complexity: O(n)

console.table(reverseString(s));