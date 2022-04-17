// Swap K
// Given an array Arr of size N, swap the K-th element from beginning with K-th element from end.

// Constraints:
// 1 <= K <= N
// Input
// First line contains two space seperated integers, denoting N and K respectively. The next line contains N space seperated values, denoting the elements of the array Arr.

// Output
// N space seperated values, denoting the elements of the resultant array.

// Example
// Input1:

// 8 3
// 1 2 3 4 5 6 7 8
// Output1:

// 1 2 6 4 5 3 7 8
// Explanation:

// Kth element from beginning is 3 and from end is 6.


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


let first_line = readLine().split(" ");
let n = parseInt(first_line[0]);
let k = parseInt(first_line[1]);
let arr = readLine().split(" ");

[arr[k - 1],arr[n - k]] = [arr[n - k],arr[k - 1]]



console.log(...arr)