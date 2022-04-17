// Matrix 101
// You have been given a matrix (2D array) of size n x m (n rows and m columns).

// You need to find the sum of all odd numbers in the given matrix.

// Input
// The first line contains two integers denoting n and m respectively. The next line n lines contains m space seperated integers each, denoting the elements of the given matrix.

// Output
// One Integer, denoting the required sum.

// Example
// Input1:

// 3 4
// 1 2 3 4
// 5 6 7 8
// 9 0 5 3
// Output1:

// 33
// Explanation:

// matrix =   [[1, 2, 3, 4],
//             [5, 6, 7, 8],
//             [9, 0, 5, 3]]

// Sum of all odd elements = 1 + 3 + 5 + 7 + 9 + 5 + 3 = 33


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

let n_m = readLine().split(" ");
let n = parseInt(n_m[0]);
let m = parseInt(n_m[1]);
let matrix = []
let sum = 0
for (let i = 0; i < n; i++) {
   matrix[i] = readLine().split(" ")
}
for (let i = 0; i < n; i++) {
	for (let j = 0; j < m; j++) {
	matrix[i][j] = parseInt(matrix[i][j])
	}
}

for (let i = 0; i < n; i++) {
	for (let j = 0; j < m; j++) {
	if (matrix[i][j] % 2 !== 0) {
      sum = matrix[i][j] + sum
	}
	}
}

console.log(sum)