// Travel Time
// john is travelling from Hyderabad to Bangalore on a car. Assume the distance from Hyderabard to Banglore is 600kms, you will be given the average speed of Bharath's car and you have to calculate the travel time.

// Input
// single integer - speed of car in km/hr

// Output
// single integer

// Note: return only the integer part, incase the time is decimal.

// Example
// Input-1:

// 60

// Output-1:

// 10

// Input-2:

// 80

// Output-2:

// 7



const { Console } = require("console");
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

let distance = 600;
let speed = parseInt(readLine());
travel_time = parseInt(distance / speed);
console.log(travel_time)