// Ranger Product
// Power Rangers S.P.D. is the thirteenth season of the American television series, Power Rangers. The Red ranger defines the ranger product as:

// An array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Red ranger asks blue ranger:

// Given an array nums of n integers where n > 0, print the ranger product array as space seperated values.

// If the array has only 1 element, print 1 as result.

// Being the friend of Blue ranger, can you help him to solve this?

// Note:
// Please solve it without division and in O(n).
// Elements of the array can be zero 0 as well.
// Input Format
// First line denotes the number of testcases.

// First line of each testcase denotes the size of the array nums.
// The next line contains the n elements as space seperated integers.
// Output Format
// One line for each testcase, denoting the result array as space-seperated integers.

// Sample Input
// 1
// 4
// 1 2 3 4
// Sample Output
// 24 12 8 6



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
let num = parseInt(readLine())
let arr = readLine().split(" ")
let output = []
for (let i =  0; i < num; i++) {
    arr[i] =  parseInt(arr[i])
} 
let left = [];
let right = new Array(arr.length).fill(0);
left[0] = 1;
right[right.length - 1] = 1 
for (let i = 1; i < arr.length; i++) {
    left[i] = arr[i - 1] * left[i - 1]
}
for(let i = arr.length - 2; i >= 0; i--) {
    right[i] = arr[i + 1] * right[i + 1];
}
for (let j = 0 ; j < arr.length; j++) {
    output[j] = left[j] * right[j];
}
console.log(...output)