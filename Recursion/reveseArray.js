//  1. Reverse the order of the elements in array1
//  2. Reverse the order of the elements in array2
//  3. Combine array1 and array2 into a single array in the reverse order
//  4. Remove all duplicate values from the final array
//  5. Print the final array

const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];

// function reverseArrayInPlace(array) {                                       // O(n)
//     if (array.length === 0) {
//         console.log(array);
//     }
//     let temp = array[0];
//     array[0] = array[array.length - 1];
//     array[array.length - 1] = temp;
//     return reverseArrayInPlace(array.slice(1, array.length - 1));
// }

// Time Complexity: O(n)
// Space Complexity: O(1)
//console.log("Reverse Array In Place: ", reverseArrayInPlace(array1));

function reverseArray(s) {
    let count = s.length;
    const tempArray = [];

    for (let i = count; i > 0; i--) {           // O(n)
        tempArray.push(s[i - 1]);
    }
    return tempArray;
}

// Time Complexity: O(n)
// Space Complexity: O(n)
console.log("Reverse Array: ", reverseArray(array1));
