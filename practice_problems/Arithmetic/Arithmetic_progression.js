// Arithmetic Progression
// Given first 3 number of a arithmetic progression, predict the next number.

// For details about arithmetic progression, you can visit the following link https://en.wikipedia.org/wiki/Arithmetic_progression

// Input
// 3 integers, each should be taken as a input

// Output
// single integer

// Example
// Input:

// 2

// 5

// 8

// Output:

// 11



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

let first_number = parseInt(readLine());
let second_number = parseInt(readLine());
let d = second_number - first_number;
ap = first_number + (4 - 1) * d;
console.log(ap);