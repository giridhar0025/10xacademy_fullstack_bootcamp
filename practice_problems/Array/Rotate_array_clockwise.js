// Rotate Array Clockwise
// Write a function which takes an array Arr and a postive integer M and returns an array which is rotated clockwise M times.

// Input
// Arr List of numbers separated by spaces

// M in a single line

// Output
// Elements of the array in newline each after it is rotated M times.

// Example
// Input:

// 2 1 3 4 5 10

// 1

// Output:

// 1

// 3

// 4

// 5

// 10

// 2

// Explanation
// Here M = 1, which denotes the above array needs to rotate clockwise 1 time.

// rotates 1 step clockwise : [1, 3, 4, 5, 10, 2]

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

let arr = readLine().split(" ");
let int_arr = []
for (let i = 0; i < arr.length; i++) {
   int_arr.push(parseInt(arr[i]))
} 
let rot_times = parseInt(readLine());
for (let i = 0 ; i < rot_times; i++) {
    let num = int_arr.shift()
    int_arr.push(num)
  }
  for (let i = 0; i < int_arr.length; i++) {
    console.log(int_arr[i])
  }