// Reduce to 1
// Given a number n. You are required to reduce the given number to 1. To do this you can substract any number greater than equal to 2 from the given number. You can perform this operation any times. You are required to tell the minimum number of operations required to do this or report its not possible.

// Input
// First line contains n. Then next n lines contain a number each.

// Output
// Print the required result number of operations if possible or print -1 if not possible.

// Example
// Input:

// 2

// 1

// 3

// Output:

// -1

// 1

// Explanation
// TestCase 1: Since the number is already 1 thus you cant reduce it further.

// TestCase 2: subtract 2 from 3 and we get 1 the number of operations used are 1.



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
for(let i = 0; i < n; i++) {
	let x = parseInt(readLine())
	if (x > 2) {
		console.log(1);
	} else {
		console.log(-1);
	}
}