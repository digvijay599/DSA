// checking sum zero in javascript
// [-5,-4,-3,-2,0,2,4,6,8]
// [-4,4] output

function sumZero(arr) {
    for (let n = 0; n < arr.length; n++) {                      // O(n)
        for (let m = 0; m < arr.length; m++) {                  // O(n)
            if (arr[n] + arr[m] === 0) {
                return [arr[m], arr[n]];
            }
        }
    }
}                                                           // O(n^2)

console.log("linear Search: ", sumZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]));
// Time Complexity: O(n ^ 2)
// space Complexity: O(1)


// Recursive function to find sum of zero in array
// Time Complexity: O(n)
// space Complexity: O(1)

function help(array, start, end) {
    //Base case
    if (array[start] + array[end] === 0) return [array[start], array[end]];
    //Recursive case
    return help(array, start + 1, end - 1);                           // O(n)
}

function SumofZero(arr) {
    let end = arr.length;
    return help(arr, 0, end - 1);
}
// O(n)
console.log("Recursive Solution: ", SumofZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]));

//Time Complexity: O(n)
//space Complexity: O(1)