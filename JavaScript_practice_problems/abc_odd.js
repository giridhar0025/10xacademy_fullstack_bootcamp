// abc odd
// You are given integers A and B, each between 1 and 3 (inclusive).

// Determine if there is an integer C between 1 and 3 (inclusive) such that A×B×C is an odd number.

// Constraints
// 1 <= A,B <= 3
// Input
// Two space separated integers, denoting A,B respectively.

// Output
// If there is an integer C between 1 and 3 that satisfies the condition, print Yes; otherwise, print No.

// Example
// Input1:

// 3 1
// Output1:

// Yes
// Explanation1:

// Let C = 3. Then, A×B×C = 3×1×3 = 9, which is an odd number..



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
let takeInput = readLine().split(" ")
let a = parseInt(takeInput[0]);
let b = parseInt(takeInput[1]); {
let check_number = a * b ;
if ((a >= 1 && a <= 3) && (b >=1 && b <= 3) && (check_number % 2 === 0)) {
    console.log("No");
    } else {
        console.log("Yes");
        }
    }