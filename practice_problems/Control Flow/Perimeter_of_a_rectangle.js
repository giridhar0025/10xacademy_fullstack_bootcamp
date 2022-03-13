// Perimeter of a Rectangle
// Given the length and breadth of a rectangle, compute and print its perimeter. If no such rectangle exists print 0.

// Input
// Two lines containing one integer each

// Output
// One line containing one integer

// Example
// Input:

// 7

// 3

// Output:

// 20



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

let length = parseInt(readLine());
let breadth = parseInt(readLine());
let perimeter_of_rectangle = 2 * (length + breadth);
if (length > 0 && breadth > 0) {
    console.log(perimeter_of_rectangle)
} else {
    console.log(0)
}
