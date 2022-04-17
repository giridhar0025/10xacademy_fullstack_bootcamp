// Right to Left Diagonal
// Write a function rightToLeftDiagonal which takes a matrix (as a list of lists) and returns a list of numbers containing elements of the anti-diagonal of the given matrix.

// Input
// First line contains an integer (say m), which denotes the size of the matrix.

// This is followed by m lines, each containing m space separated elements.

// Output
// m lines containing one element each.

// Example
// Input:

// 4

// 1 2 3 4

// 5 6 7 8

// 9 10 11 12

// 13 14 15 16

// Output:

// 4

// 7

// 10

// 13


let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// name your function as rightToLeftDiagonal
function rightToLeftDiagonal() {
  let output = []
for (let i = 0 ; i < m; i++) {
  for (let j = 0; j < m; j++) {
    if (i + j == (m - 1)) {
      output.push(lst[i][j])
    }
  }
}
return output
}


// Do not change anything below this line
let m = parseInt(readLine());
let lst = [];
for(let val=0;val<m;val++){
  let row=readLine().split(" ");
  lst.push(row);
}
let res= rightToLeftDiagonal(lst);
for(val of res){
  console.log(val);
}