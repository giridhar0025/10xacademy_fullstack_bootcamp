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
let counts = 0
for (i = 0; i <= n; i++) {
   let take_input = readLine();
   let check_num = parseInt(take_input[0]);
   if (i = check_num) {
     counts = counts + 1;
   }console.log(counts)
}


let n = parseInt(readLine());
let count = 1
for (i = 1 ; i <= n; i++) {
  if (i === i[1]) {
    count = count + 1;
    console.log(count)
  }
}
