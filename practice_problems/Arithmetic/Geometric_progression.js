// Geometric Progression
// Given first 3 numbers of a geometric progression, predict the next number.

// You can refer to the following link for information about geometric preogression

// https://en.wikipedia.org/wiki/Geometric_progression

// Input
// 3 integers should be taken as a input

// Output
// single integer.

// Note: Convert the output to integer

// Example
// Input:

// 2

// 4

// 8

// Output:

// 16



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
let first_term = parseInt(readLine());
let second_term = parseInt(readLine());
let third_term = parseInt(readLine());
let n = 4;
r = (second_term / first_term);
fourth_term = parseInt(first_term * (r ** (n - 1)));
console.log(fourth_term)