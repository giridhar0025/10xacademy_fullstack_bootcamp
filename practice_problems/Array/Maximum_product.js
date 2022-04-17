// Maximum Product
// You are given a list of integers. Find the maximum product that can be obtained from multiplying adjacent integers in the list.

// Input
// First line contains n, indicating the number of elements in the list.

// This is followed by n lines each containing an integer.

// Output
// One integer indicating the maximum product achievable from adjacent elements of the list.

// Example
// Input:

// 4

// 1

// 3

// 4

// 10

// Output:

// 40

// Explination:

// First line of input contains 4 indicating there are 4 elements in the list

// The next four lines contain the elements of the list: 1,3,4,10

// The possible products we can obtains is 1x3=3, 3x4=12, 4x10=40 where 40 is the maximum


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
let num_array = []
for (let i = 0; i < n; i++) {
	num = parseInt(readLine())
	num_array.push(num)
}
product = 0;
max_product = -Infinity
for (let i = 0; i < num_array.length; i++) {
	product = num_array[i] * num_array[i + 1]
	if (product > max_product) {
		max_product = product
	}
}
console.log(max_product)