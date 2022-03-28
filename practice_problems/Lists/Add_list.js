// Add lists
// On a far off planet called Imoohb, there is an intelligent life form called Aran. Arans use a number system called Lamiced which is similar to our decimal system. Lamiced uses same digits as decimal system, i.e., 0 to 9. But Lamiced arithmetic is different. When adding two integers, humans follow right-to-left approach. For example when adding 51 and 6, humans add the units place and then move on to tens place, i.e., 1 is added with 6, resulting in 7 and then 5 is added with 0 resulting in 5 and the final result is 57. Same is demonstrated below.

// 51
//  6
// --
// 57
// Arans do the reverse, i.e., they align the digits left-to-right and start adding from left-to-right, as follows.

// 51
// 6
// --
// 12
// Write a program that reads two integers and prints the output of Aran addition of the two integers.

// Input
// First line contains a positive integer n, denoting the number of test cases. It is followed by 2n lines. Each line contains space separated digits denoting Aaran integers. Each pair of lines constitutes one test case.

// Output
// n lines where each line contains an integer, denoting the result of Aran addition of the corresponding test case.

// Example
// Input:

// 3
// 2 5 2
// 4 2
// 1 4
// 2 9 5
// 1
// 9 9 9
// Output:

// 672
// 336
// 0001
// First line is 3, i.e. 3 test cases.

// 2 5 2 and 4 2 are the first test case. Adding 252 and 42 as per Aaran addition gives 672. So the first output line is 672.

// 1 4 and 2 9 5 are the second test case. Adding 14 and 295 as per Aaran addition gives 336. So the second output line is 336.

// 1 and 9 9 9 are the third test case. Adding 1 and 999 as per Aaran addition gives 0001. So the third output line is 0001.


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


function calculate(array1, array2) {
	let sum = 0;
	let num = 0;
	let i = 0;
	let result = ""
	while (i < array1.length && i < array2.length) {
		sum = parseInt(array1[i]) + parseInt(array2[i]) + num
		num = parseInt(sum/10)
		result = result + String(sum % 10)
		i++
	}
	while (i < array1.length) {
		sum = parseInt(array1[i]) + num
		num = parseInt(sum/10)
		result = result + String(sum % 10)
		i++
	}
	while (i < array2.length) {
		sum = parseInt(array2[i]) + num
		num = parseInt(sum/10)
		result = result + String(sum % 10)
		i++
	}
	if (num !== 0) {
		result = result + String(num)
	}
		console.log(result)
}




n = parseInt(readLine())
for(let i = 0; i < n; i++) {
	array1 = readLine().split(" ");
	array2 = readLine().split(" ");
	calculate(array1, array2)
}