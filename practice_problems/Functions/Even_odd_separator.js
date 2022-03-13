// Even Odd Separator
// Write a function which takes a list of positive integers and return a list with all the odd numbers at the start followed by even numbers.

// All the odd numbers should appear in the same order as they present, similarly the even number.

// Input
// A list of positive integers

// Output
// list of integers

// Example
// Input:

// [2,5,4,10,1,3,7,8,11,13,6]

// Output:

// [5,1,3,7,11,13,2,4,10,8,6]




let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
//Write a function with name evenOddSeparator
// This evenOddSeparator function should take a list of integers and return a list
// you can start from here	

function evenOddSeparator(list) {
	let even = []
	let odd = []
	for (i = 0; i < list.length; i++) {
		if (list[i]  % 2 === 0) {
			even.push(list[i])
		}else {
			odd.push(list[i])
		}
	}
	let output = odd.concat(even)
	return output
}


/// Do not change anything below this line
function ConvertToNumber(list){
  for(let each in list){
      list[each]=Number(list[each]);
  }
  
}



let numbers =readLine().split(" ");
ConvertToNumber(numbers);
let separated = evenOddSeparator(numbers);
for(num of separated){
  console.log(num);
}