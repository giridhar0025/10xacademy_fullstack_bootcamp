// Monotonic Array
// Given as array containing 
// n
//  integers, verify if the array is Monotonic.

// An array is called monotonic if it is either monotone increasing or monotone decreasing. An array A is monotone increasing if for all i <= j, A[i] <= A[j]. An array A is monotone decreasing if for all i <= j, A[i] >= A[j].

// Input
// First line contains 
// n
// , number of elements in the array.

// Next n lines contains an integer in each line.

// Output
// Print True if given integers are Monotonic

// Print False if given integers are not Monotonic

// Example
// Input:

// 5

// 3

// 12

// 34

// 34

// 56

// Output:

// True


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
let arr  = []
for (let i = 0; i < n; i++) {
  num = parseInt(readLine());
  arr.push(num)
}
let dec = true;
let inc = true;
for (let i = 1; i< n; i++) {
	if (arr[i] > arr[i - 1]) {
		inc = false;
		break
	}
}
for (let j = 1; j < n; j++) {
	if (arr[j] < arr[j - 1]) {
		dec = false;
		break
	}
}
if (dec || inc) {
	console.log("True")
} else {
	console.log("False")
}