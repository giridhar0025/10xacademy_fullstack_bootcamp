// prime checker function
// Write a function that takes a positive integer n and returns either True or False. It should return True when n is prime and False when n is not prime.

// Input
// One positive integer N

// Output
// One Boolean, denoting whether or not the given N is prime

// Example 1
// You have to fill in a function. That function takes input N as parameter.

// Input:

// 12

// Output:

// False

// Example 2
// Input:

// 2

// Output:

// True








let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// Following function takes integer and should return True if it's prime 
// otherwise  should return False.
function isPrime(number){
    // You can start below this
	let num_factors = 0
	for (i = 1; i <= number; i++) {
		if (number % i === 0) {
		num_factors = num_factors + 1;
		}
	 } if (num_factors === 2)  {
			return 'True'
		} else 
			return "False";
		}


//Please don't change anything below this line.
let number=parseInt(readLine());
console.log(isPrime(number));