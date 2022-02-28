// Arithmetics
// Given two integers a and b, print the following three lines as output.

// The first line contains the sum of the two numbers.
// The second line contains the difference of the two numbers (first - second).
// The third line contains the product of the two numbers.
// Input
// The first line contains the first integer, a. The second line contains the second integer, b.

// Output
// Print the three lines as explained above.

// Example
// Input:

// 3
// 2
// Output:

// 5
// 1
// 6
// Explanation:

// 3+2 => 5
// 3-2 => 1
// 3*2 => 6



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

let a = parseInt(readLine());
let b = parseInt(readLine());
sum_of_two_numbers = a + b;
difference_of_two_numbers = a - b;
product_of_two_numbers = a * b;
console.log(sum_of_two_numbers)
console.log(difference_of_two_numbers)
console.log(product_of_two_numbers)