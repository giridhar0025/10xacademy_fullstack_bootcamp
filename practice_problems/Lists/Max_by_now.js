// Max by now
// You have been given n, denoting the number of input values. For each input, you have to print the maximum input taken so far.

// Note:
// You don't need to consider n in taking out this maximum.
// For the first input of n values, the max value will be that value itself.
// Input Format
// First line denotes the number of inputs n. The next n lines contains one integer each, denoting input values.

// Output Format
// There will be n lines in the output, containing one integer in each line, ith line denotes the maximum of the i inputs taken so far.

// Sample Input
// 5
// 3
// 2
// 5
// 10
// 8
// Sample Output
// 3
// 3
// 5
// 10
// 10
// Explanation
// The first line contains 5, denoting there will be 5 input values, in next 5 lines.
// Those inputs are 3,2,5,10,8.
// Corresponding to each of them, the maximum value received so far becomes 3,3,5,10,10.




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

let num_test = parseInt(readLine());
let output = 0
for (let i = 1; i <= num_test; i++) {
 let num = parseInt(readLine());
 if(num > output) {
   output = num;
   console.log(output)
 } else {
	 console.log(output)
 }
}


///////////////////////////////////////


let num_test_1 = parseInt(readLine());
let output_1 = -100000;
for (let i = 1; i <= num_test_1; i++) {
 let num = parseInt(readLine());
 if(num > output_1) {
   output = num;
 } 
	console.log(output)
 }

/////////////////////////////////////////


let N = parseInt(readLine());
let array = [];
for (i = 0; i < N; i++) {
  array[i] = parseInt(readLine());
}
let max_by_now = array[0]