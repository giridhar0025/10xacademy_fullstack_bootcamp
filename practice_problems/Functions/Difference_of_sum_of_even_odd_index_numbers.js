// Difference of sum of Even Odd Index numbers
// Write a function which takes a list of positive integers and returns the difference of sum of numbers at even and odd index positions.

// Your function should take the list, sum all the numbers which are located at even index poistion of list and sum all the numbers which are located at odd index poistion of list and subtract odd postion sum from even position sum.

// you should name the function as differenceOfSumOfEvenOddIndexnumbers and it should take a list.

// Index of the list starts from 0.

// If list has only one element, then sum of odd = 0

// Input
// list of positive intergers

// Output
// Integer

// Example
// Input:

// [23,52,0,31,200]

// Output:

// 140

// Explanation

// sum of numbers which are located at even indices are : 23 + 0 + 200 = 223

// sum of numbers which are located at odd indices are : 52 + 31 = 83

// and the difference between the sum of numbers at even indices and odd indices is 223- 83 =140




let fs = require("fs");
const { parse } = require("path/posix");
const { resourceLimits } = require("worker_threads");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

// You should name your function as differenceOfSumOfEvenOddIndexnumbers
// It should take a list of integers
// Return an integer

function differenceOfSumOfEvenOddIndexnumbers(a) {
	let even_sum = 0
	let odd_sum = 0
	if(a.length > 0) {
		for(i = 0; i < a.length; i++) {
			if (i % 2 === 0) {
				even_sum = even_sum + a[i];
			} else {
				odd_sum = odd_sum + a[i];
			}
		}return (even_sum - odd_sum)
	}if (a.length === 0) {
		odd_sum = 0
        return (even_sum - odd_sum);
	}
}



// Do not change anything below this line
function ConvertToNumber(list){
	for(let each in list){
		list[each]=Number(list[each]);
	}
	
  }
  
  
  let numbers =readLine().split(" ");
  ConvertToNumber(numbers);
  console.log(differenceOfSumOfEvenOddIndexnumbers(numbers));