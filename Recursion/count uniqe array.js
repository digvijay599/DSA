// count unique values in an array
// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let unique = arr.filter((item, index, array) => array.indexOf(item) === index);
console.log(unique);

//timeComplexity: O(n)
//spaceComplexity: O(n)