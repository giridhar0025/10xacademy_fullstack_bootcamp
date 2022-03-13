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
let count_1 = 0;
let count_2 = 0;
for(let i = 1;i <= num; i++) {
  let num_1 = parseInt(readLine());
  if (num_1 % 2 === 0)  {
     count_1 = count_1 + 1
  } else {
     count_2 = count_2 + 1
  }
}console.log(count_2);
console.log(count_1);
  