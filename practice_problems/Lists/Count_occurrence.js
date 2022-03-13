// Count occurrences
// Given a sequence of integers and a query integer, count the number of times the query integer occurs in the sequence.

// Input
// First line contains the number of integers in the sequence, say n (n>0).

// Next n lines contain one integer each.

// Next 1 line contains one integer, which is the query integer.

// Output
// One line containing one integer, which is the number of times query integer occurs in the given sequence.

// Example
// Input:

// 5

// 2

// 3

// 4

// 3

// 5

// 3

// Output:

// 2




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
let input_array = [];
let count = 0
for (i = 0; i < num_test; i++) {
	let num = parseInt(readLine());
	input_array.push(num)
} 
let query_num = parseInt(readLine())
for (i = 0; i < num_test; i++) {
  if (input_array[i] === query_num)
  count = count + 1
}
console.log(count)