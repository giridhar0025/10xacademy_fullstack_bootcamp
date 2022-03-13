// String Repeat
// Write a function that takes in a string s and a positive integer n, and returns a replicated string r such that r is n times s with space in between.

// Input
// Function takes string S and integer N indicating how many times the S should be repeated.

// Output
// return str , the required string.

// Example
// Input:

// abc

// 3

// Output:

// abc abc abc




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

// Do not change the function signature
// Fill in the function 
// inputString will be string like 'abc'
// repeat will be an int like 3
// return 'abc abc abc'

function stringRepeat (inputString, repeat){
    // Write from here
	let input = "";
    if (repeat > 0) {
		for (i = 0; i < repeat; i++) {
			input = input + " " + inputString;
			
		}
		return input;
	}
}







// Please don't change anything below this line.
// You don't have to worry about reading input, just fill the function above.

let inputString = readLine();
let inputNumber = parseInt(readLine());
console.log(stringRepeat(inputString, inputNumber));