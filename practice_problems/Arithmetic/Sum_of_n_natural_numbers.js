// Sum of first n Numbers
// Given n, find the sum of first n integers.

// Input
// One Integer.

// Output
// One Integer.

// Example
// Input: 5

// Output: 15



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
sum_of_n_natural_numbers = n * (n + 1) / 2;
console.log(sum_of_n_natural_numbers)