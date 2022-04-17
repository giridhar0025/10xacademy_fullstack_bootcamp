// Noble Integer
// Given a list of integers A, find if an integer P exists in the list such that the number of integers greater than P in the list equals P.

// Input
// N number of elements in the list (N >= 2).

// N lines each line representing a single interger in the list

// Output
// 1 if such integer exists

// -1 if no such integer exists

// Example
// Input:

// 4

// 3

// 2

// 1

// 3

// Output:

// 1

// Here number of elements greater than 2 is 2.


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

let n = parseInt(readLine());
let num_array_1 = []
let status = false
for (let i = 0; i < n; i++) {
    num = parseInt(readLine())
    num_array_1.push(num)
}	
 for (let i = 0; i < n; i++) {
	 let count = 0
	 for (let j = 0; j < n; j++) {
       if (num_array_1[j] > num_array_1[i]) {
		   count = count + 1
	   }
	 }
	 if (count === num_array_1[i]) {
       console.log(1);
	   status = true
	   break;
    }
   }
  if (status === false) {
    console.log(-1)
  }