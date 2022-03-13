// Simple interest
// Simple interest formula is given by: Simple Interest = (P x T x R)/100 Where, P is the principle amount T is the time and R is the rate. Compute simple interest for given P, T and R.

// Input
// Three lines containing integer each.

// Output
// One line containing integer.

// Example
// Input:

// 1000

// 10

// 5

// Output: 500



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

let principleAmount = readLine()
let time = readLine()
let rate = readLine()
simple_interest = (principleAmount * time * rate)/100
console.log(simple_interest)
