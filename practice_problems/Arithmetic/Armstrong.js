// Armstrong
// For a given 3 digit number, find whether it is armstrong number or not. An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. Print Yes if it is a armstrong number else print No.

// Input
// One integer, denoting the 3 digit number.

// Output
// One string, denoting Yes or No.

// Example
// Input1:

// 153
// Output1:

// Yes
// Explanation:

// 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153



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


let input_data = readLine();
let input_data_split = input_data.split("");
let first_integer = parseInt(input_data_split[0]);
let second_integer = parseInt(input_data_split[1]);
let third_integer = parseInt(input_data_split[2]);
let cube_first = ((first_integer) ** 3);
let cube_second = ((second_integer) ** 3);
let cube_third = ((third_integer) ** 3);
let result = cube_first + cube_second + cube_third;
   if (result.toString() === input_data) {
    console.log("Yes");
  }else {
    console.log("No")
  }
