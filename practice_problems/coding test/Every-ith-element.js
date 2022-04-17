// Every ith element
// Description
// Given a sequence of n, n > 0, integers and an integer i, 1 <= i <= n, compute the sum containing every ith element in the given sequence.

// Input format
// First line contains n, n > 0, denoting the length of the given sequence. It is followed by n lines, containing one integer each. This is followed by i, 1 <= i <= n.

// Output format
// One integer, which is the sum containing every ith element in the given sequence.

// Sample input
// 10
// 1
// 2
// 3
// 4
// 5
// 60
// 77
// 8
// 9
// 0
// 2
// Sample output
// 74

// Explanation
// First line contains 10, which means the given sequence contains 10 integers. The following 10 lines is the given sequence, viz. [1, 2, 3, 4, 5, 60, 77, 8, 9, 0]. This is followed by 2, which means we need to compute the sum of every 2nd element in the given sequence, which is (2 + 4 + 60 + 8 + 0), i.e. 74. So, the expected output is 74.


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
let arr = [];
for (let i = 0; i < n ; i++) {
  num = parseInt(readLine())
  arr.push(num)
}
let skip_times = parseInt(readLine())
let sum = 0 
let skip_arr = []
for (let i = skip_times - 1; i < n; i = i + skip_times) {
  skip_arr.push(arr[i])
}
for (let i = 0; i < skip_arr.length; i++) {
  sum = sum + skip_arr[i]
}
console.log(sum)