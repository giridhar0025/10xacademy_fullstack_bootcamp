// Array_Leader
// Given an integer array A containing N distinct integers, you have to find all the leaders in the array A.

// An element is leader if it is strictly greater than all the elements to its right side.

// NOTE:
// The rightmost element is always a leader.

// Problem Constraints:
// 1 <= N <= 10^5
// 1 <= A[i] <= 10^8
// Input
// First line denotes n, the size of the array. The next n lines contains the elements of the array.

// Output
// Return an integer array denoting all the leader elements of the array. (You need to print one element in one line & The sequence of the resultant array should be in the reverse order, in which they appear in the given array.)

// Example
// Input: 6

// 16

// 17

// 4

// 3

// 5

// 2

// Output:

// 2

// 5

// 17

// Explanation:
// Element 17 is strictly greater than all the elements on the right side to it.

// Element 2 is strictly greater than all the elements on the right side to it.

// Element 5 is strictly greater than all the elements on the right side to it.

// So we will return this three elements i.e [2, 5, 17] as the required ordering.


let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string for


let n = parseInt(readLine());
let arr = [];
for (let i = 0; i < n; i++) {
    arr.push(parseInt(readLine()))
}
// let sort_arr = arr.sort((a,b) => a - b)
let max = arr[n - 1]
for (let i = n - 1; i >= 0; i--) {
    if (max <= arr[i]) {
        max = arr[i];
        console.log(max);
    }
}