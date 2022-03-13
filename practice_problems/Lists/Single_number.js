// Single Number
// Given a list of N integers, every element appears twice except for one. Find that single one.

// Input
// First number is N (the number of integers given) Followed by the N numbers

// Output
// One line containing the output integer

// Example
// Input: 3

// 2

// 2

// 1

// Output: 1

// Input: 5

// 2

// 2

// 1

// 1

// 3

// Output: 3




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
let a = []
for (i = 0; i < N; i++) {
	a[i] = parseInt(readLine())
}
a.sort();


for (i = 0; i < N; i++) {
	if (i == 0) {
		if (a[i] !== a[i + 1])
		console.log(a[i]);
	} else if(i === N - 1) {
		if (a[i] !== a[i - 1])
		console.log(a[i]);
	} else {
		if(a[i] !== a[i + 1] && a[i] !== a[i - 1])
		console.log(a[i]);
	}
}