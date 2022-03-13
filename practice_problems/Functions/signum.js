// signum
// A signum function returns 1 for numbers greater than zero and -1 for numbers less than zero and 0 for an input of 0. Write a signum implementation that takes a float N and returns an integer.

// Input
// One line containing a decimal number.

// N

// Output
// One integer, denoting the output value.

// Example
// Input:

// -0.87

// Output:

// -1




let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// Fill in the following function.
// Please do not change the function name.
function signum(number){
    // you can start from here.
	let output;
    if (number > 0) {
		output = 1
	}if (number < 0) {
		output = -1 
	}if (number === 0) {
		output = 0
	}
	return output;
}



// Please do not edit the code below this line.

let testInput = parseFloat(readLine());
console.log(signum(0));