let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line ed in string format

let num_test = parseInt(readLine());
for (i = 1; i<= num_test; i++) {
	let num = parseInt(readLine());
	if(num > 2)
	if (num % i === 0) {
		console.log("No")
	} if(num === 2 || num % i !== 0) {
		console.log("Yes")
	}
}

///////////////////////////////////////////////////////



let num_test = parseInt(readLine());
for (i = 0; i < num_test; i++) {
	input = parseInt(readLine())
    let prime = true;
   for (j = 2; j < input; j++) {
	if (input % j == 0) {
     prime = false;
	 break;
	}
}
if (prime == true && input > 1) {
	console.log("Yes")
} else {
	console.log("No")
}
}