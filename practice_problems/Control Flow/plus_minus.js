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
let sum_1 = 0;
let sum_2 = 0;
for(i = 0; i < n; i++) {
	let num = parseInt(readLine());
	if(i % 2 === 0) {
		sum_1 = sum_1 + num;
	}else
	sum_2 = sum_2 + num;
}console.log(sum_1 - sum_2)


//////////////////////////////////

let N = parseInt(readLine());
let array = [];
for (i = 0; i < N; i++) {
	array[i] = parseInt(readLine());
}
let even_sum = 0
let odd_sum = 0;
for (let i = 0; i < N; i++) {
	if (i % 2 === 0) {
		even_sum =  even_sum + array[i]
	} else {
		odd_sum = odd_sum + array[i];
	}
}console.log(even_sum - odd_sum)