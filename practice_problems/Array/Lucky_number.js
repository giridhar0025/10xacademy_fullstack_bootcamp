// Lucky Number
// Given a sorted array of n integers, a lucky integer is an integer which has a frequency in the array equal to its value.

// Return a lucky integer in the array. If there is no lucky integer return -1.

// If you have multiple lucky integers, please return the first lucky integer in the array (lucky number with the least index).

// Input
// First line contains a positive integer n, denoting the number of elements in the array. It is followed by n lines. Each line contains one integer denoting an element in the array.

// Output
// One line specifying the lucky integer in the array

// Example
// Input:

// 4
// 2
// 2
// 3
// 4
// Output:

// 2
// Explanation
// First line is 4, i.e. 4 elements in the array. The array is [2,2,3,4]. We can see that number 2 is repeating 2 times hence it is the lucky number which is our output

let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------


function findLuckyNumber(nums){
  // implement this function
  let count = 1;
for(let i = 0; i < nums.length - 1; i++){
      if(nums[i] == nums[i + 1]){
        count = count + 1
    } else {
      if (count === nums[i]) {
        return nums[i]
      }
      count = 1
    }
 }
 if(count === nums[nums.length - 1]){
  return nums[nums.length - 1]
 }
  return -1
}


// DO NOT change anything below this line
let numElems = parseInt(readLine());
let inputArr = [];
for(let index=0;index<numElems;index++){
  inputArr.push(parseInt(readLine()));
}
console.log(findLuckyNumber(inputArr));