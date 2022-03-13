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

let num_group = (readLine()).split(" ");
let num_1 = parseInt(num_group[0]);
let num_2 = parseInt(num_group[1]);
let sum = num_1 + num_2;
let sum_2 = sum % 12;
let sum_3 = sum - 12;
if (sum <= 12) {
console.log(sum);
} else if (sum > 12 && sum < 24) {
  console.log(sum_3)
} else (sum > 24) 
  console.log(sum_2)


  ///////////////////////////////////////


let num_input = readLine().split(" ");
let x = parseInt(num_input[0]);
let y = parseInt(num_input[1]);
let sum_of_two = x + y;
 if (sum_of_two % 12 === 0) {
  console.log(12);
} else 
	console.log(sum_of_two % 12);


