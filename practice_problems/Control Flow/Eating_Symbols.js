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

let symbol_group = readLine()
let initial_mind = 0
for (let i = 0; i < symbol_group.length; i++) {
  if(symbol_group[i] === "+") {
    initial_mind = initial_mind + 1;
  } else if (symbol_group[i] === "-") {
    initial_mind = initial_mind - 1; 
  }
}
console.log(initial_mind);