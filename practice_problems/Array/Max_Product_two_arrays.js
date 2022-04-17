// MAX product
// You are given two arrays A and B. You have to select two integers, one from A and one from B. Let them be A[i] (0 <= i < length of array A) and B[j] (0 <= j < length of array B). you have to find the maximum value of |A[i]XB[j]|.

// note:- |x| is absolute value of x.

// Input
// first line contains the size of the array A which is followed by size of array B in line two. Next two lines contain the two arrays A,B as space separated values.

// Note : Array length cannot be zero.

// Output
// Print the maximum value of |A[i]XB[j]|

// Example
// Input:

// 5

// 8

// -3 4 5 2 1

// 7 4 2 4 5 3 -10 6

// Output:

// 50

// explanation

// choose 5 from first A and -10 from B, the product is -50 whose absolute value is 50, which is the maximum possible product.


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

let n  = parseInt(readLine());
let m = parseInt(readLine());
let n_nums = readLine().split(" ");
let m_nums = readLine().split(" ")
let n_arr = [];
let m_arr = [];
let max = -Infinity
for (let i = 0 ; i < n; i++) {
  num = parseInt(Math.abs(n_nums[i]))
  n_arr.push(num)
}
for (let j = 0; j < m; j++) {
  m_arr[j] = parseInt(Math.abs(m_nums[j]))
}

console.log(Math.max(...n_arr) * Math.max(...m_arr))