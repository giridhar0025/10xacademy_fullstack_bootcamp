// Alternate sort
// You are given an array A, you have to sort the array such that all the even position are sorted in Decreasing order and Odd position elements are sorted in increasing order. Odd and even positions are with respect to (0-based indexing). note-

// DO NOT place an even index element at odd position or vice-versa

// DO NOT use inbuilt sort function at any stage of the problem

// Input
// First line is T, denoting no, of arrays that follow. T lines follow containing the T arrays.

// 0<T<=200, 0< length of array<=2000, -10^5<A[i]<10^5

// Output
// Print all the arrays(on different lines) after performing the Alternate sort operations.

// Example
// Input: 2

// 1 2 3 4 5

// -1 3 2 5 5 1

// Output:

// 5 2 3 4 1

// 5 1 2 3 -1 5

// Explanation first array has 1 2 3 4 5 where even index elements are 1 3 5 hence they are sorted in reverse order i.e 5 3 1 in final array and even index elements are 2 4 which are sorted in increasing order in final array giving 5 2 3 4 1.




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

let t = parseInt(readLine());
while(t-- > 0) {
	let arr = readLine().split(" ");
	let even = [];
	let odd = [];
  for (let i = 0 ;i < arr.length; i++) {
	if (i % 2 === 0) {
		even.push(parseInt(arr[i]))
	} else {
		odd.push(parseInt(arr[i]))
	}
}
for (let i= 0; i < even.length; i++) {
	for (let j = 0; j < odd.length; j++) {
		if (even[j] < even[i]) {
			let t = even[i]
			even[i] = even[j];
			even[j] = t
		}
	}
}
for (let i= 0; i < odd.length; i++) {
	for (let j = 0; j < odd.length; j++) {
		if (odd[j] > odd[i]) {
			let t = odd[i]
			odd[i] = odd[j];
			odd[j] = t
		}
	}
}



let answer = [];
for (let i = 0 ; i < arr.length; i++) {
	if (i % 2 === 0) {
		answer.push(even[i / 2])
	} else {
		answer.push(odd[parseInt(i / 2)])
	}
}
console.log(...answer)
}
