// Mean
// Given the marks of N students in an Array A, calculate the mean.

// Note: If result is a Decimal Value, find it's floor Value.

// Constraints:
// 1 <= N <= 6
// Input
// One integer, denoting N, the length of the array A. Next line denotes N space seperated integers, denoting the elements of the array

// Output
// One Integer, denoting the required mean.

// Example
// Input:

// 4
// 56 67 30 79
// Output:

// 58
// Explanation:

// 56+67+30+79 = 232;  232/4 = 58.
// So, the Output is 58.




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

let N = parseInt(readLine());
let num = readLine().split(" ");
let sum = 0;
if (num.length > 2) {
for (i = 0; i < N; i++) {
	sum = sum + parseInt(num[i])
}	
} console.log(parseInt(sum / N))