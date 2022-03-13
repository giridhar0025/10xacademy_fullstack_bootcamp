// Growth
// You have been given n integer values. Lets say the given values are a1, a2, a3, a4 ...

// If the average of all these input values is greater than 100, then the given values are excellent.

// Input Format:
// First line denotes n, the number of inputs. The next n lines contains one integer in each line.

// Output Format:
// One string, either Excellent! or Not Excellent!, denoting whether the given values are excellent or not.

// Example:
// Input:

// 5
// 10
// 20
// 30
// 40
// 50
// Output:

// Not Excellent!
// Explanation:

// The average of these values is 30, which is less than 100. Hence, they are not excellent.ß




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
let sum = 0;
for (i = 1; i <= num_test; i++) {
    let num = parseInt(readLine());
	    sum = sum + num;
		}
	if (sum/num_test > 100) {
		console.log("Excellent!")
		} else 
		console.log("Not Excellent!")

////////////////////////////////////////////////////////////////

let test = parseInt(readLine());
let array = [];
let sum_1 = 0
let average = 0
for (i = 0; i < test; i++) {
	array[i] = parseInt(readLine());
}
for (i = 0; i < test; i++) {
	sum = sum + array[i];
}
average = sum / test
if (average > 100) {
	console.log("Excellent!")
}else {
	console.log("Not Excellent")
}

