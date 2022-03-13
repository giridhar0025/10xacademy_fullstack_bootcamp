// Area of rectangle
// Given length and breadth of a rectangle, compute the area of the rectangle.

// Input
// Two lines containing one integer each. First line contains the length and second line contains the breadth.

// Output
// One line containing one integer, which is the area of the given rectangle.

// Print 0 if no such rectangle exists.

// Example
// Input:

// 5

// 3

// Output:

// 15



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
let area_of_rectangle = parseInt(length * breadth);
if (length >= 0 && breadth >= 0)  {
   console.log(area_of_rectangle)
} 
else {
   console.log(0)
}
