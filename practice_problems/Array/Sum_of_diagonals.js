// Sum of Diagonals
// Description
// Given a square matrix, print the sum of all the numbers on both the diagonals.

// Input format
// First line contains a positive integer n, denoting the number of rows and columns It is followed by n lines. Each line contains space separated integers denoting elements of that row.

// Output format
// One line containing the sum of all the numbers on both the diagonals.

// Sample input
// 3
// 1 2 3
// 4 5 6
// 7 8 9
// Sample output
// 30
// Explanation
// First line is 3, i.e. 3 rows and 3 columns. We can see that there are 2 diagonals [1,5,9] and [3,5,7]. When we add all the numbers in both the diagonals, it comes up to 15 + 15 which is 30 which is our output



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
let matrix = [];
for(i=0;i<n;i++){
    let num = readLine().split(" ");
    matrix.push(num)
}

let sum_r = 0
let sum_l = 0
for (let i = 0; i < n; i++) {
    if (i === i) {
      sum_l = sum_l + parseFloat(matrix[i][i])
    } if (i + i === (n - 1)) {
      sum_r = sum_r + parseFloat(matrix[i][i])
  }
}
console.log(sum_l + sum_r);