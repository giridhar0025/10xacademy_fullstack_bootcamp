// Train
// There is an N-car train.

// You are given an integer i. Find the value of j such that the following statement is true: "the i-th car from the front of the train is the j-th car from the back."

// Constraints
// 1 <= i <= N
// Input
// Two space separated integers, denoting N,i respectively.

// Output
// One integer, denoting j.

// Example
// Input1:

// 4 2
// Output1:

// 3
// Explanation1:

// The second car from the front of a 4-car train is the third car from the back.



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

let takeInput = readLine().split(" ");
number_of_cars = parseInt(takeInput[0]);
number_of_car_from_front = parseInt(takeInput[1]);
let number_of_car_from_back = (number_of_cars - number_of_car_from_front) + 1;
if (number_of_cars >= 1 && number_of_car_from_front >= 1) {
    console.log(number_of_car_from_back);
}