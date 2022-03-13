// Triangle Angle
// Given two integers a and b denoting the two angles of triangles (in degrees), find the third angle of the triangle (in degrees).

// Note: The given angles will always be of a valid triangle.

// Input
// First line contains an integer denoting a, the first angle.

// Second line contains an integer, denoting b, the second angle.

// Output
// One Integer, denoting the third angle of the triangle.

// Example
// Input:

// 30
// 110
// Output:

// 40



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

let first_angle = parseInt(readLine());
let second_angle = parseInt(readLine());
let total_angle = 180;
x = first_angle + second_angle;
third_angle = total_angle - x;
console.log(third_angle)


