// Tribonacci
// Description
// The Tribonacci sequence Tn is defined as follows:

// T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

// Given n, return the value of Tn.

// 1<=n<=100

// Input
// The first line of the input contains an integer n.

// Output
// Return a single integer equal to the nth tribonacci number.

// Example
// Input: 4

// Output: 4

// Explanation T3 = 0 + 1 + 1 = 2 T4 = 1 + 1 + 2 = 4



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
let nums_arr = [0,1,1]
while (nums_arr.length <= n) {
  nums_arr.push(nums_arr[nums_arr.length - 1] + nums_arr[nums_arr.length - 2] + nums_arr[nums_arr.length - 3])
}
console.log(nums_arr[n])