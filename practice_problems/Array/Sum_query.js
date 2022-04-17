// Sum query
// You are given an array of N numbers and q queries. Each query contains 2 integers, say L and R. The answer to the query is the sum of the elements between the indices L and R (both inclusive).

// Input
// First line contains 2 space separated integers N and q. Second line contains N space separated integers. Next q lines contain 2 space separated integers.

// Output
// q lines containing one integer each, denoting the answer corresponding to each query.

// Example
// Input:

// 5 2

// 20 -5 33 0 87

// 2 4

// 0 3

// Output:

// 120

// 48



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

let input = readLine().split(" ");
let n = parseInt(input[0]);
let q = parseInt(input[1]);
let arr = readLine().split(" ")
for (let i = 0; i < n; i++) {
    arr[i] = parseInt(arr[i])
}

for (let i = 0; i < q; i++) {
    let sum = 0
    let query = readLine().split(" ");
    let start = parseInt(query[0]);
    let end = parseInt(query[1])
      for (let j = start ; j <= end; j++) {
        sum = sum + arr[j]
    }
    console.log(sum)
}