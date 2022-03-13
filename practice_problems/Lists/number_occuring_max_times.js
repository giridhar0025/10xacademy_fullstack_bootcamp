// Number occurring maximum times
// Given a list of N integers sorted in ascending order, Please find the number which occurs 4 times in the array

// Input
// First number is N (the number of integers given) Followed by the N numbers

// Output
// Print the number which occurs 4 times. print -1 if such a number doesnt exist

// Example
// Input: 10

// 1

// 2

// 3

// 4

// 4

// 4

// 4

// 5

// 6

// 6

// Output: 4




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
let array = []
for (i = 0; i < N; i++) {
   array[i] = parseInt(readLine())
}
let count = 0;
let current_count = 1;
for (i = 0; i < N; i++) {
	if (array[i] === array[i - 1]) {
		current_count = current_count + 1;
	} else {
		if (current_count === 4) {
			console.log(array[i - 1]);
			count = 1;
			break;
		}current_count = 1;
	}
} if (count === 0) {
	if (current_count === 4) {
		console.log(array[N - 1]);
	} else 
	console.log(-1);
}