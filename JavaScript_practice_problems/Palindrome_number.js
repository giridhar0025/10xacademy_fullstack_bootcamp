// Palindrome Number
// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward

// Input
// 1 containing integer

// Output
// 1 line containing either "True" or "False"

// Example
// Input: 121

// Output: True

// Input: 10

// Output: False



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

let num_of_integers = readLine();
let split_integers = num_of_integers.split("");
if ((parseInt(split_integers)) === (parseInt(split_integers.reverse()))) {
  console.log("True");
} else {
  console.log("False")
}