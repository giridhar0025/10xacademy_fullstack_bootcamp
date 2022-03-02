// Crackers
// john has decided to distribute N Crackers to K users of as evenly as possible. When all the crackers are distributed, find the minimum possible (absolute) difference between the largest number of crackers received by a user and the smallest number received by a user.

// Input
// Two space separated Integers, denoting N, K respectively.

// Output
// One integer, denoting result.

// Example
// Input1:

// 7 3
// Output1:

// 1
// Explanation1:

// When the users receive two, two and three crackers, respectively, the (absolute) difference between the largest number of crackers received by a user and the smallest number received by a user, is 1.



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

let takeInput = readLine().split(" ");
let N = parseInt(takeInput[0]);
let K = parseInt(takeInput[1]); 

if (N % K === 0) {
    console.log(0)
} else {
    console.log(1)
}


