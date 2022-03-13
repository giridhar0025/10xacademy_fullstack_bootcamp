const { reverse } = require("dns");
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
       // Solution Session Version
let n = parseInt(readLine())
let x = n;
if (n < 0) {
	n = n * -1
}
let rev = 0;
while (n > 0) {
	let d = n % 10
	rev = rev * 10 + d;
	n = Math.floor(n / 10)
}
if (x < 0)
console.log(-1 * rev);
else
console.log(rev);

// My Version 
let string = readLine();
let negative_integer = parseInt(string);
let split_string = string.split("");
let rev_string = split_string.reverse();
let new_rev_string = rev_string.join("")
let rev_integer = parseFloat(new_rev_string)
if (negative_integer > 0) {
console.log(rev_integer);
} if (negative_integer < 0) 
  console.log(rev_integer * -1);