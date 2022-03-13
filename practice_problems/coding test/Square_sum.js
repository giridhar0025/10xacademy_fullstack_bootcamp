// Square Sum
// Given a natural number n as input, find the sum of squares of first n natural numbers.

// Input
// One Integer, denoting n.

// Output
// One Integer, denoting the required sum.

// Example
// Input: 3

// Output: 14

// Explanation:

// 1*1+2*2+3*3 = 14




let fs = require("fs");
const { parse } = require("path/posix");
const { resourceLimits } = require("worker_threads");
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
let sum = 0;
for (i = 1; i <=n; i++) {
   sum = sum + (i * i);
}
console.log(sum)

// we can also use formula n*(n+1)*(2*n+1)/6
