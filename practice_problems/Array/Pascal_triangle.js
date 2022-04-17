// Pascal Triangle
// Pascal’s triangle is a triangular array of the binomial coefficients. Write a function that takes an integer value N as input and prints Nth line of the Pascal’s triangle.

// Following is the representation of a pascal triangle of depth 5

// 1

// 1 1

// 1 2 1

// 1 3 3 1

// 1 4 6 4 1

// Refer to below link for more information

// https://en.wikipedia.org/wiki/Pascal%27s_triangle

// Input
// You will be given N, depth of the traingle

// Output
// Print pascal triangle cofficients at depth N

// Example
// Input:

// 4

// Output:

// 1

// 3

// 3

// 1

// At depth 4 the elements are 1 3 3 1.

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


let num = parseInt(readLine())
let prev_row = [1]
for (let i = 0; i <= num; i++) {
   let present_row =[];
   for (let j = 0; j < i; j++) {
      if (j === 0) {
		  present_row.push(1)
	  } else if (j === i - 1) {
		  present_row.push(1)
	  } else {
		  present_row.push(prev_row[j - 1] + prev_row[j])
	  } 
   }
   prev_row = present_row
 }
 for (let i = 0; i < num; i++) {
   console.log(prev_row[i])
 }