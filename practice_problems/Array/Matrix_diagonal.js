// Matrix Diagonal
// Write a function which takes a 2 dimentional array of size nxn where n > 0 and changes its diagonal according to the following conditions

// if an element e < 0 replace it with 0
// If element e >= 0 replace it with 1
// Input
// The first line contains n, denoting the number of lists.

// This is followed by n lines. Each line contains n integers separated by a space

// Output
// n lines, each line representing a list of numbers separated by a space.

// Example
// Input:

// 4

// 2 0 1 4

// 0 -1 1 10

// 0 0 0 0

// 1 2 3 4

// Output:

// 1 0 1 4

// 0 0 1 10

// 0 0 1 0

// 1 2 3 1



let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// name your function as changeDiagonal and it should take list as input
function changeDiagonal(list) {
  for (let i = 0 ; i < n; i++) {
    for (let j = 0 ; j < n; j++) {
      if (i === j) {
        if (list[i][j] >= 0) {
          list[i][j] = 1
        } else if (matrix[i][j] < 0) {
          list[i][j] = 0
        }
      }
    }
  }
  return list
}

// Do not change anything below this line.

//Converting string to intger
function ConvertoInteger(arr){
	for(let index=0;index<arr.length;index++){
		arr[index]=parseInt(arr[index]);
	}
	return arr;
}


let n = parseInt(readLine());
let matrix = [];
for(let index=0;index<n;index++){
  let row=readLine().split(" ");
  row = ConvertoInteger(row);
  matrix.push(row);
}
let newMatrix = changeDiagonal(matrix);
for(row of newMatrix){
  console.log(...row);
}