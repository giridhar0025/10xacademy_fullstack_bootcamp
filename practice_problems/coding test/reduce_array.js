// Reduce Array
// You are given a list of integers. Your task is to reduce the list to a single integer. Following are the rules to do this reduction:

// [ADD] Sum first two numbers and result is m
// [SUB] Say third number is e3, subtract e3 from this: m-e3
// [ADD] Say fourth number is e4, add to previous result: m-e3+e4
// [SUB] Subtract next number from the previous result
// [ADD] Add next number to previous result and so on
// until you reach the end of the list
// the result at this point is the output of the problem
// Input
// First line is n, denoting the number of elements in the list

// This is followed by n lines, one integer on each line

// Output
// One integer indicating the output

// Example
// Input:

// 5

// 1

// 2

// -1

// 5

// 10

// Output:

// -1

// Explanation
// First line is 5, indicating 5 elements in the list

// The 5 elements follow in the next 5 lines: 1,2,-1,5,10

// First add, 1+2=3

// Next subtract, 3-(-1)=4

// Next add, 4+5=9

// Next subtract, 9-10=-1

// No more elements, result is -1

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
let arr = []
counter = 1;
for (let i = 0; i < n; i++) {
   num = parseInt(readLine())
   arr.push(num)
}
let reduceFunction = function(a, b) {
    if (counter % 2 === 1) {
        counter = counter + 1
        return a + b
    } else {
        counter = counter + 1
        return a - b
    }
}
let reduce_array = arr.reduce(reduceFunction) 
console.log(reduce_array);


