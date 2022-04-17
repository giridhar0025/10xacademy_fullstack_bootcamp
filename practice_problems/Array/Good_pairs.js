// Good Pairs
// Given an array of integers nums (length of nums > 1).

// A pair (i,j) is called good if nums[i] == nums[j] and i < j.

// Return the number of good pairs.

// Input
// Single line containing a list of numbers separated by spaces

// Output
// Single integer representing total number of good pairs

// Example
// Input:

// 1 2 3 1 1 3

// Output:

// 4

// Explanation:
// (0,3), (0,4), (3,4), (2,5) index position elements


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

let num = readLine().split(" ");
let input = []
for (i = 0; i < num.length; i++) {
  input.push(parseInt(num[i]))
}
  let count = 0;
  for (i = 0; i < input.length; i++) {
    for (j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        count = count + 1
      }
    }
  }
  console.log(count);