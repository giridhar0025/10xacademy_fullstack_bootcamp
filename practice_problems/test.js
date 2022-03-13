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

let first_line = readLine().split(" ");
let n = parseInt(first_line[0]);
let x = parseInt(first_line[1]);
let input_num = readLine().split(" ");
let count = 0;
for (i = 0; i < n; i++) {
	if (input_num[i] % x === 0) {
		count = count + 1
	}
}
console.log(count)