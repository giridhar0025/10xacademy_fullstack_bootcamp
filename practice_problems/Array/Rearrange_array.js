// Rearrange Array
// Given two arrays of integers nums and index. Your task is to create target array under the following rules:

// Initially target array is empty.
// From left to right read nums[i] and index[i], insert the given value nums[i] at the given index (index[i]).
// Repeat the previous step until there are no elements to read in nums and index.
// Return the target array.

// It is guaranteed that the insertion operations will be valid.

// Input
// First line of the input denotes n, the size of the given arrays. The next n lines denotes the elements of the nums array and the next n elements denotes the elements of the index array.

// Output
// n lines, each containing a single element from the resultant array.

// Example
// Input:

// 5
// 0
// 1
// 2
// 3
// 4
// 0
// 1
// 2
// 2
// 1
// Output:

// 0
// 4
// 1
// 3
// 2
// Explanation:
// nums       index     target
// 0            0        [0]
// 1            1        [0,1]
// 2            2        [0,1,2]
// 3            2        [0,1,3,2]
// 4            1        [0,4,1,3,2]


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


let num_test = parseInt(readLine());
let arr = [];
let index_arr = []
for (let i = 0 ; i < num_test; i++) {
    arr[i] = parseInt(readLine())
}
for (let i = 0 ; i < num_test; i++) {
    index_arr[i] = parseInt(readLine())
}

let temp = [];
for (let i = 0; i < num_test; i++)  {
   temp.splice(index_arr[i], 0, arr[i])

} 
for (let i = 0; i < num_test; i++) {
    console.log(temp[i])
}