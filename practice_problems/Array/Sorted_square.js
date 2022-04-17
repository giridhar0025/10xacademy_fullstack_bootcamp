// Sorted_Square
// Given an array of integers A, return an array of the squares of each number, in sorted non-decreasing order.

// Input
// First Line contains an integer n, denoting the size of array A. The next n lines contains n elements of the array A.

// Output
// n lines, Each line containing 1 element of the array A in the above mentioned order.

// Example
// Input:

// 5

// -4

// -1

// 0

// 3

// 10

// Output:

// 0

// 1

// 9

// 16

// 100

// Note:
// 1 <= A.length <= 10000
// -10000 <= A[i] <= 10000


let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let n = parseInt(readLine());
let arr = []
for (let i = 0; i < n; i++) {
    num = parseInt(readLine());
    arr.push(num * num)
}
let sort_arr = arr.sort((a,b) => a-b)
for (let i = 0 ; i < n; i++) {
    console.log(sort_arr[i])
}