const { count } = require("console");
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









let num = parseInt(readLine());
let input_array = [];
for(i = 0; i < num; i++) {
    input_array[i] = parseInt(readLine());
} 
for(i = 0; i < num; i++) {
  if(input_array[i] = input_array[i - 1] > 100) {
    console.log("True")
  } else {
    console.log("False")
  }
} 
