// Product & SUM
// Given an integer number N, return the difference between the product of its digits and the sum of its digits. Assume that the number N can never be negative number.

// Input
// One line containing the number N

// Output
// One line for the difference between product and sum

// Example
// Input: 234

// Output: 15

// Product of digits = 2 3 4 = 24 Sum of digits = 2 + 3 + 4 = 9 Result = 24 - 9 = 15

// Input: 4421

// Output: 21

// Product of digits = 4 4 2 * 1 = 32 Sum of digits = 4 + 4 + 2 + 1 = 11 Result = 32 - 11 = 21



let fs = require("fs");
const { parse } = require("path/posix");
const { resourceLimits } = require("worker_threads");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

// let input_data = readLine();
// let p = parseInt(input_data);
// let product = 1;
// let sum = 0;
// if(p >= 0) {
// for(let i = 0; i < input_data.length; i++) {
//     let m = input_data.split("");
//     let a = parseInt(m[i]);
//     product = product * a;
//     sum = sum + a;
//     }
// console.log(product - sum);
// }


let input_data = readLine();
let p = parseInt(input_data);
let product = 1;
let sum = 0;
if(p >= 0) {
for(let i = 0; i < input_data.length; i++) {
    let m = input_data.split("");
    let a = parseInt(m[i]);
    product = product * a;
    sum = sum + a;
    }
console.log(product - sum);
}