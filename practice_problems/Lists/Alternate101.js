// Alternate 101
// You have been given an array of size N. You need to find the sum of alternate values in the given array, starting from the first element.

// Input
// One integer, denoting N, the size of the array. The next line contains N space seperated integers, denoting the elements of the given array.

// Output
// One Integer, denoting the required sum.

// Example
// Input1:

// 7
// 1 4 6 8 9 0 -34
// Output1:

// -18
// Explanation:

// 1 + 6 + 9 - 34 = -18




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

let num_test = parseInt(readLine());
let num = readLine().split(" ")
let sum = 0
let number_array = []

for (i = 0; i < num.length; i++) {
     number = parseInt(num[i])
     number_array.push(number)
}
for (i = 0; i < number_array.length; i++) {
  if (i % 2 === 0) {
    sum = number_array[i] + sum
  }
}



console.log(sum)