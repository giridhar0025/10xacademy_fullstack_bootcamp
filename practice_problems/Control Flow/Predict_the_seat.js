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
for(let i = 1; i <= n; i++) {
  let input = readLine().split(" ")
  let b = parseInt(input[0]);
  let c = parseInt(input[1]);
  if (c <= b)  {
    if(c % 8 === 1 || c % 8 === 4) {
      console.log("L");
  } else if (c % 8 === 2 || c % 8 === 5) {
    console.log("M");
  } else if (c % 8 === 3 || c % 8 === 6) {
    console.log("U");
  } else if (c % 8 === 7) {
    console.log("SL");
  } else if (c % 8 === 0) {
    console.log("SU");
  }
} else {
    console.log("Invalid");
}
}