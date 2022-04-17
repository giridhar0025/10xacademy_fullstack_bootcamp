// Transpose Matrix
// You are given m lists. Each list contains n elements. Represented as a matrix, this has m rows and n columns. Your task is to transpose the matrix and output the result.

// Write a function with name transposeMatrix which takes a matrix as list of lists as input returns a transposed matrix as list of lists.

// Matrix transpose
// Given a matrix:

//  a b c d

//  e f g h
// the transpose is:

//  a e
//  b f
//  c g
//  d h
// Input
// The first line contains m, denoting the number of lists

// This is followed by m lines each containing n integers separated by space

// Output
// n lines should contain each row of the matrix, with the elements separated by a space

// Example
// Input:

// 3

// 1 2 3 4

// 5 6 7 8

// 9 10 11 12

// Output:

// 1 5 9

// 2 6 10

// 3 7 11

// 4 8 12

// You just have. to return transformed matrix as a list, printing is taken care of by the judge.


let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// you should return a list of lists
function transposeMatrix(matrix){
	//implement this function
  let output = []
  for (let i = 0; i < matrix[0].length; i++) {
    let row = []
    for (let j = 0; j < matrix.length; j++) {
     row.push(matrix[j][i])
    }
    output.push(row.map(Number))
  }

  return output
}



// do not change anything below this line
let m = parseInt(readLine());
let matrix = [];
for(let index = 0; index < m; index++){
	let row=readLine().split(" ");
	matrix.push(row);
}
let result = transposeMatrix(matrix);
for(row of result){
	console.log(...row);
}