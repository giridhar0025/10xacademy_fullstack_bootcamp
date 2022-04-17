// Interview
// Description
// Microsoft has come to hire interns from your college. N students got shortlisted out of which few were males and a few females. All the students have been assigned talent levels. Smaller the talent level, lesser is your chance to be selected. Microsoft wants to create the result list where it wants the candidates sorted according to their talent levels, but there is a catch. This time Microsoft wants to hire female candidates first and then male candidates.

// The task is to create a list where first all female candidates are sorted in a descending order and then male candidates are sorted in a descending order.

// Input
// The first line contains an integer N denoting the number of students. Next, N lines contain two space-separated integers, ai and bi.

// The first integer, ai will be either 1(for a male candidate) or 0(for female candidate).

// The second integer, bi will be the candidate's talent level.

// Output
// Output N space-separated integers, which first contains the talent levels of all female candidates sorted in descending order and then the talent levels of male candidates in descending order.

// Example
// Input:

// 5

// 0 3

// 1 6

// 0 2

// 0 7

// 1 15

// Output:

// 7 3 2 15 6

// Explanation
// As mentioned in the description, each line has two elements first element represents gender and second element represents talent of that individual.
// From the above input the talent of female candidates = [3, 2, 7].
// From the above input the talent of male candidates = [6, 15].
// Arranging the talent of female and male candidates in decreasing order will give talent array as [7, 3, 2] and [15, 6] respectively.
// The final resultant array will be concatination of both talents i.e., [7, 3, 2, 15, 6].



let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLinue() for taking input, it will read one line of from the input  and is stored in string format

let n = parseInt(readLine());
let output = [];
let female_c = []
let male_c = []
let arr_1 = []
for(let i = 0;i < n ; i++){
    let arr = readLine().split(" ");
    for(let j=0;j<arr.length;j++){
        arr[j] = parseInt(arr[j]);
    }
    arr_1.push(arr)
}
    for (let i = 0; i < arr_1.length; i++) {
        let j = 0
        if (arr_1[i][j] === 0) {
           female_c.push(arr_1[i][j + 1])
       } if (arr_1[i][j] === 1 ) {
           male_c.push(arr_1[i][j + 1])
       }
    }

console.log(...output.concat(female_c.sort((a,b) => b - a),male_c.sort((a,b) => b - a)))