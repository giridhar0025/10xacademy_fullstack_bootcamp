// Extreme Product
// You have been given n integer values. You have to find their extreme product.

// Extreme product is defined as the product of the two extreme values in the given input, that is maximum and minimum.

// Input Format:
// First line denotes n, the number of inputs. The next n lines contains one integer in each line.

// Output Format:
// One integer denoting the extreme product of the given n values.

// Example:
// Input:

// 5
// 10
// 20
// 30
// 40
// 50
// Output:

// 500
// Explanation:

// From the given 5 integers, the maximum is 50, and the minimum is 10. So the extreme product is 10x50 = 500.




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
let input_array = []
let max = Infinity
let min = - Infinity
for (i = 0; i < n; i++) {
  let num = parseInt(readLine());
  input_array.push(num)
}
for (i = 0; i < input_array.length; i++) {
  if (input_array[i] < max) {
    max = input_array[i]
  }if (input_array[i] > min) {
    min = input_array[i]
  }
}

console.log(max * min)